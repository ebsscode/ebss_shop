package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
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
@TableName("base_focus_user")
public class BaseFocusUser implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 关注表
     */
    @TableId(value = "focus_user_id", type = IdType.AUTO)
    private Integer focusUserId;

    /**
     * 关注人用户ID
     */
    private Integer userId;

    /**
     * 被关注人用户ID
     */
    private Integer toUserId;

    /**
     * 关注时间
     */
    private Integer addTime;
}
