package com.qq811565456.controller.goods;


import cn.hutool.json.JSONObject;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import com.qq811565456.Response;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.config.MyPage;
import com.qq811565456.mapper.ShopGoodsMapper;
import com.qq811565456.model.ShopGoods;
import com.qq811565456.service.SqlService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/mch/goods")
public class GoodsController {
    @Autowired
    private ShopGoodsMapper shopGoodsMapper;
    @Autowired
    private SqlService<ShopGoods> sqlService;

    @WebApi
    @PostMapping("list")
    public Response list(@RequestBody JSONObject params) {
        MyPage<ShopGoods> paginate = shopGoodsMapper.selectMyPage(sqlService.toPage(params), sqlService.ParamToWhere(params,ShopGoods.class));
        return Response.ok(Map.of("paginate",paginate));
    }

}
