import{_ as v,a as m,o as _,h as i,w as n,b as a}from"./index-dd67864f.js";const p={name:"list",data:function(){return{table:"base_charge_option",saveFormData:{},searchObj:{},columns:[{title:"金额",key:"amount"},{title:"赠送金额",key:"amount_give"},{title:"虚拟币",key:"v_money"},{title:"赠送虚拟币",key:"v_money_give"}]}},components:{},created(){},methods:{save(){return!0}}};function d(e,o,f,g,y,D){const r=m("a-input"),l=m("a-form-item"),s=m("a-form"),u=m("Crud");return _(),i(u,null,{save:n(()=>[a(s,{ref:"save_form",model:e.saveFormData,"label-col":{span:6},"wrapper-col":{span:18}},{default:n(()=>[a(l,{label:"金额",name:"amount",rules:[{required:!0,message:""}]},{default:n(()=>[a(r,{value:e.saveFormData.amount,"onUpdate:value":o[0]||(o[0]=t=>e.saveFormData.amount=t)},null,8,["value"])]),_:1}),a(l,{label:"赠送金额",name:"amount_give",rules:[{required:!0,message:""}]},{default:n(()=>[a(r,{value:e.saveFormData.amount_give,"onUpdate:value":o[1]||(o[1]=t=>e.saveFormData.amount_give=t)},null,8,["value"])]),_:1}),a(l,{label:"虚拟币",name:"v_money",rules:[{required:!0,message:""}]},{default:n(()=>[a(r,{value:e.saveFormData.v_money,"onUpdate:value":o[2]||(o[2]=t=>e.saveFormData.v_money=t)},null,8,["value"])]),_:1}),a(l,{label:"赠送虚拟币",name:"v_money_give",rules:[{required:!0,message:""}]},{default:n(()=>[a(r,{value:e.saveFormData.v_money_give,"onUpdate:value":o[3]||(o[3]=t=>e.saveFormData.v_money_give=t)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),search:n(()=>[]),_:1})}const b=v(p,[["render",d]]);export{b as default};