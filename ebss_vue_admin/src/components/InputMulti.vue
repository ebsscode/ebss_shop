<template>
  <div>
    <a-input v-model:value="value" placeholder="Basic usage" />
  </div>
</template>
<script>
import {isNull,isUndefined} from '@/util/type/base.js'
export default {
    name: "InputMulti",
    props: {
        value: {
            type: String,
            default: '[]',
        },
        value_key: {
          type: String,
          default: 'value',
        },
        name_key: {
          type: String,
          default: 'name',
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
                this.optionsInner = newV.map(i=>i[this.name_key])
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

                if(newV){
                  try {
                    let newVArr = JSON.parse(newV)
                    this.checks = newVArr.map(i=>i[this.name_key])
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
            let data = this.options.filter(i=>e.includes(i[this.name_key]))
            this.$emit('update:value', JSON.stringify(data))
        },
    }
}
</script>
<style scoped lang="less">
</style>
