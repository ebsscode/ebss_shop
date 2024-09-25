package com.qq811565456.controller.order;

import cn.hutool.json.JSONObject;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.qq811565456.NumberUtil;
import com.qq811565456.ObjectUtil;
import com.qq811565456.Response;
import com.qq811565456.StringUtil;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.config.MyPage;
import com.qq811565456.mapper.ShopOrderMapper;
import com.qq811565456.model.ShopGoods;
import com.qq811565456.model.ShopOrder;
import com.qq811565456.service.SqlService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/mch/order")
public class OrderController {
    @Autowired
    private ShopOrderMapper shopOrderMapper;
    @Autowired
    private SqlService<ShopOrder> sqlService;

    @WebApi
    @PostMapping("list")
    public Response list(@RequestBody JSONObject params, HttpServletRequest request) {
        QueryWrapper<ShopOrder> where = Wrappers.query();
        if(ObjectUtil.has(params.get("status"))){
            where.and(j -> j.eq("status", params.get("status")));
        }
        if(ObjectUtil.has(params.get("keyword"))){
            where.and(i -> i.
                like("order_sn",params.get("keyword")).or().
                like("tel",params.get("keyword")).or().
                like("order_name",params.get("keyword")).or().
                like("express_name",params.get("keyword")).or().
                like("express_num",params.get("keyword")).or().
                like("addr",params.get("keyword"))
            );
        }
        where.and(i->i.eq("user_id",request.getAttribute("user_id")));

        log.info("data:{}",params.get("status"));

        MyPage<ShopOrder> paginate = shopOrderMapper.selectMyPage(sqlService.toPage(params,ShopOrder.class), where);
        return Response.ok(Map.of("paginate",paginate));
    }

}
