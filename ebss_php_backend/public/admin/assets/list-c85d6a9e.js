import{d as e,_ as p,a,o as d,f as m,w as n}from"./index-c354119d.js";const c={name:"list",data:function(){return{table:"paylog",showAdd:!1,showEdit:()=>!1,saveFormData:{},searchObj:{is_pay:1},columns:[{title:"用户ID",key:"user_id"},{title:"金额",key:"money"},{title:"类型",key:"type",customRender:t=>e("div",null,[e("span",null,[this.constant.pay_type[t.text]])])},{title:"支付时间",key:"pay_time"},{title:"是否支付",key:"is_pay"},{title:"添加时间",key:"add_time"}]}},computed:{table_key(){return`${this.table}_id`}},components:{},created(){},methods:{}};function y(t,o,f,b,h,k){const r=a("a-input"),l=a("a-form-item"),i=a("YesOrNo"),u=a("a-form"),_=a("Crud");return d(),m(_,null,{search:n(()=>[e(u,{layout:"inline"},{default:n(()=>[e(l,{label:"用户ID",name:"status"},{default:n(()=>[e(r,{value:t.searchObj.user_id,"onUpdate:value":o[0]||(o[0]=s=>t.searchObj.user_id=s)},null,8,["value"])]),_:1}),e(l,{label:"是否支付",name:"is_pay"},{default:n(()=>[e(i,{value:t.searchObj.is_pay,"onUpdate:value":o[1]||(o[1]=s=>t.searchObj.is_pay=s)},null,8,["value"])]),_:1})]),_:1})]),_:1})}const O=p(c,[["render",y]]);export{O as default};
