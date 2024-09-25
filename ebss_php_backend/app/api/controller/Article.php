<?php
namespace app\api\controller;
use app\Basic;
use think\facade\Db;
use think\facade\View;
class Article extends Basic
{
    public function detail(){
        $detail = table('base_article')->where('article_id',$this->param('article_id'))->find();
        return $this->success('请求成功',[
            'detail'=>$detail,
        ]);
    }
}
