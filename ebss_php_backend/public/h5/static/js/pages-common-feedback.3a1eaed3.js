(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-feedback"],{"0c31":function(n,t,e){"use strict";(function(n){e("6a54");var a=e("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(e("9b1b")),o=a(e("8346")),r=a(e("b283")),i=a(e("f49e")),c=a(e("6eb1")),s=a(e("f572")),d={components:{ImgUpload:o.default,HTextArea:r.default,FormItem:i.default,HInput:c.default,FormWrapper:s.default},data:function(){return{mch_id:null,form:{imgs:"[]",content:""}}},onLoad:function(n){this.mch_id=n.mch_id},methods:{submit:function(t){var e=this;n.log("form",this.form),this.post("crud/save",(0,u.default)((0,u.default)({table:"base_feedback"},this.form),{},{user_id:uni.getStorageSync("user_id")})).then((function(n){var t=n.code;1===t&&(e.success("提交成功！"),e.back("",1200))}))}}};t.default=d}).call(this,e("ba7c")["default"])},2476:function(n,t,e){var a=e("c86c");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.btn-primary[data-v-60c74db6]{margin-top:10px}',""]),n.exports=t},5914:function(n,t,e){"use strict";e.r(t);var a=e("0c31"),u=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=u.a},6031:function(n,t,e){var a=e("b5c5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var u=e("967d").default;u("1f21cfe8",a,!0,{sourceMap:!1,shadowMode:!1})},"6eb1":function(n,t,e){"use strict";e.r(t);var a=e("b5e7"),u=e("e99f");for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("ae71");var r=e("828b"),i=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"705d399a",null,!1,a["a"],void 0);t["default"]=i.exports},7078:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticStyle:{padding:"0px 10px 0 10px"}},[e("StatusBar"),e("TopBar",{attrs:{title:"意见反馈"}}),e("v-uni-view",[e("FormWrapper",{attrs:{title:"问题反馈"},scopedSlots:n._u([{key:"item",fn:function(){return[e("FormItem",{attrs:{name:"描述"},scopedSlots:n._u([{key:"input",fn:function(){return[e("HInput")]},proxy:!0}])}),e("FormItem",{attrs:{name:"内容"},scopedSlots:n._u([{key:"input",fn:function(){return[e("HTextArea",{model:{value:n.form.content,callback:function(t){n.$set(n.form,"content",t)},expression:"form.content"}})]},proxy:!0}])}),e("FormItem",{attrs:{name:"图片上传"},scopedSlots:n._u([{key:"input",fn:function(){return[e("ImgUpload",{attrs:{max:5},model:{value:n.form.imgs,callback:function(t){n.$set(n.form,"imgs",t)},expression:"form.imgs"}})]},proxy:!0}])})]},proxy:!0}])}),e("v-uni-view",{staticClass:"btn-primary",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submit.apply(void 0,arguments)}}},[n._v("提交")])],1)],1)},u=[]},ad2c:function(n,t,e){"use strict";var a=e("c572"),u=e.n(a);u.a},ae71:function(n,t,e){"use strict";var a=e("6031"),u=e.n(a);u.a},af2d:function(n,t,e){"use strict";e.r(t);var a=e("7078"),u=e("5914");for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("ad2c");var r=e("828b"),i=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"60c74db6",null,!1,a["a"],void 0);t["default"]=i.exports},b5c5:function(n,t,e){var a=e("c86c");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.input[data-v-705d399a]{overflow-wrap:break-word;font-size:14px;text-align:left;white-space:nowrap;color:#000}',""]),n.exports=t},b5e7:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-input",{staticClass:"input",attrs:{placeholder:n.placeholder,focus:n.focus,disabled:n.disabled,maxlength:"-1"},on:{input:function(t){arguments[0]=t=n.$handleEvent(t),n.input.apply(void 0,arguments)}},model:{value:n.val,callback:function(t){n.val=t},expression:"val"}})},u=[]},c572:function(n,t,e){var a=e("2476");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var u=e("967d").default;u("4f73b8e5",a,!0,{sourceMap:!1,shadowMode:!1})},c726:function(n,t,e){"use strict";e("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("64aa");var a={name:"HInput",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:"请输入.."},focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},watch:{value:{handler:function(n,t){this.val=n},immediate:!0}},data:function(){return{val:""}},methods:{input:function(n){this.$emit("update:value",n.detail.value),this.$emit("input",n.detail.value)}}};t.default=a},e99f:function(n,t,e){"use strict";e.r(t);var a=e("c726"),u=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=u.a}}]);