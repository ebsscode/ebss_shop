<?php
namespace app\api\controller;
use app\Basic;
use app\Logined;
use think\facade\Config;
use think\facade\Db;
class Cart extends Logined
{
    public function save(){
        $param = $this->param();
        $goods = table('shop_goods')->where('goods_id',$this->param('goods_id'))->find();
        if(!$goods){
            return $this->error('商品已删除');
        }
        if($goods['is_listing']==0){
            return $this->error('商品已下架');
        }
        $has = table('shop_cart')->where('user_id',$this->user_id)->where('goods_id',$this->param('goods_id'))->find();
        if($has){
            table('shop_cart')->where('cart_id',$has['cart_id'])->update([
                'selected_spec'=>$param['selected_spec'],
                'amount'=>$has['amount']+1,
            ]);
        }else{
            $param['user_id']=$this->user_id;
            $param['amount']=1;
            $param['mch_id']=$goods['mch_id'];
            table('shop_cart')->insert($param);
        }
        return $this->success('加入购物车成功');
    }
    public function list(){//todo
        $list = table('shop_cart')->where('user_id',$this->user_id)->select();
        foreach ($list as $item) {

        }
        return $this->success('操作成功',[
            'list'=>$list
        ]);
    }
    public function update(){
        table('shop_cart')->where('cart_id',$this->param('cart_id'))->update(['amount'=>$this->param('amount')]);
        return $this->success('操作成功');
    }
}
