<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
                <a-form-item label="描述" name="desc" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.desc"/>
                </a-form-item>
                <a-form-item label="升级金额" name="amount">
                    <a-input v-model:value="saveFormData.amount"/>
                </a-form-item>
                <a-form-item label="等级图标" name="grade_img" :rules="[{ required: true, message: '等级图标必填！' }]">
                    <Upload :maxCount="1" v-model:value="saveFormData.grade_img"/>
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
            table: 'base_user_grade',
            showQuery: false,
            saveFormData: {
            },
            searchObj: {},
            columns: [
                {
                    title: '名称',
                    key: 'name',
                    is_edit: true,
                },
                {
                    title: '升级金额',
                    key: 'amount',
                    is_edit: true,
                },
                {
                    title: '等级图标',
                    key: 'grade_img',
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
