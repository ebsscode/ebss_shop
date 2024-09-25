package com.qq811565456.model.dto;

import com.qq811565456.model.meta.NameMeta;
import lombok.Data;
import java.io.Serializable;
import java.util.List;

@Data
public class ShopGoodsSpec implements Serializable {
    private String name;
    private List<NameMeta> values;
}
