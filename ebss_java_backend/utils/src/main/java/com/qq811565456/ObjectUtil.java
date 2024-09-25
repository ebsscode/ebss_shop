package com.qq811565456;

import java.util.List;
import java.util.Map;

public class ObjectUtil {

    public static boolean has(Object v) {// todo 未测试的方法
        if(v==null){
            return false;
        }
        if(v instanceof Integer){
            return NumberUtil.has((Integer) v);
        }
        if(v instanceof String){
            return StringUtil.has((String) v);
        }
        if(v instanceof Map){
            return !((Map<?, ?>) v).isEmpty();
        }
        if(v instanceof List){
            return !((List<?>) v).isEmpty();
        }
        return (boolean)v;
    }


}