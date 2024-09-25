package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
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
@TableName("base_coupon")
public class BaseCoupon implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 优惠券
     */
    @TableId(value = "coupon_id", type = IdType.AUTO)
    private Integer couponId;

    /**
     * 生效时间
     */
    private Integer startTime;

    /**
     * 过期时间
     */
    private Integer expireTime;

    /**
     * 1满减	2打折
     */
    private Integer type;

    /**
     * 优惠券名称
     */
    private String name;

    /**
     * 商家ID，仅限此商家使用
     */
    private Integer mchId;

    /**
     * 金额或者折扣比例
     */
    private BigDecimal amount;

    /**
     * 满减金额
     */
    private BigDecimal fullAmount;

    /**
     * 总张数
     */
    private Integer total;

    /**
     * 一个人可以领取多少张
     */
    private Integer personTotal;

    /**
     * 可用商品
     */
    private String goodsIds;

    /**
     * 已领取张数
     */
    private Integer receiveTotal;

    /**
     * 使用说明
     */
    private String desc;

    /**
     * 是否可叠加
     */
    private Integer isSuperimposed;
}
