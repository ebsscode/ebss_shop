(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-my-tixian_log"],{"230e":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("StatusBar"),t._l(t.list,(function(i,e){return n("v-uni-view",{key:e,staticStyle:{"border-radius":"10px",background:"linear-gradient(#dcf2e0, #ffffff)",padding:"10px","margin-bottom":"10px"}},[n("v-uni-view",{staticClass:"justify-between"},[n("v-uni-view",[n("v-uni-text",{staticStyle:{"font-size":"16px"}},[t._v("渠道："+t._s(i.type))])],1),n("v-uni-view",{staticClass:"text-color",staticStyle:{padding:"6px 8px","border-radius":"12px","font-size":"14px"}},[t._v(t._s(t.constant.tixian_status[i.status]))])],1),n("v-uni-view",{staticClass:"align-center justify-between",staticStyle:{"margin-top":"10px"}},[n("v-uni-view",[n("span",{staticClass:"myicon icon-yuebao text-color",staticStyle:{"font-size":"20px","margin-right":"14px"}}),n("v-uni-text",{staticStyle:{"font-size":"16px"}},[t._v(t._s(i.money))])],1),n("v-uni-text",[t._v(t._s(t.formatTime(i.add_time)))])],1)],1)})),t.list.length?t._e():n("Empty")],2)},a=[]},"40eb":function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{list:[],constant:this.constant}},onLoad:function(){this.getData()},methods:{getData:function(){var t=this;this.get("crud/list",{table:"tixian",user_id:uni.getStorageSync("user_id"),limit:100}).then((function(i){var n=i.code,e=i.paginate;1==n&&(t.list=e.data)}))}}};i.default=e},ada7:function(t,i,n){"use strict";n.r(i);var e=n("40eb"),a=n.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a},c1ee:function(t,i,n){"use strict";n.r(i);var e=n("230e"),a=n("ada7");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(s);var u=n("f0c5"),o=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"39085257",null,!1,e["a"],void 0);i["default"]=o.exports}}]);