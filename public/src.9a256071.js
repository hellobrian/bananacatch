parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Z0zd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=document.querySelector.bind(document),o=document.querySelectorAll.bind(document);Node.prototype.on=window.on=function(e,o){this.addEventListener(e,o)},NodeList.prototype.__proto__=Array.prototype,NodeList.prototype.on=NodeList.prototype.addEventListener=function(e,o){this.forEach(function(t){t.on(e,o)})},exports.$=e,exports.$$=o;
},{}],"lWcS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:40;return'\n    <button \n      class="banana animation" \n      type="button"\n      style="font-size: '+n+"px; width: "+n+"px; height: "+n+'px"\n    >\n      🍌\n    </button>\n  '};exports.banana=n;
},{}],"atK+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.destroyBananas=exports.resetPlayState=exports.togglePlayState=exports.insertBanana=exports.getAnimationPlayState=exports.randomSize=exports.sizes=exports.randomNumber=void 0;var t=require("./bling"),e=require("./components"),n=exports.randomNumber=function(t,e){return Math.floor(Math.random()*(e-t)+t)},a=exports.sizes=[30,40,50,60,70,75,80,85,90,95],r=exports.randomSize=function(){return a[n(0,9)]},o=exports.getAnimationPlayState=function(t){return getComputedStyle(t).getPropertyValue("--animation-play-state").trim()},s=exports.insertBanana=function(){var a=n(1,5),o=r();(0,t.$)("#column-"+a).insertAdjacentHTML("afterbegin",(0,e.banana)(o))},i=exports.togglePlayState=function(t,e){e.style.setProperty("--animation-play-state",t.isPlaying?"running":"paused")},p=exports.resetPlayState=function(t,e){e.style.setProperty("--animation-play-state",t.isPlaying?"running":"paused")},u=exports.destroyBananas=function(){(0,t.$$)(".column").forEach(function(t){t.innerHTML=""})};
},{"./bling":"Z0zd","./components":"lWcS"}],"Focm":[function(require,module,exports) {
"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e=require("./bling"),n=require("./methods");function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var a=void 0,i={isPlaying:!1,intervalSpeed:900};(0,e.$)(".togglePlay").on("click",function(){i=t({},i,{isPlaying:!i.isPlaying}),(0,n.togglePlayState)(i,document.documentElement),"running"===(0,n.getAnimationPlayState)(document.documentElement)?a=setInterval(n.insertBanana,i.intervalSpeed):clearInterval(a)}),(0,e.$)(".reset").on("click",function(){i=t({},i,{isPlaying:!1}),(0,n.resetPlayState)(i,document.documentElement),clearInterval(a),(0,n.destroyBananas)()});var l=new MutationObserver(function(t){var n=!0,a=!1,l=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value;if("childList"==c.type){var u=[].concat(r(c.addedNodes)).filter(function(t){return"🍌"===t.innerText});if(u&&u.length>0){var d=u[0];d.classList.remove("animation"),d.classList.add("animation"),d.addEventListener("animationend",function(t){t.target.parentNode.removeChild(t.target)})}}"attributes"==c.type&&"style"==c.attributeName&&((0,e.$)(".togglePlay").innerHTML=i.isPlaying?"Pause":"Start")}}catch(t){a=!0,l=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw l}}});l.observe((0,e.$)("#html"),{attributes:!0,childList:!0,subtree:!0});
},{"./bling":"Z0zd","./methods":"atK+"}]},{},["Focm"], null)
//# sourceMappingURL=/src.9a256071.map