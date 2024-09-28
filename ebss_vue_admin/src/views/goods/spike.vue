<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
                <a-form-item label="秒杀名称" name="name" :rules="[{ required: true, message: '' }]">
                    <a-input v-model:value="saveFormData.name"/>
                </a-form-item>
                <a-form-item label="活动描述" name="desc">
                  <a-input v-model:value="saveFormData.desc"/>
                </a-form-item>
                <a-form-item label="时间段" name="time_type" :rules="[{ required: true, message: '' }]">
                  <Select placeholder="时间段" v-model:value="saveFormData.time_type" :constant="constant.spikeTimeType()"/>
                </a-form-item>
                <a-form-item label="开始时间" name="start_at" :rules="[{ required: true, message: '' }]">
                  <DatePicker v-if="saveFormData.time_type==1" v-model:value="saveFormData.start_at"/>
                  <TimePicker v-if="saveFormData.time_type==2" v-model:value="saveFormData.start_at"/>
                </a-form-item>
                <a-form-item label="结束时间" name="end_at" :rules="[{ required: true, message: '' }]">
                  <DatePicker v-if="saveFormData.time_type==1" v-model:value="saveFormData.end_at"/>
                  <TimePicker v-if="saveFormData.time_type==2" v-model:value="saveFormData.end_at"/>
                </a-form-item>
                <a-form-item label="秒杀商品" name="goods_ids" :rules="[{ required: true, message: '' }]">
                  <CheckBox onlyvalue v-model:value="saveFormData.goods_ids" :options="goods" value_key="goods_id" name_key="title"/>
                </a-form-item>
                <a-form-item label="活动图片" name="cover_img" :rules="[{ required: true, message: '' }]">
                  <Upload :maxCount="1" v-model:value="saveFormData.cover_img"/>
                </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
              <a-form-item label="秒杀名称" name="name">
                <a-input v-model:value="searchObj.name"/>
              </a-form-item>
              <a-form-item label="时间段" name="time_type" >
                <Select placeholder="时间段" v-model:value="searchObj.time_type" :constant="constant.spikeTimeType()"/>
              </a-form-item>
            </a-form>
        </template>
    </Crud>
</template>

<script lang="jsx">
import {formatTime,formatHmi} from '@/util/time.js'

export default {
    name: "list",
    data: function () {
        return {
            table: 'shop_spike',
            goods: [],
            saveFormData: {
            },
            searchObj: {},
            columns: [
                {
                    title: '秒杀名称',
                    key: 'name',
                    is_edit: true,
                },{
                    title: '活动描述',
                    key: 'desc',
                    is_edit: true,
                },{
                    title: '活动图片',
                    key: 'cover_img',
                },
                {
                    title: '时间段',
                    key: 'time_type',
                    customRender:(data)=>{
                      return <span>{this.constant.spikeTimeType(data.text)}</span>
                    },
                    sorter: true,
                },
                {
                    title: '开始时间',
                    key: 'start_at',
                    customRender:(data)=>{
                      if(data.record.time_type==1){
                        return <span>{formatTime(data.text)}</span>
                      }
                      if(data.record.time_type==2){
                        return <span>{formatHmi(data.text)}</span>
                      }
                    },
                    sorter: true,
                },{
                    title: '结束时间',
                    key: 'end_at',
                    customRender:(data)=>{
                      if(data.record.time_type==1){
                        return <span>{formatTime(data.text)}</span>
                      }
                      if(data.record.time_type==2){
                        return <span>{formatHmi(data.text)}</span>
                      }
                    },
                    sorter: true,
                },
            ],
        };
    },
    computed: {},
    components: {},
    created() {
      this.get('/admin/crud/list', {table: 'shop_goods', is_spike: 1,is_listing: 1 }).then(({code,paginate}) => {
        if (code === 1) {
          this.goods=paginate.data;
        }
      })
    },
    methods: {}
}
</script>
<style scoped lang="less">
</style>
