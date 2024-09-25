<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="团队名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="团队名称" v-model:value="searchObj.name"/>
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
            table: 'base_team',
            saveFormData: {
                sort_num: 50,
            },
            searchObj: {},
            columns: [
                {
                    title: '团队名称',
                    key: 'name',
                    is_edit: true,
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
