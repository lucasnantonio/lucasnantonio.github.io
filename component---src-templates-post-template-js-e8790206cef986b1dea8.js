(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p}),a.d(t,"pageQuery",function(){return h});a(210),a(15);var n=a(0),l=a.n(n),r=a(180),c=a(202),i=a.n(c),s=a(187),o=a(194),m=a.n(o),u=(a(200),a(179)),d=a(182),f=a(196);function p(e){var t=e.data,a=e.pageContext,n=a.next,c=a.prev,o=t.markdownRemark,p=o.frontmatter,h=o.html;String.prototype.capitalize=function(){return this.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})};var b=function(e){var t=i()(e).getLuminance();return console.log(t),t<=.1?i()(e).lighten(70):t>.1&&t<=.4?i()(e).lighten(30):t>.4&&t<=.65?i()(e).lighten(7):t>.4&&t<=.65?i()(e).lighten(15):t>.65&&t<=.8?i()(e).lighten(19):t>.8&&t<=.99?i()(e).lighten(2):i()(e)},E=l.a.createElement("div",{className:"flex flex-column pt3 pb5-l w-100"},l.a.createElement("h1",{className:" fw5 neue-regular f3 black-80 mt0 mb1 pb0 w-100 tracked-tight"},p.title),l.a.createElement("div",{className:"fw5 measure w-60-l flex flex-row-l flex-column items-start f3 lh-title mt0 pt0 measure mb1 black-40 tracked-tight"},p.subtitle)),w=l.a.createElement("div",{className:"fw5 black-30 mb3 pt3-l pt3 pb4 mw5 f7 lh-copy black-50 flex flex-column align-start items-start"},p.link&&p.link_label&&l.a.createElement("a",{style:{marginLeft:"-.25rem"},href:p.link,target:"_blank",className:" mb3 link  mt0-l  black-40 hover-black-80 pl1 br-pill f7 flex justify-between-l nowrap hover-bg-lightest-gray pointer hover-white"},l.a.createElement("span",{className:"mr1 fw5"},p.link_label),l.a.createElement("span",{className:""},"›")),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"nowrap"},p.where&&p.where+","," ",p.date," "),p.team?"Lucas Neumann, "+p.team.map(function(e){return" "+e}):"Solo project")),v=l.a.createElement("div",{className:"center",style:{backgroundColor:p.color||"#f0f0f0",height:"600px",padding:"0rem",maxWidth:u.d}},l.a.createElement(m.a,{className:"h-100",fluid:p.cover_image.childImageSharp.fluid,color:p.color,objectFit:"contain"})),g=function(e){return l.a.createElement("span",{className:"br-pill flex items-center mr2",style:{padding:".65rem",background:b(p.color)}},e((t=p.color,(a=i()(t).getLuminance())<=.4?i()(t):a>.4&&a<=.7?i()(t).darken(35):i()(t).darken(45)))," ");var t,a},x=l.a.createElement("div",{style:{maxWidth:u.d},className:"mt5 center pa4 ba br3 bw1 b--near-white flex flex-row-l flex-column"},c&&l.a.createElement("div",{className:"f5  mr0  w-100  mb0-l mb4 "+(n&&"br-l bw1 b--near-white mr4-l pr4-l")},l.a.createElement("div",{className:"bg-near-white br3 mb4 flex center justify-center w-100"},l.a.createElement("img",{className:"mw5",src:c.frontmatter.cover_image.publicURL})),l.a.createElement("div",{className:" lh-title f5 mr4 mb3"},"Previous"),l.a.createElement(r.a,{to:c.frontmatter.path,className:"flex link black underline-hover lh-title f3 black mb1 fw5"},c.frontmatter.title),l.a.createElement("div",{className:" lh-title black-40 fw5 f3 mb3 "},c.frontmatter.subtitle)),n&&n.frontmatter&&l.a.createElement("div",{className:"w-100"},l.a.createElement("div",{className:"bg-near-white br3 mb4 flex center justify-center"},l.a.createElement("img",{className:"mw5",src:n.frontmatter.cover_image.publicURL})),l.a.createElement("div",{className:" lh-title f5 mb3"},"Next"),l.a.createElement(r.a,{to:n.frontmatter.path,className:"link black underline-hover flex w-100 lh-title fw5 f3 mb1"},n.frontmatter.title),l.a.createElement("div",{className:" lh-title black-40 f3 mb3"},n.frontmatter.subtitle))),C=l.a.createElement("div",{className:"pt4 flex flex-row-l flex-column w-100"},l.a.createElement("div",{style:{maxWidth:u.d},className:"post-content center w-100"},l.a.createElement("div",{className:"lh-copy",dangerouslySetInnerHTML:{__html:h}}))),k=(p.solution||p.problem||p.impact||p.myrole)&&l.a.createElement("div",{className:"flex flex-column center items-center"},l.a.createElement("div",{style:{maxWidth:u.d},className:" center flex flex-row-ns flex-column justify-between pv4-ns pv4 br2 tl mt3 "},l.a.createElement("div",{className:"flex flex-row-ns flex-column"},p.problem&&l.a.createElement("div",{className:"mr5 w-100 mb0-ns mb4 measure"},l.a.createElement("h4",{className:"fw6 f4 mt3 mb0 flex center items-center"},g(f.e),l.a.createElement("span",{className:"ml2"},"Problem")," "),l.a.createElement("p",{className:"lh-copy f4"},p.problem)),p.solution&&l.a.createElement("div",{className:"mr5 w-100 mb0-ns mb4 measure"},l.a.createElement("h4",{className:"fw6 f4 mt3 mb0 flex center items-center"},g(f.g),l.a.createElement("span",{className:"ml2"},"Approach")),l.a.createElement("p",{className:"lh-copy f4"},p.solution))),l.a.createElement("div",{className:"flex flex-row-ns flex-column"},p.impact&&l.a.createElement("div",{className:(p.myrole&&"mr5")+"  w-100 mb0-ns mb4 measure"},l.a.createElement("h4",{className:"fw6 f4 mt3 mb0 flex center items-center"},g(f.a),l.a.createElement("span",{className:"ml2"},"Impact")),l.a.createElement("p",{className:"lh-copy f4"},p.impact)),p.myrole&&l.a.createElement("div",{className:" w-100 mb0-ns mb4 measure"},l.a.createElement("h4",{className:"fw6 f4 mt3 mb0 flex center items-center"},g(f.f),l.a.createElement("span",{className:"ml2"},"My role")),l.a.createElement("p",{className:"lh-copy f4"},p.myrole)))),l.a.createElement("div",{style:{borderColor:b(p.color)},className:"w bt bw2"}));return l.a.createElement(s.a,{prev:c,next:n,isIndex:!1},l.a.createElement(d.b.div,{transition:{duration:.5},initial:u.c,animate:u.b},l.a.createElement("div",{style:{maxWidth:u.d},className:"flex w-100 justify-between flex-row-l flex-column center mt4 "},E,w)),l.a.createElement(d.b.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2}},v),k,C,x)}var h="2921000396"},179:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"e",function(){return l}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return c}),a.d(t,"a",function(){return i});var n="940px",l=["Product Design","Research","Design Ops","Code"],r={x:-25,opacity:0},c={x:0,opacity:1};function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}},180:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=a(58),s=a.n(i);a.d(t,"a",function(){return s.a});a(181),l.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},181:function(e,t,a){var n;e.exports=(n=a(185))&&n.default||n},183:function(e,t,a){"use strict";a(0)},184:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(118),a(119),a(179));var c=function(e){var t=e.title,a=e.selectedTopics,c=e.setSelectedTopics,i=e.isAll,s=e.setAll,o=Object(n.useState)(!1),m=o[0],u=o[1],d=Object(n.useState)(!1),f=d[0],p=d[1];return Object(n.useEffect)(function(){return p(!i&&a.includes(t))}),l.a.createElement("li",{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onClick:function(){!function(e,t){if("All"===e)return c(r.e),void s(!0);c([e]),s(!1)}(t)},className:"pointer nowrap ma0 mr4 fw5 list tracked-tight mb0-l mb2",style:{borderBottom:f?"3px solid black":"3px solid transparent",color:f||m?!f&&m?"rgba(0,0,0,.8)":"black":"rgba(0,0,0,.4)",transition:"color .2s"}},t)};var i=function(e){var t=e.setSelectedTopics,a=e.isAll,c=e.setAll,i=Object(n.useState)(!1),s=i[0],o=i[1],m=Object(n.useState)(!1),u=(m[0],m[1]);return l.a.createElement("div",{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onClick:function(){u(a),t(r.e),c(!0)},className:"fw5 black pointer nowrap tracked-tight mr3 mb0-l mb3",style:{borderBottom:a?"3px solid black":"3px solid transparent",color:a||s?!a&&s?"#666":"black":"#999"}},"All")},s=a(180);var o=function(e){var t=e.posts,a=Object(n.useState)(!1),r=(a[0],a[1],Object(n.useState)("")),c=(r[0],r[1]);function i(){document.getElementById("surpriseLink").classList.add("blinking"),c(o())}function o(){return t[Math.floor(Math.random()*t.length)].node.frontmatter.path}return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{id:"surpriseLink",to:o(),onMouseEnter:function(){return i()},onMouseOut:function(){document.getElementById("surpriseLink").classList.remove("blinking")},style:{borderBottom:"3px solid transparent"},className:"link fw5 pointer nowrap pointer black-40 tracked-tight"},"Surprise me"))},m=a(182);t.a=function(e){var t=e.selectedTopics,a=e.setSelectedTopics,n=e.isAll,s=e.setAll,u=e.publishedPosts;return l.a.createElement(m.b.div,{initial:{opacity:0,marginLeft:-20},animate:{opacity:1,marginLeft:0},className:"w-100-l w-50 flex flex-row-l flex-column items-start mb6 lh-copy f3"},l.a.createElement("div",{className:"mr3"},l.a.createElement(i,{selectedTopics:t,setSelectedTopics:a,isAll:n,setAll:s})),r.e.map(function(e){return l.a.createElement(c,{selectedTopics:t,setSelectedTopics:a,key:e,isAll:n,setAll:s,title:e})}),l.a.createElement("div",{className:"flex items-end"},l.a.createElement(o,{posts:u})))}},185:function(e,t,a){"use strict";a.r(t);a(17);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=a(84),s=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},186:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design"}}}}},187:function(e,t,a){"use strict";var n=a(186),l=a(0),r=a.n(l),c=a(11),i=a.n(c),s=a(180),o=(a(184),a(179)),m=r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 19C9.74401 19 9.48801 18.902 9.29301 18.707C8.90201 18.316 8.90201 17.684 9.29301 17.293L14.586 12L9.29301 6.70701C8.90201 6.31601 8.90201 5.68401 9.29301 5.29301C9.68401 4.90201 10.316 4.90201 10.707 5.29301L16.707 11.293C17.098 11.684 17.098 12.316 16.707 12.707L10.707 18.707C10.512 18.902 10.256 19 10 19",fill:"#cccccc"})),u=function(e){e.selectedTopics,e.setSelectedTopics,e.isAll,e.setAll;var t=e.isIndex,a=e.prev,n=e.next;return r.a.createElement("div",null,r.a.createElement("header",{style:{width:"100%",left:0,right:0,marginRight:"auto",marginLeft:"auto",borderColor:"rgba(150,150,150,.1)",background:"white"},className:"flex z-max space-between ph4 bb bw1"},r.a.createElement("div",{style:{maxWidth:o.d},className:"w-100 flex justify-between center items-center"},r.a.createElement(s.a,{to:"/",className:"link"},r.a.createElement("h1",{className:"f4 fw5 tracked-tight black-80 neue-regular pv2"},"Lucas Neumann")),!t&&r.a.createElement("div",{className:"flex"},a?r.a.createElement(s.a,{to:a.frontmatter.path},r.a.createElement("span",{style:{transition:"background-color .2s",transform:"rotateZ(180deg)"},className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},m)):r.a.createElement("span",{style:{transition:"background-color .2s",transform:"rotateZ(180deg)"},className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 hover-dark-gray "},m),n?r.a.createElement(s.a,{to:n.frontmatter.path},r.a.createElement("span",{style:{transition:"background-color .2s"},className:"flex justify-center center items-center align-center ma2 pa2 br-pill hover-bg-near-white bn pointer center items-center black-20 hover-dark-gray "},m)):r.a.createElement("span",{style:{transition:"background-color .2s"},className:"o-30 flex justify-center center items-center align-center ma2 pa2 br-pill bn center items-center black-10 "},m)))))};u.propTypes={siteTitle:i.a.string},u.defaultProps={siteTitle:""};var d=u,f=(a(183),function(){return r.a.createElement("a",{className:"link black underline-hover cursor mt0-ns mt4",target:"_blank",href:"https://forms.gle/CTkARXSiJFT51eRAA"},"Can I make my website better?")}),p=function(){return r.a.createElement("div",{style:{maxWidth:o.d},className:"flex flex-row-ns flex-column center mb6 mt3 b--near-white bw1 pt4 items-center f5-ns f6 w-100 justify-between"},r.a.createElement("div",{className:" flex items-center"},r.a.createElement("p",{className:"mr3"},"Lucas Neumann © Always"),r.a.createElement("a",{className:"link black underline-hover mr3",href:"mailto:lucasneumann.fau@gmail.com"},"Email me"),r.a.createElement("a",{target:"_blank",className:"link black underline-hover mr3",href:"https://www.linkedin.com/in/lucasneumann/"},"LinkedIn")),r.a.createElement(f,null))},h=(a(191),a(192),a(193),function(e){var t=e.children,a=(e.isWorkInView,e.isAll),l=e.setAll,c=e.selectedTopics,i=e.setSelectedTopics,s=e.isIndex,o=e.prev,m=e.next,u=n.data;return r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement(d,{siteTitle:u.site.siteMetadata.title,selectedTopics:c,setSelectedTopics:i,isAll:a,setAll:l,isIndex:s,prev:o&&o,next:m&&m}),r.a.createElement("div",{className:"pt0 ph4",style:{margin:"0 auto",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement(p,null)))});h.propTypes={children:i.a.node.isRequired};t.a=h},196:function(e,t,a){"use strict";a.d(t,"e",function(){return r}),a.d(t,"g",function(){return c}),a.d(t,"a",function(){return i}),a.d(t,"f",function(){return s}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return m}),a.d(t,"c",function(){return u});var n=a(0),l=a.n(n),r=function(e){return l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{cx:"10",cy:"10",r:"9",stroke:e,strokeWidth:"2"}),l.a.createElement("circle",{cx:"10",cy:"10",r:"5",stroke:e,strokeWidth:"2"}),l.a.createElement("circle",{cx:"10",cy:"10",r:"1",stroke:e,strokeWidth:"2"}))},c=function(e){return l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{cx:"10",cy:"10",r:"9",stroke:e,strokeWidth:"2"}),l.a.createElement("path",{d:"M6 10L8.66667 13L14 7",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},i=function(e){return l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{cx:"10",cy:"10",r:"9",stroke:e,strokeWidth:"2"}),l.a.createElement("path",{d:"M10 13.5V6M10 6L6.5 9.5M10 6L13.5 9.5",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},s=function(e){return l.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M15 10V6.5C15 5.67157 15.6716 5 16.5 5V5V5C17.3284 5 18 5.67157 18 6.5V13.8608C18 16.6991 15.6991 19 12.8608 19H8.26351C6.85541 19 5.54663 18.2746 4.80034 17.0805L1.81046 12.2967C1.36526 11.5844 1.59096 10.6454 2.31126 10.2132V10.2132C2.98258 9.81045 3.85072 9.99101 4.30577 10.6281L6 13",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.a.createElement("path",{d:"M15 10V4.5C15 3.67157 14.3284 3 13.5 3V3C12.6716 3 12 3.67157 12 4.5V10",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.a.createElement("path",{d:"M12 10V2.5C12 1.67157 11.3284 1 10.5 1V1C9.67157 1 9 1.67157 9 2.5V10",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.a.createElement("path",{d:"M9 9V4.5C9 3.67157 8.32843 3 7.5 3V3C6.67157 3 6 3.67157 6 4.5V13",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},o=l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.9399 6.83011C17.9399 10.0501 15.3299 12.6601 12.1099 12.6601C8.8899 12.6601 6.2799 10.0501 6.2799 6.83011C6.2799 3.61011 8.8899 1.00011 12.1099 1.00011C15.3299 1.00011 17.9399 3.61011 17.9399 6.83011",fill:"#ACF8F5"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 11.8896C23 15.1096 20.39 17.7196 17.17 17.7196C13.95 17.7196 11.34 15.1096 11.34 11.8896C11.34 8.6696 13.95 6.0596 17.17 6.0596C20.39 6.0596 23 8.6696 23 11.8896",fill:"#1B5ECE"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.9399 17.1699C17.9399 20.3899 15.3299 22.9999 12.1099 22.9999C8.8899 22.9999 6.2799 20.3899 6.2799 17.1699C6.2799 13.9499 8.8899 11.3399 12.1099 11.3399C15.3299 11.3399 17.9399 13.9499 17.9399 17.1699",fill:"#6EEA9D"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6602 11.8896C12.6602 15.1096 10.0502 17.7196 6.8302 17.7196C3.6102 17.7196 1.0002 15.1096 1.0002 11.8896C1.0002 8.6696 3.6102 6.0596 6.8302 6.0596C10.0502 6.0596 12.6602 8.6696 12.6602 11.8896",fill:"#FFF680"})),m=l.a.createElement("svg",{alt:"Logomarca do Nubank",width:"24",height:"24",viewBox:"0 0 48 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fill:"#8A05BE",fillRule:"evenodd",clipRule:"evenodd",d:"M46.372 5.69458H41.9424C41.0522 5.69458 40.3219 6.41986 40.3143 7.31081H40.3159L40.3123 7.4194L40.3143 7.50324L40.2945 7.77497H40.3148C40.3169 10.414 40.3153 23.5863 40.3143 28.8617H36.5418C34.4639 28.8617 32.7739 27.1804 32.7739 25.1131V7.31384C32.7739 6.42087 32.0432 5.69458 31.1454 5.69458H26.7122C25.8144 5.69458 25.0837 6.42087 25.0837 7.31384C25.0826 15.0904 25.0867 20.1038 25.0887 23.2418L25.0908 26.4399C25.0908 32.3629 31.7745 35.9999 36.5662 35.9999C39.7527 35.9999 41.7321 34.4564 41.7321 31.9715L41.7326 30.2724H43.1738C45.4742 30.2724 48 27.7506 48 25.454V7.31384C48 6.42087 47.2698 5.69458 46.372 5.69458ZM41.7321 7.31233C41.7331 7.19818 41.8276 7.10525 41.9424 7.10525H46.372C46.4877 7.10525 46.5817 7.19919 46.5817 7.31384V25.454C46.5817 26.9824 44.7028 28.8617 43.1738 28.8617H41.7326C41.7342 17.6986 41.7347 7.41688 41.7321 7.31233ZM36.5662 34.5893C32.3671 34.5893 26.5091 31.4886 26.5091 26.4399L26.507 23.4661C26.505 20.3447 26.5009 15.2783 26.502 7.31384C26.502 7.19919 26.5964 7.10525 26.7122 7.10525H31.1454C31.2611 7.10525 31.3556 7.19919 31.3556 7.31384V25.1131C31.3556 27.9582 33.6819 30.2724 36.5418 30.2724H40.3143L40.3138 31.9821C40.3138 34.3352 37.693 34.5893 36.5662 34.5893Z"}),l.a.createElement("path",{fill:"#8A05BE",fillRule:"evenodd",clipRule:"evenodd",d:"M22.9092 9.56052C22.9092 3.63703 16.2255 0 11.4338 0C8.2473 0 6.26787 1.5435 6.26787 4.02846L6.26736 5.72752H4.8262C2.52583 5.72752 0 8.24935 0 10.5459V28.6856C0 29.5786 0.730227 30.3049 1.62803 30.3049H6.05764C6.94782 30.3049 7.67805 29.5806 7.68567 28.6871H7.68414L7.6877 28.581L7.68567 28.477C7.68313 26.589 7.68465 12.6122 7.68567 7.13819H11.4582C13.5361 7.13819 15.2266 8.81958 15.2266 10.8868V28.6856C15.2266 29.5786 15.9568 30.3049 16.8546 30.3049H21.2883C22.1861 30.3049 22.9163 29.5786 22.9163 28.6856C22.9174 20.7211 22.9133 15.6542 22.9108 12.5329L22.9092 9.56052ZM11.4582 5.72752H7.68567L7.68617 4.01785C7.68617 1.66472 10.307 1.41067 11.4338 1.41067C15.6334 1.41067 21.4909 4.51131 21.4909 9.56052L21.493 12.5339C21.4955 15.6552 21.4996 20.7216 21.498 28.6856C21.498 28.8013 21.4041 28.8947 21.2883 28.8947H16.8546C16.7394 28.8947 16.6449 28.8013 16.6449 28.6856V10.8868C16.6449 8.04176 14.3181 5.72752 11.4582 5.72752ZM6.26787 28.6876C6.26685 28.8023 6.1724 28.8947 6.05764 28.8947H1.62803C1.51225 28.8947 1.41831 28.8013 1.41831 28.6856V10.5459C1.41831 9.01756 3.29719 7.13819 4.8262 7.13819H6.26736C6.26634 18.3013 6.26533 28.5826 6.26787 28.6876Z"})),u=l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("rect",{width:"24",height:"24",fill:"white"}),l.a.createElement("circle",{cx:"5",cy:"5",r:"2",fill:"#C4C4C4"}),l.a.createElement("circle",{cx:"5",cy:"12",r:"2",fill:"#C4C4C4"}),l.a.createElement("circle",{cx:"5",cy:"19",r:"2",fill:"#C4C4C4"}),l.a.createElement("circle",{cx:"12",cy:"5",r:"2",fill:"#C4C4C4"}),l.a.createElement("circle",{cx:"12",cy:"12",r:"2",fill:"#C4C4C4"}),l.a.createElement("circle",{cx:"12",cy:"19",r:"2",fill:"#C4C4C4"}),l.a.createElement("circle",{cx:"19",cy:"5",r:"2",fill:"#C4C4C4"}),l.a.createElement("circle",{cx:"19",cy:"12",r:"2",fill:"#C4C4C4"}),l.a.createElement("circle",{cx:"19",cy:"19",r:"2",fill:"#C4C4C4"}))},200:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(179);t.a=function(e){var t=e.title;return l.a.createElement("span",{key:t,className:"f7 mr2 pv2  ph3 ba br-pill b--black-10 dib br1 silver fl dib flex flex-column justify-center h1"},l.a.createElement("div",{className:"mono nowrap"},Object(r.a)(t)))}},210:function(e,t,a){"use strict";a(190)("link",function(e){return function(t){return e(this,"a","href",t)}})}}]);
//# sourceMappingURL=component---src-templates-post-template-js-e8790206cef986b1dea8.js.map