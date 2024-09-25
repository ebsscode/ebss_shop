<?php
namespace app\api\controller;
use app\Basic;
use app\service\system\ConfigsService;

class Config extends Basic
{
    public function list()
    {
        return $this->success('请求成功！',[
            'configs'=>ConfigsService::getFront(),
        ]);
    }
}