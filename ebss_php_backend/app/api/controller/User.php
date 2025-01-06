<?php
namespace app\api\controller;
use app\Logined;
use app\service\mch\MchService;
use app\service\system\TimeService;

class User extends Logined
{
    public function user_info(){
        return $this->success('请求成功',[
            'user_info'=>$this->user_info,
        ]);
    }
    public function chart(){
        $beginToday = TimeService::beginToday();
        $last_days[date('m/d',$beginToday-6*24*60*60)] = table('log_usage')->where('add_date',date('Y-m-d',$beginToday-6*24*60*60))->where('user_id',$this->user_id)->sum('duration');
        $last_days[date('m/d',$beginToday-5*24*60*60)] = table('log_usage')->where('add_date',date('Y-m-d',$beginToday-5*24*60*60))->where('user_id',$this->user_id)->sum('duration');
        $last_days[date('m/d',$beginToday-4*24*60*60)] = table('log_usage')->where('add_date',date('Y-m-d',$beginToday-4*24*60*60))->where('user_id',$this->user_id)->sum('duration');
        $last_days[date('m/d',$beginToday-3*24*60*60)] = table('log_usage')->where('add_date',date('Y-m-d',$beginToday-3*24*60*60))->where('user_id',$this->user_id)->sum('duration');
        $last_days[date('m/d',$beginToday-2*24*60*60)] = table('log_usage')->where('add_date',date('Y-m-d',$beginToday-2*24*60*60))->where('user_id',$this->user_id)->sum('duration');
        $last_days[date('m/d',$beginToday-1*24*60*60)] = table('log_usage')->where('add_date',date('Y-m-d',$beginToday-1*24*60*60))->where('user_id',$this->user_id)->sum('duration');
        $last_days[date('m/d',$beginToday)] = table('log_usage')->where('add_date',date('Y-m-d',$beginToday))->where('user_id',$this->user_id)->sum('duration');
        return $this->success('请求成功',[
            'last_days'=>$last_days,
        ]);
    }
    public function save_usage(){
        if($this->param('type')=='in'){
            $usage_log_id = table('log_usage')->insertGetId([
                'user_id'=>$this->user_id,
            ]);
            return $this->success('请求成功',[
                'usage_log_id'=>$usage_log_id,
            ]);
        }
        if($this->param('type')=='out'){
            $usage_log = table('log_usage')->where('usage_log_id',$this->param('usage_log_id'))->find();
            if($usage_log){
                table('log_usage')->where('usage_log_id',$this->param('usage_log_id'))->update([
                    'out_time'=>time(),
                    'duration'=>time()-$usage_log['add_time'],
                    'addr'=>$this->param('addr'),
                ]);
            }
        }
        return $this->success();
    }
    public function mch_list()
    {
        return $this->success('请求成功！',['list'=>MchService::userMchList($this->user_id)]);
    }


}
