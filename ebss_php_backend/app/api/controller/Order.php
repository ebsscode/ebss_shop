<?php
namespace app\api\controller;
use app\Logined;
use think\facade\Db;
use function MongoDB\BSON\toJSON;

class Order extends Logined
{
    private $table='shop_order';
    public function create(){
        $goods = $this->param('goods_list');
        $price_total = $this->param('price_total')+$this->param('freight')-$this->param('discount');
        $order_id = table($this->table)->insertGetId([
            'user_id'=>$this->user_id,
            'type'=>1,
            'order_sn'=>uniqid(),
            'add_time'=>time(),
            'mch_id'=>0,//todo
            'is_pay'=>0,
            'order_money'=>$price_total,
            'discount'=>$this->param('discount'),
            'freight'=>$this->param('freight'),
            'coupon_list'=>encodeJson($this->param('coupon_list')),
            'order_goods'=>encodeJson($this->param('goods_list')),
            'addr'=>encodeJson($this->param('addr')),
            'tel'=>$this->param('addr')['tel'],
            'order_name'=>$this->param('addr')['name'],
            'notes'=>$this->param('notes'),
        ]);
        foreach ($this->param('goods_list') as $goods) {
            table('shop_order_goods')->insert([
                'goods'=>encodeJson($goods),
                'amount'=>$goods['amount'],
                'selected_spec'=>$goods['selected_spec'],
                'mch'=>0,//todo
                'order_id'=>$order_id,
            ]);
        }
        foreach ($this->param('coupon_list') as $coupon) {
            table('base_coupon_user')->where('coupon_user_id',$coupon['coupon_user_id'])->update(['use_time'=>time(),'status'=>5]);
        }
        $paylog_id = table('log_pay')->insertGetId([
            'user_id'=>$this->user_id,
            'type'=>'goods_order',
            'money'=>$price_total,
            'pay_order_sn'=>uniqid(),
            'add_time'=>time(),
            'is_pay'=>0,
            'nofity_data'=>'[]',
            'busi_table_id'=>$order_id,
            'desc'=>'购买共计'.count($goods).'件商品',
        ]);
        return $this->success('创建订单成功',[
            'order_id'=>$order_id,
            'paylog_id'=>$paylog_id,
        ]);
    }
    public function exchangeCreate(){
        $goods = table('shop_goods')->where('goods_id',$this->param('goods_id'))->find();
        if ($goods['price']>$this->user_info['integral']) {
            return $this->error('积分不足');
        }
        $goods['amount']=1;
        $goods['selected_spec']=$this->param('selected_spec');

        $res = table('sys_user')->where('user_id',$this->user_id)->dec('integral',$goods['price']);
        if(!$res)return $this->error('兑换失败');
        $order_id = table($this->table)->insertGetId([
            'user_id'=>$this->user_id,
            'type'=>2,
            'order_sn'=>uniqid(),
            'add_time'=>time(),
            'mch_id'=>$goods['mch_id'],
            'is_pay'=>1,
            'status'=>4,
            'pay_time'=>time(),
            'order_money'=>$goods['price'],
            'order_goods'=>encodeJson([$goods]),
            'addr'=>encodeJson($this->param('addr')),
            'tel'=>$this->param('addr')['tel'],
            'order_name'=>$this->param('addr')['name'],
        ]);
        table('log_integral')->insert([
            'user_id'=>$this->user_id,
            'add_time'=>time(),
            'log_type'=>1,
            'up_or_down'=>2,
            'change_num'=>$goods['price'],
            'before_num'=>$this->user_info['integral'],
            'after_num'=>$this->user_info['integral']-$goods['price'],
            'title'=>'兑换'.$goods['title'],
        ]);
        return $this->success('兑换成功',[
            'order_id'=>$order_id,
        ]);
    }
    public function cancel(){
        $detail = table($this->table)->find($this->param('order_id'));
        if(!$detail)return $this->error('数据未找到');
        if($detail['status']==6||$detail['status']==7||$detail['status']==8||$detail['status']==9)return $this->error('订单状态暂时无法更改');
        $coupon_list = decodeJson($detail['coupon_list']);
        foreach ($coupon_list as $item) {
            table('base_coupon_user')->update(['status'=>4,'use_time'=>0]);
        }
        $result = table($this->table)->update(['status'=>9,'order_id'=>$this->param('order_id')]);

        $res = table('sys_user')->where('user_id',$this->user_id)->inc('money',$detail['order_money']);
        if($res){
            table('log_money')->insert([
                'user_id'=>$this->user_id,
                'add_time'=>time(),
                'log_type'=>4,
                'up_or_down'=>1,
                'change_num'=>$detail['order_money'],
                'before_num'=>$this->user_info['money'],
                'after_num'=>$this->user_info['money']+$detail['order_money'],
                'title'=>'取消订单退款：'.$detail['order_sn'],
            ]);
            return $this->success("取消成功");
        }else{
            return $this->error("取消失败");
        }
    }
    public function delete(){
        $detail = table($this->table)->find($this->param('order_id'));
        if(!$detail)return $this->error('数据未找到');
        if($detail['status']==4||$detail['status']==5||$detail['status']==8)return $this->error('订单暂时无法删除');
        $result = table($this->table)->update(['delete_user'=>1,'order_id'=>$this->param('order_id'),]);
        return $this->success("成功删除{$result}条数据！");
    }
}
