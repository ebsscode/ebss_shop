import{_ as p,a as s,o as _,f,w as l,d as a}from"./index-7089925e.js";const D={name:"list",data:function(){return{table:"category",saveFormData:{sort_num:50,is_show:0},searchObj:{},columns:[{title:"上级ID",key:"pid"},{title:"分类名称",key:"cat_name",is_edit:!0},{title:"图标",key:"cat_img"},{title:"排序数字",key:"sort_num",is_edit:!0},{title:"跳转链接",key:"url",is_edit:!0},{title:"是否显示",key:"is_show",is_edit:!0}]}},computed:{},components:{},created(){},methods:{}};function F(e,t,b,c,y,g){const r=s("a-input"),n=s("a-form-item"),m=s("RemoteSelect"),d=s("Upload"),i=s("YesOrNo"),u=s("a-form"),v=s("Crud");return _(),f(v,null,{save:l(()=>[a(u,{ref:"save_form",model:e.saveFormData,"label-col":{span:6},"wrapper-col":{span:18}},{default:l(()=>[a(n,{label:"分类名称",name:"cat_name",rules:[{required:!0,message:""}]},{default:l(()=>[a(r,{value:e.saveFormData.cat_name,"onUpdate:value":t[0]||(t[0]=o=>e.saveFormData.cat_name=o)},null,8,["value"])]),_:1}),a(n,{label:"父级分类",name:"pid"},{default:l(()=>[a(m,{where:[["category_id","<>",e.saveFormData.category_id]],table:"category",name_key:"cat_name",value:e.saveFormData.pid,"onUpdate:value":t[1]||(t[1]=o=>e.saveFormData.pid=o)},null,8,["where","value"])]),_:1}),a(n,{label:"分类图标",name:"cat_img",rules:[{required:!0,message:""}]},{default:l(()=>[a(d,{maxCount:1,value:e.saveFormData.cat_img,"onUpdate:value":t[2]||(t[2]=o=>e.saveFormData.cat_img=o)},null,8,["value"])]),_:1}),a(n,{label:"排序数字",name:"sort_num",rules:[{required:!0,message:""}]},{default:l(()=>[a(r,{value:e.saveFormData.sort_num,"onUpdate:value":t[3]||(t[3]=o=>e.saveFormData.sort_num=o)},null,8,["value"])]),_:1}),a(n,{label:"跳转链接",name:"url"},{default:l(()=>[a(r,{value:e.saveFormData.url,"onUpdate:value":t[4]||(t[4]=o=>e.saveFormData.url=o)},null,8,["value"])]),_:1}),a(n,{label:"是否显示",name:"is_show"},{default:l(()=>[a(i,{value:e.saveFormData.is_show,"onUpdate:value":t[5]||(t[5]=o=>e.saveFormData.is_show=o)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),search:l(()=>[a(u,{layout:"inline"},{default:l(()=>[a(n,null,{default:l(()=>[a(r,{placeholder:"分类名称",value:e.searchObj.cat_name,"onUpdate:value":t[6]||(t[6]=o=>e.searchObj.cat_name=o)},null,8,["value"])]),_:1})]),_:1})]),_:1})}const k=p(D,[["render",F]]);export{k as default};
