<?php
namespace app\api\controller;
use app\Basic;
use app\service\system\ConfigsService;
use think\facade\Config;
use think\facade\Db;
class Page extends Basic
{
    public function page_index(){
        $location = [
            'province'=>'',
            'city'=>'',
            'district'=>'',
            'latitude'=>'',
            'longitude'=>'',
            'address'=>'',
        ];
        $ip = $this->request->ip();
        $baidumap_key = ConfigsService::get('baidumap_key');
        if($baidumap_key){
            $client = new \GuzzleHttp\Client();
            $res = $client->request('GET', "https://api.map.baidu.com/location/ip?ak={$baidumap_key}&ip={$ip}&coor=gcj02");
            $response=$res->getBody()->getContents();
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
        }
        return $this->success('请求成功！',[
            'configs'=>ConfigsService::getFront(),
            'location'=>$location,
            'front_module'=>$this->module,
            'user_id'=>$this->user_id,
        ]);
    }
    public function page_sign(){
        $next_grade=null;
        $last_sign_record=null;
        if($this->user_id){
            $user_info['user_grade']=table('base_user_grade')->where('user_grade_id',$this->user_info['user_grade_id'])->find();
            $next_grade = table('base_user_grade')->where('amount','>',$this->user_info['experience'])->order('amount asc')->find();
            $last_sign_record = table('base_sign_record')->where('user_id',$this->user_id)->order('add_time desc')->find();
        }
        return $this->ajax_return(1,'请求成功',[
            'user_info'=>$this->user_info,
            'next_grade'=>$next_grade,
            'last_sign_record'=>$last_sign_record,
        ]);
    }
}
