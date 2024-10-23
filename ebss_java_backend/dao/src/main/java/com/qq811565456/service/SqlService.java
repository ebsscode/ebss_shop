package com.qq811565456.service;

import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import com.qq811565456.config.MyPage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class SqlService<T> {

    public MyPage<T> toPage(JSONObject params){
        long page = 1;
        long limit = 10;
        if( null!=params.get("page")){
            page = Long.parseLong(String.valueOf(params.get("page")));
        }
        if( null!=params.get("limit")){
            limit = Long.parseLong(String.valueOf(params.get("limit")));
        }
        MyPage<T> myPage = new MyPage<>(page,limit);
        return myPage;
    }
    public QueryWrapperService<T> ParamToWhere(JSONObject params, Class<T> type){
//        log.info("params:{}",params);

        QueryWrapperService<T> where = new QueryWrapperService<>(type);

        List<String> paramNames = new ArrayList<>();
        params.forEach((k,v)->{
            paramNames.add(k);
        });

        Field[] fields = type.getDeclaredFields();
        List<String> fieldNames = new ArrayList<>();
        Map<String,String> fieldTypes = new HashMap<>();
        for (Field field : fields) {
            field.setAccessible(true);
            String fieldName = StrUtil.toUnderlineCase(field.getName());
            String fieldType = field.getType().getName();
            fieldTypes.put(fieldName,fieldType);
            fieldNames.add(fieldName);
        }
//        log.info("paramNames:{},{}",paramNames,fieldNames);
        paramNames.forEach((paramName)->{
            if(fieldNames.contains(paramName)){
                String fieldType = fieldTypes.get(paramName);
//                log.info("t:{}",t);
                if("java.lang.Integer".equals(fieldType)){
                    where.eq(paramName,params.get(paramName));
                }else{
                    where.like(paramName,params.get(paramName));
                }
            }
        });
        return where;
    }

}
