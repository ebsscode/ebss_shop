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
@TableName(value = "base_code",autoResultMap = true)
public class BaseCode extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 验证码表
     */
    @TableId(value = "code_id", type = IdType.AUTO)
    private Integer codeId;

    /**
     * 手机号
     */
    private String tel;

    /**
     * 验证码类型：	login_code为登录注册验证码
     */
    private String type;

    /**
     * 验证码
     */
    private String code;

    /**
     * 验证码发送时间
     */
    private Integer addTime;
}
