(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(185),l=n(186);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},178:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i});var a="1180px",r=["Product Design","Research","Design Ops","Code"];function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}},179:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11),l=n.n(i),s=n(58),c=n.n(s);n.d(t,"a",function(){return c.a});n(180),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},180:function(e,t,n){var a;e.exports=(a=n(183))&&a.default||a},181:function(e,t,n){"use strict";n(0)},182:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(117),n(118),n(178));var l=function(e){var t=e.title,n=e.selectedTopics,l=e.setSelectedTopics,s=e.isAll,c=e.setAll,o=Object(a.useState)(!1),u=o[0],m=o[1],p=Object(a.useState)(!1),d=p[0],f=p[1];return Object(a.useEffect)(function(){return f(!s&&n.includes(t))}),r.a.createElement("li",{onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},onClick:function(){!function(e,t){if("All"===e)return l(i.c),void c(!0);l([e]),c(!1)}(t)},className:"br-pill tc black pointer pa3 dib nowrap hover-bg-near-white f5 ma0",style:{color:d?"white":"gray",border:d?"2px solid #222":"2px solid #ffffff",backgroundColor:!s&&d?"#000":u?"#f7f7f7":"transparent"}},t)};var s=function(e){var t=e.setSelectedTopics,n=e.isAll,l=e.setAll,s=Object(a.useState)(!1),c=(s[0],s[1]),o=Object(a.useState)(!1),u=(o[0],o[1]);return r.a.createElement("li",{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onClick:function(){u(n),t(i.c),l(!0)},className:"br-pill black pointer pa3 neue-regular mr3 dib nowrap f5-l f6-ns f7 ",style:{color:n?"white":"#949494",border:n?"2px solid #222":"2px solid #ffffff",backgroundColor:n?"#000":"transparent"}},"All")},c=n(179);var o=function(e){var t=e.posts,n=Object(a.useState)(!1),i=(n[0],n[1],Object(a.useState)("")),l=(i[0],i[1]);function s(){document.getElementById("surpriseLink").classList.add("blinking"),l(o())}function o(){return t[Math.floor(Math.random()*t.length)].node.frontmatter.path}return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{id:"surpriseLink",to:o(),onMouseEnter:function(){return s()},onMouseOut:function(){document.getElementById("surpriseLink").classList.remove("blinking")},className:"ba b--white bw1 gray fw2 link hover-white br-pill pointer pa3 neue-regular mr3-l mr0 dib nowrap f5 "},"Surprise me"))};t.a=function(e){var t=e.selectedTopics,n=e.setSelectedTopics,a=e.isAll,c=e.setAll,u=e.posts;return r.a.createElement("div",{className:"w-100 bg-white z-max flex justify-end mb6",style:{maxWidth:i.b,top:"0px",right:"0px",left:"0px",marginLeft:"auto",marginRight:"0px"}},r.a.createElement("div",{className:"w-100 flex b relative bg-red"},r.a.createElement("div",{id:"filters",className:"w-100-l 100vw list pl0 f5 flex items-center-l justify-between-l overflow-x-scroll"},r.a.createElement(s,{selectedTopics:t,setSelectedTopics:n,isAll:a,setAll:c}),i.c.map(function(e){return r.a.createElement(l,{selectedTopics:t,setSelectedTopics:n,key:e,isAll:a,setAll:c,title:e})}),r.a.createElement(o,{posts:u}))))}},183:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),i=n(11),l=n.n(i),s=n(82),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design"}}}}},185:function(e,t,n){"use strict";var a=n(184),r=n(0),i=n.n(r),l=n(11),s=n.n(l),c=n(179),o=n(182),u=n(178),m=i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19",fill:"#cccccc"})),p=function(e){e.siteTitle;var t=e.selectedTopics,n=e.setSelectedTopics,a=e.isAll,r=e.setAll,l=e.isIndex,s=e.prev,p=e.next;return i.a.createElement("div",null,i.a.createElement("header",{style:{maxWidth:l&&u.b,width:"100%",left:0,right:0,marginRight:"auto",marginLeft:"auto"},className:"flex fixed bg-white z-max space-between ph0-l ph4"},i.a.createElement("div",{style:{maxWidth:u.b},className:"w-100 flex justify-between center items-center"},i.a.createElement(c.a,{to:"/",className:"link"},i.a.createElement("h1",{className:"f5 black neue-regular"},"Lucas Neumann")),i.a.createElement("div",{className:"flex"},s?i.a.createElement(c.a,{to:s.frontmatter.path},i.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},m)):i.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 hover-dark-gray "},m),p?i.a.createElement(c.a,{to:p.frontmatter.path},i.a.createElement("span",{className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},m)):i.a.createElement("span",{className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 "},m))),l&&i.a.createElement(o.a,{selectedTopics:t,setSelectedTopics:n,isAll:a,setAll:r})),i.a.createElement("div",{className:"pb2 pt1"},i.a.createElement("p",{className:"f6 white"}," _")))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""};var d=p,f=(n(181),function(){return i.a.createElement("div",{style:{maxWidth:u.b},className:"flex center mb6 mt3 bt b--near-white bw1 pt4 items-center f5-l f7"},i.a.createElement("p",{className:"mr3"},"Lucas Neumann © 2009–2020"),i.a.createElement("a",{className:"link black underline-hover mr3",href:"mailto:lucasneumann.fau@gmail.com"},"Email me"),i.a.createElement("a",{className:"link black underline-hover mr3",href:"https://www.linkedin.com/in/lucasneumann/"},"LinkedIn"))}),b=(n(189),n(190),n(191),function(e){var t=e.children,n=e.isWorkInView,r=e.isAll,l=e.setAll,s=e.selectedTopics,c=e.setSelectedTopics,o=e.isIndex,m=e.prev,p=e.next,b=a.data;return i.a.createElement(i.a.Fragment,null,!o&&i.a.createElement(d,{isWorkInView:n,siteTitle:b.site.siteMetadata.title,selectedTopics:s,setSelectedTopics:c,isAll:r,setAll:l,isIndex:o,prev:m,next:p}),i.a.createElement("div",{className:"pt0 ph0-l ph4",style:{margin:"0 auto",paddingTop:0,maxWidth:o&&u.b}},i.a.createElement("main",null,t),i.a.createElement(f,null)))});b.propTypes={children:s.a.node.isRequired};t.a=b},186:function(e,t,n){"use strict";var a=n(187),r=n(0),i=n.n(r),l=n(11),s=n.n(l),c=n(198),o=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,l=e.title,s=a.data.site,c=t||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design",description:"Portfolio website for Lucas Neumann, product designer",author:"Lucas Neumann"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-67dd27f1586baba36ac4.js.map