(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-category-category"],{"0f9d":function(t,e,a){"use strict";var n=a("d472"),i=a.n(n);i.a},"1c0d":function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={barlists:[{pagePath:"/pages/shop/index/home",icon:"hewei-shouye",text:"首页"},{pagePath:"/pages/shop/category/category",icon:"hewei-fenlei",text:"分类"},{pagePath:"/pages/shop/cart/cart",icon:"hewei-gouwuche",text:"购物车"},{pagePath:"/pages/shop/my/my",icon:"hewei-wode",text:"我的"}],coupon_type:{1:"满减",2:"打折",3:"无门槛"}};e.default=n},"39dc":function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-bfa76c22],\n.content[data-v-bfa76c22]{background-color:#f8f8f8;display:flex}body.?%PAGE?%[data-v-bfa76c22]{background-color:#f8f8f8}.left-aside[data-v-bfa76c22]{flex-shrink:0;width:%?200?%;height:100%;background-color:#fff}.f-item[data-v-bfa76c22]{display:flex;align-items:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#606266;position:relative}.f-item.active[data-v-bfa76c22]{color:#f32779;background:#f8f8f8}.f-item.active[data-v-bfa76c22]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?36?%;width:%?8?%;background-color:#f32779;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-bfa76c22]{flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-bfa76c22]{display:flex;align-items:center;height:%?70?%;padding-top:%?8?%;font-size:%?28?%;color:#303133}.t-list[data-v-bfa76c22]{display:flex;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-bfa76c22]:after{content:"";flex:99;height:0}.t-item[data-v-bfa76c22]{flex-shrink:0;display:flex;justify-content:center;align-items:center;flex-direction:column;width:%?176?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.t-item uni-image[data-v-bfa76c22]{width:%?140?%;height:%?140?%}',""]),t.exports=e},a9a2:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{height:"100vh"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"flex-row",style:{height:t.content_height}},[a("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},[a("StatusBar"),t._l(t.categorys,(function(e,n){return a("v-uni-view",{key:n,staticClass:"f-item b-b",class:{active:e.category_id==t.currentId},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabtap(e)}}},[t._v(t._s(e.cat_name))])}))],2),a("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0,"scroll-top":t.tabScrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.asideScroll.apply(void 0,arguments)}}},[a("StatusBar"),t.categorys.length?t._l(t.categorys,(function(e,n){return a("v-uni-view",{key:n,staticClass:"s-list",attrs:{id:"main-"+e.category_id}},[a("v-uni-text",{staticClass:"s-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToList(e.category_id)}}},[t._v(t._s(e.cat_name))]),a("v-uni-view",{staticClass:"t-list"},[e.children&&e.children.length?t._l(e.children,(function(e,n){return a("v-uni-view",{key:n,staticClass:"t-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToList(e.category_id)}}},[a("v-uni-image",{staticStyle:{width:"70px",height:"70px"},attrs:{src:t.staticURL()+"/"+e.cat_img}}),a("v-uni-text",[t._v(t._s(e.cat_name))])],1)})):t._e()],2)],1)})):t._e()],2)],1)],1),a("v-uni-view",{style:{height:t.constant.bottom_bar_height+"rpx"}},[a("BottomBar",{attrs:{barlists:t.barlists},model:{value:t.barIndex,callback:function(e){t.barIndex=e},expression:"barIndex"}})],1)],1)},i=[]},bd75:function(t,e,a){"use strict";a.r(e);var n=a("a9a2"),i=a("fad6");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("0f9d");var o=a("828b"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"bfa76c22",null,!1,n["a"],void 0);e["default"]=s.exports},d472:function(t,e,a){var n=a("39dc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("785d2bb9",n,!0,{sourceMap:!1,shadowMode:!1})},daec:function(t,e,a){"use strict";(function(t){a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("8f71"),a("bf0f"),a("bd06"),a("dc69"),a("2797"),a("5c47");var i=n(a("2634")),c=n(a("2fdc")),o=n(a("1c0d")),s={data:function(){return{constant:this.constant,barlists:o.default.barlists,content_height:0,barIndex:2,sizeCalcState:!1,tabScrollTop:0,currentId:1,categorys:[]}},onLoad:function(){this.getData()},mounted:function(){this.content_height="calc(100vh - ".concat(this.constant.bottom_bar_height,"rpx)")},methods:{getData:function(){var t=this;return(0,c.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.post("category/list",{},{loading:!0}).then((function(e){var a=e.code,n=e.list;1==a&&(t.categorys=n.filter((function(t){return t.children&&t.children.length})),t.currentId=t.categorys[0].category_id)}));case 1:case"end":return e.stop()}}),e)})))()},tabtap:function(e){this.sizeCalcState||this.calcSize(),this.currentId=e.category_id;var a=this.categorys.findIndex((function(t){return t.category_id===e.category_id}));t.log("index",a),this.tabScrollTop=this.categorys[a].top+5},asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,a=this.categorys.filter((function(t){return t.top<=e})).reverse();a.length>0&&(this.currentId=a[0].category_id)},calcSize:function(){var t=0;this.categorys.forEach((function(e){var a=uni.createSelectorQuery().select("#main-"+e.category_id);a.fields({size:!0},(function(a){e.top=t,t+=a.height,e.bottom=t})).exec()})),this.sizeCalcState=!0},navToList:function(t){this.nav("/pages/shop/goods/goodslist?category_id="+t)}}};e.default=s}).call(this,a("ba7c")["default"])},fad6:function(t,e,a){"use strict";a.r(e);var n=a("daec"),i=a.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a}}]);