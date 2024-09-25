<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="标签名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
                <a-form-item label="可用位置" name="type" :rules="[{ required: true, message: '' }]">
                  <Select placeholder="标签可以用在哪些地方" v-model:value="saveFormData.type" :constant="labelType()" />
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                    <a-input placeholder="标签名称" v-model:value="searchObj.name"/>
                </a-form-item>
              <a-form-item>
                <Select placeholder="可用位置" v-model:value="searchObj.type" :constant="labelType()"/>
              </a-form-item>
            </a-form>
        </template>
    </Crud>
</template>
<script lang="jsx">
import {labelType} from '@/util/type/label.js'
export default {
    name: "list",
    data: function () {
        return {
            labelType,
            table: 'base_label',
            saveFormData: {
                sort_num: 50,
            },
            searchObj: {},
            columns: [
                {
                    title: '标签名称',
                    key: 'name',
                    is_edit: true,
                },
                {
                  title: '可用位置',
                  key: 'type',
                  customRender:(data)=>{
                    return <span>{labelType(data.text)}</span>
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
