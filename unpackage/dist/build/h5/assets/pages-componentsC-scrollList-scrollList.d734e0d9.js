import{o as l,c as e,w as s,d as o,a as n,b as i,e as a,f as t,F as c,i as r,h as _,p as m,t as u,g}from"./index-11e68488.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";const p=d({data:()=>({goodsBaseUrl:"https://cdn.uviewui.com/uview/goods/",menuBaseUrl:"https://cdn.uviewui.com/uview/menu/",goodsArr:[{price:"230.5",thumbnail:"1.jpg"},{price:"74.1",thumbnail:"2.jpg"},{price:"8457",thumbnail:"6.jpg"},{price:"1442",thumbnail:"5.jpg"},{price:"541",thumbnail:"2.jpg"},{price:"234",thumbnail:"3.jpg"},{price:"562",thumbnail:"4.jpg"},{price:"251.5",thumbnail:"1.jpg"}],menuArr:[[{name:"天猫新品",icon:"11.png"},{name:"今日爆款",icon:"9.png"},{name:"天猫国际",icon:"17.png"},{name:"饿了么",icon:"6.png"},{name:"天猫超市",icon:"11.png"},{name:"分类",icon:"2.png"},{name:"天猫美食",icon:"3.png"},{name:"阿里健康",icon:"12.png"},{name:"口碑生活",icon:"7.png"}],[{name:"充值中心",icon:"8.png"},{name:"机票酒店",icon:"10.png"},{name:"金币庄园",icon:"18.png"},{name:"阿里拍卖",icon:"15.png"},{name:"淘宝吃货",icon:"16.png"},{name:"闲鱼",icon:"4.png"},{name:"会员中心",icon:"6.png"},{name:"造点新货",icon:"13.png"},{name:"土货鲜食",icon:"14.png"}]]}),methods:{showMore(){uni.$u.toast("查看更多")},left(){console.log("left")},right(){console.log("right")}}},[["render",function(d,p,f,h,w,b){const j=r,k=g,x=o,v=_("u-icon"),y=_("u-scroll-list");return l(),e(x,{class:"wu-page"},{default:s(()=>[n(x,{class:"wu-demo-block"},{default:s(()=>[n(j,{class:"wu-demo-block__title",style:{"margin-bottom":"15px"}},{default:s(()=>[i("基础使用")]),_:1}),n(y,{indicatorColor:"#fff0f0",indicatorActiveColor:"#f56c6c",onRight:b.right,onLeft:b.left},{default:s(()=>[n(x,{class:"scroll-list",style:{"flex-direction":"row"}},{default:s(()=>[(l(!0),a(c,null,t(w.goodsArr,(o,a)=>(l(),e(x,{class:m(["scroll-list__goods-item",[9===a&&"scroll-list__goods-item--no-margin-right"]]),key:a},{default:s(()=>[n(k,{class:"scroll-list__goods-item__image",src:w.goodsBaseUrl+o.thumbnail,mode:""},null,8,["src"]),n(j,{class:"scroll-list__goods-item__text"},{default:s(()=>[i("￥"+u(o.price),1)]),_:2},1024)]),_:2},1032,["class"]))),128)),n(x,{class:"scroll-list__show-more",onClick:b.showMore},{default:s(()=>[n(j,{class:"scroll-list__show-more__text"},{default:s(()=>[i("查看更多")]),_:1}),n(v,{name:"arrow-leftward",color:"#f56c6c",size:"12"})]),_:1},8,["onClick"])]),_:1})]),_:1},8,["onRight","onLeft"])]),_:1}),n(x,{class:"wu-demo-block"},{default:s(()=>[n(j,{class:"wu-demo-block__title"},{default:s(()=>[i("多菜单扩展")]),_:1}),n(y,null,{default:s(()=>[n(x,{class:"scroll-list"},{default:s(()=>[(l(!0),a(c,null,t(w.menuArr,(o,r)=>(l(),e(x,{class:"scroll-list__line",key:r},{default:s(()=>[(l(!0),a(c,null,t(o,(a,t)=>(l(),e(x,{class:m(["scroll-list__line__item",[t===o.length-1&&"scroll-list__line__item--no-margin-right"]]),key:t},{default:s(()=>[n(k,{class:"scroll-list__line__item__image",src:w.menuBaseUrl+a.icon,mode:""},null,8,["src"]),n(j,{class:"scroll-list__line__item__text"},{default:s(()=>[i(u(a.name),1)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}],["__scopeId","data-v-fb1ed1da"]]);export{p as default};