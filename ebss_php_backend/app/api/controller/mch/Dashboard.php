<?php
namespace app\api\controller\mch;
use app\Basic;
use app\MyException;
use app\service\system\TimeService;
use app\service\user\UserService;

class Dashboard extends Basic
{
    public function page_index(){
        $待发货 = table('shop_order')->where('status',4)->where('mch_id',$this->mch['mch_id'])->count();
        $待收货 = table('shop_order')->where('status',5)->where('mch_id',$this->mch['mch_id'])->count();
        $待售后 = table('shop_order')->where('status',8)->where('mch_id',$this->mch['mch_id'])->count();
        $已完成 = table('shop_order')->where('status',7)->where('mch_id',$this->mch['mch_id'])->count();
        $total = table('shop_order')->where('mch_id',$this->mch['mch_id'])->count();
        $今日工单  = table('shop_order')->where('add_date',TimeService::todayDate())->where('mch_id',$this->mch['mch_id'])->count();

        return $this->success('请求成功',[
            'page_data'=>[
                '待发货'=>$待发货,
                '待收货'=>$待收货,
                '待售后'=>$待售后,
                '已完成'=>$已完成,
                'total'=>$total,
                '今日工单'=>$今日工单,
            ],
            'mch'=>$this->mch,
        ]);
    }

}
