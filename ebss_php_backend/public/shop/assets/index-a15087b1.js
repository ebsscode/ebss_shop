import{_ as o,r,o as i,c as n}from"./index-eba80501.js";const c={name:"index",data(){return{}},created(){this.getData()},methods:{getData(){this.get("page/page_index").then(({code:t,configs:e,location:a,user_id:s})=>{t===1&&(this.util.setStorage("configs",e),this.util.setStorage("location",a),this.util.setStorage("user_id",s),r.push({path:"/home"}))})}}};function d(t,e,a,s,p,h){return i(),n("div")}const _=o(c,[["render",d]]);export{_ as default};
