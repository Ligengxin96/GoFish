(this.webpackJsonphotnews=this.webpackJsonphotnews||[]).push([[0],{165:function(t,e,n){},166:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(23),r=n.n(s),i=n(71),l=n(172),o=n(171),h=n(83),u=n.n(h),d=n(84),j=n.n(d),g=function(t){var e=t.url,n=void 0===e?"":e;return new Promise((function(t,e){j.a.get(n).then((function(e){var n=[],c=u()(e,"data",{}).list,a=void 0===c?[]:c;0===a.length&&(n=e.data),t(a.concat(n))})).catch((function(t){e(t.message)}))}))},b=n(13),f=1,m=function(t){var e=t.title,n=t.url,a=t.dataPath,s=t.svg,r=t.backgroundColor,h=Object(c.useState)([]),u=Object(i.a)(h,2),d=u[0],j=u[1],m=Object(c.useState)(!1),p=Object(i.a)(m,2),x=p[0],O=p[1];return Object(c.useEffect)((function(){O(!0),g({url:n}).then((function(t){j(t.slice(10*(f-1),10*f))})).catch((function(t){console.log(t.message)})).finally((function(){O(!1)}))}),[n]),Object(b.jsx)(l.a,{headStyle:{background:r},bodyStyle:{height:"32rem"},title:Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)("img",{src:s,style:{width:"3rem",height:"3rem"},alt:""}),Object(b.jsx)("h2",{style:{marginLeft:"5px",marginTop:"5px"},children:e})]}),children:Object(b.jsx)(o.b,{loading:x,dataSource:d,dataLength:d.length,next:function(){O(!0),g({url:n}).then((function(t){f++,j(t.slice(10*(f-1),10*f))})).catch((function(t){console.log(t.message)})).finally((function(){O(!1)}))},hasMore:d.length<10,renderItem:function(t,e){return Object(b.jsx)(o.b.Item,{children:e<3?Object(b.jsxs)("a",{href:t.url,children:[Object(b.jsxs)("span",{style:{color:"#f1403c"},target:"_blank",children:["[",e+1,"]"]})," ",t[a]]}):Object(b.jsxs)("a",{href:t.url,children:[Object(b.jsxs)("span",{style:{color:"#c2a469"},target:"_blank",children:["[",e+1,"]"]})," ",t[a]]})})}})})},p=n(42),x=n(27),O=n.p+"static/media/zhihu.1512f04f.svg",v=n.p+"static/media/weibo.4d54a609.svg",y=n.p+"static/media/v2ex.2c4ba486.svg";n(165);r.a.render(Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)(p.a,{gutter:{xs:8,sm:16,md:24,lg:32},style:{opacity:.85,margin:"2rem"},children:[Object(b.jsx)(x.a,{className:"gutter-row",span:8,children:Object(b.jsx)(m,{title:"\u77e5\u4e4e\u70ed\u699c",url:"https://tenapi.cn/zhihuresou/",dataPath:"query",svg:O,backgroundColor:"#7ec1ff"})}),Object(b.jsx)(x.a,{className:"gutter-row",span:8,children:Object(b.jsx)(m,{title:"\u5fae\u535a\u70ed\u699c",url:"https://tenapi.cn/resou/",dataPath:"name",svg:v,backgroundColor:"#c16789"})}),Object(b.jsx)(x.a,{className:"gutter-row",span:8,children:Object(b.jsx)(m,{title:"V2EX\u70ed\u699c",url:"https://www.v2ex.com/api/topics/hot.json",dataPath:"title",svg:y,backgroundColor:"#4a5258"})})]})}),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.3d81e3e7.chunk.js.map