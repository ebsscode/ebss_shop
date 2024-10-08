<?php

namespace app\service\system;

class TimeService
{
    public static function beginToday(){
        return mktime(0,0,0,date('m'),date('d')+1,date('Y'))-1;
    }
    public static function todaySecons(){
        $h = date('H');
        $i = date('i');
        $s = date('s');
        return  $h*60*60+$i*60+$s*1;
    }
    public static function todayDate(){
        return date('Y-m-d');
    }


}