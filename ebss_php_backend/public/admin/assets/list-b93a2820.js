import{_ as i,a as t,o as p,f,w as r,d as e}from"./index-1b664cd6.js";const b={name:"list",data:function(){return{showAdd:!1,showDelete:()=>!1,table:"user",saveFormData:{},searchObj:{},columns:[{title:"用户名",key:"username"},{title:"手机号",key:"tel"},{title:"头像",key:"avatar_img"},{title:"地址",key:"address"}]}},computed:{table_key(){return`${this.table}_id`}},components:{},created(){},methods:{}};function D(a,l,F,U,_,k){const u=t("a-input"),n=t("a-form-item"),d=t("Upload"),s=t("RemoteSelect"),m=t("a-form"),v=t("Crud");return p(),f(v,null,{save:r(()=>[e(m,{ref:"save_form",model:a.saveFormData,"label-col":{span:6},"wrapper-col":{span:18}},{default:r(()=>[e(n,{label:"用户名",name:"username",rules:[{required:!0,message:""}]},{default:r(()=>[e(u,{value:a.saveFormData.username,"onUpdate:value":l[0]||(l[0]=o=>a.saveFormData.username=o)},null,8,["value"])]),_:1}),e(n,{label:"昵称",name:"nickname",rules:[{required:!0,message:""}]},{default:r(()=>[e(u,{value:a.saveFormData.nickname,"onUpdate:value":l[1]||(l[1]=o=>a.saveFormData.nickname=o)},null,8,["value"])]),_:1}),e(n,{label:"手机号",name:"tel",rules:[{required:!0,message:""}]},{default:r(()=>[e(u,{value:a.saveFormData.tel,"onUpdate:value":l[2]||(l[2]=o=>a.saveFormData.tel=o)},null,8,["value"])]),_:1}),e(n,{label:"地址",name:"address"},{default:r(()=>[e(u,{value:a.saveFormData.address,"onUpdate:value":l[3]||(l[3]=o=>a.saveFormData.address=o)},null,8,["value"])]),_:1}),e(n,{label:"余额",name:"money"},{default:r(()=>[e(u,{value:a.saveFormData.money,"onUpdate:value":l[4]||(l[4]=o=>a.saveFormData.money=o)},null,8,["value"])]),_:1}),e(n,{label:"上级ID",name:"share_id"},{default:r(()=>[e(u,{value:a.saveFormData.share_id,"onUpdate:value":l[5]||(l[5]=o=>a.saveFormData.share_id=o)},null,8,["value"])]),_:1}),e(n,{label:"头像",name:"avatar_img"},{default:r(()=>[e(d,{maxCount:1,value:a.saveFormData.avatar_img,"onUpdate:value":l[6]||(l[6]=o=>a.saveFormData.avatar_img=o)},null,8,["value"])]),_:1}),e(n,{label:"角色",name:"role_id"},{default:r(()=>[e(s,{table:"role",name_key:"role_name",where:[["user_id","=",1]],value:a.saveFormData.role_id,"onUpdate:value":l[7]||(l[7]=o=>a.saveFormData.role_id=o)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),search:r(()=>[e(m,{layout:"inline"},{default:r(()=>[e(n,null,{default:r(()=>[e(u,{placeholder:"用户ID",value:a.searchObj.user_id,"onUpdate:value":l[8]||(l[8]=o=>a.searchObj.user_id=o)},null,8,["value"])]),_:1}),e(n,null,{default:r(()=>[e(u,{placeholder:"手机号",value:a.searchObj.tel,"onUpdate:value":l[9]||(l[9]=o=>a.searchObj.tel=o)},null,8,["value"])]),_:1}),e(n,null,{default:r(()=>[e(u,{placeholder:"用户名",value:a.searchObj.username,"onUpdate:value":l[10]||(l[10]=o=>a.searchObj.username=o)},null,8,["value"])]),_:1}),e(n,null,{default:r(()=>[e(s,{placeholder:"角色",table:"role",name_key:"role_name",value:a.searchObj.role_id,"onUpdate:value":l[11]||(l[11]=o=>a.searchObj.role_id=o)},null,8,["value"])]),_:1})]),_:1})]),_:1})}const j=i(b,[["render",D]]);export{j as default};
