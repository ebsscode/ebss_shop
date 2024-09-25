<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="图片" name="src_img" :rules="[{ required: true,message: '' }]">
                    <Upload :maxCount="1" v-model:value="saveFormData.src_img"/>
                </a-form-item>
                <a-form-item label="排序数字" name="sort_num" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.sort_num"/>
                </a-form-item>
                <a-form-item label="跳转链接" name="url">
                    <a-input v-model:value="saveFormData.url"/>
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
            table: 'base_banner',
            showQuery: false,
            saveFormData: {
                src_img: '',
                sort_num: 50,
            },
            searchObj: {},
            columns: [
                {
                    title: '图片',
                    key: 'src_img',
                }, {
                    title: '跳转链接',
                    key: 'url',
                    is_edit: true,
                }, {
                    title: '排序数字',
                    key: 'sort_num',
                    is_edit: true,
                },
            ],
        };
    }
}
</script>
<style scoped lang="less">
</style>
