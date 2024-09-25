<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="分类名称" name="cat_name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.cat_name"/>
                </a-form-item>
                <a-form-item label="父级分类" name="pid">
                    <RemoteSelect :where="[saveFormData.category_id?['category_id','<>',saveFormData.category_id]:[]]" table="base_category" name_key="cat_name" v-model:value="saveFormData.pid"/>
                </a-form-item>
                <a-form-item label="分类图标" name="cat_img" :rules="[{ required: true, message: '' }]">
                    <Upload :maxCount="1" v-model:value="saveFormData.cat_img"/>
                </a-form-item>
                <a-form-item label="排序数字" name="sort_num" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.sort_num"/>
                </a-form-item>
                <a-form-item label="跳转链接" name="url">
                    <a-input v-model:value="saveFormData.url"/>
                </a-form-item>
                <a-form-item label="是否显示" name="is_show">
                    <YesOrNo v-model:value="saveFormData.is_show"/>
                </a-form-item>
                <a-form-item label="首页显示" name="is_index">
                  <YesOrNo v-model:value="saveFormData.is_index"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="分类名称" v-model:value="searchObj.cat_name"/>
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
            table: 'base_category',
            saveFormData: {
                sort_num: 50,
            },
            searchObj: {},
            columns: [
                {
                    title: '上级ID',
                    key: 'pid',
                },
                {
                    title: '分类名称',
                    key: 'cat_name',
                    is_edit: true,
                },
                {
                    title: '图标',
                    key: 'cat_img',
                },
                {
                    title: '排序数字',
                    key: 'sort_num',
                    is_edit: true,
                },
                {
                    title: '跳转链接',
                    key: 'url',
                    is_edit: true,
                }, {
                    title: '是否显示',
                    key: 'is_show',
                    is_edit: true,
                },{
                    title: '首页显示',
                    key: 'is_index',
                    is_edit: true,
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
