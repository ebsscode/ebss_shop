package com.qq811565456.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

import com.qq811565456.model.dto.ShopGoodsSpec;
import com.qq811565456.model.meta.NameMeta;
import com.qq811565456.typehandler.MyJsonTypeHandler;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * 
 * </p>
 *
 * @author qq811565456
 * @since 2024-09-19
 */
@Data
@TableName(value = "shop_goods",autoResultMap = true)
public class ShopGoods extends BaseModel {

    private static final long serialVersionUID = 1L;

    /**
     * 商品表
     */
    @TableId(value = "goods_id", type = IdType.AUTO)
    private Integer goodsId;

    /**
     * 商品标题
     */
    private String title;

    /**
     * 封面
     */
    private String coverImg;

    /**
     * 库存
     */
    private Integer quantity;

    /**
     * 价格
     */
    private BigDecimal price;

    /**
     * 原价
     */
    private BigDecimal originalPrice;

    /**
     * 图片
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private List<String> imglist;

    /**
     * 内容
     */
    private String content;

    /**
     * 添加时间
     */
    private Integer addTime;

    /**
     * 分类ID
     */
    private Integer categoryId;

    /**
     * 是否首页推荐
     */
    private Integer isIndex;

    /**
     * 排序数字
     */
    private Integer sortNum;

    /**
     * 商户ID
     */
    private Integer mchId;

    /**
     * 是否上架
     */
    private Integer isListing;

    /**
     * 是否积分商品
     */
    private Integer isIntegral;

    /**
     * 返还多少积分
     */
    private Integer integral;

    /**
     * 浏览量
     */
    private Integer viewCount;

    /**
     * 销量
     */
    private Integer saleCount;

    /**
     * 标签
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private List<BaseLabel> labels;

    /**
     * 规格
     */
    @TableField(typeHandler = MyJsonTypeHandler.class)
    private List<ShopGoodsSpec> spec;

    /**
     * 运费
     */
    private BigDecimal freight;

    /**
     *  分销金额
     */
    private BigDecimal distributionMoney;

    private Integer brandId;
}
