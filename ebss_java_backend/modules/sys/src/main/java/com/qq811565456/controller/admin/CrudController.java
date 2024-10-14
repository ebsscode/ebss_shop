package com.qq811565456.controller.admin;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.ReflectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import com.baomidou.mybatisplus.core.metadata.TableFieldInfo;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.qq811565456.*;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.config.MyPage;
import com.qq811565456.mapper.MyBaseMapper;
import com.qq811565456.model.BaseModel;
import com.qq811565456.model.ShopGoods;
import com.qq811565456.model.ShopOrder;
import com.qq811565456.model.SysUser;
import com.qq811565456.service.CrudService;
import com.qq811565456.service.MyQueryWrapper;
import com.qq811565456.service.SqlService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("/admin/crud")
public class CrudController {
    @Autowired
    private SqlService sqlService;
    @Autowired
    private CrudService<?> crudService;

    private final static ObjectMapper objectMapper = new ObjectMapper().setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);

    @PostMapping("list")
    @WebApi
    public Response list(@RequestBody JSONObject params) {
        String table = toTable(params);
        List<String> joinTables = toJoinTables(params);
        List<Map<String,String>> sortList = toSort(params);
        BaseModel model = crudService.tableToModel(table);
        MyBaseMapper modelMapper = crudService.tableToMapper(table);
        MyQueryWrapper where = sqlService.ParamToWhere(params, model.getClass());
        List<String> filedList = SqlHelper.table(model.getClass()).getFieldList().stream().map(TableFieldInfo::getColumn).toList();
        String table_key = SqlHelper.table(model.getClass()).getKeyColumn();

//        log.info("filedList:{},{},{}",filedList);
        if(!sortList.isEmpty()){
            sortList.forEach(sort_item->{
                sort_item.keySet().forEach(sort_filed->{
                    String sort = sort_item.get(sort_filed);
                    if(Objects.equals(sort, "asc")){
                        where.orderByAsc(sort_filed);
                    }
                    if(Objects.equals(sort, "desc")){
                        where.orderByDesc(sort_filed);
                    }
//                    log.info("forEachRemaining:{},{},{}",sort_filed,sort);
                });
            });
        }else{
            if(filedList.contains("sort_num")){
                where.orderByAsc("sort_num");
            }
            if(filedList.contains("add_time")){
                where.orderByAsc("add_time");
            }
        }
        if(!CollUtil.isEmpty((List<Integer>) params.get("table_ids"))){
            where.in(table_key,params.get("table_ids"));
        }
        if(Objects.equals(table, "shop_order")){
            if(!ObjectUtil.isEmpty(RequestUtil.getMchId())){
                where.eq("mch_id",RequestUtil.getMchId());
            }
        }
        if(Objects.equals(table, "shop_goods")){
            if(!ObjectUtil.isEmpty(RequestUtil.getMchId())){
                where.eq("mch_id",RequestUtil.getMchId());
            }
        }
        if(!ObjectUtil.isEmpty(RequestUtil.getModuleId())&&filedList.contains("module_id")){
            where.in("module_id",List.of(0,RequestUtil.getModuleId()));
        }


        MyPage paginate = modelMapper.selectMyPage(sqlService.toPage(params), where);
        if(!joinTables.isEmpty()){
            List<JsonNode> data = new ArrayList<>();
            paginate.getData().forEach(record_item->{
                joinTables.forEach(join_table->{
                    String join_table_key = SqlHelper.table(crudService.tableToModel(join_table).getClass()).getKeyColumn();
                    MyBaseMapper join_table_mapper = crudService.tableToMapper(join_table);
                    Object join_table_data = join_table_mapper.selectById((Serializable) ReflectUtil.getFieldValue(record_item, StrUtil.toCamelCase(join_table_key)));
                    Map<String, Object> record_item_map = BeanUtil.beanToMap(record_item);
                    record_item_map.put(join_table,join_table_data);

                    JsonNode jsonNode = null;
                    try {
                        jsonNode = objectMapper.readTree(objectMapper.writeValueAsString(record_item_map));
                    } catch (JsonProcessingException e) {
                        e.printStackTrace();
                    }
                    JsonNode snakeJsonNode = JsonUtil.convertKeysToSnake(jsonNode);
                    data.add(snakeJsonNode);
//                    log.info("join_table_key:{},{},{}",join_table_data);
                });
            });
            paginate.setData(data);
        }

        return Response.ok(Map.of("paginate",paginate,"table_key",table_key,"where",where.getExpression().getSqlSegment()));
    }

    @PostMapping("save")
    @WebApi
    public Response save(@RequestBody JSONObject params){
        String table = toTable(params);
        MyBaseMapper myBaseMapper = crudService.tableToMapper(table);
        BaseModel model = (BaseModel) params.toBean(crudService.tableToModel(table).getClass());
        List<String> filedList = SqlHelper.table(model.getClass()).getFieldList().stream().map(TableFieldInfo::getColumn).toList();
        String table_key = SqlHelper.table(model.getClass()).getKeyColumn();
        Integer table_id = (Integer)ReflectUtil.getFieldValue(model, StrUtil.toCamelCase(table_key));

        if(ObjectUtil.equals("sys_module",table)&&!ObjectUtil.isEmpty(RequestUtil.getModuleId())&&filedList.contains("module_id")){
            ReflectUtil.setFieldValue(model,"module_id",RequestUtil.getModuleId());
        }
        if(Objects.equals(table, "shop_goods")){
            if(!ObjectUtil.isEmpty(RequestUtil.getMchId())){
                ReflectUtil.setFieldValue(model,"mch_id",RequestUtil.getMchId());
            }
        }
        log.info("model:{},{},{}",model);
        myBaseMapper.insertOrUpdate(model);
        return Response.ok(ObjectUtil.isEmpty(table_id)?"新增成功":"更新成功");
    }

    @PostMapping("detail")
    @WebApi
    public Response detail(@RequestBody JSONObject params){ // todo 未测试
        String table = toTable(params);
        BaseModel model = crudService.tableToModel(table);
        String table_key = SqlHelper.table(model.getClass()).getKeyColumn();
        MyBaseMapper myBaseMapper = crudService.tableToMapper(table);
        model = (BaseModel) myBaseMapper.selectById(toTableId(params,table_key));
        List<String> joinTables = toJoinTables(params);
        BaseModel finalModel = model;
        final JsonNode[] snakeJsonNode = {null};
        joinTables.forEach(join_table->{
            String join_table_key = SqlHelper.table(crudService.tableToModel(join_table).getClass()).getKeyColumn();
            MyBaseMapper join_table_mapper = crudService.tableToMapper(join_table);
            Object join_table_data = join_table_mapper.selectById((Serializable) ReflectUtil.getFieldValue(finalModel, StrUtil.toCamelCase(join_table_key)));
            Map<String, Object> record_map = BeanUtil.beanToMap(finalModel);
            record_map.put(join_table,join_table_data);

            JsonNode jsonNode = null;
            try {
                jsonNode = objectMapper.readTree(objectMapper.writeValueAsString(record_map));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
            snakeJsonNode[0] = JsonUtil.convertKeysToSnake(jsonNode);
        });
        return Response.ok(Map.of("detail", snakeJsonNode[0],"table_key",table_key));
    }

    @PostMapping("delete")
    @WebApi
    public Response delete(@RequestBody JSONObject params){
        String table = toTable(params);
        MyBaseMapper myBaseMapper = crudService.tableToMapper(table);
        BaseModel model = (BaseModel) params.toBean(crudService.tableToModel(table).getClass());

        List<Integer> table_ids = (List<Integer>) params.get("table_ids");
        table_ids.forEach(table_id->{
            if(Objects.equals(table, "base_article")){
                if(table_id<10){
                    Response.fail("禁止删除！");
                }
            }
            if(Objects.equals(table, "base_article_category")){
                if(table_id<10){
                    Response.fail("禁止删除！");
                }
            }
            if(Objects.equals(table, "base_article_category")){
                MyBaseMapper base_article_mapper = crudService.tableToMapper("base_article");
                base_article_mapper.deleteById(table_id);
            }
            if(Objects.equals(table, "mch")){
                MyBaseMapper shop_order_mapper = crudService.tableToMapper("shop_order");
                ShopOrder shopOrder = (ShopOrder) shop_order_mapper.selectById(table_id);
                if(!ObjectUtil.isEmpty(shopOrder)){
                    Response.fail("商户有订单，禁止删除！");
                }
                MyBaseMapper shop_goods_mapper = crudService.tableToMapper("shop_goods");
                ShopGoods shopGoods = (ShopGoods) shop_goods_mapper.selectById(table_id);
                if(!ObjectUtil.isEmpty(shopGoods)
                ){
                    Response.fail("商户有商品，禁止删除！");
                }
                MyBaseMapper mch_favour_mapper = crudService.tableToMapper("mch_favour");
                mch_favour_mapper.deleteByMap(Map.of("mch_id",table_id));
            }
            if(Objects.equals(table, "sys_role")){
                if(table_id<10){
                    Response.fail("禁止删除！");
                }
                MyBaseMapper sys_user_mapper = crudService.tableToMapper("sys_user");
                SysUser sysUser = (SysUser) sys_user_mapper.selectById(table_id);
                if(!ObjectUtil.isEmpty(sysUser)
                ){
                    Response.fail("角色正在使用，禁止删除！");
                }
            }
            if(Objects.equals(table, "shop_goods")){
                MyBaseMapper shop_goods_comment_mapper = crudService.tableToMapper("shop_goods_comment");
                MyBaseMapper shop_goods_favour_mapper = crudService.tableToMapper("shop_goods_favour");
                MyBaseMapper shop_goods_view_mapper = crudService.tableToMapper("shop_goods_view");
                MyBaseMapper shop_groupbuy_mapper = crudService.tableToMapper("shop_groupbuy");
                MyBaseMapper shop_cart_mapper = crudService.tableToMapper("shop_cart");
                shop_goods_comment_mapper.deleteByMap(Map.of("goods_id",table_id));
                shop_goods_favour_mapper.deleteByMap(Map.of("goods_id",table_id));
                shop_goods_view_mapper.deleteByMap(Map.of("goods_id",table_id));
                shop_groupbuy_mapper.deleteByMap(Map.of("goods_id",table_id));
                shop_cart_mapper.deleteByMap(Map.of("goods_id",table_id));
            }
            if(Objects.equals(table, "shop_order")){
                MyBaseMapper shop_order_goods_mapper = crudService.tableToMapper("shop_order_goods");
                shop_order_goods_mapper.deleteByMap(Map.of("order_id",table_id));
            }
        });
        int result = myBaseMapper.deleteBatchIds(table_ids);
        return Response.ok("成功删除"+result+"条数据");
    }

    private String toTable(JSONObject params){
        log.info("params:{}",params);
        return String.valueOf( params.get("table"));
    }
    private Serializable toTableId(JSONObject params,String table_key){
        return (Serializable) params.get(table_key);
    }
    private List<String> toJoinTables(JSONObject params){
        return !ObjectUtil.isEmpty(params.get("join_tables"))?(List<String>) params.get("join_tables"):new ArrayList<>();
    }
    private List<Map<String,String>> toSort(JSONObject params){
        return !ObjectUtil.isEmpty(params.get("sort"))?(List<Map<String,String>>) params.get("sort"):new ArrayList<>();
    }

}

