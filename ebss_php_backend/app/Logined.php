<?php
namespace app;

use think\facade\Db;

class Logined extends Basic
{
    function initialize()
    {
        parent::initialize();
        if(!$this->user_id){
            throw new MyException(401, '请登录！');
        }
    }
}
