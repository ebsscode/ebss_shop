<template>
    <div style="padding: 0 20px;">
      <a-form ref="save_form" :model="saveFormData" :label-col="{ span: 2 }" :wrapper-col="{ span: 10 }" >
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="基本设置">
            <a-form-item label="系统名称" name="name" :rules="[{ required: true, message: '' }]">
              <a-input v-model:value="saveFormData.name"/>
            </a-form-item>
            <a-form-item label="软件版本" name="version" :rules="[{ required: true, message: '' }]">
              <a-input v-model:value="saveFormData.version"/>
            </a-form-item>
            <a-form-item label="客服电话" name="tel" :rules="[{ required: true, message: '' }]">
              <a-input v-model:value="saveFormData.tel"/>
            </a-form-item>
            <a-form-item label="LOGO" name="logo_img" :rules="[{ required: true, message: '' }]">
              <Upload :maxCount="1" v-model:value="saveFormData.logo_img"/>
            </a-form-item>
            <a-form-item label="开启审核" name="is_review" >
              <YesOrNo v-model:value="saveFormData.is_review"/>
            </a-form-item>
          </a-tab-pane>
          <a-tab-pane key="2" tab="数据管理" force-render>
            <a-popconfirm title="清除数据后不可恢复！！！" ok-text="确定" cancel-text="取消" @confirm="clear_data('order')" >
              <a-button type="danger" style="margin-right: 10px;">清除订单数据</a-button>
            </a-popconfirm>
            <a-popconfirm title="清除数据后不可恢复！！！" ok-text="确定" cancel-text="取消" @confirm="clear_data('goods')" >
              <a-button type="danger" style="margin-right: 10px;">清除商品数据</a-button>
            </a-popconfirm>
            <a-popconfirm
                title="清除数据后不可恢复！！！"
                ok-text="确定"
                cancel-text="取消" @confirm="clear_data('all')" >
              <a-button type="danger" style="margin-right: 10px;">清除所有数据</a-button>
            </a-popconfirm>
          </a-tab-pane>
          <a-tab-pane key="3" tab="PC商城" force-render>
            <a-form-item label="首页顶部图片" name="header_img">
              <Upload :maxCount="1" v-model:value="saveFormData.header_img"/>
            </a-form-item>
          </a-tab-pane>

        </a-tabs>
        <a-form-item style="margin-top: 10px;">
            <div class="justify-center">
                <a-button type="primary" html-type="submit" @click="submit">提交</a-button>
            </div>
        </a-form-item>
      </a-form>
    </div>
</template>
<script lang="jsx">
export default {
    name: "config",
    data() {
        return {
          activeKey: '1',
          saveFormData: {}
        }
    },
    created() {
        this.getConfigs()
    },
    methods: {
        getConfigs() {
            this.get('/admin/config/list').then(({code, configs}) => {
                if (code === 1) {
                    this.saveFormData = configs
                }
            })
        },
        clear_data(type) {
            this.post('/admin/system/clear_data', {type:type}).then(({code,msg}) => {
                if (code === 1) {
                    this.success(msg);
                }
            })
        },
        submit() {
            this.post('/admin/config/save', this.saveFormData).then(({code}) => {
                if (code === 1) {
                    this.success('保存成功！');
                }
            })
        },
    },
}
</script>
<style scoped>
</style>
