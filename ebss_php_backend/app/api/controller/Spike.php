<?php
namespace app\api\controller;
use app\Basic;
use app\Logined;
use app\service\shop\ActivityService;
use app\service\system\TimeService;
use think\facade\Config;
use think\facade\Db;
class Spike extends Basic
{
    public function detail(){
        $spike = table('shop_spike')->where('spike_id',$this->param('spike_id'))->find();
        if(!$spike){
            return $this->error('数据未找到');
        }
        if(!empty($spike['goods_ids'])){
            $spike['goods'] = table('shop_goods')->where('goods_id','in',$spike['goods_ids'])->select();
        }else{
            $spike['goods']=[];
        }
        return $this->success('请求成功',[
            'detail'=>$spike,
        ]);
    }
    public function will_start(){
        $list = ActivityService::willStartSpikeList();
        return $this->success('请求成功',[
            'list'=>$list,
        ]);
    }
}
