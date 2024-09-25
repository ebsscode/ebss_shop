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
@TableName("base_sign_record")
public class BaseSignRecord implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sign_record_id", type = IdType.AUTO)
    private Integer signRecordId;

    private Integer userId;

    private Integer addTime;

    private LocalDate addDate;

    private Integer continuousDay;
}
