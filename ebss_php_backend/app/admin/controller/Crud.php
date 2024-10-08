<?php
namespace app\admin\controller;
use app\Basic;
use app\Logined;
use app\service\db\JsonHandler;
use app\service\system\CheckService;
use \think\facade\Db;
class Crud extends Basic
{
    public function list()
    {
        $table = $this->param('table');
        $table_key = table($table)->getPk();
        $whereArr=[];
        $filed = table($table)->getTableFields();
        $fieldsType=table($table)->getFieldsType();
        $join_tables=$this->param('join_tables')??[];
        $db = table($table);
        if(!empty($this->param('sort'))){
            foreach ($this->param('sort') as $item) {
                foreach ($item as $key2 => $item2) {
                    $db->order($key2,$item2);
                }
            }
        }else{
            if(in_array('sort_num',$filed)){
                $db->order("sort_num",'asc');
            }
            if(in_array('add_time',$filed)){
                $db->order("add_time",'desc');
            }
        }
        if(!empty($this->param('where'))){
            foreach ($this->param('where') as $item) {
                if(count($item)==2){
                    $whereArr[]=[$item[0],'=',$item[1]];
                }
                if(count($item)==3){
                    $whereArr[]=[$item[0],$item[1],$item[2]];
                }
            }
        }
        foreach ($this->param() as $key=> $item) {
            if(in_array($key,$filed)&&(!empty($item)||$item===0||$item==='0')){
                $field_type = $fieldsType[$key];
                if($field_type=='int'||$field_type=='tinyint'){
                    $whereArr[]=["$key",'=',$item];
                }else{
                    $whereArr[]=["$key",'like','%'.$item.'%'];
                }
            }
        }
        if(!empty($this->param('table_ids'))){
            $whereArr[]=["$table_key",'in',$this->param('table_ids')];
        }
        if( $table=='shop_order' ){
            if($this->mch){
                $whereArr[]=["mch_id",'=',$this->mch['mch_id']];
            }
        }
        if( $table=='shop_goods' ){
            if($this->mch){
                $whereArr[]=["mch_id",'=',$this->mch['mch_id']];
            }
        }
        if($this->module&&in_array('module_id',$filed)){
            $whereArr[]=["module_id",'in',[0,$this->module['module_id']]];
        }

        $paginate = $db->where($whereArr)->paginate($this->param('limit'));
        $sql = table($table)->getLastSql();
        $list = $paginate['data'];
        if(!empty($join_tables)){
            foreach ($list as &$item) {
                foreach ($join_tables as $join_table) {
                    $join_table_key = table($join_table)->getPk();
                    $item["{$join_table}"]=table($join_table)->where("{$join_table_key}",$item["{$join_table_key}"])->find();
                }
            }
        }
        $paginate['data'] = $list;


        return $this->success('请求成功',[
            'paginate'=>$paginate,
            'table_key'=>$table_key,
//            '$filed'=>$filed,
//            '$fieldsType'=>$fieldsType,
            '$whereArr'=>$whereArr,
//            '$join_tables'=>$join_tables,
            '$sql'=>$sql,
        ]);
    }
    public function save()
    {
        CheckService::checkForbidden();
        $row = $this->param();
        $table=$this->param('table');
        $table_key = table($table)->getPk();
        $table_id = $this->param($table_key) ?? null;
        $filed = table($table)->getTableFields();

        if($table!='sys_module'&&$this->module&&in_array('module_id',$filed)){
            $row['module_id']=$this->module['module_id'];
        }
        if( $table=='mch_favour'&&$this->user_id ){
            $row['user_id']=$this->user_id;
            $has = table('mch_favour')->where('user_id',$this->user_id)->where('mch_id',$this->param('mch_id'))->find();
            if($has){
                table('mch_favour')->where('favour_mch_id',$has['favour_mch_id'])->delete();
                return $this->ajax_return(1,'取消收藏成功');
            }else{
                table('mch_favour')->save($row);
                return $this->ajax_return(1,'收藏成功');
            }
        }
        if( $table=='shop_goods_favour'&&$this->user_id ){
            $row['user_id']=$this->user_id;
            $has = table('shop_goods_favour')->where('user_id',$this->user_id)->where('goods_id',$this->param('goods_id'))->find();
            if($has){
                table('shop_goods_favour')->where('favour_goods_id',$has['favour_goods_id'])->delete();
                return $this->ajax_return(1,'取消收藏成功');
            }else{
                table('shop_goods_favour')->save($row);
                return $this->ajax_return(1,'收藏成功');
            }
        }
        if( $table=='shop_goods' ){
            if($this->mch){
                $row['mch_id'] = $this->mch['mch_id'];
            }
        }
        table($table)->save($row);
        return $this->success($table_id?'更新成功':'添加成功',[
        ]);
    }
    public function detail()
    {
        $table=$this->param('table');
        $table_key = table($table)->getPk();
        $join_tables=$this->param('join_tables')??[];
        $table_id = $this->param($table_key) ?? null;
        $detail = table($table)->find($table_id);
        if(!empty($join_tables)){
            foreach ($join_tables as $join_table) {
                $join_table_key = table($join_table)->getPk();
                $detail["{$join_table}"]=table($join_table)->where("$join_table_key",$detail["$join_table_key"])->find();
            }
        }
        if( $table=='mch' ){
            $detail['favour_info']=null;
            if($this->user_id){
                $favour_info = table('mch_favour')->where('user_id',$this->user_id)->where('mch_id',$table_id)->find();
                $detail['favour_info']=$favour_info;
            }
        }
        return $this->success('请求成功',[
            'detail'=>$detail,
            'table_key'=>$table_key,
        ]);
    }
    public function delete()
    {
        CheckService::checkForbidden();
        $table=$this->param('table');
        foreach ($this->param('table_ids') as $table_id) {
            if( $table=='base_article' ){
                if($table_id<10){
                    return $this->error('禁止删除！');
                }
            }
            if( $table=='base_article_category' ){
                if($table_id<10){
                    return $this->error('禁止删除！');
                }
            }
            if( $table=='base_article_category' ){
                table('base_article')->where('article_category_id',$table_id)->delete();
            }
            if( $table=='mch' ){
                $has = table('shop_order')->where('mch_id',$table_id)->find();
                if($has){
                    return $this->error('商户有订单，禁止删除！');
                }
                $has = table('shop_goods')->where('mch_id',$table_id)->find();
                if($has){
                    return $this->error('商户有商品，禁止删除！');
                }
                table('mch_favour')->where('mch_id',$table_id)->delete();
            }
            if( $table=='sys_role' ){
                if($table_id<10){
                    return $this->error('禁止删除！');
                }
                $has = table('sys_user')->where('role_id',$table_id)->find();
                if($has){
                    return $this->error('角色正在使用，禁止删除！');
                }
            }
            if( $table=='shop_goods' ){
                table('shop_goods_comment')->where('goods_id',$table_id)->delete();
                table('shop_goods_favour')->where('goods_id',$table_id)->delete();
                table('shop_goods_view')->where('goods_id',$table_id)->delete();
                table('shop_groupbuy')->where('goods_id',$table_id)->delete();
                table('shop_cart')->where('goods_id',$table_id)->delete();
            }
            if( $table=='shop_order' ){
                table('shop_order_goods')->where('order_id',$table_id)->delete();
            }
        }
        $result = table($table)->delete($this->param('table_ids'));
        return $this->success("成功删除{$result}条数据！");
    }
}