(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-index-play"],{"0083":function(t,i,e){var o=e("0c16");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("967d").default;n("9903a1a0",o,!0,{sourceMap:!1,shadowMode:!1})},"08fe":function(t,i,e){"use strict";e.r(i);var o=e("3231"),n=e("a76a");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("bb6e");var s=e("828b"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"79d23091",null,!1,o["a"],void 0);i["default"]=d.exports},"0c16":function(t,i,e){var o=e("c86c");i=o(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-c835577c]{background-color:#000}.item[data-v-c835577c]{\n  /* width : 750rpx; */background-color:#000;position:relative}.videoHover[data-v-c835577c]{position:absolute;top:0;left:0;flex:1;display:flex;background-color:rgba(0,0,0,.1);justify-content:center;align-items:center\n  /* border-style: dashed;\n\tborder-color: #DD524D;\n\tborder-width: 1px; */}.playState[data-v-c835577c]{opacity:.5;font-size:70px;color:#fff}.userInfo[data-v-c835577c]{position:absolute;bottom:110px;right:10px;flex-direction:column}.content[data-v-c835577c]{width:%?720?%;z-index:99;position:absolute;bottom:30px;\n  /* justify-content: center; */padding:%?15?%;font-size:%?28?%;display:flex;align-items:center;justify-content:space-between;color:#fff}.userName[data-v-c835577c]{font-size:%?30?%;color:#fff;margin-top:%?80?%}.words[data-v-c835577c]{margin-top:%?10?%;font-size:%?30?%;color:#fff}.root[data-v-c835577c]{background-color:#000}',""]),t.exports=i},3231:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o}));var o={uniPopup:e("b993").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("uni-popup",{ref:"popup",attrs:{"mask-background-color":"rgba(0,0,0,0.4)",type:"bottom"}},[e("v-uni-view",{staticStyle:{padding:"10px",background:"#ffffff","border-top":"10px"}},[e("v-uni-view",{staticClass:"flex-col",staticStyle:{"padding-top":"10px","padding-bottom":"10px","border-bottom":"1px solid #c8c7cc","margin-bottom":"10px"}},[t.operaInfo?e("v-uni-text",{staticClass:"uifont",staticStyle:{"font-weight":"700","font-size":"18px"}},[t._v(t._s(t.operaInfo.name))]):t._e(),t.video_collection_ist?e("v-uni-text",{staticClass:"uifont",staticStyle:{"font-size":"12px",color:"$C0C4CC","margin-top":"5px"}},[t._v("更新至第"+t._s(t.video_collection_ist.total)+"集")]):t._e()],1),e("v-uni-view",{staticClass:"grid-container",staticStyle:{width:"100%"}},[e("v-uni-scroll-view",{staticStyle:{height:"35vh",width:"100%"},attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"justify-start",staticStyle:{"flex-wrap":"wrap",width:"100%"}},[t.video_collection_ist&&t.video_collection_ist.total?t._l(t.video_collection_ist.data,(function(i,o){return e("v-uni-view",{key:o,staticStyle:{width:"30%",position:"relative",height:"170px","border-radius":"10px",margin:"0 1.5%","margin-bottom":"10px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPlay(i)}}},[e("v-uni-image",{staticStyle:{position:"absolute",width:"100%",height:"100%","border-radius":"10px","z-index":"1"},attrs:{src:t.staticURL()+"/"+(t.configs.logo_img||t.operaInfo.logo_img),mode:""}}),e("v-uni-view",{class:{"bg-color":i.video_collection_id==t.video_collection_id,"collection-bg":i.video_collection_id!=t.video_collection_id},staticStyle:{position:"absolute",width:"100%",bottom:"0","text-align":"center","border-bottom-right-radius":"10px","border-bottom-left-radius":"10px","z-index":"3",color:"#ffffff"}},[t._v("第"+t._s(i.sort_num)+"集")])],1)})):t._e()],2)],1)],1)],1)],1)],1)},a=[]},"3b9c":function(t,i,e){"use strict";(function(t){e("6a54");var o=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("fd3c"),e("aa9c"),e("bd06");var n=o(e("b7c7")),a=o(e("2634")),s=o(e("2fdc")),d=o(e("08fe")),c=uni.createInnerAudioContext();c.loop=!0;var l={components:{VideoCollection:d.default},data:function(){return{windowWidth:0,windowHeight:0,platform:"",model:"",deleteHeight:0,dataList:[],k:0,oldVideo:"",voice:"",timeout:"",current:0,boxStyle:{height:0,width:0},isShow:!1,showPlay:!1,rotates:0,rotateTime:"",xrotats:"",mpcleartime:"",isClick:!1,changeTimeout:"",mptime:0,mpstartTime:0,duration:500,video_id:0,videoInfo:null,video_collection_id:0}},mounted:function(){var t=this;setTimeout((function(){t.$refs["VideoCollection"].open()}),2e3)},watch:{k:function(i,e){var o=this;return(0,s.default)((0,a.default)().mark((function n(){return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:o.isShow=!1,o.dataList[e].playIng=!1,o.dataList[e].isplay=!0,o.dataList[e].state="pause",t.log("预留第"+(e+1)+"个视频："+o.dataList[e]._id+e),uni.createVideoContext(o.dataList[e]._id+""+e,o).stop(),t.log("已经暂停 --\x3e 第"+(e+1)+"个视频～"),o.dataList[i].state="play",o.isShow=!0,o.xrotats=setTimeout((function(){o.showPlay=!0}),200),clearTimeout(o.changeTimeout),o.dataList[i].isplay=!1,setTimeout((function(){o.dataList[i].playIng=!0}),250),o.mptime<.2?o.changeTimeout=setTimeout((function(){uni.createVideoContext(o.dataList[o.k]._id+""+o.k,o).play()}),1400):uni.createVideoContext(o.dataList[o.k]._id+""+o.k,o).play(),o.video_collection_id=o.dataList[o.k].video_collection_id;case 15:case"end":return n.stop()}}),n)})))()}},onLoad:function(t){var i=this;this.video_id=t.video_id,t.video_collection_id&&(this.video_collection_id=t.video_collection_id),this.platform=uni.getSystemInfoSync().platform,this.model=uni.getSystemInfoSync().model;var e=this.model;"ios"!=this.platform||"iPhone6"===e&&"iPhone6s"===e&&"iPhone7"===e&&"iPhone8"===e||(this.deleteHeight=0),this.windowWidth=uni.getSystemInfoSync().windowWidth,this.windowHeight=uni.getSystemInfoSync().windowHeight,this.boxStyle.width=this.windowWidth+"px",this.boxStyle.height=this.windowHeight-this.deleteHeight,this.get("crud/detail",{table:"video",video_id:this.video_id}).then((function(t){var e=t.code,o=t.detail;1==e&&(i.videoInfo=o,i.getData())}))},onShow:function(){0!==this.dataList.length&&(this.dataList[this.k].state="play",uni.createVideoContext(this.dataList[this.k]._id+""+this.k,this).play())},onHide:function(){this.dataList[this.k].state="pause",uni.createVideoContext(this.dataList[this.k]._id+""+this.k,this).pause()},methods:{mpTouchend:function(){this.mptime=new Date/1e3-this.mpstartTime},mpTouchstart:function(){this.mpstartTime=new Date/1e3},clearTime:function(){for(var t=0;t<20;t++)clearTimeout(this.rotateTime),clearTimeout(this.xrotats)},play:function(){t.log("start play")},ended:function(){},timeupdate:function(t){},tapVideoHover:function(i,e){t.log("state--",i),this.dataList[this.k].state="play"==i||"continue"==i?"pause":"continue","continue"==this.dataList[this.k].state&&(this.isClick=!0,this.dataList[this.k].playIng=!0,uni.createVideoContext(this.dataList[this.k]._id+""+this.k,this).play(),this.dataList[this.k].isplay=!1),"pause"==this.dataList[this.k].state&&(uni.createVideoContext(this.dataList[this.k]._id+""+this.k,this).pause(),this.dataList[this.k].isplay=!0)},change:function(t){var i=t.detail.current;this.k=i},stopTouchMove:function(i){t.log("stopTouchMove",i)},animationfinish:function(i){this.k==this.dataList.length-1&&(t.log("全部播放完了"),this.error("当前播放为最后一集"))},getData:function(){var i=this;this.get("crud/list",{table:"video_collection",video_id:this.video_id,limit:9999}).then((function(e){var o=e.code,a=e.paginate;if(1==o){var s;i.isShow=!1;var d=a.data,c=d.map((function(t){return t.isplay=!0,t.playIng=!1,t.src=i.staticURL()+"/"+t.video_url,t.state="pause",t._id=t.video_collection_id,t}));(s=i.dataList).push.apply(s,(0,n.default)(c));var l=0;if(i.video_collection_id){var r=i.dataList.findIndex((function(t){return t.video_collection_id==i.video_collection_id}));r>=0&&(l=r)}t.log("now_k",l),setTimeout((function(){i.isShow=!0,i.dataList[l].isplay=!1,i.dataList[l].state="play",i.dataList[l].playIng=!0,setTimeout((function(){uni.createVideoContext(i.dataList[l]._id+""+l,i).play(),i.current=l}),500)}),200),i.video_collection_id=i.dataList[l]._id}}))}}};i.default=l}).call(this,e("ba7c")["default"])},"5dbd":function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("64aa");var o={name:"VideoCollection",components:{},props:{video_id:{type:[Number,String],default:0},video_collection_id:{type:[Number,String],default:0}},data:function(){return{configs:uni.getStorageSync("configs"),operaInfo:null,video_collection_ist:null,userInfo:{}}},created:function(){var t=this;this.get("crud/detail",{table:"video",video_id:this.video_id}).then((function(i){var e=i.code,o=i.detail;1==e&&(t.operaInfo=o)})),this.get("crud/list",{table:"video_collection",video_id:this.video_id}).then((function(i){var e=i.code,o=i.paginate;1==e&&(t.video_collection_ist=o)})),this.get("user/user_info").then((function(i){var e=i.code,o=i.user_info;1==e&&(t.userInfo=o)}))},methods:{goPlay:function(t){this.redirect("/pages/video/index/play?video_id="+t.video_id+"&video_collection_id="+t.video_collection_id)},open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()}}};i.default=o},"8ce3":function(t,i,e){var o=e("ac7b");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("967d").default;n("614210e0",o,!0,{sourceMap:!1,shadowMode:!1})},"8e0a":function(t,i,e){"use strict";var o=e("0083"),n=e.n(o);n.a},a76a:function(t,i,e){"use strict";e.r(i);var o=e("5dbd"),n=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(a);i["default"]=n.a},ac7b:function(t,i,e){var o=e("c86c");i=o(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 通用 */\n/* 文字尺寸 */\n/* 页面配置 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-79d23091]{z-index:9999;background:#fff;width:%?750?%;border-radius:%?32?% %?32?% 0 0;box-sizing:border-box;padding:%?24?%}.container .collection-bg[data-v-79d23091]{background-color:rgba(0,0,0,.3)}',""]),t.exports=i},bb6e:function(t,i,e){"use strict";var o=e("8ce3"),n=e.n(o);n.a},c897:function(t,i,e){"use strict";e.r(i);var o=e("3b9c"),n=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(a);i["default"]=n.a},df01:function(t,i,e){"use strict";e.r(i);var o=e("e52b"),n=e("c897");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("8e0a");var s=e("828b"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"c835577c",null,!1,o["a"],void 0);i["default"]=d.exports},e52b:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o}));var o={uniIcons:e("57fa").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("StatusBar"),e("TopBar",{attrs:{title:""}}),e("v-uni-swiper",{style:"width: "+t.windowWidth+"px; height: "+t.windowHeight+"px; background-color: #000000;",attrs:{vertical:!0,current:t.current,"indicator-dots":!1},on:{animationfinish:function(i){arguments[0]=i=t.$handleEvent(i),t.animationfinish.apply(void 0,arguments)},change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)},touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.mpTouchstart.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.mpTouchend.apply(void 0,arguments)}}},t._l(t.dataList,(function(i,o){return e("v-uni-swiper-item",{key:o,attrs:{catchtouchmove:"stopTouchMove"}},[Math.abs(t.k-o)<=1?e("v-uni-view",[e("v-uni-view",[t.isShow?e("v-uni-video",{style:"width: "+t.windowWidth+"px; height: "+t.windowHeight+"px; background-color: #000000; z-index: -1;",attrs:{id:i._id+""+o,loop:!0,muted:i.isplay,controls:!1,"http-cache":!0,"page-gesture":!1,"show-fullscreen-btn":!1,"show-loading":!1,"show-center-play-btn":!1,"enable-progress-gesture":!1,src:i.src,poster:t.staticURL()+"/"+t.videoInfo.logo_img},on:{play:function(i){arguments[0]=i=t.$handleEvent(i),t.play.apply(void 0,arguments)},ended:function(i){arguments[0]=i=t.$handleEvent(i),t.ended.apply(void 0,arguments)},timeupdate:function(i){arguments[0]=i=t.$handleEvent(i),t.timeupdate.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapVideoHover(i.state,e)}}}):t._e(),i.playIng?t._e():e("v-uni-image",{style:"width: "+t.windowWidth+"px; height: "+t.windowHeight+"px; position: absolute;",attrs:{src:t.staticURL()+"/"+t.videoInfo.logo_img,mode:"aspectFit"}})],1),e("v-uni-view",{staticClass:"videoHover",style:"width: "+t.windowWidth+"px; height: "+t.windowHeight+"px;",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapVideoHover(i.state,e)}}},["pause"==i.state?e("v-uni-text",{staticClass:"QQ811565456 hewei-c164zanting playState"}):t._e()],1),e("v-uni-view",{staticClass:"content"},[t.videoInfo?e("v-uni-view",{staticClass:"name flex align-center"},[t._v(t._s(t.videoInfo.name))]):t._e(),t.videoInfo?e("v-uni-view",{staticClass:"flex align-center",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$refs["VideoCollection"].open()}}},[t._v("共"+t._s(t.dataList.length)+"集 ，当前播放"+t._s(t.dataList[t.k].sort_num)+"集"),e("uni-icons",{attrs:{type:"forward",size:"14",color:"#ffffff"}})],1):t._e()],1)],1):t._e()],1)})),1),e("VideoCollection",{ref:"VideoCollection",attrs:{video_id:t.video_id,video_collection_id:t.video_collection_id}})],1)},a=[]}}]);