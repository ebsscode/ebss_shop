package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
@Data
@TableName(value = "log_user",autoResultMap = true)
public class LogUser extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 用户日志表
     */
    @TableId(value = "user_log_id", type = IdType.AUTO)
    private Integer userLogId;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 用户名
     */
    private String name;

    /**
     * 请求URL
     */
    private String url;

    /**
     * 访问IP
     */
    private String ip;

    /**
     * 请求时间
     */
    private Integer addTime;

    /**
     * 描述
     */
    private String title;
}
