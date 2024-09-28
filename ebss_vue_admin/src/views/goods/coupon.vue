<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
                <a-form-item label="使用说明" name="desc">
                  <a-input v-model:value="saveFormData.desc"/>
                </a-form-item>
                <a-form-item label="开始时间" name="start_time" :rules="[{ required: true, message: '' }]">
                  <DatePicker v-model:value="saveFormData.start_time"/>
                </a-form-item>
                <a-form-item label="过期时间" name="expire_time" :rules="[{ required: true, message: '' }]">
                  <DatePicker v-model:value="saveFormData.expire_time"/>
                </a-form-item>
                <a-form-item label="类型" name="type" :rules="[{ required: true, message: '' }]">
                  <Select placeholder="类型" v-model:value="saveFormData.type" :constant="constant.couponType()"/>
                </a-form-item>
                <a-form-item label="可用商家" name="mch_id">
                  <RemoteSelect table="mch" name_key="name" v-model:value="saveFormData.mch_id"/>
                </a-form-item>
                <a-form-item label="优惠券面值" name="amount" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.amount"/>
                </a-form-item>
                <a-form-item label="使用金额限制" name="full_amount" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.full_amount"/>
                </a-form-item>
                <a-form-item label="总数量" name="total" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.total"/>
                </a-form-item>
                <a-form-item label="每人可领数量" name="person_total" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.person_total"/>
                </a-form-item>
                <a-form-item label="可叠加" name="is_superimposed" :rules="[{ required: true, message: '' }]">
                  <YesOrNo v-model:value="saveFormData.is_superimposed"/>
                </a-form-item>
                <a-form-item label="可用商品" name="goods_ids" :rules="[{ required: true, message: '' }]">
                  <CheckBox onlyvalue v-model:value="saveFormData.goods_ids" :options="goods" value_key="goods_id" name_key="title"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
              <a-form-item name="name">
                <a-input placeholder="名称" v-model:value="searchObj.name"/>
              </a-form-item>
              <a-form-item name="type">
                <Select placeholder="类型" v-model:value="searchObj.type" :constant="constant.couponType()"/>
              </a-form-item>
              <a-form-item name="mch_id">
                <RemoteSelect placeholder="可用商家" table="mch" name_key="name" v-model:value="searchObj.mch_id"/>
              </a-form-item>
            </a-form>
        </template>
    </Crud>
</template>
<script lang="jsx">
export default {
    name: "list",
    data: function () {
        return {
            table: 'base_coupon',
            goods: [],
            saveFormData: {
            },
            searchObj: {},
            columns: [
                {
                    title: '名称',
                    key: 'name',
                    is_edit: true,
                },{
                    title: '总数量',
                    key: 'total',
                    is_edit: true,
                    sorter: true,
                },{
                    title: '已领数量',
                    key: 'receive_total',
                    sorter: true,
                },{
                    title: '每人可领数量',
                    key: 'person_total',
                    is_edit: true,
                },{
                    title: '可叠加',
                    key: 'is_superimposed',
                    is_edit: true,
                },{
                    title: '可用时间',
                    key: 'start_time',
                    sorter: true,
                },{
                    title: '过期时间',
                    key: 'expire_time',
                    sorter: true,
                },
                {
                    title: '类型',
                    key: 'type',
                    customRender:(data)=>{
                      return <span>{this.constant.couponType(data.text)}</span>
                    }
                }
            ],
        };
    },
    computed: {},
    components: {},
    created() {
      this.get('/admin/crud/list', {table: 'shop_goods', is_spike: 1,is_listing: 1 }).then(({code,paginate}) => {
        if (code === 1) {
          this.goods=paginate.data;
        }
      })
    },
    methods: {}
}
</script>
<style scoped lang="less">
</style>
