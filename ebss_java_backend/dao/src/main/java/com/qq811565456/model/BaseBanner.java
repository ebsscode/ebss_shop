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
@TableName(value = "base_banner",autoResultMap = true)
public class BaseBanner extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 轮播图
     */
    @TableId(value = "banner_id", type = IdType.AUTO)
    private Integer bannerId;

    /**
     * 图片地址
     */
    private String srcImg;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 排序数字，数字越大越靠前
     */
    private Integer sortNum;

    /**
     * 跳转链接
     */
    private String url;

    private Integer moduleId;
}
