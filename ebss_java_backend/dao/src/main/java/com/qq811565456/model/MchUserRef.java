package com.qq811565456.model;

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
@TableName(value = "mch_user_ref",autoResultMap = true)
public class MchUserRef extends BaseModel {

    private static final long serialVersionUID = 1L;

    @TableId("mch_id")
    private Integer mchId;

    private Integer userId;
}
