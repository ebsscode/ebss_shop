<?php
namespace app\api\controller;
use app\Basic;
use app\Logined;
use think\facade\Config;
use think\facade\Db;
class Category extends Basic
{
    public function list(){
        $list = table('base_category')->where('is_show',1)->order('sort_num desc')->select();
        $result = getTree($list,0,'category_id','pid','children');

        return $this->success('请求成功',[
            'list'=>$result,
            'debug'=>$list,
        ]);
    }
}
