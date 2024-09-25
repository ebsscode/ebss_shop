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
        $paginate = table($this->table)->paginate($this->param('limit'));
        return $this->success('请求成功',[
            'paginate'=>$paginate,
        ]);
    }
}
