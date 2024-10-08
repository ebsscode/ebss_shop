<?php
namespace app\api\controller;
use app\Logined;
use app\service\system\ConfigsService;
use think\facade\Config;
use think\facade\Db;
use think\facade\View;
class Pay extends Logined
{
    public function get_busi_paylog()
    {
        $busi_table_id = (int)input('param.busi_table_id');
        $type = (string)input('param.type');
        $paylog = table('log_pay')->where('busi_table_id', $busi_table_id)->where('type', $type)->find();
        if (!$paylog) {
            return $this->error('获取支付数据失败');
        }
        return $this->success('请求成功', ['paylog_id' => $paylog['paylog_id']]);
    }
    public function wxpay_jsapi()
    {
        $paylog = table('log_pay')->where('paylog_id', $this->param('paylog_id'))->find();
        if (!$paylog) {
            return $this->error('支付日志未找到');
        }
        if ($paylog['is_pay']) {
            return $this->error('此订单已支付');
        }
        $config = [
            'mch_id' => ConfigsService::get('wx_pay_mch_id'),
            'private_key' => ConfigsService::get('wx_apiclient_key_pem'),
            'certificate' => ConfigsService::get('wx_apiclient_cert_pem'),
            'secret_key' => ConfigsService::get('wx_pay_api_v3_key'),
            'v2_secret_key' => ConfigsService::get('wx_pay_api_v2_key'),
        ];
        $app = new \EasyWeChat\Pay\Application($config);
        $api = $app->getClient();
        $response = $api->postJson('/v3/pay/transactions/jsapi', [
            "appid" => ConfigsService::get('wx_xcx_app_id'),
            "mchid" => ConfigsService::get('wx_pay_mch_id'),
            "description" => $paylog['desc'],
            "out_trade_no" => $paylog['pay_order_sn'],
            "notify_url" => $this->request->domain() . '/index/notify/wxpay',
            "amount" => ['total' => 2, 'currency' => 'CNY'],
            "payer" => ['openid' => $this->user_info['openid']],
        ]);
        $res = $response->toArray();
        if (empty($res['prepay_id'])) {
            return $this->error('生成支付数据出错', ['$res' => $res]);
        }
        $utils = $app->getUtils();
        $config = $utils->buildBridgeConfig($res['prepay_id'], ConfigsService::get('wx_xcx_app_id'), "RSA");
        return $this->success('请求成功', [
            'pay_data' => $config,
            'notify_url' => $this->request->domain() . '/index/notify/wxpay',
        ]);
    }
    public function alipay_web()
    {
        $redirect_url = $this->param('redirect_url');
        $debug = [];
        $paylog = table('log_pay')->where('paylog_id', $this->param('paylog_id'))->find();
        if (!$paylog) {
            return $this->error('支付日志未找到');
        }
        if ($paylog['is_pay']) {
            return $this->error('此订单已支付');
        }
        \Alipay\EasySDK\Kernel\Factory::setOptions(getAliPayOptions('web'));
        $pay_data=null;
        try {
            $result = \Alipay\EasySDK\Kernel\Factory::payment()->wap()->pay($paylog['desc'], $paylog['pay_order_sn'], "0.01",$this->request->domain(),$this->request->domain().$redirect_url);
            $responseChecker = new \Alipay\EasySDK\Kernel\Util\ResponseChecker();
            if ($responseChecker->success($result)) {
                $debug[]="调用成功";
                $pay_data = $result->toMap();
            } else {
                $debug[]="调用失败：";
            }

        } catch (\Exception $e) {

            $debug[]="Exception，原因：". $e->getMessage();
        }
        View::assign('pay_data',$pay_data['body']);
        return View::fetch();
    }
    public function alipay_jsapi(){
        $debug = [];
        $paylog = table('log_pay')->where('paylog_id', $this->param('paylog_id'))->find();
        if (!$paylog) {
            return $this->error('支付日志未找到');
        }
        if ($paylog['is_pay']) {
            return $this->error('此订单已支付');
        }
        \Alipay\EasySDK\Kernel\Factory::setOptions(getAliPayOptions('miniapp'));
        $response = \Alipay\EasySDK\Kernel\Factory::payment()->common()->create($paylog['desc'], $paylog['pay_order_sn'], "0.01","",$this->user_info['openid'])->toMap();
        if(empty($response['http_body'])){
            return $this->error('支付订单创建失败1',[
                '$response'=>$response,
            ]);
        }
        $http_body = decodeJson($response['http_body']);
        if(empty($http_body['alipay_trade_create_response']['trade_no'])){
            return $this->error('支付订单创建失败2',[
                '$http_body'=>$http_body,
            ]);
        }
        return $this->success('请求成功', [
            'debug' => $debug,
            'pay_data' => $http_body['alipay_trade_create_response']['trade_no'],
        ]);
    }
    public function balance(){
        $debug = [];
        $paylog = table('log_pay')->where('paylog_id', $this->param('paylog_id'))->find();
        if (!$paylog) {
            return $this->error('支付日志未找到');
        }
        if ($paylog['is_pay']) {
            return $this->error('此订单已支付');
        }
        if ($paylog['money']>$this->user_info['money']) {
            return $this->error('余额不足');
        }
        $res = table('sys_user')->where('user_id',$this->user_id)->dec('money',$paylog['money']);
        if($res){
            table('log_money')->insert([
                'user_id'=>$this->user_id,
                'log_type'=>3,
                'up_or_down'=>2,
                'change_num'=>$paylog['money'],
                'before_num'=>$this->user_info['money'],
                'after_num'=>$this->user_info['money']+$paylog['money'],
                'title'=>$paylog['desc'],
            ]);
            \app\service\payment\PaymentService::handlePaySuccess($paylog);
            return $this->success('支付成功');
        }else{
            return $this->error('支付失败');
        }
    }
    public function zero_pay(){
        $debug = [];
        $paylog = table('log_pay')->where('paylog_id', $this->param('paylog_id'))->find();
        if (!$paylog) {
            return $this->error('支付日志未找到');
        }
        if ($paylog['is_pay']) {
            return $this->error('此订单已支付');
        }
        if ($paylog['money']>0) {
            return $this->error('金额不正确');
        }
        \app\service\payment\PaymentService::handlePaySuccess($paylog);
        return $this->success('支付成功');
    }
    public function alipay_app()
    {
        $debug = [];
        $paylog = table('log_pay')->where('paylog_id', $this->param('paylog_id'))->find();
        if (!$paylog) {
            return $this->error('支付日志未找到');
        }
        if ($paylog['is_pay']) {
            return $this->error('此订单已支付');
        }
        \Alipay\EasySDK\Kernel\Factory::setOptions(getAliPayOptions('app'));
        $pay_data=null;
        try {
            //2. 发起API调用（以支付能力下的统一收单交易创建接口为例）
            $result = \Alipay\EasySDK\Kernel\Factory::payment()->app()->pay($paylog['desc'], $paylog['pay_order_sn'], "0.1");
            $responseChecker = new \Alipay\EasySDK\Kernel\Util\ResponseChecker();
            //3. 处理响应或异常
            if ($responseChecker->success($result)) {
                $debug[]="调用成功";
                $pay_data = $result->toMap();
            } else {
                $debug[]="调用失败：";
            }
        } catch (\Exception $e) {
            $debug[]="Exception，原因：". $e->getMessage();
        }
        return $this->success('请求成功', [
            'debug' => $debug,
            'pay_data' => $pay_data,
        ]);
    }

}
