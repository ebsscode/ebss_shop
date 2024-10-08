<?php

namespace app\service\shop;

use app\service\system\TimeService;

class ActivityService
{
    public static function willStartSpikeList(){
        $spikes = table('shop_spike')->where("time_type = 1 and start_at > ".time())->whereOr("time_type = 2 and start_at > ".TimeService::todaySecons())->order('start_at asc')->select();
        return $spikes;
    }
    public static function willStartSpikeOne(){
        $spike = table('shop_spike')->where("time_type = 1 and start_at > ".time())->whereOr("time_type = 2 and start_at > ".TimeService::todaySecons())->order('start_at asc')->find();
        return $spike;
    }

}