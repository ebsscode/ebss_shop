<?php
namespace app\index\controller;
use app\Basic;
use app\connector\AmapConnector;
use think\facade\Db;

class Amap extends Basic
{
    public function district(){
        $list = AmapConnector::district();

        $data = [];
        foreach ($list as $item) {
            $data[]=[
                'parent_code'=>'',
                'adcode'=>$item['adcode'],
                'name'=>$item['name'],
                'center'=>$item['center'],
                'level'=>$item['level'],
            ];
            if(has($item['districts'])){
                foreach ($item['districts'] as $item2) {
                    $data[]=[
                        'parent_code'=>$item['adcode'],
                        'adcode'=>$item2['adcode'],
                        'name'=>$item2['name'],
                        'center'=>$item2['center'],
                        'level'=>$item2['level'],
                    ];
                    if(has($item2['districts'])){
                        foreach ($item2['districts'] as $item3) {
                            $data[]=[
                                'parent_code'=>$item2['adcode'],
                                'adcode'=>$item3['adcode'],
                                'name'=>$item3['name'],
                                'center'=>$item3['center'],
                                'level'=>$item3['level'],
                            ];
                            if(has($item3['districts'])){
                                foreach ($item3['districts'] as $item4) {
                                    $data[]=[
                                        'parent_code'=>$item3['adcode'],
                                        'adcode'=>$item4['adcode'],
                                        'name'=>$item4['name'],
                                        'center'=>$item4['center'],
                                        'level'=>$item4['level'],
                                    ];
                                }
                            }
                        }
                    }
                }
            }
        }
        Db::execute('truncate base_region');
        table('base_region')->insertAll($data);

        return $this->success('请求成功',[
            'list'=>count($list),
        ]);
    }

}
