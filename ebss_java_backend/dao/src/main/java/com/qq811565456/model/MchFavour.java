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
@TableName(value = "mch_favour",autoResultMap = true)
public class MchFavour extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 收藏表
     */
    @TableId(value = "favour_mch_id", type = IdType.AUTO)
    private Integer favourMchId;

    /**
     * 商家ID
     */
    private Integer mchId;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 添加时间
     */
    private Integer addTime;
}
