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
@TableName("shop_goods_view")
public class ShopGoodsView implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 商品浏览历史表
     */
    @TableId(value = "goods_view_id", type = IdType.AUTO)
    private Integer goodsViewId;

    /**
     * 浏览时间
     */
    private Integer addTime;

    /**
     * 用户Id
     */
    private Integer userId;

    /**
     * 商品Id
     */
    private Integer goodsId;
}
