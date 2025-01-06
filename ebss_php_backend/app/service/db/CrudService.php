<?php

namespace app\service\db;

class CrudService
{
    public static function paginate($params)
    {
        $table = $params['table'];
        $table_key = table($table)->getPk();
        $filed = table($table)->getTableFields();
        $fieldsType=table($table)->getFieldsType();
        $join_tables=$params['join_tables']??[];
        $sorts=$params['sort']??[];
        $where=$params['where']??[];
        $where_or=$params['where_or']??[];
        $table_ids=$params['table_ids']??[];
        $db = table($table);
        SqlSegmentService::toSort($sorts,$filed,$db);
        $where1 = SqlSegmentService::paramToWhere($params,$filed,$fieldsType);
        $where2 = SqlSegmentService::parseWhere($where);
        $where3 = SqlSegmentService::moduleWhere($filed);
        $where4 = SqlSegmentService::tableIdsWhere($table_key,$table_ids);
        $where5 = SqlSegmentService::mchWhere($table);
        $whereArr = array_merge($where1,$where2,$where3,$where4,$where5);

        foreach ($where_or as $item) {
            $db->whereOr($item[0],$item[1],$item[2]);
        }

        $paginate = $db->where($whereArr)->paginate($params('limit'));
        $sql = table($table)->getLastSql();
        $list = SqlSegmentService::joinTableList($join_tables,$paginate['data']);
        $paginate['data'] = $list;

        return [
            'paginate'=>$paginate,
            'table_key'=>$table_key,
//            '$filed'=>$filed,
//            '$fieldsType'=>$fieldsType,
            '$whereArr'=>$whereArr,
//            '$join_tables'=>$join_tables,
            '$sql'=>$sql,
        ];
    }

}