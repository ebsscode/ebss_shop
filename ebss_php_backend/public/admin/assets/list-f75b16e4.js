import{_ as d,a as l,o as _,g as i,w as o,b as e}from"./index-5116e4ca.js";const f={name:"list",data:function(){return{table:"base_brand",saveFormData:{sort_num:50},searchObj:{},columns:[{title:"品牌名称",key:"name",is_edit:!0},{title:"品牌LOGO",key:"logo_img"}]}},computed:{},components:{},created(){},methods:{}};function v(a,n,c,b,g,O){const r=l("a-input"),s=l("a-form-item"),u=l("Upload"),m=l("a-form"),p=l("Crud");return _(),i(p,null,{save:o(()=>[e(m,{ref:"save_form",model:a.saveFormData,"label-col":{span:6},"wrapper-col":{span:18}},{default:o(()=>[e(s,{label:"品牌名称",name:"name",rules:[{required:!0,message:""}]},{default:o(()=>[e(r,{value:a.saveFormData.name,"onUpdate:value":n[0]||(n[0]=t=>a.saveFormData.name=t)},null,8,["value"])]),_:1}),e(s,{label:"品牌LOGO",name:"logo_img"},{default:o(()=>[e(u,{maxCount:1,value:a.saveFormData.logo_img,"onUpdate:value":n[1]||(n[1]=t=>a.saveFormData.logo_img=t)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),search:o(()=>[e(m,{layout:"inline"},{default:o(()=>[e(s,null,{default:o(()=>[e(r,{placeholder:"品牌名称",value:a.searchObj.name,"onUpdate:value":n[2]||(n[2]=t=>a.searchObj.name=t)},null,8,["value"])]),_:1})]),_:1})]),_:1})}const F=d(f,[["render",v]]);export{F as default};
