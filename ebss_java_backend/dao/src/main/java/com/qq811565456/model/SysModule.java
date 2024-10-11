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
@TableName(value = "sys_module",autoResultMap = true)
public class SysModule extends BaseModel {

    private static final long serialVersionUID = 1L;

    @TableId(value = "module_id", type = IdType.AUTO)
    private Integer moduleId;

    private String indexPath;

    private String name;
}
