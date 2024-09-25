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
public class Video implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 视频合集表
     */
    @TableId(value = "video_id", type = IdType.AUTO)
    private Integer videoId;

    /**
     * 名称
     */
    private String name;

    /**
     * 封面图片
     */
    private String logoImg;

    /**
     * 排序数字
     */
    private Integer sortNum;

    private Integer addTime;

    /**
     * category表ID
     */
    private Integer categoryId;

    /**
     * 观看次数
     */
    private Integer viewCount;
}
