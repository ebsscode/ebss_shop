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
@TableName("shop_cart")
public class ShopCart implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 购物车
     */
    @TableId(value = "cart_id", type = IdType.AUTO)
    private Integer cartId;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 商品ID
     */
    private Integer goodsId;

    private Integer addTime;

    /**
     * 数量
     */
    private Integer amount;

    /**
     * 商家ID
     */
    private Integer mchId;

    private String selectedSpec;
}
