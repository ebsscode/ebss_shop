package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.List;

import com.qq811565456.typehandler.MyJsonTypeHandler;
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
@TableName(value = "sys_role",autoResultMap = true)
public class SysRole extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 角色表
     */
    @TableId(value = "role_id", type = IdType.AUTO)
    private Integer roleId;

    /**
     * 角色名称
     */
    private String roleName;

    /**
     * 权限ID,JSON
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private List<Integer> permissionIds;
}
