<template>
    <Crud>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="用户ID" v-model:value="searchObj.user_id"/>
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
            showAdd: false,
            showEdit: ()=>false,
            table: 'log_money',
            saveFormData: {},
            searchObj: {},
            columns: [
                {
                    title: '用户ID',
                    key: 'user_id',
                    sorter: true,
                }, {
                    title: '变动时间',
                    key: 'add_time',
                }, {
                    title: '类型',
                    key: 'up_or_down',
                    customRender:(data)=>{
                      return <span>{this.constant.upOrDown(data.text)}</span>
                    }
                }, {
                    title: '之前',
                    key: 'before_num',
                }, {
                    title: '变动额',
                    key: 'change_num',
                }, {
                    title: '之后',
                    key: 'after_num',
                }, {
                    title: '描述',
                    key: 'title',
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
