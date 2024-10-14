<template>
  <Crud>
    <template #save>
      <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <a-form-item label="商品名称" name="title" :rules="[{ required: true, message: '' }]">
          <a-input v-model:value="saveFormData.title"/>
        </a-form-item>
        <a-form-item label="主图" name="cover_img" :rules="[{ required: true, message: '' }]">
          <Upload :maxCount="1" v-model:value="saveFormData.cover_img"/>
        </a-form-item>
        <a-form-item label=" " :colon="false">
          <div class="justify-start">
            <a-form-item label="库存" name="quantity" :rules="[{ required: true, message: '' }]">
              <a-input v-model:value="saveFormData.quantity"/>
            </a-form-item>
            <a-form-item label="价格" name="price" :rules="[{ required: true, message: '' }]" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.price"/>
            </a-form-item>
            <a-form-item label="原价" name="original_price" :rules="[{ required: true, message: '' }]" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.original_price"/>
            </a-form-item>
            <a-form-item label="返还积分" name="integral" :rules="[{ required: true, message: '' }]" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.integral"/>
            </a-form-item>
          </div>
        </a-form-item>
        <a-form-item label="商品图片" name="imglist" :rules="[{ required: true, message: '' }]">
          <Upload :maxCount="10" v-model:value="saveFormData.imglist"/>
        </a-form-item>
        <a-form-item label="分类" name="category_id" :rules="[{ required: true, message: '' }]">
          <RemoteSelect table="base_category" name_key="cat_name" v-model:value="saveFormData.category_id"/>
        </a-form-item>
        <a-form-item label="品牌" name="brand_id">
          <RemoteSelect table="base_brand" name_key="name" v-model:value="saveFormData.brand_id"/>
        </a-form-item>

        <a-form-item label=" " :colon="false">
          <div class="justify-start">
            <a-form-item label="排序数字" name="sort_num" :rules="[{ required: true, message: '' }]">
              <a-input v-model:value="saveFormData.sort_num"/>
            </a-form-item>
            <a-form-item label="销量" name="sale_count" :rules="[{ required: true, message: '' }]" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.sale_count"/>
            </a-form-item>
            <a-form-item label="浏览量" name="view_count" :rules="[{ required: true, message: '' }]" style="margin-left: 20px;">
              <a-input v-model:value="saveFormData.view_count"/>
            </a-form-item>
          </div>
        </a-form-item>
        <a-form-item label="所属商家" name="mch_id">
          <RemoteSelect table="mch" name_key="name" v-model:value="saveFormData.mch_id"/>
        </a-form-item>
        <a-form-item label=" " :colon="false">
          <div class="justify-between">
            <a-form-item label="首页推荐" name="is_index">
              <YesOrNo v-model:value="saveFormData.is_index"/>
            </a-form-item>
            <a-form-item label="上架" name="is_listing" >
              <YesOrNo v-model:value="saveFormData.is_listing"/>
            </a-form-item>
            <a-form-item label="积分商品" name="is_integral" >
              <YesOrNo v-model:value="saveFormData.is_integral"/>
            </a-form-item>
          </div>
        </a-form-item>
        <a-form-item label="标签" name="labels" >
          <CheckBox v-model:value="saveFormData.labels" :options="labels" name_key="name" value_key="name"/>
        </a-form-item>
        <a-form-item label="规格">
          <div v-if="saveFormData.spec&&saveFormData.spec.length">
            <div v-for="(item,index) in saveFormData.spec" :key="index" class="flex-row">
              <span class="QQ811565456 hewei-jianshao2" @click="saveFormData.spec.splice(index,1)" style="font-size: 28px;"></span>
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

          <span class="QQ811565456 hewei-jia" @click="saveFormData.spec.push({name:'',values:[]})" style="font-size: 28px;"></span>
        </a-form-item>
        <a-form-item label="详情" name="content" >
          <FullEditor v-model:value="saveFormData.content"/>
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
          <Select placeholder="首页推荐" v-model:value="searchObj.is_index" :constant="constant.yesOrNo()"/>
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
export default {
  name: "list",
  components:{
  },
  data: function () {
    return {
      table: 'shop_goods',
      showAdd: true,
      modalStyle: {'top':'5px'},
      labels: [],
      saveFormData: {
        integral:0,
        spec:[],
        imglist:[],
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
          title: '首页推荐',
          key: 'is_index',
          is_edit: true,
        },{
          title: '积分商品',
          key: 'is_integral',
          is_edit: true,
        },{
          title: '秒杀',
          key: 'is_spike',
          is_edit: true,
        },{
          title: '添加时间',
          key: 'add_time',
        },
      ],
    };
  },
  computed: {
  },
  created() {
    this.getLabel()
  },
  watch: {},
  methods: {
    getLabel() {
      this.post('/admin/crud/list',{table:'base_label',type:2}).then(({code, paginate}) => {
        if (code === 1) {
          this.labels = paginate.data
        }
      })
    },
  }
}
</script>
<style scoped lang="less">
</style>
