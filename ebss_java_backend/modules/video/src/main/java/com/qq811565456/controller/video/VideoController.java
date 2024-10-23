package com.qq811565456.controller.video;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.mapper.SysUserMapper;
import com.qq811565456.mapper.VideoMapper;
import com.qq811565456.model.SysUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("videoVideoController")
@RequestMapping("/video")
public class VideoController {
    @Autowired
    private VideoMapper videoMapper;

    @WebApi
    @PostMapping("list")
    public String list()
    {
        Wrapper wrapper = new QueryWrapper();
        List<SysUser> list = videoMapper.selectList(wrapper);
        System.out.println(list);
        return "video";
    }

}
