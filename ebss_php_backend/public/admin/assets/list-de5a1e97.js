import{_ as i,a as r,o as p,h as d,w as s,b as a}from"./index-dd67864f.js";const v={name:"list",data:function(){return{table:"base_banner",showQuery:!1,saveFormData:{src_img:"",sort_num:50},searchObj:{},columns:[{title:"图片",key:"src_img"},{title:"跳转链接",key:"url",is_edit:!0},{title:"排序数字",key:"sort_num",is_edit:!0}]}}};function f(e,o,c,b,D,F){const u=r("Upload"),n=r("a-form-item"),l=r("a-input"),m=r("a-form"),_=r("Crud");return p(),d(_,null,{save:s(()=>[a(m,{ref:"save_form",model:e.saveFormData,"label-col":{span:6},"wrapper-col":{span:18}},{default:s(()=>[a(n,{label:"图片",name:"src_img",rules:[{required:!0,message:""}]},{default:s(()=>[a(u,{maxCount:1,value:e.saveFormData.src_img,"onUpdate:value":o[0]||(o[0]=t=>e.saveFormData.src_img=t)},null,8,["value"])]),_:1}),a(n,{label:"排序数字",name:"sort_num",rules:[{required:!0,message:""}]},{default:s(()=>[a(l,{value:e.saveFormData.sort_num,"onUpdate:value":o[1]||(o[1]=t=>e.saveFormData.sort_num=t)},null,8,["value"])]),_:1}),a(n,{label:"跳转链接",name:"url"},{default:s(()=>[a(l,{value:e.saveFormData.url,"onUpdate:value":o[2]||(o[2]=t=>e.saveFormData.url=t)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1})}const k=i(v,[["render",f]]);export{k as default};