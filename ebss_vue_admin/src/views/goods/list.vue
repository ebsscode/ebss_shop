<template>
  <Crud @hide="hide">
    <template #save>
      <div class="justify-center tabs-bar">
        <a-radio-group v-model:value="action" button-style="solid">
          <a-radio-button :value="0">商品信息</a-radio-button>
          <a-radio-button v-if="saveFormData.is_spec" :value="1">规格库存</a-radio-button>
          <a-radio-button :value="2">运费模板</a-radio-button>
          <a-radio-button :value="3">促销活动</a-radio-button>
          <a-radio-button :value="4">分销设置</a-radio-button>
          <a-radio-button :value="5">其他设置</a-radio-button>
        </a-radio-group>
      </div>
      <a-form v-show="action===0" ref="save_form" :model="saveFormData" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
        <a-form-item label="商品名称" name="title" :rules="[{ required: true, message: '' }]">
          <a-input v-model:value="saveFormData.title"/>
        </a-form-item>
        <a-form-item label="主图" name="cover_img" :rules="[{ required: true, message: '' }]">
          <Upload :maxCount="1" v-model:value="saveFormData.cover_img"/>
        </a-form-item>
        <a-form-item label=" " :colon="false">
          <div class="justify-start">
            <a-form-item label="上架" name="is_listing" >
              <YesOrNo v-model:value="saveFormData.is_listing"/>
            </a-form-item>
            <a-form-item label="库存" name="quantity" :rules="[{ required: true, message: '' }]" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.quantity" :disabled="saveFormData.is_spec==1"/>
            </a-form-item>
            <a-form-item label="价格" name="price" :rules="[{ required: true, message: '' }]" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.price" :disabled="saveFormData.is_spec==1"/>
            </a-form-item>
            <a-form-item label="原价" name="original_price" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.original_price"/>
            </a-form-item>
            <a-form-item label="返还积分" name="integral" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.integral"/>
            </a-form-item>
          </div>
        </a-form-item>
        <a-form-item label="商品图片" name="imglist" :rules="[{ required: true, message: '' }]">
          <Upload :maxCount="10" v-model:value="saveFormData.imglist"/>
        </a-form-item>
        <a-form-item label="品牌" name="brand_id">
          <RemoteSelect table="base_brand" name_key="name" v-model:value="saveFormData.brand_id"/>
        </a-form-item>

        <a-form-item label=" " :colon="false">
          <div class="justify-start">
            <a-form-item label="销量" name="sale_count">
              <a-input v-model:value="saveFormData.sale_count"/>
            </a-form-item>
            <a-form-item label="排序数字" name="sort_num" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.sort_num"/>
            </a-form-item>
            <a-form-item label="浏览量" name="view_count"  style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.view_count"/>
            </a-form-item>
            <a-form-item label="评论量" name="comment_count"  style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.view_count"/>
            </a-form-item>
          </div>
        </a-form-item>
        <a-form-item label="所属商家" name="mch_id">
          <SearchSelect table="mch" name_key="name" v-model:value="saveFormData.mch_id"/>
        </a-form-item>
        <a-form-item label="标签" name="labels" >
          <CheckBox v-model:value="saveFormData.labels" :options="labels" name_key="name" value_key="name"/>
        </a-form-item>
        <a-form-item label="启用规格库存" name="is_spec" >
          <YesOrNo v-model:value="saveFormData.is_spec"/>
        </a-form-item>
        <a-form-item label="规格">
          <div v-if="saveFormData.spec&&saveFormData.spec.length">
            <div v-for="(item,index) in saveFormData.spec" :key="index" class="flex-row align-center" style="border: 1px solid #8d8a8a;border-radius: 10px;padding: 5px;margin-bottom: 10px;">
              <span class="QQ811565456 hewei-jianshao2" @click="saveFormData.spec.splice(index,1)" style="font-size: 28px;color: #dc3813;margin-right: 5px;"></span>
              <a-input-group compact>
                <a-input v-model:value="item.name" style="width: 20%" >
                  <template #prefix>
                    名称:
                  </template>
                  <template #suffix>
                    <span class="QQ811565456 hewei-cuowu"  @click="item.name=''"></span>
                  </template>
                </a-input>
                <a-input v-model:value="item.values[index2].name" style="width: 20%" v-for="(item2,index2) in item.values" :key="index2">
                  <template #prefix>
                    值{{index2+1}}:
                  </template>
                  <template #suffix>
                    <span class="QQ811565456 hewei-shanchu"  @click="item.values.splice(index2,1)"></span>
                  </template>
                </a-input>
                <span class="QQ811565456 hewei-jia" @click="item.values.push({name:''})" style="font-size: 24px;"></span>
              </a-input-group>
            </div>
          </div>
          <a-button type="primary" @click="saveFormData.spec.push({name:'',values:[]})" >新增规格</a-button>
        </a-form-item>
        <a-form-item label="详情" name="content" >
          <FullEditor v-model:value="saveFormData.content"/>
        </a-form-item>
      </a-form>
      <a-form v-if="action===1" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <div v-if="saveFormData.is_spec==1&&has(saveFormData.spec_quantity_price)">
          <a-table :dataSource="spec_cartesian" :columns="spec_columns" :pagination="false">
            <template #bodyCell="{ text, record, index, column  }">
              <template v-if="column.title === '库存'">
                <a-input v-model:value="saveFormData.spec_quantity_price[index].quantity" />
              </template>
              <template v-if="column.title === '价格'">
                <a-input v-model:value="saveFormData.spec_quantity_price[index].price" />
              </template>
              <template v-if="column.title === '规格图片'">
                <Upload :maxCount="5" v-model:value="saveFormData.spec_quantity_price[index].imgs"/>
              </template>
            </template>
          </a-table>
        </div>
      </a-form>
      <a-form v-if="action===5" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-form-item label="分类" name="category_id">
          <RemoteSelect mode="multiple" placeholder="分类" table="base_category" name_key="cat_name" v-model:value="saveFormData.category_ids"/>
        </a-form-item>
      </a-form>

    </template>
    <template #search>
      <a-form layout="inline" >
        <a-form-item>
          <a-input placeholder="商品名称" v-model:value="searchObj.title"/>
        </a-form-item>
        <a-form-item>
          <RemoteSelect placeholder="分类" table="base_category" name_key="cat_name" v-model:value="searchObj.category_id"/>
        </a-form-item>
        <a-form-item>
          <Select placeholder="上架" v-model:value="searchObj.is_listing" :constant="constant.yesOrNo()"/>
        </a-form-item>
        <a-form-item>
          <Select placeholder="商品标签" :constant="labels" name_key="name" value_key="name" v-model:value="searchObj.labels"/>
        </a-form-item>
      </a-form>
    </template>
  </Crud>
</template>
<script lang="jsx">
import {cartesianProduct} from '@/util/format/array.js'
import {has} from '@/util/type/base.js'
export default {
  name: "list",
  components:{
  },
  data: function () {
    return {
      has,
      table: 'shop_goods',
      showAdd: true,
      modelWidth:'85%',
      modalStyle: {'top':'5px'},
      labels: [],
      action: 0,
      saveFormData: {
        integral:0,
        spec:[],
        imglist:[],
        spec_quantity_price: [],
      },
      searchObj: {},
      showCopy: ()=>true,
      columns: [
        {
          title: '商品名称',
          key: 'title',
          is_edit: true,
        },
        {
          title: '主图',
          key: 'cover_img',
        },
        {
          title: '库存',
          key: 'quantity',
          is_edit: true,
          sorter: true,
        },
        {
          title: '价格',
          key: 'price',
          is_edit: true,
          sorter: true,
        },{
          title: '排序',
          key: 'sort_num',
          is_edit: true,
        },{
          title: '上架',
          key: 'is_listing',
          is_edit: true,
        },{
          title: '添加时间',
          key: 'add_time',
        },
      ],
    };
  },
  computed: {
    spec_cartesian(){
      let spec_quantity_price = []
      let cartesian = cartesianProduct(this.saveFormData.spec.map(i=>i.values))
      // console.log(cartesian,this.saveFormData.spec_quantity_price)
      cartesian.forEach(i=>{
        let find_spec_item = this.saveFormData.spec_quantity_price.find(spec_item =>{
          return JSON.stringify(spec_item.spec) === JSON.stringify(i)
        })
        spec_quantity_price.push({
          quantity:find_spec_item?find_spec_item.quantity:0,
          price:find_spec_item?find_spec_item.price:0,
          imgs:find_spec_item?find_spec_item.imgs:[],
          spec:i,
        })
      })
      this.saveFormData.spec_quantity_price = spec_quantity_price
      return cartesian
    },
    spec_columns(){
      let spec_columns =  this.saveFormData.spec.map( (i,index)=>{
        return {
          key:index,
          title:i.name,
          dataIndex:[index,'name'],
        }
      });
      (['库存','价格','规格图片']).map(i=>{
        spec_columns.push({
          key:spec_columns.length,
          title:i,
          dataIndex:spec_columns.length,
        })
      })
      return spec_columns
    },
  },
  created() {
    this.getLabel()
  },
  watch: {
    action(n,o){
      if(n === 1&&this.saveFormData.goods_id&&!has(this.saveFormData.spec_quantity_price)){
        this.getSpecList()
      }
      if(n === 5&&!has(this.saveFormData.category_ids)){
        this.getGoodsCategory()
      }
    }
  },
  methods: {
    getLabel() {
      this.post('/admin/crud/list',{table:'base_label',type:2}).then(({code, paginate}) => {
        if (code === 1) {
          this.labels = paginate.data
        }
      })
    },
    hide() {
      this.action = 0
    },
    getSpecList() {
      this.post('/admin/crud/list',{table:'shop_goods_spec_quantity_price',goods_id:this.saveFormData.goods_id}).then(({code, paginate}) => {
        if (code === 1) {
          this.saveFormData.spec_quantity_price = paginate.data
        }
      })
    },
    getGoodsCategory() {
      this.post('/admin/crud/list',{table:'shop_goods_category_ref',goods_id:this.saveFormData.goods_id}).then(({code, paginate}) => {
        if (code === 1) {
          this.saveFormData.category_ids = paginate.data.map(i=>i.category_id)
        }
      })
    },
  }
}
</script>
<style scoped lang="less">
.tabs-bar{
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
}
</style>
