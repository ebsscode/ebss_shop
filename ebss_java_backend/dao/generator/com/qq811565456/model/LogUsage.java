package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDate;
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
@TableName("log_usage")
public class LogUsage implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "usage_log_id", type = IdType.AUTO)
    private Integer usageLogId;

    private Integer userId;

    private Integer addTime;

    private Integer outTime;

    private String addr;

    private LocalDate addDate;

    private Integer duration;
}
