<?php
namespace app\admin\controller;
use app\Basic;
use app\Logined;
use app\service\mch\MchService;
use app\service\system\CheckService;
use \think\facade\Db;
class User extends Logined
{
    public function edit_password()
    {
        CheckService::checkForbidden();
        table('sys_user')->where('user_id',$this->user_id)->update([
            'password' => md5($this->param('password')),
            'update_time' => time(),
        ]);
        table('sys_token')->where('token_user_id',$this->user_id)->delete();
        return $this->success('修改密码成功！');
    }
    public function permissions()
    {
        $permission_ids = table('sys_role')->where('role_id',$this->user_info['role_id'])->value('permission_ids');
        $permission_ids = decodeJson($permission_ids);
        $permissions=[];
        if($this->user_info['role_id']==1){//超级管理员
            $permissions = table('sys_permission')->select();
        }else if(!empty($permission_ids)){
            $permissions = table('sys_permission')->where('permission_id','in',$permission_ids)->order('sort_num','desc')->select();
        }
        return $this->success('请求成功！',[
            'permissions'=>$permissions,
            'role_id'=>$this->user_info['role_id'],
        ]);
    }
    public function user_info()
    {
        return $this->success('请求成功！',['user_info'=>$this->user_info]);
    }
    public function mch_list()
    {
        return $this->success('请求成功！',['list'=>MchService::userMchList($this->user_id)]);
    }
}
