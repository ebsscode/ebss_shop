<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="用户名" name="username">
                    <a-input v-model:value="saveFormData.username"/>
                </a-form-item>
                <a-form-item label="昵称" name="nickname" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.nickname"/>
                </a-form-item>
                <a-form-item label="手机号" name="tel">
                    <a-input v-model:value="saveFormData.tel"/>
                </a-form-item>
                <a-form-item label="地址" name="address">
                    <a-input v-model:value="saveFormData.address"/>
                </a-form-item>
                <a-form-item label="余额" name="money">
                    <a-input v-model:value="saveFormData.money"/>
                </a-form-item>
                <a-form-item label="上级ID" name="share_id">
                    <a-input v-model:value="saveFormData.share_id"/>
                </a-form-item>
                <a-form-item label="头像" name="avatar_img">
                    <Upload :maxCount="1" v-model:value="saveFormData.avatar_img"/>
                </a-form-item>
                <a-form-item label="角色" name="role_id">
                  <RemoteSelect table="sys_role" name_key="role_name" v-model:value="saveFormData.role_id"/>
                </a-form-item>
                <a-form-item label="用户标签" name="label_id">
                  <RemoteSelect :where="[['type','=',1],]" table="base_label" name_key="name" v-model:value="saveFormData.label_id"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline">
                <a-form-item>
                    <a-input placeholder="用户ID" v-model:value="searchObj.user_id"/>
                </a-form-item>
                <a-form-item>
                    <a-input placeholder="手机号" v-model:value="searchObj.tel"/>
                </a-form-item>
                <a-form-item>
                    <a-input placeholder="用户名" v-model:value="searchObj.username"/>
                </a-form-item>
                <a-form-item>
                  <RemoteSelect placeholder="角色" table="sys_role" name_key="role_name" v-model:value="searchObj.role_id"/>
                </a-form-item>
                <a-form-item>
                  <RemoteSelect placeholder="用户标签" :where="[['type','=',1],]" table="base_label" name_key="name" v-model:value="searchObj.label_id"/>
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
            showAdd:false,
            showDelete:()=>false,
            table: 'sys_user',
            saveFormData: {},
            searchObj: {},
            columns: [
                {
                    title: '用户名',
                    key: 'username',
                }, {
                    title: '手机号',
                    key: 'tel',
                }, {
                    title: '头像',
                    key: 'avatar_img',
                }, {
                    title: '地址',
                    key: 'address',
                },
            ],
        };
    },
    computed: {
    },
    components: {},
    created() {
    },
    methods: {}
}
</script>
<style scoped lang="less">
</style>
