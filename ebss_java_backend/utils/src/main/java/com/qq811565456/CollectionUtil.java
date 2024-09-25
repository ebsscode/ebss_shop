package com.qq811565456;

import jakarta.annotation.Nullable;

import java.util.*;

/**
 * @Author hewei
 * @Date 2022-08-12 14:30
 */
public class CollectionUtil {

  /**
   * 合并2个集合.
   *
   * @param source 源数据不允许为空.
   * @param rest   需要合并进入的数据
   */
  public static <T> Collection<T> mergeIntoCollection(Collection<T> source,
      Collection<T> rest) {
    if (rest == null || rest.isEmpty()) {
      return source;
    }
    source.addAll(rest);
    return source;
  }

  public static List<Integer> toIntList(String[] source) {
    if (source == null || source.length == 0) {
      return new ArrayList<>();
    }
    List<Integer> target = new ArrayList<>();
    for (String s : source) {
      target.add(Integer.parseInt(s));
    }
    return target;
  }

  public static <T> Set<T> toLinkedHashSet(T[] source) {
    return new LinkedHashSet<>(Arrays.asList(source));
  }

  public static boolean isEmpty(@Nullable Collection collection) {
    return (collection == null || collection.isEmpty());
  }

  public static boolean isEmpty(@Nullable Map<?, ?> map) {
    return (map == null || map.isEmpty());
  }

  public static boolean has(@Nullable Map<?, ?> map) {
    return !isEmpty(map);
  }

}
