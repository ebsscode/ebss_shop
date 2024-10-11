package com.qq811565456;


import cn.hutool.core.util.StrUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

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
   * JsonNode的下划线key转驼峰
   *
   * @param jsonNode JsonNode
   * @return JsonNode
   */
  public static JsonNode convertKeysToCamelCase(JsonNode jsonNode) {
    if (jsonNode.isObject()) {
      ObjectNode objectNode = objectMapper.createObjectNode();
      jsonNode.fields().forEachRemaining(entry -> {
        objectNode.set(StrUtil.toCamelCase(entry.getKey()), convertKeysToCamelCase(entry.getValue()));
      });
      return objectNode;
    }

    if (jsonNode.isArray()) {
      ArrayNode arrayNode = objectMapper.createArrayNode();
      jsonNode.elements().forEachRemaining(entry -> {
        arrayNode.add(convertKeysToCamelCase(entry));
      });

      return arrayNode;
    }

    return jsonNode;
  }
  /**
   * JsonNode的驼峰key转下划线
   *
   * @param jsonNode JsonNode
   * @return JsonNode
   */
  public static JsonNode convertKeysToSnake(JsonNode jsonNode) {
    if (jsonNode.isObject()) {
      ObjectNode objectNode = objectMapper.createObjectNode();
      jsonNode.fields().forEachRemaining(entry -> {
        objectNode.set(StrUtil.toUnderlineCase(entry.getKey()), convertKeysToCamelCase(entry.getValue()));
      });
      return objectNode;
    }

    if (jsonNode.isArray()) {
      ArrayNode arrayNode = objectMapper.createArrayNode();
      jsonNode.elements().forEachRemaining(entry -> {
        arrayNode.add(convertKeysToSnake(entry));
      });

      return arrayNode;
    }

    return jsonNode;
  }

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

}
