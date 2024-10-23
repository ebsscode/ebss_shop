package com.qq811565456.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qq811565456.TimeUtil;
import com.qq811565456.mapper.ShopGroupbuyMapper;
import com.qq811565456.mapper.ShopSpikeMapper;
import com.qq811565456.model.ShopGroupbuy;
import com.qq811565456.model.ShopSpike;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class SpikeService {
    @Autowired
    private ShopSpikeMapper shopSpikeMapper;

    public List<ShopSpike> start(){
        LambdaQueryWrapper<ShopSpike> where = new LambdaQueryWrapper<>();
        where.le(ShopSpike::getTimeType, 1);
        where.gt(ShopSpike::getStartAt, TimeUtil.getTime10());
        where.or().le(ShopSpike::getTimeType,2).gt(ShopSpike::getStartAt,TimeUtil.todaySeconds());

        return shopSpikeMapper.selectList(where);
    }
    public List<ShopSpike> will_start(){
        LambdaQueryWrapper<ShopSpike> where = new LambdaQueryWrapper<>();
        where.ge(ShopSpike::getStartAt, TimeUtil.todayStart());

        return shopSpikeMapper.selectList(where);
    }
}
