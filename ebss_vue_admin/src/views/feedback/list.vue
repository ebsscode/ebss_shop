<template>
    <Crud>
        <template #save>
          <a-form-item label="相片" name="name" :rules="[{ required: true, message: '' }]">
            <Upload v-model:value="saveFormData.imgs"/>
          </a-form-item>
        </template>
        <template #search>
            <a-form layout="inline">
              <a-form-item>
                <RemoteSelect table="sys_user" name_key="nickname" v-model:value="searchObj.user_id"/>
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
            table:"base_feedback",
            showAdd:false,
            saveFormData: {},
            searchObj: {},
            columns: [
              {
                title: '用户ID',
                key: 'user_id',
              }, {
                title: '时间',
                key: 'add_time',
              },{
                title: '内容',
                key: 'content',
              },
            ],
        };
    },
}
</script>
<style scoped lang="less">
</style>
