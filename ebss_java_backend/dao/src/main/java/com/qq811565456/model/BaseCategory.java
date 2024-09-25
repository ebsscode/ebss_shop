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
 * 商品分类
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
@Data
@TableName("base_category")
public class BaseCategory implements Serializable {

    private static final long serialVersionUID = 1L;


    /**
     * 分类表
     */
    @TableId(value = "category_id", type = IdType.AUTO)
    private Integer categoryId;

    /**
     * 上级分类id
     */
    private Integer pid;

    /**
     * 分类名称
     */
    private String catName;

    /**
     * 图标URL
     */
    private String catImg;

    /**
     * 排序数字
     */
    private Short sortNum;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 是否显示【1=> 显示，2=> 隐藏】
     */
    private Short isShow;

    /**
     * 跳转链接
     */
    private String url;

    /**
     * 是否首页显示
     */
    private Integer isIndex;

    private Integer moduleId;
}
