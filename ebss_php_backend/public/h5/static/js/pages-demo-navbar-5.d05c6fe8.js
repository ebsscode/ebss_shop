(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-navbar-5"],{"0398":function(t,i,e){"use strict";e.r(i);var n=e("d38b"),a=e("2059");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);var s=e("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"02c54a61",null,!1,n["a"],void 0);i["default"]=o.exports},2059:function(t,i,e){"use strict";e.r(i);var n=e("d9ac"),a=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},d38b:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticStyle:{padding:"30rpx",background:"#FFFFFF"}},[e("StatusBar"),e("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-left":t.tabScrollLeft,"scroll-with-animation":!0}},[e("v-uni-view",{staticClass:"align-center",staticStyle:{"flex-wrap":"nowrap",position:"relative"}},[t._l(t.tabs,(function(i,n){return e("v-uni-view",{key:n,staticStyle:{transition:"all 0.3s ease","font-size":"30rpx","font-weight":"500","flex-shrink":"0",width:"130rpx","text-align":"center","line-height":"80rpx"},style:t.tabIdx==n?"font-size:40rpx;color:#237CEA":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabIdx=n}}},[t._v(t._s(i))])})),e("v-uni-view",{staticStyle:{transition:"all 0.3s ease",position:"absolute",bottom:"0rpx",height:"8rpx","border-radius":"4rpx",width:"30rpx",background:"#237CEA"},style:"left:"+(130*t.tabIdx+50)+"rpx"})],2)],1),e("v-uni-swiper",{staticStyle:{height:"1224rpx"},attrs:{current:t.tabIdx,"indicator-dots":!1,autoplay:!1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.listIdxChange.apply(void 0,arguments)}}},t._l(t.tabs,(function(i,n){return e("v-uni-swiper-item",{key:n},[t._l(t.insList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"swiper-item"},[e("v-uni-view",{staticStyle:{padding:"0rpx"}},[e("v-uni-view",{staticClass:"align-center",staticStyle:{padding:"30rpx 0rpx","border-bottom":"1px solid #f5f5f5","box-sizing":"border-box"}},[e("v-uni-image",{staticStyle:{"flex-shrink":"0",width:"220rpx",height:"165rpx"},attrs:{src:i.cover}}),e("v-uni-view",{staticStyle:{"flex-shrink":"0",width:"40rpx"}}),e("v-uni-view",{staticStyle:{"flex-grow":"1",height:"165rpx",display:"flex","flex-direction":"column","justify-content":"space-between"}},[e("v-uni-view",{},[e("v-uni-view",{staticClass:"align-center justify-between"},[e("v-uni-view",{staticStyle:{"font-size":"32rpx",color:"#333","font-weight":"500"}},[t._v(t._s(i.name))]),e("v-uni-text",{staticClass:"myicon icon-gengduo"})],1),e("v-uni-view",{staticClass:"align-center",staticStyle:{"margin-top":"5rpx","font-weight":"300",color:"#333","font-size":"28rpx"}},[e("v-uni-view",{},[t._v(t._s(i.insType))]),e("v-uni-view",{staticStyle:{"margin-left":"50rpx"}},[t._v(t._s(i.insCorp))])],1)],1),e("v-uni-view",{staticClass:"align-center",staticStyle:{"flex-wrap":"nowrap"}},t._l(i.insTag,(function(i,n){return e("v-uni-view",{key:n,staticStyle:{"flex-shrink":"0",padding:"4rpx 14rpx",background:"rgb(252,226,229)","border-radius":"10rpx",color:"#CC8369","font-size":"28rpx"},style:n>0?"flex-shrink: 1;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin-left:30rpx;":""},[t._v(t._s(i))])})),1)],1)],1)],1)],1)})),e("v-uni-view",{staticClass:"align-center justify-center",staticStyle:{padding:"50rpx 0rpx 20rpx 0rpx",background:"#FFFFFF"}},[e("v-uni-view",{staticClass:"align-center"},[e("v-uni-text",{staticClass:"text-color"},[t._v("查看更多")]),e("v-uni-text",{staticClass:"myicon icon-xiangyou1 text-color"})],1)],1)],2)})),1)],1)},a=[]},d9ac:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={computed:{tabScrollLeft:function(){return uni.upx2px(130*this.tabIdx)}},data:function(){return{tabIdx:0,tabs:["推荐","重大险","人寿险","储蓄险","医疗险","意外险"],insList:[{cover:"/static/logo.jpg",name:"首選健康保 1000",insType:"重疾險",insCorp:"萬通保險",insTag:["良性病變保障","1000%危疾救治報銷"]},{cover:"/static/logo.jpg",name:"創富傳承保障計劃2",insType:"儲蓄險",insCorp:"宏利人壽",insTag:["無限更換受保人","8年回本期"]},{cover:"/static/logo.jpg",name:"安進儲蓄系列II-躍進",insType:"儲蓄險",insCorp:"安盛保險",insTag:["3次更換受保人","8年回本期"]},{cover:"/static/logo.jpg",name:"活躍人生危疾保2",insType:"重疾險",insCorp:"宏利人壽",insTag:["多重危疾賠付","600%危疾賠償"]},{cover:"/static/logo.jpg",name:"加裕智倍保3-首護摯寳",insType:"重疾險",insCorp:"友邦保險",insTag:["多重癌症賠付","500%危疾賠償"]}]}},methods:{listIdxChange:function(t){this.tabIdx=t.detail.current}}};i.default=n}}]);