(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-cashier-pay"],{1143:function(a,t,i){"use strict";i.r(t);var e=i("b694"),n=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(a){i.d(t,a,(function(){return e[a]}))}(s);t["default"]=n.a},"41f6":function(a,t,i){"use strict";i.r(t);var e=i("5534"),n=i("1143");for(var s in n)["default"].indexOf(s)<0&&function(a){i.d(t,a,(function(){return n[a]}))}(s);i("607d");var o=i("828b"),c=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"65abb53f",null,!1,e["a"],void 0);t["default"]=c.exports},"52d7":function(a,t,i){var e=i("c20c");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var n=i("967d").default;n("4b99ee5e",e,!0,{sourceMap:!1,shadowMode:!1})},5534:function(a,t,i){"use strict";i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("v-uni-view",{staticClass:"app"},[i("StatusBar"),i("TopBar",{attrs:{title:"收银台"}}),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",[a._v("支付金额")]),i("v-uni-text",{staticClass:"price"},[a._v(a._s(a.paylog?a.paylog.money:"0.00"))])],1),i("v-uni-view",{staticClass:"pay-type-list"},["mp-weixin"==a.platform||a.isWeixinBrowser?i("v-uni-view",{staticClass:"type-item b-b",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payType="wxpay_jsapi"}}},[i("v-uni-text",{staticClass:"icon wx-http8s ebss-weixinzhifu"}),i("v-uni-view",{staticClass:"con"},[i("v-uni-text",{staticClass:"tit"},[a._v("微信支付")]),i("v-uni-text",[a._v("推荐使用微信支付")])],1),i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"wxpay_jsapi"==a.payType}})],1)],1):a._e(),"app"==a.platform?i("v-uni-view",{staticClass:"type-item b-b",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payType="wxpay_app"}}},[i("v-uni-text",{staticClass:"icon wx-http8s ebss-weixinzhifu"}),i("v-uni-view",{staticClass:"con"},[i("v-uni-text",{staticClass:"tit"},[a._v("微信支付")]),i("v-uni-text",[a._v("推荐使用微信支付")])],1),i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"wxpay_app"==a.payType}})],1)],1):a._e(),"web"==a.platform?i("v-uni-view",{staticClass:"type-item b-b",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payType="alipay_web"}}},[i("v-uni-text",{staticClass:"icon wx-http8s ebss-zhifubao"}),i("v-uni-view",{staticClass:"con"},[i("v-uni-text",{staticClass:"tit"},[a._v("支付宝支付")])],1),i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"alipay_web"==a.payType}})],1)],1):a._e(),"app"==a.platform?i("v-uni-view",{staticClass:"type-item b-b",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payType="alipay_app"}}},[i("v-uni-text",{staticClass:"icon wx-http8s ebss-zhifubao"}),i("v-uni-view",{staticClass:"con"},[i("v-uni-text",{staticClass:"tit"},[a._v("支付宝支付")])],1),i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"alipay_app"==a.payType}})],1)],1):a._e(),"mp-alipay"==a.platform?i("v-uni-view",{staticClass:"type-item b-b",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payType="alipay_jsapi"}}},[i("v-uni-text",{staticClass:"icon wx-http8s ebss-zhifubao"}),i("v-uni-view",{staticClass:"con"},[i("v-uni-text",{staticClass:"tit"},[a._v("支付宝支付")])],1),i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"alipay_jsapi"==a.payType}})],1)],1):a._e(),i("v-uni-view",{staticClass:"type-item",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.payType="balance"}}},[i("v-uni-text",{staticClass:"icon wx-http8s ebss-zhanghuyue"}),i("v-uni-view",{staticClass:"con"},[i("v-uni-text",{staticClass:"tit"},[a._v("余额支付")]),i("v-uni-text",[a._v("可用余额 ¥"+a._s(a.user_info?a.user_info.money:"0.00"))])],1),i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:"",color:"#fa436a",checked:"balance"==a.payType}})],1)],1)],1),i("v-uni-text",{staticClass:"mix-btn",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.confirm.apply(void 0,arguments)}}},[a._v("确认支付")])],1)},n=[]},"607d":function(a,t,i){"use strict";var e=i("52d7"),n=i.n(e);n.a},b694:function(a,t,i){"use strict";(function(a){i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("d4b5"),i("c223");var e=i("ccfa"),n={data:function(){return{paylog:null,user_info:null,os:(0,e.getOS)(),platform:(0,e.getPlatform)(),isWeixinBrowser:(0,e.isWeixinBrowser)(),payType:"",orderInfo:{}}},computed:{},onLoad:function(a){var t=this;a.paylog_id?this.get("crud/detail",{paylog_id:a.paylog_id,table:"log_pay"}).then((function(a){var i=a.code,e=a.detail;1==i&&(t.paylog=e)})):this.error("支付处理出错")},onShow:function(){var a=this;this.get("user/user_info").then((function(t){var i=t.code,e=t.user_info;1==i&&(a.user_info=e)}))},methods:{get_success_url:function(){return"goods_order"==this.paylog.type?"/pages/shop/order/orderlist?status=4":"money_charge"==this.paylog.type?"/pages/common/my/wallet":""},confirm:function(){0!=this.paylog.money?this.payType?"balance"==this.payType&&this.user_info.money<this.paylog.money?this.error("余额不足"):"alipay_web"!=this.payType?"alipay_app"!=this.payType?"alipay_jsapi"!=this.payType?"wxpay_jsapi"!=this.payType?"wxpay_app"!=this.payType?"balance"!=this.payType||this.balance():this.error("敬请期待"):this.wxpay_jsapi():this.alipay_jsapi():this.alipay_app():this.alipay_web():this.error("请选择支付方式"):this.zero_pay()},wxpay_jsapi:function(){var t=this;this.get("pay/wxpay_jsapi",{paylog_id:this.paylog.paylog_id}).then((function(i){var e=i.code,n=(i.msg,i.pay_data);1==e&&uni.requestPayment({provider:"wxpay",timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(i){a.log("success:"+JSON.stringify(i)),t.redirect(t.get_success_url(),1200)},fail:function(t){a.log("fail:"+JSON.stringify(t))}})}))},alipay_app:function(){var t=this;this.get("pay/alipay_app",{paylog_id:this.paylog.paylog_id}).then((function(i){var e=i.code,n=(i.msg,i.pay_data);i.debug;1==e&&uni.requestPayment({provider:"alipay",orderInfo:n.body,success:function(a){t.success("支付成功！"),t.redirect(t.get_success_url(),1200)},fail:function(t){a.log("fail:",t)}})}))},alipay_jsapi:function(){var t=this;this.get("pay/alipay_jsapi",{paylog_id:this.paylog.paylog_id}).then((function(i){i.code,i.msg;var e=i.pay_data;i.debug;uni.requestPayment({provider:"alipay",orderInfo:e,success:function(a){t.success("支付成功！"),t.redirect(t.get_success_url(),1200)},fail:function(t){a.log("fail:",t)}})}))},balance:function(){var a=this;this.get("pay/balance",{paylog_id:this.paylog.paylog_id}).then((function(t){var i=t.code,e=t.msg;1==i&&(a.success(e),a.redirect(a.get_success_url(),1200))}))},zero_pay:function(){var a=this;this.get("pay/zero_pay",{paylog_id:this.paylog.paylog_id}).then((function(t){var i=t.code,e=t.msg;1==i&&(a.success(e),a.redirect(a.get_success_url(),1200))}))},alipay_web:function(){var a=this.get_success_url();window.location.href="".concat(this.baseURL(),"/index/pay/alipay_web?redirect_url=").concat(encodeURIComponent("/h5/#".concat(a)),"&paylog_id=").concat(this.paylog.paylog_id,"&token=").concat(uni.getStorageSync("token"))}}};t.default=n}).call(this,i("ba7c")["default"])},c20c:function(a,t,i){var e=i("c86c");t=e(!1),t.push([a.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.app[data-v-65abb53f]{width:100%}.price-box[data-v-65abb53f]{background-color:#fff;height:%?265?%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:%?28?%;color:#909399}.price-box .price[data-v-65abb53f]{font-size:%?50?%;color:#303133;margin-top:%?12?%}.price-box .price[data-v-65abb53f]:before{content:"￥";font-size:%?40?%}.pay-type-list[data-v-65abb53f]{margin-top:%?20?%;background-color:#fff;padding-left:%?60?%}.pay-type-list .type-item[data-v-65abb53f]{height:%?120?%;padding:%?20?% 0;display:flex;justify-content:space-between;align-items:center;padding-right:%?60?%;font-size:%?30?%;position:relative}.pay-type-list .icon[data-v-65abb53f]{width:%?100?%;font-size:%?52?%}.pay-type-list .icon-erjiye-yucunkuan[data-v-65abb53f]{color:#fe8e2e}.pay-type-list .icon-weixinzhifu[data-v-65abb53f]{color:#36cb59}.pay-type-list .icon-alipay[data-v-65abb53f]{color:#01aaef}.pay-type-list .tit[data-v-65abb53f]{font-size:%?32?%;color:#303133;margin-bottom:%?4?%}.pay-type-list .con[data-v-65abb53f]{flex:1;display:flex;flex-direction:column;font-size:%?24?%;color:#909399}.mix-btn[data-v-65abb53f]{display:flex;align-items:center;justify-content:center;width:%?630?%;height:%?80?%;margin:%?80?% auto %?30?%;font-size:%?32?%;color:#fff;background-color:#f32779;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""]),a.exports=t}}]);