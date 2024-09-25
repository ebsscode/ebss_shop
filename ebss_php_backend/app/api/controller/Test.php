<?php
namespace app\api\controller;
use app\Basic;

class Test extends Basic
{
    public function tt(){
        $t = new SysTestDao();
        $t->name = 'name';
        $t->add_time = time();
        var_dump( $t->save() );
    }
    public function t(){
//        $t = '[{"goods_id":9,"title":"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u5b9a\u5236\u4f5c\u516c\u4f17\u53f7\u5206\u9500\u5546\u57ce\u6a21\u677f\u70b9\u9910\u996e\u5916\u5356\u8f6f\u4ef6APP\u6e90\u7801","cover_img":"upload\/20230712\/bffb8e62f9bccb5acec6dd4a6dc397ed.png","quantity":5555,"price":"100.00","original_price":"100.00","imglist":"[\"upload\/20230712\/ac6e458a65302cd866dac703cde52635.png\",\"upload\/20230712\/cea5ca1a71f2e23e721ac1fefd1514a5.png\",\"upload\/20230712\/2b29556b4f80a1814870342606124d89.jpg\"]","content":"<p><img src=\"https:\/\/h.vivivi.club\/upload\/20230712\/95cc60e36c2175a727a6ca15b959c2fd.png\" alt=\"upload\/20230712\/95cc60e36c2175a727a6ca15b959c2fd.png\" data-href=\"\" style=\"\"\/><\/p>","add_time":1688026356,"category_id":56,"is_index":1,"sort_num":200,"mch_id":0,"is_listing":1,"is_integral":1,"integral":0,"is_spike":1,"view_count":402,"sale_count":20,"labels":"[{\"name\":\"\u7279\u4ef7\u79d2\u6740\",\"value\":\"\u7279\u4ef7\u79d2\u6740\"},{\"name\":\"\u4e70\u8d35\u53cc\u500d\u8d54\",\"value\":\"\u4e70\u8d35\u53cc\u500d\u8d54\"}]","spec":"[{\"name\":\"\\u5c3a\\u5bf8\",\"values\":[{\"name\":\"L\"},{\"name\":\"S\"},{\"name\":\"M\"}]},{\"name\":\"\\u989c\\u8272\",\"values\":[{\"name\":\"\\u767d\\u8272\"},{\"name\":\"\\u9ed1\\u8272\"},{\"name\":\"\\u7d2b\\u8272\"},{\"name\":\"\\u7070\\u8272\"}]},{\"name\":\"\\u5b9a\\u5236\",\"values\":[{\"name\":\"\\u662f\"},{\"name\":\"\\u5426\"}]}]","freight":"1.00","distribution_money":"1.00","amount":1,"selected_spec":"M \u7d2b\u8272 \u5426"}]';
//        $t = json_decode($t,true);
//        foreach ($t as $item) {
//            table('shop_goods')->strict(false)->insert($item);
//        }
    }
}
