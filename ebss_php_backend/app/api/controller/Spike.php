<?php
namespace app\api\controller;
use app\Basic;
use app\Logined;
use think\facade\Config;
use think\facade\Db;
class Spike extends Basic
{
    public function detail(){
        $spike = table('shop_spike')->where('spike_id',$this->param('spike_id'))->find();
        if(!$spike){
            return $this->error('数据未找到');
        }
        $spike['goods_ids']=decodeJson($spike['goods_ids']);
        if(!empty($spike['goods_ids'])){
            $spike['goods'] = table('shop_goods')->where('goods_id','in',$spike['goods_ids'])->select();
        }else{
            $spike['goods']=[];
        }
        foreach ($spike['goods'] as &$good) {
            $good['labels']=decodeJson($good['labels']);
        }
        return $this->success('请求成功',[
            'detail'=>$spike,
        ]);
    }
    public function will_start(){
        $endToday=mktime(0,0,0,date('m'),date('d')+1,date('Y'))-1;
        $h = date('H');
        $i = date('i');
        $s = date('s');
        $now_secons = $h*60*60+$i*60+$s*1;
        $spikes = table('shop_spike')->where("time_type = 1 and start_at > ".time())->whereOr("time_type = 2 and start_at > ".$now_secons)->order('start_at asc')->select();

        return $this->success('请求成功',[
            'list'=>$spikes,
            '$now_secons'=>$now_secons,
            '$h'=>$h,
            '$i'=>$i,
        ]);
    }
}
