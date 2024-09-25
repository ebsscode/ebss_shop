<?php
namespace app\api\controller;
use app\Logined;
use think\facade\Config;
use think\facade\Db;
class Rangking extends Logined
{
    public function list(){
        $paginate = table('sys_user')->order('add_time desc')->paginate($this->param('limit'));
        return $this->success('请求成功',[
            'paginate'=>$paginate,
        ]);
    }
}
