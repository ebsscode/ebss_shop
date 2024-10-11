package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;

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
@TableName(value = "base_charge_order",autoResultMap = true)
public class BaseChargeOrder extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 充值订单
     */
    @TableId(value = "charge_order_id", type = IdType.AUTO)
    private Integer chargeOrderId;

    /**
     * 订单号
     */
    private String orderSn;

    private Integer addTime;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * charge_option表的数据，JSON
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private BaseChargeOption chargeOption;

    /**
     * 订单金额
     */
    private BigDecimal payMoney;

    /**
     * 是否支付，0否，1是
     */
    private Integer isPay;

    /**
     * 充值金额
     */
    private BigDecimal money;
}
