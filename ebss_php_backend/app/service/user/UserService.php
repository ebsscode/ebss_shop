<?php

namespace app\service\user;

use app\MyException;

class UserService
{
    public static function checkLogin(){
        $user_id = request()->user_id;
        if(!$user_id){
            throw new MyException(401, '请登录！');
        }
    }

}