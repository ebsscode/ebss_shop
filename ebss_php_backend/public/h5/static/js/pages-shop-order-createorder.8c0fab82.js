(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-order-createorder"],{1247:function(t,i,e){"use strict";(function(t){e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("fd3c"),e("473f"),e("bf0f"),e("8f71");var s=e("02f5"),a={data:function(){return{user_coupon_list:[],goods_spec:[],goods_list:[],price_total:0,freight:0,discount:10,maskState:0,notes:"",addr:null,checkCoupon:null,addr_line_img:this.constant.addr_line_img}},onLoad:function(i){var e=this;i.goods_spec&&(this.goods_spec=i.goods_spec.split("|").map((function(t){return t.split("-")})),t.log(222,this.goods_spec),this.getData()),this.post("shop/page_createorder",{goods_ids:this.goods_spec.map((function(t){return t[0]}))}).then((function(t){var i=t.code,s=t.addr;1===i&&(e.addr=s)})),this.get("coupon/my",{status:4}).then((function(t){var i=t.code,a=t.list;1==i&&(e.user_coupon_list=a.map((function(t){(0,s.getTime10)();return t.checked=!1,t})))}))},methods:{couponCheck:function(t,i){var e=(0,s.getTime10)();if(e>i.coupon.expire_time)this.error("优惠券已过期！");else if(i.coupon.full_amount>0&&this.price_total<i.coupon.full_amount)this.error("订单金额满".concat(i.coupon.full_amount,"可使用！"));else{if(1==i.coupon.is_superimposed)return this.user_coupon_list[t].checked=!this.user_coupon_list[t].checked,void this.getPriceTotal();var a=this.user_coupon_list.map((function(i,e){return 0==i.coupon.is_superimposed&&e!=t&&(i.checked=!1),i}));a[t].checked=!a[t].checked,this.user_coupon_list=a,this.getPriceTotal()}},changeAddr:function(t){this.addr=t},getData:function(){var t=this;this.post("crud/list",{table:"shop_goods",table_ids:this.goods_spec.map((function(t){return t[0]})),join_tables:["mch"]}).then((function(i){var e=i.code,s=i.paginate;1===e&&(t.goods_list=s.data.map((function(i,e){return i.amount=t.goods_spec[e][1],i.selected_spec=t.goods_spec[e][2],i})),t.getPriceTotal(),t.freight=t.goods_list.reduce((function(t,i){return 1*t+1*i.freight}),0))}))},getPriceTotal:function(){var i=this.goods_list.reduce((function(t,i){return 1*t+i.price*i.amount}),0);this.price_total=i;var e=this.user_coupon_list.reduce((function(t,i){return i.checked&&1==i.coupon.type?1*t+1*i.coupon.amount:t}),0),s=this.user_coupon_list.reduce((function(t,e){if(e.checked&&2==e.coupon.type){var s=(10-e.coupon.amount)/10*i;return i-=s,1*t+s}return t}),0);t.log(111,s),this.discount=e+s},toggleMask:function(t){var i=this,e="show"===t?10:300,s="show"===t?1:0;this.maskState=2,setTimeout((function(){i.maskState=s}),e)},submit:function(){var t=this;if(this.addr){var i=this.user_coupon_list.filter((function(t){return t.checked}));this.post("order/create",{addr:this.addr,goods_list:this.goods_list,price_total:this.price_total,notes:this.notes,discount:this.discount,freight:this.freight,coupon_list:i}).then((function(i){var e=i.code,s=i.msg,a=(i.order_id,i.paylog_id);1===e&&(t.success(s),t.redirect("/pages/shop/cashier/pay?paylog_id="+a))}))}else this.error("请选择收货地址")},stopPrevent:function(){}}};i.default=a}).call(this,e("ba7c")["default"])},"19fa":function(t,i,e){var s=e("7dc1");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("967d").default;a("0ffbf960",s,!0,{sourceMap:!1,shadowMode:!1})},"1f00":function(t,i,e){"use strict";e.r(i);var s=e("1247"),a=e.n(s);for(var o in s)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(o);i["default"]=a.a},4807:function(t,i,e){"use strict";e.r(i);var s=e("6bad"),a=e("1f00");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("9f11");var n=e("828b"),c=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,"78138829",null,!1,s["a"],void 0);i["default"]=c.exports},"6bad":function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("StatusBar"),e("TopBar",{attrs:{title:"订单确认"}}),e("v-uni-view",{staticClass:"address-section",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/shop/addr/addrlist?from=choose")}}},[e("v-uni-view",{staticClass:"addr-content justify-between"},[e("v-uni-text",{staticClass:"QQ811565456 hewei-shouhuodizhi"}),t.addr?e("v-uni-view",{staticClass:"cen"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-text",{staticClass:"name"},[t._v(t._s(t.addr.name))]),e("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.addr.tel))])],1),e("v-uni-text",{staticClass:"address"},[t._v(t._s(t.addr.district)+" "+t._s(t.addr.address))])],1):e("v-uni-view",[t._v("创建收货地址")]),e("v-uni-text",{staticClass:"QQ811565456 hewei-xiangyou1"})],1),e("v-uni-image",{staticClass:"a-bg",attrs:{src:t.addr_line_img}})],1),e("v-uni-view",{staticClass:"goods-section"},[e("v-uni-view",{staticClass:"g-header b-b"},[e("v-uni-image",{staticStyle:{width:"25px",height:"25px","border-radius":"100px"},attrs:{src:"/static/logo.jpg"}}),e("v-uni-text",{staticClass:"name"},[t._v("西城小店铺")])],1),t._l(t.goods_list,(function(i,s){return e("v-uni-view",{key:s,staticClass:"g-item"},[e("v-uni-image",{attrs:{src:t.staticURL()+"/"+i.cover_img}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"spec"},[t._v(t._s(t.goods_spec[s][2]))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))]),e("v-uni-text",{staticClass:"number"},[t._v("x "+t._s(t.goods_spec[s][1]))])],1)],1)],1)}))],2),e("v-uni-view",{staticClass:"yt-list"},[t.user_coupon_list.length?e("v-uni-view",{staticClass:"yt-list-cell b-b",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toggleMask("show")}}},[e("v-uni-view",{staticClass:"cell-icon"},[t._v("券")]),e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠券")]),e("v-uni-text",{staticClass:"cell-tip active"},[t._v("选择优惠券")]),e("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1):t._e(),e("v-uni-view",{staticClass:"yt-list-cell b-b",staticStyle:{display:"none"}},[e("v-uni-view",{staticClass:"cell-icon hb"},[t._v("减")]),e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商家促销")]),e("v-uni-text",{staticClass:"cell-tip disabled"},[t._v("暂无可用优惠")])],1)],1),e("v-uni-view",{staticClass:"yt-list"},[e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(t.price_total.toFixed(2)))])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠金额")]),e("v-uni-text",{staticClass:"cell-tip red"},[t._v("-￥"+t._s(t.discount.toFixed(2)))])],1),e("v-uni-view",{staticClass:"yt-list-cell b-b"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(t.freight?t.freight:"免运费"))])],1),e("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),e("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写备注信息","placeholder-class":"placeholder"},model:{value:t.notes,callback:function(i){t.notes=i},expression:"notes"}})],1)],1),e("v-uni-view",{staticClass:"footer"},[e("v-uni-view",{staticClass:"price-content"},[e("v-uni-text",[t._v("实付款")]),e("v-uni-text",{staticClass:"price-tip"},[t._v("￥")]),e("v-uni-text",{staticClass:"price"},[t._v(t._s((t.price_total+t.freight-t.discount).toFixed(2)))])],1),e("v-uni-text",{staticClass:"submit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit.apply(void 0,arguments)}}},[t._v("提交订单")])],1),e("v-uni-view",{staticClass:"mask",class:0===t.maskState?"none":1===t.maskState?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toggleMask.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"mask-content",on:{click:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.stopPrevent.apply(void 0,arguments)}}},t._l(t.user_coupon_list,(function(i,s){return e("v-uni-view",{key:s,class:{"coupon-item":!0,"gray-wrap":!i.checked},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.couponCheck(s,i)}}},[e("v-uni-view",{staticClass:"con"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-text",{staticClass:"title"},[t._v(t._s(i.coupon.name))]),e("v-uni-text",{staticClass:"time"},[t._v("有效期至"+t._s(t.formatTime(i.coupon.expire_time)))])],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-text",{staticClass:"price"},[t._v(t._s(i.coupon.amount)+t._s(2==i.coupon.type?"折":"元"))]),e("v-uni-text")],1),e("v-uni-view",{staticClass:"circle l"}),e("v-uni-view",{staticClass:"circle r"})],1),e("v-uni-text",{staticClass:"tips"},[t._v(t._s(i.coupon.full_amount>0?"满"+i.coupon.full_amount+"元可用":"无使用限制")),i.coupon.is_superimposed?[t._v("(可叠加使用)")]:t._e()],2)],1)})),1)],1)],1)},a=[]},"7dc1":function(t,i,e){var s=e("c86c");i=s(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-78138829]{background:#f8f8f8;padding-bottom:%?100?%}body.?%PAGE?%[data-v-78138829]{background:#f8f8f8}.address-section[data-v-78138829]{padding:%?30?% 0;background:#fff;position:relative}.address-section .addr-content[data-v-78138829]{display:flex;align-items:center;padding:0 10px}.address-section .hewei-shouhuodizhi[data-v-78138829]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-78138829]{display:flex;flex-direction:column;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-78138829]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-78138829]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .hewei-you[data-v-78138829]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-78138829]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-78138829]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-78138829]{display:flex;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .name[data-v-78138829]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-78138829]{display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-78138829]{flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-78138829]{flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-78138829]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-78138829]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-78138829]{display:flex;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-78138829]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-78138829]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-78138829]{position:relative}.yt-list[data-v-78138829]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-78138829]{display:flex;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-78138829]{background:#fafafa}.yt-list-cell.b-b[data-v-78138829]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-78138829]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-78138829]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-78138829]{background:#3ab54a}.yt-list-cell .cell-more[data-v-78138829]{align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-78138829]{flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-78138829]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-78138829]{color:#909399}.yt-list-cell .cell-tip.active[data-v-78138829]{color:#f32779}.yt-list-cell .cell-tip.red[data-v-78138829]{color:#f32779}.yt-list-cell.desc-cell .cell-tit[data-v-78138829]{max-width:%?90?%}.yt-list-cell .desc[data-v-78138829]{flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-78138829]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-78138829]{display:flex;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .hewei-weixinzhifu[data-v-78138829]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .hewei-alipay[data-v-78138829]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .hewei-xuanzhong2[data-v-78138829]{display:flex;align-items:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#f32779}.pay-list .tit[data-v-78138829]{font-size:%?32?%;color:#303133;flex:1}.footer[data-v-78138829]{position:fixed;left:0;bottom:0;z-index:995;display:flex;align-items:center;width:100%;height:%?90?%;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-78138829]{padding-left:%?30?%}.footer .price-tip[data-v-78138829]{color:#f32779;margin-left:%?8?%}.footer .price[data-v-78138829]{font-size:%?36?%;color:#f32779}.footer .submit[data-v-78138829]{display:flex;align-items:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#f32779}\n/* 优惠券面板 */.mask[data-v-78138829]{display:flex;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;transition:.3s}.mask .mask-content[data-v-78138829]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);transition:.3s;overflow-y:scroll}.mask.none[data-v-78138829]{display:none}.mask.show[data-v-78138829]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-78138829]{-webkit-transform:translateY(0);transform:translateY(0)}.gray-wrap[data-v-78138829]{-webkit-filter:grayscale(1);\n  /* Webkit */filter:gray;\n  /* IE6-9 */filter:grayscale(1)\n  /* W3C */}\n/* 优惠券列表 */.coupon-item[data-v-78138829]{-webkit-mask-size:100% 100%;mask-size:100% 100%;background:linear-gradient(90deg,#fcbd71,#f90);display:flex;flex-direction:column;margin:%?20?% %?24?%;border-radius:8px;color:#fff}.coupon-item .con[data-v-78138829]{display:flex;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-78138829]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-78138829]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-78138829]{font-size:%?32?%;margin-bottom:%?10?%}.coupon-item .time[data-v-78138829]{font-size:%?24?%}.coupon-item .right[data-v-78138829]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:%?26?%;height:%?100?%}.coupon-item .price[data-v-78138829]{font-size:%?44?%}.coupon-item .tips[data-v-78138829]{font-size:%?24?%;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-78138829]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-78138829]{left:auto;right:%?-6?%}',""]),t.exports=i},"9f11":function(t,i,e){"use strict";var s=e("19fa"),a=e.n(s);a.a}}]);