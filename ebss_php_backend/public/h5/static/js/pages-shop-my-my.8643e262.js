(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-my-my"],{"03ca":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tj-sction .tj-item[data-v-637526a3], .order-section .order-item[data-v-637526a3]{display:flex;flex-direction:column;justify-content:center;align-items:center}.tj-sction[data-v-637526a3], .order-section[data-v-637526a3]{display:flex;justify-content:space-around;align-content:center;background:#fff;border-radius:%?26?%}.container[data-v-637526a3]{background:linear-gradient(180deg,#f32779,#fff)}.user-section[data-v-637526a3]{padding:%?40?% %?30?% 0;position:relative}.user-section .header-actions[data-v-637526a3]{display:flex;align-items:center;justify-content:space-around;margin:%?12?% 0;color:#fff}.user-section .header-actions .action-item[data-v-637526a3]{text-align:center}.user-section .header-actions .action-item i[data-v-637526a3]{font-size:%?48?%}.user-section .header-actions .action-item uni-view[data-v-637526a3]{font-size:%?24?%;margin:%?8?%}.user-section .header-ad uni-image[data-v-637526a3]{width:%?702?%;height:auto}.user-section .header-news[data-v-637526a3]{display:flex;margin-top:%?12?%;height:%?80?%;align-items:center;background:url(https://file.vivivi.club/static/shop/news-bg.png) no-repeat 50%;background-size:100% 100%;border-radius:%?24?%;font-size:%?28?%;padding-left:%?180?%}.user-section .header-news .news-content[data-v-637526a3]{width:%?420?%;overflow:hidden}.user-section .header-news .news-content uni-text[data-v-637526a3]{color:#ff3121}.user-section .header-news .news-more[data-v-637526a3]{color:#666;flex-grow:1;text-align:center;border-left:1px solid #ddd}.user-info-box[data-v-637526a3]{height:%?180?%;display:flex;align-items:center;position:relative;z-index:1}.user-info-box .portrait[data-v-637526a3]{width:%?130?%;height:%?130?%;border:%?5?% solid #fff;border-radius:50%}.user-info-box .username[data-v-637526a3]{font-size:%?38?%;color:#303133;margin-left:%?20?%}.cover-container[data-v-637526a3]{padding:0 %?30?%;position:relative;padding-bottom:%?20?%;margin-top:10px}.tj-sction .tj-item[data-v-637526a3]{flex-direction:column;height:%?140?%;font-size:%?24?%;color:#75787d}.tj-sction .num[data-v-637526a3]{font-size:%?32?%;color:#303133;margin-bottom:%?8?%}.order-section[data-v-637526a3]{padding:%?28?% 0;margin-top:%?20?%}.order-section .order-item[data-v-637526a3]{width:%?120?%;height:%?120?%;border-radius:%?10?%;font-size:%?24?%;color:#303133}.order-section .QQ811565456[data-v-637526a3]{font-size:%?48?%;margin-bottom:%?18?%;color:#fa436a}.order-section .hewei-shouhoutuikuan[data-v-637526a3]{font-size:%?44?%}.history-section[data-v-637526a3]{padding:10px %?10?%;margin-top:%?20?%;background:#fff;border-radius:%?10?%}.history-section .sec-header[data-v-637526a3]{display:flex;align-items:center;font-size:%?28?%;color:#303133;line-height:%?40?%}.history-section .sec-header .QQ811565456[data-v-637526a3]{font-size:%?44?%;color:#5eba8f;margin-right:%?16?%}.history-section .h-list[data-v-637526a3]{white-space:nowrap;padding:0 %?10?%}.history-section .h-list uni-image[data-v-637526a3]{display:inline-block;width:%?160?%;height:%?160?%;margin-right:%?20?%;border-radius:%?10?%}.nav-section[data-v-637526a3]{margin-top:%?22?%}.nav-section .item[data-v-637526a3]{background:#fff;margin-bottom:4px;border-radius:%?24?%;padding:10px %?30?%}.nav-section .item .hewei-xiangyou1[data-v-637526a3]{color:#c0c4cc}',""]),t.exports=e},"0b6b":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"user-section"},[i("StatusBar"),i("v-uni-view",{staticClass:"user-info-box"},[i("v-uni-view",{staticClass:"portrait-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/edit")}}},[t.user_info?i("v-uni-image",{staticStyle:{width:"65px",height:"65px",border:"1px solid #ffffff","border-radius":"50%"},attrs:{src:t.staticURL()+"/"+(t.user_info&&t.user_info.avatar_img?t.user_info.avatar_img:t.configs().logo_img)}}):t._e()],1),i("v-uni-view",{staticClass:"info-box"},[t.user_info?i("v-uni-text",{staticClass:"username",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/edit")}}},[t._v(t._s(t.user_info.nickname||t.user_info.username||t.user_info.tel))]):t._e()],1),i("v-uni-text",{staticClass:"QQ811565456 hewei-shezhi",staticStyle:{position:"absolute",top:"5px",right:"0","font-size":"18px",padding:"10px","font-weight":"700"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/site/set")}}})],1),i("v-uni-view",{staticClass:"header-actions"},[i("v-uni-view",{staticClass:"action-item"},[i("i",{staticClass:"QQ811565456 hewei-shoucang"}),i("v-uni-view",[t._v("商品收藏")])],1),i("v-uni-view",{staticClass:"action-item"},[i("i",{staticClass:"QQ811565456 hewei-dianpu"}),i("v-uni-view",[t._v("店铺关注")])],1),i("v-uni-view",{staticClass:"action-item"},[i("i",{staticClass:"QQ811565456 hewei-fenlei1"}),i("v-uni-view",[t._v("我的频道")])],1),i("v-uni-view",{staticClass:"action-item"},[i("i",{staticClass:"QQ811565456 hewei-history"}),i("v-uni-view",[t._v("浏览记录")])],1)],1),i("v-uni-view",{staticClass:"header-ad",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/user/grade")}}},[i("v-uni-image",{attrs:{src:t.staticURL()+"/static/shop/plus-vip-ad.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"header-news"},[i("v-uni-view",{staticClass:"news-content line-1"},[i("v-uni-text",[t._v("买贵双倍赔")]),t._v(",全网低价放心购!")],1),i("v-uni-view",{staticClass:"news-more"},[t._v("更多")])],1)],1),i("v-uni-view",{staticClass:"cover-container",style:[{transform:t.coverTransform,transition:t.coverTransition}],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchend.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tj-sction"},[i("v-uni-view",{staticClass:"tj-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/wallet")}}},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.user_info&&t.user_info.money||0))]),i("v-uni-text",[t._v("余额")])],1),i("v-uni-view",{staticClass:"tj-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/coupon/list?navState=user_coupon&couponStatus=1")}}},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.coupon_total))]),i("v-uni-text",[t._v("优惠券")])],1),i("v-uni-view",{staticClass:"tj-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/integral_log")}}},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.user_info&&t.user_info.integral||0))]),i("v-uni-text",[t._v("积分")])],1)],1),i("v-uni-view",{staticClass:"order-section"},[i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/order/orderlist?status=")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-dingdan"}),i("v-uni-text",[t._v("全部订单")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/order/orderlist?status=3")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-daifukuan"}),i("v-uni-text",[t._v("待付款")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/order/orderlist?status=5")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-daishouhuo"}),i("v-uni-text",[t._v("待收货")])],1),i("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/order/orderlist?status=8")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-tuikuan"}),i("v-uni-text",[t._v("退款/售后")])],1)],1),t.goods_view.length?i("v-uni-view",{staticClass:"history-section icon"},[i("v-uni-view",{staticClass:"sec-header"},[i("v-uni-text",{staticClass:"QQ811565456 hewei-lishijilu"}),i("v-uni-text",[t._v("浏览历史")])],1),i("v-uni-scroll-view",{staticClass:"h-list",attrs:{"scroll-x":!0}},t._l(t.goods_view,(function(e,n){return i("v-uni-image",{key:n,staticStyle:{width:"130rpx",height:"130rpx"},attrs:{src:t.staticURL()+"/"+e.cover_img,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/shop/goods/detail?goods_id="+e.goods_id)}}})})),1)],1):t._e(),i("v-uni-view",{staticClass:"nav-section"},[i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/addr/addrlist")}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-shouhuodizhi"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("我的地址")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1),i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.callTel(t.configs().tel)}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-kefu"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("联系客服")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1),0==t.configs().is_review?i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_mch.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-shanghupiliangruzhu"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("商家入驻")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1):t._e(),0==t.configs().is_review?i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/mch/favourlist")}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-31shoucangxuanzhong"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("收藏商家")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1):t._e(),t.has(t.mch_list)&&0==t.configs().is_review?i("v-uni-view",{staticClass:"item justify-between align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/mch/index")}}},[i("v-uni-view",{staticClass:"justify-between align-center"},[i("v-uni-view",{staticClass:"QQ811565456 hewei-fenlei1"}),i("v-uni-view",{staticStyle:{"margin-left":"5px"}},[t._v("商户管理")])],1),i("v-uni-view",{staticClass:"QQ811565456 hewei-xiangyou1"})],1):t._e()],1)],1),i("ShowLogin",{attrs:{is_show_login:t.is_show_login}}),i("v-uni-view",{style:{height:t.constant.bottom_bar_height+"rpx"}},[i("BottomBar",{attrs:{barlists:t.barlists},model:{value:t.barIndex,callback:function(e){t.barIndex=e},expression:"barIndex"}})],1)],1)},a=[]},"0cd0":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.randomString=e.has=void 0;var n=i("6bde");e.randomString=function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhjkmnprstwxyz2345678",i=e.length,n="",a=0;a<t;a++)n+=e.charAt(Math.floor(Math.random()*i));return n};e.has=function(t){return!(0,n.isNull)(t)&&(!(0,n.isUndefined)(t)&&((0,n.isArray)(t)?t.length>0:!(0,n.isEmptyObj)(t)&&!!t))}},"13e5":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("Modal",{attrs:{mask_click:!1},scopedSlots:t._u([{key:"body",fn:function(){return[i("v-uni-view",{staticStyle:{padding:"10px",width:"400upx"}},[i("v-uni-view",{staticStyle:{"text-align":"center","margin-bottom":"10px"}},[t._v("您暂未登录~")]),i("v-uni-view",{staticClass:"btn-primary",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/tel_login")}}},[t._v("去登录")])],1)]},proxy:!0}]),model:{value:t.is_show_login,callback:function(e){t.is_show_login=e},expression:"is_show_login"}})],1)},a=[]},"1c0d":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={barlists:[{pagePath:"/pages/shop/index/home",icon:"hewei-shouye",text:"首页"},{pagePath:"/pages/shop/category/category",icon:"hewei-fenlei",text:"分类"},{pagePath:"/pages/shop/cart/cart",icon:"hewei-gouwuche",text:"购物车"},{pagePath:"/pages/shop/my/my",icon:"hewei-wode",text:"我的"}],coupon_type:{1:"满减",2:"打折",3:"无门槛"}};e.default=n},"25aa":function(t,e,i){"use strict";i.r(e);var n=i("e1e8"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"583f":function(t,e,i){"use strict";i.r(e);var n=i("7702"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},5859:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.configs=void 0;e.configs=function(){var t=uni.getStorageSync("configs");return t}},"5e3c":function(t,e,i){"use strict";i.r(e);var n=i("c0a5"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"5fa9":function(t,e,i){"use strict";var n=i("ca83"),a=i.n(n);a.a},"6bde":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.isUndefined=e.isNull=e.isEmptyObj=e.isArray=void 0,i("dc8a");e.isNull=function(t){return!t&&"undefined"!=typeof t&&0!=t};e.isUndefined=function(t){return"undefined"==typeof t};e.isArray=function(t){return t instanceof Array};e.isEmptyObj=function(t){return Object.keys(t).length>0}},7702:function(t,e,i){"use strict";(function(t){i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Modal",props:{value:{type:Boolean,default:!1},mask_click:{type:Boolean,default:!1},location:{type:String,default:"center"}},data:function(){return{}},watch:{value:{handler:function(e,i){t.log(11,e),e?this.open():this.close()},immediate:!1}},mounted:function(){},methods:{open:function(){this.$refs.popup.open()},change:function(e){t.log(111),this.$emit("update:value",e.show),this.$emit("input",e.show)},close:function(){this.$refs.popup.close()}}};e.default=n}).call(this,i("ba7c")["default"])},"82dc":function(t,e,i){"use strict";i.r(e);var n=i("0b6b"),a=i("25aa");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("5fa9");var o=i("828b"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"637526a3",null,!1,n["a"],void 0);e["default"]=c.exports},"9dfb":function(t,e,i){"use strict";var n=i("bdaa"),a=i.n(n);a.a},a5b9:function(t,e,i){"use strict";i.r(e);var n=i("b1ad"),a=i("583f");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("9dfb");var o=i("828b"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0e8774a7",null,!1,n["a"],void 0);e["default"]=c.exports},a6bc:function(t,e,i){"use strict";i.r(e);var n=i("13e5"),a=i("5e3c");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o=i("828b"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"40623599",null,!1,n["a"],void 0);e["default"]=c.exports},b1ad:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("b993").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-popup",{ref:"popup",attrs:{"mask-background-color":"rgba(0,0,0,0.4)",type:t.location,"safe-area":!1,"mask-click":t.mask_click},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"main-container"},[t._t("body")],2)],1)},s=[]},bdaa:function(t,e,i){var n=i("f302");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("216e6953",n,!0,{sourceMap:!1,shadowMode:!1})},c0a5:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("a5b9")),s={name:"ShowLogin",components:{Modal:a.default},props:{is_show_login:{type:Boolean,default:!1}},data:function(){return{}},watch:{},created:function(){},methods:{}};e.default=s},ca83:function(t,e,i){var n=i("03ca");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("001ad0f5",n,!0,{sourceMap:!1,shadowMode:!1})},e1e8:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("1c0d")),s=i("e258"),o=i("5859"),c=i("0cd0"),r=n(i("a6bc")),u=0,l=0,v={components:{ShowLogin:r.default},data:function(){return{callTel:s.callTel,has:c.has,goods_view:[],mch_list:[],barIndex:4,coupon_total:0,user_info:null,is_show_login:!1,constant:this.constant,configs:o.configs,barlists:a.default.barlists,coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1}},onLoad:function(){},onShow:function(){var t=this;this.get("shop/page_my",{},{loading:!0}).then((function(e){var i=e.code,n=e.user_info,a=e.goods_view,s=e.coupon_total,o=e.mch_list;1==i&&(t.user_info=n,t.goods_view=a,t.coupon_total=s,t.mch_list=o),n||(t.is_show_login=!0)}))},methods:{go_mch:function(){this.nav("/pages/shop/mch/save")},coverTouchstart:function(t){this.coverTransition="transform .1s linear",u=t.touches[0].clientY},coverTouchmove:function(t){l=t.touches[0].clientY;var e=l-u;e<0?this.moving=!1:(this.moving=!0,e>=80&&e<100&&(e=80),e>0&&e<=80&&(this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}}};e.default=v},f302:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main-container[data-v-0e8774a7]{z-index:9999;background:#fff;border-radius:%?16?%;box-sizing:border-box;padding:%?24?%}',""]),t.exports=e}}]);