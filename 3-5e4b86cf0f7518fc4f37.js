(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(e,t,r){"use strict";var a=r(198),i=r(16);t.__esModule=!0,t.default=void 0;var n=i(r(120)),s=i(r(119)),o=i(r(60)),l=i(r(61)),f=i(r(67)),u=a(r(0)),c=i(r(11)),d=i(r(195)),h=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,(0,f.default)((0,l.default)((0,l.default)(t)),"imageRef",t.props.innerRef||(0,u.createRef)()),t}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=document.createElement("img");void 0!==t.style.objectFit&&void 0!==t.style.objectPosition||r.e(10).then(r.t.bind(null,209,7)).then(function(t){return(0,t.default)(e.imageRef.current.imageRef.current)})},a.render=function(){var e=this.props,t=e.objectFit,r=e.objectPosition,a=(0,s.default)(e,["objectFit","objectPosition"]);return u.default.createElement(d.default,(0,n.default)({ref:this.imageRef},a,{imgStyle:(0,n.default)({},a.imgStyle,{objectFit:t,objectPosition:r,fontFamily:'"object-fit: '+t+"; object-position: "+r+'"'})}))},t}(u.Component);h.propTypes={objectFit:c.default.string,objectPosition:c.default.string},h.defaultProps={objectFit:"cover",objectPosition:"50% 50%"};var g=(0,u.forwardRef)(function(e,t){return u.default.createElement(h,(0,n.default)({},e,{innerRef:t}))});t.default=g},191:function(e,t,r){var a=r(6),i=r(8),n=r(36),s=/"/g,o=function(e,t,r,a){var i=String(n(e)),o="<"+t;return""!==r&&(o+=" "+r+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(o),a(a.P+a.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},195:function(e,t,r){"use strict";r(29),r(22),r(12),r(59),r(123),r(199);var a=r(16);t.__esModule=!0,t.default=void 0;var i,n=a(r(60)),s=a(r(61)),o=a(r(119)),l=a(r(120)),f=a(r(0)),u=a(r(11)),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=_([].concat(t.fluid))),t.fixed&&(t.fixed=_([].concat(t.fixed))),t},d=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},h=Object.create({}),g=function(e){var t=c(e),r=d(t);return h[r]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,m=b&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return f.default.createElement(f.default.Fragment,{key:t},a&&f.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),f.default.createElement("source",{media:i,srcSet:r,sizes:n}))})}function _(e){var t=[],r=[];return e.forEach(function(e){return(e.media?t:r).push(e)}),t.concat(r)}function S(e){return e.map(function(e){var t=e.src,r=e.media,a=e.tracedSVG;return f.default.createElement("source",{key:t,media:r,srcSet:a})})}function w(e){return e.map(function(e){var t=e.src,r=e.media,a=e.base64;return f.default.createElement("source",{key:t,media:r,srcSet:a})})}function x(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var A=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),i);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",f=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)}).join("")+"<img "+f+s+o+r+a+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,n=f.default.createElement(E,(0,l.default)({src:t},i));return r.length>1?f.default.createElement("picture",null,a(r),n):n},E=f.default.forwardRef(function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,d=e.draggable,h=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return f.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:i},h,{onLoad:s,onError:u,ref:t,loading:c,draggable:d,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});E.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.addNoScript=!(t.critical&&!t.fadeIn),r.useIOSupport=!p&&m&&!t.critical&&!r.seenBefore;var a=t.critical||b&&(p||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=f.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,s.default)((0,s.default)(r))),r.handleRef=r.handleRef.bind((0,s.default)((0,s.default)(r))),r}(0,n.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),r=d(t),h[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,d=void 0===u?{}:u,h=e.placeholderClassName,g=e.fluid,p=e.fixed,b=e.backgroundColor,m=e.durationFadeIn,v=e.Tag,_=e.itemProp,x=e.loading,A=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:L?1:0,transition:O?"opacity "+m+"ms":"none"},o),F="boolean"==typeof b?"lightgray":b,I={transitionDelay:m+"ms"},H=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&I,o,d),C={title:t,alt:this.state.isVisible?"":r,style:H,className:h};if(g){var P=g,z=P[0];return f.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},f.default.createElement(v,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),F&&f.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:F,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&I)}),z.base64&&f.default.createElement(R,{src:z.base64,spreadProps:C,imageVariants:P,generateSources:w}),z.tracedSVG&&f.default.createElement(R,{src:z.tracedSVG,spreadProps:C,imageVariants:P,generateSources:S}),this.state.isVisible&&f.default.createElement("picture",null,y(P),f.default.createElement(E,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:_,loading:x,draggable:A})),this.addNoScript&&f.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:x},z,{imageVariants:P}))}}))}if(p){var V=p,T=V[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete M.display,f.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},F&&f.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:F,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},O&&I)}),T.base64&&f.default.createElement(R,{src:T.base64,spreadProps:C,imageVariants:V,generateSources:w}),T.tracedSVG&&f.default.createElement(R,{src:T.tracedSVG,spreadProps:C,imageVariants:V,generateSources:S}),this.state.isVisible&&f.default.createElement("picture",null,y(V),f.default.createElement(E,{alt:r,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:_,loading:x,draggable:A})),this.addNoScript&&f.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:x},T,{imageVariants:V}))}}))}return null},t}(f.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});L.propTypes={resolutions:O,sizes:j,fixed:u.default.oneOfType([O,u.default.arrayOf(O)]),fluid:u.default.oneOfType([j,u.default.arrayOf(j)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var F=L;t.default=F},198:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}},199:function(e,t,r){"use strict";r(191)("fixed",function(e){return function(){return e(this,"tt","","")}})},202:function(e,t,r){var a;r(15),r(203),r(89),r(12),function(i){var n=/^\s+/,s=/\s+$/,o=0,l=i.round,f=i.min,u=i.max,c=i.random;function d(e,t){if(t=t||{},(e=e||"")instanceof d)return e;if(!(this instanceof d))return new d(e,t);var r=function(e){var t={r:0,g:0,b:0},r=1,a=null,o=null,l=null,c=!1,d=!1;"string"==typeof e&&(e=function(e){e=e.replace(n,"").replace(s,"").toLowerCase();var t,r=!1;if(j[e])e=j[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};if(t=D.rgb.exec(e))return{r:t[1],g:t[2],b:t[3]};if(t=D.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=D.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=D.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=D.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=D.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=D.hex8.exec(e))return{r:P(t[1]),g:P(t[2]),b:P(t[3]),a:M(t[4]),format:r?"name":"hex8"};if(t=D.hex6.exec(e))return{r:P(t[1]),g:P(t[2]),b:P(t[3]),format:r?"name":"hex"};if(t=D.hex4.exec(e))return{r:P(t[1]+""+t[1]),g:P(t[2]+""+t[2]),b:P(t[3]+""+t[3]),a:M(t[4]+""+t[4]),format:r?"name":"hex8"};if(t=D.hex3.exec(e))return{r:P(t[1]+""+t[1]),g:P(t[2]+""+t[2]),b:P(t[3]+""+t[3]),format:r?"name":"hex"};return!1}(e));"object"==typeof e&&(G(e.r)&&G(e.g)&&G(e.b)?(h=e.r,g=e.g,p=e.b,t={r:255*H(h,255),g:255*H(g,255),b:255*H(p,255)},c=!0,d="%"===String(e.r).substr(-1)?"prgb":"rgb"):G(e.h)&&G(e.s)&&G(e.v)?(a=V(e.s),o=V(e.v),t=function(e,t,r){e=6*H(e,360),t=H(t,100),r=H(r,100);var a=i.floor(e),n=e-a,s=r*(1-t),o=r*(1-n*t),l=r*(1-(1-n)*t),f=a%6;return{r:255*[r,o,s,s,l,r][f],g:255*[l,r,r,o,s,s][f],b:255*[s,s,l,r,r,o][f]}}(e.h,a,o),c=!0,d="hsv"):G(e.h)&&G(e.s)&&G(e.l)&&(a=V(e.s),l=V(e.l),t=function(e,t,r){var a,i,n;function s(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=H(e,360),t=H(t,100),r=H(r,100),0===t)a=i=n=r;else{var o=r<.5?r*(1+t):r+t-r*t,l=2*r-o;a=s(l,o,e+1/3),i=s(l,o,e),n=s(l,o,e-1/3)}return{r:255*a,g:255*i,b:255*n}}(e.h,a,l),c=!0,d="hsl"),e.hasOwnProperty("a")&&(r=e.a));var h,g,p;return r=I(r),{ok:c,format:e.format||d,r:f(255,u(t.r,0)),g:f(255,u(t.g,0)),b:f(255,u(t.b,0)),a:r}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=l(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=l(this._r)),this._g<1&&(this._g=l(this._g)),this._b<1&&(this._b=l(this._b)),this._ok=r.ok,this._tc_id=o++}function h(e,t,r){e=H(e,255),t=H(t,255),r=H(r,255);var a,i,n=u(e,t,r),s=f(e,t,r),o=(n+s)/2;if(n==s)a=i=0;else{var l=n-s;switch(i=o>.5?l/(2-n-s):l/(n+s),n){case e:a=(t-r)/l+(t<r?6:0);break;case t:a=(r-e)/l+2;break;case r:a=(e-t)/l+4}a/=6}return{h:a,s:i,l:o}}function g(e,t,r){e=H(e,255),t=H(t,255),r=H(r,255);var a,i,n=u(e,t,r),s=f(e,t,r),o=n,l=n-s;if(i=0===n?0:l/n,n==s)a=0;else{switch(n){case e:a=(t-r)/l+(t<r?6:0);break;case t:a=(r-e)/l+2;break;case r:a=(e-t)/l+4}a/=6}return{h:a,s:i,v:o}}function p(e,t,r,a){var i=[z(l(e).toString(16)),z(l(t).toString(16)),z(l(r).toString(16))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function b(e,t,r,a){return[z(T(a)),z(l(e).toString(16)),z(l(t).toString(16)),z(l(r).toString(16))].join("")}function m(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s-=t/100,r.s=C(r.s),d(r)}function v(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s+=t/100,r.s=C(r.s),d(r)}function y(e){return d(e).desaturate(100)}function _(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l+=t/100,r.l=C(r.l),d(r)}function S(e,t){t=0===t?0:t||10;var r=d(e).toRgb();return r.r=u(0,f(255,r.r-l(-t/100*255))),r.g=u(0,f(255,r.g-l(-t/100*255))),r.b=u(0,f(255,r.b-l(-t/100*255))),d(r)}function w(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l-=t/100,r.l=C(r.l),d(r)}function x(e,t){var r=d(e).toHsl(),a=(r.h+t)%360;return r.h=a<0?360+a:a,d(r)}function A(e){var t=d(e).toHsl();return t.h=(t.h+180)%360,d(t)}function k(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+120)%360,s:t.s,l:t.l}),d({h:(r+240)%360,s:t.s,l:t.l})]}function R(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+90)%360,s:t.s,l:t.l}),d({h:(r+180)%360,s:t.s,l:t.l}),d({h:(r+270)%360,s:t.s,l:t.l})]}function E(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+72)%360,s:t.s,l:t.l}),d({h:(r+216)%360,s:t.s,l:t.l})]}function L(e,t,r){t=t||6,r=r||30;var a=d(e).toHsl(),i=360/r,n=[d(e)];for(a.h=(a.h-(i*t>>1)+720)%360;--t;)a.h=(a.h+i)%360,n.push(d(a));return n}function O(e,t){t=t||6;for(var r=d(e).toHsv(),a=r.h,i=r.s,n=r.v,s=[],o=1/t;t--;)s.push(d({h:a,s:i,v:n})),n=(n+o)%1;return s}d.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,a=this.toRgb();return e=a.r/255,t=a.g/255,r=a.b/255,.2126*(e<=.03928?e/12.92:i.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:i.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=I(e),this._roundA=l(100*this._a)/100,this},toHsv:function(){var e=g(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=g(this._r,this._g,this._b),t=l(360*e.h),r=l(100*e.s),a=l(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+a+"%)":"hsva("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var e=h(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=h(this._r,this._g,this._b),t=l(360*e.h),r=l(100*e.s),a=l(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+a+"%)":"hsla("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(e){return p(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,a,i){var n=[z(l(e).toString(16)),z(l(t).toString(16)),z(l(r).toString(16)),z(T(a))];if(i&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)&&n[3].charAt(0)==n[3].charAt(1))return n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0);return n.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:l(this._r),g:l(this._g),b:l(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+l(this._r)+", "+l(this._g)+", "+l(this._b)+")":"rgba("+l(this._r)+", "+l(this._g)+", "+l(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:l(100*H(this._r,255))+"%",g:l(100*H(this._g,255))+"%",b:l(100*H(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+l(100*H(this._r,255))+"%, "+l(100*H(this._g,255))+"%, "+l(100*H(this._b,255))+"%)":"rgba("+l(100*H(this._r,255))+"%, "+l(100*H(this._g,255))+"%, "+l(100*H(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(F[p(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+b(this._r,this._g,this._b,this._a),r=t,a=this._gradientType?"GradientType = 1, ":"";if(e){var i=d(e);r="#"+b(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,a=this._a<1&&this._a>=0;return t||!a||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return d(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(_,arguments)},brighten:function(){return this._applyModification(S,arguments)},darken:function(){return this._applyModification(w,arguments)},desaturate:function(){return this._applyModification(m,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(x,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(L,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(O,arguments)},splitcomplement:function(){return this._applyCombination(E,arguments)},triad:function(){return this._applyCombination(k,arguments)},tetrad:function(){return this._applyCombination(R,arguments)}},d.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var a in e)e.hasOwnProperty(a)&&(r[a]="a"===a?e[a]:V(e[a]));e=r}return d(e,t)},d.equals=function(e,t){return!(!e||!t)&&d(e).toRgbString()==d(t).toRgbString()},d.random=function(){return d.fromRatio({r:c(),g:c(),b:c()})},d.mix=function(e,t,r){r=0===r?0:r||50;var a=d(e).toRgb(),i=d(t).toRgb(),n=r/100;return d({r:(i.r-a.r)*n+a.r,g:(i.g-a.g)*n+a.g,b:(i.b-a.b)*n+a.b,a:(i.a-a.a)*n+a.a})},d.readability=function(e,t){var r=d(e),a=d(t);return(i.max(r.getLuminance(),a.getLuminance())+.05)/(i.min(r.getLuminance(),a.getLuminance())+.05)},d.isReadable=function(e,t,r){var a,i,n=d.readability(e,t);switch(i=!1,(a=function(e){var t,r;t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase(),r=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA");"small"!==r&&"large"!==r&&(r="small");return{level:t,size:r}}(r)).level+a.size){case"AAsmall":case"AAAlarge":i=n>=4.5;break;case"AAlarge":i=n>=3;break;case"AAAsmall":i=n>=7}return i},d.mostReadable=function(e,t,r){var a,i,n,s,o=null,l=0;i=(r=r||{}).includeFallbackColors,n=r.level,s=r.size;for(var f=0;f<t.length;f++)(a=d.readability(e,t[f]))>l&&(l=a,o=d(t[f]));return d.isReadable(e,o,{level:n,size:s})||!i?o:(r.includeFallbackColors=!1,d.mostReadable(e,["#fff","#000"],r))};var j=d.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},F=d.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(j);function I(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function H(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=f(t,u(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),i.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function C(e){return f(1,u(0,e))}function P(e){return parseInt(e,16)}function z(e){return 1==e.length?"0"+e:""+e}function V(e){return e<=1&&(e=100*e+"%"),e}function T(e){return i.round(255*parseFloat(e)).toString(16)}function M(e){return P(e)/255}var N,q,W,D=(q="[\\s|\\(]+("+(N="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",W="[\\s|\\(]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",{CSS_UNIT:new RegExp(N),rgb:new RegExp("rgb"+q),rgba:new RegExp("rgba"+W),hsl:new RegExp("hsl"+q),hsla:new RegExp("hsla"+W),hsv:new RegExp("hsv"+q),hsva:new RegExp("hsva"+W),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function G(e){return!!D.CSS_UNIT.exec(e)}e.exports?e.exports=d:void 0===(a=function(){return d}.call(t,r,t,e))||(e.exports=a)}(Math)}}]);
//# sourceMappingURL=3-5e4b86cf0f7518fc4f37.js.map