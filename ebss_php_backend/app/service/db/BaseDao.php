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
        if($this->table=='sys_user'){
            $this->sql->withoutField('password');
        }

        return $this;
    }
    public function find($data = null){
        return $this->sql->find($data);
    }
    public function select($data = null){
        return $this->sql->select($data)->toArray();
    }
    public function where($field, $op = null, $condition = null){
        $this->sql->where($field,$op,$condition);
        return $this;
    }
    public function save(array $data = [], bool $forceInsert = false){
        $table_key = $this->getPk();
        $table_id = !empty($data[$table_key])?$data[$table_key]:null;
        $filed = $this->getTableFields();
        if(!$table_id){
            if(in_array('add_time',$filed)){
                $data['add_time']=time();
            }
            if(in_array('add_date',$filed)){
                $data['add_date']=date('Y-m-d');
            }
        }
        if(in_array('update_time',$filed)){
            $data['update_time']=time();
        }
        return $this->sql->save($data,$forceInsert);
    }
    public function update(array $data = []): int{
        return $this->sql->update($data);
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
    public function insertGetId(array $data){
        return $this->sql->insertGetId($data);
    }
    public function delete($data = null): int{
        return $this->sql->delete($data);
    }
    public function getPk(){
        return $this->sql->getPk();
    }
    public function paginate($listRows = null, $simple = false): array{
        return $this->sql->paginate($listRows,$simple)->toArray();
    }
    public function getTableFields($tableName = ''): array{
        return $this->sql->getTableFields($tableName);
    }
    public function getFieldsType(): array{
        return $this->sql->getFieldsType();
    }
    public function value(string $field, $default = null){
        return $this->sql->value($field,$default);
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
    public function insert(array $data = [], bool $getLastInsID = false){
        return $this->sql->insert($data,$getLastInsID);
    }
    public function insertAll(array $dataSet = [], int $limit = 0): int{
        return $this->sql->insertAll($dataSet,$limit);
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