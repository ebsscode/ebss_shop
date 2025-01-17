<?php
namespace app;

use app\service\system\ResponseService;

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
        return $this->request->param($name, $default, $filter);
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
        $module_id=$module_id?:1;
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
        return $this->ajax_return(ResponseService::messageCode(),$msg,$data);
    }
    public function success( $msg = '请求成功',$data=[])
    {
        return $this->ajax_return(ResponseService::successCode(),$msg,$data);
    }
    public function ajax_return( $code, $msg = '请求成功',$data=[])
    {
        return json(ResponseService::responseModel($code,$msg,array_merge($data,$this->request->param())));
    }



}
