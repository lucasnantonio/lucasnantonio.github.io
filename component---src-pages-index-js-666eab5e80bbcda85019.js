(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(e,t,a){"use strict";a.r(t);a(117),a(118);var n=a(0),r=a.n(n),l=a(186),i=a(179),c=(a(204),a(195),a(187)),s=a.n(c),o=a(178);var m=function(e){var t=e.image,a=e.color;return r.a.createElement("div",{style:{backgroundColor:a}},null!=t.childImageSharp?r.a.createElement(s.a,{className:"h-auto-l ph5-l",style:{maxHeight:"32rem"},backgroundColor:"#f0f0f0",fluid:null!=t.childImageSharp?t.childImageSharp.fluid:t,objectFit:"contain"}):r.a.createElement("img",{className:"h-auto-l ph5-l",style:{maxHeight:"32rem"},src:t.publicURL}))},d=a(200),u=(a(202),a(182));var p=function(e){var t=e.post,a=(e.index,t.frontmatter.topics.map(function(e){return r.a.createElement(d.a,{key:e,title:e})}),Object(n.useState)(!1)),l=a[0],c=a[1];return r.a.createElement(i.a,{onMouseEnter:function(){return c(!t.frontmatter.soon&&!0)},onMouseLeave:function(){return c(!1)},style:{pointerEvents:t.frontmatter.soon&&"none"},className:"\n      "+(t.frontmatter.size,"w-100")+"\n        link black fl flex flex-column  pb1\n        ",to:t.frontmatter.soon?null:t.frontmatter.path},r.a.createElement("div",{className:"overflow-hidden relative"},r.a.createElement(u.a,null,l&&r.a.createElement(u.b.div,{transition:{ease:"easeOut",duration:.25},initial:{opacity:0,top:"100%",scale:1},animate:{opacity:1,top:"100%",scale:2},exit:{opacity:0,top:"100%",scale:1},className:"w-100 h-100 br-100"})),r.a.createElement(m,{cover:t.frontmatter.cover,isHovered:l,image:t.frontmatter.cover_image,color:t.frontmatter.color}),t.frontmatter.soon&&r.a.createElement("span",{style:{position:"absolute",bottom:".75rem",left:".75rem"},className:"black-50 f7 mr2 pv1  ph2 bg-white-80 dib br2 black-80 fl dib flex flex-column justify-center h1"},"Coming Soon")),r.a.createElement("div",{style:{minHeight:"11rem"},className:"black pb4 mt2 flex justify-between"},r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("p",{className:"neue-regular f3-l f4 measure-narrow mt3 mb2 fw5 tracked-tight "+(l?"u underline":"")},t.frontmatter.title," ")),r.a.createElement("p",{className:"f3 fw5 tracked-tight black-40 neue-regular lh-copy pv0 mb0 mt0 w-100"},t.frontmatter.subtitle),r.a.createElement("div",{style:{marginLeft:"-.2rem"},className:"mono mt3 pt1 flex tr items-start"}))))},f=function(e){var t=e.posts.map(function(e,t){return r.a.createElement(p,{index:t,key:e.node.id,post:e.node})});return r.a.createElement("div",{className:"cf w-100"},t)},h=a(196),g=function(e){var t=e.title,a=(e.date,e.description,e.posts),n=e.isAll,l=(e.icon,a.filter(function(e){return e.node.frontmatter.category===t&&!0===e.node.frontmatter.published}));return l.length>0&&r.a.createElement("div",{className:"w-100 flex flex-row mb3 pt4-ns"},r.a.createElement("div",{className:"flex flex-column w-100"},n&&r.a.createElement("div",{className:"flex flex-column mb5"},r.a.createElement("h2",{className:"w-10 mr4 lh-solid f3 mv0 pv0 sans neue-regular black-80 fw5 tracked-tight"},t),r.a.createElement("h3",{className:"f3 fw5 tracked-tight mt3 black-40 measure-narrow"},("Nubank"===t?"Designing the largest neobank in the world.":"Petal"===t?"The future of honest, accessible credit.":"Personal and experimental")+"\n                ")),r.a.createElement(f,{posts:l})))},b=a(188);a(127),a(34),a(181);var v=function(e){e.setSelectedTopics,e.setAll;var t,a=Object(n.useState)(null),l=a[0],i=a[1];return Object(n.useEffect)(function(){i(window.location.search.split("?")[1])}),r.a.createElement("div",{className:"w-100 mv6"},r.a.createElement("div",{style:{maxWidth:o.d},className:"flex flex-column tracked-tight center"},r.a.createElement(u.b.div,{initial:o.c,animate:o.b,transition:{duration:.5}},l?r.a.createElement("h1",{className:"f3 neue-regular black lh-title mb0 fw5"},l&&"Hi there, "+((t=atob(l)).charAt(0).toUpperCase()+t.slice(1))+"!"):r.a.createElement("h1",{className:"f3 neue-regular black lh-title mb0 fw5"},"Lucas Neumann"),r.a.createElement("p",{className:"f3 black-40 lh-copy mt0 fw5 measure-narrow"},r.a.createElement("br",null),"I help companies research, design, deliver and scale empowering experiences. ",r.a.createElement("a",{className:"link black-40 underline-hover hover-black",href:"http://www.nubank.com.br/en",target:"blank",style:{cursor:"ne-resize"}},"Nubank")," ","alumnus, now design lead at"," ",r.a.createElement("a",{className:"link black-40 underline-hover hover-black",href:"http://www.petalcard.com",target:"blank",style:{cursor:"ne-resize"}},"Petal"),". "))))},w=a(183);a.d(t,"pageQuery",function(){return E});t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,i=t.allImageSharp.nodes,c=Object(n.useState)(!1),s=(c[0],c[1],Object(n.useState)(!0)),m=s[0],d=s[1],u=Object(n.useState)(o.e),p=u[0],E=u[1],k=(i.filter(function(e){return"nuconta-hero-copy.png"===e.fluid.originalName})[0].fluid,a.filter(function(e){return null===e.node.frontmatter.soon})),C=function(){return m?a:a.filter(function(e){return e.node.frontmatter.topics.some(function(e){return p.includes(e)})})};return r.a.createElement(l.a,{isIndex:!0,isAll:m,setAll:d,selectedTopics:p,setSelectedTopics:E},r.a.createElement(b.a,{title:"Home"}),r.a.createElement("div",null,r.a.createElement("div",{className:"w-100 flex center  ",style:{maxWidth:o.d}},r.a.createElement(v,{setSelectedTopics:E,setAll:d}))),r.a.createElement("div",{style:{maxWidth:o.d},className:"db-ns dn mr4 center  "},r.a.createElement(w.a,{selectedTopics:p,setSelectedTopics:E,isAll:m,setAll:d,posts:a,publishedPosts:k})),!m&&r.a.createElement("div",{style:{maxWidth:o.d},className:"mt5 mb6 flex flex-column center  "},r.a.createElement("p",{className:"f3 fw5 w-100 lh-copy black-40 tracked-tight measure"},"Research"===p[0]?"A lot of my time is invested in listening to users, advocating for their needs, collaborating with researchers, and creating the necessary workflows so that the team understands who they're designing for.":"Product Design"===p[0]?"Understand the user, frame the problem, ideate, prototype, test, deliver, measure, repeat. I have designed products that have reached millions of people, across the disciplines of service, industrial, and digital design.":"Design Ops"===p[0]?"Designing design. Helping things scale at a healthy pace. Keeping the teams I work with happy, engaged and empowered.":"I'm a coding begginer and enthusiast. This portfolio website is in itself an experiment in learning React. Here are some other things I've played with:")),r.a.createElement("div",{id:"work"},m?r.a.createElement("div",{style:{maxWidth:o.d},className:"center  "},r.a.createElement(g,{isAll:m,posts:C(),icon:h.d,title:"Petal",date:"2019",place:"New York",description:"On a mission to build credit that is honest, simple, and accessible."}),r.a.createElement(g,{isAll:m,posts:C(),icon:h.b,title:"Nubank",date:"2016—2019",place:"São Paulo",description:"During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."}),r.a.createElement(g,{isAll:m,posts:C(),icon:h.c,title:"Others",date:"2013",place:"London",description:""})):r.a.createElement("div",{className:"center  ",style:{maxWidth:o.d}},r.a.createElement(f,{posts:C()}))))};var E="3253368815"},178:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"e",function(){return r}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return c});var n="1000px",r=["Product Design","Research","Design Ops","Code"],l={x:-25,opacity:0},i={x:0,opacity:1};function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(11),i=a.n(l),c=a(58),s=a.n(c);a.d(t,"a",function(){return s.a});a(180),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},180:function(e,t,a){var n;e.exports=(n=a(184))&&n.default||n},181:function(e,t,a){"use strict";a(0)},183:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(117),a(118),a(178));var i=function(e){var t=e.title,a=e.selectedTopics,i=e.setSelectedTopics,c=e.isAll,s=e.setAll,o=Object(n.useState)(!1),m=o[0],d=o[1],u=Object(n.useState)(!1),p=u[0],f=u[1];return Object(n.useEffect)(function(){return f(!c&&a.includes(t))}),r.a.createElement("li",{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},onClick:function(){!function(e,t){if("All"===e)return i(l.e),void s(!0);i([e]),s(!1)}(t)},className:"pointer nowrap ma0 mr4 fw5 list tracked-tight mb0-l mb2",style:{borderBottom:p?"3px solid black":"3px solid transparent",color:p||m?!p&&m?"#666":"black":"rgba(0,0,0,.4)"}},t)};var c=function(e){var t=e.setSelectedTopics,a=e.isAll,i=e.setAll,c=Object(n.useState)(!1),s=c[0],o=c[1],m=Object(n.useState)(!1),d=(m[0],m[1]);return r.a.createElement("div",{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onClick:function(){d(a),t(l.e),i(!0)},className:"fw5 black pointer nowrap tracked-tight mr3 mb0-l mb3",style:{borderBottom:a?"3px solid black":"3px solid transparent",color:a||s?!a&&s?"#666":"black":"#999"}},"All")},s=a(179);var o=function(e){var t=e.posts,a=Object(n.useState)(!1),l=(a[0],a[1],Object(n.useState)("")),i=(l[0],l[1]);function c(){document.getElementById("surpriseLink").classList.add("blinking"),i(o())}function o(){return t[Math.floor(Math.random()*t.length)].node.frontmatter.path}return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{id:"surpriseLink",to:o(),onMouseEnter:function(){return c()},onMouseOut:function(){document.getElementById("surpriseLink").classList.remove("blinking")},style:{borderBottom:"3px solid transparent"},className:"link fw5 pointer nowrap pointer black-40 tracked-tight"},"Surprise me"))},m=a(182);t.a=function(e){var t=e.selectedTopics,a=e.setSelectedTopics,n=e.isAll,s=e.setAll,d=(e.posts,e.publishedPosts);return r.a.createElement(m.b.div,{className:"w-100-l w-50 flex flex-row-l flex-column items-start mb6 lh-copy f3"},r.a.createElement("div",{className:"mr3"},r.a.createElement(c,{selectedTopics:t,setSelectedTopics:a,isAll:n,setAll:s})),l.e.map(function(e){return r.a.createElement(i,{selectedTopics:t,setSelectedTopics:a,key:e,isAll:n,setAll:s,title:e})}),r.a.createElement("div",{className:"flex items-end"},r.a.createElement(o,{posts:d})))}},184:function(e,t,a){"use strict";a.r(t);a(17);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),c=a(84),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},185:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design"}}}}},186:function(e,t,a){"use strict";var n=a(185),r=a(0),l=a.n(r),i=a(11),c=a.n(i),s=a(179),o=(a(183),a(178)),m=l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19",fill:"#cccccc"})),d=function(e){e.selectedTopics,e.setSelectedTopics,e.isAll,e.setAll;var t=e.isIndex,a=e.prev,n=e.next;return l.a.createElement("div",null,l.a.createElement("header",{style:{width:"100%",left:0,right:0,marginRight:"auto",marginLeft:"auto",borderColor:"rgba(150,150,150,.1)",background:"white"},className:"flex z-max space-between ph4 bb bw1"},l.a.createElement("div",{style:{maxWidth:o.d},className:"w-100 flex justify-between center items-center"},l.a.createElement(s.a,{to:"/",className:"link"},l.a.createElement("h1",{className:"f4 fw5 tracked-tight black-80 neue-regular pv2"},"Lucas Neumann")),!t&&l.a.createElement("div",{className:"flex"},a?l.a.createElement(s.a,{to:a.frontmatter.path},l.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},m)):l.a.createElement("span",{style:{transform:"rotateZ(180deg)"},className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 hover-dark-gray "},m),n?l.a.createElement(s.a,{to:n.frontmatter.path},l.a.createElement("span",{className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},m)):l.a.createElement("span",{className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 "},m)))))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var u=d,p=(a(181),function(){return l.a.createElement("a",{className:"link black underline-hover cursor mt0-ns mt4",target:"_blank",href:"https://forms.gle/CTkARXSiJFT51eRAA"},"Can I make this porfolio better?")}),f=function(){return l.a.createElement("div",{style:{maxWidth:o.d},className:"flex flex-row-ns flex-column center mb6 mt3 b--near-white bw1 pt4 items-center f5-ns f6 w-100 justify-between"},l.a.createElement("div",{className:" flex items-center"},l.a.createElement("p",{className:"mr3"},"Lucas Neumann © Always"),l.a.createElement("a",{className:"link black underline-hover mr3",href:"mailto:lucasneumann.fau@gmail.com"},"Email me"),l.a.createElement("a",{target:"_blank",className:"link black underline-hover mr3",href:"https://www.linkedin.com/in/lucasneumann/"},"LinkedIn")),l.a.createElement(p,null))},h=(a(192),a(193),a(194),function(e){var t=e.children,a=(e.isWorkInView,e.isAll),r=e.setAll,i=e.selectedTopics,c=e.setSelectedTopics,s=e.isIndex,o=e.prev,m=e.next,d=n.data;return l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement(u,{siteTitle:d.site.siteMetadata.title,selectedTopics:i,setSelectedTopics:c,isAll:a,setAll:r,isIndex:s,prev:o&&o,next:m&&m}),l.a.createElement("div",{className:"pt0 ph4",style:{margin:"0 auto",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement(f,null)))});h.propTypes={children:c.a.node.isRequired};t.a=h},188:function(e,t,a){"use strict";var n=a(189),r=a(0),l=a.n(r),i=a(11),c=a.n(i),s=a(201),o=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,s=t||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design",description:"Portfolio website for Lucas Neumann, product designer",author:"Lucas Neumann"}}}}},196:function(e,t,a){"use strict";a.d(t,"e",function(){return l}),a.d(t,"g",function(){return i}),a.d(t,"a",function(){return c}),a.d(t,"f",function(){return s}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return m}),a.d(t,"c",function(){return d});var n=a(0),r=a.n(n),l=function(e){return r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"10",cy:"10",r:"9",stroke:e,strokeWidth:"2"}),r.a.createElement("circle",{cx:"10",cy:"10",r:"5",stroke:e,strokeWidth:"2"}),r.a.createElement("circle",{cx:"10",cy:"10",r:"1",stroke:e,strokeWidth:"2"}))},i=function(e){return r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"10",cy:"10",r:"9",stroke:e,strokeWidth:"2"}),r.a.createElement("path",{d:"M6 10L8.66667 13L14 7",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},c=function(e){return r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"10",cy:"10",r:"9",stroke:e,strokeWidth:"2"}),r.a.createElement("path",{d:"M10 13.5V6M10 6L6.5 9.5M10 6L13.5 9.5",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},s=function(e){return r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15 10V6.5C15 5.67157 15.6716 5 16.5 5V5V5C17.3284 5 18 5.67157 18 6.5V13.8608C18 16.6991 15.6991 19 12.8608 19H8.26351C6.85541 19 5.54663 18.2746 4.80034 17.0805L1.81046 12.2967C1.36526 11.5844 1.59096 10.6454 2.31126 10.2132V10.2132C2.98258 9.81045 3.85072 9.99101 4.30577 10.6281L6 13",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M15 10V4.5C15 3.67157 14.3284 3 13.5 3V3C12.6716 3 12 3.67157 12 4.5V10",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M12 10V2.5C12 1.67157 11.3284 1 10.5 1V1C9.67157 1 9 1.67157 9 2.5V10",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.a.createElement("path",{d:"M9 9V4.5C9 3.67157 8.32843 3 7.5 3V3C6.67157 3 6 3.67157 6 4.5V13",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},o=r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.9399 6.83011C17.9399 10.0501 15.3299 12.6601 12.1099 12.6601C8.8899 12.6601 6.2799 10.0501 6.2799 6.83011C6.2799 3.61011 8.8899 1.00011 12.1099 1.00011C15.3299 1.00011 17.9399 3.61011 17.9399 6.83011",fill:"#ACF8F5"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 11.8896C23 15.1096 20.39 17.7196 17.17 17.7196C13.95 17.7196 11.34 15.1096 11.34 11.8896C11.34 8.6696 13.95 6.0596 17.17 6.0596C20.39 6.0596 23 8.6696 23 11.8896",fill:"#1B5ECE"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.9399 17.1699C17.9399 20.3899 15.3299 22.9999 12.1099 22.9999C8.8899 22.9999 6.2799 20.3899 6.2799 17.1699C6.2799 13.9499 8.8899 11.3399 12.1099 11.3399C15.3299 11.3399 17.9399 13.9499 17.9399 17.1699",fill:"#6EEA9D"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6602 11.8896C12.6602 15.1096 10.0502 17.7196 6.8302 17.7196C3.6102 17.7196 1.0002 15.1096 1.0002 11.8896C1.0002 8.6696 3.6102 6.0596 6.8302 6.0596C10.0502 6.0596 12.6602 8.6696 12.6602 11.8896",fill:"#FFF680"})),m=r.a.createElement("svg",{alt:"Logomarca do Nubank",width:"24",height:"24",viewBox:"0 0 48 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fill:"#8A05BE",fillRule:"evenodd",clipRule:"evenodd",d:"M46.372 5.69458H41.9424C41.0522 5.69458 40.3219 6.41986 40.3143 7.31081H40.3159L40.3123 7.4194L40.3143 7.50324L40.2945 7.77497H40.3148C40.3169 10.414 40.3153 23.5863 40.3143 28.8617H36.5418C34.4639 28.8617 32.7739 27.1804 32.7739 25.1131V7.31384C32.7739 6.42087 32.0432 5.69458 31.1454 5.69458H26.7122C25.8144 5.69458 25.0837 6.42087 25.0837 7.31384C25.0826 15.0904 25.0867 20.1038 25.0887 23.2418L25.0908 26.4399C25.0908 32.3629 31.7745 35.9999 36.5662 35.9999C39.7527 35.9999 41.7321 34.4564 41.7321 31.9715L41.7326 30.2724H43.1738C45.4742 30.2724 48 27.7506 48 25.454V7.31384C48 6.42087 47.2698 5.69458 46.372 5.69458ZM41.7321 7.31233C41.7331 7.19818 41.8276 7.10525 41.9424 7.10525H46.372C46.4877 7.10525 46.5817 7.19919 46.5817 7.31384V25.454C46.5817 26.9824 44.7028 28.8617 43.1738 28.8617H41.7326C41.7342 17.6986 41.7347 7.41688 41.7321 7.31233ZM36.5662 34.5893C32.3671 34.5893 26.5091 31.4886 26.5091 26.4399L26.507 23.4661C26.505 20.3447 26.5009 15.2783 26.502 7.31384C26.502 7.19919 26.5964 7.10525 26.7122 7.10525H31.1454C31.2611 7.10525 31.3556 7.19919 31.3556 7.31384V25.1131C31.3556 27.9582 33.6819 30.2724 36.5418 30.2724H40.3143L40.3138 31.9821C40.3138 34.3352 37.693 34.5893 36.5662 34.5893Z"}),r.a.createElement("path",{fill:"#8A05BE",fillRule:"evenodd",clipRule:"evenodd",d:"M22.9092 9.56052C22.9092 3.63703 16.2255 0 11.4338 0C8.2473 0 6.26787 1.5435 6.26787 4.02846L6.26736 5.72752H4.8262C2.52583 5.72752 0 8.24935 0 10.5459V28.6856C0 29.5786 0.730227 30.3049 1.62803 30.3049H6.05764C6.94782 30.3049 7.67805 29.5806 7.68567 28.6871H7.68414L7.6877 28.581L7.68567 28.477C7.68313 26.589 7.68465 12.6122 7.68567 7.13819H11.4582C13.5361 7.13819 15.2266 8.81958 15.2266 10.8868V28.6856C15.2266 29.5786 15.9568 30.3049 16.8546 30.3049H21.2883C22.1861 30.3049 22.9163 29.5786 22.9163 28.6856C22.9174 20.7211 22.9133 15.6542 22.9108 12.5329L22.9092 9.56052ZM11.4582 5.72752H7.68567L7.68617 4.01785C7.68617 1.66472 10.307 1.41067 11.4338 1.41067C15.6334 1.41067 21.4909 4.51131 21.4909 9.56052L21.493 12.5339C21.4955 15.6552 21.4996 20.7216 21.498 28.6856C21.498 28.8013 21.4041 28.8947 21.2883 28.8947H16.8546C16.7394 28.8947 16.6449 28.8013 16.6449 28.6856V10.8868C16.6449 8.04176 14.3181 5.72752 11.4582 5.72752ZM6.26787 28.6876C6.26685 28.8023 6.1724 28.8947 6.05764 28.8947H1.62803C1.51225 28.8947 1.41831 28.8013 1.41831 28.6856V10.5459C1.41831 9.01756 3.29719 7.13819 4.8262 7.13819H6.26736C6.26634 18.3013 6.26533 28.5826 6.26787 28.6876Z"})),d=r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{width:"24",height:"24",fill:"white"}),r.a.createElement("circle",{cx:"5",cy:"5",r:"2",fill:"#C4C4C4"}),r.a.createElement("circle",{cx:"5",cy:"12",r:"2",fill:"#C4C4C4"}),r.a.createElement("circle",{cx:"5",cy:"19",r:"2",fill:"#C4C4C4"}),r.a.createElement("circle",{cx:"12",cy:"5",r:"2",fill:"#C4C4C4"}),r.a.createElement("circle",{cx:"12",cy:"12",r:"2",fill:"#C4C4C4"}),r.a.createElement("circle",{cx:"12",cy:"19",r:"2",fill:"#C4C4C4"}),r.a.createElement("circle",{cx:"19",cy:"5",r:"2",fill:"#C4C4C4"}),r.a.createElement("circle",{cx:"19",cy:"12",r:"2",fill:"#C4C4C4"}),r.a.createElement("circle",{cx:"19",cy:"19",r:"2",fill:"#C4C4C4"}))},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(178);t.a=function(e){var t=e.title;return r.a.createElement("span",{key:t,className:"f7 mr2 pv2  ph3 ba br-pill b--black-10 dib br1 silver fl dib flex flex-column justify-center h1"},r.a.createElement("div",{className:"mono nowrap"},Object(l.a)(t)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-666eab5e80bbcda85019.js.map