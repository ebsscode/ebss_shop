<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <template v-if="saveFormData&&saveFormData.order_goods">
                  <div class="g-item" v-for="(item,index) in saveFormData.order_goods" :key="index">
                    <img class="img" :src="baseURL()+'/'+item.cover_img" />
                    <div class="right">
                      <span class="title clamp">{{item.title}}</span>
                      <span class="spec"> {{item.select_spec}}</span>
                      <div class="price-box">
                        <span class="price">￥{{item.price}}</span>
                        <span class="number">x {{item.amount}}</span>
                      </div>
                    </div>
                  </div>
                </template>
                <div class="address-section" v-if="saveFormData&&saveFormData.addr&&saveFormData.addr.addr_id" style="margin-bottom: 10px;">
                  <div class="addr-content justify-between">
                    <span class="QQ811565456 hewei-shouhuodizhi"></span>
                    <div class="cen" >
                      <div class="top">
                        <span class="name">{{saveFormData.addr.name}}</span>
                        <span class="mobile">{{saveFormData.addr.tel}}</span>
                      </div>
                      <span class="address">{{saveFormData.addr.city}}{{saveFormData.addr.district}} {{saveFormData.addr.address}}</span>
                    </div>
                    <span class="QQ811565456 hewei-fuzhi" @click="copy(`${saveFormData.addr.province}${saveFormData.addr.city}${saveFormData.addr.district}${saveFormData.addr.address} ${saveFormData.addr.name} ${saveFormData.addr.tel}`)"></span>
                  </div>
                  <img class="a-bg" :src="constant.addr_line_img" />
                </div>

                <a-form-item label="快递名称" name="express_name">
                    <a-input v-model:value="saveFormData.express_name"/>
                </a-form-item>
                <a-form-item label="快递单号" name="express_num">
                  <a-input v-model:value="saveFormData.express_num"/>
                </a-form-item>
                <a-form-item label="状态" name="status">
                  <Select placeholder="状态" v-model:value="saveFormData.status" :constant="constant.orderStatus()"/>
                </a-form-item>
                <a-form-item label="是否支付" name="is_pay">
                  <Select placeholder="是否支付" v-model:value="saveFormData.is_pay" :constant="constant.yesOrNo()"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="订单号" v-model:value="searchObj.order_sn"/>
                </a-form-item>
                <a-form-item>
                  <a-input placeholder="收货人" v-model:value="searchObj.order_name"/>
                </a-form-item>
                <a-form-item>
                  <a-input placeholder="手机号" v-model:value="searchObj.tel"/>
                </a-form-item>
                <a-form-item>
                  <a-input placeholder="快递单号" v-model:value="searchObj.express_num"/>
                </a-form-item>
                <a-form-item>
                  <a-input placeholder="用户ID" v-model:value="searchObj.user_id"/>
                </a-form-item>
                <a-form-item>
                  <a-input placeholder="商户ID" v-model:value="searchObj.mch_id"/>
                </a-form-item>
                <a-form-item label="是否支付" >
                  <Select placeholder="是否支付" v-model:value="searchObj.is_pay" :constant="constant.yesOrNo()"/>
                </a-form-item>
                <a-form-item>
                  <Select placeholder="订单状态" v-model:value="searchObj.status" :constant="constant.orderStatus()"/>
                </a-form-item>
                <a-form-item>
                  <Select placeholder="订单类型" v-model:value="searchObj.type" :constant="constant.orderType()"/>
                </a-form-item>
            </a-form>
        </template>
    </Crud>
</template>
<script lang="jsx">
import {copy} from '@/util/content/base.js'
export default {
    name: "list",
    data: function () {
        return {
          table: 'shop_order',
          saveFormData: {},
          copy,
          searchObj: {
            is_pay:1,
          },
          columns: [
              {
                  title: '订单号',
                  key: 'order_sn',
              },{
                  title: '用户ID',
                  key: 'user_id',
              },{
                  title: '姓名',
                  key: 'order_name',
              },{
                  title: '手机号',
                  key: 'tel',
              },{
                  title: '是否支付',
                  key: 'is_pay',
              },{
                  title: '状态',
                  key: 'status',
                  customRender:(data)=>{
                    return <span>{this.constant.orderStatus(data.text)}</span>
                  }
              },{
                  title: '订单金额',
                  key: 'order_money',
              },{
                  title: '类型',
                  key: 'type',
                  customRender:(data)=>{
                    return <span>{this.constant.orderType(data.text)}</span>
                  }
              },{
                  title: '折扣',
                  key: 'discount',
              },{
                  title: '下单时间',
                  key: 'add_time',
              },
          ],
        };
    },
    components: {},
    created() {
    },
    methods: {
    }
}
</script>
<style scoped lang="less">
.address-section {
  padding: 15px 0;
  background: #fff;
  position: relative;
  .addr-content {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .icon-shouhuodizhi {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    color: #888;
    font-size: 22px;
  }
  .cen {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 14px;
    color: #303133;
  }
  .name {
    font-size: 17px;
    margin-right: 12px;
  }
  .address {
    margin-top: 8px;
    margin-right: 10px;
    color: #909399;
  }
  .a-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 3px;
  }
}
.g-item {
  display: flex;
  margin: 10px 15px;
  .img {
    flex-shrink: 0;
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 2px;
  }
  .right {
    flex: 1;
    padding-left: 12px;
    overflow: hidden;
  }
  .title {
    font-size: 15px;
    color: #303133;
  }
  .spec {
    font-size: 13px;
    color: #909399;
  }
  .price-box {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #303133;
    padding-top: 5px;
    .price {
      margin-bottom: 2px;
    }
    .number{
      font-size: 13px;
      color: #606266;
      margin-left: 10px;
    }
  }
}
</style>
