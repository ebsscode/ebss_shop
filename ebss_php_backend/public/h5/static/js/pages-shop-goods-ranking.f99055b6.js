(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-goods-ranking"],{6023:function(t,i,e){"use strict";e.r(i);var r=e("f32e"),n=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(a);i["default"]=n.a},"79eb":function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("StatusBar"),e("v-uni-view",{staticStyle:{background:"#f15885",color:"#ffffff",position:"fixed",top:"0",left:"0",width:"750rpx","z-index":"99999"}},[e("v-uni-view",{staticClass:"uifont",staticStyle:{padding:"0 20rpx","font-size":"32rpx",height:"88rpx","line-height":"88rpx","text-align":"center"}},[t._v("喝水排行榜")]),null!==t.myindex?e("v-uni-view",{staticStyle:{padding:"0 20rpx","font-size":"12px",height:"88rpx","line-height":"88rpx","text-align":"center"}},[t._v("我的排名："+t._s(t.myindex+1))]):t._e(),t._e()],1),e("v-uni-swiper",{staticStyle:{height:"100vh"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.range_type_list,(function(i,r){return e("v-uni-swiper-item",{key:r},[e("v-uni-view",{staticStyle:{background:"#f15885",color:"#ffffff",height:"100vh",overflow:"scroll"}},[e("v-uni-view",{staticStyle:{height:"138rpx"}}),e("v-uni-view",{staticStyle:{height:"330rpx",width:"750rpx",position:"relative",overflow:"hidden"}},[e("v-uni-image",{staticStyle:{width:"630rpx",height:"auto",position:"absolute",left:"60rpx",bottom:"-10rpx"},attrs:{mode:"widthFix",src:"/static/range.png"}}),t.ranking.length>=1?e("v-uni-view",{staticStyle:{position:"absolute",top:"40rpx",left:"calc( 50% - 60rpx )",width:"120rpx",height:"400rpx"}},[e("v-uni-view",{staticStyle:{position:"relative",width:"120rpx",height:"120rpx"}},[e("v-uni-view",{staticStyle:{width:"50rpx",height:"40rpx","border-radius":"20rpx",position:"absolute",top:"-16rpx",left:"-20rpx","background-image":"url(/static/chibang-left.png)","background-size":"cover"}}),e("v-uni-view",{staticStyle:{width:"50rpx",height:"40rpx","border-radius":"20rpx",position:"absolute",top:"-16rpx",right:"-20rpx","background-image":"url(/static/chibang-right.png)","background-size":"cover"}}),e("v-uni-view",{staticStyle:{"box-sizing":"border-box",width:"120rpx",height:"120rpx",background:"#d9d8dc",border:"4rpx solid #ffe908","border-radius":"50%",position:"absolute",top:"0",left:"0"}},[e("v-uni-image",{staticStyle:{width:"100%",height:"100%","border-radius":"50%"},attrs:{src:t.baseURL+"/"+t.ranking[0].avatar_img}})],1),e("v-uni-view",{staticStyle:{height:"36rpx",background:"#ffe908",color:"#f15885","font-size":"24rpx","text-align":"center","line-height":"36rpx","border-radius":"18rpx",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis",position:"absolute",bottom:"-18rpx",left:"50%",padding:"0 5rpx",transform:"translateX(-50%)"}},[t._v(t._s(t.ranking[0].total)+"ml")])],1),e("v-uni-view",{staticStyle:{color:"#FFFFFF","margin-top":"70rpx",width:"120rpx","text-align":"center","line-height":"50rpx",height:"50rpx","border-radius":"25rpx",background:"rgba(0,0,0,0.3)","font-size":"24rpx",overflow:"hidden"}},[t._v(t._s(t.ranking[0].nickname||t.ranking[0].username||"暂无昵称"))])],1):t._e(),t.ranking.length>=2?e("v-uni-view",{staticStyle:{position:"absolute",top:"90rpx",left:"120rpx",width:"100rpx",height:"370rpx"}},[e("v-uni-view",{staticStyle:{position:"relative",width:"100rpx",height:"100rpx"}},[e("v-uni-view",{staticStyle:{width:"50rpx",height:"40rpx","border-radius":"20rpx",position:"absolute",top:"-16rpx",left:"-20rpx","background-image":"url(/static/chibang-left.png)","background-size":"cover"}}),e("v-uni-view",{staticStyle:{width:"50rpx",height:"40rpx","border-radius":"20rpx",position:"absolute",top:"-16rpx",right:"-20rpx","background-image":"url(/static/chibang-right.png)","background-size":"cover"}}),e("v-uni-view",{staticStyle:{"box-sizing":"border-box",width:"100rpx",height:"100rpx",background:"#d9d8dc",border:"4rpx solid #fdfffe","border-radius":"50%",position:"absolute",top:"0",left:"0"}},[e("v-uni-image",{staticStyle:{width:"100%",height:"100%","border-radius":"50%"},attrs:{src:t.baseURL+"/"+t.ranking[1].avatar_img}})],1),e("v-uni-view",{staticStyle:{height:"36rpx",background:"#fdfffe",color:"#f15885","font-size":"24rpx","text-align":"center","line-height":"36rpx","border-radius":"18rpx",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis",position:"absolute",bottom:"-18rpx",left:"50%",padding:"0 5rpx",transform:"translateX(-50%)"}},[t._v(t._s(t.ranking[1].total)+"ml")])],1),e("v-uni-view",{staticStyle:{color:"#FFFFFF","margin-top":"80rpx","margin-left":"-10rpx",width:"120rpx","text-align":"center","line-height":"50rpx",height:"50rpx","border-radius":"25rpx",background:"rgba(0,0,0,0.3)","font-size":"24rpx",overflow:"hidden"}},[t._v(t._s(t.ranking[1].nickname||t.ranking[1].username||"暂无昵称"))])],1):t._e(),e("v-uni-view",{staticStyle:{position:"absolute",top:"90rpx",right:"120rpx",width:"100rpx",height:"370rpx"},attrs:{src:t.baseURL+"/"+t.ranking[2].avatar_img}},[e("v-uni-view",{staticStyle:{position:"relative",width:"100rpx",height:"100rpx"}},[e("v-uni-view",{staticStyle:{width:"50rpx",height:"40rpx","border-radius":"20rpx",position:"absolute",top:"-16rpx",left:"-20rpx","background-image":"url(/static/chibang-left.png)","background-size":"cover"}}),e("v-uni-view",{staticStyle:{width:"50rpx",height:"40rpx","border-radius":"20rpx",position:"absolute",top:"-16rpx",right:"-20rpx","background-image":"url(/static/chibang-right.png)","background-size":"cover"}}),e("v-uni-view",{staticStyle:{"box-sizing":"border-box",width:"100rpx",height:"100rpx",background:"#d9d8dc",border:"4rpx solid #fccda1","border-radius":"50%",position:"absolute",top:"0",left:"0"}},[e("v-uni-image",{staticStyle:{width:"100%",height:"100%","border-radius":"50%"},attrs:{src:"/static/logo.jpg"}})],1),e("v-uni-view",{staticStyle:{height:"36rpx",background:"#fccda1",color:"#f15885","font-size":"24rpx","text-align":"center","line-height":"36rpx","border-radius":"18rpx",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis",position:"absolute",bottom:"-18rpx",left:"50%",padding:"0 5rpx",transform:"translateX(-50%)"}},[t._v(t._s(t.ranking[2].total)+"ml")])],1),e("v-uni-view",{staticStyle:{color:"#FFFFFF","margin-top":"80rpx","margin-left":"-10rpx",width:"120rpx","text-align":"center","line-height":"50rpx",height:"50rpx","border-radius":"25rpx",background:"rgba(0,0,0,0.3)","font-size":"24rpx",overflow:"hidden"}},[t._v(t._s(t.ranking[2].nickname||t.ranking[2].username||"暂无昵称"))])],1)],1),e("v-uni-view",{staticStyle:{padding:"20rpx","border-radius":"20rpx 20rpx 0 0",background:"#FFFFFF"}},t._l(t.ranking,(function(i,r){return t.ranking.length>=4&&r>=4?e("v-uni-view",{key:r,staticClass:"justify-between align-center",staticStyle:{height:"90rpx"}},[e("v-uni-view",{staticClass:"align-center"},[e("v-uni-view",{staticStyle:{"font-size":"36rpx",color:"#fccda1",width:"60rpx"}},[t._v(t._s(r))]),e("v-uni-image",{staticStyle:{width:"60rpx",height:"60rpx","border-radius":"50%"},attrs:{src:t.baseURL+"/"+i.avatar_img}}),e("v-uni-view",{staticStyle:{"font-size":"28rpx",color:"#333333","margin-left":"20rpx"}},[t._v(t._s(i.nickname||i.username||"暂无昵称"))])],1),e("v-uni-view",{staticStyle:{"font-size":"28rpx",color:"#f15885"}},[t._v(t._s(i.total)+"ml")])],1):t._e()})),1)],1)],1)})),1)],1)},n=[]},bbf2:function(t,i,e){"use strict";e.r(i);var r=e("79eb"),n=e("6023");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);var o=e("f0c5"),s=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"322d1110",null,!1,r["a"],void 0);i["default"]=s.exports},f32e:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("c740");var r={components:{},data:function(){return{range_type_list:["总榜","月榜","周榜","今日排行"],range_type_idx:0,ranking:[],baseURL:this.baseURL,myindex:null,user_id:uni.getStorageSync("user_id")}},onLoad:function(){this.getData()},methods:{getData:function(){var t=this;this.get("rangking/list",{rank_type:this.range_type_idx+1}).then((function(i){var e=i.code,r=i.paginate;1===e&&(t.ranking=r.data,t.myindex=r.data.findIndex((function(i){return i.user_id==t.user_id})))}))},swiperChange:function(t){this.setRangeTypeIdx(t.detail.current)},setRangeTypeIdx:function(t){this.range_type_idx!=t&&(this.range_type_idx=t,this.getData())}}};i.default=r}}]);