(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-takeorder-my-my"],{"0808":function(t,e,i){"use strict";var n=i("5e2d"),a=i.n(n);a.a},"45f5":function(t,e,i){"use strict";i.r(e);var n=i("d360"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"5e2d":function(t,e,i){var n=i("e1cd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("26dc7009",n,!0,{sourceMap:!1,shadowMode:!1})},"7bb5":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"user-section"},[i("StatusBar"),i("v-uni-view",{staticClass:"bg"}),i("v-uni-view",{staticClass:"user-info-box"},[i("v-uni-view",{staticClass:"portrait-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/edit")}}},[t.user_info?i("v-uni-image",{staticStyle:{width:"65px",height:"65px",border:"1px solid #ffffff","border-radius":"50%"},attrs:{src:t.staticURL()+"/"+(t.user_info&&t.user_info.avatar_img?t.user_info.avatar_img:t.configs.logo_img)}}):t._e()],1),i("v-uni-view",{staticClass:"info-box"},[t.user_info?i("v-uni-text",{staticClass:"username",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/edit")}}},[t._v(t._s(t.user_info.nickname||t.user_info.username||t.user_info.tel))]):t._e()],1),i("v-uni-text",{staticClass:"QQ811565456 hewei-shezhi",staticStyle:{position:"absolute",top:"5px",right:"0","font-size":"14px",padding:"10px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/site/set")}}})],1),i("v-uni-view",{staticClass:"vip-card-box"},[i("v-uni-view",{staticClass:"tit tag"},[i("v-uni-text",{staticClass:"QQ811565456 hewei-huiyuan1"}),t._v("Plus会员")],1),i("v-uni-view",{staticClass:"b-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/user/grade")}}},[t._v("立即开通")])],1)],1),i("v-uni-view",{staticClass:"cover-container",style:[{transform:t.coverTransform,transition:t.coverTransition}],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchend.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tj-sction"},[i("v-uni-view",{staticClass:"tj-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/wallet")}}},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.user_info&&t.user_info.money||0))]),i("v-uni-text",[t._v("余额")])],1),i("v-uni-view",{staticClass:"tj-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/coupon/list?navState=user_coupon&couponStatus=1")}}},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.coupon_total))]),i("v-uni-text",[t._v("优惠券")])],1),i("v-uni-view",{staticClass:"tj-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/integral_log")}}},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.user_info&&t.user_info.integral||0))]),i("v-uni-text",[t._v("积分")])],1)],1),i("v-uni-view",{staticClass:"order-section"},[i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/order/orderlist?status=")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-dingdan"}),i("v-uni-text",[t._v("全部订单")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/order/orderlist?status=3")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-daifukuan"}),i("v-uni-text",[t._v("待付款")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/order/orderlist?status=5")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-daishouhuo"}),i("v-uni-text",[t._v("待收货")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/order/orderlist?status=8")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-tuikuan"}),i("v-uni-text",[t._v("退款/售后")])],1)],1),t.goods_view.length?i("v-uni-view",{staticClass:"history-section icon"},[i("v-uni-view",{staticClass:"sec-header"},[i("v-uni-text",{staticClass:"QQ811565456 hewei-lishijilu"}),i("v-uni-text",[t._v("浏览历史")])],1),i("v-uni-scroll-view",{staticClass:"h-list",attrs:{"scroll-x":!0}},t._l(t.goods_view,(function(e,n){return i("v-uni-image",{key:n,staticStyle:{width:"130rpx",height:"130rpx"},attrs:{src:t.staticURL()+"/"+e.cover_img,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/shop/goods/detail?goods_id="+e.goods_id)}}})})),1)],1):t._e(),i("v-uni-view",{staticClass:"nav-section"},[i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/addr/addrlist")}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-shouhuodizhi"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("我的地址")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1),i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.call_tel(t.configs.tel)}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-kefu"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("联系客服")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1),0==t.configs.is_review?i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_mch.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-shanghupiliangruzhu"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("商家入驻")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1):t._e(),0==t.configs.is_review?i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/mch/favourlist")}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-31shoucangxuanzhong"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("收藏商家")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1):t._e()],1)],1),i("v-uni-view",{style:{height:t.constant.bottom_bar_height+"rpx"}},[i("BottomBar",{attrs:{barlists:t.barlists},model:{value:t.barIndex,callback:function(e){t.barIndex=e},expression:"barIndex"}})],1)],1)},a=[]},"9d4e":function(t,e,i){"use strict";i.r(e);var n=i("7bb5"),a=i("45f5");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0808");var s=i("828b"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"ffb807be",null,!1,n["a"],void 0);e["default"]=r.exports},d360:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f96a")),o=0,s=0,r={data:function(){return{goods_view:[],barIndex:4,coupon_total:0,user_info:null,constant:this.constant,configs:uni.getStorageSync("configs"),barlists:a.default.barlists,coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1}},onLoad:function(){},onShow:function(){var t=this;this.get("shop/page_my").then((function(e){var i=e.code,n=e.user_info,a=e.goods_view,o=e.coupon_total;1==i&&(t.user_info=n,t.goods_view=a,t.coupon_total=o)}))},methods:{go_mch:function(){this.nav("/pages/shop/mch/save")},coverTouchstart:function(t){this.coverTransition="transform .1s linear",o=t.touches[0].clientY},coverTouchmove:function(t){s=t.touches[0].clientY;var e=s-o;e<0?this.moving=!1:(this.moving=!0,e>=80&&e<100&&(e=80),e>0&&e<=80&&(this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}}};e.default=r},e1cd:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tj-sction .tj-item[data-v-ffb807be], .order-section .order-item[data-v-ffb807be]{display:flex;flex-direction:column;justify-content:center;align-items:center}.tj-sction[data-v-ffb807be], .order-section[data-v-ffb807be]{display:flex;justify-content:space-around;align-content:center;background:#fff;border-radius:%?10?%}.user-section[data-v-ffb807be]{height:%?520?%;padding:%?40?% %?30?% 0;position:relative}.user-section .bg[data-v-ffb807be]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-filter:blur(1px);filter:blur(1px);opacity:.7;background:linear-gradient(180deg,#f32779,#fff)}.user-info-box[data-v-ffb807be]{height:%?180?%;display:flex;align-items:center;position:relative;z-index:1}.user-info-box .portrait[data-v-ffb807be]{width:%?130?%;height:%?130?%;border:%?5?% solid #fff;border-radius:50%}.user-info-box .username[data-v-ffb807be]{font-size:%?38?%;color:#303133;margin-left:%?20?%}.vip-card-box[data-v-ffb807be]{display:flex;justify-content:space-between;color:#f7d680;background:linear-gradient(left,rgba(0,0,0,.7),rgba(0,0,0,.8));border-radius:%?16?% %?16?% 0 0;overflow:hidden;position:relative;padding:%?20?% %?24?%}.vip-card-box .tag[data-v-ffb807be]{position:relative;border-radius:4px 4px 4px 0;color:#fff;padding:2px 6px;font-size:10px;line-height:16px;background:linear-gradient(to right bottom,hsla(0,0%,100%,.4),transparent) var(--bg,#f32779);background-blend-mode:soft-light}.vip-card-box .tag[data-v-ffb807be]::before{content:"";position:absolute;width:3px;height:3px;left:0;bottom:-3px;background-color:inherit;-webkit-filter:brightness(.7);filter:brightness(.7);-webkit-clip-path:polygon(0 0,100% 0,100% 100%);clip-path:polygon(0 0,100% 0,100% 100%)}.vip-card-box .b-btn[data-v-ffb807be]{position:relative;margin-right:5px}.vip-card-box .b-btn[data-v-ffb807be]:after{content:" ";border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:12px solid #f0c61a;position:absolute;bottom:17px;right:-13px;font-size:10px}.vip-card-box .tit[data-v-ffb807be]{font-size:%?30?%;color:#f7d680;margin-bottom:%?28?%}.vip-card-box .tit .QQ811565456[data-v-ffb807be]{color:#f6e5a3;margin-right:%?16?%}.cover-container[data-v-ffb807be]{background:#f8f8f8;margin-top:%?-150?%;padding:0 %?30?%;position:relative;background:#f5f5f5;padding-bottom:%?20?%}.tj-sction .tj-item[data-v-ffb807be]{flex-direction:column;height:%?140?%;font-size:%?24?%;color:#75787d}.tj-sction .num[data-v-ffb807be]{font-size:%?32?%;color:#303133;margin-bottom:%?8?%}.order-section[data-v-ffb807be]{padding:%?28?% 0;margin-top:%?20?%}.order-section .order-item[data-v-ffb807be]{width:%?120?%;height:%?120?%;border-radius:%?10?%;font-size:%?24?%;color:#303133}.order-section .QQ811565456[data-v-ffb807be]{font-size:%?48?%;margin-bottom:%?18?%;color:#fa436a}.order-section .hewei-shouhoutuikuan[data-v-ffb807be]{font-size:%?44?%}.history-section[data-v-ffb807be]{padding:10px %?10?%;margin-top:%?20?%;background:#fff;border-radius:%?10?%}.history-section .sec-header[data-v-ffb807be]{display:flex;align-items:center;font-size:%?28?%;color:#303133;line-height:%?40?%}.history-section .sec-header .QQ811565456[data-v-ffb807be]{font-size:%?44?%;color:#5eba8f;margin-right:%?16?%}.history-section .h-list[data-v-ffb807be]{white-space:nowrap;padding:0 %?10?%}.history-section .h-list uni-image[data-v-ffb807be]{display:inline-block;width:%?160?%;height:%?160?%;margin-right:%?20?%;border-radius:%?10?%}.nav-section[data-v-ffb807be]{padding:%?30?% 0 0;margin-top:%?20?%;border-radius:%?10?%}.nav-section .item[data-v-ffb807be]{background:#fff;margin-bottom:4px;border-radius:%?10?%;padding:10px %?30?%}.nav-section .item .hewei-xiangyou1[data-v-ffb807be]{color:#c0c4cc}',""]),t.exports=e},f96a:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={barlists:[{pagePath:"/pages/takeorder/index/home",icon:"hewei-shouye",text:"首页"},{pagePath:"/pages/shop/index/home",icon:"hewei-gouwuche",text:"商城"},{pagePath:"/pages/takeorder/index/push",icon:"hewei-jia",text:"发布"},{pagePath:"/pages/takeorder/my/my",icon:"hewei-wode",text:"我的"}]};e.default=n}}]);