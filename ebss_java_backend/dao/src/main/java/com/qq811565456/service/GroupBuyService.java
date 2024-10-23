package com.qq811565456.service;

import cn.hutool.core.date.DateTime;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qq811565456.TimeUtil;
import com.qq811565456.mapper.ShopGroupbuyMapper;
import com.qq811565456.model.ShopGroupbuy;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class GroupBuyService {
    @Autowired
    private ShopGroupbuyMapper shopGroupbuyMapper;

    public List<ShopGroupbuy> start(){
        LambdaQueryWrapper<ShopGroupbuy> where = new LambdaQueryWrapper<>();
        where.le(ShopGroupbuy::getStartTime, TimeUtil.getTime10());
        where.ge(ShopGroupbuy::getEndTime, TimeUtil.getTime10());

        return shopGroupbuyMapper.selectList(where);
    }
    public List<ShopGroupbuy> will_start(){
        LambdaQueryWrapper<ShopGroupbuy> where = new LambdaQueryWrapper<>();
        where.ge(ShopGroupbuy::getStartTime, TimeUtil.getTime10());

        return shopGroupbuyMapper.selectList(where);
    }
}
