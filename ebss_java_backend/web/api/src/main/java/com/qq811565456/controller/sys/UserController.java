package com.qq811565456.controller.sys;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.qq811565456.Response;
import com.qq811565456.mapper.ShopCartMapper;
import com.qq811565456.mapper.SysUserMapper;
import com.qq811565456.model.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private SysUserMapper sysUserMapper;

    @GetMapping("login")
    public Response login()
    {
        SysUser sysUser = sysUserMapper.selectById(1L);
        System.out.println(sysUser);
        return Response.ok();
    }

}
