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
@TableName(value = "base_addr",autoResultMap = true)
public class BaseAddr extends BaseModel{

    private static final long serialVersionUID = 1L;

    @TableId(value = "addr_id", type = IdType.AUTO)
    private Integer addrId;

    /**
     * 会员ID
     */
    private Integer userId;

    /**
     * 收货人姓名
     */
    private String name;

    /**
     * 手机
     */
    private String tel;

    /**
     * 省
     */
    private String province;

    /**
     * 市
     */
    private String city;

    /**
     * 区
     */
    private String district;

    /**
     * 详细详情
     */
    private String address;

    /**
     * 是否默认
     */
    private Integer isDefault;

    private Integer addTime;

    private String latitude;

    private String longitude;
}
