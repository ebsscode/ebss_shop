(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-addr-save"],{"02e9":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={name:"YesOrNo",props:{value:{type:Number,default:null},disabled:{type:Boolean,default:!1},changed:{type:Boolean,default:!1}},watch:{value:{handler:function(t,e){this.is_on=1==t},immediate:!0}},data:function(){return{is_on:!1}},methods:{change:function(t){console.log(t,555),this.$emit("update:value",t.detail.value?1:0),this.$emit("input",t.detail.value?1:0)}}};e.default=n},"04ff":function(t,e,a){"use strict";a.r(e);var n=a("7fe0"),i=a("325c");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"7f409180",null,!1,n["a"],void 0);e["default"]=s.exports},"325c":function(t,e,a){"use strict";a.r(e);var n=a("02e9"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"47fe":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("StatusBar"),a("v-uni-view",{staticClass:"row b-b"},[a("v-uni-text",{staticClass:"tit"},[t._v("联系人")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名","placeholder-class":"placeholder"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("v-uni-view",{staticClass:"row b-b"},[a("v-uni-text",{staticClass:"tit"},[t._v("手机号")]),a("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"收货人手机号码","placeholder-class":"placeholder"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),a("v-uni-view",{staticClass:"row b-b"},[a("v-uni-text",{staticClass:"tit"},[t._v("地址")]),a("v-uni-text",{staticClass:"input",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseLocation.apply(void 0,arguments)}}},[t.form?[t._v(t._s(t.form.city||"")+t._s(t.form.district||""))]:t._e()],2),a("v-uni-text",{staticClass:"myicon icon-shouhuodizhi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseLocation.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"row b-b"},[a("v-uni-text",{staticClass:"tit"},[t._v("门牌号")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"楼号、门牌","placeholder-class":"placeholder"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),a("v-uni-view",{staticClass:"row default-row"},[a("v-uni-text",{staticClass:"tit"},[t._v("设为默认")]),a("YesOrNo",{model:{value:t.form.is_default,callback:function(e){t.$set(t.form,"is_default",e)},expression:"form.is_default"}})],1),a("v-uni-button",{staticClass:"add-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("提交")])],1)},i=[]},"4ecd":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac1f"),a("00b4");var i=n(a("c7eb")),r=n(a("5530")),o=n(a("1da1")),s=n(a("04ff")),c={components:{YesOrNo:s.default},data:function(){return{addr_id:null,form:{},user_id:uni.getStorageSync("user_id")}},onLoad:function(t){var e="新增地址";t.addr_id&&(e="编辑地址",this.addr_id=t.addr_id,this.getData()),uni.setNavigationBarTitle({title:e})},methods:{getData:function(){var t=this;this.get("crud/detail",{table:"addr",table_id:this.addr_id}).then((function(e){var a=e.code,n=e.detail;1===a&&(t.form=n)}))},chooseLocation:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.chooseLocation();case 2:a=e.sent,t.form=(0,r.default)((0,r.default)({},t.form),a);case 4:case"end":return e.stop()}}),e)})))()},confirm:function(){var t=this,e=this.form;e.name?/(^1[3|4|5|7|8][0-9]{9}$)/.test(e.tel)?e.address?this.get("crud/save",(0,r.default)({table:"addr",user_id:this.user_id},this.form)).then((function(e){var a=e.code,n=e.msg;1===a&&(t.success(n),t.back("",800))})):this.error("请在地图选择所在位置"):this.error("请输入正确的手机号码"):this.error("请填写收货人姓名")}}};e.default=c},"61a3":function(t,e,a){"use strict";a.r(e);var n=a("4ecd"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"7fe0":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-switch",{attrs:{checked:t.is_on,color:"#fa436a"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}})},i=[]},8757:function(t,e,a){"use strict";var n=a("e87d"),i=a.n(n);i.a},"9c0f":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 通用 */\r\n/* 文字尺寸 */\r\n/* 页面配置 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-1cf8a278]{background:#f8f8f8;padding-top:%?16?%}body.?%PAGE?%[data-v-1cf8a278]{background:#f8f8f8}.row[data-v-1cf8a278]{display:flex;align-items:center;position:relative;padding:0 %?30?%;height:%?110?%;background:#fff}.row .tit[data-v-1cf8a278]{flex-shrink:0;width:%?120?%;font-size:%?30?%;color:#303133}.row .input[data-v-1cf8a278]{flex:1;font-size:%?30?%;color:#303133}.row .icon-shouhuodizhi[data-v-1cf8a278]{font-size:%?36?%;color:#909399}.default-row[data-v-1cf8a278]{margin-top:%?16?%}.default-row .tit[data-v-1cf8a278]{flex:1}.default-row uni-switch[data-v-1cf8a278]{-webkit-transform:translateX(%?16?%) scale(.9);transform:translateX(%?16?%) scale(.9)}.add-btn[data-v-1cf8a278]{display:flex;align-items:center;justify-content:center;width:%?690?%;height:%?80?%;margin:%?60?% auto;font-size:%?32?%;color:#fff;background-color:#27c2f3;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""]),t.exports=e},a4e0:function(t,e,a){"use strict";a.r(e);var n=a("47fe"),i=a("61a3");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("8757");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"1cf8a278",null,!1,n["a"],void 0);e["default"]=s.exports},e87d:function(t,e,a){var n=a("9c0f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a9b6a974",n,!0,{sourceMap:!1,shadowMode:!1})}}]);