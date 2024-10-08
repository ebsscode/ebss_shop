<?php

namespace app\service\db;

class TimeHandler
{
    public static function filedTimeStamp($filed,$table_id,array $data = []){
        if(!$table_id){
            if(in_array('add_time',$filed)){
                $data['add_time']=time();
            }
            if(in_array('add_date',$filed)){
                $data['add_date']=date('Y-m-d');
            }
        }
        if(in_array('update_time',$filed)){
            $data['update_time']=time();
        }
        return $data;
    }

}