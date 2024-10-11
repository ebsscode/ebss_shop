package com.qq811565456.controller.admin;

import cn.hutool.crypto.SecureUtil;
import cn.hutool.json.JSONObject;
import com.qq811565456.MessageCode;
import com.qq811565456.Response;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.mapper.SysUserMapper;
import com.qq811565456.model.SysUser;
import com.qq811565456.service.MyQueryWrapper;
import com.qq811565456.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class IndexController {
    @Autowired
    private UserService userService;
    @Autowired
    private SysUserMapper sysUserMapper;

    @WebApi(checkLoginStatus=false)
    @PostMapping("index/login")
    public Response login(@RequestBody JSONObject params)
    {
        String username = (String) params.get("username");
        String password = (String) params.get("password");
        MessageCode check = userService.checkPassword(username, password);
        if(!check.isSuccess()){
            return Response.fail(check.getMsg());
        }
        MyQueryWrapper<SysUser> where = new MyQueryWrapper<>(SysUser.class);
        where.eq("username",username);
        where.eq("password", userService.cryptoPassword(password));
        SysUser user = sysUserMapper.selectOne(where);
        Map<String,Object> loginRes = userService.makeLoginResponse(user);
        return Response.ok(loginRes);
    }

}
