<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="商户名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
                <a-form-item label="商户简介" name="title" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.title"/>
                </a-form-item>
                <a-form-item label="手机" name="tel">
                    <a-input v-model:value="saveFormData.tel"/>
                </a-form-item>
                <a-form-item label="状态" name="status" :rules="[{ required: true, message: '' }]">
                    <Select placeholder="状态" v-model:value="saveFormData.status" :constant="constant.mchStatus()"/>
                </a-form-item>
                <a-form-item label="LOGO" name="logo_img" :rules="[{ required: true, message: '' }]">
                    <Upload :maxCount="1" v-model:value="saveFormData.logo_img"/>
                </a-form-item>
                <a-form-item label="地址" name="address" :rules="[{ required: true, message: '' }]">
                    <MapSelect v-model:value="saveFormData"/>
                </a-form-item>
                <a-form-item label="归属用户" name="user_id">
                  <RemoteSelect table="sys_user" name_key="username" v-model:value="saveFormData.user_id"/>
                </a-form-item>

            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="名称" v-model:value="searchObj.name"/>
                </a-form-item>
                <a-form-item>
                    <a-input placeholder="手机号" v-model:value="searchObj.tel"/>
                </a-form-item>
                <a-form-item>
                    <Select placeholder="状态" v-model:value="searchObj.status" :constant="constant.mchStatus()"/>
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
            table: 'mch',
            saveFormData: {
              user_id:0
            },
            searchObj: {},
            columns: [
                {
                    title: '商户名称',
                    key: 'name',
                    is_edit: true,
                },
                {
                  title: '用户名',
                  key: 'username',
                },
                {
                  title: '手机',
                  key: 'tel',
                },
                {
                    title: '状态',
                    key: 'status',
                    customRender:(data)=>{
                      return <span>{this.constant.mchStatus(data.text)}</span>
                    }
                },
                {
                    title: 'LOGO',
                    key: 'logo_img',
                }, {
                    title: '添加时间',
                    key: 'add_time',
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
    watch: {},
    methods: {}
}
</script>
<style scoped lang="less">
</style>
