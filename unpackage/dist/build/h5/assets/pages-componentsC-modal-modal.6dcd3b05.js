import{v as o,o as n,c as t,w as e,d as s,a as l,e as c,f as i,F as w,r as h,h as a,g as u}from"./index-11e68488.js";import{_ as r}from"./wu-navbar.6d60d02f.js";import{r as m}from"./uni-app.es.0596e349.js";import{_ as d,a as p}from"./wu-cell-group.ee798d81.js";import{_ as f}from"./logo.eb52ad7a.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import"./wu-icon.d51d82ec.js";import"./wu-line.f86cd15c.js";const v=C({data:()=>({content:"模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作",show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,show7:!1,show8:!1,show9:!1,list:[{title:"基础使用",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/4.png"},{title:"无标题",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/5.png"},{title:"带取消按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/2.png"},{title:"异步关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/6.png"},{title:"对调取消和确认按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/3.png"},{title:"允许点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/7.png"},{title:"传入slot",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/1.png"},{title:"自定义按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/8.png"},{title:"淡入淡出动画",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/9.png"}]}),methods:{showModal(o){this["show"+(o+1)]=!0},navigateBack(){o()},confirm4(){setTimeout(()=>{this.show4=!1},2e3)},confirm(){this.show3=!1,console.log("confirm")},cancel(){this.show3=!1,console.log("cancel")},close(){this.show3=!1,console.log("close")}}},[["render",function(o,C,v,g,k,_){const U=m(h("wu-navbar"),r),j=a("u-gap"),x=u,y=m(h("wu-cell"),d),O=m(h("wu-cell-group"),p),B=a("u-modal"),b=a("u-button"),L=s;return n(),t(L,{class:"wu-page"},{default:e(()=>[l(U,{title:"模态框",onLeftClick:_.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),l(j,{height:"20",bgColor:"#fff"}),l(O,null,{default:e(()=>[(n(!0),c(w,null,i(k.list,(o,s)=>(n(),t(y,{onClick:o=>_.showModal(s),title:o.title,key:s,isLink:""},{default:e(()=>[l(x,{slot:"icon",class:"wu-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])]),_:2},1032,["onClick","title"]))),128))]),_:1}),l(B,{content:k.content,title:"标题",show:k.show1,onConfirm:C[0]||(C[0]=()=>k.show1=!1)},null,8,["content","show"]),l(B,{content:k.content,show:k.show2,onConfirm:C[1]||(C[1]=()=>k.show2=!1)},null,8,["content","show"]),l(B,{content:k.content,show:k.show3,showCancelButton:"",closeOnClickOverlay:"",onConfirm:_.confirm,onCancel:_.cancel,onClose:_.close},null,8,["content","show","onConfirm","onCancel","onClose"]),l(B,{content:k.content,show:k.show4,showCancelButton:"",asyncClose:"",onConfirm:_.confirm4,onCancel:C[2]||(C[2]=()=>k.show4=!1)},null,8,["content","show","onConfirm"]),l(B,{content:k.content,show:k.show5,showCancelButton:"",buttonReverse:"",onConfirm:C[3]||(C[3]=()=>k.show5=!1),onCancel:C[4]||(C[4]=()=>k.show5=!1)},null,8,["content","show"]),l(B,{content:k.content,title:"标题",show:k.show6,closeOnClickOverlay:"",onConfirm:C[5]||(C[5]=()=>k.show6=!1),onClose:C[6]||(C[6]=()=>k.show6=!1)},null,8,["content","show"]),l(B,{title:"利剑出鞘,一统江湖",show:k.show7,closeOnClickOverlay:"",onConfirm:C[7]||(C[7]=()=>k.show7=!1)},{default:e(()=>[l(x,{style:{width:"80px",height:"80px"},src:f})]),_:1},8,["show"]),l(B,{title:"标题",show:k.show8,content:k.content,closeOnClickOverlay:"",showCancelButton:""},{default:e(()=>[l(b,{slot:"confirmButton",text:"确定",type:"success",shape:"circle",onClick:C[8]||(C[8]=o=>k.show8=!1)})]),_:1},8,["show","content"]),l(B,{content:k.content,title:"标题",show:k.show9,zoom:!1,onConfirm:C[9]||(C[9]=()=>k.show9=!1)},null,8,["content","show"])]),_:1})}],["__scopeId","data-v-5d71e7f8"]]);export{v as default};