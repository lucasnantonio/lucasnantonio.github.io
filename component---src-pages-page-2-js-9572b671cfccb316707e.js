(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(179),l=a(186),s=a(187);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},178:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"e",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return l}),a.d(t,"a",function(){return s});var n="1000px",r=["Product Design","Research","Design Ops","Code"],i={x:-25,opacity:0},l={x:0,opacity:1};function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(11),l=a.n(i),s=a(58),c=a.n(s);a.d(t,"a",function(){return c.a});a(180),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},180:function(e,t,a){var n;e.exports=(n=a(183))&&n.default||n},181:function(e,t,a){"use strict";a(0)},182:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(117),a(118),a(178));var l=function(e){var t=e.title,a=e.selectedTopics,l=e.setSelectedTopics,s=e.isAll,c=e.setAll,o=Object(n.useState)(!1),m=o[0],u=o[1],d=Object(n.useState)(!1),p=d[0],f=d[1];return Object(n.useEffect)(function(){return f(!s&&a.includes(t))}),r.a.createElement("li",{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onClick:function(){!function(e,t){if("All"===e)return l(i.e),void c(!0);l([e]),c(!1)}(t)},className:" tc black pointer nowrap f4 ma0 pb3 mr4 fw5",style:{color:p?"black":"rgba(0,0,0,.4)",borderBottom:p||m?!p&&m?"2px solid #999":"2px solid #222":"2px solid white"}},t)};var s=function(e){var t=e.setSelectedTopics,a=e.isAll,l=e.setAll,s=Object(n.useState)(!1),c=(s[0],s[1]),o=Object(n.useState)(!1),m=(o[0],o[1]);return r.a.createElement("div",{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onClick:function(){m(a),t(i.e),l(!0)},className:"fw5 black pointer dib nowrap f4 pb3 mr4",style:{color:a?"black":"#949494",borderBottom:a?"2px solid #222":"2px solid #f7f7f7"}},"All")},c=a(179);var o=function(e){var t=e.posts,a=Object(n.useState)(!1),i=(a[0],a[1],Object(n.useState)("")),l=(i[0],i[1]);function s(){document.getElementById("surpriseLink").classList.add("blinking"),l(o())}function o(){return t[Math.floor(Math.random()*t.length)].node.frontmatter.path}return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{id:"surpriseLink",to:o(),onMouseEnter:function(){return s()},onMouseOut:function(){document.getElementById("surpriseLink").classList.remove("blinking")},className:"ba b--white bw1 black-40 fw2 link pointer pa3 neue-regular dib nowrap f4 fw5"},"Surprise me"))},m=a(185);t.a=function(e){var t=e.selectedTopics,a=e.setSelectedTopics,n=e.isAll,c=e.setAll,u=(e.posts,e.publishedPosts);return r.a.createElement(m.a.div,{className:"w-100 bg-white z-max flex justify-end mb5 bb b--near-white bw1 mr4"},r.a.createElement("div",{className:"w-100 flex b relative"},r.a.createElement("div",{id:"filters",className:" w-100-l list f4 flex items-end overflow-x-scroll mr5"},r.a.createElement("div",{className:"mr3"},r.a.createElement(s,{selectedTopics:t,setSelectedTopics:a,isAll:n,setAll:c})),r.a.createElement("div",{className:"flex items-end"},i.e.map(function(e){return r.a.createElement(l,{selectedTopics:t,setSelectedTopics:a,key:e,isAll:n,setAll:c,title:e})}),r.a.createElement("div",{className:"flex items-end"},r.a.createElement(o,{posts:u}))))))}},183:function(e,t,a){"use strict";a.r(t);a(17);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),s=a(84),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design"}}}}},186:function(e,t,a){"use strict";var n=a(184),r=a(0),i=a.n(r),l=a(11),s=a.n(l),c=a(179),o=a(182),m=a(178),u=i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19",fill:"#cccccc"})),d=function(e){e.siteTitle;var t=e.selectedTopics,a=e.setSelectedTopics,n=e.isAll,r=e.setAll,l=e.isIndex,s=e.prev,d=e.next;return i.a.createElement("div",null,i.a.createElement("header",{style:{maxWidth:l&&m.d,width:"100%",left:0,right:0,marginRight:"auto",marginLeft:"auto"},className:"flex fixed bg-white z-max space-between ph4 bb bw1 b--near-white"},i.a.createElement("div",{style:{maxWidth:m.d},className:"w-100 flex justify-between center items-center"},i.a.createElement(c.a,{to:"/",className:"link"},i.a.createElement("h1",{className:"f5 fw5 tracked-tight black-50 neue-regular"},"Lucas Neumann")),i.a.createElement("div",{className:"flex"},s?i.a.createElement(c.a,{to:s.frontmatter.path},i.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},u)):i.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 hover-dark-gray "},u),d?i.a.createElement(c.a,{to:d.frontmatter.path},i.a.createElement("span",{className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},u)):i.a.createElement("span",{className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 "},u))),l&&i.a.createElement(o.a,{selectedTopics:t,setSelectedTopics:a,isAll:n,setAll:r})),i.a.createElement("div",{className:"pb2 pt1"},i.a.createElement("p",{className:"f6 white"}," _")))};d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var p=d,f=(a(181),function(){return i.a.createElement("a",{className:"link black underline-hover cursor mt0-ns mt4",target:"_blank",href:"https://forms.gle/CTkARXSiJFT51eRAA"},"Can I make this porfolio better?")}),b=function(){return i.a.createElement("div",{style:{maxWidth:m.d},className:"flex flex-row-ns flex-column center mb6 mt3 b--near-white bw1 pt4 items-center f5-ns f6 w-100 justify-between"},i.a.createElement("div",{className:" flex items-center"},i.a.createElement("p",{className:"mr3"},"Lucas Neumann © Always"),i.a.createElement("a",{className:"link black underline-hover mr3",href:"mailto:lucasneumann.fau@gmail.com"},"Email me"),i.a.createElement("a",{target:"_blank",className:"link black underline-hover mr3",href:"https://www.linkedin.com/in/lucasneumann/"},"LinkedIn")),i.a.createElement(f,null))},g=(a(191),a(192),a(193),function(e){var t=e.children,a=e.isWorkInView,r=e.isAll,l=e.setAll,s=e.selectedTopics,c=e.setSelectedTopics,o=e.isIndex,u=e.prev,d=e.next,f=n.data;return i.a.createElement(i.a.Fragment,null,!o&&i.a.createElement(p,{isWorkInView:a,siteTitle:f.site.siteMetadata.title,selectedTopics:s,setSelectedTopics:c,isAll:r,setAll:l,isIndex:o,prev:u,next:d}),i.a.createElement("div",{className:"pt0 ph4 ",style:{margin:"0 auto",paddingTop:0,maxWidth:o&&m.d}},i.a.createElement("main",null,t),i.a.createElement(b,null)))});g.propTypes={children:s.a.node.isRequired};t.a=g},187:function(e,t,a){"use strict";var n=a(188),r=a(0),i=a.n(r),l=a(11),s=a.n(l),c=a(201),o=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,s=n.data.site,c=t||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=m},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design",description:"Portfolio website for Lucas Neumann, product designer",author:"Lucas Neumann"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-9572b671cfccb316707e.js.map