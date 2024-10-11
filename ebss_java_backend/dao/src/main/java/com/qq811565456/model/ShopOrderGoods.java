package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;

import com.qq811565456.typehandler.MyJsonTypeHandler;
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
@TableName(value = "shop_order_goods",autoResultMap = true)
public class ShopOrderGoods extends BaseModel {

    private static final long serialVersionUID = 1L;

    @TableId(value = "order_goods_id", type = IdType.AUTO)
    private Integer orderGoodsId;

    @TableField(typeHandler = MyJsonTypeHandler.class)
    private ShopGoods goods;

    private String selectedSpec;

    private String amount;

    private String mch;

    private Integer isComment;

    private Integer orderId;
}
