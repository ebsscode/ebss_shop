<?php
namespace app\admin\controller;
use app\Logined;
use think\facade\Db;
class System extends Logined
{
    public function clear_data(){
        if($this->param('type')=='shop_order'||$this->param('type')=='all'){
            Db::execute("truncate `shop_order`");
        }
        if($this->param('type')=='shop_goods'||$this->param('type')=='all'){
            Db::execute("truncate `shop_goods`");
            Db::execute("truncate `shop_goods_comment`");
        }
        if($this->param('type')=='all'){
        }
        return $this->success('清除成功！');
    }
}
