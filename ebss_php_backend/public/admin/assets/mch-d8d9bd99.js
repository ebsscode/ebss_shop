import{_ as i,a as r,o as c,h as _,w as t,b as e}from"./index-dd67864f.js";const p={name:"list",data:function(){return{showAdd:!1,table:"mch_comment",saveFormData:{},searchObj:{},columns:[{title:"评价内容",key:"content",is_edit:!0},{title:"评分",key:"rate"},{title:"时间",key:"add_time"},{title:"用户ID",key:"user_id",sorter:!0},{title:"商家ID",key:"mch_id",sorter:!0}]}},components:{},created(){},methods:{save(){return!0}}};function f(a,o,v,h,b,k){const u=r("Upload"),n=r("a-form-item"),s=r("a-form"),m=r("RemoteSelect"),d=r("Crud");return c(),_(d,null,{save:t(()=>[e(s,{ref:"save_form",model:a.saveFormData,"label-col":{span:6},"wrapper-col":{span:18}},{default:t(()=>[e(n,{label:"相片",name:"imgs",rules:[{required:!0,message:""}]},{default:t(()=>[e(u,{value:a.saveFormData.imgs,"onUpdate:value":o[0]||(o[0]=l=>a.saveFormData.imgs=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),search:t(()=>[e(s,{layout:"inline"},{default:t(()=>[e(n,null,{default:t(()=>[e(m,{placeholder:"评论人",table:"sys_user",name_key:"nickname",value:a.searchObj.user_id,"onUpdate:value":o[1]||(o[1]=l=>a.searchObj.user_id=l)},null,8,["value"])]),_:1}),e(n,null,{default:t(()=>[e(m,{placeholder:"商家",table:"mch",name_key:"name",value:a.searchObj.mch_id,"onUpdate:value":o[2]||(o[2]=l=>a.searchObj.mch_id=l)},null,8,["value"])]),_:1})]),_:1})]),_:1})}const D=i(p,[["render",f]]);export{D as default};