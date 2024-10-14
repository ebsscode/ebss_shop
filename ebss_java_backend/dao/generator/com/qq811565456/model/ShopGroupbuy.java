package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-20
 */
@Getter
@Setter
@TableName("shop_groupbuy")
public class ShopGroupbuy implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 拼团表
     */
    @TableId(value = "groupbuy_id", type = IdType.AUTO)
    private Integer groupbuyId;

    /**
     * 开始时间
     */
    private Integer startTime;

    /**
     * 结束时间
     */
    private Integer endTime;

    /**
     * 商品ID
     */
    private Integer goodsId;

    /**
     * 团购名称
     */
    private String name;

    private Integer addTime;

    /**
     * 活动图片
     */
    private String coverImg;

    /**
     * 描述
     */
    @TableField(value = "`desc`")
    private String desc;

    /**
     * 成团人数
     */
    private Integer peopleTotal;
}
