<template>
    <div class="login-bg">
        <a-form class="login" :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }"  autocomplete="off"  @finish="onFinish" >
            <div class="title">{{ configs.name }}</div>
            <a-form-item labelAlign="left" :colon="false" label="用户名" name="username" :rules="[{ required: true, message: ' ' }]" >
                <a-input v-model:value="form.username"/>
            </a-form-item>
            <a-form-item labelAlign="left" :colon="false" label="密码" name="password" :rules="[{ required: true, message: ' ' }]" >
                <a-input-password v-model:value="form.password"/>
            </a-form-item>
            <div class="justify-center">
                <a-button type="primary" html-type="submit">登录</a-button>
            </div>
        </a-form>
    </div>
</template>
<script lang="jsx">
import router from "@/route/index";
export default {
    name: 'loginComponent',
    data: function () {
        return {
            form: {
                username: 'admin',
                password: 'admin',
            },
            configs: {}
        };

    },
    async created() {
      await this.getConfigs()
      let token = localStorage.getItem('token')
      if(token){
        this.post('/admin/user/user_info').then(({code, user_info}) => {
          if (code === 1) {
            localStorage.setItem('username', user_info.nickname||user_info.username)
            router.replace('/home')
          }else{
            localStorage.setItem('token', '')
            localStorage.setItem('username', '')
          }
        })
      }
    },
    methods: {
      async getConfigs() {
        const {code,configs} = await this.post('/admin/config/front')
        if(code==1){
          this.configs = configs
        }
      },
      onFinish() {
          this.post('/admin/index/login', this.form).then(({code, msg, token, username,role_id,user_id}) => {
              if (code === 1) {
                  this.loading('登录成功！正在跳转...', 1.5)
                  localStorage.setItem('token', token)
                  localStorage.setItem('username', username)
                  localStorage.setItem('role_id', role_id)
                  localStorage.setItem('user_id', user_id)
                  setTimeout(() => {
                      router.replace('/home')
                  }, 1500)
              }
          })
      }
    }
}
</script>
<style scoped lang="less">
.title {
    margin-bottom: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}
.login-bg {
    background: url(@/assets/img/login-bg.jpg) no-repeat center;
    background-size: cover;
    height: 100vh;
    padding-top: 12%;
    .login {
        margin: 0 auto;
        max-width: 420px;
        padding: 20px;
        background-color: #ffffff;
    }
}
</style>
