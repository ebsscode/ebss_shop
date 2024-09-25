package com.qq811565456;

import lombok.Getter;
import lombok.Setter;

/**
 * @Author hewei
 * @Date 2022-08-12 14:30
 */
@Getter
@Setter
public class MessageCode {

  private Integer code;
  private String msg;

  public MessageCode(Integer code, String msg) {
    this.code = code;
    this.msg = msg;
  }
  public static MessageCode create(Integer code, String msg) {
    return new MessageCode(code,msg);
  }

  public static final MessageCode SUCCESS = new MessageCode(1, "成功");
  public static final MessageCode ERROR = new MessageCode(0, "失败");
  public static final MessageCode LOGIN = new MessageCode(401, "未登录");
  public static final MessageCode FORBIDDEN = new MessageCode(403, "无权限");
}
