<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-form-item label="名称" name="nav_name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.nav_name"/>
                </a-form-item>
                <a-form-item label="排序数字" name="sort_num">
                    <a-input v-model:value="saveFormData.sort_num"/>
                </a-form-item>
                <a-form-item label="跳转链接" name="url" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.url"/>
                </a-form-item>
                <a-form-item label="导航图标" name="src_img" :rules="[{ required: true, message: '导航图标必填！' }]">
                    <Upload :maxCount="1" v-model:value="saveFormData.src_img"/>
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
            table: 'base_nav',
            showQuery: false,
            saveFormData: {
                sort_num: 50,
            },
            searchObj: {},
            columns: [
                {
                    title: '名称',
                    key: 'nav_name',
                    is_edit: true,
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
                },
                {
                    title: '导航图标',
                    key: 'src_img',
                },
            ],
        };
    },
    computed: {
        table_key() {
            return `${this.table}_id`
        },
    },
    components: {},
    created() {
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style scoped lang="less">
</style>
