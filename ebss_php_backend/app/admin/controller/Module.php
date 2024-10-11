<?php
namespace app\admin\controller;
use app\Basic;
use app\Logined;
use think\facade\Config;
use think\facade\Db;
class Module extends Basic
{
    private $table = 'sys_module';
    public function list()
    {
        $list = table($this->table)->select();
        return $this->success('请求成功',[
            'list'=>$list,
        ]);
    }
}
