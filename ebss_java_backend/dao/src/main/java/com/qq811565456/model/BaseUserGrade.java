package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;

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
@TableName(value = "base_user_grade",autoResultMap = true)
public class BaseUserGrade extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 会员等级表
     */
    @TableId(value = "user_grade_id", type = IdType.AUTO)
    private Integer userGradeId;

    /**
     * 名称
     */
    private String name;

    /**
     * 等级图标
     */
    private String gradeImg;

    /**
     * 升级经验值
     */
    private BigDecimal amount;

    /**
     * 描述
     */
    @TableField(value = "`desc`")
    private String desc;
}
