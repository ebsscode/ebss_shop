package com.qq811565456.service;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.ObjectUtil;
import com.qq811565456.mapper.MchMapper;
import com.qq811565456.mapper.SysConfigMapper;
import com.qq811565456.model.Mch;
import com.qq811565456.model.SysConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class ConfigService {
    @Autowired
    private SysConfigMapper sysConfigMapper;
    private static List<SysConfig> configs = null;

    public List<SysConfig> getConfigs(){
        if(ObjectUtil.isNotNull(configs)){
            return configs;
        }
        configs = sysConfigMapper.selectALL("sys_config");
        return configs;
    }
    public String get(String key){
        Map<String,String> all = getAll();
        return all.get(key);
    }
    public Map<String,String> getFront(){
        List<SysConfig> list = getConfigs();
        Map<String,String> configsMap = new HashMap<>();
        list.stream().filter(i->i.getIsFront()==1).forEach(i->{
            configsMap.put(i.getName(),i.getValue());
        });
        return configsMap;
    }
    public Map<String,String> getAll(){
        List<SysConfig> list = getConfigs();
        Map<String,String> configsMap = new HashMap<>();
        list.forEach(i->{
            configsMap.put(i.getName(),i.getValue());
        });
        return configsMap;
    }

}
