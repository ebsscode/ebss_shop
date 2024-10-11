<template>
    <div class="flex-row" style="flex-wrap: wrap;">
        <div v-for="(item,index) in files" :key="index" style="position: relative;width: fit-content;margin: 0 5px 5px 0;">
            <a-image
                :width="104"
                :src="staticURL()+'/'+item"
                :fallback="constant.imgLoad"
            />
          <span @click="remove(index)" class="QQ811565456 hewei-cuowu delete" style="color: #000000;border-radius: 100%;font-size: 24px;position: absolute;top: -12px;right: -6px"/>
        </div>
        <a-upload
            v-if="files.length<maxCount"
            :showUploadList="false"
            list-type="picture-card"
            :action="baseURL()+'/api/file/upload'"
            @change="change"
        >
            <div>
                <span class="QQ811565456 hewei-folder-add" style="font-size: 30px;"/>
                <div style="margin-top: 8px">上传</div>
            </div>
        </a-upload>
    </div>
</template>
<script>
import {isNull,isUndefined} from '@/util/type/base.js'
export default {
    name: 'Upload',
    props: {
        value: {
            type: [Array,String,Object],
            default: [],
        },
        maxCount: {
            type: Number,
            default: Infinity,
        }
    },
    computed: {},
    data: function () {
        return {
            files: [],
        };
    },
    watch: {
        value: {
            handler(newV, oldV) {
                if(isNull(newV) || isUndefined(newV)){
                  if(this.maxCount==1){
                    this.$emit('update:value', '')
                  }else{
                    this.$emit('update:value', [])
                  }
                }
                if(newV){
                  if(this.maxCount==1){
                    this.files=[newV]
                  }
                  if(this.maxCount>1){
                    this.files=newV
                  }
                }else{
                  this.files=[]
                }
              this.emitValue();
            },
            immediate: true
        },
    },
    created() {
    },
    methods: {
        emitValue(){
          if(this.maxCount==1){
            if(this.files.length){
              this.$emit('update:value',this.files[0])
            }else{
              this.$emit('update:value','')
            }
          }
          if(this.maxCount>1){
            if(this.files.length){
              this.$emit('update:value',this.files)
            }else{
              this.$emit('update:value',[])
            }
          }
        },
        change(file, fileList, event) {
            // console.log(222, file, fileList, event)
            if (file.file.status === 'done') {
                if(file.file.response.code==1){
                    this.files.push(file.file.response.savename)
                    this.emitValue()
                }else{
                    this.error(file.file.response.msg||'上传错误')
                }
            }
        },
        remove(index) {
            this.files = this.files.filter((i, k) => k !== index)
            this.emitValue()
        },
    }
}
</script>
<style scoped lang="less">
.delete:hover {
  color: #CD2626 !important;
}
</style>
