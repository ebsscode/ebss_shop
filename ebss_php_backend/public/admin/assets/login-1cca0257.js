import{_ as g,r as m,a,o as h,c as v,d as t,w as n,b as d,t as b,g as w}from"./index-1b664cd6.js";const y={name:"loginComponent",data:function(){return{form:{username:"admin",password:"admin"},configs:{}}},async created(){await this.getConfigs(),localStorage.getItem("token")&&this.get("/admin/user/user_info").then(({code:o,user_info:s})=>{o===1?(localStorage.setItem("username",s.nickname||s.username),m.push("/home")):(localStorage.setItem("token",""),localStorage.setItem("username",""))})},methods:{async getConfigs(){const{code:e,configs:o}=await this.get("/index/index/configs");e==1&&(this.configs=o)},onFinish(){this.post("/admin/index/login",this.form).then(({code:e,msg:o,token:s,username:i})=>{e===1&&(this.loading("登录成功！正在跳转...",1.5),localStorage.setItem("token",s),localStorage.setItem("username",i),setTimeout(()=>{m.push("/home")},1500))})}}},k={class:"login-bg"},I={class:"title"},S={class:"justify-center"};function C(e,o,s,i,F,u){const c=a("a-input"),r=a("a-form-item"),p=a("a-input-password"),f=a("a-button"),_=a("a-form");return h(),v("div",k,[t(_,{class:"login",model:e.form,"label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:u.onFinish},{default:n(()=>[d("div",I,b(e.configs.name),1),t(r,{labelAlign:"left",colon:!1,label:"用户名",name:"username",rules:[{required:!0,message:" "}]},{default:n(()=>[t(c,{value:e.form.username,"onUpdate:value":o[0]||(o[0]=l=>e.form.username=l)},null,8,["value"])]),_:1}),t(r,{labelAlign:"left",colon:!1,label:"密码",name:"password",rules:[{required:!0,message:" "}]},{default:n(()=>[t(p,{value:e.form.password,"onUpdate:value":o[1]||(o[1]=l=>e.form.password=l)},null,8,["value"])]),_:1}),d("div",S,[t(f,{type:"primary","html-type":"submit"},{default:n(()=>[w("登录")]),_:1})])]),_:1},8,["model","onFinish"])])}const B=g(y,[["render",C],["__scopeId","data-v-5b46a0d4"]]);export{B as default};
