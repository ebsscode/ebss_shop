(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-tel_login"],{2634:function(t,e,n){"use strict";var i=n("da37"),o=n.n(i);o.a},3252:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("StatusBar"),n("v-uni-view",{staticClass:"header bg-color"},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.baseURL+"/"+t.configs.logo_img}})],1),n("v-uni-view",{staticStyle:{"font-size":"22px","text-align":"center","font-weight":"550","margin-top":"10px"}},[t._v(t._s(t.configs.name))]),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"list-call"},[n("v-uni-text",{staticClass:"myicon icon-dianhua"}),n("v-uni-input",{staticClass:"sl-input",attrs:{type:"number",maxlength:"11",placeholder:"输入手机号"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),1==t.form.login_type?n("v-uni-view",{staticClass:"list-call"},[n("v-uni-text",{staticClass:"myicon icon-zhuanjifenshimingrenzheng"}),n("v-uni-input",{staticClass:"sl-input",attrs:{type:"text",maxlength:"32",placeholder:"输入密码",password:"true"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),2==t.form.login_type?n("v-uni-view",{staticClass:"list-call"},[n("v-uni-text",{staticClass:"myicon icon-zhuanjifenshimingrenzheng"}),n("v-uni-input",{staticClass:"sl-input",attrs:{type:"text",maxlength:"32",placeholder:"输入验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),n("v-uni-view",{staticClass:"bg-color",staticStyle:{padding:"5px 15px",color:"#ffffff","border-radius":"10px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendsms.apply(void 0,arguments)}}},[t._v("发送验证码")])],1):t._e()],1),n("v-uni-view",{staticClass:"button-login bg-color",attrs:{"hover-class":"button-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindLogin.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"agreenment text-color"},[1==t.form.login_type?n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.form.login_type=2}}},[t._v("验证码登录")]):t._e(),2==t.form.login_type?n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.form.login_type=1}}},[t._v("密码登录")]):t._e(),n("div",{staticStyle:{margin:"0 4px"}},[t._v("|")]),n("v-uni-navigator",{attrs:{url:"forget","open-type":"navigate"}},[t._v("忘记密码")])],1)],1)},o=[]},b254:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 通用 */\r\n/* 文字尺寸 */\r\n/* 页面配置 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-88f3e7e0]{display:flex;flex-direction:column;justify-content:center}.header[data-v-88f3e7e0]{width:88px;height:88px;box-shadow:0 12px 13px 0 #27c2f3;border-radius:50%;margin-top:30px;margin-left:auto;margin-right:auto}.header uni-image[data-v-88f3e7e0]{max-height:100%;border-radius:50%}.list[data-v-88f3e7e0]{display:flex;flex-direction:column;padding-top:30px;padding-left:70px;padding-right:70px}.list-call[data-v-88f3e7e0]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:50px;color:#333;border-bottom:.5px solid #e2e2e2}.list-call .img[data-v-88f3e7e0]{width:18px;height:18px}.list-call .sl-input[data-v-88f3e7e0]{flex:1;text-align:left;font-size:16px;margin-left:16px}.button-login[data-v-88f3e7e0]{color:#fff;font-size:20px;width:200px;height:50px;box-shadow:0 0 13px 0 rgba(164,217,228,.2);border-radius:50px;text-align:center;margin-left:auto;margin-right:auto;margin-top:30px;line-height:50px}.agreenment[data-v-88f3e7e0]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;margin-top:80px;text-align:center;height:40px;line-height:40px}',""]),t.exports=e},bc42:function(t,e,n){"use strict";n.r(e);var i=n("e3f59"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},da37:function(t,e,n){var i=n("b254");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7d9fc920",i,!0,{sourceMap:!1,shadowMode:!1})},e3f59:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{baseURL:this.baseURL,configs:uni.getStorageSync("configs"),form:{login_type:1,tel:"17096709660",password:"123456",code:"",username:""}}},onLoad:function(){},methods:{sendsms:function(){var t=this;11==this.form.tel.length?this.get("index/sendsms",{type:"login_code",tel:this.form.tel}).then((function(e){var n=e.code;1===n&&t.success("发送验证码成功！")})):this.error("手机号不正确")},bindLogin:function(){var t=this;11==this.form.tel.length?1==this.form.login_type&&this.form.password.length<6?this.error("密码不正确"):2!=this.form.login_type||this.form.code.length?this.util.getLocation().then((function(e){1===e.code&&t.sendRequest(e)})).catch((function(){t.sendRequest()})):this.error("请输入验证码"):this.error("手机号不正确")},sendRequest:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.get("login/tel_login",{login_type:this.form.login_type,tel:this.form.tel,code:this.form.code,password:this.form.password,username:this.form.username,latitude:e?e.latitude:"",longitude:e?e.longitude:""},{loading:!0}).then((function(e){var n=e.code,i=e.token,o=e.user_id;1===n&&(uni.setStorageSync("token",i),uni.setStorageSync("user_id",o),t.success("登录成功"),t.go_home())}))}}};e.default=i},ec35:function(t,e,n){"use strict";n.r(e);var i=n("3252"),o=n("bc42");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("2634");var a=n("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"88f3e7e0",null,!1,i["a"],void 0);e["default"]=r.exports}}]);