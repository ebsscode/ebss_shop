<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="角色名称" name="role_name" :rules="[{ required: true, message: '' }]">
                    <a-input :disabled="saveFormData.role_name&&saveFormData.role_name==='超级管理员'" v-model:value="saveFormData.role_name"/>
                </a-form-item>
                <a-form-item v-if="saveFormData.role_name!=='超级管理员'" label="权限" name="permission_ids" :rules="[{ required: true, message: '' }]">
                    <a-tree-select v-model:value="saveFormData.permission_ids"  style="width: 100%" :tree-data="treeData" :treeDataSimpleMode="true" :treeCheckStrictly="true" tree-checkable  allow-clear placeholder="请选择" :treeDefaultExpandAll="true" />
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="角色名称" v-model:value="searchObj.role_name"/>
                </a-form-item>
            </a-form>
        </template>
    </Crud>
</template>
<script lang="jsx">
import {TreeSelect} from 'ant-design-vue';
export default {
    name: "list",
    data: function () {
        return {
            TreeSelect,
            table: 'sys_role',
            showDelete:(e)=>1!==e[this.table_key],
            saveFormData: {
                permission_ids: []
            },
            searchObj: {},
            treeData: [],
            columns: [
                {
                    title: '角色名称',
                    key: 'role_name',
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
    async created() {
        await this.getPermissions();
    },
    methods: {
      saveFunc(record) {
            // console.log(record)
            this.post('/admin/crud/save', {
                table: this.table, ...record,
                permission_ids: JSON.stringify(record.permission_ids.map(i => i.value))
            }).then(({code}) => {
                if (code === 1) {
                    this.success('保存成功！');
                }
            })
        },
        async getPermissions() {
            const {paginate, code} = await this.get('/admin/crud/list', {table: 'sys_permission'})
            if (code === 1) {
                let permissions = paginate.data.filter(i => i.is_show)
                this.treeData = permissions.map(i => {
                    return {
                        id: i.permission_id,
                        pId: i.pid,
                        value: i.permission_id,
                        label: i.name
                    }
                })
                // console.log(111, this.treeData)
            }
        },
    }
}
</script>
<style scoped lang="less">
</style>
