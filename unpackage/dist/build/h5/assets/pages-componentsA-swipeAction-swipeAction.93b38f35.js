import{x as t,o,c as e,w as s,d as a,a as l,b as c,u as i,e as n,f as d,F as u,i as _,h as p,p as f,t as r}from"./index-11e68488.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";const w=b({data:()=>({show1:!0,moveX:0,showText:"当前状态：关",showStatus:!1,options1:[{text:"删除",style:{backgroundColor:"#f56c6c"}}],options2:[{text:"收藏",style:{backgroundColor:"#3c9cff"}},{text:"删除",style:{backgroundColor:"#f56c6c"}}],options3:[{text:"收藏",icon:"star-fill",iconSize:"20",style:{backgroundColor:"#f9ae3d"}}],options4:[{text:"禁用状态",disabled:!0,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]},{text:"正常状态",disabled:!1,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]},{text:"自动关闭",disabled:!1,options:[{text:"置顶",style:{backgroundColor:"#3c9cff"}},{text:"取消",style:{backgroundColor:"#f9ae3d"}}]}],options5:[{icon:"trash-fill",style:{backgroundColor:"#f56c6c",width:"40px",height:"40px",borderRadius:"100px",margin:"0 6px"}},{icon:"heart-fill",style:{backgroundColor:"#5ac725",width:"40px",height:"40px",borderRadius:"100px",margin:"0 6px"}}]}),methods:{click(o){console.log("click",o),t({title:"温馨提示",content:"确定要删除吗？",success:t=>{t.confirm&&(this.show1=!1)}})}}},[["render",function(t,b,w,x,m,k){const g=_,h=a,y=p("u-swipe-action-item"),C=p("u-swipe-action");return o(),e(h,{class:"wu-page"},{default:s(()=>[l(h,{class:"wu-demo-block"},{default:s(()=>[l(g,{class:"wu-demo-block__title"},{default:s(()=>[c("演示案例")]),_:1}),l(h,{class:"wu-page__swipe-action-item"},{default:s(()=>[l(C,null,{default:s(()=>[m.show1?(o(),e(y,{key:0,options:m.options1,onClick:k.click},{default:s(()=>[l(h,{class:"swipe-action u-border-top u-border-bottom"},{default:s(()=>[l(h,{class:"swipe-action__content"},{default:s(()=>[l(g,{class:"swipe-action__content__text"},{default:s(()=>[c("基础使用")]),_:1})]),_:1})]),_:1})]),_:1},8,["options","onClick"])):i("",!0)]),_:1})]),_:1})]),_:1}),l(h,{class:"wu-demo-block"},{default:s(()=>[l(g,{class:"wu-demo-block__title"},{default:s(()=>[c("按钮组")]),_:1}),l(h,{class:"wu-page__swipe-action-item"},{default:s(()=>[l(C,null,{default:s(()=>[l(y,{options:m.options2},{default:s(()=>[l(h,{class:"swipe-action u-border-top u-border-bottom"},{default:s(()=>[l(h,{class:"swipe-action__content"},{default:s(()=>[l(g,{class:"swipe-action__content__text"},{default:s(()=>[c("两个按钮并列")]),_:1})]),_:1})]),_:1})]),_:1},8,["options"])]),_:1})]),_:1})]),_:1}),l(h,{class:"wu-demo-block"},{default:s(()=>[l(g,{class:"wu-demo-block__title"},{default:s(()=>[c("带图标")]),_:1}),l(h,{class:"wu-page__swipe-action-item"},{default:s(()=>[l(C,null,{default:s(()=>[l(y,{options:m.options3},{default:s(()=>[l(h,{class:"swipe-action u-border-top u-border-bottom"},{default:s(()=>[l(h,{class:"swipe-action__content"},{default:s(()=>[l(g,{class:"swipe-action__content__text"},{default:s(()=>[c("自定义图标")]),_:1})]),_:1})]),_:1})]),_:1},8,["options"])]),_:1})]),_:1})]),_:1}),l(h,{class:"wu-demo-block"},{default:s(()=>[l(g,{class:"wu-demo-block__title"},{default:s(()=>[c("组合使用")]),_:1}),l(h,{class:"wu-page__swipe-action-item"},{default:s(()=>[l(C,null,{default:s(()=>[(o(!0),n(u,null,d(m.options4,(t,a)=>(o(),e(y,{options:t.options,disabled:t.disabled,key:a},{default:s(()=>[l(h,{class:f(["swipe-action u-border-top",[a===m.options4.length-1&&"u-border-bottom"]])},{default:s(()=>[l(h,{class:"swipe-action__content"},{default:s(()=>[l(g,{class:"swipe-action__content__text"},{default:s(()=>[c(r(t.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1032,["options","disabled"]))),128))]),_:1})]),_:1})]),_:1}),l(h,{class:"wu-demo-block"},{default:s(()=>[l(g,{class:"wu-demo-block__title"},{default:s(()=>[c("自定义按钮形状")]),_:1}),l(h,{class:"wu-page__swipe-action-item"},{default:s(()=>[l(C,null,{default:s(()=>[l(y,{options:m.options5},{default:s(()=>[l(h,{class:"swipe-action u-border-top u-border-bottom"},{default:s(()=>[l(h,{class:"swipe-action__content"},{default:s(()=>[l(g,{class:"swipe-action__content__text"},{default:s(()=>[c("圆形按钮")]),_:1})]),_:1})]),_:1})]),_:1},8,["options"])]),_:1})]),_:1})]),_:1})]),_:1})}],["__scopeId","data-v-df3c351a"]]);export{w as default};
