<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="分类名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline">
                <a-form-item>
                    <a-input placeholder="分类名称" v-model:value="searchObj.name"/>
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
          table: 'base_article_category',
          saveFormData: {},
          searchObj: {},
          columns: [
              {
                  title: '分类名称',
                  key: 'name',
                  is_edit: true,
              },
          ],
        };
    },
    components: {},
    created() {
    },
    methods: {
    }
}
</script>
<style scoped lang="less">
</style>
