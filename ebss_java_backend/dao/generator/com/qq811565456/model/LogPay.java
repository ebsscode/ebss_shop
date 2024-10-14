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
@TableName("log_pay")
public class LogPay implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 支付日志
     */
    @TableId(value = "paylog_id", type = IdType.AUTO)
    private Integer paylogId;

    /**
     * 支付金额
     */
    private BigDecimal money;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 1支付，0未支付
     */
    private Integer isPay;

    /**
     * 支付时间
     */
    private Integer payTime;

    /**
     * 类型	goods_order
     */
    private String type;

    /**
     * 业务表主键ID
     */
    private Integer busiTableId;

    /**
     * 回调支付金额
     */
    private BigDecimal notifyPayMoney;

    /**
     * 回调数据，json
     */
    private String nofityData;

    /**
     * 支付订单号
     */
    private String payOrderSn;

    /**
     * 支付描述
     */
    @TableField(value = "`desc`")
    private String desc;
}
