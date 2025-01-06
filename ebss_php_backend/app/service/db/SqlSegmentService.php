<?php

namespace app\service\db;

use app\service\system\ResponseService;

class SqlSegmentService
{
    public static function paramToWhere($params,$filed,$fieldsType){
        $whereArr = [];
        foreach ($params as $key=> $item) {
            if(in_array($key,$filed)&&(!empty($item)||$item===0||$item==='0')){
                $field_type = $fieldsType[$key];
                if($field_type=='int'||$field_type=='tinyint'){
                    $whereArr[]=["$key",'=',$item];
                }else{
                    $whereArr[]=["$key",'like','%'.$item.'%'];
                }
            }
        }
        return $whereArr;
    }
    public static function parseWhere($where){
        $whereArr = [];
        foreach ($where as $item) {
            if(count($item)==2){
                $whereArr[]=[$item[0],'=',$item[1]];
            }
            if(count($item)==3){
                $whereArr[]=[$item[0],$item[1],$item[2]];
            }
        }
        return $whereArr;
    }
    public static function moduleWhere($filed){
        $whereArr = [];
        if(request()->module&&in_array('module_id',$filed)){
            $whereArr[]=["module_id",'in',[0,request()->module['module_id']]];
        }
        return $whereArr;
    }
    public static function tableIdsWhere($table_key,$table_ids){
        $whereArr = [];
        if(!empty($table_ids)){
            $whereArr[]=["$table_key",'in',$table_ids];
        }
        return $whereArr;
    }
    public static function mchWhere($table){
        $whereArr = [];
        if( $table=='shop_order' ){
            if(request()->mch){
                $whereArr[]=["mch_id",'=',request()->mch['mch_id']];
            }
        }
        if( $table=='shop_goods' ){
            if(request()->mch){
                $whereArr[]=["mch_id",'=',request()->mch['mch_id']];
            }
        }
        return $whereArr;
    }
    public static function joinTableDetail($join_tables,$detail){
        foreach ($join_tables as $join_table) {
            $join_table_key = table($join_table)->getPk();
            $detail["{$join_table}"]=table($join_table)->where("{$join_table_key}",$detail["{$join_table_key}"])->find();
        }
        return $detail;
    }
    public static function joinTableList($join_tables,$list){
        foreach ($list as &$item) {
            foreach ($join_tables as $join_table) {
                $join_table_key = table($join_table)->getPk();
                $item["{$join_table}"]=table($join_table)->where("{$join_table_key}",$item["{$join_table_key}"])->find();
            }

        }
        return $list;
    }
    public static function toSort($sorts,$filed,&$db){
        if(!empty($sorts)){
            foreach ($sorts as $item) {
                foreach ($item as $key2 => $item2) {
                    $db->order($key2,$item2);
                }
            }
        }else{
            if(in_array('sort_num',$filed)){
                $db->order("sort_num",'asc');
            }
            if(in_array('add_time',$filed)){
                $db->order("add_time",'desc');
            }
        }
    }


}