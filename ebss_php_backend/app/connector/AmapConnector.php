<?php

namespace app\connector;

use app\service\system\CheckService;
use app\service\system\ConfigsService;

class AmapConnector
{
    public static function district(){
        $http = new HttpConnector();
        $amap_key = ConfigsService::get("amap_key");
        CheckService::isExist($amap_key);
        $res = $http->GET("https://restapi.amap.com/v3/config/district?key=$amap_key&subdistrict=3");
        if($res['status']==1&&$res['infocode']=='10000'){
            return $res['districts'][0]['districts'];
        }else{
            return [];
        }
    }

}