<?php

namespace app\service\mch;

class MchService
{
    public static function userMchList($user_id){
        $listManager = table('mch_user_ref')->field('mch.*')->where('mch_user_ref.user_id',$user_id)->leftJoin('mch','mch_user_ref.mch_id = mch.mch_id')->select();
        $listOwner = table('mch')->where('user_id',$user_id)->select();

//        var_dump($listOwner);

        return array_merge($listManager,$listOwner);
    }

}