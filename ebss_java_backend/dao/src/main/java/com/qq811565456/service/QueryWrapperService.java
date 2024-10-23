package com.qq811565456.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;

public class QueryWrapperService<T> extends QueryWrapper<T> {
    protected String tableName = null;
    public QueryWrapperService(Class<T> entity) {
        super();
        tableName = SqlHelper.table(entity).getTableName();
    }
}
