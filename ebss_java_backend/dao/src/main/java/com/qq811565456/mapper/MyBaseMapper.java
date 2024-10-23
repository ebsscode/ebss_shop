package com.qq811565456.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.qq811565456.config.MyPage;
import com.qq811565456.service.QueryWrapperService;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper Base接口
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
public interface MyBaseMapper<T> extends BaseMapper<T> {
    @ResultMap("BaseResultMap")
    @Select("select * from ${ew.tableName} ${ew.customSqlSegment}")
    MyPage<T> selectMyPage(MyPage<?> page, @Param(Constants.WRAPPER) QueryWrapperService<T> wrapper);

    @ResultMap("BaseResultMap")
    @Select("select * from ${tableName}")
    List<T> selectALL(@Param("tableName") String tableName);
}
