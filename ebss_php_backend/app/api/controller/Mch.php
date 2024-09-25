<?php
namespace app\api\controller;
use app\Basic;
use app\MyException;
use app\service\system\TimeService;

class Mch extends Basic
{
//    public function __construct(){
//        if(!$this->mch)throw new MyException(403, '请选择商户！');
//    }
    public function page_index(){
        $待发货 = table('shop_order')->where('status',4)->where('mch_id',$this->mch['mch_id'])->count();
        $待收货 = table('shop_order')->where('status',5)->where('mch_id',$this->mch['mch_id'])->count();
        $待售后 = table('shop_order')->where('status',8)->where('mch_id',$this->mch['mch_id'])->count();
        $已完成 = table('shop_order')->where('status',7)->where('mch_id',$this->mch['mch_id'])->count();
        $total = table('shop_order')->where('mch_id',$this->mch['mch_id'])->count();
        $今日工单  = table('shop_order')->where('add_date',TimeService::todayDate())->where('mch_id',$this->mch['mch_id'])->count();

        return $this->ajax_return(1,'请求成功',[
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
