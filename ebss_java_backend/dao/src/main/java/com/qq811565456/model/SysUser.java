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
@TableName("sys_user")
public class SysUser implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户ID
     */
    @TableId(value = "user_id", type = IdType.AUTO)
    private Integer userId;

    /**
     * 电话
     */
    private String tel;

    /**
     * 昵称
     */
    private String nickname;

    /**
     * 用户名
     */
    private String username;

    /**
     * 密码
     */
    private String password;

    /**
     * 头像
     */
    private String avatarImg;

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
     * 余额
     */
    private BigDecimal money;

    /**
     * 积分
     */
    private Integer integral;

    /**
     * 纬度
     */
    private String latitude;

    /**
     * 经度
     */
    private String longitude;

    /**
     * 上级id
     */
    private Integer shareId;

    /**
     * 计算附近的人时用到
     */
    private String geohash;

    /**
     * 微信提供的
     */
    private String openid;

    /**
     * 注册时间
     */
    private Integer addTime;

    /**
     * 角色表ID
     */
    private Integer roleId;

    /**
     * 更新时间
     */
    private Integer updateTime;

    /**
     * 会员等级
     */
    private Integer userGradeId;

    /**
     * 经验值
     */
    private Integer experience;

    /**
     * 邀请码
     */
    private String inviteCode;

    /**
     * 真实姓名
     */
    private String realname;

    /**
     * 身份证号
     */
    private String idNum;

    /**
     * 身份证照片
     */
    private String idImg;

    private Integer labelId;
}
