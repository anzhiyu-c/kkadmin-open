var E=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&g(e,t,r[t]);if(F)for(var t of F(r))I.call(r,t)&&g(e,t,r[t]);return e},b=(e,r)=>v(e,x(r));var f=(e,r,t)=>new Promise((s,n)=>{var c=u=>{try{l(t.next(u))}catch(i){n(i)}},d=u=>{try{l(t.throw(u))}catch(i){n(i)}},l=u=>u.done?s(u.value):Promise.resolve(u.value).then(c,d);l((t=t.apply(e,r)).next())});import{B as k,u as N}from"./useForm.c7ebaa5e.js";import{A as m,bd as S,B as T,r as B,u as h,j as R,a1 as w,D as y,a2 as M,a6 as P,w as $,a5 as q}from"./vendor.bf608252.js";/* empty css               */import{f as L,_ as V}from"./index.6bec1d86.js";import{T as O}from"./index.c6520767.js";import{B as W,a as j}from"./index.5a9d4c3a.js";import{n as U,o as z}from"./friend.e2902fdb.js";const{userInfo:a}=L(),ue=[{title:"\u6807\u7B7E\u540D\u79F0",dataIndex:"name",width:300},{title:"\u80CC\u666F\u989C\u8272",dataIndex:"bgColor",width:200,customRender:({record:e})=>m("span",{style:"color:"+e.bgColor},e.bgColor)},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:100},{title:"\u63CF\u8FF0",dataIndex:"description"},{title:"\u521B\u5EFA\u4EBA",dataIndex:"user",customRender:({record:e})=>{const r=e.user.length>0?e.user[0]:{},t=r.userName||"",n=r.nickName||""||t,c=r.link||"#";return m("a",{href:c,target:"_blank"},n)}},{title:"\u9884\u89C8\u6807\u7B7E",dataIndex:"tag",customRender:({record:e})=>{const r=e.bgColor,t=e.name;return m(S,{color:r},()=>t)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",customRender:({record:e})=>m(O,{value:e.createdAt,mode:"date"})}],ae=[{field:"name",label:"\u6807\u7B7E\u540D\u79F0",component:"Input",colProps:{span:6},labelWidth:"80px"},{field:"bgColor",label:"\u80CC\u666F\u989C\u8272",component:"Input",colProps:{span:6},labelWidth:"80px"},{field:"user",label:"\u521B\u5EFA\u7528\u6237",component:"Input",helpMessage:"\u8BF7\u8F93\u5165\u7528\u6237_id",colProps:{span:6},labelWidth:"100px",ifShow:a==null?void 0:a.permCode.includes("get:allFriendList")}],G=[{field:"name",label:"\u6807\u7B7E\u540D\u79F0",component:"Input",required:!0},{field:"bgColor",label:"\u80CC\u666F\u989C\u8272",component:"Input",required:!0},{field:"orderNo",label:"\u6392\u5E8F",component:"InputNumber",defaultValue:0,required:!0},{field:"description",label:"\u63CF\u8FF0",component:"InputTextArea",defaultValue:"",required:!1},{field:"user",label:"\u521B\u5EFA\u7528\u6237",component:"Input",defaultValue:a==null?void 0:a._id,required:!0,ifShow:a==null?void 0:a.permCode.includes("get:allFriendList")}],H=T({name:"MenuDrawer",components:{BasicDrawer:W,BasicForm:k},emits:["success","register"],setup(e,{emit:r}){const t=B(!0),s=B(null),[n,{resetFields:c,setFieldsValue:d,validate:l}]=N({labelWidth:100,schemas:G,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[u,{setDrawerProps:i,closeDrawer:C}]=j(o=>f(this,null,function*(){c(),i({confirmLoading:!1}),t.value=!!(o==null?void 0:o.isUpdate),t.value?s.value=o.record._id:s.value=null,h(t)&&d(b(p({},o.record),{user:o.record.user[0]._id}))})),_=R(()=>h(t)?"\u7F16\u8F91\u6807\u7B7E":"\u6DFB\u52A0\u6807\u7B7E");function D(){return f(this,null,function*(){try{const o=yield l();i({confirmLoading:!0}),s.value?yield U(p({_id:s.value},o)):yield z(o),C(),r("success")}finally{i({confirmLoading:!1})}})}return{registerDrawer:u,registerForm:n,getTitle:_,handleSubmit:D}}});function J(e,r,t,s,n,c){const d=w("BasicForm"),l=w("BasicDrawer");return y(),M(l,q(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:P(()=>[$(d,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var K=V(H,[["render",J]]),se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});export{K as M,se as a,ue as c,ae as s};