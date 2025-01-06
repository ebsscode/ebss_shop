<?php

namespace app\service\system;

class ResponseService
{
    public static function successCode(): int
    {
        return 1;
    }
    public static function messageCode() : int{
        return 0;
    }
    public static function codeField() : string{
        return 'code';
    }
    public static function mseField() : string{
        return 'msg';
    }
    public static function responseModel( $code, $msg = '',$data=[])
    {
        $result = [
            self::codeField() => $code,
            self::mseField()  => $msg,
        ];
        return array_merge($result,$data);
    }

}