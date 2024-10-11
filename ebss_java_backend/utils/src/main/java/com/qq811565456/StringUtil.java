package com.qq811565456;

import cn.hutool.core.util.StrUtil;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * @Author hewei
 * @Date 2022-08-12 14:30
 */
public class StringUtil {


  public static boolean isEmpty(String str) {
    return (str == null || "".equals(str));
  }

  public static boolean has(String str) {
    return !isEmpty(str);
  }

  public static <T> String collectionToString(Collection<T> collection, String split) {
    StringBuilder stringBuilder = new StringBuilder();
    for (T c : collection) {
      stringBuilder.append(c.toString()).append(split);
    }
    return stringBuilder.deleteCharAt(stringBuilder.length() - 1).toString();
  }

  public static <T> String collectionToString(Collection<T> collection) {
    return collectionToString(collection, ",");
  }

  public static boolean isEmail(String str) {
    if (isEmpty(str)) {
      return false;
    }
    int index1 = str.lastIndexOf("@");
    int index2 = str.lastIndexOf(".");

    return index1 != -1 && index2 > index1;
  }

  public static List<String> convertStringToList(String str) {
    return convertStringToList(str, ",");
  }

  public static List<String> convertStringToList(String str, String separator) {
    if (isEmpty(str)) {
      return null;
    }
    String[] array = str.split(separator);
    // 这里不用Arrays.asList，具体参看asList的实现
    List<String> list = new ArrayList<>();
    Collections.addAll(list, array);
    return list;
  }

}