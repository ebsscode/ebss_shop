(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-takeorder-index-home"],{"00db":function(t,e,i){var n=i("d221");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("1df40f9d",n,!0,{sourceMap:!1,shadowMode:!1})},"7a2a":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("StatusBar"),i("TopBar",{attrs:{title:""}}),i("v-uni-view",{staticStyle:{position:"fixed",top:"0",left:"0",width:"750upx",overflow:"hidden","z-index":"999"}},[i("v-uni-view",{staticStyle:{position:"relative",overflow:"hidden",background:"linear-gradient(to bottom right, #2585F6,#1CC8CD)"}},[i("StatusBar"),i("v-uni-view",{staticClass:"align-center justify-between",staticStyle:{padding:"10rpx 30rpx 10rpx 30rpx",position:"relative"}},[i("v-uni-view",{staticClass:"align-center",staticStyle:{transition:"all 0.3s ease"},style:t.scrollTop>10?"opacity: 0;":"opacity: 1;"},[i("v-uni-image",{staticStyle:{width:"40px",height:"40px","border-radius":"50%",overflow:"hidden"},attrs:{src:t.staticURL()+"/"+(t.user_info&&t.user_info.avatar_img?t.user_info.avatar_img:t.configs.logo_img),mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/my/edit")}}}),i("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"16px",color:"#FFFFFF"}},[t.user_info?[t._v(t._s(t.user_info.nickname||t.user_info.username||t.user_info.tel))]:i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/tel_login")}}},[t._v("登录/注册")])],2),i("v-uni-view",{staticClass:"align-center",staticStyle:{"font-size":"24rpx",color:"#FFFFFF","margin-top":"5px"}},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/site/locationchoose")}}},[t._v(t._s(t.location.district||t.location.city))]),i("v-uni-view",{staticClass:"align-center",staticStyle:{"margin-left":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/user/grade")}}},[i("v-uni-text",{staticStyle:{"font-size":"26rpx"}},[t._v("升级")]),i("v-uni-text",{staticClass:"QQ811565456 hewei-xiangyou1",staticStyle:{"font-size":"26rpx"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"align-center",staticStyle:{position:"absolute",right:"30rpx"}},[i("v-uni-view",{staticClass:"align-center",staticStyle:{transition:"all 0.3s ease",height:"48rpx","border-radius":"10rpx",background:"#FFFFFF"},style:t.scrollTop>0?"width: 550rpx;":"width: 240rpx;",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/goods/goodslist")}}},[i("v-uni-text",{staticClass:"QQ811565456 hewei-sousuo",staticStyle:{"font-size":"12px","margin-left":"5px"}}),i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999999","margin-left":"5px"}},[t._v("输入关键词")])],1),i("v-uni-text",{staticClass:"QQ811565456 hewei-kefu",staticStyle:{"font-size":"16px","margin-right":"10px","margin-left":"10px",color:"#FFFFFF"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.call_tel(t.configs.tel)}}}),i("v-uni-text",{staticClass:"QQ811565456 hewei-tongzhi-xiangling",staticStyle:{"font-size":"20px",color:"#FFFFFF"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.nav("/pages/common/notice/noticelist")}}})],1)],1)],1)],1),i("StatusBar"),i("v-uni-view",{staticStyle:{height:"100rpx"}}),i("v-uni-swiper",{staticStyle:{height:"290rpx"},attrs:{current:t.bannerIdx,"indicator-dots":!0,"previous-margin":"75rpx",circular:!0,"next-margin":"75rpx",autoplay:!0,interval:3e3,duration:500},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bannerChange.apply(void 0,arguments)}}},t._l(t.banner_list,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{staticClass:"swiper-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav(e.url)}}},[i("v-uni-view",{staticClass:"align-center justify-center",staticStyle:{height:"290rpx",width:"100%"}},[i("v-uni-image",{staticStyle:{width:"100%","border-radius":"20upx",height:"290rpx",transition:"all ease 0.3s"},style:n==t.bannerIdx?"height:290rpx;":"height:250rpx",attrs:{src:t.staticURL()+"/"+e.src_img}})],1)],1)],1)})),1),i("v-uni-view",[i("v-uni-view",{staticClass:"cate-section"},t._l(t.nav_list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cate-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav(e.url)}}},[i("v-uni-image",{attrs:{src:t.staticURL()+"/"+e.src_img}}),i("v-uni-text",[t._v(t._s(e.nav_name))])],1)})),1)],1),i("v-uni-view",{staticStyle:{padding:"0 30rpx",background:"#FFFFFF"}},[i("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"align-center justify-between"},t._l(t.category_list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"justify-center flex-col align-center",staticStyle:{transition:"all 0.3s ease","font-size":"30rpx","font-weight":"500","flex-shrink":"0","text-align":"center","line-height":"70rpx",margin:"0 10px"},style:t.tabIdx==n?"font-size:36rpx;color:#237CEA":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabIdx=n}}},[i("v-uni-text",[t._v(t._s(e.name))]),t.tabIdx==n?i("v-uni-view",{staticStyle:{transition:"all 0.3s ease",height:"8rpx","border-radius":"4rpx",width:"30rpx",background:"#237CEA"}}):t._e()],1)})),1)],1),i("v-uni-swiper",{style:{height:"551px"},attrs:{current:t.tabIdx,"indicator-dots":!1,autoplay:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.listIdxChange.apply(void 0,arguments)}}},t._l(t.category_list,(function(e,n){return i("v-uni-swiper-item",{key:n},[t.cat_goods_list.length?[t._l(t.cat_goods_list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"swiper-item"},[i("v-uni-view",{staticStyle:{padding:"0rpx",height:"103px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav("/pages/shop/goods/detail?goods_id="+e.goods_id)}}},[i("v-uni-view",{staticClass:"align-center",staticStyle:{padding:"10px 0rpx","border-bottom":"1px solid #f5f5f5","box-sizing":"border-box"}},[i("v-uni-image",{staticStyle:{"flex-shrink":"0",width:"220rpx",height:"165rpx"},attrs:{src:t.staticURL()+"/"+e.cover_img}}),i("v-uni-view",{staticStyle:{"flex-shrink":"0",width:"40rpx"}}),i("v-uni-view",{staticStyle:{"flex-grow":"1",height:"165rpx",display:"flex","flex-direction":"column","justify-content":"space-between"}},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"align-center justify-between"},[i("v-uni-view",{staticStyle:{"font-size":"32rpx",color:"#333","font-weight":"500",height:"2.6em","text-overflow":"ellipsis",overflow:"hidden"}},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"align-center",staticStyle:{"margin-top":"5rpx","font-weight":"300",color:"#333","font-size":"28rpx"}},[i("v-uni-view",{},[t._v("¥"+t._s(e.price))]),i("v-uni-view",{staticStyle:{"margin-left":"50rpx"}},[t._v("销量："+t._s(e.sale_count))])],1)],1),i("v-uni-view",{staticClass:"align-center",staticStyle:{"flex-wrap":"nowrap"}},t._l(e.labels,(function(e,n){return i("v-uni-view",{key:n,staticStyle:{"flex-shrink":"0",padding:"4rpx 14rpx",background:"rgb(252,226,229)","border-radius":"10rpx",color:"#CC8369","font-size":"28rpx"},style:n>0?"flex-shrink: 1;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin-left:30rpx;":""},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1)})),i("v-uni-view",{staticClass:"align-center justify-center",staticStyle:{padding:"10rpx 0rpx 20rpx 0rpx",background:"#FFFFFF"}},[i("v-uni-view",{staticClass:"align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/goods/goodslist?category_id="+t.category_list[t.tabIdx].category_id)}}},[i("v-uni-text",{staticClass:"text-color"},[t._v("查看更多")]),i("v-uni-text",{staticClass:"QQ811565456 hewei-xiangyou1 text-color"})],1)],1)]:i("Empty")],2)})),1)],1),i("v-uni-view",{staticClass:"float-btn bg-color justify-center align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nav("/pages/shop/mch/save")}}},[t._v("入驻")]),i("v-uni-view",{style:{height:t.constant.bottom_bar_height+"rpx"}},[i("BottomBar",{attrs:{barlists:t.barlists},model:{value:t.barIndex,callback:function(e){t.barIndex=e},expression:"barIndex"}})],1)],1)},a=[]},a786:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2634")),s=n(i("2fdc")),o=n(i("f96a")),r=i("02f5"),l={computed:{tabScrollLeft:function(){return uni.upx2px(200*this.tabIdx)}},data:function(){return{bannerIdx:0,scrollTop:0,timeupSecond:0,user_info:null,spike:null,constant:this.constant,barlists:o.default.barlists,location:uni.getStorageSync("location"),configs:uni.getStorageSync("configs"),barIndex:1,banner_list:[],nav_list:[],category_list:[{name:"用工信息"},{name:"师傅在线"},{name:"产品资讯"}],spike_goods_list:[],cat_goods_list:[],tabIdx:0}},onLoad:function(){var t=this;return(0,s.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getData();case 1:case"end":return e.stop()}}),e)})))()},onShow:function(){},onPageScroll:function(t){this.scrollTop=t.scrollTop},methods:{getData:function(){var t=this;this.get("shop/page_index",{}).then((function(e){var i=e.code,n=e.banner_list,a=e.nav_list,s=(e.category_list,e.spike_goods_list),o=e.spike,l=e.user_info;1===i&&(t.banner_list=n,t.nav_list=a,t.spike_goods_list=s,t.user_info=l,o&&(t.spike=o,1==o.time_type&&(t.timeupSecond=t.spike.start_at-(0,r.getTime10)()),2==o.time_type&&(t.timeupSecond=(0,r.getTodayStartTime)()+t.spike.start_at-(0,r.getTime10)()),t.timeupSecond<0&&(t.timeupSecond=0))),t.get_cat_goods_list()}))},listIdxChange:function(t){this.tabIdx=t.detail.current,this.get_cat_goods_list()},get_cat_goods_list:function(){var t=this;this.get("crud/list",{table:"shop_goods",category_id:this.category_list[this.tabIdx].category_id,limit:5}).then((function(e){var i=e.code,n=e.paginate;1===i&&(t.cat_goods_list=n.data)}))},bannerChange:function(t){this.bannerIdx=t.detail.current}}};e.default=l},be4c:function(t,e,i){"use strict";i.r(e);var n=i("7a2a"),a=i("c1d6");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("f529");var o=i("828b"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"389e8d78",null,!1,n["a"],void 0);e["default"]=r.exports},c1d6:function(t,e,i){"use strict";i.r(e);var n=i("a786"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},d221:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.float-btn[data-v-389e8d78]{position:fixed;bottom:calc(var(--window-bottom) + %?120?%);right:%?30?%;z-index:9999;box-shadow:0 0 20px 4px hsla(0,0%,78%,.22);border-radius:50%;width:%?80?%;height:%?80?%;font-size:13px;font-weight:700;color:#fff}\n/* 分类 */.cate-section[data-v-389e8d78]{display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;padding:%?30?% %?22?%\n  /* 原图标颜色太深,不想改图了,所以加了透明度 */}.cate-section .cate-item[data-v-389e8d78]{display:flex;flex-direction:column;align-items:center;font-size:%?26?%;color:#303133;width:25%}.cate-section uni-image[data-v-389e8d78]{width:%?88?%;height:%?88?%;margin-bottom:%?14?%;border-radius:50%;opacity:.7;box-shadow:%?4?% %?4?% %?20?% rgba(250,67,106,.3)}.s-header[data-v-389e8d78]{display:flex;align-items:center}.s-header .left[data-v-389e8d78]{color:transparent;background:linear-gradient(90deg,#ff2600,#ff9d6f);-webkit-background-clip:text;font-size:18px}.s-header .tip[data-v-389e8d78]{font-size:16px;color:#909399;margin:0 %?20?% 0 %?40?%}.s-header .timer[data-v-389e8d78]{display:inline-block;width:%?40?%;height:%?36?%;text-align:center;line-height:%?36?%;margin-right:%?14?%;font-size:%?24?%;color:#fff;border-radius:2px;background:rgba(0,0,0,.8)}.s-header .hewei-xiangyou1[data-v-389e8d78]{font-size:%?32?%;color:#909399;flex:1;text-align:right}.scoll-wrapper[data-v-389e8d78]{display:flex;align-items:flex-start;width:100%;height:100%}.scoll-wrapper .floor-item[data-v-389e8d78]{width:%?150?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.scoll-wrapper .floor-item .price[data-v-389e8d78]{color:#007aff}',""]),t.exports=e},f529:function(t,e,i){"use strict";var n=i("00db"),a=i.n(n);a.a},f96a:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={barlists:[{pagePath:"/pages/takeorder/index/home",icon:"hewei-shouye",text:"首页"},{pagePath:"/pages/shop/index/home",icon:"hewei-gouwuche",text:"商城"},{pagePath:"/pages/takeorder/index/push",icon:"hewei-jia",text:"发布"},{pagePath:"/pages/takeorder/my/my",icon:"hewei-wode",text:"我的"}]};e.default=n}}]);