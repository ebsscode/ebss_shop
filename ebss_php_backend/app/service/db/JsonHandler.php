<?php
namespace app\service\db;

class JsonHandler
{
    public static function findHandler($table,$one){
        if(empty($one))return $one;
        if( $table=='sys_role' ){
            $one["permission_ids"]=decodeJson($one["permission_ids"]);
        }
        if( $table=='shop_goods'){
            $one["labels"]=decodeJson($one["labels"]);
            $one["spec"]=decodeJson($one["spec"]);
            $one["imglist"]=decodeJson($one["imglist"]);
        }
        if( $table=='shop_goods_comment'){
            $one["imgs"]=decodeJson($one["imgs"]);
            $one["user"]=decodeJson($one["user"]);
        }
        if( $table=='mch_comment'){
            $one['user']=decodeJson($one["user"]);
            $one['imgs']=decodeJson($one["imgs"]);
        }
        if( $table=='shop_order' ){
            $one["order_goods"]=decodeJson($one["order_goods"]);
            $one["addr"]=decodeJson($one["addr"]);
            $one["coupon_list"]=decodeJson($one["coupon_list"]);
        }
        if( $table=='shop_order_goods' ){
            $one['goods']=decodeJson($one['goods']);
        }
        if( $table=='base_charge_order' ){
            $one['charge_option']=decodeJson($one['charge_option']);
        }
        if( $table=='shop_spike' ){
            $one["goods_ids"]=decodeJson($one["goods_ids"]);
        }
        if( $table=='base_coupon' ){
            $one["goods_ids"]=decodeJson($one["goods_ids"]);
        }
        if( $table=='log_pay' ){
            $one["notify_data"]=decodeJson($one["notify_data"]);
        }
        if( $table=='mch' ){
            $one["imgs"]=decodeJson($one["imgs"]);
        }
        if( $table=='shop_goods_spec_quantity_price' ){
            $one["imgs"]=decodeJson($one["imgs"]);
            $one["spec"]=decodeJson($one["spec"]);
        }
        return $one;
    }
    public static function selectHandler($table,$list){
        foreach ($list as &$item) {
            $item = self::findHandler($table,$item);
        }
        return $list;
    }
    public static function paginateHandler($table,$paginate){
        $paginate['data'] = self::selectHandler($table,$paginate['data']);
        return $paginate;
    }
    public static function saveHandler($table,$row){
        if( $table=='sys_role' ){
            isset($row['permission_ids'])?$row['permission_ids']=encodeJson($row['permission_ids']):false;
        }
        if( $table=='shop_goods' ){
            isset($row['spec'])?$row['spec']=encodeJson($row['spec']):false;
            isset($row['imglist'])?$row['imglist']=encodeJson($row['imglist']):false;
            isset($row['labels'])?$row['labels']=encodeJson($row['labels']):false;
        }
        if( $table=='shop_goods_comment'){
            isset($row['user'])?$row['user']=encodeJson($row["user"]):false;
            isset($row['imgs'])?$row['imgs']=encodeJson($row["imgs"]):false;
        }
        if( $table=='mch_comment'){
            isset($row['user'])?$row['user']=encodeJson($row["user"]):false;
            isset($row['imgs'])?$row['imgs']=encodeJson($row["imgs"]):false;
        }
        if( $table=='shop_order' ){
            isset($row['addr'])?$row['addr']=encodeJson($row['addr']):false;
            isset($row['order_goods'])?$row['order_goods']=encodeJson($row['order_goods']):false;
            isset($row['coupon_list'])?$row['coupon_list']=encodeJson($row['coupon_list']):false;
        }
        if( $table=='shop_order_goods' ){
            isset($row['goods'])?$row['goods']=encodeJson($row['goods']):false;
        }
        if( $table=='base_charge_order' ){
            isset($row['charge_option'])?$row['charge_option']=encodeJson($row['charge_option']):false;
        }
        if( $table=='shop_spike' ){
            isset($row['goods_ids'])?$row['goods_ids']=encodeJson($row['goods_ids']):false;
        }
        if( $table=='base_coupon' ){
            isset($row['goods_ids'])?$row["goods_ids"]=encodeJson($row["goods_ids"]):false;
        }
        if( $table=='log_pay' ){
            isset($row['notify_data'])?$row["notify_data"]=encodeJson($row["notify_data"]):false;
        }
        if( $table=='mch' ){
            isset($row['imgs'])?$row["imgs"]=encodeJson($row["imgs"]):false;
        }
        if( $table=='shop_goods_spec_quantity_price' ){
            isset($row['imgs'])?$row["imgs"]=encodeJson($row["imgs"]):false;
            isset($row['spec'])?$row["spec"]=encodeJson($row["spec"]):false;
        }
        return $row;
    }
    public static function valueHandler($table,$field,$data){
        if( $table=='sys_role' ){
            if( $field=='permission_ids' ){
                return decodeJson($data);
            }
        }
        return $data;
    }

}