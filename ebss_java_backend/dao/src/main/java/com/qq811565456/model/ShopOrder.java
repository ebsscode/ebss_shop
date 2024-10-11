package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import com.qq811565456.typehandler.MyJsonTypeHandler;
import lombok.Data;

/**
 * <p>
 * 
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
@Data
@TableName(value = "shop_order",autoResultMap = true)
public class ShopOrder extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 订单表
     */
    @TableId(value = "order_id", type = IdType.AUTO)
    private Integer orderId;

    /**
     * 订单号
     */
    private String orderSn;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 商家ID
     */
    private Integer mchId;

    /**
     * 是否支付
     */
    private Integer isPay;

    /**
     * 3待付款	4待发货	5待收货	6待评价	7已完成	8退款/售后	9已关闭
     */
    private Integer status;

    /**
     * 订单金额
     */
    private BigDecimal orderMoney;

    /**
     * 1普通订单，2积分兑换订单，3秒杀订单、4拼团订单
     */
    private Integer type;

    /**
     * 支付时间
     */
    private Integer payTime;

    /**
     * 用户是否删除
     */
    private Integer deleteUser;

    /**
     * 优惠券
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private List<BaseCoupon> couponList;

    /**
     * 优惠金额
     */
    private BigDecimal discount;

    /**
     * 下单手机号
     */
    private String tel;

    /**
     * 姓名
     */
    private String orderName;

    /**
     * 快递名称
     */
    private String expressName;

    /**
     * 快递编号
     */
    private String expressNum;

    /**
     * 收货地址
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private BaseAddr addr;

    /**
     * 运费
     */
    private BigDecimal freight;

    /**
     * 备注
     */
    private String notes;

    @TableField(typeHandler = MyJsonTypeHandler.class)
    private List<ShopGoods> orderGoods;

    private Integer addTime;

    private LocalDate addDate;
}
