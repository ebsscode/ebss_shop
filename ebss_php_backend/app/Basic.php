<?php
namespace app;

use app\BaseController;
use app\service\system\ResponseService;
use think\facade\Db;

class Basic extends BaseController
{
    public $auth_url = null;
    public $user_id = null;
    public $user_info = null;
    public $configs = null;
    public $module = null;
    public $mch = null;
    function initialize()
    {
//        var_dump($mch_id);
        $module     = strtolower(app('http')->getName());
        $controller = ($this->request->controller());
        $action     =  strtolower($this->request->action());
        $this->auth_url=$module . '/' . $controller . '/' . $action;
        $this->loginStatus();
        $this->getSysModule();
        $this->getMch();
    }
    public function param($name = '', $default = null, $filter = ''){
        if($name=='limit'&&empty($this->request->param('limit'))){
            return 99999;
        }
        return $this->request->param($name,$default,$filter);
    }
    public function getMch(){
        $mch_id = $this->request->header('mch-id');
//        var_dump($mch_id);
        if($mch_id){
            $mch = table('mch')->where('mch_id',$mch_id)->find();
            $this->mch = $mch;
            $this->request->mch = $mch;
        }
    }
    public function getSysModule()
    {
        $module_id = $this->request->header('active-module-id')?$this->request->header('active-module-id'):$this->request->header('base-module-id');
        if($module_id){
            $module = table('sys_module')->where('module_id',$module_id)->find();
            $this->module=  $module;
            $this->request->module = $module;
        }
    }
    public function loginStatus(){
        $token= $this->request->header('token');
        if(!$token){
            $token= $this->param('token');
        }
        if(!$token){
            return false;
        }
        $token = table('sys_token')->where('token',$token)->find();
        if(!$token){
            return false;
        }
        $this->user_id=$token['token_user_id'];
        $this->user_info=table('sys_user')->where('user_id',$this->user_id)->find();
        $this->request->user_id = $token['token_user_id'];
        $this->request->user_info = $this->user_info;
        return true;
    }
    public function error( $msg = '请求成功',$data=[]){
        return $this->ajax_return(ResponseService::getMessageCode(),$msg,$data);
    }
    public function success( $msg = '请求成功',$data=[])
    {
        return $this->ajax_return(ResponseService::getSuccessCode(),$msg,$data);
    }
    public function ajax_return( $code, $msg = '请求成功',$data=[])
    {
        $result = [
            'code' => $code,
            'msg'  => $msg,
            'requestParam' => $this->request->param(),
        ];
        return json(array_merge($result,$data));
    }
    public function beginToday(){
        return mktime(0,0,0,date('m'),date('d'),date('Y'));
    }


}
