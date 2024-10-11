package com.qq811565456.service;

import cn.hutool.core.date.DateTime;
import cn.hutool.core.util.HashUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.ObjectUtil;
import cn.hutool.crypto.SecureUtil;
import com.qq811565456.MessageCode;
import com.qq811565456.RequestUtil;
import com.qq811565456.Response;
import com.qq811565456.TimeUtil;
import com.qq811565456.mapper.*;
import com.qq811565456.model.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
@Slf4j
public class UserService {
    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private SysTokenMapper sysTokenMapper;
    @Autowired
    private LogUserMapper logUserMapper;

    public MessageCode checkPassword(String username, String password){
        if (ObjectUtil.isEmpty(username)||ObjectUtil.isEmpty(password)){
            return MessageCode.create(MessageCode.ERROR_CODE,"账号或密码为空！");
        }
        MyQueryWrapper<SysUser> where = new MyQueryWrapper<>(SysUser.class);
        where.eq("username",username);
        SysUser user = sysUserMapper.selectOne(where);
        if (ObjectUtil.isEmpty(user)){
            return MessageCode.create(MessageCode.ERROR_CODE,"账号不存在！");
        }
        if (ObjectUtil.isEmpty(user.getPassword())){
            return MessageCode.create(MessageCode.ERROR_CODE,"未设置密码，无法登录！");
        }
        if (!Objects.equals(user.getPassword(), cryptoPassword(password))){
            return MessageCode.create(MessageCode.ERROR_CODE,"密码不正确！");
        }
        if (ObjectUtil.isEmpty(user.getRoleId())){
            return MessageCode.create(MessageCode.ERROR_CODE,"未分配权限，禁止登录！");
        }
        return MessageCode.SUCCESS;
    }
    public String makeToken(){
        return IdUtil.simpleUUID();
    }
    public String cryptoPassword(String password){
        return SecureUtil.md5(password);
    }
    public Map<String,Object> makeLoginResponse(SysUser user){
        SysToken token = new SysToken();
        token.setToken(makeToken());
        token.setTokenUserId(user.getUserId());
        token.setIp(RequestUtil.getIp());
        token.setAddTime((int) DateTime.now().getTime());
        sysTokenMapper.insert(token);

        LogUser logUser = new LogUser();
        logUser.setName(user.getUsername());
        logUser.setUserId(user.getUserId());
        logUser.setUrl(RequestUtil.getUrl());
        logUser.setIp(RequestUtil.getIp());
        logUser.setTitle("后台登录");
        logUser.setAddTime((int) DateTime.now().getTime());
        logUserMapper.insert(logUser);

        return Map.of("token",token.getToken(),
                "username",user.getUsername(),
                "role_id",user.getRoleId(),
                "user_id",user.getUserId()
        );
    }

}
