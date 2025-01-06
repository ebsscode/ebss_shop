<?php
namespace app\api\controller;
use app\Basic;
use app\MyException;
use app\service\system\TimeService;
use app\service\user\UserService;

class Mch extends Basic
{
    public function detail(){
        $table_id = $this->param('mch_id');
        $detail=table('mch')->find($table_id);
        if($this->user_id){
            $favour_info = table('mch_favour')->where('user_id',$this->user_id)->where('mch_id',$table_id)->find();
            $detail['favour_info']=$favour_info;
        }
        return $this->success('请求成功',[
            'detail'=>$detail,
        ]);
    }
    public function favour(){
        UserService::checkLogin();
        $row['user_id']=$this->user_id;
        $row['mch_id']=$this->param('mch_id');
        $has = table('mch_favour')->where('user_id',$this->user_id)->where('mch_id',$this->param('mch_id'))->find();
        if($has){
            table('mch_favour')->where('favour_mch_id',$has['favour_mch_id'])->delete();
            return $this->success('取消收藏成功');
        }else{
            table('mch_favour')->save($row);
            return $this->success('收藏成功');
        }
    }

}
