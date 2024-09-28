<template>
  <div>
    <a-button class="align-center" type="primary" @click="is_open=true;">
      <span :class="[icons.font_family,value]" style="margin-right: 10px;font-size: 20px;"></span>
      <span >选择</span>
    </a-button>
    <a-modal v-model:open="is_open" title="图标选择" width="90%">
      <div>
        <span></span>
        <span></span>
      </div>
      <div class="flex-row flex-wrap">
        <div @click="choose(item)" class="icon-item flex-col" v-for="(item,index) in icons.glyphs" :key="index">
          <span :class="[icons.font_family,`${icons.css_prefix_text}${item.font_class}`]" style="font-size: 23px;"></span>
          <span>{{item.name}}</span>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import icons from '@/assets/icon/iconfont.json'
import {has} from '@/util/type/base.js'
export default {
    name: "IconSelect",
    props: {
        value: {
            type: [String],
            default: '',
        },
    },
    watch: {
        value: {
            handler(newV, oldV) {
            },
            immediate: true
        }
    },
    data: function () {
        return {
          icons,
          is_open: false,
        };
    },
  created() {
      console.log(icons)
  },
  methods: {
        choose(item) {
          let v = `${icons.css_prefix_text}${item.font_class}`
          this.$emit('update:value', v)
          this.$emit('changed', v)
          this.is_open = false;
        },
        change(e) {
            // console.log(e,555)
            this.$emit('update:value', e ? 1 : 0)
            this.$emit('changed', e ? 1 : 0)
        },
    }
}
</script>
<style scoped lang="less">
.icon-item{
  padding: 5px;
  border: 1px solid #909399;
  margin: 10px;
  height: 70px;
  width: 120px;
  text-align: center;
  &:hover{
    background: #27c2f3;
    cursor: pointer;
  }
  .QQ811565456:hover{
    color: #000000 !important;
  }
}
</style>
