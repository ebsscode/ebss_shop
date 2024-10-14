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
public class CrudService<K>  {
    @Autowired
    private ApplicationContext applicationContext;

    public String tableToModelName(String table_name) {
        String model_name = StrUtil.toCamelCase(table_name);
        model_name = StrUtil.upperFirst(model_name);
        return model_name;
    }

    public <T> T tableToModel(String table_name){
        String model_name =tableToModelName(table_name);
        Class<T> entity = (Class<T>) ClassLoaderUtil.loadClass("com.qq811565456.model." + model_name);
        T entityInstance =  ReflectUtil.newInstance(entity);
        log.info("entityInstance:{}",entityInstance);
        return entityInstance;
    }

    public MyBaseMapper<K> tableToMapper(String table_name){
        String model_name = tableToModelName(table_name);
        Class<?> mapper = ClassLoaderUtil.loadClass("com.qq811565456.mapper."+model_name+"Mapper");
        MyBaseMapper<K> mapperInstance = (MyBaseMapper<K>) applicationContext.getBean(mapper);
        log.info("mapperInstance:{}",mapperInstance);
        return mapperInstance;
    }

    public MyBaseMapper<K> modelToMapper(K model){
        Class<K> mapper = (Class<K>) ClassLoaderUtil.loadClass("com.qq811565456.mapper."+model.getClass().getName()+"Mapper");
        MyBaseMapper<K> mapperInstance = (MyBaseMapper<K>) applicationContext.getBean(mapper);
        log.info("mapperInstance:{}",mapperInstance);
        return mapperInstance;
    }


}