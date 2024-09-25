<?php

namespace app\service\vartype;

class StrService
{
    //下划线命名到驼峰命名
    public static function toCamelCase($str,$separator='_')
    {
        $words = str_replace($separator, " ", strtolower($str));
        return str_replace(" ", "", ucwords($words));
    }
    //驼峰命名转下划线命名
    public static function toUnderScore($str,$separator='_')
    {
        return strtolower(preg_replace('/([a-z])([A-Z])/', "$1" . $separator . "$2", $str));
    }

}