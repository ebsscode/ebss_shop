(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-list-1~pages-video-index-home~pages-video-index-play"],{"02ae":function(t,n,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("c975");var o=e(i("6738")),a={name:"uniPopup",components:{keypress:o.default},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup:function(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop:function(){return this.popupWidth>=500&&this.popupHeight>=500},bg:function(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted:function(){var t=this;(function(){var n=uni.getSystemInfoSync(),i=n.windowWidth,e=n.windowHeight,o=n.windowTop,a=n.safeArea,s=(n.screenHeight,n.safeAreaInsets);t.popupWidth=i,t.popupHeight=e+(o||0),a&&t.safeArea?t.safeAreaInsets=s.bottom:t.safeAreaInsets=0})()},destroyed:function(){this.setH5Visible()},created:function(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible:function(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask:function(){this.maskShow=!1},disableMask:function(){this.mkclick=!1},clear:function(t){t.stopPropagation(),this.clearPropagation=!0},open:function(t){if(!this.showPopup){t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)}},close:function(t){var n=this;this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((function(){n.showPopup=!1}),300)},touchstart:function(){this.clearPropagation=!1},onTap:function(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top:function(t){var n=this;this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((function(){n.messageChild&&"message"===n.type&&n.messageChild.timerClose()})))},bottom:function(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center:function(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left:function(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right:function(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}};n.default=a},"27ba":function(t,n,i){"use strict";i.r(n);var e=i("02ae"),o=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},2909:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return(0,e.default)(t)||(0,o.default)(t)||(0,a.default)(t)||(0,s.default)()};var e=r(i("6005")),o=r(i("db90")),a=r(i("06c5")),s=r(i("3427"));function r(t){return t&&t.__esModule?t:{default:t}}},"29f1":function(t,n,i){"use strict";i.r(n);var e=i("acce"),o=i("4841");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);var s=i("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"1a12f82f",null,!1,e["a"],void 0);n["default"]=r.exports},3427:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},i("d9e2"),i("d401")},4830:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 通用 */\r\n/* 文字尺寸 */\r\n/* 页面配置 */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup[data-v-3193bb52]{position:fixed;z-index:99}.uni-popup.top[data-v-3193bb52], .uni-popup.left[data-v-3193bb52], .uni-popup.right[data-v-3193bb52]{top:var(--window-top)}.uni-popup .uni-popup__wrapper[data-v-3193bb52]{display:block;position:relative\r\n  /* iphonex 等安全区设置，底部安全区适配 */}.uni-popup .uni-popup__wrapper.left[data-v-3193bb52], .uni-popup .uni-popup__wrapper.right[data-v-3193bb52]{padding-top:var(--window-top);flex:1}.fixforpc-z-index[data-v-3193bb52]{z-index:999}.fixforpc-top[data-v-3193bb52]{top:0}',""]),t.exports=n},4841:function(t,n,i){"use strict";i.r(n);var e=i("9d0d"),o=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},6005:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){if(Array.isArray(t))return(0,e.default)(t)};var e=function(t){return t&&t.__esModule?t:{default:t}}(i("6b75"))},6738:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("7db0"),i("d3b7"),i("b64b"),i("caad"),i("2532");var e={name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted:function(){var t=this,n={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(function(i){if(!t.disable){var e=Object.keys(n).find((function(t){var e=i.key,o=n[t];return o===e||Array.isArray(o)&&o.includes(e)}));e&&setTimeout((function(){t.$emit(e,{})}),0)}}))},render:function(){}};n.default=e},"9d0d":function(t,n,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("2909")),a=e(i("53ca")),s=e(i("5530"));i("a9e3"),i("d3b7"),i("159b"),i("99af"),i("ac1f"),i("5319");var r=i("c65c"),u={name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:function(){return"fade"}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:function(){return{isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}},watch:{show:{handler:function(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,s.default)((0,s.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),n="";for(var i in t){var e=this.toLine(i);n+=e+":"+t[i]+";"}return n},transformStyles:function(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created:function(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.duration&&(this.durationTime=t.duration),this.animation=(0,r.createAnimation)(Object.assign(this.config,t),this)},onClick:function(){this.$emit("click",{detail:this.isShow})},step:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.animation){for(var i in t)try{var e;if("object"===(0,a.default)(t[i]))(e=this.animation)[i].apply(e,(0,o.default)(t[i]));else this.animation[i](t[i])}catch(s){console.error("方法 ".concat(i," 不存在"))}return this.animation.step(n),this}},run:function(t){this.animation&&this.animation.run(t)},open:function(){var t=this;clearTimeout(this.timer),this.transform="",this.isShow=!0;var n=this.styleInit(!1),i=n.opacity,e=n.transform;"undefined"!==typeof i&&(this.opacity=i),this.transform=e,this.$nextTick((function(){t.timer=setTimeout((function(){t.animation=(0,r.createAnimation)(t.config,t),t.tranfromInit(!1).step(),t.animation.run(),t.$emit("change",{detail:t.isShow})}),20)}))},close:function(t){var n=this;this.animation&&this.tranfromInit(!0).step().run((function(){n.isShow=!1,n.animationData=null,n.animation=null;var t=n.styleInit(!1),i=t.opacity,e=t.transform;n.opacity=i||1,n.transform=e,n.$emit("change",{detail:n.isShow})}))},styleInit:function(t){var n=this,i={transform:""},e=function(t,e){"fade"===e?i.opacity=n.animationType(t)[e]:i.transform+=n.animationType(t)[e]+" "};return"string"===typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((function(n){e(t,n)})),i},tranfromInit:function(t){var n=this,i=function(t,i){var e=null;"fade"===i?e=t?0:1:(e=t?"-100%":"0","zoom-in"===i&&(e=t?.8:1),"zoom-out"===i&&(e=t?1.2:1),"slide-right"===i&&(e=t?"100%":"0"),"slide-bottom"===i&&(e=t?"100%":"0")),n.animation[n.animationMode()[i]](e)};return"string"===typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((function(n){i(t,n)})),this.animation},animationType:function(t){return{fade:t?1:0,"slide-top":"translateY(".concat(t?"0":"-100%",")"),"slide-right":"translateX(".concat(t?"0":"100%",")"),"slide-bottom":"translateY(".concat(t?"0":"100%",")"),"slide-left":"translateX(".concat(t?"0":"-100%",")"),"zoom-in":"scaleX(".concat(t?1:.8,") scaleY(").concat(t?1:.8,")"),"zoom-out":"scaleX(".concat(t?1:1.2,") scaleY(").concat(t?1:1.2,")")}},animationMode:function(){return{fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=u},a261:function(t,n,i){"use strict";var e=i("f6cb"),o=i.n(e);o.a},acce:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"ani",class:t.customClass,style:t.transformStyles,attrs:{animation:t.animationData},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[]},be87:function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var e={uniTransition:i("29f1").default},o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.showPopup?i("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle,t.isDesktop?"fixforpc-z-index":""]},[i("v-uni-view",{on:{touchstart:function(n){arguments[0]=n=t.$handleEvent(n),t.touchstart.apply(void 0,arguments)}}},[t.maskShow?i("uni-transition",{key:"1",attrs:{name:"mask","mode-class":"fade",styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)}}}):t._e(),i("uni-transition",{key:"2",attrs:{"mode-class":t.ani,name:"content",styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.popupstyle],style:{backgroundColor:t.bg},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1),t.maskShow?i("keypress",{on:{esc:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)}}}):t._e()],1):t._e()},a=[]},bf16:function(t,n,i){"use strict";i.r(n);var e=i("be87"),o=i("27ba");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("a261");var s=i("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"3193bb52",null,!1,e["a"],void 0);n["default"]=r.exports},c65c:function(t,n,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.createAnimation=function(t,n){if(!n)return;return clearTimeout(n.timer),new r(t,n)},i("caad"),i("2532"),i("99af"),i("d3b7"),i("159b");var o=e(i("5530")),a=e(i("d4ec")),s=e(i("bee2")),r=function(){function t(n,i){(0,a.default)(this,t),this.options=n,this.animation=uni.createAnimation((0,o.default)({},n)),this.currentStepAnimates={},this.next=0,this.$=i}return(0,s.default)(t,[{key:"_nvuePushAnimates",value:function(t,n){var i=this.currentStepAnimates[this.next],e={};if(e=i||{styles:{},config:{}},u.includes(t)){e.styles.transform||(e.styles.transform="");var o="";"rotate"===t&&(o="deg"),e.styles.transform+="".concat(t,"(").concat(n+o,") ")}else e.styles[t]="".concat(n);this.currentStepAnimates[this.next]=e}},{key:"_animateRun",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.$.$refs["ani"].ref;if(i)return new Promise((function(e,a){nvueAnimation.transition(i,(0,o.default)({styles:t},n),(function(t){e()}))}))}},{key:"_nvueNextAnimate",value:function(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2?arguments[2]:void 0,o=t[i];if(o){var a=o.styles,s=o.config;this._animateRun(a,s).then((function(){i+=1,n._nvueNextAnimate(t,i,e)}))}else this.currentStepAnimates={},"function"===typeof e&&e(),this.isEnd=!0}},{key:"step",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.animation.step(t),this}},{key:"run",value:function(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((function(){"function"===typeof t&&t()}),this.$.durationTime)}}]),t}(),u=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];u.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((function(t){r.prototype[t]=function(){var n;return(n=this.animation)[t].apply(n,arguments),this}}))},db90:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630")},f6cb:function(t,n,i){var e=i("4830");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("14db3ed0",e,!0,{sourceMap:!1,shadowMode:!1})}}]);