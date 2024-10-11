package com.qq811565456.mapper;

import com.qq811565456.model.Mch;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
public interface MchMapper extends MyBaseMapper<Mch> {

    @ResultMap("BaseResultMap")
    @Select("select mch.* from mch_user_ref left join mch on mch_user_ref.mch_id = mch.mch_id where mch_user_ref.user_id = ${user_id}")
    List<Mch> selectManager(@Param("user_id") Integer user_id);

}
