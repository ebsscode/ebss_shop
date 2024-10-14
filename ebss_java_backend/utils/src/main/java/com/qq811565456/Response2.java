package com.qq811565456;
import cn.hutool.core.util.StrUtil;

import java.io.Serializable;

/**
 * 响应信息主体
 *
 * @author hewei
 */
//@JSONType(naming = PropertyNamingStrategy.SnakeCase)
public class Response2<T> implements Serializable
{
    private static final long serialVersionUID = 1L;

    private Integer code;

    private String msg;

    private T data;

    public static <T> Response2<T> ok()
    {
        return restResult(MessageCode.SUCCESS,null,null);
    }

    public static <T> Response2<T> ok(T data)
    {
        return restResult(MessageCode.SUCCESS,null,data);
    }

    public static <T> Response2<T> ok(String msg, T data)
    {
        return restResult(MessageCode.SUCCESS, msg,data);
    }
    public static <T> Response2<T> ok(MessageCode code, String msg, T data)
    {
        return restResult(code, msg,data);
    }

    public static <T> Response2<T> fail()
    {
        return restResult(MessageCode.ERROR,null,  null);
    }

    public static <T> Response2<T> fail(String msg)
    {
        return restResult(MessageCode.ERROR, msg,null);
    }

    public static <T> Response2<T> fail(T data)
    {
        return restResult(MessageCode.ERROR, null,data);
    }

    public static <T> Response2<T> fail(String msg, T data)
    {
        return restResult(MessageCode.ERROR, msg,data);
    }

    public static <T> Response2<T> fail(MessageCode code, String msg)
    {
        return restResult(code, msg,null);
    }

    public static <T> Response2<T> fail(MessageCode code, String msg, T data)
    {
        return restResult(code, msg,data);
    }

    private static <T> Response2<T> restResult(MessageCode messageCode, String msg, T data)
    {
        Response2<T> apiResult = new Response2<>();
        apiResult.setCode(messageCode.getCode());
        apiResult.setData(data);
        apiResult.setMsg(StrUtil.isEmpty(msg)?messageCode.getMsg():msg);
        return apiResult;
    }

    public Integer getCode()
    {
        return code;
    }

    public void setCode(Integer code)
    {
        this.code = code;
    }

    public String getMsg()
    {
        return msg;
    }

    public void setMsg(String msg)
    {
        this.msg = msg;
    }

    public T getData()
    {
        return data;
    }

    public void setData(T data)
    {
        this.data = data;
    }

    public static <T> Boolean isError(Response2<T> ret)
    {
        return !isSuccess(ret);
    }

    public static <T> Boolean isSuccess(Response2<T> ret)
    {
        return MessageCode.SUCCESS.getCode() == ret.getCode();
    }
}
