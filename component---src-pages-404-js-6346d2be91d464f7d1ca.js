(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(186),i=n(188);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},178:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var a="1000px",r=["Product Design","Research","Design Ops","Code"],s={x:-25,opacity:0},i={x:0,opacity:1};function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}},179:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(11),i=n.n(s),l=n(58),c=n.n(l);n.d(t,"a",function(){return c.a});n(180),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},180:function(e,t,n){var a;e.exports=(a=n(184))&&a.default||a},182:function(e,t,n){"use strict";n(0)},183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=(n(117),n(118),n(178));var i=function(e){var t=e.title,n=e.selectedTopics,i=e.setSelectedTopics,l=e.isAll,c=e.setAll,o=Object(a.useState)(!1),u=o[0],m=o[1],d=Object(a.useState)(!1),p=d[0],f=d[1];return Object(a.useEffect)(function(){return f(!l&&n.includes(t))}),r.a.createElement("li",{onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},onClick:function(){!function(e,t){if("All"===e)return i(s.e),void c(!0);i([e]),c(!1)}(t)},className:"pointer nowrap ma0 mr4 fw5 list tracked-tight mb0-l mb2",style:{borderBottom:p?"3px solid black":"3px solid transparent",color:p||u?!p&&u?"rgba(0,0,0,.8)":"black":"rgba(0,0,0,.4)",transition:"color .2s"}},t)};var l=function(e){var t=e.setSelectedTopics,n=e.isAll,i=e.setAll,l=Object(a.useState)(!1),c=l[0],o=l[1],u=Object(a.useState)(!1),m=(u[0],u[1]);return r.a.createElement("div",{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onClick:function(){m(n),t(s.e),i(!0)},className:"fw5 black pointer nowrap tracked-tight mr3 mb0-l mb3",style:{borderBottom:n?"3px solid black":"3px solid transparent",color:n||c?!n&&c?"#666":"black":"#999"}},"All")},c=n(179);var o=function(e){var t=e.posts,n=Object(a.useState)(!1),s=(n[0],n[1],Object(a.useState)("")),i=(s[0],s[1]);function l(){document.getElementById("surpriseLink").classList.add("blinking"),i(o())}function o(){return t[Math.floor(Math.random()*t.length)].node.frontmatter.path}return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{id:"surpriseLink",to:o(),onMouseEnter:function(){return l()},onMouseOut:function(){document.getElementById("surpriseLink").classList.remove("blinking")},style:{borderBottom:"3px solid transparent"},className:"link fw5 pointer nowrap pointer black-40 tracked-tight"},"Surprise me"))},u=n(181);t.a=function(e){var t=e.selectedTopics,n=e.setSelectedTopics,a=e.isAll,c=e.setAll,m=(e.posts,e.publishedPosts);return r.a.createElement(u.b.div,{className:"w-100-l w-50 flex flex-row-l flex-column items-start mb6 lh-copy f3"},r.a.createElement("div",{className:"mr3"},r.a.createElement(l,{selectedTopics:t,setSelectedTopics:n,isAll:a,setAll:c})),s.e.map(function(e){return r.a.createElement(i,{selectedTopics:t,setSelectedTopics:n,key:e,isAll:a,setAll:c,title:e})}),r.a.createElement("div",{className:"flex items-end"},r.a.createElement(o,{posts:m})))}},184:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),s=n(11),i=n.n(s),l=n(84),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},185:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design"}}}}},186:function(e,t,n){"use strict";var a=n(185),r=n(0),s=n.n(r),i=n(11),l=n.n(i),c=n(179),o=(n(183),n(178)),u=s.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19",fill:"#cccccc"})),m=function(e){e.selectedTopics,e.setSelectedTopics,e.isAll,e.setAll;var t=e.isIndex,n=e.prev,a=e.next;return s.a.createElement("div",null,s.a.createElement("header",{style:{width:"100%",left:0,right:0,marginRight:"auto",marginLeft:"auto",borderColor:"rgba(150,150,150,.1)",background:"white"},className:"flex z-max space-between ph4 bb bw1"},s.a.createElement("div",{style:{maxWidth:o.d},className:"w-100 flex justify-between center items-center"},s.a.createElement(c.a,{to:"/",className:"link"},s.a.createElement("h1",{className:"f4 fw5 tracked-tight black-80 neue-regular pv2"},"Lucas Neumann")),!t&&s.a.createElement("div",{className:"flex"},n?s.a.createElement(c.a,{to:n.frontmatter.path},s.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},u)):s.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 hover-dark-gray "},u),a?s.a.createElement(c.a,{to:a.frontmatter.path},s.a.createElement("span",{className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},u)):s.a.createElement("span",{className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 "},u)))))};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var d=m,p=(n(182),function(){return s.a.createElement("a",{className:"link black underline-hover cursor mt0-ns mt4",target:"_blank",href:"https://forms.gle/CTkARXSiJFT51eRAA"},"Can I make my website better?")}),f=function(){return s.a.createElement("div",{style:{maxWidth:o.d},className:"flex flex-row-ns flex-column center mb6 mt3 b--near-white bw1 pt4 items-center f5-ns f6 w-100 justify-between"},s.a.createElement("div",{className:" flex items-center"},s.a.createElement("p",{className:"mr3"},"Lucas Neumann © Always"),s.a.createElement("a",{className:"link black underline-hover mr3",href:"mailto:lucasneumann.fau@gmail.com"},"Email me"),s.a.createElement("a",{target:"_blank",className:"link black underline-hover mr3",href:"https://www.linkedin.com/in/lucasneumann/"},"LinkedIn")),s.a.createElement(p,null))},b=(n(192),n(193),n(194),function(e){var t=e.children,n=(e.isWorkInView,e.isAll),r=e.setAll,i=e.selectedTopics,l=e.setSelectedTopics,c=e.isIndex,o=e.prev,u=e.next,m=a.data;return s.a.createElement(s.a.Fragment,null,!c&&s.a.createElement(d,{siteTitle:m.site.siteMetadata.title,selectedTopics:i,setSelectedTopics:l,isAll:n,setAll:r,isIndex:c,prev:o&&o,next:u&&u}),s.a.createElement("div",{className:"pt0 ph4",style:{margin:"0 auto",paddingTop:0}},s.a.createElement("main",null,t),s.a.createElement(f,null)))});b.propTypes={children:l.a.node.isRequired};t.a=b},188:function(e,t,n){"use strict";var a=n(189),r=n(0),s=n.n(r),i=n(11),l=n.n(i),c=n(201),o=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,l=a.data.site,c=t||l.siteMetadata.description;return s.a.createElement(o.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design",description:"Portfolio website for Lucas Neumann, product designer",author:"Lucas Neumann"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-6346d2be91d464f7d1ca.js.map