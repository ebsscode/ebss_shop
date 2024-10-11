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
@TableName(value = "shop_spike",autoResultMap = true)
public class ShopSpike extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 秒杀表
     */
    @TableId(value = "spike_id", type = IdType.AUTO)
    private Integer spikeId;

    /**
     * 开始时间的秒数
     */
    private Integer startAt;

    /**
     * 结束时间的秒数
     */
    private Integer endAt;

    /**
     * 1一次性秒杀，2每天秒杀，
     */
    private Integer timeType;

    /**
     * 商品ID
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private List<Integer> goodsIds;

    /**
     * 名称
     */
    private String name;

    private Integer addTime;

    /**
     * 活动图片
     */
    private String coverImg;

    /**
     * 描述
     */
    private String desc;
}
