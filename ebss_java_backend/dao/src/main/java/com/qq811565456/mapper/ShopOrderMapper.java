package com.qq811565456.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.qq811565456.config.MyPage;
import com.qq811565456.model.ShopGoods;
import com.qq811565456.model.ShopOrder;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
public interface ShopOrderMapper extends BaseMapper<ShopOrder> {
    MyPage<ShopOrder> selectMyPage(MyPage<?> page, @Param(Constants.WRAPPER) Wrapper<ShopOrder> wrapper);
}
