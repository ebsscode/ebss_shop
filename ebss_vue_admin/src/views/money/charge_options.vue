<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
              <a-form-item label="金额" name="amount" :rules="[{ required: true, message: '' }]">
                  <a-input v-model:value="saveFormData.amount"/>
              </a-form-item>
              <a-form-item label="赠送金额" name="amount_give" :rules="[{ required: true, message: '' }]">
                <a-input v-model:value="saveFormData.amount_give"/>
              </a-form-item>
              <a-form-item label="虚拟币" name="v_money" :rules="[{ required: true, message: '' }]">
                <a-input v-model:value="saveFormData.v_money"/>
              </a-form-item>
              <a-form-item label="赠送虚拟币" name="v_money_give" :rules="[{ required: true, message: '' }]">
                <a-input v-model:value="saveFormData.v_money_give"/>
              </a-form-item>
            </a-form>
        </template>
        <template #search>
        </template>
    </Crud>
</template>
<script lang="jsx">
export default {
    name: "list",
    data: function () {
        return {
            table: 'base_charge_option',
            saveFormData: {},
            searchObj: {},
            columns: [
                {
                    title: '金额',
                    key: 'amount',
                }, {
                    title: '赠送金额',
                    key: 'amount_give',
                }, {
                    title: '虚拟币',
                    key: 'v_money',
                }, {
                    title: '赠送虚拟币',
                    key: 'v_money_give',
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
