<?php
namespace app\admin\controller;
use app\Basic;
use app\Logined;
use \think\facade\Db;
class Permission extends Logined
{
    public function list()
    {
        $paginate = table($this->param('table'))->paginate($this->param('limit'));
        return $this->success('请求成功',[
            'paginate'=>$paginate,
        ]);
    }
}
