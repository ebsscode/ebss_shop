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
@TableName("base_feedback")
public class BaseFeedback implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 反馈表
     */
    @TableId(value = "feedback_id", type = IdType.AUTO)
    private Integer feedbackId;

    /**
     * 反馈时间
     */
    private Integer addTime;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 反馈内容
     */
    private String content;

    /**
     * 相片
     */
    private String imgs;
}
