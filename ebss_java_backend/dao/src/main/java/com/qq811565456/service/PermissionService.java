package com.qq811565456.service;

import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.qq811565456.config.MyPage;
import com.qq811565456.mapper.SysPermissionMapper;
import com.qq811565456.mapper.SysRoleMapper;
import com.qq811565456.model.SysPermission;
import com.qq811565456.model.SysRole;
import com.qq811565456.model.SysUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class PermissionService {
    @Autowired
    private SysPermissionMapper sysPermissionMapper;
    @Autowired
    private SysRoleMapper sysRoleMapper;

    public boolean  checkPermission(SysUser sysUser){

        return true;
    }
    public List<SysPermission> permissions(SysUser sysUser){
        SysRole role = sysRoleMapper.selectById(sysUser.getRoleId());
        List<SysPermission> permissions = List.of();
        if(sysUser.getRoleId()==1){
             permissions = sysPermissionMapper.selectALL("sys_permission");
        }else if(!role.getPermissionIds().isEmpty()){
            permissions = sysPermissionMapper.selectBatchIds(role.getPermissionIds());
        }
        return permissions;
    }

}
