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
@TableName("video_collection")
public class VideoCollection implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 剧集表
     */
    @TableId(value = "video_collection_id", type = IdType.AUTO)
    private Integer videoCollectionId;

    /**
     * 电视剧表ID
     */
    private Integer videoId;

    /**
     * 集数
     */
    private Integer sortNum;

    /**
     * 视频地址
     */
    private String videoUrl;

    private Integer addTime;

    /**
     * 观看次数
     */
    private Integer viewCount;
}
