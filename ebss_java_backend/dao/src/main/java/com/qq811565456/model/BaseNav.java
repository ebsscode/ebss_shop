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
@TableName("base_nav")
public class BaseNav implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 导航栏表
     */
    @TableId(value = "nav_id", type = IdType.AUTO)
    private Integer navId;

    /**
     * 导航图片
     */
    private String srcImg;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 跳转链接
     */
    private String url;

    /**
     * 排序数字，越大越靠前
     */
    private Integer sortNum;

    /**
     * 名称
     */
    private String navName;

    private Integer moduleId;
}
