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
 * 剧集浏览表
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
@Data
@TableName("video_view")
public class VideoView implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 观看记录ID
     */
    @TableId(value = "view_id", type = IdType.AUTO)
    private Integer viewId;

    /**
     * 用户ID
     */
    private Integer userId;

    /**
     * 电视剧ID
     */
    private Integer videoId;

    /**
     * 剧集ID
     */
    private Integer videoCollectionId;

    private Integer addTime;
}
