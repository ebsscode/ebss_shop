<?php
namespace app\api\controller;
use app\Basic;
use app\Logined;
use think\facade\Config;
use think\facade\Db;
class Coupon extends Logined
{
    public function get(){
        $coupon=table('base_coupon')->where('coupon_id',$this->param('coupon_id'))->find();
        if(!$coupon) return $this->error('数据未找到');
        $coupon_user_count=table('base_coupon_user')->where('coupon_id',$this->param('coupon_id'))->where('user_id',$this->user_id)->count();
        if($coupon_user_count>=$coupon['person_total'])return $this->error('超过最大领取数量');

        table('base_coupon_user')->insert([
            'user_id'=>$this->user_id,
            'add_time'=>time(),
            'mch_id'=>$coupon['mch_id'],
            'status'=>4,
            'coupon_id'=>$this->param('coupon_id'),
        ]);
        return $this->success('领取成功');
    }
    public function detail(){
        $coupon=table('base_coupon')->where('coupon_id',$this->param('coupon_id'))->find();
        if(!$coupon) return $this->error('数据未找到');
        $coupon['goods_ids']=decodeJson($coupon['goods_ids']);
        if(!empty($coupon['goods_ids'])){
            $coupon['goods']=table('shop_goods')->where('goods_id','in',$coupon['goods_ids'])->select();
        }else{
            $coupon['goods']=[];
        }
        $coupon_user_count=table('base_coupon_user')->where('coupon_id',$this->param('coupon_id'))->where('user_id',$this->user_id)->count();
        return $this->success('请求成功',[
            'detail'=>$coupon,
            'coupon_user_count'=>$coupon_user_count,
        ]);
    }
    public function my(){
        $whereArr=[];
        if(!empty($this->param('status'))){
            $whereArr[]=["base_coupon_user.status",'=',$this->param('status')];
        }
        table('base_coupon_user')->leftJoin('base_coupon','base_coupon.coupon_id = base_coupon_user.coupon_id')->where('base_coupon_user.status',4)->where('base_coupon.expire_time','<',time())->update(['base_coupon_user.status'=>6]);

        $coupon_user_list=table('base_coupon_user')->where($whereArr)->where('user_id',$this->user_id)->order('add_time desc')->select();
        foreach ($coupon_user_list as &$item) {
            $item['coupon']=table('base_coupon')->where('coupon_id',$item['coupon_id'])->find();
            $item['coupon']['goods_ids']=decodeJson($item['coupon']['goods_ids']);
        }
        return $this->success('请求成功',[
            'list'=>$coupon_user_list,
        ]);
    }



}
