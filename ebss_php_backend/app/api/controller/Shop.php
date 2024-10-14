<?php
namespace app\api\controller;
use app\Basic;
use app\service\mch\MchService;
use app\service\shop\ActivityService;
use app\service\user\UserService;
use think\facade\Config;
use think\facade\Db;
class Shop extends Basic
{
    public function page_index(){
        $banner_list = table('base_banner')->where('module_id',$this->module['module_id'])->order('sort_num desc')->select();
        $nav_list = table('base_nav')->order('sort_num desc')->select();
        $spike = ActivityService::willStartSpikeOne();
        $spike_goods_list=[];
        if($spike){
            $spike_goods_list = table('shop_goods')->where('goods_id','in',$spike['goods_ids'])->select();
        }

        return $this->success('请求成功',[
            'banner_list'=>$banner_list,
            'nav_list'=>$nav_list,
            'spike_goods_list'=>$spike_goods_list,
            'spike'=>$spike,
            'user_info'=>$this->user_info,
//            'sql'=>table('spike')->getLastSql(),
        ]);
    }
    public function page_my(){
        UserService::checkLogin();
        $goods_view = table('shop_goods_view')->field('shop_goods.*')
            ->leftJoin('shop_goods','shop_goods.goods_id = shop_goods_view.goods_id')
            ->where('shop_goods_view.user_id',$this->user_id)->order('shop_goods_view.add_time desc')->select();
        $coupon_total=table('base_coupon_user')->where('status',4)->where('user_id',$this->user_id)->count();
        return $this->success('请求成功',[
            'user_info'=>$this->user_info,
            'goods_view'=>$goods_view,
            'coupon_total'=>$coupon_total,
            'mch_list'=>MchService::userMchList($this->user_id)
        ]);
    }
    public function page_createorder(){
        $addr = table('base_addr')->where('user_id',$this->user_id)->where('is_default',1)->find();
        if(!$addr){
            $addr = table('base_addr')->where('user_id',$this->user_id)->find();
        }

        return $this->success('请求成功',[
            'user_info'=>$this->user_info,
            'addr'=>$addr,
        ]);
    }
}
