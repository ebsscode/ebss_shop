package com.qq811565456.service;

import cn.hutool.core.util.ClassLoaderUtil;
import cn.hutool.core.util.ReflectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.core.util.TypeUtil;
import com.qq811565456.mapper.MyBaseMapper;
import com.qq811565456.model.BaseModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class CrudService<T> {
    @Autowired
    private ApplicationContext applicationContext;

    public String tableToModelName(String table_name) {
        String model_name = StrUtil.toCamelCase(table_name);
        model_name = StrUtil.upperFirst(model_name);
        return model_name;
    }


    public BaseModel tableToModel(String table_name,Object... params){
        String model_name =tableToModelName(table_name);
        Class<?> entity = ClassLoaderUtil.loadClass("com.qq811565456.model." + model_name);
        BaseModel entityInstance = (BaseModel) ReflectUtil.newInstance(entity,params);
        log.info("entityInstance:{}",entityInstance);
        return entityInstance;
    }

    public MyBaseMapper<T> tableToMapper(String table_name){
        Object model_name = tableToModelName(table_name);
        Class<?> mapper = ClassLoaderUtil.loadClass("com.qq811565456.mapper."+model_name+"Mapper");
        MyBaseMapper<T> mapperInstance = (MyBaseMapper<T>) applicationContext.getBean(mapper);

//        MyBaseMapper<?> mapperInstance = (MyBaseMapper<?>) applicationContext.getBean(mapper);
        log.info("mapperInstance:{}",mapperInstance);
        return mapperInstance;
    }


}