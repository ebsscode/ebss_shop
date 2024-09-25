<template>
    <a-switch v-model:checked="is_on" :disabled="disabled" @change="change"/>
</template>
<script>
import {isNull,isUndefined} from '@/util/type/base.js'
export default {
    name: "YesOrNo",
    props: {
        value: {
            type: [Number,String],
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        value: {
            handler(newV, oldV) {
              // console.log(2222, newV)
              if(isNull(newV) || isUndefined(newV)){
                  this.$emit('update:value', 0)
              }
              this.is_on = newV == 1
            },
            immediate: true
        }
    },
    data: function () {
        return {
            is_on: false,
        };
    },
    methods: {
        change(e) {
            // console.log(e,555)
            this.$emit('update:value', e ? 1 : 0)
            this.$emit('changed', e ? 1 : 0)
        },
    }
}
</script>
<style scoped lang="less">
</style>
