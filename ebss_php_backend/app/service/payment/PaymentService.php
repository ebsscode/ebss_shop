<?php
namespace app\service\payment;
use think\facade\Db;

class PaymentService
{
    public static function handlePaySuccess($paylog=null,$notify_data=[]){
        Db::name('log_pay')->where('paylog_id',$paylog['paylog_id'])->update([
            'is_pay'=>1,
            'pay_time'=>time(),
            'notify_data'=>$notify_data,
        ]);
        if($paylog['type']=='goods_order'){
            Db::name('shop_order')->where('order_id',$paylog['busi_table_id'])->update([
                'is_pay'=>1,
                'status'=>4,
                'pay_time'=>time(),
            ]);
        }
        if($paylog['type']=='money_charge'){
            $charge_order = Db::name('base_charge_order')->find($paylog['busi_table_id']);
            $user = Db::name('sys_user')->find($paylog['user_id']);
            Db::name('sys_user')->where('user_id',$paylog['user_id'])->inc('money',$charge_order['money']);
            Db::name('log_money')->insert([
                'user_id'=>$paylog['user_id'],
                'log_type'=>1,
                'up_or_down'=>1,
                'change_num'=>$charge_order['money'],
                'before_num'=>$user['money'],
                'after_num'=>$charge_order['money']+$user['money'],
                'title'=>'充值',
            ]);
        }
    }
}
