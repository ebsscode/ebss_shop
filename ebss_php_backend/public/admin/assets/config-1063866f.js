import{_ as b,a as s,o as x,c as D,d as t,w as a,g as u,b as F}from"./index-c354119d.js";const C={name:"config",data(){return{activeKey:"1",saveFormData:{}}},created(){this.getConfigs()},methods:{getConfigs(){this.get("/admin/config/list").then(({code:l,configs:e})=>{l===1&&(this.saveFormData=e)})},clear_data(l){this.post("/admin/system/clear_data",{type:l}).then(({code:e,msg:d})=>{e===1&&this.success(d)})},submit(){this.post("/admin/config/save",this.saveFormData).then(({code:l})=>{l===1&&this.success("保存成功！")})}}},k={style:{padding:"0 20px"}},U={class:"justify-center"};function w(l,e,d,K,n,i){const _=s("a-input"),r=s("a-form-item"),f=s("Upload"),c=s("YesOrNo"),v=s("a-tab-pane"),m=s("a-button"),p=s("a-popconfirm"),g=s("a-tabs"),y=s("a-form");return x(),D("div",k,[t(y,{ref:"save_form",model:n.saveFormData,"label-col":{span:2},"wrapper-col":{span:10}},{default:a(()=>[t(g,{activeKey:n.activeKey,"onUpdate:activeKey":e[8]||(e[8]=o=>n.activeKey=o)},{default:a(()=>[t(v,{key:"1",tab:"基本设置"},{default:a(()=>[t(r,{label:"系统名称",name:"name",rules:[{required:!0,message:""}]},{default:a(()=>[t(_,{value:n.saveFormData.name,"onUpdate:value":e[0]||(e[0]=o=>n.saveFormData.name=o)},null,8,["value"])]),_:1}),t(r,{label:"软件版本",name:"version",rules:[{required:!0,message:""}]},{default:a(()=>[t(_,{value:n.saveFormData.version,"onUpdate:value":e[1]||(e[1]=o=>n.saveFormData.version=o)},null,8,["value"])]),_:1}),t(r,{label:"客服电话",name:"tel",rules:[{required:!0,message:""}]},{default:a(()=>[t(_,{value:n.saveFormData.tel,"onUpdate:value":e[2]||(e[2]=o=>n.saveFormData.tel=o)},null,8,["value"])]),_:1}),t(r,{label:"LOGO",name:"logo_img",rules:[{required:!0,message:""}]},{default:a(()=>[t(f,{maxCount:1,value:n.saveFormData.logo_img,"onUpdate:value":e[3]||(e[3]=o=>n.saveFormData.logo_img=o)},null,8,["value"])]),_:1}),t(r,{label:"开启审核",name:"is_review"},{default:a(()=>[t(c,{value:n.saveFormData.is_review,"onUpdate:value":e[4]||(e[4]=o=>n.saveFormData.is_review=o)},null,8,["value"])]),_:1})]),_:1}),t(v,{key:"2",tab:"数据管理","force-render":""},{default:a(()=>[t(p,{title:"清除数据后不可恢复！！！","ok-text":"确定","cancel-text":"取消",onConfirm:e[5]||(e[5]=o=>i.clear_data("order"))},{default:a(()=>[t(m,{type:"danger",style:{"margin-right":"10px"}},{default:a(()=>[u("清除订单数据")]),_:1})]),_:1}),t(p,{title:"清除数据后不可恢复！！！","ok-text":"确定","cancel-text":"取消",onConfirm:e[6]||(e[6]=o=>i.clear_data("goods"))},{default:a(()=>[t(m,{type:"danger",style:{"margin-right":"10px"}},{default:a(()=>[u("清除商品数据")]),_:1})]),_:1}),t(p,{title:"清除数据后不可恢复！！！","ok-text":"确定","cancel-text":"取消",onConfirm:e[7]||(e[7]=o=>i.clear_data("all"))},{default:a(()=>[t(m,{type:"danger",style:{"margin-right":"10px"}},{default:a(()=>[u("清除所有数据")]),_:1})]),_:1})]),_:1})]),_:1},8,["activeKey"]),t(r,{style:{"margin-top":"10px"}},{default:a(()=>[F("div",U,[t(m,{type:"primary","html-type":"submit",onClick:i.submit},{default:a(()=>[u("提交")]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model"])])}const q=b(C,[["render",w]]);export{q as default};
