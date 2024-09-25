<template>
    <a-checkbox-group v-model:value="checks" :options="optionsInner" @change="change"/>
</template>

<script>
import {isNull,isUndefined,isArray} from '@/util/type/base.js'
export default {
    name: "CheckBox",
    props: {
        value: {
            type: [String,Array],
            default: null,
        },
        value_key: {
          type: String,
          default: 'value',
        },
        name_key: {
          type: String,
          default: 'name',
        },
        onlyvalue: {
          type: Boolean,
          default: false,
        },
        options: {
          type: Array,
          default: [],
        }
    },
    watch: {
      options: {
          handler(newV, oldV) {
            if(newV){
              try {
                this.optionsInner = newV.map(i=>{
                  i['label']=i[this.name_key]
                  i['value']=i[this.value_key]
                  return i
                })
              }catch (e) {
                this.optionsInner = []
              }
            }else{
              this.optionsInner = []
            }
          },
          deep: true,
          immediate: true,
        },
        value: {
            handler(newV, oldV) {
                if(isNull(newV) || isUndefined(newV)){
                  this.$emit('update:value', '[]')
                }
              let newVArr = []
                if(newV){
                  try {
                    if(isArray(newV)){
                      newVArr = newV
                    }else{
                      newVArr = JSON.parse(newV)
                    }
                    this.checks = newVArr.map(i=>{
                      if(!i[this.value_key]){
                        return i
                      }else{
                        return i[this.value_key]
                      }
                    })
                  }catch (e) {
                    console.error('CheckBox',e)
                    this.checks = []
                  }
                }else{
                  this.checks = []
                }
            },
            immediate: true
        }
    },
    data: function () {
        return {
            checks: [],
            optionsInner: [],
        };
    },
    methods: {
        change(e) {
            // console.log(444,e)
            let data=[]
            if(this.onlyvalue){
              data = e
            }else{
              data = this.options.filter(i=>e.includes(i[this.value_key]))
            }
            this.$emit('update:value', JSON.stringify(data))
        },
    }
}
</script>

<style scoped lang="less">

</style>
