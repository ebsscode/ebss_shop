package com.qq811565456.typehandler;/*
 * Copyright (c) 2011-2024, baomidou (jobob@qq.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import com.baomidou.mybatisplus.core.toolkit.Assert;
import com.baomidou.mybatisplus.extension.handlers.AbstractJsonTypeHandler;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import org.apache.ibatis.type.MappedTypes;

import java.lang.reflect.Field;

/**
 * Jackson 实现 JSON 字段类型处理器
 *
 * @author hubin
 * @since 2019-08-25
 */
@MappedTypes({JsonNode.class})
public class JsonNodeTypeHandler extends AbstractJsonTypeHandler<JsonNode> {

	private static ObjectMapper OBJECT_MAPPER;

	public JsonNodeTypeHandler(Class<?> type) {
		super(type);
	}

	public JsonNodeTypeHandler(Class<?> type, Field field) {
		super(type, field);
	}

	@Override
	public JsonNode parse(String json) {
		ObjectMapper objectMapper = getObjectMapper();
		TypeFactory typeFactory = objectMapper.getTypeFactory();
		JavaType javaType = typeFactory.constructType(getFieldType());
		try {
			return objectMapper.readValue(json, javaType);
		} catch (JacksonException e) {
			log.error("deserialize json: " + json + " to " + javaType + " error ", e);
			throw new RuntimeException(e);
		}
	}

	@Override
	public String toJson(JsonNode obj) {
		try {
			return getObjectMapper().writeValueAsString(obj);
		} catch (JsonProcessingException e) {
			log.error("serialize " + obj + " to json error ", e);
			throw new RuntimeException(e);
		}
	}

	public static ObjectMapper getObjectMapper() {
		if (null == OBJECT_MAPPER) {
			OBJECT_MAPPER = new ObjectMapper();
		}
		return OBJECT_MAPPER;
	}

	public static void setObjectMapper(ObjectMapper objectMapper) {
		Assert.notNull(objectMapper, "ObjectMapper should not be null");
		JsonNodeTypeHandler.OBJECT_MAPPER = objectMapper;
	}

}
