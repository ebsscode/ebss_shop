(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-goods-goodslist"],{"0797":function(t,a,e){var n=e("24e1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("967d").default;i("40ef0d04",n,!0,{sourceMap:!1,shadowMode:!1})},"0922":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},i=[]},"24e1":function(t,a,e){var n=e("c86c");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-3293c880], .content[data-v-3293c880]{background:#f8f8f8}body.?%PAGE?%[data-v-3293c880]{background:#f8f8f8}.bar-content[data-v-3293c880]{position:fixed;left:0;width:100%;background:#fff;z-index:10}.bar-content .navbar[data-v-3293c880]{display:flex;height:%?80?%;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06)}.bar-content .navbar .nav-item[data-v-3293c880]{flex:1;display:flex;justify-content:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.bar-content .navbar .nav-item.current[data-v-3293c880]{color:#f32779}.bar-content .navbar .nav-item.current[data-v-3293c880]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #f32779}.bar-content .navbar .p-box[data-v-3293c880]{display:flex;flex-direction:column}.bar-content .navbar .p-box .QQ811565456[data-v-3293c880]{display:flex;align-items:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#000}.bar-content .navbar .p-box .QQ811565456.active[data-v-3293c880]{color:#f32779}.bar-content .navbar .cate-item[data-v-3293c880]{display:flex;justify-content:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.bar-content .navbar .cate-item[data-v-3293c880]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 分类 */.cate-mask[data-v-3293c880]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:95;transition:.3s}.cate-mask .cate-content[data-v-3293c880]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);transform:translateX(100%);transition:.3s;padding-bottom:%?30?%}.cate-mask.none[data-v-3293c880]{display:none}.cate-mask.show[data-v-3293c880]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-3293c880]{-webkit-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-3293c880]{display:flex;flex-direction:column;height:100%}.cate-list .cate-item[data-v-3293c880]{display:flex;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .cate-item-c[data-v-3293c880]{display:flex;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.cate-list .cate-item-c[data-v-3293c880]:after{content:"";flex:99;height:0}.cate-list .cate-item-c .t-item[data-v-3293c880]{flex-shrink:0;display:flex;justify-content:center;align-items:center;flex-direction:column;width:%?157?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.cate-list .two[data-v-3293c880]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-3293c880]{color:#f32779}\n/* 商品列表 */.goods-list[data-v-3293c880]{display:flex;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.goods-list .goods-item[data-v-3293c880]{display:flex;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-3293c880]:nth-child(2n+1){margin-right:4%}.goods-list .title[data-v-3293c880]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .price-box[data-v-3293c880]{display:flex;align-items:center;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-3293c880]{font-size:%?32?%;color:#f32779;line-height:1}.goods-list .price[data-v-3293c880]:before{content:"￥";font-size:%?26?%}',""]),t.exports=a},"49bf":function(t,a,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("8f71"),e("bf0f"),e("aa9c");var i=n(e("b7c7")),o=n(e("2634")),s=n(e("2fdc")),r=n(e("4a41")),c={components:{LoadMore:r.default},data:function(){return{cateMaskState:0,headerPosition:"fixed",loadingType:"more",filterIndex:"sort_num",priceOrder:"desc",category_id:null,page:1,categorys:[],goodsList:[],goods_ids:[]}},onLoad:function(t){t.category_id&&(this.category_id=t.category_id),t.goods_ids&&(this.goods_ids=t.goods_ids.split(",")),this.loadCateList(),this.getData("add")},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.getData("refresh")},onReachBottom:function(){this.page++,this.getData("add")},methods:{loadCateList:function(){var t=this;return(0,s.default)((0,o.default)().mark((function a(){return(0,o.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.post("category/list",{}).then((function(a){var e=a.code,n=a.list;1==e&&(t.categorys=n.filter((function(t){return t.children&&t.children.length})))}));case 1:case"end":return a.stop()}}),a)})))()},getData:function(){var t=arguments,a=this;return(0,s.default)((0,o.default)().mark((function e(){var n,s;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:"add","add"!==n){e.next=7;break}if("nomore"!==a.loadingType){e.next=4;break}return e.abrupt("return");case 4:a.loadingType="loading",e.next=8;break;case 7:a.loadingType="more";case 8:"refresh"===n&&(a.goodsList=[],a.page=1),s={},s[a.filterIndex]=a.priceOrder,a.post("crud/list",{table:"shop_goods",sort:[s],category_id:a.category_id,page:a.page,table_ids:a.goods_ids}).then((function(t){var e,n=t.code,o=t.paginate;1===n&&((e=a.goodsList).push.apply(e,(0,i.default)(o.data)),o.data.length<o.per_page&&(a.loadingType="nomore"))}));case 12:case"end":return e.stop()}}),e)})))()},tabClick:function(t){this.filterIndex===t&&"price"!==t||(this.filterIndex=t,"price"===t&&(this.priceOrder="asc"===this.priceOrder?"desc":"asc"),"sort_num"===t&&(this.priceOrder="desc"),"sale_count"===t&&(this.priceOrder="desc"),uni.pageScrollTo({duration:800,scrollTop:0}),this.getData("refresh"))},toggleCateMask:function(t){var a=this,e="show"===t?10:300,n="show"===t?1:0;this.cateMaskState=2,setTimeout((function(){a.cateMaskState=n}),e)},changeCate:function(t){this.category_id=t.category_id,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.getData("refresh")},stopPrevent:function(){}}};a.default=c},"4a41":function(t,a,e){"use strict";e.r(a);var n=e("0922"),i=e("b9df");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("d1d2");var s=e("828b"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"25a6f004",null,!1,n["a"],void 0);a["default"]=r.exports},"81fd":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("StatusBar"),e("TopBar",{attrs:{title:"商品列表"}}),e("v-uni-view",{staticClass:"bar-content",style:{position:t.headerPosition}},[e("StatusBar"),e("v-uni-view",{staticClass:"navbar"},[e("v-uni-view",{staticClass:"nav-item",class:{current:"sort_num"==t.filterIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick("sort_num")}}},[t._v("综合排序")]),e("v-uni-view",{staticClass:"nav-item",class:{current:"sale_count"==t.filterIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick("sale_count")}}},[t._v("销量优先")]),e("v-uni-view",{staticClass:"nav-item",class:{current:"price"==t.filterIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick("price")}}},[e("v-uni-text",[t._v("价格")]),e("v-uni-view",{staticClass:"p-box"},[e("v-uni-text",{class:{"QQ811565456 hewei-xiangshang2":!0,active:"asc"===t.priceOrder&&"price"===t.filterIndex}}),e("v-uni-text",{class:{"QQ811565456 hewei-xiangxia2":!0,active:"desc"===t.priceOrder&&"price"===t.filterIndex}})],1)],1),e("v-uni-text",{staticClass:"cate-item QQ811565456 hewei-fenlei1",staticStyle:{"margin-right":"10rpx"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toggleCateMask("show")}}})],1)],1),e("v-uni-view",[e("StatusBar"),e("v-uni-view",{staticStyle:{height:"90rpx"}})],1),e("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"goods-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/goods/detail?goods_id="+a.goods_id)}}},[e("v-uni-image",{staticStyle:{width:"100%",height:"330rpx"},attrs:{src:t.staticURL()+"/"+a.cover_img,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(a.title))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v(t._s(a.price))]),e("v-uni-text",[t._v("已售 "+t._s(a.sale_count))])],1)],1)})),1),e("LoadMore",{attrs:{status:t.loadingType}}),e("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toggleCateMask.apply(void 0,arguments)}}},[e("StatusBar",{attrs:{styles:"background:#ffffff"}}),e("v-uni-view",{staticClass:"cate-content",on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.stopPrevent.apply(void 0,arguments)},touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.stopPrevent.apply(void 0,arguments)}}},[e("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":!0}},t._l(t.categorys,(function(a,n){return e("v-uni-view",{key:n},[e("v-uni-view",{staticClass:"cate-item two"},[t._v(t._s(a.cat_name))]),e("v-uni-view",{staticClass:"cate-item-c"},t._l(a.children,(function(a,n){return e("v-uni-view",{key:n,staticClass:"t-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCate(a)}}},[e("v-uni-image",{staticStyle:{width:"70rpx",height:"70rpx"},attrs:{src:t.staticURL()+"/"+a.cat_img}}),e("v-uni-text",[t._v(t._s(a.cat_name))])],1)})),1)],1)})),1)],1)],1)],1)},i=[]},8856:function(t,a,e){var n=e("c6eb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("967d").default;i("2811fa6a",n,!0,{sourceMap:!1,shadowMode:!1})},"9b0b":function(t,a,e){"use strict";var n=e("0797"),i=e.n(n);i.a},b108:function(t,a,e){"use strict";e.r(a);var n=e("81fd"),i=e("d66e");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("9b0b");var s=e("828b"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"3293c880",null,!1,n["a"],void 0);a["default"]=r.exports},b9df:function(t,a,e){"use strict";e.r(a);var n=e("e855"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},c6eb:function(t,a,e){var n=e("c86c");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-25a6f004]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-25a6f004]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-25a6f004]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-25a6f004]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-25a6f004]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-25a6f004 1.56s ease infinite;animation:load-data-v-25a6f004 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-25a6f004]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-25a6f004]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-25a6f004]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-25a6f004]:nth-child(4){top:11px;left:0}.load1[data-v-25a6f004],\n.load2[data-v-25a6f004],\n.load3[data-v-25a6f004]{height:24px;width:24px}.load2[data-v-25a6f004]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-25a6f004]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-25a6f004]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-25a6f004]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-25a6f004]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-25a6f004]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-25a6f004]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-25a6f004]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-25a6f004]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-25a6f004]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-25a6f004]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-25a6f004]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-25a6f004]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-25a6f004]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-25a6f004{0%{opacity:1}100%{opacity:.2}}',""]),t.exports=a},d1d2:function(t,a,e){"use strict";var n=e("8856"),i=e.n(n);i.a},d66e:function(t,a,e){"use strict";e.r(a);var n=e("49bf"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},e855:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};a.default=n}}]);