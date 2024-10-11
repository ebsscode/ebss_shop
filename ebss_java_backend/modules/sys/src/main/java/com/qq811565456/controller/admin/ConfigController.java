package com.qq811565456.controller.admin;

import cn.hutool.json.JSONObject;
import com.qq811565456.Response;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.mapper.SysConfigMapper;
import com.qq811565456.mapper.SysPermissionMapper;
import com.qq811565456.model.SysConfig;
import com.qq811565456.model.SysPermission;
import com.qq811565456.service.ConfigService;
import com.qq811565456.service.MyQueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@RequestMapping("/admin")
public class ConfigController {
    @Autowired
    private ConfigService configService;
    @Autowired
    private SysConfigMapper sysConfigMapper;

    @WebApi
    @PostMapping("config/list")
    public Response list()
    {
        return Response.ok(Map.of("configs",configService.getAll()));
    }

    @WebApi(checkLoginStatus = false)
    @PostMapping("config/front")
    public Response front()
    {
        return Response.ok(Map.of("configs",configService.getFront()));
    }

    @WebApi
    @PostMapping("config/save")
    public Response save(@RequestBody JSONObject params)
    {
//        log.info("params:{},{},{}",params);
        params.forEach(i->{
            SysConfig sysConfig = new SysConfig();
            sysConfig.setName(i.getKey());
            sysConfig.setValue((String) i.getValue());

            MyQueryWrapper<SysConfig> myQueryWrapper = new MyQueryWrapper<>(SysConfig.class);
            myQueryWrapper.eq("name",i.getKey());
            sysConfigMapper.update(sysConfig, myQueryWrapper);
        });
        return Response.ok();
    }

}
