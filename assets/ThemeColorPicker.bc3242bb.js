import{_ as l,a as m}from"./index.17c7debc.js";import{b as c}from"./index.497f413d.js";import{B as d,bO as u,a1 as _,D as r,F as n,ab as f,ap as C,L as a,Y as k,w as h}from"./vendor.bf608252.js";import"./index.5a047550.js";/* empty css               *//* empty css                */import"./index.9993a592.js";import"./index.ae899590.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.bb263176.js";/* empty css               */import"./lock.102c2783.js";const v=d({name:"ThemeColorPicker",components:{CheckOutlined:u},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=m("setting-theme-picker");function s(i){e.event&&c(e.event,i)}return{prefixCls:o,handleClick:s}}}),y=["onClick"];function $(e,o,s,i,b,g){const p=_("CheckOutlined");return r(),n("div",{class:a(e.prefixCls)},[(r(!0),n(f,null,C(e.colorList||[],t=>(r(),n("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:k({background:t})},[h(p)],14,y))),128))],2)}var E=l(v,[["render",$]]);export{E as default};