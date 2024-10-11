package com.qq811565456.service;

import com.baomidou.mybatisplus.core.conditions.SharedString;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;

public class MyQueryWrapper<T> extends QueryWrapper<T> {
    protected String tableName = null;
    public MyQueryWrapper(Class<T> entity) {
        super();
        tableName = SqlHelper.table(entity).getTableName();
    }
}
