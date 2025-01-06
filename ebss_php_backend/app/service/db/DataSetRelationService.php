<?php

namespace app\service\db;

use app\service\system\ResponseService;

class DataSetRelationService
{
    public static function handler($table,&$list,$rel= []){
        foreach ($list as &$detail) {
            if($table=='shop_goods'){
                self::goodsRelation($detail,$rel);
            }
        }
    }

    public static function save($table,$row){
        if($table=='shop_goods'){
            if(!empty($row['spec_quantity_price'])){
                table('shop_goods_spec_quantity_price')->where('goods_id',$row['goods_id'])->delete();
                $data = [];
                foreach ($row['spec_quantity_price'] as $item) {
                    $data[] = array_merge($item,['goods_id'=>$row['goods_id']]);
                }
                table('shop_goods_spec_quantity_price')->insertAll($data);
            }
            if(!empty($row['category_ids'])){
                table('shop_goods_category_ref')->where('goods_id',$row['goods_id'])->delete();
                $data = [];
                foreach ($row['category_ids'] as $category_id) {
                    $data[] = ['goods_id'=>$row['goods_id'],'category_id'=>$category_id ];
                }
                table('shop_goods_category_ref')->insertAll($data);
            }
        }
    }

    public static function goodsRelation(&$detail,$rel= []){
        $detail['spec_quantity_price'] = table('shop_goods_spec_quantity_price')->where('goods_id',$detail['goods_id'])->select();
    }



}