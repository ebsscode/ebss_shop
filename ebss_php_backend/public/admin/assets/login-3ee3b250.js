import{r as d,_ as h,a as s,o as v,c as w,d as t,w as n,b as u,t as b,g as y}from"./index-c354119d.js";const I={name:"loginComponent",data:function(){return{form:{username:"admin",password:"admin"},configs:{}}},async created(){await this.getConfigs(),localStorage.getItem("token")&&this.get("/admin/user/user_info").then(({code:o,user_info:a})=>{o===1?(localStorage.setItem("username",a.nickname||a.username),d.replace("/home")):(localStorage.setItem("token",""),localStorage.setItem("username",""))})},methods:{async getConfigs(){const{code:e,configs:o}=await this.get("/admin/config/list");e==1&&(this.configs=o)},onFinish(){this.post("/admin/index/login",this.form).then(({code:e,msg:o,token:a,username:r,role_id:m,user_id:l})=>{e===1&&(this.loading("登录成功！正在跳转...",1.5),localStorage.setItem("token",a),localStorage.setItem("username",r),localStorage.setItem("role_id",m),localStorage.setItem("user_id",l),setTimeout(()=>{d.replace("/home")},1500))})}}};const S={class:"login-bg"},k={class:"title"},C={class:"justify-center"};function F(e,o,a,r,m,l){const f=s("a-input"),c=s("a-form-item"),p=s("a-input-password"),_=s("a-button"),g=s("a-form");return v(),w("div",S,[t(g,{class:"login",model:e.form,"label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:l.onFinish},{default:n(()=>[u("div",k,b(e.configs.name),1),t(c,{labelAlign:"left",colon:!1,label:"用户名",name:"username",rules:[{required:!0,message:" "}]},{default:n(()=>[t(f,{value:e.form.username,"onUpdate:value":o[0]||(o[0]=i=>e.form.username=i)},null,8,["value"])]),_:1}),t(c,{labelAlign:"left",colon:!1,label:"密码",name:"password",rules:[{required:!0,message:" "}]},{default:n(()=>[t(p,{value:e.form.password,"onUpdate:value":o[1]||(o[1]=i=>e.form.password=i)},null,8,["value"])]),_:1}),u("div",C,[t(_,{type:"primary","html-type":"submit"},{default:n(()=>[y("登录")]),_:1})])]),_:1},8,["model","onFinish"])])}const N=h(I,[["render",F],["__scopeId","data-v-6f6c67ce"]]);export{N as default};
