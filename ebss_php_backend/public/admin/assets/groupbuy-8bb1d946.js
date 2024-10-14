import{b as a,_ as v,a as r,o as _,h as f,w as l}from"./index-dd67864f.js";const g={name:"list",data:function(){return{table:"shop_groupbuy",saveFormData:{},searchObj:{},join_tables:["shop_goods"],columns:[{title:"团购名称",key:"name",is_edit:!0},{title:"活动描述",key:"desc",is_edit:!0},{title:"团购商品",key:"goods_id",customRender:e=>a("span",null,[e.record.shop_goods.title]),sorter:!0},{title:"活动图片",key:"cover_img"},{title:"开始时间",key:"start_time"},{title:"结束时间",key:"end_time"}]}},computed:{},components:{},created(){},methods:{}};function b(e,t,D,F,k,y){const n=r("a-input"),s=r("a-form-item"),u=r("DatePicker"),d=r("RemoteSelect"),i=r("Upload"),m=r("a-form"),p=r("Crud");return _(),f(p,null,{save:l(()=>[a(m,{ref:"save_form",model:e.saveFormData,"label-col":{span:6},"wrapper-col":{span:18}},{default:l(()=>[a(s,{label:"团购名称",name:"name",rules:[{required:!0,message:""}]},{default:l(()=>[a(n,{value:e.saveFormData.name,"onUpdate:value":t[0]||(t[0]=o=>e.saveFormData.name=o)},null,8,["value"])]),_:1}),a(s,{label:"活动描述",name:"desc"},{default:l(()=>[a(n,{value:e.saveFormData.desc,"onUpdate:value":t[1]||(t[1]=o=>e.saveFormData.desc=o)},null,8,["value"])]),_:1}),a(s,{label:"开始时间",name:"start_time",rules:[{required:!0,message:""}]},{default:l(()=>[a(u,{value:e.saveFormData.start_time,"onUpdate:value":t[2]||(t[2]=o=>e.saveFormData.start_time=o)},null,8,["value"])]),_:1}),a(s,{label:"结束时间",name:"end_time",rules:[{required:!0,message:""}]},{default:l(()=>[a(u,{value:e.saveFormData.end_time,"onUpdate:value":t[3]||(t[3]=o=>e.saveFormData.end_time=o)},null,8,["value"])]),_:1}),a(s,{label:"成团人数",name:"people_total",rules:[{required:!0,message:""}]},{default:l(()=>[a(n,{value:e.saveFormData.people_total,"onUpdate:value":t[4]||(t[4]=o=>e.saveFormData.people_total=o)},null,8,["value"])]),_:1}),a(s,{label:"团购商品",name:"goods_id",rules:[{required:!0,message:""}]},{default:l(()=>[a(d,{table:"shop_goods",name_key:"title",where:[["is_listing","=",1]],value:e.saveFormData.goods_id,"onUpdate:value":t[5]||(t[5]=o=>e.saveFormData.goods_id=o)},null,8,["value"])]),_:1}),a(s,{label:"活动图片",name:"cover_img",rules:[{required:!0,message:""}]},{default:l(()=>[a(i,{maxCount:1,value:e.saveFormData.cover_img,"onUpdate:value":t[6]||(t[6]=o=>e.saveFormData.cover_img=o)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),search:l(()=>[a(m,{layout:"inline"},{default:l(()=>[a(s,{label:"团购名称",name:"name"},{default:l(()=>[a(n,{value:e.searchObj.name,"onUpdate:value":t[7]||(t[7]=o=>e.searchObj.name=o)},null,8,["value"])]),_:1})]),_:1})]),_:1})}const q=v(g,[["render",b]]);export{q as default};