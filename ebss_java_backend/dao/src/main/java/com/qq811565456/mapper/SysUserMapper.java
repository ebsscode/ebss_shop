package com.qq811565456.mapper;

import com.qq811565456.model.SysUser;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
public interface SysUserMapper extends BaseMapper<SysUser> {
    @Select("select sys_user.* from sys_token left join sys_user on sys_user.user_id = sys_token.token_user_id where token = #{token}")
    SysUser findUserByToken(String token);
}
