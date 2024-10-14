package com.qq811565456;
import cn.hutool.core.util.StrUtil;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
/**
 * 响应信息主体
 *
 * @author hewei
 */
public class Response extends HashMap<String,Object> implements Serializable
{
    private static final long serialVersionUID = 1L;

    public static Response ok()
    {
        return restResult(MessageCode.SUCCESS,MessageCode.SUCCESS.getMsg(), Map.of());
    }

    public static  Response ok(String msg)
    {
        return restResult(MessageCode.SUCCESS, msg,Map.of());
    }

    public static Response ok(Map<String,Object> data)
    {
        return restResult(MessageCode.SUCCESS,MessageCode.SUCCESS.getMsg(),data);
    }

    public static  Response ok(String msg,Map<String,Object> data)
    {
        return restResult(MessageCode.SUCCESS, msg,data);
    }
    public static  Response ok(MessageCode code,String msg,Map<String,Object> data)
    {
        return restResult(code, msg,data);
    }

    public static  Response fail()
    {
        return restResult(MessageCode.ERROR,MessageCode.SUCCESS.getMsg(),  Map.of());
    }

    public static  Response fail(String msg)
    {
        return restResult(MessageCode.ERROR, msg,Map.of());
    }

    public static  Response fail(Map<String,Object> data)
    {
        return restResult(MessageCode.ERROR, MessageCode.SUCCESS.getMsg(),data);
    }

    public static  Response fail(String msg,Map<String,Object> data)
    {
        return restResult(MessageCode.ERROR, msg,data);
    }

    public static  Response fail(MessageCode code, String msg)
    {
        return restResult(code, msg,Map.of());
    }

    public static  Response fail(MessageCode code, String msg,Map<String,Object> data)
    {
        return restResult(code, msg,data);
    }

    private static  Response restResult(MessageCode messageCode, String msg,Map<String,Object> data)
    {
        Response apiResult = new Response();

        apiResult.put("code",messageCode.getCode());
        apiResult.put("msg", StrUtil.isEmpty(msg)?messageCode.getMsg():msg);

        if(data!=null){
            data.forEach((key,value)->{
                apiResult.put(key,value);
            });
        }
        return apiResult;
    }

    public static  Boolean isError(Response ret)
    {
        return !isSuccess(ret);
    }

    public static  Boolean isSuccess(Response ret)
    {
        return MessageCode.SUCCESS.getCode() == ret.get("code");
    }
}
