(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{177:function(e,t,a){"use strict";a.r(t);a(117),a(118);var n=a(0),r=a.n(n),l=a(184),s=a(179),i=(a(199),a(198)),o=a.n(i),c=a(178);var m=function(e){var t=e.fluid,a=e.color;return r.a.createElement("div",{style:{backgroundColor:a}},r.a.createElement(o.a,{className:"h-auto-l ph5-l",backgroundColor:"#f0f0f0",fluid:t,objectFit:"contain"}))},u=a(200);var d=function(e){var t=e.post,a=e.index,l=t.frontmatter.topics.map(function(e){return r.a.createElement(u.a,{title:e})}),i=Object(n.useState)(!1),o=i[0],c=i[1];return r.a.createElement(s.a,{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},className:" \n      "+(a%2==0&&"pr3-l")+"\n      "+(a%2!=0&&"pl3-l")+"\n      "+("large"!==t.frontmatter.size?"w-25-l w-100":"w-50-l w-100")+"\n        link black fl flex flex-column mb4\n        ",to:t.frontmatter.path},r.a.createElement("div",{className:"br2 overflow-hidden"},r.a.createElement(m,{cover:t.frontmatter.cover,isHovered:o,fluid:t.frontmatter.cover_image.childImageSharp.fluid,color:t.frontmatter.color})),r.a.createElement("div",{style:{minHeight:"9rem"},className:"black pb4 mt2 flex justify-between"},r.a.createElement("div",{className:"mr3 w-100"},r.a.createElement("p",{className:"neue-regular f4 measure-narrow mt3 mb3 "+(o?"u underline":"")},t.frontmatter.title),r.a.createElement("p",{className:"f5 black-40 neue-regular lh-copy pv0 mb0 mt0"},t.frontmatter.subtitle)),r.a.createElement("div",{className:"mono mt2 flex items-start",style:{marginLeft:"-.2rem"}},l)))},p=function(e){var t=e.posts.map(function(e,t){return r.a.createElement(d,{index:t,key:e.node.id,post:e.node})});return r.a.createElement("div",{className:"cf w-100"},t)},f=function(e){var t=e.title,a=(e.date,e.description,e.posts),n=e.isAll,l=a.filter(function(e){return e.node.frontmatter.category===t&&!0===e.node.frontmatter.published});return l.length>0&&r.a.createElement("div",{className:"w-100 flex flex-row mb3 pt5"},r.a.createElement("div",{className:"flex flex-row-l flex-column w-100"},n&&r.a.createElement("h2",{className:"w-10 mr4 pb2 f3 mt0 pt0 sans neue-regular black fw5"},t),r.a.createElement(p,{posts:l})))},g=a(187),h=(a(127),a(34),a(181),a(182));var b=function(e){var t,a=e.setSelectedTopics,l=e.setAll,s=Object(n.useState)(null),i=s[0],o=s[1];function m(e){l(!1),a([e])}return Object(n.useEffect)(function(){o(window.location.search.split("?")[1])}),r.a.createElement("div",{className:"flex flex-column mb6 mt6"},r.a.createElement(h.a.div,{initial:c.c,animate:c.b},r.a.createElement("h1",{className:"f2-l f3 neue-regular black lh-title mb0"},i?"Hi there, "+((t=atob(i)).charAt(0).toUpperCase()+t.slice(1))+"!":"Lucas Neumann",r.a.createElement("br",null),i&&"I'm Lucas Neumann."),r.a.createElement("p",{className:"f2-l f3 measure-narrow black-40 lh-copy mt0"},r.a.createElement("br",null)," I help companies"," ",r.a.createElement("span",{className:"underline-hover hover-black pointer",onClick:function(){return m("Design Ops")}},"build design teams,")," ",r.a.createElement("span",{className:"underline-hover hover-black pointer",onClick:function(){return m("Research")}},"run user research,")," ",r.a.createElement("span",{className:"underline-hover hover-black pointer",onClick:function(){return m("Product Design")}},"and design experiences.")," ",r.a.createElement("br",null),r.a.createElement("a",{className:"link black-40 underline-hover hover-black",href:"http://www.nubank.com.br/en",target:"blank",style:{cursor:"ne-resize"}},"Nubank")," ","alumnus, currently managing design at"," ",r.a.createElement("a",{className:"link black-40 underline-hover hover-black",href:"http://www.petalcard.com",target:"blank",style:{cursor:"ne-resize"}},"Petal"),".")))},w=a(183);a.d(t,"pageQuery",function(){return v});t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,s=(t.allImageSharp.nodes,Object(n.useState)(!1)),i=(s[0],s[1],Object(n.useState)(!0)),o=i[0],m=i[1],u=Object(n.useState)(c.e),d=u[0],h=u[1],v=function(){return o?a:a.filter(function(e){return e.node.frontmatter.topics.some(function(e){return d.includes(e)})})};return r.a.createElement(l.a,{isIndex:!0,isAll:o,setAll:m,selectedTopics:d,setSelectedTopics:h},r.a.createElement(g.a,{title:"Home"}),r.a.createElement("div",null,r.a.createElement(b,{setSelectedTopics:h,setAll:m}),r.a.createElement(w.a,{selectedTopics:d,setSelectedTopics:h,isAll:o,setAll:m,posts:a})),!o&&r.a.createElement("div",{className:"mb5 flex flex-row-l flex-column bt bw1 b--near-white pt4"},r.a.createElement("h1",{className:"w-100 f2-l f3"},d[0]," ",r.a.createElement("span",{className:"black-40 f4"},v().length)),r.a.createElement("p",{className:"f4-l f5 w-100 lh-copy mt4"},"Research"===d[0]?"I dedicate a lot of my time to listening to users, advocating for their needs, and creating the necessary workflows to ensure the teams I collaborate with understand who they're designing for.":"Product Design"===d[0]?"I've designed products that reach millions of users and are valued in the billions. Most of my current projects are digital, but my roots are strongly generalistic, having spanned industrial and service design.":"Design Ops"===d[0]?"Designing how design gets made and keeping the teams I work with happy, engaged and empowered is one of my biggest areas of interest.":"I'm a coding begginer and enthusiast. This portfolio website is, in itself, an experiment in learning React, and below you can find other projects I've played with.")),r.a.createElement("div",{id:"work"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{isAll:o,posts:v(),title:"Petal",date:"2019",place:"New York",description:"On a mission to build credit that is honest, simple, and accessible."}),r.a.createElement(f,{isAll:o,posts:v(),title:"Nubank",date:"2016—2019",place:"São Paulo",description:"During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."}),r.a.createElement(f,{isAll:o,mainImage:a[0].node.frontmatter.cover_image.childImageSharp.fluid,posts:v(),title:"Kano",date:"2013",place:"London",description:"During 3 years, I helped Nubank grow from 1 to 10 million customers, 1 to 3 products, and 6 to 35 designers."}),r.a.createElement(f,{isAll:o,posts:v(),title:"Others",date:"2013",place:"London",description:""})):r.a.createElement(p,{posts:v()})))};var v="554515373"},187:function(e,t,a){"use strict";var n=a(188),r=a(0),l=a.n(r),s=a(11),i=a.n(s),o=a(194),c=a.n(o);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,i=n.data.site,o=t||i.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Neumann - design",description:"Portfolio website for Lucas Neumann, product designer",author:"Lucas Neumann"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-29e7b48ecb2c161e73ec.js.map