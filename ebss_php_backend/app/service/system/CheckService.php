<?php

namespace app\service\system;
use app\MyException;

class CheckService
{
    public static function isExist($v,$msg='数据不存在'){
        if(empty($v)){
            throw new MyException(ResponseService::messageCode(), $msg);
        }
    }
    public static function allowedUploadFile($ext){
        $exts = ['jpg','gif','png','jpeg','mp3','mp4','xls','xlsx','doc','docx','pdf','pptx','txt'];
        if(!in_array($ext,$exts)){
            throw new MyException(ResponseService::messageCode(), '不支持的文件格式');
        }
    }
    public static function checkForbidden(){
        $env = ConfigsService::get('env');
        if($env=='demo'){
            throw new MyException(ResponseService::messageCode(), '演示环境禁止操作');
        }
    }


}