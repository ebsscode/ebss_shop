(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1805:function(e,n,t){"use strict";t.r(n);var r=t("2db2"),i=t("6ce0");for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);var a=t("f0c5"),d=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"593e6fe1",null,!1,r["a"],void 0);n["default"]=d.exports},"2c8d":function(e,n,t){"use strict";t("7a82");var r=t("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("c7eb")),u=r(t("1da1")),a={data:function(){return{share_id:0,redirect_url:""}},onLoad:function(e){var n=this;return(0,u.default)((0,i.default)().mark((function t(){var r,u,a,d,o;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.loading(),e.share_id&&(uni.setStorageSync("share_id",e.share_id),n.share_id=share_id),e.redirect_url&&(uni.setStorageSync("redirect_url",decodeURIComponent(e.redirect_url)),n.redirect_url=redirect_url),t.next=5,n.get("page/page_index");case 5:r=t.sent,u=r.code,a=r.configs,d=r.location,o=r.front_module,r.user_id,1==u&&(uni.setStorageSync("front_module",o),uni.setStorageSync("location",d),uni.setStorageSync("configs",a)),n.go_home(n.redirect_url);case 13:case"end":return t.stop()}}),t)})))()},onHide:function(){this.unloading()},onUnload:function(){this.unloading()},methods:{}};n.default=a},"2db2":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){}));var r=function(){var e=this.$createElement,n=this._self._c||e;return n("v-uni-view",[n("StatusBar")],1)},i=[]},"6ce0":function(e,n,t){"use strict";t.r(n);var r=t("2c8d"),i=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=i.a}}]);