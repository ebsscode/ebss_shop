package com.qq811565456.controller.admin;

import cn.hutool.crypto.SecureUtil;
import cn.hutool.json.JSONObject;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import com.baomidou.mybatisplus.extension.toolkit.SqlRunner;
import com.qq811565456.MessageCode;
import com.qq811565456.Response;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.mapper.SysUserMapper;
import com.qq811565456.model.SysUser;
import com.qq811565456.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.SqlSessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.Map;
import java.util.Objects;

@RestController("adminSystemController")
@Slf4j
@RequestMapping("/admin")
public class SystemController {
    @Autowired
    private UserService userService;
    @Autowired
    private SysUserMapper sysUserMapper;
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;

    @WebApi
    @PostMapping("system/clear_data")
    public Response login(@RequestBody JSONObject params) throws SQLException {
        String type = (String) params.get("type");
        SqlSession session = sqlSessionTemplate.getSqlSessionFactory().openSession();
        if(Objects.equals(type, "shop_order") || Objects.equals(type, "all")){
            session.getConnection().prepareStatement("truncate `shop_order`").execute();
            session.getConnection().prepareStatement("truncate `shop_order_goods`").execute();
        }
        if(Objects.equals(type, "shop_goods") || Objects.equals(type, "all")){
            session.getConnection().prepareStatement("truncate `shop_goods`").execute();
            session.getConnection().prepareStatement("truncate `shop_goods_comment`").execute();
            session.getConnection().prepareStatement("truncate `shop_goods_favour`").execute();
            session.getConnection().prepareStatement("truncate `shop_cart`").execute();
            session.getConnection().prepareStatement("truncate `shop_groupbuy`").execute();
            session.getConnection().prepareStatement("truncate `shop_order`").execute();
            session.getConnection().prepareStatement("truncate `shop_order_goods`").execute();
            session.getConnection().prepareStatement("truncate `shop_spike`").execute();
        }
        if(Objects.equals(type, "all") ){
            session.getConnection().prepareStatement("truncate `base_charge_order`").execute();
            session.getConnection().prepareStatement("truncate `base_code`").execute();
            session.getConnection().prepareStatement("truncate `base_coupon_user`").execute();
            session.getConnection().prepareStatement("truncate `base_feedback`").execute();
            session.getConnection().prepareStatement("truncate `base_focus_user`").execute();
            session.getConnection().prepareStatement("truncate `base_sign_record`").execute();
            session.getConnection().prepareStatement("truncate `base_withdraw`").execute();
            session.getConnection().prepareStatement("truncate `log_integral`").execute();
            session.getConnection().prepareStatement("truncate `log_money`").execute();
            session.getConnection().prepareStatement("truncate `log_pay`").execute();
            session.getConnection().prepareStatement("truncate `log_usage`").execute();
            session.getConnection().prepareStatement("truncate `log_user`").execute();
            session.getConnection().prepareStatement("truncate `mch_comment`").execute();
            session.getConnection().prepareStatement("truncate `mch_favour`").execute();
            session.getConnection().prepareStatement("truncate `shop_cart`").execute();
            session.getConnection().prepareStatement("truncate `shop_goods_comment`").execute();
            session.getConnection().prepareStatement("truncate `shop_goods_favour`").execute();
            session.getConnection().prepareStatement("truncate `shop_goods_view`").execute();
            session.getConnection().prepareStatement("truncate `shop_order`").execute();
            session.getConnection().prepareStatement("truncate `shop_order_goods`").execute();
            session.getConnection().prepareStatement("truncate `sys_debug`").execute();
            session.getConnection().prepareStatement("truncate `sys_test`").execute();
            session.getConnection().prepareStatement("truncate `video_view`").execute();
        }
        session.commit();
        return Response.ok();
    }

}
