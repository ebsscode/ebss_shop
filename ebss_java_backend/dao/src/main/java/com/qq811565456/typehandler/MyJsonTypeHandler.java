package com.qq811565456.typehandler;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;
import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

//@MappedTypes({List.class})
@MappedJdbcTypes(JdbcType.VARCHAR)
public class MyJsonTypeHandler<T> extends BaseTypeHandler<T> {
    private final Class<T> type;
    private final static ObjectMapper objectMapper = new ObjectMapper().setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
    public MyJsonTypeHandler(Class<T> type) {
        if (type == null) {
            throw new IllegalArgumentException("Type argument cannot be null");
        }
        this.type = type;
    }
    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, T parameter, JdbcType jdbcType) throws SQLException {
//        System.out.println("11:");
        String content = null;
        try {
            content = objectMapper.writeValueAsString(parameter);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        ps.setString(i, content);
    }

    @Override
    public T getNullableResult(ResultSet rs, String columnName) throws SQLException {
        String jsonString = rs.getString(columnName);
//        System.out.println("22:"+objToString(jsonString));
        return objToString(jsonString);
    }

    @Override
    public T getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
//        System.out.println("33:");
        String jsonString = rs.getString(columnIndex);
        return objToString(jsonString);
    }

    @Override
    public T getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
//        System.out.println("44:");
        String jsonString = cs.getString(columnIndex);
        return objToString(jsonString);
    }
    private T objToString(String jsonString) {
//        System.out.println("type:"+type);
        T result = null;
        try {
            result = objectMapper.readValue(jsonString,type);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
//        System.out.println("jsonString1"+jsonString);
//        System.out.println("jsonString2"+result);
        return result;
    }

}