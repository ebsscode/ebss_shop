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
@TableName("shop_goods_comment")
public class ShopGoodsComment implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 商品评价表
     */
    @TableId(value = "comment_goods_id", type = IdType.AUTO)
    private Integer commentGoodsId;

    /**
     * 评价内容
     */
    private String content;

    /**
     * 评价图片
     */
    private String imgs;

    /**
     * 评分
     */
    private Integer rate;

    /**
     * 用户ID
     */
    private Integer userId;

    private String user;

    /**
     * 商家ID
     */
    private Integer goodsId;

    /**
     * 评价时间
     */
    private Integer addTime;
}
