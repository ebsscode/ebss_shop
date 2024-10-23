package com.qq811565456.controller.admin;

import com.qq811565456.Response;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.mapper.SysConfigMapper;
import com.qq811565456.mapper.SysModuleMapper;
import com.qq811565456.model.SysConfig;
import com.qq811565456.model.SysModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController("adminModuleController")
@RequestMapping("/admin")
public class ModuleController {
    @Autowired
    private SysModuleMapper sysModuleMapper;

    @WebApi(checkLoginStatus=false)
    @PostMapping("module/list")
    public Response list()
    {
        List<SysModule> list = sysModuleMapper.selectALL("sys_module");
        return Response.ok(Map.of("list",list));
    }

}
