import{_ as k,r as I,a as i,o as t,c as o,b as l,d as x,w as a,F as c,e as h,f as r,g as u,t as p,p as v,h as M}from"./index-c354119d.js";const N={name:"AsideMenu",props:{collapsed:{type:Boolean,default:!0},menus:{type:Array,required:!0}},data:function(){return{selectedKeys:[],openKeys:[],asideMenu:[]}},watch:{openKeys(e,s){localStorage.setItem("menuOpenKeys",JSON.stringify(e))},selectedKeys(e,s){localStorage.setItem("menuSelectedKeys",JSON.stringify(e))},menus:{handler(e,s){this.asideMenu=this.util.arrayToTree(e,"permission_id",0,"pid")},immediate:!0}},created(){let e=localStorage.getItem("menuOpenKeys");e&&(this.openKeys=JSON.parse(e));let s=localStorage.getItem("menuSelectedKeys");s&&(this.selectedKeys=JSON.parse(s))},methods:{menuClick({item:e,key:s,keyPath:y}){I.push(e.data.path)}}},_=e=>(v("data-v-f377a235"),e=e(),M(),e),C={class:"AsideMenu"},O={class:"flex-col"},V=_(()=>l("span",{class:"myicon icon-danxuanxuanzhong"},null,-1)),$=_(()=>l("span",{class:"myicon icon-weixuanzhong"},null,-1)),w=_(()=>l("span",{class:"myicon icon-danxuanxuanzhong"},null,-1));function A(e,s,y,B,J,f){const m=i("a-menu-item"),K=i("a-sub-menu"),g=i("a-menu");return t(),o("div",C,[l("div",O,[x(g,{openKeys:e.openKeys,"onUpdate:openKeys":s[0]||(s[0]=n=>e.openKeys=n),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":s[1]||(s[1]=n=>e.selectedKeys=n),mode:"inline",inlineIndent:10,onClick:f.menuClick,"inline-collapsed":y.collapsed,multiple:!1},{default:a(()=>[(t(!0),o(c,null,h(e.asideMenu,(n,S)=>(t(),o(c,{key:`${S}`},[n.children&&n.children.length>0?(t(),r(K,{key:`${n.permission_id}`},{icon:a(()=>[V]),title:a(()=>[u(p(n.name),1)]),default:a(()=>[(t(!0),o(c,null,h(n.children,(d,b)=>(t(),r(m,{key:`${d.permission_id}`,data:d},{icon:a(()=>[$]),default:a(()=>[u(" "+p(d.name),1)]),_:2},1032,["data"]))),128))]),_:2},1024)):(t(),r(m,{key:`${n.permission_id}`,data:n},{icon:a(()=>[w]),default:a(()=>[u(" "+p(n.name),1)]),_:2},1032,["data"]))],64))),128))]),_:1},8,["openKeys","selectedKeys","onClick","inline-collapsed"])])])}const T=k(N,[["render",A],["__scopeId","data-v-f377a235"]]);export{T as default};
