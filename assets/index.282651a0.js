import{_ as k,z as d,N as L,aL as B,a as y,W as S}from"./index.43839f3b.js";import{B as D,c5 as v,j as f,a1 as o,D as n,F as w,w as P,a2 as u,ad as m,L as C,ab as E,u as r}from"./vendor.bf608252.js";import{c as T,u as F}from"./index.3eee8225.js";import I from"./SessionTimeoutLogin.921fa94c.js";import"./index.8bb357d3.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.2d066eae.js";/* empty css               *//* empty css               */import"./lock.db210ee4.js";import"./Login.d33ec1a5.js";import"./LoginForm.a6f0850c.js";/* empty css              *//* empty css               */import"./LoginFormTitle.ce95a10e.js";const x=D({name:"LayoutFeatures",components:{BackTop:v,LayoutLockPage:T(()=>d(()=>import("./index.cef583f4.js"),["assets/index.cef583f4.js","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/LockPage.90bf780e.js","assets/LockPage.74e81a43.css","assets/index.43839f3b.js","assets/index.007abcad.css","assets/lock.db210ee4.js","assets/header.d801b988.js"])),SettingDrawer:T(()=>d(()=>import("./index.d9e4956f.js").then(function(e){return e.i}),["assets/index.d9e4956f.js","assets/index.17eb4c41.css","assets/index.813dcd61.js","assets/index.5c7227e9.css","assets/index.00780982.css","assets/index.43839f3b.js","assets/index.007abcad.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.3eee8225.js","assets/index.f8c87140.css","assets/index.5aa8aa0e.css","assets/index.8bb357d3.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.2d066eae.js","assets/lock.db210ee4.js"])),SessionTimeoutLogin:I},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:c,getFullContent:g}=L(),_=B(),{prefixCls:l}=y("setting-drawer-feature"),{getShowHeader:s}=F(),a=f(()=>_.getSessionTimeout),i=f(()=>{if(!r(p))return!1;const t=r(c);return t===S.AUTO?!r(s)||r(g):t===S.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:i,prefixCls:l,getIsSessionTimeout:a}}});function O(e,p,c,g,_,l){const s=o("LayoutLockPage"),a=o("BackTop"),i=o("SettingDrawer"),t=o("SessionTimeoutLogin");return n(),w(E,null,[P(s),e.getUseOpenBackTop?(n(),u(a,{key:0,target:e.getTarget},null,8,["target"])):m("",!0),e.getIsFixedSettingDrawer?(n(),u(i,{key:1,class:C(e.prefixCls)},null,8,["class"])):m("",!0),e.getIsSessionTimeout?(n(),u(t,{key:2})):m("",!0)],64)}var J=k(x,[["render",O]]);export{J as default};
