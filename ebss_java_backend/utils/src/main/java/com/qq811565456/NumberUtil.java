package com.qq811565456;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * @Author hewei
 * @Date 2022-08-12 14:30
 */
public class NumberUtil {

  public static boolean isEmpty(Integer num) {
    return (num == null || num.equals(0));
  }
  public static boolean has(Integer str) {
    return !isEmpty(str);
  }


}