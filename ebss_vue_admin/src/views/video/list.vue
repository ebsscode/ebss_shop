<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
              <a-form-item label="名称" name="name" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.name"/>
              </a-form-item>
              <a-form-item label="封面图片" name="logo_img">
                <Upload :maxCount="1" v-model:value="saveFormData.logo_img"/>
              </a-form-item>
              <a-form-item label="观看次数" name="view_count">
                <a-input v-model:value="saveFormData.view_count"/>
              </a-form-item>
              <a-form-item label="排序数字(越大越靠前)" name="sort_num">
                <a-input v-model:value="saveFormData.sort_num"/>
              </a-form-item>
              <a-form-item label="分类" name="category_id" :rules="[{ required: true, message: '' }]">
                <RemoteSelect table="base_category" name_key="cat_name" v-model:value="saveFormData.category_id"/>
              </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
              <a-form-item>
                <a-input placeholder="名称" v-model:value="searchObj.name"/>
              </a-form-item>
              <a-form-item>
                <RemoteSelect table="base_category" name_key="cat_name" v-model:value="searchObj.category_id"/>
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
            table:"video",
            join_tables:['base_category'],
            saveFormData: {
              sort_num:50
            },
            searchObj: {},
            columns: [
                {
                    title: '剧名',
                    key: 'name',
                },{
                    title: '封面图片',
                    key: 'logo_img',
                },{
                    title: '排序数字',
                    key: 'sort_num',
                },{
                    title: '分类',
                    key: 'category_id',
                    customRender:(data)=>{
                      return <span>{data.record.base_category.cat_name}</span>
                    }
                },{
                    title: '观看次数',
                    key: 'view_count',
                },{
                    title: '添加时间',
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
</style>
