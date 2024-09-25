package com.qq811565456.controller;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.qq811565456.Response;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.mapper.ShopCartMapper;
import com.qq811565456.model.ShopCart;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/shop/cart")
public class CartController {
    @Autowired
    private ShopCartMapper shopCartMapper;

    @WebApi
    @PostMapping("list")
    public Response list(HttpServletRequest request)
    {
        QueryWrapper<ShopCart> where = Wrappers.query();
        where.eq("user_id",request.getAttribute("user_id"));

        List<ShopCart> list = shopCartMapper.selectList(where);
        return Response.ok(Map.of("list",list));
    }
}
