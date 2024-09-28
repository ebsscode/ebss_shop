<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="权限名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
                <a-form-item label="排序" name="sort_num" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.sort_num"/>
                </a-form-item>
                <a-form-item label="权限图标" name="icon">
                  <IconSelect v-model:value="saveFormData.icon"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="权限名称" v-model:value="searchObj.name"/>
                </a-form-item>
            </a-form>
        </template>
    </Crud>
</template>
<script lang="jsx">
export default {
    name: "permission",
    data: function () {
        return {
            table: 'sys_permission',
            saveFormData: {
                sort_num: 50,
            },
            showDelete:()=>false,
            searchObj: {
              is_show:1,
            },
            columns: [
                {
                    title: '权限名称',
                    key: 'name',
                    is_edit: true,
                },{
                    title: '排序',
                    key: 'sort_num',
                },{
                    title: '权限图标',
                    key: 'icon',
                    customRender:(data)=>{
                      return <span class={['QQ811565456',data.record.icon]}></span>;
                    }
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
