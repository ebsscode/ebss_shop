<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="状态" name="status" :rules="[{ required: true, message: '' }]">
                  <Select placeholder="状态" v-model:value="saveFormData.status" :constant="constant.couponStatus()"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
              <a-form-item name="coupon_id">
                <RemoteSelect placeholder="优惠券" table="base_coupon" name_key="name" v-model:value="searchObj.coupon_id"/>
              </a-form-item>
              <a-form-item name="name">
                <a-input placeholder="名称" v-model:value="searchObj.name"/>
              </a-form-item>
              <a-form-item name="user_id">
                <a-input placeholder="用户ID" v-model:value="searchObj.user_id"/>
              </a-form-item>
              <a-form-item name="mch_id">
                <RemoteSelect placeholder="可用商家" table="mch" name_key="name" v-model:value="searchObj.mch_id"/>
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
            table: 'base_coupon_user',
            saveFormData: {
            },
            searchObj: {},
            columns: [
               {
                    title: '商家ID',
                    key: 'mch_id',
                },{
                    title: '使用时间',
                    key: 'use_time',
                },{
                    title: '优惠券ID',
                    key: 'coupon_id',
                },{
                    title: '用户ID',
                    key: 'user_id',
                },{
                    title: '领取时间',
                    key: 'add_time',
                },
                {
                    title: '状态',
                    key: 'status',
                    customRender:(data)=>{
                      return <span>{this.constant.couponStatus(data.text)}</span>
                    }
                }
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
