(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-spike-list"],{"057c":function(t,e,i){"use strict";i.r(e);var n=i("e825"),s=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},"06e5":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("ffbe")),o=n(i("e15d")),a=n(i("8a6d")),r={en:s.default,"zh-Hans":o.default,"zh-Hant":a.default};e.default=r},"2aad":function(t,e,i){"use strict";i.r(e);var n=i("4041"),s=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},"3e9a":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniCountdown:i("4593").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page_box seckill-list-wrap"},[i("StatusBar"),i("v-uni-view",{staticClass:"tab-box flex-row"},t._l(t.tabList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"tab-item flex-col justify-center align-center",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTab(e.id)}}},[i("v-uni-text",{staticClass:"tab-title",class:{"tab-active":t.tabCurrent===e.id}},[t._v(t._s(e.title))]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.tabCurrent===e.id,expression:"tabCurrent === tab.id"}],staticClass:"tab-line"})],1)})),1),i("v-uni-view",{staticClass:"content_box"},["ing"==t.tabCurrent?[t.spike&&t.spike.goods.length?i("v-uni-scroll-view",{staticClass:"scroll-box",attrs:{"scroll-y":"true","enable-back-to-top":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._v(t._s(t.spike.timeupSecond)),t._l(t.spike.goods,(function(e,n){return i("v-uni-view",{key:n,staticClass:"goods-item"},[i("v-uni-view",{staticClass:"big-goods flex-row align-start "},[i("v-uni-image",{staticClass:"goods-img",attrs:{"lazy-load":!0,"fade-show":!0,src:t.baseURL+"/"+e.cover_img,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/shop/goods/detail?goods_id="+e.goods_id)}}}),i("v-uni-view",{staticClass:" card-right flex-col justify-between"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"goods-title align-center"},["no_start"==t.spike_status?i("v-uni-view",{staticClass:"title-tag cu-tag"},[t._v("秒杀")]):t._e(),"start"==t.spike_status?i("v-uni-view",{staticClass:"title-tag cu-tag"},[t._v("秒杀")]):t._e(),"end"==t.spike_status?i("v-uni-view",{staticClass:"title-tag cu-tag",staticStyle:{background:"#abbaab"}},[t._v("秒杀")]):t._e(),i("v-uni-text",{staticClass:"title-1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/shop/goods/detail?goods_id="+e.goods_id)}}},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"flex-row",staticStyle:{"margin-top":"8rpx"}},t._l(e.labels,(function(e,n){return i("v-uni-view",{key:n,staticClass:"subtitle-text",staticStyle:{"flex-shrink":"0",padding:"4rpx 8rpx",background:"rgb(252,226,229)","border-radius":"10rpx",color:"#CC8369","font-size":"20rpx","margin-right":"6rpx"}},[t._v(t._s(e.name))])})),1)],1),i("v-uni-view",{staticClass:"flex-row"},[i("v-uni-view",{staticClass:"cu-progress",staticStyle:{width:"210rpx"}},[i("v-uni-view",{style:[{width:(100*e.sale_count/e.quantity).toFixed(2)+"%",backgroundColor:"#ffbbbb",height:"100%"}]})],1),i("v-uni-view",{staticClass:"progress-text"},[t._v("已售出"+t._s(e.sale_count)+"件")])],1),i("v-uni-view",{staticClass:"flex-row justify-between justify-center"},[i("v-uni-view",{staticClass:"flex-row align-end"},[i("v-uni-view",{staticClass:"price"},[t._v(t._s(e.price))]),i("v-uni-view",{staticClass:"origin-price"},[t._v(t._s(e.original_price))])],1),"no_start"==t.spike_status?i("v-uni-view",{staticClass:"buy-btn",staticStyle:{background:"linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"}},[t._v("暂未开始")]):t._e(),"start"==t.spike_status?i("v-uni-view",{staticClass:"buy-btn",staticStyle:{background:"linear-gradient(90deg, #d01325, #ed3c30)"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/shop/order/createorder?goods_spec="+e.goods_id+"-1")}}},[t._v("去抢购")]):t._e(),"end"==t.spike_status?i("v-uni-view",{staticClass:"buy-btn bg-disabled"},[t._v("已结束")]):t._e()],1)],1)],1)],1)}))],2):i("Empty",{attrs:{tips_text:"暂无秒杀活动，敬请期待~"}})]:t._e(),"nostart"==t.tabCurrent?[t.spike_list&&t.spike_list.length?i("v-uni-scroll-view",{staticClass:"scroll-box",attrs:{"scroll-y":"true","enable-back-to-top":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},t._l(t.spike_list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"goods-item"},[i("v-uni-view",{staticClass:"big-goods flex-row align-start "},[i("v-uni-image",{staticClass:"goods-img",attrs:{"lazy-load":!0,"fade-show":!0,src:t.baseURL+"/"+e.cover_img,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.redirect("/pages/shop/spike/list?spike_id="+e.spike_id)}}}),i("v-uni-view",{staticClass:" card-right flex-col justify-between"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"goods-title align-center"},[i("v-uni-view",{staticClass:"title-tag cu-tag"},[t._v("秒杀")]),i("v-uni-text",{staticClass:"title-1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.redirect("/pages/shop/spike/list?spike_id="+e.spike_id)}}},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"subtitle-text",staticStyle:{"margin-top":"8rpx"}},[t._v(t._s(e.desc))])],1),i("v-uni-view",{staticClass:"flex-row"},[e.timeupSecond>0?i("uni-countdown",{attrs:{showDay:!0,second:e.timeupSecond,color:"#FFFFFF","background-color":"rgba(0,0,0,.8)"}}):[i("v-uni-text",{staticClass:"timer"},[t._v("进")]),i("v-uni-text",{staticClass:"timer"},[t._v("行")]),i("v-uni-text",{staticClass:"timer"},[t._v("中")])]],2),i("v-uni-view",{staticClass:"flex-row justify-between justify-center"},[i("v-uni-view",{staticClass:"flex-row align-end"}),i("v-uni-view",{staticClass:"buy-btn",staticStyle:{background:"linear-gradient(90deg, #d01325, #ed3c30)"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.redirect("/pages/shop/spike/list?spike_id="+e.spike_id)}}},[t._v("查看")])],1)],1)],1)],1)})),1):i("Empty",{attrs:{tips_text:"暂无秒杀活动，敬请期待~"}})]:t._e()],2)],1)},o=[]},4041:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d");e.default={components:{},data:function(){return{baseURL:this.baseURL,spike_id:null,spike:null,spike_status:"",tabCurrent:"ing",spike_list:[],tabList:[{id:"ing",title:"抢购进行中"},{id:"nostart",title:"即将开始"}]}},computed:{},onLoad:function(t){t.spike_id&&(this.spike_id=t.spike_id,this.getSpike())},onPullDownRefresh:function(){this.getSpike()},methods:{onTab:function(t){this.tabCurrent!==t&&(this.tabCurrent=t,"ing"==this.tabCurrent&&this.getSpike(),"nostart"==this.tabCurrent&&this.getSpikeList())},loadMore:function(){this.getSpike()},getSpike:function(){var t=this;this.get("spike/detail",{spike_id:this.spike_id}).then((function(e){var i=e.code,n=e.detail;if(1===i){t.spike=n;var s=0,o=0;1==n.time_type&&(s=t.spike.start_at,o=t.spike.end_at),2==n.time_type&&(s=t.util.getTodayStartTime()+t.spike.start_at,o=t.util.getTodayStartTime()+t.spike.end_at);var a=t.util.getTime10();s>a&&(t.spike_status="no_start"),a>=s&&a<=o&&(t.spike_status="start"),a>o&&(t.spike_status="end")}}))},getSpikeList:function(){var t=this;this.get("spike/will_start",{}).then((function(e){var i=e.code,n=e.list;1===i&&(t.spike_list=n.map((function(e){return 1==e.time_type&&(e.timeupSecond=e.start_at-t.util.getTime10()),2==e.time_type&&(e.timeupSecond=t.util.getTodayStartTime()+e.start_at-t.util.getTime10()),e})))}))}}}},4445:function(t,e,i){var n=i("f618");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("79a30446",n,!0,{sourceMap:!1,shadowMode:!1})},4593:function(t,e,i){"use strict";i.r(e);var n=i("99f8"),s=i("057c");for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("c7b9");var a=i("f0c5"),r=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"440bf61a",null,!1,n["a"],void 0);e["default"]=r.exports},"486d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 通用 */\r\n/* 文字尺寸 */\r\n/* 页面配置 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.seckill-list-wrap[data-v-4f320f00]{background:url(https://h.vivivi.club/static/shop/spike_list_head_bg.png) no-repeat;background-size:100% auto}.tab-box .tab-item[data-v-4f320f00]{flex:1;height:%?140?%;color:hsla(0,0%,100%,.4);font-size:%?32?%;font-weight:600}.tab-box .tab-item .tab-line[data-v-4f320f00]{width:%?50?%;height:%?8?%;background:#fff;border-radius:%?4?%;margin-top:5px}.tab-box .tab-active[data-v-4f320f00]{color:#fff}.scroll-box[data-v-4f320f00]{background:linear-gradient(#fff,#f5f5f5);width:%?710?%;border-radius:%?20?%;margin:0 auto}.goods-item .big-goods[data-v-4f320f00]{width:%?710?%;padding:8px;background:#fff;box-shadow:0 %?7?% %?8?% %?1?% rgba(254,76,29,.05);border-radius:%?20?%}.goods-item .big-goods .goods-img[data-v-4f320f00]{width:%?220?%;height:%?220?%;border-radius:%?6?%}.goods-item .big-goods .card-right[data-v-4f320f00]{width:%?430?%;height:%?220?%;margin-left:10px}.goods-item .big-goods .goods-title[data-v-4f320f00]{font-size:%?26?%;font-weight:600;width:%?400?%;color:#000}.goods-item .big-goods .goods-title .cu-tag[data-v-4f320f00]{font-size:10px;padding:0 6px;height:16px;background-color:red;white-space:nowrap;color:#fff;border-radius:3px}.goods-item .big-goods .goods-title .title-1[data-v-4f320f00]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.goods-item .big-goods .subtitle-text[data-v-4f320f00]{font-size:%?22?%;font-weight:500;color:#666;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.goods-item .big-goods .buy-btn[data-v-4f320f00]{width:%?120?%;line-height:%?50?%;border-radius:%?25?%;font-size:%?24?%;font-weight:500;color:#fff;text-align:center}.goods-item .big-goods .progress-text[data-v-4f320f00]{color:#c4c4c4;font-size:%?20?%;margin-left:%?25?%}.goods-item .big-goods .price[data-v-4f320f00]{color:red;font-weight:600}.goods-item .big-goods .price[data-v-4f320f00]::before{content:"￥";font-size:%?20?%}.goods-item .big-goods .origin-price[data-v-4f320f00]{color:#c4c4c4;font-size:%?24?%;text-decoration:line-through}.goods-item .big-goods .origin-price[data-v-4f320f00]::before{content:"￥";font-size:%?20?%}.goods-item .big-goods .cu-progress[data-v-4f320f00]{overflow:hidden;height:14px;background-color:#ebeef5;display:inline-flex;align-items:center;width:100%;border-radius:10px}.goods-item .btn-end[data-v-4f320f00],\r\n.goods-item .btn-nostart[data-v-4f320f00]{background:#eee;color:#999}.goods-item .btn-ing[data-v-4f320f00]{background:linear-gradient(90deg,#e9b461,#eecc89);box-shadow:0 %?7?% %?6?% 0 rgba(229,138,0,.22);color:#fff}',""]),t.exports=e},"696a":function(t,e,i){"use strict";var n=i("e571"),s=i.n(n);s.a},"8a6d":function(t){t.exports=JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"時","uni-countdown.m":"分","uni-countdown.s":"秒"}')},9012:function(t,e,i){"use strict";i.r(e);var n=i("3e9a"),s=i("2aad");for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("696a");var a=i("f0c5"),r=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"4f320f00",null,!1,n["a"],void 0);e["default"]=r.exports},"99f8":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?i("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.d))]):t._e(),t.showDay?i("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.dayText))]):t._e(),i("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.h))]),i("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.showColon?":":t.hourText))]),i("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.i))]),i("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.showColon?":":t.minuteText))]),i("v-uni-text",{staticClass:"uni-countdown__number",style:[t.timeStyle]},[t._v(t._s(t.s))]),t.showColon?t._e():i("v-uni-text",{staticClass:"uni-countdown__splitor",style:[t.splitorStyle]},[t._v(t._s(t.secondText))])],1)},s=[]},c7b9:function(t,e,i){"use strict";var n=i("4445"),s=i.n(n);s.a},e15d:function(t){t.exports=JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"时","uni-countdown.m":"分","uni-countdown.s":"秒"}')},e571:function(t,e,i){var n=i("486d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("063bc6bc",n,!0,{sourceMap:!1,shadowMode:!1})},e825:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("e25e");var s=i("37dc"),o=n(i("06e5")),a=(0,s.initVueI18n)(o.default),r=a.t,u={name:"UniCountdown",emits:["timeup"],props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},start:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},color:{type:String,default:"#333"},fontSize:{type:Number,default:14},splitorColor:{type:String,default:"#333"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},computed:{dayText:function(){return r("uni-countdown.day")},hourText:function(t){return r("uni-countdown.h")},minuteText:function(t){return r("uni-countdown.m")},secondText:function(t){return r("uni-countdown.s")},timeStyle:function(){var t=this.color,e=this.backgroundColor,i=this.fontSize;return{color:t,backgroundColor:e,fontSize:"".concat(i,"px"),width:"".concat(22*i/14,"px"),lineHeight:"".concat(20*i/14,"px"),borderRadius:"".concat(3*i/14,"px")}},splitorStyle:function(){var t=this.splitorColor,e=this.fontSize,i=this.backgroundColor;return{color:t,fontSize:"".concat(12*e/14,"px"),margin:i?"".concat(4*e/14,"px"):""}}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()},start:{immediate:!0,handler:function(t,e){if(t)this.startData();else{if(!e)return;clearInterval(this.timer)}}}},created:function(t){this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.countDown()},destroyed:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,i,n,s){return t?t-parseInt((new Date).getTime()/1e3,10):60*e*60*24+60*i*60+60*n+s},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,i=0,n=0,s=0;t>0?(e=Math.floor(t/86400),i=Math.floor(t/3600)-24*e,n=Math.floor(t/60)-24*e*60-60*i,s=Math.floor(t)-24*e*60*60-60*i*60-60*n):this.timeUp(),e<10&&(e="0"+e),i<10&&(i="0"+i),n<10&&(n="0"+n),s<10&&(s="0"+s),this.d=e,this.h=i,this.i=n,this.s=s},startData:function(){var t=this;if(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0)return this.seconds=this.toSeconds(0,0,0,0,0),void this.countDown();clearInterval(this.timer),this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3)},update:function(){this.startData()},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};e.default=u},f618:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 通用 */\r\n/* 文字尺寸 */\r\n/* 页面配置 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-countdown[data-v-440bf61a]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.uni-countdown__splitor[data-v-440bf61a]{margin:0 2px;font-size:14px;color:#333}.uni-countdown__number[data-v-440bf61a]{border-radius:3px;text-align:center;font-size:14px}',""]),t.exports=e},ffbe:function(t){t.exports=JSON.parse('{"uni-countdown.day":"day","uni-countdown.h":"h","uni-countdown.m":"m","uni-countdown.s":"s"}')}}]);