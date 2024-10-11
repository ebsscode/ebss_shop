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
@TableName(value = "base_article_category",autoResultMap = true)
public class BaseArticleCategory extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 文章分类表
     */
    @TableId(value = "article_category_id", type = IdType.AUTO)
    private Integer articleCategoryId;

    /**
     * 分类名称
     */
    private String name;

    /**
     * 添加时间
     */
    private Integer addTime;

    private Integer moduleId;
}
