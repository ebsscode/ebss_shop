<?php
namespace app\admin\controller;
use app\Logined;
use app\service\system\CheckService;
use think\facade\Db;
class System extends Logined
{
    public function clear_data(){
        CheckService::checkForbidden();
        if($this->param('type')=='shop_order'||$this->param('type')=='all'){
            Db::execute("truncate `shop_order`");
            Db::execute("truncate `shop_order_goods`");
        }
        if($this->param('type')=='shop_goods'||$this->param('type')=='all'){
            Db::execute("truncate `shop_goods`");
            Db::execute("truncate `shop_goods_comment`");
            Db::execute("truncate `shop_goods_favour`");
            Db::execute("truncate `shop_cart`");
            Db::execute("truncate `shop_groupbuy`");
            Db::execute("truncate `shop_order`");
            Db::execute("truncate `shop_order_goods`");
            Db::execute("truncate `shop_spike`");
        }
        if($this->param('type')=='all'){
            Db::execute("truncate `base_charge_order`");
            Db::execute("truncate `base_code`");
            Db::execute("truncate `base_coupon_user`");
            Db::execute("truncate `base_feedback`");
            Db::execute("truncate `base_focus_user`");
            Db::execute("truncate `base_sign_record`");
            Db::execute("truncate `base_withdraw`");
            Db::execute("truncate `log_integral`");
            Db::execute("truncate `log_money`");
            Db::execute("truncate `log_pay`");
            Db::execute("truncate `log_usage`");
            Db::execute("truncate `log_user`");
            Db::execute("truncate `mch_comment`");
            Db::execute("truncate `mch_favour`");
            Db::execute("truncate `shop_cart`");
            Db::execute("truncate `shop_goods_comment`");
            Db::execute("truncate `shop_goods_favour`");
            Db::execute("truncate `shop_goods_view`");
            Db::execute("truncate `shop_order`");
            Db::execute("truncate `shop_order_goods`");
            Db::execute("truncate `sys_debug`");
            Db::execute("truncate `sys_test`");
            Db::execute("truncate `video_view`");
        }
        return $this->success('清除成功！');
    }
}
