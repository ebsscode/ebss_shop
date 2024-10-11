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
@TableName(value = "base_charge_option",autoResultMap = true)
public class BaseChargeOption extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 充值选项表
     */
    @TableId(value = "charge_option_id", type = IdType.AUTO)
    private Integer chargeOptionId;

    /**
     * 费用
     */
    private BigDecimal amount;

    /**
     * 赠送费用
     */
    private BigDecimal amountGive;

    /**
     * 虚拟币
     */
    private BigDecimal vMoney;

    /**
     * 赠送虚拟币
     */
    private BigDecimal vMoneyGive;
}
