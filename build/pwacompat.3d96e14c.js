parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"g5I+":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"vYBz":[function(require,module,exports) {
var process = require("process");
var e=require("process");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){if("fetch"in window){var e=["standalone","fullscreen","minimal-ui"],n="#f8f9fa",r=24,o=128,a=48,i=32,c=navigator.vendor&&-1!==navigator.vendor.indexOf("Apple"),l=navigator.userAgent&&-1!==navigator.userAgent.indexOf("Edge"),u="undefined"!=typeof Windows;"complete"===document.readyState?f():window.addEventListener("load",f)}function f(){var f=document.head.querySelector('link[rel="pwa-setup"]'),h=f?f.href:"",g=function(e){for(var n=function(t){var n=e[t];try{return new URL("",n),{v:function(e){return new URL(e,n).toString()}}}catch(r){}},r=0;r<e.length;++r){var o=n(r);if("object"===t(o))return o.v}return function(e){return e}}([h,window.location]);Promise.resolve().then(function(){if(!h)throw'can\'t find <link rel="manifest" href=".." />\'';var e={};return"use-credentials"===h.crossOrigin&&(e.credentials="include"),window.fetch(h,e)}).then(function(e){return e.json()}).then(function(t){return function(t,f){var h=t.icons||[];h.sort(function(e,t){return parseInt(t.sizes,10)-parseInt(e.sizes,10)});var g=h.map(function(e){var t={rel:"icon",href:f(e.src),sizes:e.sizes};if(d("link",t),c)return t.rel="apple-touch-icon",d("link",t)}),b=t.display,y=-1!==e.indexOf(b);s("mobile-web-app-capable",y),function(e){if(c||u){var t=m(e);if(c)s("apple-mobile-web-app-status-bar-style",t?"black":"default");else{var n=function(){try{return Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar}catch(e){return null}}();if(null===n)return void console.debug("UWP no titleBar");n.foregroundColor=p(t?"black":"white"),n.backgroundColor=p(e)}}}(t.theme_color||"black"),l&&(s("msapplication-starturl",t.start_url||"/"),s("msapplication-TileColor",t.theme_color));document.head.querySelector('[name="theme-color"]')||s("theme-color",t.theme_color);var k=function(e){var t=(e=String(e||"")).substr(0,3);if("por"===t)return"portrait";if("lan"===t)return"landscape";return""}(t.orientation);s("x5-orientation",k),s("screen-orientation",k),"fullscreen"===b?(s("x5-fullscreen","true"),s("full-screen","yes")):y&&(s("x5-page-mode","app"),s("browsermode","application"));if(!c)return;var S=m(t.background_color||n),x=t.name||t.short_name||document.title,_=function(e){var t;return(e||[]).filter(function(e){return"itunes"===e.platform}).forEach(function(e){if(e.id)t=e.id;else{var n=e.url.match(/id(\d+)/);n&&(t=n[1])}}),t}(t.related_applications);function C(e,c,l){var u=e.width,f=e.height,d=window.devicePixelRatio,s=w({width:u*d,height:f*d});s.scale(d,d),s.fillStyle=t.background_color||n,s.fillRect(0,0,u,f),s.translate(u/2,(f-i)/2),s.font="".concat(r,"px HelveticaNeue-CondensedBold"),s.fillStyle=S?"white":"black";var p=s.measureText(x).width;if(l){var h=l.width/d,m=l.height/d;m>o&&(h/=m/o,m=o),h>=a&&m>=a&&(s.drawImage(l,h/-2,m/-2,h,m),s.translate(0,m/2+i))}s.fillText(x,p/-2,0);var v=document.createElement("link");return v.setAttribute("rel","apple-touch-startup-image"),v.setAttribute("media","(orientation: ".concat(c,")")),v.setAttribute("href",s.canvas.toDataURL()),v}_&&s("apple-itunes-app","app-id=".concat(_)),s("apple-mobile-web-app-capable",y),s("apple-mobile-web-app-title",x);var I=new Set;function A(e){var t=C(window.screen,"portrait",e),n=C({width:window.screen.height,height:window.screen.width},"landscape",e);I.forEach(function(e){return e.remove()}),document.head.appendChild(t),document.head.appendChild(n),I.add(t),I.add(n)}if(A(null),!g.length)return;var E=g[0],R=new Image;R.crossOrigin="anonymous",R.onload=function(){if(A(R),t.background_color){var e=v(R,t.background_color);null!==e&&(E.href=e,g.slice(1).forEach(function(e){var n=new Image;n.crossOrigin="anonymous",n.onload=function(){var r=v(n,t.background_color,!0);e.href=r},n.src=e.href}))}},R.src=E.href}(t,g)}).catch(function(e){return console.warn("pwacompat.js error",e)})}function d(e,t){var n=document.createElement(e);for(var r in t)n.setAttribute(r,t[r]);return document.head.appendChild(n),n}function s(e,t){t&&(!0===t&&(t="yes"),d("meta",{name:e,content:t}))}function p(e){var t=h(e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}function h(e){var t=w();return t.fillStyle=e,t.fillRect(0,0,1,1),t.getImageData(0,0,1,1).data}function m(e){var t=h(e).map(function(e){var t=e/255;return t<.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}),n=.2126*t[0]+.7152*t[1]+.0722*t[2];return Math.abs(1.05/(n+.05))>3}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=w(e);if((r.drawImage(e,0,0),!n)&&255==r.getImageData(0,0,1,1).data[3])return null;return r.globalCompositeOperation="destination-over",r.fillStyle=t,r.fillRect(0,0,e.width,e.height),r.canvas.toDataURL()}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:1,height:1},t=e.width,n=e.height,r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d")}}();
},{"process":"g5I+"}]},{},["vYBz"], null)
//# sourceMappingURL=pwacompat.3d96e14c.map