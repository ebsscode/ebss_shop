<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="团购名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
                <a-form-item label="活动描述" name="desc">
                  <a-input v-model:value="saveFormData.desc"/>
                </a-form-item>
                <a-form-item label="开始时间" name="start_time" :rules="[{ required: true, message: '' }]">
                  <DatePicker v-model:value="saveFormData.start_time"/>
                </a-form-item>
                <a-form-item label="结束时间" name="end_time" :rules="[{ required: true, message: '' }]">
                  <DatePicker v-model:value="saveFormData.end_time"/>
                </a-form-item>
                <a-form-item label="成团人数" name="people_total" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.people_total"/>
                </a-form-item>
                <a-form-item label="团购商品" name="goods_id" :rules="[{ required: true, message: '' }]">
                  <RemoteSelect table="shop_goods" name_key="title" :where="[['is_listing','=',1],]" v-model:value="saveFormData.goods_id"/>
                </a-form-item>
                <a-form-item label="活动图片" name="cover_img" :rules="[{ required: true, message: '' }]">
                  <Upload :maxCount="1" v-model:value="saveFormData.cover_img"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
              <a-form-item label="团购名称" name="name">
                <a-input v-model:value="searchObj.name"/>
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
            table: 'shop_groupbuy',
            saveFormData: {
            },
            searchObj: {},
            join_tables: ['shop_goods'],
            columns: [
                {
                    title: '团购名称',
                    key: 'name',
                    is_edit: true,
                },{
                    title: '活动描述',
                    key: 'desc',
                    is_edit: true,
                },{
                    title: '团购商品',
                    key: 'goods_id',
                    customRender:(data)=>{
                      return <span>{data.record.shop_goods.title}</span>
                    },
                    sorter: true,
                },{
                    title: '活动图片',
                    key: 'cover_img',
                },
                {
                    title: '开始时间',
                    key: 'start_time',
                },{
                    title: '结束时间',
                    key: 'end_time',
                },
            ],
        };
    },
    computed: {},
    components: {},
    created() {
    },
    methods: {}
}
</script>
<style scoped lang="less">
</style>
