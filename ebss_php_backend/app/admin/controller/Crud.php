<?php
namespace app\admin\controller;
use app\Basic;
use app\Logined;
use app\service\db\DataSetRelationService;
use app\service\db\DeleteHandler;
use app\service\db\JsonHandler;
use app\service\db\SqlSegmentService;
use app\service\system\CheckService;
use app\service\system\ResponseService;
use \think\facade\Db;
class Crud extends Basic
{
    public function list()
    {
        $table = $this->param('table');
        $table_key = table($table)->getPk();
        $filed = table($table)->getTableFields();
        $fieldsType=table($table)->getFieldsType();
        $join_tables=$this->param('join_tables')??[];
        $sorts=$this->param('sort')??[];
        $where=$this->param('where')??[];
        $table_ids=$this->param('table_ids')??[];
        $db = table($table);
        SqlSegmentService::toSort($sorts,$filed,$db);
        $where1 = SqlSegmentService::paramToWhere($this->param(),$filed,$fieldsType);
        $where2 = SqlSegmentService::parseWhere($where);
        $where3 = SqlSegmentService::moduleWhere($filed);
        $where4 = SqlSegmentService::tableIdsWhere($table_key,$table_ids);
        $where5 = SqlSegmentService::mchWhere($table);
        $whereArr = array_merge($where1,$where2,$where3,$where4,$where5);

        $paginate = $db->where($whereArr)->paginate($this->param('limit'));
        $sql = table($table)->getLastSql();
        $paginate['data'] = SqlSegmentService::joinTableList($join_tables,$paginate['data']);

        return $this->success('请求成功',[
            'paginate'=>$paginate,
            'table_key'=>$table_key,
//            '$fieldsType'=>$fieldsType,
            '$whereArr'=>$whereArr,
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
        table($table)->save($row);
        DataSetRelationService::save($table,$row);

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
        $detail = SqlSegmentService::joinTableDetail($join_tables,$detail);

        return $this->success('请求成功',[
            'detail'=>$detail,
            'table_key'=>$table_key,
        ]);
    }
    public function delete()
    {
        CheckService::checkForbidden();
        $table=$this->param('table');
        $deleteHandler = DeleteHandler::deleteIds($table,$this->param('table_ids'));
        if($deleteHandler[ResponseService::codeField()]==ResponseService::messageCode()){
            return $this->error($deleteHandler[ResponseService::mseField()]);
        }

        $result = table($table)->delete($this->param('table_ids'));
        return $this->success("成功删除{$result}条数据！");
    }
}