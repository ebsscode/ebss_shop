<?php
namespace app\api\controller;
use app\Logined;
use think\facade\Config;
use think\facade\Db;
class Sign extends Logined
{
    public function save(){
        $today_date = date('Y-m-d');
        $today_sign_record = table('base_sign_record')->where('add_date',$today_date)->where('user_id',$this->user_id)->find();
        if($today_sign_record)return $this->success('签到成功');
        $yes_sign_record = table('base_sign_record')->where('user_id',$this->user_id)->where('add_date',date('Y-m-d',time()-24*60*60))->find();
        table('base_sign_record')->insert([
            'user_id'=>$this->user_id,
            'add_date'=>date('Y-m-d'),
            'continuous_day'=>$yes_sign_record?$yes_sign_record['continuous_day']+1:1,
        ]);
        return $this->success('签到成功');
    }
}
