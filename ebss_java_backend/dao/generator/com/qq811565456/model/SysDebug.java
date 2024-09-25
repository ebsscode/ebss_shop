package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-20
 */
@Getter
@Setter
@TableName("sys_debug")
public class SysDebug implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 调试表
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 日志标题
     */
    private String msg;

    /**
     * 数据
     */
    private String data;

    /**
     * 添加时间
     */
    private String addTime;

    /**
     * 参数
     */
    private String param;

    /**
     * 请求链接
     */
    private String url;
}
