package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 规则表
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-20
 */
@Getter
@Setter
@TableName("sys_permission")
public class SysPermission implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 权限、菜单表
     */
    @TableId(value = "permission_id", type = IdType.AUTO)
    private Integer permissionId;

    /**
     * 权限名称或菜单名称
     */
    private String name;

    /**
     * 父级ID
     */
    private Integer pid;

    /**
     * 图标
     */
    private String icon;

    /**
     * 排序，数字越大越靠前
     */
    private Integer sortNum;

    /**
     * 前端跳转地址
     */
    private String path;

    private String component;

    /**
     * 是不是菜单，1是，0不是
     */
    private Integer isMenu;

    /**
     * 是否显示，1是，0不是
     */
    private Integer isShow;
}
