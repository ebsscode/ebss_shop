<?php
namespace app\admin\controller;
use app\Basic;
use app\Logined;
use app\service\system\CheckService;
use app\service\system\ConfigsService;
use \think\facade\Db;
class Config extends Basic
{
    public function save()
    {
        CheckService::checkForbidden();
        $param = $this->request->param();
        foreach ($param as $key => $value) {
            table('sys_config')->where('name',$key)->update([
                'value' => $value,
            ]);
        }
        return $this->success('保存配置成功！');
    }
    public function list()
    {
        return $this->success('请求成功！',[
            'configs'=>ConfigsService::getAll(),
        ]);
    }
}
