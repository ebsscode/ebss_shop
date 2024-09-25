package com.qq811565456.dao;

import com.qq811565456.mapper.SysUserMapper;
import com.qq811565456.model.SysUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class UserDao {
    @Autowired
    private SysUserMapper sysUserMapper;

    public SysUser tokenToUser(String token){
        return sysUserMapper.findUserByToken(token);
    }
}
