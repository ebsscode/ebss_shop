(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-mch-detail"],{3139:function(t,i,e){"use strict";e.r(i);var n=e("33c4"),a=e("c1af");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("b542");var s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2c570e34",null,!1,n["a"],void 0);i["default"]=c.exports},"33c4":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticStyle:{position:"relative"}},[t.detail?[e("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":!0,autoplay:!0,interval:2e3,duration:1500}},t._l(t.detail.imgs,(function(i,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-image",{staticClass:"img",staticStyle:{width:"100%",height:"30vh"},attrs:{src:t.baseURL+"/"+i,alt:""}})],1)})),1),e("v-uni-view",{staticStyle:{padding:"10px 20px","background-color":"#f8f8f8","min-height":"70vh"}},[e("v-uni-view",{staticClass:"list-item"},[e("v-uni-view",{staticClass:"north-container u-border-bottom"},[e("v-uni-image",{attrs:{src:t.baseURL+"/"+t.detail.logo_img,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"base-info-container"},[e("v-uni-view",{staticClass:"name align-center"},[e("v-uni-text",[t._v(t._s(t.detail.name))]),e("v-uni-text",{staticClass:"myicon icon-c002dianhua text-color",staticStyle:{"margin-left":"5px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.call_kefu(t.detail.tel)}}})],1),e("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#909399","margin-top":"5px"}},[t._v(t._s(t.detail.address))]),e("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#909399","margin-top":"5px"}},[t._v(t._s(t.detail.introduce))])],1),e("v-uni-view",{staticClass:"action-container"},[e("v-uni-view",{staticClass:"tag-container flex-col align-end"},[e("v-uni-view",{staticClass:"align-center justify-between"},[t.detail.favour_info?e("v-uni-text",{staticClass:"myicon icon-31shoucangxuanzhong",staticStyle:{color:"orange"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.favour.apply(void 0,arguments)}}}):e("v-uni-text",{staticClass:"myicon icon-shoucang",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.favour.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"text-color border-color",staticStyle:{"border-radius":"50px",padding:"4px 10px","margin-top":"10px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openMap.apply(void 0,arguments)}}},[t._v("去这里")])],1),e("v-uni-view",{staticClass:"distance"},[t._v(t._s(t.detail.distance)+"km")])],1)],1)],1),e("v-uni-view",{staticStyle:{"font-size":"18px","font-weight":"700","margin-top":"20px"}},[t._v("简介")]),e("v-uni-view",{staticStyle:{"font-size":"14px",background:"#ffffff",padding:"10px","border-radius":"10px","margin-top":"20px"}},[t._v(t._s(t.detail.title))]),t.goods.length?[e("v-uni-view",{staticStyle:{"font-size":"18px","font-weight":"700","margin-top":"20px"}},[t._v("商品")]),e("v-uni-view",{staticStyle:{"font-size":"14px",background:"#ffffff",padding:"10px","border-radius":"10px","margin-top":"20px"}},t._l(t.goods,(function(i){return e("v-uni-view",{key:i.goods_id,staticClass:"goods-list"},[e("v-uni-view",{staticClass:"goods-box flex-row align-items",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/goods/detail?goods_id="+i.goods_id)}}},[e("v-uni-image",{staticClass:"goods_img",attrs:{"lazy-load":!0,"fade-show":!0,src:t.baseURL+"/"+i.cover_img,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"flex-col justify-between",staticStyle:{"margin-left":"8px"}},[e("v-uni-view",{staticClass:"goods-title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"align-end"},[e("v-uni-view",{staticClass:"price"},[t._v(t._s(i.price))]),e("v-uni-view",{staticClass:"origin-price"},[t._v(t._s(i.original_price))])],1)],1)],1)],1)})),1)]:t._e()],2),e("v-uni-view",{staticStyle:{height:"100px"}})]:t._e(),e("v-uni-view",{staticClass:"justify-between",staticStyle:{position:"fixed",width:"100%",background:"#ffffff",padding:"10px 20px",bottom:"0"}},[e("v-uni-text",{staticClass:"btn-primary",staticStyle:{background:"#f8f8f8",color:"#504d5d"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/shop/mch/comment?mch_id="+t.mch_id)}}},[t._v("去评价")])],1),e("v-uni-view",{staticClass:"myicon icon-folder-delete bg-color",staticStyle:{color:"#ffffff","border-radius":"100%",padding:"15px","font-size":"22px",position:"fixed",bottom:"125px",right:"20px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/water/mch/error?mch_id="+t.mch_id)}}})],2)},a=[]},"83f1":function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("99af");var a=n(e("2909")),o={data:function(){return{baseURL:this.baseURL,goods:[],detail:null,mch_id:null,location:uni.getStorageSync("location")}},onLoad:function(t){var i=this;t.mch_id&&(this.mch_id=t.mch_id,this.getData(),this.post("crud/list",{table:"goods",mch_id:this.mch_id,limit:10}).then((function(t){var e=t.code,n=t.paginate;1===e&&(i.goods=n.data)})))},methods:{openMap:function(){this.util.openLocation(this.detail.longitude,this.detail.latitude)},call_kefu:function(t){this.call_tel(t)},favour:function(){var t=this;this.post("crud/save",{table:"favour_mch",mch_id:this.mch_id}).then((function(i){var e=i.code,n=i.msg;1===e&&(t.success(n),t.getData())}))},getData:function(){var t=this;this.get("crud/detail",{table:"mch",table_id:this.mch_id}).then((function(i){var e=i.code,n=i.detail;1===e&&(n.distance=t.util.GetDistance(t.location.latitude,t.location.longitude,n.latitude,n.longitude),n.imgs=[n.logo_img].concat((0,a.default)(JSON.parse(n.imgs))),t.detail=n,uni.setNavigationBarTitle({title:n.name}))}))}}};i.default=o},b542:function(t,i,e){"use strict";var n=e("bd00"),a=e.n(n);a.a},bd00:function(t,i,e){var n=e("e424");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("11ecbd1c",n,!0,{sourceMap:!1,shadowMode:!1})},c1af:function(t,i,e){"use strict";e.r(i);var n=e("83f1"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},e424:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 通用 */\r\n/* 文字尺寸 */\r\n/* 页面配置 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods-list[data-v-2c570e34]{background:#fff;border-radius:%?20?%;padding:5px;margin-bottom:%?10?%}.goods-list .goods-box[data-v-2c570e34]{position:relative}.goods-list .goods-box .goods_img[data-v-2c570e34]{width:%?180?%;height:%?180?%;border-radius:%?6?%}.goods-list .goods-box .goods-title[data-v-2c570e34]{font-size:%?28?%;font-weight:500;color:#333;width:%?450?%;line-height:%?40?%}.goods-list .goods-box .describe-text[data-v-2c570e34]{font-size:%?24?%;width:%?450?%;color:#a8700d}.goods-list .goods-box .price[data-v-2c570e34]{color:#fa3534;font-weight:600}.goods-list .goods-box .price[data-v-2c570e34]::before{content:"￥";font-size:%?20?%}.goods-list .goods-box .origin-price[data-v-2c570e34]{color:#c8c9cc;font-size:%?24?%;text-decoration:line-through}.goods-list .goods-box .origin-price[data-v-2c570e34]::before{content:"￥";font-size:%?20?%}.list-item[data-v-2c570e34]{border-radius:%?16?%;background:#fff;width:100%;margin-top:%?10?%;padding:%?10?%;box-sizing:border-box}.list-item .north-container[data-v-2c570e34]{display:flex;align-items:center;padding-bottom:%?20?%}.list-item .north-container > uni-image[data-v-2c570e34]{flex-shrink:0;width:%?120?%;height:%?120?%;border-radius:%?10?%}.list-item .north-container .base-info-container[data-v-2c570e34]{flex-grow:1;height:%?160?%;margin:%?0?% %?20?%;display:flex;flex-direction:column;justify-content:flex-start}.list-item .north-container .base-info-container .name[data-v-2c570e34]{font-size:%?28?%;color:#27c2f3}.list-item .north-container .action-container[data-v-2c570e34]{width:%?140?%;flex-shrink:0;height:%?160?%;display:flex;flex-direction:column;justify-content:space-evenly}.list-item .north-container .action-container .tag-container[data-v-2c570e34]{display:flex}.list-item .north-container .action-container .distance[data-v-2c570e34]{font-size:%?24?%;color:#909399;text-align:center}',""]),t.exports=i}}]);