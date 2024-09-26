<?php
namespace app\api\controller;
use app\Basic;
use app\connector\AmapConnector;
use app\Logined;
use app\service\system\ConfigsService;
use think\facade\Config;
use think\facade\Db;
class Location extends Basic
{
    public function latlng_to_addr(){
        $baidumap_key = ConfigsService::get('baidumap_key');
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $res = $client->request('GET', "https://api.map.baidu.com/reverse_geocoding/v3/?ak={$baidumap_key}&output=json&language_auto=1&extensions_road=true&radius=200&extensions_poi=1&coordtype=gcj02ll&location={$this->param('latitude')},{$this->param('longitude')}"); //  &poi_types=房地产
        $response=$res->getBody()->getContents();
        if(empty($response)){
            return $this->ajax_return(2,'解析失败1',[
                'param'=>$this->param(),
                '$baidumap_key'=>$baidumap_key,
                '$response'=>$response,
            ]);
        }
        $response=decodeJson($response);
        if($response['status']!==0){
            return $this->ajax_return(2,'解析失败2',[
                'param'=>$this->param(),
                '$baidumap_key'=>$baidumap_key,
                '$response'=>$response,
            ]);
        }
        if(!empty($response['result']['pois'])){
            $formatted_address=$response['result']['addressComponent']['city'].$response['result']['addressComponent']['district'].$response['result']['pois'][0]['name'].$response['result']['pois'][0]['direction'].$response['result']['pois'][0]['distance'].'米';
        }else{
            $formatted_address=$response['result']['formatted_address'];
        }
        return $this->success('解析成功',[
            'province'=>$response['result']['addressComponent']['province'],
            'city'=>$response['result']['addressComponent']['city'],
            'district'=>$response['result']['addressComponent']['district'],
            'address'=>$formatted_address,
            'latitude'=>$this->param('latitude'),
            'longitude'=>$this->param('longitude'),
//            '$response'=>$response['result'],
        ]);
    }
    public function text_to_addr()
    {
        $ip = $this->request->ip();
        $baidumap_key = ConfigsService::get('baidumap_key');
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', "https://api.map.baidu.com/location/ip?ak={$baidumap_key}&ip={$ip}&coor=gcj02ll");
        $response=$res->getBody()->getContents();
        if(empty($response)){
            return $this->ajax_return(2,'IP解析失败1',[
                '$ip'=>$ip,
                '$baidumap_key'=>$baidumap_key,
                '$response'=>$response,
            ]);
        }
        $response=decodeJson($response);
        if($response['status']!==0){
            return $this->ajax_return(2,'IP解析失败2',[
                '$ip'=>$ip,
                '$baidumap_key'=>$baidumap_key,
                '$response'=>$response,
            ]);
        }
        return $this->success('解析成功',[
            'ip_info'=>$response,
//            '$ip'=>$ip,
//            '$baidumap_key'=>$baidumap_key,
//            '$response'=>$response,
        ]);
    }
    public function ip_info(){
        $ip = $this->request->ip();
        $baidumap_key = ConfigsService::get('baidumap_key');
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', "https://api.map.baidu.com/location/ip?ak={$baidumap_key}&ip={$ip}&coor=gcj02");
        $response=$res->getBody()->getContents();
        $location = [
            'province'=>'',
            'city'=>'',
            'district'=>'',
            'latitude'=>'',
            'longitude'=>'',
            'address'=>'',
        ];
        if(!empty($response)){
            $response=decodeJson($response);
            if($response['status']===0){
                $location = [
                    'province'=>$response['content']['address_detail']['province'],
                    'city'=>$response['content']['address_detail']['city'],
                    'district'=>$response['content']['address_detail']['district'],
                    'latitude'=>$response['content']['point']['y'],
                    'longitude'=>$response['content']['point']['x'],
                    'address'=>$response['content']['address'],
                ];
            }
        }
        return $this->success('请求成功！',[
            'location'=>$location,
        ]);
    }
    public function district()
    {
        $list = AmapConnector::district();
        return $this->success('请求成功！',[
            'list'=>$list,
        ]);
    }

}
