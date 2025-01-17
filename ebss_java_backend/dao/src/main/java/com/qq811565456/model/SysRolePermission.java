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
@TableName(value = "sys_role_permission",autoResultMap = true)
public class SysRolePermission extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 角色权限关联表
     */
    @TableId(value = "role_permission_id", type = IdType.AUTO)
    private Integer rolePermissionId;

    /**
     * 角色ID
     */
    private Integer roleId;

    /**
     * 权限ID
     */
    private Integer permissionId;
}
