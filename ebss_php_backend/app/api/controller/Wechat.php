<?php
namespace app\api\controller;
use app\Logined;
use app\service\system\ConfigsService;

class Wechat extends Logined
{
    public function get_tel(){
        $config = [
            'app_id' => ConfigsService::get('wx_xcx_app_id'),
            'secret' => ConfigsService::get('wx_xcx_secret'),
        ];
        $app = new \EasyWeChat\MiniApp\Application($config);
        $utils = $app->getUtils();
        $session = $utils->codeToSession($this->param('code'));
        if(empty($session['session_key'])){
            return $this->error('参数不正确2',['$session'=>$session]);
        }
        $decryptedData = $utils->decryptSession($session['session_key'], $this->param('iv'), $this->param('encryptedData'));
        if(empty($decryptedData['phoneNumber'])){
            return $this->error('解析出错',['$decryptedData'=>$decryptedData]);
        }
        table('sys_user')->where('user_id',$this->user_id)->update([
            'tel' =>$decryptedData['phoneNumber'],
        ]);
        $user_info=table('sys_user')->where('user_id',$this->user_id)->find();
        $this->ajax_return(1,'保存成功',[
            'user_info'=>$user_info,
        ]);
    }
}
