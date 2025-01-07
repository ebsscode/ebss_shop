<?php

namespace app\service\db;

use think\facade\Db;
use think\Paginator;

class BaseDao
{
    public $table = '';
    public $sql = null;
    public function __construct($table)
    {
        $this->table = $table;
    }
    public static function instance($table): BaseDao
    {
        return new static($table);
    }
    public function initTable(){
        $this->sql = Db::name($this->table)->strict(false);
//        $this->sql = Db::table($this->table)->strict(false);
        if($this->table=='sys_user'){
            $this->sql->withoutField('password');
        }
        return $this;
    }
    public function find($data = null){
        $one = $this->sql->find($data);
        return JsonHandler::findHandler($this->table,$one);
    }
    public function select($data = []){
        $list =  $this->sql->select($data)->toArray();
        return JsonHandler::selectHandler($this->table,$list);
    }
    public function paginate($listRows = null, $simple = false): array{
        $paginate =  $this->sql->paginate($listRows,$simple)->toArray();
        return JsonHandler::paginateHandler($this->table,$paginate);
    }
    public function where($field, $op = null, $condition = null){
        $this->sql->where($field,$op,$condition);
        return $this;
    }
    public function save(array $data = [], bool $forceInsert = false){
        $table_key = $this->getPk();
        $table_id = !empty($data[$table_key])?$data[$table_key]:null;
        $filed = $this->getTableFields();

        if($this->table!='sys_module'&&request()->module&&in_array('module_id',$filed)){
            $data['module_id']=request()->module['module_id'];
        }
        if( $this->table=='shop_goods' ){
            if(request()->mch){
                $data['mch_id'] = request()->mch['mch_id'];
            }
        }

        $data = JsonHandler::saveHandler($this->table,$data);
        $data = TimeHandler::filedTimeStamp($filed,$table_id,$data);
        return $this->sql->save($data,$forceInsert);
    }
    public function update(array $data = []): int{
        $table_key = $this->getPk();
        $table_id = !empty($data[$table_key])?$data[$table_key]:null;
        $filed = $this->getTableFields();
        $data = TimeHandler::filedTimeStamp($filed,$table_id,$data);
        $data = JsonHandler::saveHandler($this->table,$data);
        return $this->sql->update($data);
    }
    public function insertAll(array $dataSet = [], int $limit = 0): int{
        $table_key = $this->getPk();
        $table_id = !empty($data[$table_key])?$data[$table_key]:null;
        $filed = $this->getTableFields();
        foreach ($dataSet as $index => &$data) {
            $data = JsonHandler::saveHandler($this->table,$data);
            $data = TimeHandler::filedTimeStamp($filed,$table_id,$data);
        }
        return $this->sql->insertAll($dataSet,$limit);
    }
    public function inc(string $field, float $step = 1){
        return $this->sql->inc($field,$step)->update();
    }
    public function dec(string $field, float $step = 1){
        return $this->sql->dec($field,$step)->update();
    }
    public function count(string $field = '*'): int{
        return (int) $this->sql->count($field);
    }
    public function insert(array $data = [], bool $getLastInsID = false){
        $table_key = $this->getPk();
        $table_id = !empty($data[$table_key])?$data[$table_key]:null;
        $filed = $this->getTableFields();
        $data = TimeHandler::filedTimeStamp($filed,$table_id,$data);
        $data = JsonHandler::saveHandler($this->table,$data);
        return $this->sql->insert($data,$getLastInsID);
    }
    public function insertGetId(array $data){
        $table_key = $this->getPk();
        $table_id = !empty($data[$table_key])?$data[$table_key]:null;
        $filed = $this->getTableFields();
        $data = TimeHandler::filedTimeStamp($filed,$table_id,$data);
        $data = JsonHandler::saveHandler($this->table,$data);
        return $this->sql->insertGetId($data);
    }
    public function delete($data = null): int{
        return $this->sql->delete($data);
    }
    public function getPk(){
        return $this->sql->getPk();
    }
    public function getTableFields($tableName = ''): array{
        return $this->sql->getTableFields($tableName);
    }
    public function getFieldsType(): array{
        return $this->sql->getFieldsType();
    }
    public function value(string $field, $default = null){
        $data = $this->sql->value($field,$default);
        return JsonHandler::valueHandler($this->table,$field,$data);
    }
    public function column($field, string $key = ''): array{
        return $this->sql->column($field,$key);
    }
    public function field($field){
        $this->sql->field($field);
        return $this;
    }
    public function order($field, string $order = ''){
        $this->sql->order($field,$order);
        return $this;
    }
    public function getLastSql(): string{
        return $this->sql->getLastSql();
    }
    public function leftJoin($join, string $condition = null, array $bind = [])
    {
        $this->sql->join($join, $condition, 'LEFT', $bind);
        return $this;
    }
    public function sum($field): float{
        return $this->sql->sum($field);
    }
    public function max($field, bool $force = true){
        return $this->sql->max($field,$force);
    }
    public function min($field, bool $force = true){
        return $this->sql->min($field,$force);
    }
    public function avg($field): float{
        return $this->sql->avg($field);
    }
    public function limit(int $offset, int $length = null){
        $this->sql->limit($offset,$length);
        return $this;
    }
    public function page(int $page, int $listRows = null){

        $this->sql->page($page,$listRows);
        return $this;
    }
    public function whereOr($field, $op = null, $condition = null){
        $this->sql->whereOr($field, $op, $condition);
        return $this;
    }


}