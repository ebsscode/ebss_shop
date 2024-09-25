<template>
  <div>
    <div class="register_header">
      <div class="reg_hc">
        <img :src="baseURL+'/'+configs.logo_img" style="width: 50px;height: 50px;"/>
        <h4>登录</h4>
        <span class="forget fr"><a href="/">去首页</a></span>
      </div>
    </div>
    <div class="register_con">
      <div class="register_conr">
        <div class="clear"></div>
        <div class="user per_register" style="padding-top: 40px;">
          <span>用户名：</span>
          <div style="position: relative;">
            <span class="myicon icon-wode" style="position: absolute;margin-top: 10px;margin-left: 25px;"></span>
            <input type="text" name="user" v-model="form.tel" class="input_comm" placeholder="请输入用户名" style="margin-top: 0px;">
          </div>
          <br />
          <span>密码：</span>
          <div style="position: relative;">
            <span class="myicon icon-jiesuo" style="position: absolute;margin-top: 10px;margin-left: 25px;"></span>
            <input type="text" name="password" v-model="form.password" class="input_comm" placeholder="请输入密码" style="margin-top: 0px;">
          </div>
          <br />

          <input type="button" name="denglu" value="登 录" class="btn_register" @click="bindLogin"/>
          <div class="agreenment text-color">
            <div @click="form.login_type=2" v-if="form.login_type==1">验证码登录</div>
            <div @click="form.login_type=1" v-if="form.login_type==2">密码登录</div>
            <div style="margin: 0 4px;">|</div>
            <div >忘记密码</div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import router from "@/route/index";
export default {
  name: "login",
  data() {
    return {
      form:{
        login_type: 1,//1密码，2验证码
        tel: '17096709660',
        password: '123456',
        code: '',
        username: '',
      },
      user_info:null,
      configs:this.util.getStorage('configs'),
    }
  },
  created() {
  },
  methods:{
    sendsms() {
      if (this.form.tel.length != 11) {
        this.error('手机号不正确')
        return;
      }
      this.get('index/sendsms',{type:'login_code',tel:this.form.tel,}).then(({code})=>{
        if(code===1){
          this.success('发送验证码成功！')
        }
      })
    },
    bindLogin() {
      if (this.form.tel.length != 11) {
        this.error('手机号不正确');return;
      }
      if (this.form.login_type == 1 && this.form.password.length < 6) {
        this.error('密码不正确'); return;
      }
      if (this.form.login_type == 2 && !this.form.code.length) {
        this.error('请输入验证码');return;
      }
      this.sendRequest();
    },
    sendRequest(){
      this.post('login/tel_login',{
        login_type: this.form.login_type,
        tel: this.form.tel,
        code: this.form.code,
        password: this.form.password,
        username: this.form.username,
        share_id: this.util.getStorage('share_id'),
      },{loading:true}).then(({code,token,user_id})=>{
        if(code===1){
          this.util.setStorage('token', token)
          this.util.setStorage('user_id', user_id)
          this.success('登录成功')
          router.push({ path: '/', })
        }
      })
    },
    getData(){
      this.get('user/user_info').then(({code,user_info})=>{
        if(code==1){
          this.user_info=user_info
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
.reg_hc {
  padding: 10px 0;
  width: 900px;
  margin: 0 auto;
  h4 {
    display: inline-block;
    font-size: 20px;
    line-height: 25px;
  }
}
.forget {
  margin-top: 25px;
  margin-right: 30px;
  a {
    color: #0081cd;
    font-size: 14px;
    &:hover {
      color: #ee2222;
    }
  }
}
.register_con {
  width: 480px;
  margin: 0 auto;
  .register_conr {
    margin-top: 10%;
    padding: 0 40px;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid #c9c9c9;
    border-radius: 5px;
  }
}
.change {
  width: 48px;
  margin-top: 25px;
  margin-right: 5px;
  a {
    font-size: 12px;
    line-height: 22px;
    color: #4c4c4c;
  }
}
input{
  width: 100%;
}
.btn_register {
  margin-top: 25px;
  border: none;
  height: 44px;
  background: #ee2222;
  font-size: 18px;
  color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 30px;
  cursor: pointer;
}
.agreenment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
</style>
