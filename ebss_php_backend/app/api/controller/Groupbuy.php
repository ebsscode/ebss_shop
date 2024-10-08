<?php
namespace app\api\controller;
use app\Basic;
use app\Logined;
use think\facade\Config;
use think\facade\Db;
class Groupbuy extends Basic
{
    public function list(){
        $where = [];
        if(!empty($this->param('groupbuy_id'))){
            $where[]=['groupbuy_id','=',$this->param('groupbuy_id')];
        }
        if(!empty($this->param('status'))){
            if($this->param('status')=='start'){
                $where[]=['start_time','<=',time()];
                $where[]=['end_time','>=',time()];
            }
            if($this->param('status')=='will_start'){
                $where[]=['start_time','>',time()];
            }
        }
        $list = table('shop_groupbuy')->where($where)->order('start_time asc')->select();
        foreach ($list as &$item) {
            $item['goods'] = table('shop_goods')->where('goods_id',$item['goods_id'])->find();
        }
        return $this->success('请求成功',[
            'list'=>$list,
        ]);
    }
}
