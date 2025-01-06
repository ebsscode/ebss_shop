<?php

namespace app\service\db;

use app\service\system\ResponseService;

class DeleteHandler
{
    public static function deleteId($table,$table_id){
        if( $table=='base_article' ){
            if($table_id<10){
                return ResponseService::responseModel(ResponseService::messageCode(),'禁止删除！');
            }
        }
        if( $table=='base_article_category' ){
            if($table_id<10){
                return ResponseService::responseModel(ResponseService::messageCode(),'禁止删除！');
            }
        }
        if( $table=='base_article_category' ){
            table('base_article')->where('article_category_id',$table_id)->delete();
        }
        if( $table=='mch' ){
            $has = table('shop_order')->where('mch_id',$table_id)->find();
            if($has){
                return ResponseService::responseModel(ResponseService::messageCode(),'商户有订单，禁止删除！');
            }
            $has = table('shop_goods')->where('mch_id',$table_id)->find();
            if($has){
                return ResponseService::responseModel(ResponseService::messageCode(),'商户有商品，禁止删除！');
            }
            table('mch_favour')->where('mch_id',$table_id)->delete();
        }
        if( $table=='sys_role' ){
            if($table_id<10){
                return ResponseService::responseModel(ResponseService::messageCode(),'禁止删除！');
            }
            $has = table('sys_user')->where('role_id',$table_id)->find();
            if($has){
                return ResponseService::responseModel(ResponseService::messageCode(),'角色正在使用，禁止删除！');
            }
        }
        if( $table=='shop_goods' ){
            table('shop_goods_comment')->where('goods_id',$table_id)->delete();
            table('shop_goods_favour')->where('goods_id',$table_id)->delete();
            table('shop_goods_view')->where('goods_id',$table_id)->delete();
            table('shop_groupbuy')->where('goods_id',$table_id)->delete();
            table('shop_cart')->where('goods_id',$table_id)->delete();
            table('shop_goods_spec_quantity_price')->where('goods_id',$table_id)->delete();
        }
        if( $table=='shop_order' ){
            table('shop_order_goods')->where('order_id',$table_id)->delete();
        }
        if( $table=='base_feedback' ){
//            return ResponseService::responseModel(ResponseService::messageCode(),'禁止删除！');
        }

        return ResponseService::responseModel(ResponseService::successCode(),'删除成功');
    }
    public static function deleteIds($table,$table_ids){
        foreach ($table_ids as $table_id) {
            $result = self::deleteId($table, $table_id);
            if($result[ResponseService::codeField()]==ResponseService::messageCode()){
                return $result;
            }
        }
        return ResponseService::responseModel(ResponseService::successCode(),'删除成功');
    }


}