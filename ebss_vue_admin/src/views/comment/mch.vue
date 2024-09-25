<template>
    <Crud>
        <template #save>
          <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
            <a-form-item label="相片" name="imgs" :rules="[{ required: true, message: '' }]">
              <Upload v-model:value="saveFormData.imgs"/>
            </a-form-item>
          </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
              <a-form-item>
                <RemoteSelect placeholder="评论人" table="sys_user" name_key="nickname" v-model:value="searchObj.user_id"/>
              </a-form-item>
              <a-form-item>
                <RemoteSelect placeholder="商家" table="mch" name_key="name" v-model:value="searchObj.mch_id"/>
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
            table: 'mch_comment',
            saveFormData: {},
            searchObj: {},
            columns: [
                {
                    title: '评价内容',
                    key: 'content',
                    is_edit: true,
                },{
                    title: '评分',
                    key: 'rate',
                },{
                    title: '时间',
                    key: 'add_time',
                },{
                  title: '用户ID',
                  key: 'user_id',
                },{
                  title: '商家ID',
                  key: 'mch_id',
                },
            ],
        };
    },
    components: {},
    created() {
    },
    methods: {
        save() {
            return true
        },
    }
}
</script>
<style scoped lang="less">
</style>
