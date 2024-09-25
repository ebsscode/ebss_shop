<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="品牌名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
                <a-form-item label="品牌LOGO" name="logo_img">
                  <Upload :maxCount="1" v-model:value="saveFormData.logo_img"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="品牌名称" v-model:value="searchObj.name"/>
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
            table: 'base_brand',
            saveFormData: {
                sort_num: 50,
            },
            searchObj: {},
            columns: [
                {
                    title: '品牌名称',
                    key: 'name',
                    is_edit: true,
                },{
                    title: '品牌LOGO',
                    key: 'logo_img',
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
