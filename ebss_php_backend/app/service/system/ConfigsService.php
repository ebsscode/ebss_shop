<?php

namespace app\service\system;

class ConfigsService
{
    public static $configs = null;
    public static function getFront(){
        $configs = [];
        foreach (self::getConfigs() as $key => $item) {
            if($item['is_front']==1){
                $configs[$item['name']]=$item['value'];
            }
        }
        return $configs;
    }
    public static function get($key){
        $all = self::getAll();
        return $all[$key];
    }
    public static function getConfigs(){
        if(self::$configs)return self::$configs;
        self::$configs = table('sys_config')->select();
        return self::$configs;
    }
    public static function getAll(){
        $list = self::getConfigs();
        $configs = [];
        foreach ($list as $key => $item) {
            $configs[$item['name']]=$item['value'];
        }
        return $configs;
    }

}