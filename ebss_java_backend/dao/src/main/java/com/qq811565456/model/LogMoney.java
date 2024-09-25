package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;

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
@TableName("log_money")
public class LogMoney implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户余额变动表
     */
    @TableId(value = "moneylog_id", type = IdType.AUTO)
    private Integer moneylogId;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 类型	1充值	2提现	3余额支付	4退款
     */
    private Integer logType;

    /**
     * 1是增加，2是减少
     */
    private Integer upOrDown;

    /**
     * 变动额
     */
    private BigDecimal changeNum;

    /**
     * 变动之前金额
     */
    private BigDecimal beforeNum;

    /**
     * 变动之后金额
     */
    private BigDecimal afterNum;

    /**
     * 描述
     */
    private String title;
}
