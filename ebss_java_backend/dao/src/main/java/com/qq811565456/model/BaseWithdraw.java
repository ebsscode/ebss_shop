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
@TableName(value = "base_withdraw",autoResultMap = true)
public class BaseWithdraw extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 提现表
     */
    @TableId(value = "withdraw_id", type = IdType.AUTO)
    private Integer withdrawId;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 提现金额
     */
    private BigDecimal money;

    /**
     * 描述
     */
    private String title;

    /**
     * 1等待审核	2.审核失败	3.已打款
     */
    private Integer status;

    /**
     * 备注
     */
    private String remark;

    /**
     * 类型
     */
    private String type;

    /**
     * 提现帐户
     */
    private String account;

    /**
     * 提现账户姓名
     */
    private String realname;
}
