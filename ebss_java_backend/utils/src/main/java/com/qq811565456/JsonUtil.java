package com.qq811565456;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 基于fastjson封装的jsonUtil
 *
 * @Author hewei
 * @Date 2022-08-12 14:30
 */
public class JsonUtil {
  private final static ObjectMapper objectMapper = new ObjectMapper().setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);

  /**
   * 对象转成json
   *
   * @return json
   */
  public static String objectToJson(Object object) throws JsonProcessingException {
    return objectMapper.writeValueAsString(object);
  }

  /**
   * Json转成对象
   *
   * @return 对象
   */
  public static <T> T jsonToBean(String json, Class<T> cls) {
    try {
      return objectMapper.readValue(json, cls);
    } catch (Exception e) {
      throw new MyException(MessageCode.ERROR);
    }
  }

  /**
   * json转成list<T>
   *
   * @return list<T>
   */
  public static <T> List<T> jsonToList(String json) {
    try {
      return objectMapper.readValue(json, List.class);//todo List.class不知道对不对
    } catch (Exception e) {
      throw new MyException(MessageCode.ERROR);
    }
  }

  /**
   * json转成map的
   *
   * @return Map<String, T>
   */
  public static <T> Map<String, T> jsonToMaps(String json){
    try {
      return objectMapper.readValue(json, Map.class);
    } catch (Exception e) {
      throw new MyException(MessageCode.ERROR);
    }
  }
}
