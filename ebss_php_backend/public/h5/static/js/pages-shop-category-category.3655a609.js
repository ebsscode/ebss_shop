(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-category-category"],{"09bb":function(t,e,a){"use strict";a.r(e);var n=a("88b7"),i=a("8aee");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f1aa");var o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"49e84b0d",null,!1,n["a"],void 0);e["default"]=c.exports},"0e5a":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 通用 */\r\n/* 文字尺寸 */\r\n/* 页面配置 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-49e84b0d],\r\n.content[data-v-49e84b0d]{background-color:#f8f8f8;display:flex}body.?%PAGE?%[data-v-49e84b0d]{background-color:#f8f8f8}.left-aside[data-v-49e84b0d]{flex-shrink:0;width:%?200?%;height:100%;background-color:#fff}.f-item[data-v-49e84b0d]{display:flex;align-items:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#606266;position:relative}.f-item.active[data-v-49e84b0d]{color:#27c2f3;background:#f8f8f8}.f-item.active[data-v-49e84b0d]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?36?%;width:%?8?%;background-color:#27c2f3;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-49e84b0d]{flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-49e84b0d]{display:flex;align-items:center;height:%?70?%;padding-top:%?8?%;font-size:%?28?%;color:#303133}.t-list[data-v-49e84b0d]{display:flex;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-49e84b0d]:after{content:"";flex:99;height:0}.t-item[data-v-49e84b0d]{flex-shrink:0;display:flex;justify-content:center;align-items:center;flex-direction:column;width:%?176?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.t-item uni-image[data-v-49e84b0d]{width:%?140?%;height:%?140?%}',""]),t.exports=e},"2bed":function(t,e,a){var n=a("0e5a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4f48e8b7",n,!0,{sourceMap:!1,shadowMode:!1})},"88b7":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{height:"100vh"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"flex-row",style:{height:t.content_height}},[a("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},[a("StatusBar"),t._l(t.categorys,(function(e,n){return a("v-uni-view",{key:n,staticClass:"f-item b-b",class:{active:e.category_id==t.currentId},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabtap(e)}}},[t._v(t._s(e.cat_name))])}))],2),a("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0,"scroll-top":t.tabScrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.asideScroll.apply(void 0,arguments)}}},[a("StatusBar"),t.categorys.length?t._l(t.categorys,(function(e,n){return a("v-uni-view",{key:n,staticClass:"s-list",attrs:{id:"main-"+e.category_id}},[a("v-uni-text",{staticClass:"s-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToList(e.category_id)}}},[t._v(t._s(e.cat_name))]),a("v-uni-view",{staticClass:"t-list"},[e.children&&e.children.length?t._l(e.children,(function(e,n){return a("v-uni-view",{key:n,staticClass:"t-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToList(e.category_id)}}},[a("v-uni-image",{staticStyle:{width:"70px",height:"70px"},attrs:{src:t.baseURL+"/"+e.cat_img}}),a("v-uni-text",[t._v(t._s(e.cat_name))])],1)})):t._e()],2)],1)})):t._e()],2)],1)],1),a("v-uni-view",{style:{height:t.constant.bottom_bar_height+"rpx"}},[a("BottomBar",{attrs:{barlists:t.barlists},model:{value:t.barIndex,callback:function(e){t.barIndex=e},expression:"barIndex"}})],1)],1)},i=[]},"88d3":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={barlists:[{pagePath:"/pages/shop/index/home",icon:"icon-shouye",text:"首页"},{pagePath:"/pages/shop/category/category",icon:"icon-fenlei",text:"分类"},{pagePath:"/pages/shop/cart/cart",icon:"icon-gouwuche",text:"购物车"},{pagePath:"/pages/shop/my/my",icon:"icon-wode",text:"我的"}],coupon_type:{1:"满减",2:"打折",3:"无门槛"}};e.default=n},"8aee":function(t,e,a){"use strict";a.r(e);var n=a("dfb8"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},dfb8:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("4de4"),a("d3b7"),a("c740"),a("26e9"),a("159b"),a("ac1f");var i=n(a("c7eb")),r=n(a("1da1")),o=n(a("88d3")),c={data:function(){return{constant:this.constant,baseURL:this.baseURL,barlists:o.default.barlists,content_height:0,barIndex:2,sizeCalcState:!1,tabScrollTop:0,currentId:1,categorys:[]}},onLoad:function(){this.getData()},mounted:function(){this.content_height="calc(100vh - ".concat(this.constant.bottom_bar_height,"rpx)")},methods:{getData:function(){var t=this;return(0,r.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.post("category/list",{}).then((function(e){var a=e.code,n=e.list;1==a&&(t.categorys=n.filter((function(t){return t.children&&t.children.length})),t.currentId=t.categorys[0].category_id)}));case 1:case"end":return e.stop()}}),e)})))()},tabtap:function(e){this.sizeCalcState||this.calcSize(),this.currentId=e.category_id;var a=this.categorys.findIndex((function(t){return t.category_id===e.category_id}));t.log("index",a),this.tabScrollTop=this.categorys[a].top+5},asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,a=this.categorys.filter((function(t){return t.top<=e})).reverse();a.length>0&&(this.currentId=a[0].category_id)},calcSize:function(){var t=0;this.categorys.forEach((function(e){var a=uni.createSelectorQuery().select("#main-"+e.category_id);a.fields({size:!0},(function(a){e.top=t,t+=a.height,e.bottom=t})).exec()})),this.sizeCalcState=!0},navToList:function(t){this.nav("/pages/shop/goods/goodslist?category_id="+t)}}};e.default=c}).call(this,a("5a52")["default"])},f1aa:function(t,e,a){"use strict";var n=a("2bed"),i=a.n(n);i.a}}]);