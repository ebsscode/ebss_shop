<template>
    <a-date-picker v-model:value="datetime" placeholder="选择日期" :format="format" @change="change" value-format="X"/>
    <!--  X表示将value format 为10位时间戳  format:显示的格式，value-format：v-model:value的格式-->
</template>

<script>
import dayjs from "dayjs";
import {getTime10} from '@/util/time.js'
export default {
    name: "DatePicker",
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        format: {
            type: String,
            default: 'YYYY-MM-DD HH:mm:ss',
        }
    },
    watch: {
        value: {
            handler(newV, oldV) {
                // console.log(2222, newV)
                if(newV){
                  this.datetime = dayjs.unix(newV)
                }else{
                  this.datetime = dayjs.unix(getTime10())
                  this.$emit('update:value', getTime10())
                }
            },
            immediate: true
        }
    },
    data: function () {
        return {
            datetime: null,
        };
    },
    methods: {
        change(e) {
            // console.log(666, e)
            this.$emit('update:value', e)
        },
    }
}
</script>

<style scoped lang="less">

</style>
