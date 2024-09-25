package com.qq811565456;


import lombok.Getter;
import lombok.Setter;

/**
 * @Author hewei
 * @Date 2022-08-12 14:30
 */
@Getter
@Setter
public class MyException extends RuntimeException {

  protected Integer code;
  protected String message;

  public MyException(MessageCode messageCode) {
    super();
    this.message = messageCode.getMsg();
    this.code = messageCode.getCode();
  }

  public MyException(Integer code, String message) {
    super();
    this.message = message;
    this.code = code;
  }

  public MyException(MessageCode messageCode, Object... params) {
    super();
    this.message = String.format(messageCode.getMsg(), params);
    this.code = messageCode.getCode();
  }
}
