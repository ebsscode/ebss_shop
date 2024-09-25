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
@TableName("sys_token")
public class SysToken implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * token表
     */
    @TableId(value = "token_id", type = IdType.AUTO)
    private Integer tokenId;

    /**
     * token
     */
    private String token;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * ip地址
     */
    private String ip;

    /**
     * 用户ID
     */
    private Integer tokenUserId;
}
