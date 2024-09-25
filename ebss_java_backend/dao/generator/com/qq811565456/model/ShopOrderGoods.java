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
@TableName("shop_order_goods")
public class ShopOrderGoods implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "order_goods_id", type = IdType.AUTO)
    private Integer orderGoodsId;

    private String goods;

    private String selectedSpec;

    private String amount;

    private String mch;

    private Integer isComment;

    private Integer orderId;
}
