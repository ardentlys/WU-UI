import{o as e,c as t,w as o,d as i,a as n,e as s,f as r,F as d,h as l,r as a,g as u}from"./index-11e68488.js";import{_ as c,a as m}from"./wu-cell-group.ee798d81.js";import{r as f}from"./uni-app.es.0596e349.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";import"./wu-icon.d51d82ec.js";import"./wu-line.f86cd15c.js";const w=p({data:()=>({mode:"",show:!1,style:{position:"fixed",top:uni.$u.sys().windowHeight/2-50+"px",left:uni.$u.sys().windowWidth/2-50+"px",width:"120px",height:"120px",backgroundColor:"#1989fa"},list:[{mode:"fade",title:"淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fade.png"},{mode:"fade-up",title:"上滑淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeUp.png"},{mode:"zoom",title:"缩放",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/zoom.png"},{mode:"fade-zoom",title:"缩放淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeZoom.png"},{mode:"fade-down",title:"下滑淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeDown.png"},{mode:"fade-left",title:"左滑淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeLeft.png"},{mode:"fade-right",title:"右滑淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeRight.png"},{mode:"slide-up",title:"上滑进入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/slideUp.png"},{mode:"slide-down",title:"下滑进入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/slideDown.png"},{mode:"slide-left",title:"左滑进入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/slideLeft.png"},{mode:"slide-right",title:"右滑进入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/slideRight.png"}]}),mixins:[uni.$u.mixin],methods:{openTransition(e){this.mode=e,this.show=!0,setTimeout(()=>{this.show=!1},1500)},click(){},beforeEnter(){},enter(){},afterEnter(){},beforeLeave(){},leave(){},afterLeave(){}}},[["render",function(p,w,h,v,g,U){const L=l("u-gap"),x=u,E=f(a("wu-cell"),c),_=i,b=l("u-transition"),k=f(a("wu-cell-group"),m);return e(),t(_,{class:"wu-page"},{default:o(()=>[n(L,{height:"20",bgColor:"#fff"}),n(k,{border:""},{default:o(()=>[(e(!0),s(d,null,r(g.list,(i,s)=>(e(),t(E,{titleStyle:{fontWeight:500},onClick:e=>U.openTransition(i.mode),title:i.title,key:s,clickable:""},{default:o(()=>[n(x,{slot:"icon",class:"wu-cell-icon",src:i.iconUrl,mode:"widthFix"},null,8,["src"])]),_:2},1032,["onClick","title"]))),128)),n(b,{mode:g.mode,show:g.show,"custom-style":g.style,onClick:U.click,onBeforeEnter:U.beforeEnter,onEnter:U.enter,onAfterEnter:U.afterEnter,onBeforeLeave:U.beforeLeave,onLeave:U.leave,onAfterLeave:U.afterLeave},{default:o(()=>[n(_,{class:"transition"})]),_:1},8,["mode","show","custom-style","onClick","onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])]),_:1})]),_:1})}],["__scopeId","data-v-a1dbe665"]]);export{w as default};
