(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(e,t,a){"use strict";a.r(t);a(117),a(118);var n=a(0),r=a.n(n),l=a(185),s=a(179),i=(a(192),a(193)),c=a.n(i),o=a(178);var m=function(e){var t=e.fluid,a=e.color;return r.a.createElement("div",{style:{backgroundColor:a}},r.a.createElement(c.a,{className:"h-auto-l ph5-l",backgroundColor:"#f0f0f0",fluid:t,objectFit:"contain"}))},u=a(197);var d=function(e){var t=e.post,a=e.index,l=t.frontmatter.topics.map(function(e){return r.a.createElement(u.a,{title:e})}),i=Object(n.useState)(!1),c=i[0],o=i[1];return r.a.createElement(s.a,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},className:" \n      "+(a%2==0&&"pr4-l")+"\n      "+(a%2!=0&&"pl4-l")+"\n      "+("large"!==t.frontmatter.size?"w-25-l w-100":"w-50-l w-100")+"\n        link black fl flex flex-column mb4\n        ",to:t.frontmatter.path},r.a.createElement("div",{className:"br2 overflow-hidden"},r.a.createElement(m,{cover:t.frontmatter.cover,isHovered:c,fluid:t.frontmatter.cover_image.childImageSharp.fluid,color:t.frontmatter.color})),r.a.createElement("div",{className:"black pb4 mt2 flex justify-between"},r.a.createElement("div",{className:"mr3 w-100"},r.a.createElement("p",{className:"neue-regular f4 measure-narrow mt3 mb3 "+(c?"u underline":"")},t.frontmatter.title),r.a.createElement("p",{className:"f5 black-40 neue-regular lh-copy pv0 mb0 mt0"},t.frontmatter.subtitle)),r.a.createElement("div",{className:"mono mt2 flex items-start",style:{marginLeft:"-.2rem"}},l)))},p=function(e){var t=e.posts.map(function(e,t){return r.a.createElement(d,{index:t,key:e.node.id,post:e.node})});return r.a.createElement("div",{className:"cf"},t)},f=a(208),b=function(e){var t=e.title,a=(e.date,e.description,e.posts),n=e.isAll,l=a.filter(function(e){return e.node.frontmatter.category===t&&!0===e.node.frontmatter.published});return l.length>0&&r.a.createElement("div",{className:"w-100 flex flex-row-l flex-column mb3"},r.a.createElement("div",{className:"pt5 w-100 bt bw1 b--black-10"},n&&r.a.createElement("div",{className:"flex flex-column pb5"},r.a.createElement("h2",{className:"w-25 pb2 f3 mt0 pt0 sans neue-regular black fw5"},t)),r.a.createElement(p,{posts:l})))},g=a(186);a(122),a(34),a(181);var h=function(e){var t,a=e.setSelectedTopics,l=e.setAll,s=Object(n.useState)(null),i=s[0],c=s[1];function o(e){l(!1),a([e])}return Object(n.useEffect)(function(){c(window.location.search.split("?")[1])}),r.a.createElement("div",{className:"flex flex-column mb6 mt6"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"f2-l f3 neue-regular black lh-title mb0"},i?"Hi there, "+((t=atob(i)).charAt(0).toUpperCase()+t.slice(1))+"!":"Lucas Neumann",r.a.createElement("br",null),i&&"I'm Lucas Neumann."),r.a.createElement("p",{className:"f2-l f3 measure-narrow black-40 lh-copy mt0"},r.a.createElement("br",null)," I help companies"," ",r.a.createElement("span",{className:"underline-hover hover-black pointer",onClick:function(){return o("Design Ops")}},"build design teams,")," ",r.a.createElement("span",{className:"underline-hover hover-black pointer",onClick:function(){return o("Research")}},"run user research,")," ",r.a.createElement("span",{className:"underline-hover hover-black pointer",onClick:function(){return o("Product Design")}},"and design experiences.")," ",r.a.createElement("br",null),r.a.createElement("a",{className:"link black-40 underline-hover hover-black",href:"http://www.nubank.com.br/en",target:"blank",style:{cursor:"ne-resize"}},"Nubank")," ","alumnus, currently managing design at"," ",r.a.createElement("a",{className:"link black-40 underline-hover hover-black",href:"http://www.petalcard.com",target:"blank",style:{cursor:"ne-resize"}},"Petal"),".")))},v=a(182);a.d(t,"pageQuery",function(){return w});t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,s=(t.allImageSharp.nodes,Object(n.useState)(!1)),i=(s[0],s[1],Object(n.useState)(!0)),c=i[0],m=i[1],u=Object(n.useState)(o.c),d=u[0],p=u[1],w=function(){return c?a:a.filter(function(e){return e.node.frontmatter.topics.some(function(e){return d.includes(e)})})};return r.a.createElement(l.a,{isIndex:!0,isAll:c,setAll:m,selectedTopics:d,setSelectedTopics:p},r.a.createElement(g.a,{title:"Home"}),r.a.createElement("div",null,r.a.createElement(h,{setSelectedTopics:p,setAll:m}),r.a.createElement(v.a,{selectedTopics:d,setSelectedTopics:p,isAll:c,setAll:m,posts:a})),r.a.createElement(f.a,{in:!c,timeout:200,unmountOnExit:!0,classNames:"my-node"},r.a.createElement("div",{className:"mb5 flex flex-row-l flex-column bt bw1 b--near-white pt4"},r.a.createElement("h1",{className:"w-100 f2-l f3"},d[0]," ",r.a.createElement("span",{className:"black-40 f4"},w().length)),r.a.createElement("p",{className:"f4-l f5 w-100 lh-copy mt4"},"Research"===d[0]?"I dedicate a lot of my time to listening to users, advocating for their needs, and creating the necessary workflows to ensure the teams I collaborate with understand who they're designing for.":"Product Design"===d[0]?"I've designed products that reach millions of users and are valued in the billions. Most of my current projects are digital, but my roots are strongly generalistic, having spanned industrial and service design.":"Design Ops"===d[0]?"Designing how design gets made and keeping the teams I work with happy, engaged and empowered is one of my biggest areas of interest.":"I'm a coding begginer and enthusiast. This portfolio website is, in itself, an experiment in learning React, and below you can find other projects I've played with."))),r.a.createElement("div",{id:"work"},r.a.createElement(b,{isAll:c,posts:w(),title:"Petal",date:"2019",place:"New York",description:"On a mission to build credit that is honest, simple, and accessible."}),r.a.createElement(b,{isAll:c,posts:w(),title:"Nubank",date:"2016—2019",place:"São Paulo",description:"During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."}),r.a.createElement(b,{isAll:c,mainImage:a[0].node.frontmatter.cover_image.childImageSharp.fluid,posts:w(),title:"Kano",date:"2013",place:"London",description:"During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."}),r.a.createElement(b,{isAll:c,posts:w(),title:"Others",date:"2013",place:"London",description:""})))};var w="554515373"},178:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return l});var n="1180px",r=["Product Design","Research","Design Ops","Code"];function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(11),s=a.n(l),i=a(58),c=a.n(i);a.d(t,"a",function(){return c.a});a(180),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},180:function(e,t,a){var n;e.exports=(n=a(183))&&n.default||n},181:function(e,t,a){"use strict";a(0)},182:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(117),a(118),a(178));var s=function(e){var t=e.title,a=e.selectedTopics,s=e.setSelectedTopics,i=e.isAll,c=e.setAll,o=Object(n.useState)(!1),m=o[0],u=o[1],d=Object(n.useState)(!1),p=d[0],f=d[1];return Object(n.useEffect)(function(){return f(!i&&a.includes(t))}),r.a.createElement("li",{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onClick:function(){!function(e,t){if("All"===e)return s(l.c),void c(!0);s([e]),c(!1)}(t)},className:"br-pill tc black pointer pa3 dib nowrap hover-bg-near-white f5 ma0",style:{color:p?"white":"gray",border:p?"2px solid #222":"2px solid #ffffff",backgroundColor:!i&&p?"#000":m?"#f7f7f7":"transparent"}},t)};var i=function(e){var t=e.setSelectedTopics,a=e.isAll,s=e.setAll,i=Object(n.useState)(!1),c=(i[0],i[1]),o=Object(n.useState)(!1),m=(o[0],o[1]);return r.a.createElement("li",{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onClick:function(){m(a),t(l.c),s(!0)},className:"br-pill black pointer pa3 neue-regular mr3 dib nowrap f5-l f6-ns f7 ",style:{color:a?"white":"#949494",border:a?"2px solid #222":"2px solid #ffffff",backgroundColor:a?"#000":"transparent"}},"All")},c=a(179);var o=function(e){var t=e.posts,a=Object(n.useState)(!1),l=(a[0],a[1],Object(n.useState)("")),s=(l[0],l[1]);function i(){document.getElementById("surpriseLink").classList.add("blinking"),s(o())}function o(){return t[Math.floor(Math.random()*t.length)].node.frontmatter.path}return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{id:"surpriseLink",to:o(),onMouseEnter:function(){return i()},onMouseOut:function(){document.getElementById("surpriseLink").classList.remove("blinking")},className:"ba b--white bw1 gray fw2 link hover-white br-pill pointer pa3 neue-regular mr3-l mr0 dib nowrap f5 "},"Surprise me"))};t.a=function(e){var t=e.selectedTopics,a=e.setSelectedTopics,n=e.isAll,c=e.setAll,m=e.posts;return r.a.createElement("div",{className:"w-100 bg-white z-max flex justify-end mb6",style:{maxWidth:l.b,top:"0px",right:"0px",left:"0px",marginLeft:"auto",marginRight:"0px"}},r.a.createElement("div",{className:"w-100 flex b relative bg-red"},r.a.createElement("div",{id:"filters",className:"w-100-l 100vw list pl0 f5 flex items-center-l justify-between-l overflow-x-scroll"},r.a.createElement(i,{selectedTopics:t,setSelectedTopics:a,isAll:n,setAll:c}),l.c.map(function(e){return r.a.createElement(s,{selectedTopics:t,setSelectedTopics:a,key:e,isAll:n,setAll:c,title:e})}),r.a.createElement(o,{posts:m}))))}},183:function(e,t,a){"use strict";a.r(t);a(17);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),i=a(82),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design"}}}}},185:function(e,t,a){"use strict";var n=a(184),r=a(0),l=a.n(r),s=a(11),i=a.n(s),c=a(179),o=a(182),m=a(178),u=l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19",fill:"#cccccc"})),d=function(e){e.siteTitle;var t=e.selectedTopics,a=e.setSelectedTopics,n=e.isAll,r=e.setAll,s=e.isIndex,i=e.prev,d=e.next;return l.a.createElement("div",null,l.a.createElement("header",{style:{maxWidth:s&&m.b,width:"100%",left:0,right:0,marginRight:"auto",marginLeft:"auto"},className:"flex fixed bg-white z-max space-between ph0-l ph4"},l.a.createElement("div",{style:{maxWidth:m.b},className:"w-100 flex justify-between center items-center"},l.a.createElement(c.a,{to:"/",className:"link"},l.a.createElement("h1",{className:"f5 black neue-regular"},"Lucas Neumann")),l.a.createElement("div",{className:"flex"},i?l.a.createElement(c.a,{to:i.frontmatter.path},l.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},u)):l.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 hover-dark-gray "},u),d?l.a.createElement(c.a,{to:d.frontmatter.path},l.a.createElement("span",{className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},u)):l.a.createElement("span",{className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 "},u))),s&&l.a.createElement(o.a,{selectedTopics:t,setSelectedTopics:a,isAll:n,setAll:r})),l.a.createElement("div",{className:"pb2 pt1"},l.a.createElement("p",{className:"f6 white"}," _")))};d.propTypes={siteTitle:i.a.string},d.defaultProps={siteTitle:""};var p=d,f=(a(181),function(){return l.a.createElement("div",{style:{maxWidth:m.b},className:"flex center mb6 mt3 bt b--near-white bw1 pt4 items-center f5-l f7"},l.a.createElement("p",{className:"mr3"},"Lucas Neumann © 2009–2020"),l.a.createElement("a",{className:"link black underline-hover mr3",href:"mailto:lucasneumann.fau@gmail.com"},"Email me"),l.a.createElement("a",{className:"link black underline-hover mr3",href:"https://www.linkedin.com/in/lucasneumann/"},"LinkedIn"))}),b=(a(189),a(190),a(191),function(e){var t=e.children,a=e.isWorkInView,r=e.isAll,s=e.setAll,i=e.selectedTopics,c=e.setSelectedTopics,o=e.isIndex,u=e.prev,d=e.next,b=n.data;return l.a.createElement(l.a.Fragment,null,!o&&l.a.createElement(p,{isWorkInView:a,siteTitle:b.site.siteMetadata.title,selectedTopics:i,setSelectedTopics:c,isAll:r,setAll:s,isIndex:o,prev:u,next:d}),l.a.createElement("div",{className:"pt0 ph0-l ph4",style:{margin:"0 auto",paddingTop:0,maxWidth:o&&m.b}},l.a.createElement("main",null,t),l.a.createElement(f,null)))});b.propTypes={children:i.a.node.isRequired};t.a=b},186:function(e,t,a){"use strict";var n=a(187),r=a(0),l=a.n(r),s=a(11),i=a.n(s),c=a(198),o=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,i=n.data.site,c=t||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},187:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design",description:"Portfolio website for Lucas Neumann, product designer",author:"Lucas Neumann"}}}}},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(178);t.a=function(e){var t=e.title;return r.a.createElement("span",{key:t,className:"f7 pa2 b--black-10 dib br1 silver ml2 fl dib flex flex-column justify-center h1"},r.a.createElement("div",{className:"mono nowrap"},Object(l.a)(t)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e121524d78634ecca245.js.map