package com.qq811565456.vo;

import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import com.qq811565456.enumeration.WaterFallTypeEnum;
import com.qq811565456.model.ShopGoods;
import com.qq811565456.model.ShopGroupbuy;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class WaterFallDataVO {
    private WaterFallTypeEnum type;
    private List<ShopGoods> goodsList = new ArrayList<>();
    private ShopGroupbuy groupbuy;

    public WaterFallDataVO(WaterFallTypeEnum type) {
        this.type = type;
    }

}
