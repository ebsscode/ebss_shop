package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 系统配置表
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
@Data
@TableName("sys_config")
public class SysConfig implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 配置项名称
     */
    private String name;

    /**
     * 配置项值
     */
    private String value;

    private String group;

    private Integer isFront;
}
