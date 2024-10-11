package com.qq811565456.controller.admin;

import cn.hutool.core.util.ObjectUtil;
import cn.hutool.json.JSONObject;
import com.qq811565456.RequestUtil;
import com.qq811565456.Response;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.mapper.MchMapper;
import com.qq811565456.mapper.SysPermissionMapper;
import com.qq811565456.mapper.SysTokenMapper;
import com.qq811565456.mapper.SysUserMapper;
import com.qq811565456.model.*;
import com.qq811565456.service.MchService;
import com.qq811565456.service.MyQueryWrapper;
import com.qq811565456.service.PermissionService;
import com.qq811565456.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class UserController {
    @Autowired
    private PermissionService permissionService;
    @Autowired
    private MchService mchService;
    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private SysTokenMapper sysTokenMapper;
    @Autowired
    private UserService userService;

    @WebApi
    @PostMapping("user/permissions")
    public Response permissions(HttpServletRequest request)
    {
        List<SysPermission> permissions = permissionService.permissions((SysUser) request.getAttribute("user"));
        return Response.ok(Map.of("permissions",permissions));
    }

    @WebApi
    @PostMapping("user/mch_list")
    public Response mch_list(HttpServletRequest request)
    {
        List<Mch> list = mchService.userMchList((Integer) request.getAttribute("user_id"));
        return Response.ok(Map.of("list",list));
    }

    @WebApi
    @PostMapping("user/user_info")
    public Response user_info(HttpServletRequest request)
    {
        return Response.ok(Map.of("user_info",request.getAttribute("user")));
    }
    @WebApi
    @PostMapping("user/edit_password")
    public Response edit_password(@RequestBody JSONObject params,HttpServletRequest request)
    {
        String password = (String) params.get("password");
        if(ObjectUtil.isEmpty(password)){
            return Response.fail("密码不能为空!");
        }
        MyQueryWrapper<SysUser> myQueryWrapper = new MyQueryWrapper<>(SysUser.class);
        myQueryWrapper.eq("user_id",request.getAttribute("user_id"));
        SysUser user = new SysUser();
        user.setPassword(userService.cryptoPassword(password));
        sysUserMapper.update(user, myQueryWrapper);

        sysTokenMapper.deleteByMap(Map.of("token_user_id",request.getAttribute("user_id")));

        return Response.ok(Map.of("user_info",request.getAttribute("user")));
    }

}
