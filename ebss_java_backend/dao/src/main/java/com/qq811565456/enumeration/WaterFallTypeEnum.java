package com.qq811565456.enumeration;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

/**
 * @Author He Wei
 * @Date 2022/9/8 17:58
 */
public enum WaterFallTypeEnum {
  SWIPER("swiper"),COMMON("common"),GROUPBUY("groupbuy");

  @Getter
  @JsonValue
  private final String type;

  WaterFallTypeEnum(String type) {
    this.type = type;
  }
}
