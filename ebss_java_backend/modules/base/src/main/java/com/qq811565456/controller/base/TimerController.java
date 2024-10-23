package com.qq811565456.controller.base;

import com.qq811565456.FileUploadUtil;
import com.qq811565456.Response;
import com.qq811565456.config.MyPage;
import com.qq811565456.mapper.ShopGoodsMapper;
import com.qq811565456.model.ShopGoods;
import com.qq811565456.service.ConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController("baseTimerController")
@RequestMapping("/timer")
public class TimerController {
    @Autowired
    private ShopGoodsMapper shopGoodsMapper;

    @PostMapping("syncGoodsComment")
    public Response syncGoodsComment(){


        return Response.ok();
    }


}
