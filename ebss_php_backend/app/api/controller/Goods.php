<?php
namespace app\api\controller;
use app\Basic;
use think\facade\Db;
class Goods extends Basic
{
    public function comment(){
        $order = table('shop_order')->find($this->param('order_id'));
        if(!$order)return $this->error('订单不存在！');
        $order_goods = table('shop_order_goods')->where('order_id',$this->param('order_id'))->select();
        $row = $this->param();
        $row['user_id'] = $this->user_id;
        $row['user'] = $this->user_info;
        foreach ($order_goods as $order_good) {
            $row['goods_id'] = $order_good['goods_id'];
            table('shop_goods_comment')->save($row);
        }
        //todo:检查所有商品是否已评价
        table('shop_order')->where('order_id',$this->param('order_id'))->update(['status'=>7]);
        return $this->success('评价成功！');
    }
    public function detail(){
        table('shop_goods')->where("goods_id",$this->param('goods_id'))->inc('view_count');
        $detail = table('shop_goods')->field('shop_goods.*,mch.name mch_name')
            ->leftJoin('mch','shop_goods.mch_id = mch.mch_id')
            ->where('shop_goods.goods_id',$this->param('goods_id'))->find();
        $addr = null;
        $detail["good_rate_percent"] = null;
        if($this->user_id){
            $goods_view = table('shop_goods_view')->where('goods_id',$this->param('goods_id'))->where('user_id',$this->user_id)->find();
            if($goods_view){
                table('shop_goods_view')->where('goods_view_id',$goods_view['goods_view_id'])->update([
                    'add_time'=>time(),
                ]);
            }else{
                table('shop_goods_view')->insert([
                    'user_id'=>$this->user_id,
                    'goods_id'=>$this->param('goods_id'),
                ]);
            }
            $detail["is_favour"] = table('shop_goods_favour')->where('goods_id',$this->param('goods_id'))->where('user_id',$this->user_id)->count();
            $addr = table('base_addr')->where('user_id',$this->user_id)->where('is_default',1)->find();
        }
        $detail["comment_count"] = table('shop_goods_comment')->where('goods_id',$this->param('goods_id'))->count();
        $detail["last_comment"] = table('shop_goods_comment')->where('goods_id',$this->param('goods_id'))->order('add_time desc')->find();
        if($detail["last_comment"]){
            $good_rate = table('shop_goods_comment')->where('goods_id',$this->param('goods_id'))->where('rate >= 4')->count();
            $total_rate = table('shop_goods_comment')->where('goods_id',$this->param('goods_id'))->count();
            $detail["good_rate_percent"] = $total_rate?$good_rate/$total_rate:null;
        }
        return $this->success('请求成功',[
            'addr'=>$addr,
            'detail'=>$detail,
            'user_id'=>$this->user_id,
        ]);
    }
}
