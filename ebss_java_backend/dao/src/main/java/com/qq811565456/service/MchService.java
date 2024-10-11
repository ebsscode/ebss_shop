package com.qq811565456.service;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.ArrayUtil;
import com.qq811565456.mapper.MchMapper;
import com.qq811565456.mapper.SysPermissionMapper;
import com.qq811565456.mapper.SysRoleMapper;
import com.qq811565456.model.Mch;
import com.qq811565456.model.SysPermission;
import com.qq811565456.model.SysRole;
import com.qq811565456.model.SysUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class MchService {
    @Autowired
    private MchMapper mchMapper;

    public List<Mch>  userMchList(Integer user_id){
        List<Mch> listOwner = mchMapper.selectByMap(Map.of("user_id",user_id));
        List<Mch> listManager = mchMapper.selectManager(user_id);
        return (List<Mch>) CollUtil.addAll(listManager,listOwner);
    }

}
