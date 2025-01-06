<template>
  <div>
    <CheckBox v-if="!open" onlyvalue v-model:value="selected_goods" :options="selected_goods" value_key="goods_id" name_key="title" disabled/>

    <a-modal :footer="null" v-model:open="open" width="'70%'" title="选择商品" @cancel="cancel">
      <a-form layout="inline" >
        <a-form-item>
          <a-input placeholder="商品名称" v-model:value="searchObj.title"/>
        </a-form-item>
        <a-form-item>
          <RemoteSelect placeholder="分类" table="base_category" name_key="cat_name" v-model:value="searchObj.category_id"/>
        </a-form-item>
        <a-button type="primary" @click="getGoods" style="margin-left:10px;">查询</a-button>
      </a-form>
      <a-card title="已选择商品" :bordered="false" >
        <div class="goods-list">
          <div v-for="(item, index) in selected_goods" :key="index">
            <div :class="{'goods-item':true,selected: this.selected_goods.map(i=>i.goods_id).includes(item.goods_id) }" @click="selectIt(item)">
              <img :src="staticURL()+'/'+item.cover_img" style="height:150px;"/>
              <text class="title clamp">{{item.title}}</text>
              <div class="price-box">
                <text class="price">{{item.price}}</text>
                <text>已售 {{item.sale_count}}</text>
              </div>
            </div>
          </div>
        </div>
      </a-card>
      <a-card title="所有商品" :bordered="false" >
        <div class="goods-list">


          <div v-for="(item, index) in goods" :key="index">
            <a-popover placement="bottom">
              <template #content>
                2
              </template>
              <div :class="{'goods-item':true,selected: this.selected_goods.map(i=>i.goods_id).includes(item.goods_id) }" @click="selectIt(item)">
                <img :src="staticURL()+'/'+item.cover_img" style="height:150px;"/>
                <text class="title clamp">{{item.title}}</text>
                <div class="price-box">
                  <text class="price">{{item.price}}</text>
                  <text>已售 {{item.sale_count}}</text>
                </div>
              </div>
            </a-popover>

          </div>





<!--          <div v-for="(item, index) in goods" :key="index">-->
<!--            <div :class="{'goods-item':true,selected: this.selected_goods.map(i=>i.goods_id).includes(item.goods_id) }" @click="selectIt(item)">-->
<!--              <img :src="staticURL()+'/'+item.cover_img" style="height:150px;"/>-->
<!--              <text class="title clamp">{{item.title}}</text>-->
<!--              <div class="price-box">-->
<!--                <text class="price">{{item.price}}</text>-->
<!--                <text>已售 {{item.sale_count}}</text>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </a-card>
      <div class="justify-end"  style="margin-bottom: 10px;">
        <a-pagination
            v-model:current="pagination.current"
            v-model:pageSize="pagination.pageSize"
            :showQuickJumper="false"
            :showSizeChanger="pagination.showSizeChanger"
            :pageSizeOptions="pagination.pageSizeOptions"
            :total="pagination.total"
            :show-total="pagination.showTotal"
            @change="getGoods"
        />
      </div>
      <div class="justify-end">
        <a-button type="default" @click.prevent="cancel" style="margin-right: 10px">取消</a-button>
        <a-button type="primary" html-type="submit" @click="submit">提交</a-button>
      </div>
    </a-modal>
    <SpecSelect set_price set_quantity :type="type" v-if="goods_item" :goods_id="goods_item.goods_id" @specSelect="specSelect"/>
    <a-button type="primary" html-type="submit" @click="open=true">选择商品</a-button>
  </div>
</template>
<script lang="jsx">
import {paginate} from '@/util/content/page.js'
import {isNull,isUndefined,has} from '@/util/type/base.js'
import SpecSelect from '@/views/goods/components/SpecSelect.vue'
export default {
    name: "GoodsSelect",
    components:{
      SpecSelect,
    },
    props: {
        value: {
            type: [Array,Number],
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: '',
        },
        is_spec_select: {
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
                this.getSelectedGoods();
              }
            },
            immediate: true
        }
    },
    data: function () {
        return {
          open: false,
          goods: [],
          pagination:paginate(),
          goods_item:null,
          spec_columns: [
            {
              key:'quantity',
              title:'库存',
              dataIndex:'quantity',
            },
            {
              key:'price',
              title:'价格',
              dataIndex:'price',
            },
            {
              key:'spec',
              title:'规格',
              dataIndex:'spec',
              customRender:(data)=>{
                return <span>{data.text.map(i=>i.name).join('、')}</span>
              },
            },
          ],
          selected_goods: [],
          searchObj: {
            is_spike: 1,is_listing: 1
          },
        };
    },
    created() {
      this.getGoods()
    },
    methods: {
        specSelect(selected_spec) {
          this.selected_goods.push({...this.goods_item,selected_spec:selected_spec})
          this.goods_item = null;
        },
        selectIt(goods) {
          // console.log(goods)
          let hasIndex = this.selected_goods.findIndex(i=>i.goods_id === goods.goods_id)
          if(hasIndex>=0){
            this.selected_goods.splice(hasIndex,1)
          }else{
            if(this.selected_goods.length>=this.maxCount){
              this.error('最多选择'+this.maxCount+'个');return;
            }
            if(this.is_spec_select&&goods.is_spec===1&&!has(goods.selectedSpecIds)){
              this.goods_item = goods
              return;
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
          this.$emit('goodsChange',this.selected_goods)
        },
        getSelectedGoods() {
          this.post('/admin/crud/list', {table: 'shop_goods',where:[['goods_id','in',this.value]]}).then(({code,paginate}) => {
            if (code === 1) {
              this.selected_goods = paginate.data
            }
          })
        },
        getGoods() {
          this.post('/admin/crud/list', {table: 'shop_goods',...this.searchObj, page: this.pagination.current, limit: this.pagination.pageSize, }).then(({code,paginate}) => {
            if (code === 1) {
              this.goods=paginate.data;
              this.pagination = {...this.pagination,
                current: paginate.current_page,
                total: paginate.total,
                pageSize: paginate.per_page,
              }
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
