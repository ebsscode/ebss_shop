(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-my-sign"],{"0e1c":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("02f5"),a={data:function(){return{user_info:null,last_sign_record:null,next_grade:null,today_date:(0,n.getYmd)(),scrollTop:0,percentage:0,giftRed:"/static/shop/gift1.png",giftYel:"/static/shop/gift2.png"}},onShow:function(){this.getData()},onPageScroll:function(e){this.scrollTop=e.scrollTop},methods:{signUp:function(){var e=this;this.get("sign/save").then((function(t){var i=t.code,n=t.msg;1==i&&(e.success(n),e.getData())}))},getData:function(){var e=this;this.get("page/page_sign",{loading:!0}).then((function(t){var i=t.code,n=t.user_info,a=t.next_grade,c=t.last_sign_record;1==i&&(e.last_sign_record=c,e.user_info=n,e.next_grade=a,e.percentage=a?(100*n.experience/a.amount).toFixed(0):100)}))}}};t.default=a},"1be6":function(e,t,i){var n=i("2a19");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("aa412d5c",n,!0,{sourceMap:!1,shadowMode:!1})},"24aa":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"grade"},[i("StatusBar"),i("v-uni-view",{staticClass:"grade-body"},[i("StatusBar"),i("v-uni-view",{class:{"bar justify-between":!0,scrollTop:e.scrollTop>10}},[i("v-uni-view",{staticClass:"left",staticStyle:{"padding-left":"12px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-xiangzuo1",staticStyle:{color:"#fff","font-size":"40rpx"}})],1),i("v-uni-view",{staticClass:"center"},[i("v-uni-text",[e._v("我的等级")])],1),i("v-uni-view",{staticClass:"right align-center justify-center bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.nav("/pages/common/article/detail?article_id=3")}}},[i("v-uni-text",[e._v("等级说明")])],1)],1),i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{staticClass:"line",attrs:{src:e.staticURL()+"/static/shop/arc.png"}}),i("v-uni-view",{staticClass:"num"},[i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL()+"/static/shop/grade.png"}}),i("v-uni-text",[e._v("1")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL()+"/static/shop/grade.png"}}),i("v-uni-text",[e._v("3")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL()+"/static/shop/grade.png"}}),i("v-uni-text",[e._v("2")])],1)],1),i("v-uni-view",{staticClass:"numerical"},[i("v-uni-view",{staticClass:"experience"},[i("v-uni-text",{staticClass:"pre"},[e._v("当前经验值")]),i("v-uni-text",{staticClass:"QQ811565456 hewei-zuanshi_o",staticStyle:{color:"#fff","font-size":"40rpx"}}),e.user_info?i("v-uni-text",{staticClass:"expNum"},[e._v(e._s(e.user_info.experience))]):e._e()],1),i("v-uni-view",{staticClass:"differ"},[i("v-uni-text",[e._v(e._s(e.next_grade&&e.user_info?"距离下一等级还差"+(e.next_grade.amount-e.user_info.experience)+"经验":"当前已是最高等级"))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cont"},[i("v-uni-view",{staticClass:"people"},[i("v-uni-view",{staticClass:"image"},[e.user_info?i("v-uni-image",{attrs:{src:e.staticURL()+"/"+e.user_info.avatar_img}}):e._e(),i("v-uni-view")],1),i("v-uni-view",{staticClass:"text"},[e.user_info?i("v-uni-text",[e._v(e._s(e.user_info.nickname||e.user_info.username||e.user_info.tel||"暂无昵称"))]):e._e(),e.user_info?i("v-uni-text",[e._v("Lv."+e._s(e.user_info&&e.user_info.user_grade?e.user_info.user_grade.name:"暂无等级"))]):e._e()],1),i("v-uni-view",{staticClass:"money",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.nav("/pages/common/my/integral_log")}}},[e.user_info?i("v-uni-text",[e._v(e._s(e.user_info.integral))]):e._e(),i("v-uni-text",[e._v("我的积分")])],1)],1),i("v-uni-view",{staticClass:"experience"},[i("v-uni-text",{staticClass:"title"},[e._v("经验值")]),i("v-uni-progress",{attrs:{percent:e.percentage,"stroke-width":"10","border-radius":"20rpx",activeColor:"#A47EFF"}}),i("v-uni-view",{staticClass:"number"},[i("v-uni-text",[e._v("Lv."+e._s(e.user_info&&e.user_info.user_grade?e.user_info.user_grade.name:"暂无等级"))]),e.user_info?i("v-uni-text",[e._v("经验值:"+e._s(e.user_info.experience)+"/"+e._s(e.next_grade.amount))]):e._e(),i("v-uni-text",[e._v("Lv."+e._s(e.next_grade?e.next_grade.name:"满级"))])],1),i("v-uni-text",{staticClass:"title"},[e._v("累计签到"+e._s(e.last_sign_record?e.last_sign_record.continuous_day:0)+"天")]),i("v-uni-view",{staticClass:"gift"},e._l(7,(function(t,n){return i("v-uni-view",{key:n,staticClass:"item"},[!e.last_sign_record||e.last_sign_record.continuous_day<t?i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL()+(1==t||4==t||7==t?e.giftYel:e.giftRed)}})],1):i("v-uni-view",{staticClass:"special"},[i("v-uni-text",{staticClass:"QQ811565456 hewei-qiandao text-color"})],1),i("v-uni-text",[e._v("第"+e._s(t)+"天")])],1)})),1),e.last_sign_record&&e.last_sign_record.add_date==e.today_date?i("v-uni-view",{staticClass:"button bg-disabled"},[i("v-uni-text",[e._v("今天已签到")])],1):i("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.signUp.apply(void 0,arguments)}}},[i("v-uni-text",[e._v("立即签到")])],1)],1),i("v-uni-view",{staticClass:"task",staticStyle:{display:"none"}},[i("v-uni-text",{staticClass:"title"},[e._v("今日任务（0/10）")]),i("v-uni-text",{staticClass:"text"},[e._v("每完成2个任务可领取1次奖励")]),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL()+"/static/shop/grade3.png"}}),i("v-uni-text",[e._v("未完成")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL()+"/static/shop/grade3.png"}}),i("v-uni-text",[e._v("未完成")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL()+"/static/shop/grade3.png"}}),i("v-uni-text",[e._v("未完成")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL+"/static/shop/grade3.png"}}),i("v-uni-text",[e._v("未完成")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.staticURL()+"/static/shop/grade3.png"}}),i("v-uni-text",[e._v("未完成")])],1)],1),i("v-uni-view",{staticClass:"invitation"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-text",{staticClass:"QQ811565456 hewei-bianji text-color",staticStyle:{"font-size":"50rpx"}})],1),i("v-uni-view",{staticClass:"cent"},[i("v-uni-text",[e._v("发布1条贴子")]),i("v-uni-text",[e._v("经验值+5")])],1),i("v-uni-view",{staticClass:"complete"},[i("v-uni-text",[e._v("去完成")])],1)],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"icon"},[i("v-uni-text",{staticClass:"QQ811565456 hewei-bianji text-color",staticStyle:{"font-size":"50rpx"}})],1),i("v-uni-view",{staticClass:"cent"},[i("v-uni-text",[e._v("评论2条贴子")]),i("v-uni-text",[e._v("经验值+5")])],1),i("v-uni-view",{staticClass:"complete"},[i("v-uni-text",[e._v("去完成")])],1)],1)],1)],1)],1)],1)},a=[]},"2a19":function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.grade .grade-body[data-v-6c8c22de]{background:linear-gradient(to bottom right,#f32779 0,#fff)}.grade uni-text[data-v-6c8c22de]{font-family:PingFangSC-Semibold,PingFang SC}.grade .scrollTop[data-v-6c8c22de]{position:fixed;top:0;width:100%;padding:0 %?100?%;display:flex;justify-content:space-between;background:#5b2366}.grade .bar[data-v-6c8c22de]{padding:%?20?% %?0?%}.grade .bar .center uni-text[data-v-6c8c22de]{font-size:%?32?%;font-weight:600;color:#fff;line-height:%?44?%}.grade .bar .right[data-v-6c8c22de]{width:%?148?%;height:%?44?%;border-radius:%?22?% 0 0 %?22?%;border:%?2?% solid #fff;text-align:center}.grade .bar .right > uni-text[data-v-6c8c22de]{margin-right:%?0?%;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;color:#fff;line-height:%?44?%}.grade .top[data-v-6c8c22de]{width:%?750?%;height:%?450?%;padding:0 %?50?%;border-radius:0 0 50% 50%/0 0 15% 15%}.grade .top .line[data-v-6c8c22de]{width:100%;height:%?142?%;margin-top:%?10?%}.grade .top .num[data-v-6c8c22de]{display:flex;justify-content:center;margin-top:%?-84?%}.grade .top .num > uni-view[data-v-6c8c22de]{width:%?144?%;height:%?136?%;justify-content:center;align-items:center;display:flex}.grade .top .num > uni-view uni-image[data-v-6c8c22de]{width:%?144?%;height:%?136?%}.grade .top .num > uni-view uni-text[data-v-6c8c22de]{font-size:%?64?%;font-weight:600;color:#999;line-height:%?90?%;text-shadow:%?0?% %?2?% %?1?% rgba(0,0,0,.02);background:linear-gradient(180deg,#fcc181,#cc6833);-webkit-background-clip:text;-webkit-text-fill-color:transparent;position:absolute}.grade .top .num > uni-view[data-v-6c8c22de]:nth-child(2){margin:0 %?52?%}.grade .top .num > uni-view[data-v-6c8c22de]:nth-child(1), .grade .top .num > uni-view[data-v-6c8c22de]:nth-child(3){margin-top:%?-40?%}.grade .top .num > uni-view:nth-child(1) > uni-image[data-v-6c8c22de], .grade .top .num > uni-view:nth-child(3) > uni-image[data-v-6c8c22de]{width:%?84?%;height:%?80?%}.grade .top .num > uni-view:nth-child(1) > uni-text[data-v-6c8c22de], .grade .top .num > uni-view:nth-child(3) > uni-text[data-v-6c8c22de]{font-size:%?40?%}.grade .top .numerical[data-v-6c8c22de]{display:flex;flex-direction:column;align-items:center;margin-top:%?24?%}.grade .top .numerical .experience[data-v-6c8c22de]{display:flex;align-items:center}.grade .top .numerical .experience .pre[data-v-6c8c22de]{font-size:%?28?%;color:#fff;line-height:%?40?%}.grade .top .numerical .experience > uni-image[data-v-6c8c22de]{width:%?36?%;height:%?30?%;margin:0 %?6?%}.grade .top .numerical .experience .expNum[data-v-6c8c22de]{font-size:%?36?%;font-weight:600;color:#fff}.grade .top .numerical .differ > uni-text[data-v-6c8c22de]{font-size:%?20?%;color:#999;line-height:%?42?%}.grade .cont[data-v-6c8c22de]{padding:0 %?40?%}.grade .cont .people[data-v-6c8c22de]{width:100%;height:%?116?%;background:#f32779;border-radius:%?58?%;margin-top:%?12?%;padding:0 %?36?% 0 %?18?%;display:flex;align-items:center}.grade .cont .people .image[data-v-6c8c22de]{width:%?84?%;height:%?84?%;display:flex;justify-content:center;align-items:center;margin-right:%?20?%}.grade .cont .people .image > uni-image[data-v-6c8c22de]{width:%?84?%;height:%?84?%;border-radius:50%}.grade .cont .people .image > uni-view[data-v-6c8c22de]{width:%?92?%;height:%?92?%;border-radius:50%;border:%?2?% solid #fff;-webkit-filter:blur(%?2?%);filter:blur(%?2?%);position:absolute}.grade .cont .people .text[data-v-6c8c22de]{flex:1;display:flex;align-items:center}.grade .cont .people .text > uni-text[data-v-6c8c22de]:first-child{font-size:%?36?%;font-weight:600;color:#fff;line-height:%?50?%;margin-right:%?14?%}.grade .cont .people .text > uni-text[data-v-6c8c22de]:last-child{height:%?34?%;background:#bda3ff;border-radius:%?17?%;padding:0 %?14?%;font-size:%?24?%;color:#fff;line-height:%?34?%}.grade .cont .people .money[data-v-6c8c22de]{display:flex;flex-direction:column}.grade .cont .people .money > uni-text[data-v-6c8c22de]:first-child{font-size:%?36?%;font-weight:600;color:#fff;line-height:%?50?%}.grade .cont .people .money > uni-text[data-v-6c8c22de]:last-child{font-size:%?24?%;color:#dbcdff;line-height:%?34?%}.grade .cont .experience[data-v-6c8c22de]{width:100%;height:%?640?%;background:#fff;border-radius:%?20?%;padding:%?40?% %?18?%;margin-top:%?24?%}.grade .cont .experience .title[data-v-6c8c22de]{display:block;font-size:%?32?%;font-weight:600;color:#333;line-height:%?44?%;margin-bottom:%?22?%}.grade .cont .experience .number[data-v-6c8c22de]{display:flex;margin:%?22?% 0 %?56?% 0;justify-content:space-between}.grade .cont .experience .number > uni-text[data-v-6c8c22de]{font-size:%?28?%;font-weight:600;color:#000;line-height:%?40?%}.grade .cont .experience .number > uni-text[data-v-6c8c22de]:nth-child(2){font-size:%?28?%;font-weight:400;color:#999;line-height:%?40?%}.grade .cont .experience .gift[data-v-6c8c22de]{margin-top:%?30?%;display:flex}.grade .cont .experience .gift .item[data-v-6c8c22de]{display:flex;flex-direction:column;align-items:center;margin-right:%?22?%}.grade .cont .experience .gift .item > uni-view[data-v-6c8c22de]{width:%?70?%;height:%?70?%;background:#fff0f0;border-radius:%?20?%;display:flex;justify-content:center;align-items:center}.grade .cont .experience .gift .item > uni-view > uni-image[data-v-6c8c22de]{width:%?36?%;height:%?40?%}.grade .cont .experience .gift .item .special[data-v-6c8c22de]{background:#fffaf0}.grade .cont .experience .gift .item > uni-text[data-v-6c8c22de]{font-size:%?20?%;color:#999;line-height:%?28?%;margin-top:%?4?%}.grade .cont .experience .button[data-v-6c8c22de]{width:%?368?%;height:%?100?%;margin:auto;margin-top:%?60?%;border-radius:%?58?%;text-align:center;background:linear-gradient(90deg,#a47eff,#f32779)}.grade .cont .experience .button > uni-text[data-v-6c8c22de]{font-size:%?32?%;font-weight:600;color:#fff;line-height:%?100?%}.grade .cont .task[data-v-6c8c22de]{width:100%;height:%?630?%;background:#fff;border-radius:%?20?%;margin-top:%?24?%;padding:%?40?% %?30?% 0 %?20?%;display:flex;flex-direction:column}.grade .cont .task .title[data-v-6c8c22de]{font-size:%?32?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333;line-height:%?44?%}.grade .cont .task .text[data-v-6c8c22de]{font-size:%?24?%;color:#999;line-height:%?34?%;margin:%?6?% 0 %?22?% 0}.grade .cont .task .list[data-v-6c8c22de]{display:flex;justify-content:space-between;margin-bottom:%?74?%}.grade .cont .task .list > uni-view[data-v-6c8c22de]{width:%?92?%;height:%?116?%;background:linear-gradient(90deg,#a47eff,#8f64fb);border-radius:%?6?%;display:flex;flex-direction:column;justify-content:center;align-items:center}.grade .cont .task .list > uni-view > uni-image[data-v-6c8c22de]{width:%?58?%;height:%?56?%}.grade .cont .task .list > uni-view > uni-text[data-v-6c8c22de]{font-size:%?20?%;color:#fff;line-height:%?28?%;margin-top:%?6?%}.grade .cont .task .invitation .item[data-v-6c8c22de]{display:flex;align-items:center;margin-bottom:%?36?%}.grade .cont .task .invitation .item .icon[data-v-6c8c22de]{width:%?84?%;height:%?84?%;border-radius:50%;background:#f5f1ff;display:flex;justify-content:center;align-items:center;margin-right:%?14?%}.grade .cont .task .invitation .item .cent[data-v-6c8c22de]{flex:1;display:flex;flex-direction:column}.grade .cont .task .invitation .item .cent > uni-text[data-v-6c8c22de]:first-child{font-size:%?28?%;color:#333;line-height:%?40?%}.grade .cont .task .invitation .item .cent > uni-text[data-v-6c8c22de]:last-child{font-size:%?24?%;color:#999;line-height:%?34?%}.grade .cont .task .invitation .item .complete[data-v-6c8c22de]{width:%?122?%;height:%?52?%;background:linear-gradient(90deg,#a47eff,#8f64fb);border-radius:%?58?%;text-align:center}.grade .cont .task .invitation .item .complete > uni-text[data-v-6c8c22de]{font-size:%?24?%;font-weight:600;color:#fff;line-height:%?52?%}',""]),e.exports=t},"93dc":function(e,t,i){"use strict";i.r(t);var n=i("24aa"),a=i("eae0");for(var c in a)["default"].indexOf(c)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(c);i("b521");var s=i("828b"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6c8c22de",null,!1,n["a"],void 0);t["default"]=r.exports},b521:function(e,t,i){"use strict";var n=i("1be6"),a=i.n(n);a.a},eae0:function(e,t,i){"use strict";i.r(t);var n=i("0e1c"),a=i.n(n);for(var c in n)["default"].indexOf(c)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=a.a}}]);