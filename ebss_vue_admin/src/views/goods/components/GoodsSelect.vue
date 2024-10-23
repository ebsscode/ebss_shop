<template>
  <div>
    <CheckBox v-if="!open" onlyvalue v-model:value="selected_goods" :options="selected_goods" value_key="goods_id" name_key="title" disabled/>

    <a-modal :footer="null" v-model:open="open" width="'70%'" title="选择商品" @cancel="cancel">
      <a-form layout="inline">
        <a-form-item>
          <a-input placeholder="商品名称" v-model:value="searchObj.title"/>
        </a-form-item>
        <a-form-item>
          <RemoteSelect placeholder="分类" table="base_category" name_key="cat_name" v-model:value="searchObj.category_id"/>
        </a-form-item>
        <a-button type="primary" @click="getGoods" style="margin-left:10px;">查询</a-button>
      </a-form>

      <div class="goods-list">
        <div v-for="(item, index) in goods" :key="index" :class="{'goods-item':true,selected: this.selected_goods.map(i=>i.goods_id).includes(item.goods_id) }" @click="selectIt(item)">
          <img :src="staticURL()+'/'+item.cover_img" style="height:150px;"/>
          <text class="title clamp">{{item.title}}</text>
          <div class="price-box">
            <text class="price">{{item.price}}</text>
            <text>已售 {{item.sale_count}}</text>
          </div>
        </div>
      </div>

      <div class="justify-end">
        <a-button type="default" @click.prevent="cancel" style="margin-right: 10px">取消</a-button>
        <a-button type="primary" html-type="submit" @click="submit">提交</a-button>
      </div>
    </a-modal>
    <a-button type="primary" html-type="submit" @click="open=true">选择商品</a-button>
  </div>
</template>
<script>
import {isNull,isUndefined} from '@/util/type/base.js'
export default {
    name: "GoodsSelect",
    props: {
        value: {
            type: [Array,Number],
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        maxCount: {
          type: Number,
          default: Infinity,
        }
    },
    watch: {
        value: {
            handler(newV, oldV) {
              if(isNull(newV) || isUndefined(newV)){
                if(this.maxCount===1){
                  this.$emit('update:value', null)
                }else{
                  this.$emit('update:value', [])
                }
                return;
              }
              if(newV){
                if(this.maxCount===1){
                  this.selected_goods = this.goods.filter(i=>{
                    return newV===i.goods_id
                  })
                }
                if(this.maxCount>1){
                  this.selected_goods = this.goods.filter(i=>{
                    return newV.includes(i.goods_id)
                  })
                }
              }
            },
            immediate: true
        }
    },
    data: function () {
        return {
          open: false,
          goods: [],
          selected_goods: [],
          searchObj: {
            is_spike: 1,is_listing: 1,limit:50,
          },
        };
    },
    created() {
      this.getGoods()
    },
    methods: {
        selectIt(goods) {
          let index = this.selected_goods.findIndex(i=>i.goods_id === goods.goods_id)
          if(index>=0){
            this.selected_goods.splice(index,1)
          }else{
            if(this.selected_goods.length>=this.maxCount){
              this.error('最多选择'+this.maxCount+'个');return;
            }
            this.selected_goods.push(goods)
          }
        },
        submit(e) {
          this.open = false;
          this.emitValue();
        },
        cancel() {
          this.open = false;
        },
        emitValue() {
          if(this.maxCount===1){
            if(this.selected_goods.length){
              this.$emit('update:value',this.selected_goods[0].goods_id)
            }else{
              this.$emit('update:value',null)
            }
          }
          if(this.maxCount>1){
            if(this.selected_goods.length){
              this.$emit('update:value',this.selected_goods.map(i=>i.goods_id))
            }else{
              this.$emit('update:value',[])
            }
          }
        },
        getGoods() {
          this.post('/admin/crud/list', {table: 'shop_goods',...this.searchObj }).then(({code,paginate}) => {
            if (code === 1) {
              this.goods=paginate.data;
              this.selected_goods = this.goods.filter(i=>{
                  if(this.maxCount==1){
                    return i.goods_id == this.value
                  }else{
                    return this.value.includes(i.goods_id)
                  }
              })
            }
          })
        },
    }
}
</script>
<style scoped lang="less">
/* 商品列表 */
.goods-list{
  display:flex;
  flex-wrap:wrap;
  background: #fff;
  margin-top: 10px;
  .goods-item{
    display:flex;
    flex-direction: column;
    width: 150px;
    padding: 10px;
    margin: 0 10px 10px 0;
    background: #efefef;
    &:hover{
      background: #dcdcdc;
    }
  }
  .selected{
    background: #63d2a1 !important;
  }
  .title{
    font-size: 14px;
    color: #000000;
    line-height: 40px;
  }
  .price-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;
    font-size: 12px;
  }
  .price{
    font-size: 14px;
    color: #e34242;
    line-height: 1;
    &:before{
      content: '￥';
      font-size: 13px;
    }
  }
}
</style>
