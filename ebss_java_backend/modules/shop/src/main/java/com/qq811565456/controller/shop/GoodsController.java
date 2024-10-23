package com.qq811565456.controller.shop;

import cn.hutool.core.collection.ListUtil;
import cn.hutool.core.util.RandomUtil;
import cn.hutool.json.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.qq811565456.Response;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.config.MyPage;
import com.qq811565456.enumeration.WaterFallTypeEnum;
import com.qq811565456.mapper.ShopCartMapper;
import com.qq811565456.mapper.ShopGoodsMapper;
import com.qq811565456.model.ShopCart;
import com.qq811565456.model.ShopGoods;
import com.qq811565456.model.ShopGroupbuy;
import com.qq811565456.service.GroupBuyService;
import com.qq811565456.service.SqlService;
import com.qq811565456.vo.WaterFallDataVO;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController("shopGoodsController")
@RequestMapping("/api/goods")
public class GoodsController {
    @Autowired
    private ShopGoodsMapper shopGoodsMapper;
    @Autowired
    private SqlService<ShopGoods> sqlService;
    @Autowired
    private GroupBuyService groupBuyService;

    @WebApi
    @PostMapping("waterFallData")
    public Response waterFallData(@RequestBody JSONObject params)
    {
        WaterFallDataVO swiper = new WaterFallDataVO(WaterFallTypeEnum.SWIPER);
        MyPage<ShopGoods> page = sqlService.toPage(params);
        MyPage<ShopGoods> paginate = shopGoodsMapper.selectMyPage(page, sqlService.ParamToWhere(params,ShopGoods.class));
        List<ShopGoods> goodsList = paginate.getData();
        List<WaterFallDataVO> list = new ArrayList<>();

        if(!goodsList.isEmpty()){
            swiper.setGoodsList(ListUtil.sub(goodsList, 0, 5));
            list.add(swiper);

            goodsList.forEach(goods->{
                WaterFallDataVO fallItem = new WaterFallDataVO(WaterFallTypeEnum.COMMON);
                fallItem.setGoodsList(List.of(goods));
                list.add(fallItem);
            });
        }

        if(page.getCurrent_page()==1){
            WaterFallDataVO activity = new WaterFallDataVO(WaterFallTypeEnum.GROUPBUY);
            List<ShopGroupbuy> groupBuyList = groupBuyService.start();
            activity.setGroupbuy(groupBuyList.isEmpty()?null:groupBuyList.get(0));
            list.add(activity);
        }

        return Response.ok(Map.of("list",list));
    }
}
