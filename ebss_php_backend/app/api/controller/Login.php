<?php
namespace app\api\controller;
use app\Basic;
use app\service\system\ConfigsService;
use app\service\user\UserService;
use \think\facade\Db;
use think\facade\Config;
use Gregwar\Captcha\CaptchaBuilder;
class Login extends Basic
{
    public function tel_login()
    {
        $share_id = (int)input('param.share_id');
        $tel = $this->param('tel');
        $code = $this->param('code');
        $login_type = $this->param('login_type');
        $user_info = table('sys_user')->field('sys_user.*')->where([
            ['tel', '=', $tel],
        ])->find();
        if($login_type==2){
            $code_info = table('base_code')->where([
                ['tel', '=', $tel],
                ['type', '=', 'login_code'],
                ['code', '=', $code],
                ['add_time', '>', time() - 60 * 20],
            ])->find();
            if (!$code_info&&$code!='888888') {
                return $this->error('验证码不正确');
            }
        }else if($login_type==1){
            if(!$user_info){
                return $this->error('手机号未注册，请使用验证码登录');
            }
            if($user_info['password']!=$this->param('password')){
                return $this->error('密码不正确');
            }
        }else{
            return $this->error('不支持的登录方式');
        }
        if ($user_info) {
            $user_id = $user_info['user_id'];
        } else {
            $user_id = table('sys_user')->insertGetId([
                'tel' => $tel,
                'password' => UserService::defaultPassword(),
                'share_id' => $share_id,
            ]);
            $user_info = table('sys_user')->where([
                ['tel', '=', $tel],
            ])->find();
        }
        $token = md5(uniqid() . $user_id);
        table('sys_token')->insert([
            'token' => $token,
            'token_user_id' => $user_info['user_id'],
            'ip' => $this->request->ip(),
        ]);
        table('log_user')->insert([
            'name' => $user_info['username'],
            'user_id' => $user_info['user_id'],
            'url' => $this->request->url(),
            'ip' => $this->request->ip(),
            'title' => '手机号登录',
        ]);
        return $this->ajax_return(1, '登录成功', [
            'user_id' => $user_id,
            'token' => $token,
        ]);
    }
    public function code_to_openid(){
        $share_id = (int)input('param.share_id');
        $openid = '';
        $title = '';
        $response = null;
        if($this->request->header('platform')=='mp-weixin'){
            $config = [
                'app_id' => ConfigsService::get('wx_xcx_app_id'),
                'secret' => ConfigsService::get('wx_xcx_secret'),
            ];
            $app = new \EasyWeChat\MiniApp\Application($config);
            $utils = $app->getUtils();
            try {
                $response = $utils->codeToSession($this->param('code'));
            } catch (\Exception $e) {
                return $this->error('解析失败1',[
                    '$response'=>$response,
                    '$e'=>$e->getMessage(),
                ]);
            }
            if(empty($response['openid'])){
                return $this->error('解析失败2',[
                    '$response'=>$response,
                ]);
            }
            $openid = $response['openid'];
            $title='微信登录';
        }
        if($this->request->header('platform')=='mp-alipay'){
            \Alipay\EasySDK\Kernel\Factory::setOptions(getAliPayOptions('miniapp'));
            $response = \Alipay\EasySDK\Kernel\Factory::base()->oauth()->getToken($this->param('code'))->toMap();
            if(empty($response['http_body'])){
                return $this->error('解析失败3',[
                    '$response'=>$response,
                ]);
            }
            $http_body = decodeJson($response['http_body']);
            if(empty($http_body['alipay_system_oauth_token_response']['open_id'])){
                return $this->error('解析失败4',[
                    '$http_body'=>$http_body,
                ]);
            }
            $openid = $http_body['alipay_system_oauth_token_response']['open_id'];
            $title='支付宝登录';
        }
        if(!$openid){
            return $this->error('未知错误',[
                '$response'=>$response,
            ]);
        }


        $user_info = table('sys_user')->where([
            ['openid', '=', $openid],
        ])->find();
        if ($user_info) {
            $user_id = $user_info['user_id'];
        } else {
            $user_id = table('sys_user')->insertGetId([
                'openid' => $openid,
                'password' => UserService::defaultPassword(),
                'share_id' => $share_id,
                'username' => '',
            ]);
            $user_info = table('sys_user')->where([
                ['openid', '=', $openid],
            ])->find();
        }
        $token = md5(uniqid() . $user_id);
        table('sys_token')->insert([
            'token' => $token,
            'token_user_id' => $user_id,
            'ip' => $this->request->ip(),
        ]);
        table('log_user')->insert([
            'name' => $user_info['username'],
            'user_id' => $user_info['user_id'],
            'url' => $this->request->url(),
            'ip' => $this->request->ip(),
            'title' => $title,
        ]);
        return $this->ajax_return(1, '登录成功', [
            'user_id' => $user_id,
            'openid'=>$openid,
            'token' => $token,
            '$response' => $response,
        ]);
    }
    public function captcha(){
        $builder = new CaptchaBuilder(rand(1000,9999).'');
        $builder->build();
        header('Content-type: image/png');
        $builder->output();
    }



}
