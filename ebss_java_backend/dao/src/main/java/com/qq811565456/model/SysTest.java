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
@TableName("sys_test")
public class SysTest implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 测试表
     */
    @TableId(value = "test_id", type = IdType.AUTO)
    private Integer testId;

    /**
     * 标题
     */
    private String name;

    /**
     * 添加时间
     */
    private Integer addTime;
}
