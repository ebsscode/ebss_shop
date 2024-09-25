<template>
    <Crud>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="管理员ID" v-model:value="searchObj.admin_user_id"/>
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
            table: 'log_user',
            showAdd:false,
            showEdit:()=>false,
            saveFormData: {},
            searchObj: {},
            columns: [
                {
                    title: '用户ID',
                    key: 'user_id',
                }, {
                    title: '名称',
                    key: 'name',
                }, {
                    title: 'URL',
                    key: 'url',
                }, {
                    title: 'IP',
                    key: 'ip',
                }, {
                    title: '时间',
                    key: 'add_time',
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
