<?php
namespace app\api\controller;
use app\Logined;
use app\service\system\CheckService;
use Endroid\QrCode\Builder\Builder;
use think\facade\Config;
use think\facade\Db;
class Money extends Logined
{
    public function charge(){
        $money = $this->param('money');
        $charge_order_id = table('base_charge_order')->insertGetId([
            'order_sn'=>uniqid(),
            'add_time'=>time(),
            'user_id'=>$this->user_id,
            'charge_option'=>!empty($this->param('charge_options'))?encodeJson($this->param('charge_options')):'{}',
            'pay_money'=>$money,
            'money'=>$money,
            'is_pay'=>0,
        ]);
        $paylog_id = table('log_pay')->insertGetId([
            'type'=>'money_charge',
            'money'=>$money,
            'pay_order_sn'=>uniqid(),
            'add_time'=>time(),
            'is_pay'=>0,
            'nofity_data'=>'{}',
            'busi_table_id'=>$charge_order_id,
            'desc'=>'充值'.$money.'元',
            'user_id'=>$this->user_id,
        ]);
        return $this->ajax_return(1,'请求成功',[
            'paylog_id'=>$paylog_id,
        ]);
    }
    public function withdraw(){
        CheckService::checkForbidden();
        if(empty($this->param())){
            return $this->error('请输入金额');
        }
        if($this->param('amount') > $this->user_info['money']){
            return $this->error('余额不足');
        }
        $afterMoney = bcsub($this->user_info['money'], $this->param('amount'));

        $res = table('sys_user')->where('user_id', $this->user_id)->update(['money'=> $afterMoney]);
        if($res){
            table('base_withdraw')->insert([
                'add_time'      =>  time(),
                'user_id'       =>  $this->user_id,
                'money'    =>  $this->param('amount'),
                'type'    =>  $this->param('type'),
                'account'    =>  $this->param('account'),
                'realname'    =>  $this->param('realname'),
                'title'         =>  '提现',
            ]);

            table('log_money')->insert([
                'add_time'      =>  time(),
                'user_id'       =>  $this->user_id,
                'log_type'      =>  2,
                'up_or_down'    =>  2,
                'change_num'    =>  $this->param('amount'),
                'before_num'    =>  $this->user_info['money'],
                'after_num'     =>  $afterMoney,
                'title'         =>  '提现'
            ]);
            return $this->success('提现成功', [
            ]);
        }else{
            return $this->error('提现失败');
        }
    }
}
