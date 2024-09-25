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
@TableName("base_article")
public class BaseArticle implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 文章表
     */
    @TableId(value = "article_id", type = IdType.AUTO)
    private Integer articleId;

    /**
     * 大标题
     */
    private String title;

    /**
     * 小标题
     */
    private String smallTitle;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 内容
     */
    private String content;

    /**
     * 文章类型
     */
    private Integer articleCategoryId;

    /**
     * 封面url
     */
    private String coverImg;

    /**
     * 发布时间
     */
    private Integer pushTime;

    private String author;

    private Integer moduleId;
}
