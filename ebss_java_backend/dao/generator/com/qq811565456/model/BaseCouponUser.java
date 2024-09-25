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
@TableName("base_coupon_user")
public class BaseCouponUser implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户优惠券
     */
    @TableId(value = "coupon_user_id", type = IdType.AUTO)
    private Integer couponUserId;

    /**
     * 商家ID，仅限此商家使用
     */
    private Integer mchId;

    /**
     * 4待使用	5已使用	6已过期
     */
    private Integer status;

    private Integer couponId;

    private Integer userId;

    private Integer addTime;

    /**
     * 使用时间
     */
    private Integer useTime;
}
