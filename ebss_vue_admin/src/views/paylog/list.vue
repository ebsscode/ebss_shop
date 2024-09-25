<template>
    <Crud>
        <template #search>
            <a-form layout="inline" >
                <a-form-item name="status">
                    <a-input placeholder="用户ID" v-model:value="searchObj.user_id"/>
                </a-form-item>
                <a-form-item label="是否支付" name="is_pay">
                    <YesOrNo v-model:value="searchObj.is_pay"/>
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
            table: 'log_pay',
            showAdd: false,
            showEdit: ()=>false,
            saveFormData: {},
            searchObj: {
                is_pay: 1,
            },
            columns: [
                {
                    title: '用户ID',
                    key: 'user_id',
                }, {
                    title: '金额',
                    key: 'money',
                }, {
                    title: '类型',
                    key: 'type',
                    customRender:(data)=>{
                      return <div>
                        <span>{this.constant.payType(data.text)}</span>
                      </div>;
                    }
                }, {
                    title: '支付时间',
                    key: 'pay_time',
                }, {
                    title: '是否支付',
                    key: 'is_pay',
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
    methods: {}
}
</script>
<style scoped lang="scss">
</style>
