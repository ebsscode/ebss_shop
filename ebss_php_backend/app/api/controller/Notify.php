<?php
namespace app\api\controller;
use app\Basic;
use app\service\system\ConfigsService;
use EasyWeChat\Pay\Message;
use think\facade\Config;
use think\facade\Db;
class Notify extends Basic
{
    public function wxpay(){
        table('sys_debug')->insert([
            'msg'=>'微信支付处理1',
            'data'=>encodeJson($this->param()),
            'add_time'=>date('Y-m-d H:i:s'),
        ]);
        try {
            $config = [
                'mch_id' => ConfigsService::get('wx_pay_mch_id'),
                'private_key' => PROJECT_ROOT.'/../extend/wx/apiclient_key.pem',
                'certificate' => PROJECT_ROOT.'/../extend/wx/apiclient_cert.pem',
                'secret_key' => ConfigsService::get('wx_pay_api_v3_key'),
                'v2_secret_key' => ConfigsService::get('wx_pay_api_v2_key'),
            ];
            $app = new \EasyWeChat\Pay\Application($config);
            $server = $app->getServer();
            $server->handlePaid(function (Message $message, \Closure $next) use($server) {
                table('sys_debug')->insert([
                    'msg'=>'微信支付处理2',
                    'data'=>'',
                    'add_time'=>date('Y-m-d H:i:s'),
                ]);
//                $out_trade_no = $message->out_trade_no;
//                $paylog=table('paylog')->where('pay_order_sn',$out_trade_no)->find();
//                if($paylog&&$paylog['is_pay']==0){
//                      \app\service\payment\Payment::handlePaySuccess($paylog,$message->toArray());
//                }
                return $next($message);
            });
        }catch (\Exception $e){
            table('sys_debug')->insert([
                'msg'=>'微信支付处理出错-Exception',
                'data'=>$e->getMessage(),
                'add_time'=>date('Y-m-d H:i:s'),
            ]);
        }catch (\Error $e){
            table('sys_debug')->insert([
                'msg'=>'微信支付处理出错-Error',
                'data'=>$e->getMessage(),
                'add_time'=>date('Y-m-d H:i:s'),
            ]);
        } catch (\Throwable $e) {
            table('sys_debug')->insert([
                'msg'=>'微信支付处理出错-Throwable',
                'data'=>$e->getMessage(),
                'add_time'=>date('Y-m-d H:i:s'),
            ]);
        }
        return json(['code' => 'SUCCESS', 'message' => '成功']);
    }
    public function alipay(){
        try {
            \Alipay\EasySDK\Kernel\Factory::setOptions(getAliPayOptions($this->param('app_id')));
            $verifyNotify = \Alipay\EasySDK\Kernel\Factory::payment()->common()->verifyNotify($this->request->param());
            $paylog=table('log_pay')->where('pay_order_sn',$this->param('out_trade_no'))->find();
            if($paylog&&$paylog['is_pay']==0){
                \app\service\payment\PaymentService::handlePaySuccess($paylog,$this->request->param());
            }
        }catch (\Exception $e){
            table('sys_debug')->insert([
                'msg'=>'支付宝处理出错-Exception',
                'data'=>$e->getMessage(),
                'add_time'=>date('Y-m-d H:i:s'),
            ]);
        }catch (\Error $e){
            table('sys_debug')->insert([
                'msg'=>'支付宝处理出错-Error',
                'data'=>$e->getMessage(),
                'add_time'=>date('Y-m-d H:i:s'),
            ]);
        }
        return "success";
    }

}
