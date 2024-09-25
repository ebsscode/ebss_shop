<?php

namespace app\service\system;
use app\MyException;

class CheckService
{
    public static function isExist($v,$msg='数据不存在'){
        if(empty($v)){
            throw new MyException(ResponseService::getMessageCode(), $msg);
        }
    }

}