<template>
    <Crud>
        <template #save>
            <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" >
              <a-form-item label="视频名称" name="video_id" :rules="[{ required: true, message: '' }]">
                <RemoteSelect table="video" name_key="name" v-model:value="saveFormData.video_id"/>
              </a-form-item>
              <a-form-item label="集数" name="sort_num" :rules="[{ required: true, message: '' }]">
                <a-input v-model:value="saveFormData.sort_num"/>
              </a-form-item>
              <a-form-item label="观看次数" name="view_count">
                <a-input v-model:value="saveFormData.view_count"/>
              </a-form-item>
              <a-form-item label="视频" name="video_url" :rules="[{ required: true, message: '' }]">
                <a class="ant-btn" target="_blank" :href="baseURL()+'/'+saveFormData.video_url" v-if="saveFormData.video_url" style="margin-bottom: 10px">打开</a>
                <div v-if="percent>0&&percent<100">上传进度:{{percent}}%</div>
                <a-upload
                    :showUploadList="false"
                    list-type="picture-card"
                    :action="baseURL()+'/index/index/upload'"
                    @change="change" >
                  <div>
                    <span class="QQ811565456 hewei-zengjia"></span>
                    <div style="margin-top: 8px">上传</div>
                  </div>
                </a-upload>
              </a-form-item>
            </a-form>
        </template>
        <template #search>
            <a-form layout="inline" >
                <a-form-item>
                  <RemoteSelect table="video" name_key="name" v-model:value="searchObj.video_id"/>
                </a-form-item>
            </a-form>
        </template>
    </Crud>
</template>
<script lang="jsx">
import {defineAsyncComponent} from "vue";
export default {
    name: "list",
    data: function () {
        return {
            table:"video_collection",
            join_tables:['video'],
            percent:0,
            saveFormData: {},
            searchObj: {},
            columns: [
                {
                    title: '剧名',
                    key: 'video_id',
                    customRender:(data)=>{
                      return <span>{data.record.video.name}</span>
                    }
                },{
                    title: '集数',
                    key: 'sort_num',
                },{
                  title: '观看次数',
                  key: 'view_count',
                },{
                    title: '添加时间',
                    key: 'add_time',
                },{
                    title: '视频地址',
                    key: 'video_url',
                },
            ],
        };
    },
    components: {
      PlusOutlined: defineAsyncComponent(() => import('@ant-design/icons-vue/PlusOutlined')),
    },
    created() {
    },
    methods: {
      change(file, fileList, event) {
        // console.log(222, file, fileList, event)
        this.percent = file.file.percent.toFixed(2)
        if (file.file.status === 'done') {
          this.saveFormData.video_url=file.file.response.savename
        }
      },
    }
}
</script>
<style scoped lang="less">
</style>
