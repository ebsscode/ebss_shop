<template>
    <a-select
        :disabled="disabled"
        v-model:value="selected"
        :mode="mode"
        allowClear
        :placeholder="placeholder"
        style="width: 100%;min-width: 120px"
        :filter-option="filterOption"
        :show-search="true"
        :options="list"
        :fieldNames="{ label: name_key, value: value_key,}"
        @change="change"
    >
    </a-select>
</template>
<script>
import {isNull,isUndefined,has} from '@/util/type/base.js'
export default {
    name: 'Select',
    components: {},
    props: {
        constant: {
            type: Object,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: 'combobox',
        },
        placeholder: {
            type: String,
            default: '请选择',
        },
        value: {
            type: [Number, String, Array],
            default: null,
        },
        value_key: {
          type: String,
          default: 'value',
        },
        name_key: {
          type: String,
          default: 'name',
        }
    },
    data: function () {
        return {
            selected: null,
            list: [],
        };
    },
    computed: {},
    watch: {
        value: {
          handler(newV, oldV) {
            if(isNull(newV) || isUndefined(newV)){
              if(this.mode==='multiple'){
                this.$emit('update:value', [])
              }else{
                this.$emit('update:value', null)
              }
              return;
            }
            this.selected = newV
          },
          immediate: true
        },
        constant: {
            handler(newV, oldV) {
                let list = []
                this.range_list = newV.map(i=>{
                  list.push({
                    ...i,
                    label:i[this.name_key],
                    value:i[this.value_key],
                  })
                })
                // console.log(1111, list, newV)
                this.list = list
            },
            immediate: true
        }
    },
    created() {
    },
    methods: {
        change(inputValue, option) {
            // console.log(111, inputValue, option)
            this.$emit('update:value', inputValue)
        },
        filterOption(inputValue, option) {
            // console.log(111, inputValue, option)
            return option[this.name_key].toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        },
    }
}
</script>
<style scoped lang="less">
</style>
