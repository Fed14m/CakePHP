(()=>{"use strict";var e,t,n={9060:(e,t,n)=>{var r=n(7294),o=n(3935),i=n(3727),a=n(5977),c=n(878),u=n(4842);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=r.lazy((function(){return Promise.all([n.e(247),n.e(836),n.e(888),n.e(711),n.e(131)]).then(n.bind(n,7296))})),b=r.lazy((function(){return Promise.all([n.e(602),n.e(749)]).then(n.bind(n,8708))})),y=r.lazy((function(){return n.e(478).then(n.bind(n,5988))})),g=r.lazy((function(){return Promise.all([n.e(247),n.e(836),n.e(888),n.e(652)]).then(n.bind(n,5732))})),v=r.lazy((function(){return n.e(345).then(n.bind(n,2168))})),w=r.lazy((function(){return n.e(107).then(n.bind(n,7218))})),E=r.lazy((function(){return n.e(299).then(n.bind(n,3964))}));const D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(k,e);var t,n,o,l,D=(o=k,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(l){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function k(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),(t=D.call(this,e)).state={winDimen:{}},t}return t=k,(n=[{key:"componentDidMount",value:function(){var e=this;this.adjustWindowDimensions(),window.addEventListener("resize",(function(){return e.adjustWindowDimensions()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",(function(){return e.adjustWindowDimensions()}))}},{key:"adjustWindowDimensions",value:function(){var e=(0,u.V4)(),t=87*e.height/100,n=t;t>950?n=e.width<600?1700:950:e.width<600&&(n=1150),console.log(e),this.setState({winDimen:{height:t,width:e.width,actualHeight:e.height,heroHeight:n}})}},{key:"scrollToContactForm",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return r.createElement(i.VK,null,r.createElement(r.Suspense,{fallback:r.createElement(c.Z,null)},r.createElement(a.rs,null,r.createElement(a.AW,{path:"/",exact:!0,render:function(t){return r.createElement(p,s({},t,{match:{winDimen:e.state.winDimen,scrollToContact:e.scrollToContactForm}}))}}),r.createElement(a.AW,{path:"/about",exact:!0,render:function(t){return r.createElement(b,s({},t,{match:{winDimen:e.state.winDimen}}))}}),r.createElement(a.AW,{path:"/learn",exact:!0,render:function(t){return r.createElement(y,s({},t,{match:{winDimen:e.state.winDimen}}))}}),r.createElement(a.AW,{path:"/resources",exact:!0,render:function(t){return r.createElement(g,s({},t,{match:{winDimen:e.state.winDimen}}))}}),r.createElement(a.AW,{path:"/contact",exact:!0,render:function(t){return r.createElement(v,s({},t,{match:{winDimen:e.state.winDimen}}))}}),r.createElement(a.AW,{path:"/blog",exact:!0,render:function(t){return r.createElement(w,s({},t,{match:{winDimen:e.state.winDimen}}))}}),r.createElement(a.AW,{path:"/blog/post",render:function(t){return r.createElement(E,s({},t,{match:{winDimen:e.state.winDimen}}))}}))))}}])&&f(t.prototype,n),k}(r.PureComponent);o.render(r.createElement(D,null),document.getElementById("root"))},878:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=function(e){var t=e.theme?e.theme:"dark";return r.createElement("div",{className:"site-loader"},"dark"==t&&r.createElement("img",{className:"bat-logo",src:n(4961),alt:"Bat Logo"}),"light"==t&&r.createElement("img",{className:"bat-logo",src:n(6218),alt:"Bat Logo"}))}},4842:(e,t,n)=>{n.d(t,{V4:()=>r,Ju:()=>o,yg:()=>i});var r=function(){var e=0,t=0;return"number"==typeof window.innerWidth?(e=window.innerWidth,t=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(e=document.body.clientWidth,t=document.body.clientHeight),{width:e,height:t}},o=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},i=function(e){var t=e.replace(/\s+/g,"");return t.length>9&&t.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)}},3912:()=>{},6218:(e,t,n)=>{e.exports=n.p+"images/bat-logo-big-white879e53c903959772cb1b.png"},4961:(e,t,n)=>{e.exports=n.p+"images/bat-logoef5397ce635182990259.png"}},r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e].call(t.exports,t,t.exports,o),t.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>""+({107:"bloglist",131:"homepage",299:"blogdetails",345:"contactspage",478:"learnpage",620:"navsection",652:"videospage",749:"aboutpage",962:"footersection",987:"contactus"}[e]||e)+{107:"5ef00154",131:"36196396",247:"65064253",299:"6e4d5e16",345:"4697633a",478:"e94abbb4",602:"807e244e",620:"c600bbf6",652:"9c2940ff",711:"b33267e3",749:"bc43c0d9",836:"94189434",888:"acc11752",962:"e3cf7c65",987:"d504a939"}[e]+".js",o.miniCssF=e=>216===e?"vendors290d7bd1.css":177===e?"homeundefine.css":{107:"5ef00154",131:"36196396",247:"65064253",299:"6e4d5e16",345:"4697633a",478:"e94abbb4",602:"807e244e",620:"c600bbf6",652:"9c2940ff",711:"b33267e3",749:"bc43c0d9",836:"94189434",888:"acc11752",962:"e3cf7c65",987:"d504a939"}[e]+".css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="bats.rocks:",o.l=(n,r,i)=>{if(e[n])e[n].push(r);else{var a,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var s=u[l];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+i){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var f=(t,r)=>{a.onerror=a.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/wp-dist/",(()=>{var e={177:0},t=[[9060,216],[3912,216]];o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,o)=>{r=e[t]=[n,o]}));n.push(r[2]=i);var a=o.p+o.u(t),c=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}}),"chunk-"+t)}};var n=()=>{};function r(){for(var n,r=0;r<t.length;r++){for(var i=t[r],a=!0,c=1;c<i.length;c++){var u=i[c];0!==e[u]&&(a=!1)}a&&(t.splice(r--,1),n=o(o.s=i[0]))}return 0===t.length&&(o.x(),o.x=()=>{}),n}o.x=()=>{o.x=()=>{},a=a.slice();for(var e=0;e<a.length;e++)i(a[e]);return(n=r)()};var i=r=>{for(var i,a,[u,l,s,f]=r,d=0,m=[];d<u.length;d++)a=u[d],o.o(e,a)&&e[a]&&m.push(e[a][0]),e[a]=0;for(i in l)o.o(l,i)&&(o.m[i]=l[i]);for(s&&s(o),c(r);m.length;)m.shift()();return f&&t.push.apply(t,f),n()},a=self.webpackChunkbats_rocks=self.webpackChunkbats_rocks||[],c=a.push.bind(a);a.push=i})(),o.x()})();