(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{223:function(t,e,i){"use strict";i(15);var r="bfred-it:object-fit-images",n=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,s="undefined"==typeof Image?{style:{"object-position":1}}:new Image,c="object-fit"in s.style,o="object-position"in s.style,a="background-size"in s.style,l="string"==typeof s.currentSrc,u=s.getAttribute,g=s.setAttribute,f=!1;function d(t,e,i){var r="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";u.call(t,"src")!==r&&g.call(t,"src",r)}function p(t,e){t.naturalWidth?e(t):setTimeout(p,100,t,e)}function m(t){var e=function(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=n.exec(i));)r[e[1]]=e[2];return r}(t),i=t[r];if(e["object-fit"]=e["object-fit"]||"fill",!i.img){if("fill"===e["object-fit"])return;if(!i.skipTest&&c&&!e["object-position"])return}if(!i.img){i.img=new Image(t.width,t.height),i.img.srcset=u.call(t,"data-ofi-srcset")||t.srcset,i.img.src=u.call(t,"data-ofi-src")||t.src,g.call(t,"data-ofi-src",t.src),t.srcset&&g.call(t,"data-ofi-srcset",t.srcset),d(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[r].img[e||"src"]},set:function(e,i){return t[r].img[i||"src"]=e,g.call(t,"data-ofi-"+i,e),m(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(s){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!l&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(i.img),t.style.backgroundImage='url("'+(i.img.currentSrc||i.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?p(i.img,function(){i.img.naturalWidth>t.width||i.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),p(i.img,function(e){d(t,e.naturalWidth,e.naturalHeight)})}function b(t,e){var i=!f&&!t;if(e=e||{},t=t||"img",o&&!e.skipTest||!a)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var n=0;n<t.length;n++)t[n][r]=t[n][r]||{skipTest:e.skipTest},m(t[n]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&b(t.target,{skipTest:e.skipTest})},!0),f=!0,t="img"),e.watchMQ&&window.addEventListener("resize",b.bind(null,t,{skipTest:e.skipTest}))}b.supportsObjectFit=c,b.supportsObjectPosition=o,function(){function t(t,e){return t[r]&&t[r].img&&("src"===e||"srcset"===e)?t[r].img:t}o||(HTMLImageElement.prototype.getAttribute=function(e){return u.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return g.call(t(this,e),e,String(i))})}(),t.exports=b}}]);
//# sourceMappingURL=10-cabad9b8082af63aa1a3.js.map