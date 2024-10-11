package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.List;

import com.qq811565456.typehandler.MyJsonTypeHandler;
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
@TableName(value = "mch_comment",autoResultMap = true)
public class MchComment extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 商家评价表
     */
    @TableId(value = "comment_mch_id", type = IdType.AUTO)
    private Integer commentMchId;

    /**
     * 评价内容
     */
    private String content;

    /**
     * 评价图片
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private List<String> imgs;

    /**
     * 评分
     */
    private Integer rate;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 商家ID
     */
    private Integer mchId;

    /**
     * 评价时间
     */
    private Integer addTime;

    /**
     * 用户
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private SysUser user;
}
