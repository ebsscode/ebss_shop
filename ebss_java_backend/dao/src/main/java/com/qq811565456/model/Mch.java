package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
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
public class Mch implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 商家表
     */
    @TableId(value = "mch_id", type = IdType.AUTO)
    private Integer mchId;

    /**
     * 商家名称
     */
    private String name;

    /**
     * 商家简介
     */
    private String title;

    /**
     * 商家详情介绍
     */
    private String introduce;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 商家电话
     */
    private String tel;

    /**
     * 1等待审核	2审核失败	3审核通过	4禁用
     */
    private Integer status;

    /**
     * logo
     */
    private String logoImg;

    /**
     * 省
     */
    private String province;

    /**
     * 市
     */
    private String city;

    /**
     * 县
     */
    private String district;

    /**
     * 详情地址
     */
    private String address;

    /**
     * 经度
     */
    private String longitude;

    /**
     * 纬度
     */
    private String latitude;

    /**
     * 管理员用户ID
     */
    private Integer userId;

    private String imgs;

    private Integer isOpen;
}
