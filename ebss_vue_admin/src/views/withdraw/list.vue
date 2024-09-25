<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="状态" name="status" :rules="[{ required: true, message: '' }]">
                    <Select :disabled="saveFormData.status!==1" v-model:value="saveFormData.status" :constant="constant.withdrawStatus()"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item name="status">
                    <Select placeholder="提现状态" v-model:value="searchObj.status" :constant="constant.withdrawStatus()"/>
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
            table: 'base_withdraw',
            editTexT:"审核",
            saveFormData: {},
            searchObj: {},
            showAdd: false,
            columns: [
                {
                    title: '用户ID',
                    key: 'user_id',
                }, {
                    title: '金额',
                    key: 'money',
                }, {
                    title: '状态',
                    key: 'status',
                    customRender:(data)=>{
                      return <span>{this.constant.withdrawStatus(data.text)}</span>
                    }
                }, {
                    title: '账户',
                    key: 'account',
                }, {
                    title: '描述',
                    key: 'title',
                }, {
                    title: '备注',
                    key: 'remark',
                    is_edit: true,
                }, {
                    title: '时间',
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
    methods: {}
}
</script>
<style scoped lang="less">
</style>
