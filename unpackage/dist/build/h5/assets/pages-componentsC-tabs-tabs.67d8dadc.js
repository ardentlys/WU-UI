import{o as l,c as e,w as t,d as a,a as o,b as s,i,h as n}from"./index-11e68488.js";import{_ as c}from"./_plugin-vue_export-helper.1b428a4d.js";const m=c({mixins:[uni.$u.mixin],data:()=>({lineBg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=",list1:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list2:[{name:"关注"},{name:"推荐",badge:{isDot:!0}},{name:"电影",badge:{value:5}},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list3:[{name:"关注"},{name:"推荐"},{name:"电影",disabled:!0},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list4:[{name:"关注"},{name:"推荐",badge:{isDot:!0}},{name:"电影"},{name:"科技"},{name:"音乐"},{name:"美食"},{name:"文化"},{name:"财经"},{name:"手工"}],list6:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"科技"}]}),onLoad(){},methods:{click(l){console.log("item",l)}}},[["render",function(c,m,d,u,_,A){const f=i,b=n("u-tabs"),r=a,w=n("u-sticky"),g=n("u-gap"),p=n("u-icon");return l(),e(r,{class:"wu-page"},{default:t(()=>[o(r,{class:"wu-demo-block"},{default:t(()=>[o(f,{class:"wu-demo-block__title"},{default:t(()=>[s("基础演示")]),_:1}),o(r,{class:"wu-demo-block__content"},{default:t(()=>[o(b,{list:_.list1,onClick:A.click,current:3},null,8,["list","onClick"])]),_:1})]),_:1}),o(r,{class:"wu-demo-block",style:{"margin-bottom":"0"}},{default:t(()=>[o(f,{class:"wu-demo-block__title"},{default:t(()=>[s("粘性布局")]),_:1})]),_:1}),o(w,{bgColor:"#fff"},{default:t(()=>[o(b,{list:_.list1},null,8,["list"])]),_:1}),o(g,{height:"23",bgColor:"#fff"}),o(r,{class:"wu-demo-block"},{default:t(()=>[o(f,{class:"wu-demo-block__title"},{default:t(()=>[s("显示徽标")]),_:1}),o(r,{class:"wu-demo-block__content"},{default:t(()=>[o(b,{list:_.list2},null,8,["list"])]),_:1})]),_:1}),o(r,{class:"wu-demo-block"},{default:t(()=>[o(f,{class:"wu-demo-block__title"},{default:t(()=>[s("禁止滚动")]),_:1}),o(r,{class:"wu-demo-block__content"},{default:t(()=>[o(b,{list:_.list6,scrollable:!1},null,8,["list"])]),_:1})]),_:1}),o(r,{class:"wu-demo-block"},{default:t(()=>[o(f,{class:"wu-demo-block__title"},{default:t(()=>[s("禁用菜单")]),_:1}),o(r,{class:"wu-demo-block__content"},{default:t(()=>[o(b,{list:_.list3},null,8,["list"])]),_:1})]),_:1}),o(r,{class:"wu-demo-block"},{default:t(()=>[o(f,{class:"wu-demo-block__title"},{default:t(()=>[s("自定义样式")]),_:1}),o(r,{class:"wu-demo-block__content"},{default:t(()=>[o(b,{list:_.list4,lineWidth:"30",lineColor:"#f56c6c",activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","activeStyle","inactiveStyle"])]),_:1})]),_:1}),o(r,{class:"wu-demo-block"},{default:t(()=>[o(f,{class:"wu-demo-block__title"},{default:t(()=>[s("滑块设置背景图")]),_:1}),o(r,{class:"wu-demo-block__content"},{default:t(()=>[o(b,{list:_.list4,lineWidth:"20",lineHeight:"7",lineColor:`url(${_.lineBg}) 100% 100%`,activeStyle:{color:"#303133",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#606266",transform:"scale(1)"},itemStyle:"padding-left: 15px; padding-right: 15px; height: 34px;"},null,8,["list","lineColor","activeStyle","inactiveStyle"])]),_:1})]),_:1}),o(r,{class:"wu-demo-block"},{default:t(()=>[o(f,{class:"wu-demo-block__title"},{default:t(()=>[s("右侧自定义插槽")]),_:1}),o(r,{class:"wu-demo-block__content"},{default:t(()=>[o(b,{list:_.list1},{default:t(()=>[o(r,{slot:"right",style:{"padding-left":"4px"},onClick:m[0]||(m[0]=l=>c.$u.toast("插槽被点击"))},{default:t(()=>[o(p,{name:"list",size:"21",bold:""})]),_:1})]),_:1},8,["list"])]),_:1})]),_:1})]),_:1})}],["__scopeId","data-v-7bfc4966"]]);export{m as default};