(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-banner-2"],{"0cb8":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{},[e("StatusBar"),e("v-uni-swiper",{staticStyle:{height:"290rpx"},attrs:{current:n.bannerIdx,"indicator-dots":!0,"previous-margin":"75rpx",circular:!0,"next-margin":"75rpx",autoplay:!0,interval:3e3,duration:500},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.bannerChange.apply(void 0,arguments)}}},n._l(n.banners,(function(t,i){return e("v-uni-swiper-item",{key:i},[e("v-uni-view",{staticClass:"swiper-item"},[e("v-uni-view",{staticClass:"align-center justify-center",staticStyle:{height:"290rpx",width:"100%"}},[e("v-uni-image",{staticStyle:{width:"100%","border-radius":"20upx",height:"290rpx",transition:"all ease 0.3s"},style:i==n.bannerIdx?"height:290rpx;":"height:250rpx",attrs:{src:t}})],1)],1)],1)})),1)],1)},r=[]},"0f99":function(n,t,e){"use strict";var i=e("e901"),r=e.n(i);r.a},"20cb":function(n,t,e){var i=e("c86c");t=i(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper-item[data-v-41375692]{overflow:hidden}.swiper-item uni-image[data-v-41375692]{width:100%;height:100%;border-radius:%?10?%}',""]),n.exports=t},"4f71":function(n,t,e){"use strict";e.r(t);var i=e("bc7f"),r=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=r.a},a25b:function(n,t,e){"use strict";e.r(t);var i=e("0cb8"),r=e("4f71");for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("0f99");var s=e("828b"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"41375692",null,!1,i["a"],void 0);t["default"]=u.exports},bc7f:function(n,t,e){"use strict";e("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{bannerIdx:0,banners:["/static/logo.jpg","/static/logo.jpg","/static/logo.jpg"]}},methods:{bannerChange:function(n){this.bannerIdx=n.detail.current}}}},e901:function(n,t,e){var i=e("20cb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var r=e("967d").default;r("3bb9e11c",i,!0,{sourceMap:!1,shadowMode:!1})}}]);