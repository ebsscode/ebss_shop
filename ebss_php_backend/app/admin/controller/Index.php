<?php
namespace app\admin\controller;
use app\Basic;
use \think\facade\Db;
class Index extends Basic
{
    public function index()
    {
       return $this->success();
    }
    public function login()
    {
        $user = table('sys_user')->where('username',$this->param('username'))->find();
        if(empty($user['password'])){
            return $this->error('用户名不存在！');
        }
        if($this->param('password')!==$user['password']){
            return $this->error('密码不正确');
        }
        $token = md5(uniqid() . $user['username']);
        table('sys_token')->where('add_time','<',time()-90*24*60*60)->delete();
        table('sys_token')->insert([
            'token' => $token,
            'token_user_id' => $user['user_id'],
            'ip' => $this->request->ip(),
            'add_time' => time(),
        ]);
        table('log_user')->insert([
            'name' => $user['username'],
            'user_id' => $user['user_id'],
            'url' => $this->request->url(),
            'ip' => $this->request->ip(),
            'add_time' => time(),
            'title' => '后台登录',
        ]);
        return $this->success('请求成功',[
            'token'=>$token,
            'username'=>$user['username'],
            'role_id'=>$user['role_id'],
            'user_id'=>$user['user_id'],
        ]);
    }
}
