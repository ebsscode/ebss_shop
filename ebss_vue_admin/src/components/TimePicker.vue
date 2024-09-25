<template>
    <!--  X表示将value format 为10位时间戳  format:显示的格式，value-format：v-model:value的格式-->
    <a-time-picker v-model:value="datetime" placeholder="选择时间" :format="format" @change="change" value-format="X" />
</template>
<script>
import dayjs from "dayjs";
import {getTodayStartTime} from '@/util/time.js'
export default {
    name: "TimePicker",
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        format: {
            type: String,
            default: 'HH:mm:ss',
        }
    },
    watch: {
        value: {
            handler(newV, oldV) {
                let seconds = newV?parseInt(newV):0
                this.datetime = dayjs.unix(seconds+getTodayStartTime())
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
            let format = dayjs.unix(e)
            this.$emit('update:value', format.hour()*60*60+format.minute()*60+format.second())
        },
    }
}
</script>
<style scoped lang="less">
</style>
