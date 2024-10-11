package com.qq811565456.controller.sys;

import com.qq811565456.Response;
import com.qq811565456.mapper.SysUserMapper;
import com.qq811565456.model.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class LoginController {
    @Autowired
    private SysUserMapper sysUserMapper;

    @PostMapping("login")
    public Response login()
    {
        SysUser sysUser = sysUserMapper.selectById(1L);
        System.out.println(sysUser);
        return Response.ok();
    }

}
