(self.webpackChunkbats_rocks=self.webpackChunkbats_rocks||[]).push([[602],{3379:e=>{var t={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};e.exports=function(e,n){return"number"!=typeof n||t[e]?n:n+"px"}},3879:(e,t,n)=>{var i=n(7236),r=n(6189),o={float:"cssFloat"},l=n(3379);function a(e,t,n){var a=o[t];if(void 0===a&&(a=function(e){var t=r(e),n=i(t);return o[t]=o[e]=o[n]=n,n}(t)),a){if(void 0===n)return e.style[a];e.style[a]=l(a,n)}}function u(e,t){for(var n in t)t.hasOwnProperty(n)&&a(e,n,t[n])}function s(){2===arguments.length?"string"==typeof arguments[1]?arguments[0].style.cssText=arguments[1]:u(arguments[0],arguments[1]):a(arguments[0],arguments[1],arguments[2])}e.exports=s,e.exports.set=s,e.exports.get=function(e,t){return Array.isArray(t)?t.reduce((function(t,n){return t[n]=a(e,n||""),t}),{}):a(e,t||"")}},75:function(e){(function(){var t,n,i,r,o,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-o)/1e6},n=process.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),l=1e9*process.uptime(),o=r-l):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)},7236:e=>{var t=null,n=["Webkit","Moz","O","ms"];e.exports=function(e){t||(t=document.createElement("div"));var i=t.style;if(e in i)return e;for(var r=e.charAt(0).toUpperCase()+e.slice(1),o=n.length;o>=0;o--){var l=n[o]+r;if(l in i)return l}return!1}},4087:(e,t,n)=>{for(var i=n(75),r="undefined"==typeof window?n.g:window,o=["moz","webkit"],l="AnimationFrame",a=r["request"+l],u=r["cancel"+l]||r["cancelRequest"+l],s=0;!a&&s<o.length;s++)a=r[o[s]+"Request"+l],u=r[o[s]+"Cancel"+l]||r[o[s]+"CancelRequest"+l];if(!a||!u){var c=0,d=0,h=[];a=function(e){if(0===h.length){var t=i(),n=Math.max(0,16.666666666666668-(t-c));c=n+t,setTimeout((function(){var e=h.slice(0);h.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return h.push({handle:++d,callback:e,cancelled:!1}),d},u=function(e){for(var t=0;t<h.length;t++)h[t].handle===e&&(h[t].cancelled=!0)}}e.exports=function(e){return a.call(r,e)},e.exports.cancel=function(){u.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=a,e.cancelAnimationFrame=u}},2287:(e,t,n)=>{e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=n(7294)},function(e,t,n){"use strict";n.r(t),n.d(t,"HORIZONTAL",(function(){return v})),n.d(t,"VERTICAL",(function(){return m}));var i=n(0),r=n.n(i);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f="previous",p="next",v="horizontal",m="vertical",g={previousButton:"previousButton",nextButton:"nextButton",buttonDisabled:"disabled",track:"track",slide:"slide",hidden:"hidden",previous:"previous",current:"current",next:"next",animateIn:"animateIn",animateOut:"animateOut"},y={up:"rotate(90 10 15)",down:"rotate(270 10 15)",left:"rotate(180 10 15)",right:"rotate(0 10 15)"};function b(e){var t=e.direction,n=void 0===t?"right":t;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"30",viewBox:"0 0 20 30"},r.a.createElement("polygon",{fill:"#000",points:"20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30",transform:y[n]}))}var w=function(e){function t(e){var n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=s(t).call(this,e),n=!i||"object"!==o(i)&&"function"!=typeof i?c(this):i,h(c(n),"setupAutoplay",(function(){n.props.autoplay&&!n.isMouseOver&&(n.stopAutoplay(),n.autoplayTimerId=setInterval(n.next,parseInt(n.props.autoplay,10)))})),h(c(n),"stopAutoplay",(function(){n.autoplayTimerId&&clearInterval(n.autoplayTimerId)})),h(c(n),"onAnimationEnd",(function(){n.setState({currentSlideIndex:n.nextSlideIndex,animating:!1,animation:void 0}),n.setupAutoplay(),"function"==typeof n.props.onSlideChange&&n.props.onSlideChange({slideIndex:n.nextSlideIndex})})),h(c(n),"isDisabled",(function(){return n.slideCount<2||n.state.animating||n.props.disabled})),h(c(n),"isInfinite",(function(){return n.slideCount>2&&!1!==n.props.infinite})),h(c(n),"canGoPrevious",(function(){return n.isInfinite()||n.state.currentSlideIndex>0})),h(c(n),"canGoNext",(function(){return n.isInfinite()||n.state.currentSlideIndex<n.slideCount-1})),h(c(n),"goTo",(function(e,t){if(!n.isDisabled()){n.nextSlideIndex=e,n.setState({animating:!0,animation:t});var i=n.props.duration||2e3;n.animationTimerId=setTimeout(n.onAnimationEnd,i)}})),h(c(n),"previous",(function(){if(n.canGoPrevious()){var e=n.state.currentSlideIndex-1,t=e>=0?e:n.slideCount-1;n.goTo(t,f)}})),h(c(n),"next",(function(){if(n.canGoNext()){var e=(n.state.currentSlideIndex+1)%n.slideCount;n.goTo(e,p)}})),h(c(n),"getSlideClass",(function(e){var t=n.state,i=t.currentSlideIndex,r=t.animation,o=n.getClassNames(),l=n.slideCount-1;return e===i?r?"".concat(o.animateOut," ").concat(o[r]):o.current:2===n.slideCount?r?"".concat(o.animateIn," ").concat(o[r]):e<i?o.previous:o.next:e===i-1||0===i&&e===l?r===f?"".concat(o.animateIn," ").concat(o.previous):r===p?o.hidden:o.previous:e===i+1||0===e&&i===l?r===p?"".concat(o.animateIn," ").concat(o.next):r===f?o.hidden:o.next:o.hidden})),h(c(n),"isSwiping",!1),h(c(n),"sliderRef",void 0),h(c(n),"pageStartPosition",void 0),h(c(n),"currentElement",void 0),h(c(n),"currentElementStartPosition",void 0),h(c(n),"currentElementPosition",void 0),h(c(n),"previousElement",void 0),h(c(n),"previousElementStartPosition",void 0),h(c(n),"previousElementPosition",void 0),h(c(n),"nextElement",void 0),h(c(n),"nextElementStartPosition",void 0),h(c(n),"nextElementPosition",void 0),h(c(n),"handleTouchStart",(function(e){if(!n.isDisabled()){n.stopAutoplay();var t=n.getClassNames(),i=t.current,r=t.previous,o=t.next,l=e.touches[0];n.isSwiping=!0,n.pageStartPosition=l[n.swipeEventProperty],n.currentElement=n.sliderRef.getElementsByClassName(i)[0],n.previousElement=n.sliderRef.getElementsByClassName(r)[0],n.nextElement=n.sliderRef.getElementsByClassName(o)[0];var a=n.currentElement.getBoundingClientRect()[n.swipeProperty];n.currentElementStartPosition=0,n.currentElementPosition=0,n.currentElement.style.transition="none",n.previousElement&&(n.previousElement.style.transition="none",n.previousElement.style.visibility="visible",n.previousElementStartPosition=n.previousElement.getBoundingClientRect()[n.swipeProperty]-a),n.nextElement&&(n.nextElement.style.visibility="visible",n.nextElement.style.transition="none",n.nextElementStartPosition=n.nextElement.getBoundingClientRect()[n.swipeProperty]-a)}})),h(c(n),"animating",!1),h(c(n),"handleTouchMove",(function(e){e.preventDefault(),n.animating=n.animating||requestAnimationFrame((function(){if(n.isSwiping){var t=e.touches[0][n.swipeEventProperty]-n.pageStartPosition;n.currentElementPosition=n.currentElementStartPosition+t,n.currentElement.style[n.swipeProperty]="".concat(n.currentElementPosition,"px"),n.previousElement&&(n.previousElementPosition=n.previousElementStartPosition+t,n.previousElement.style[n.swipeProperty]="".concat(n.previousElementPosition,"px")),n.nextElement&&(n.nextElementPosition=n.nextElementStartPosition+t,n.nextElement.style[n.swipeProperty]="".concat(n.nextElementPosition,"px")),n.animating=!1}else n.animating=!1}))})),h(c(n),"handleTouchEnd",(function(){n.animating=!1,n.isSwiping=!1,n.currentElement.style.removeProperty(n.swipeProperty),n.currentElement.style.removeProperty("transition"),n.previousElement&&(n.previousElement.style.removeProperty("visibility"),n.previousElement.style.removeProperty("transition"),n.previousElement.style.removeProperty(n.swipeProperty)),n.nextElement&&(n.nextElement.style.removeProperty("visibility"),n.nextElement.style.removeProperty("transition"),n.nextElement.style.removeProperty(n.swipeProperty));var e=n.currentElementStartPosition-n.currentElementPosition,t=n.props.minSwipeOffset||15;Math.abs(e)>t?e<0?n.previous():n.next():n.setupAutoplay()})),h(c(n),"getClassNames",(function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g,{},n.props.classNames)})),h(c(n),"initTouchEvents",(function(e){!n.isDisabled()&&e&&(n.sliderRef=e,n.sliderRef.addEventListener("touchstart",n.handleTouchStart),n.sliderRef.addEventListener("touchmove",n.handleTouchMove,{passive:!1}),n.sliderRef.addEventListener("touchend",n.handleTouchEnd))})),h(c(n),"handleMouseOver",(function(){n.isMouseOver=!0,n.stopAutoplay()})),h(c(n),"handleMouseOut",(function(){n.isMouseOver=!1,n.setupAutoplay()}));var r=n.props,l=r.slideIndex,u=void 0===l?0:l,d=r.direction,m=void 0===d?v:d;return n.state={currentSlideIndex:u,animating:!1},n.direction=m,n.swipeProperty=m===v?"left":"top",n.swipeEventProperty=m===v?"clientX":"clientY",n}var n,i,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,m=[{key:"getDerivedStateFromProps",value:function(e,t){var n=r.a.Children.count(e.children);return t.currentSlideIndex>=n?{currentSlideIndex:0}:null}}],(i=[{key:"componentDidMount",value:function(){this.setupAutoplay()}},{key:"componentWillUnmount",value:function(){this.stopAutoplay(),this.animationTimerId&&clearTimeout(this.animationTimerId)}},{key:"render",value:function(){var e=this;this.slideCount=r.a.Children.count(this.props.children);var t=this.props,n=t.children,i=t.className,o=void 0===i?"slider":i,a=t.previousButton,u=void 0===a?r.a.createElement(b,{direction:this.direction===v?"left":"down"}):a,s=t.nextButton,c=void 0===s?r.a.createElement(b,{direction:this.direction===v?"right":"up"}):s,d=t.touchDisabled,h=t.autoplay,f=this.getClassNames(),p=this.isDisabled();return r.a.createElement("div",l({className:f.slider||o},!d&&{ref:this.initTouchEvents},h&&{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),r.a.createElement("a",{onClick:this.previous,className:"".concat(f.previousButton).concat(p||!this.canGoPrevious()?" ".concat(f.buttonDisabled):"")},u),r.a.createElement("a",{onClick:this.next,className:"".concat(f.nextButton).concat(p||!this.canGoNext()?" ".concat(f.buttonDisabled):"")},c),r.a.createElement("div",{className:f.track},r.a.Children.map(n,(function(t,n){return r.a.cloneElement(t,{key:n,className:[f.slide,e.getSlideClass(n),t.props.className].filter((function(e){return e})).join(" ")})}))))}}])&&u(n.prototype,i),m&&u(n,m),t}(r.a.PureComponent);t.default=w}])},8682:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.renderViewDefault=function(e){return o.default.createElement("div",e)},t.renderTrackHorizontalDefault=function(e){var t=e.style,n=l(e,["style"]),r=i({},t,{right:2,bottom:2,left:2,borderRadius:3});return o.default.createElement("div",i({style:r},n))},t.renderTrackVerticalDefault=function(e){var t=e.style,n=l(e,["style"]),r=i({},t,{right:2,bottom:2,top:2,borderRadius:3});return o.default.createElement("div",i({style:r},n))},t.renderThumbHorizontalDefault=function(e){var t=e.style,n=l(e,["style"]),r=i({},t,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return o.default.createElement("div",i({style:r},n))},t.renderThumbVerticalDefault=function(e){var t=e.style,n=l(e,["style"]),r=i({},t,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return o.default.createElement("div",i({style:r},n))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r};function l(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}},4608:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(4087),l=g(o),a=g(n(3879)),u=n(7294),s=g(n(5697)),c=g(n(5205)),d=g(n(3305)),h=g(n(8669)),f=g(n(4749)),p=g(n(6839)),v=n(7679),m=n(8682);function g(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var w=function(e){function t(e){var n;y(this,t);for(var i=arguments.length,r=Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];var l=b(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,e].concat(r)));return l.getScrollLeft=l.getScrollLeft.bind(l),l.getScrollTop=l.getScrollTop.bind(l),l.getScrollWidth=l.getScrollWidth.bind(l),l.getScrollHeight=l.getScrollHeight.bind(l),l.getClientWidth=l.getClientWidth.bind(l),l.getClientHeight=l.getClientHeight.bind(l),l.getValues=l.getValues.bind(l),l.getThumbHorizontalWidth=l.getThumbHorizontalWidth.bind(l),l.getThumbVerticalHeight=l.getThumbVerticalHeight.bind(l),l.getScrollLeftForOffset=l.getScrollLeftForOffset.bind(l),l.getScrollTopForOffset=l.getScrollTopForOffset.bind(l),l.scrollLeft=l.scrollLeft.bind(l),l.scrollTop=l.scrollTop.bind(l),l.scrollToLeft=l.scrollToLeft.bind(l),l.scrollToTop=l.scrollToTop.bind(l),l.scrollToRight=l.scrollToRight.bind(l),l.scrollToBottom=l.scrollToBottom.bind(l),l.handleTrackMouseEnter=l.handleTrackMouseEnter.bind(l),l.handleTrackMouseLeave=l.handleTrackMouseLeave.bind(l),l.handleHorizontalTrackMouseDown=l.handleHorizontalTrackMouseDown.bind(l),l.handleVerticalTrackMouseDown=l.handleVerticalTrackMouseDown.bind(l),l.handleHorizontalThumbMouseDown=l.handleHorizontalThumbMouseDown.bind(l),l.handleVerticalThumbMouseDown=l.handleVerticalThumbMouseDown.bind(l),l.handleWindowResize=l.handleWindowResize.bind(l),l.handleScroll=l.handleScroll.bind(l),l.handleDrag=l.handleDrag.bind(l),l.handleDragEnd=l.handleDragEnd.bind(l),l.state={didMountUniversal:!1},l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.addListeners(),this.update(),this.componentDidMountUniversal()}},{key:"componentDidMountUniversal",value:function(){this.props.universal&&this.setState({didMountUniversal:!0})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.removeListeners(),(0,o.cancel)(this.requestFrame),clearTimeout(this.hideTracksTimeout),clearInterval(this.detectScrollingInterval)}},{key:"getScrollLeft",value:function(){return this.view?this.view.scrollLeft:0}},{key:"getScrollTop",value:function(){return this.view?this.view.scrollTop:0}},{key:"getScrollWidth",value:function(){return this.view?this.view.scrollWidth:0}},{key:"getScrollHeight",value:function(){return this.view?this.view.scrollHeight:0}},{key:"getClientWidth",value:function(){return this.view?this.view.clientWidth:0}},{key:"getClientHeight",value:function(){return this.view?this.view.clientHeight:0}},{key:"getValues",value:function(){var e=this.view||{},t=e.scrollLeft,n=void 0===t?0:t,i=e.scrollTop,r=void 0===i?0:i,o=e.scrollWidth,l=void 0===o?0:o,a=e.scrollHeight,u=void 0===a?0:a,s=e.clientWidth,c=void 0===s?0:s,d=e.clientHeight,h=void 0===d?0:d;return{left:n/(l-c)||0,top:r/(u-h)||0,scrollLeft:n,scrollTop:r,scrollWidth:l,scrollHeight:u,clientWidth:c,clientHeight:h}}},{key:"getThumbHorizontalWidth",value:function(){var e=this.props,t=e.thumbSize,n=e.thumbMinSize,i=this.view,r=i.scrollWidth,o=i.clientWidth,l=(0,f.default)(this.trackHorizontal),a=Math.ceil(o/r*l);return l===a?0:t||Math.max(a,n)}},{key:"getThumbVerticalHeight",value:function(){var e=this.props,t=e.thumbSize,n=e.thumbMinSize,i=this.view,r=i.scrollHeight,o=i.clientHeight,l=(0,p.default)(this.trackVertical),a=Math.ceil(o/r*l);return l===a?0:t||Math.max(a,n)}},{key:"getScrollLeftForOffset",value:function(e){var t=this.view,n=t.scrollWidth,i=t.clientWidth;return e/((0,f.default)(this.trackHorizontal)-this.getThumbHorizontalWidth())*(n-i)}},{key:"getScrollTopForOffset",value:function(e){var t=this.view,n=t.scrollHeight,i=t.clientHeight;return e/((0,p.default)(this.trackVertical)-this.getThumbVerticalHeight())*(n-i)}},{key:"scrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.view&&(this.view.scrollLeft=e)}},{key:"scrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.view&&(this.view.scrollTop=e)}},{key:"scrollToLeft",value:function(){this.view&&(this.view.scrollLeft=0)}},{key:"scrollToTop",value:function(){this.view&&(this.view.scrollTop=0)}},{key:"scrollToRight",value:function(){this.view&&(this.view.scrollLeft=this.view.scrollWidth)}},{key:"scrollToBottom",value:function(){this.view&&(this.view.scrollTop=this.view.scrollHeight)}},{key:"addListeners",value:function(){if("undefined"!=typeof document&&this.view){var e=this.view,t=this.trackHorizontal,n=this.trackVertical,i=this.thumbHorizontal,r=this.thumbVertical;e.addEventListener("scroll",this.handleScroll),(0,d.default)()&&(t.addEventListener("mouseenter",this.handleTrackMouseEnter),t.addEventListener("mouseleave",this.handleTrackMouseLeave),t.addEventListener("mousedown",this.handleHorizontalTrackMouseDown),n.addEventListener("mouseenter",this.handleTrackMouseEnter),n.addEventListener("mouseleave",this.handleTrackMouseLeave),n.addEventListener("mousedown",this.handleVerticalTrackMouseDown),i.addEventListener("mousedown",this.handleHorizontalThumbMouseDown),r.addEventListener("mousedown",this.handleVerticalThumbMouseDown),window.addEventListener("resize",this.handleWindowResize))}}},{key:"removeListeners",value:function(){if("undefined"!=typeof document&&this.view){var e=this.view,t=this.trackHorizontal,n=this.trackVertical,i=this.thumbHorizontal,r=this.thumbVertical;e.removeEventListener("scroll",this.handleScroll),(0,d.default)()&&(t.removeEventListener("mouseenter",this.handleTrackMouseEnter),t.removeEventListener("mouseleave",this.handleTrackMouseLeave),t.removeEventListener("mousedown",this.handleHorizontalTrackMouseDown),n.removeEventListener("mouseenter",this.handleTrackMouseEnter),n.removeEventListener("mouseleave",this.handleTrackMouseLeave),n.removeEventListener("mousedown",this.handleVerticalTrackMouseDown),i.removeEventListener("mousedown",this.handleHorizontalThumbMouseDown),r.removeEventListener("mousedown",this.handleVerticalThumbMouseDown),window.removeEventListener("resize",this.handleWindowResize),this.teardownDragging())}}},{key:"handleScroll",value:function(e){var t=this,n=this.props,i=n.onScroll,r=n.onScrollFrame;i&&i(e),this.update((function(e){var n=e.scrollLeft,i=e.scrollTop;t.viewScrollLeft=n,t.viewScrollTop=i,r&&r(e)})),this.detectScrolling()}},{key:"handleScrollStart",value:function(){var e=this.props.onScrollStart;e&&e(),this.handleScrollStartAutoHide()}},{key:"handleScrollStartAutoHide",value:function(){this.props.autoHide&&this.showTracks()}},{key:"handleScrollStop",value:function(){var e=this.props.onScrollStop;e&&e(),this.handleScrollStopAutoHide()}},{key:"handleScrollStopAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"handleWindowResize",value:function(){this.update()}},{key:"handleHorizontalTrackMouseDown",value:function(e){e.preventDefault();var t=e.target,n=e.clientX,i=t.getBoundingClientRect().left,r=this.getThumbHorizontalWidth(),o=Math.abs(i-n)-r/2;this.view.scrollLeft=this.getScrollLeftForOffset(o)}},{key:"handleVerticalTrackMouseDown",value:function(e){e.preventDefault();var t=e.target,n=e.clientY,i=t.getBoundingClientRect().top,r=this.getThumbVerticalHeight(),o=Math.abs(i-n)-r/2;this.view.scrollTop=this.getScrollTopForOffset(o)}},{key:"handleHorizontalThumbMouseDown",value:function(e){e.preventDefault(),this.handleDragStart(e);var t=e.target,n=e.clientX,i=t.offsetWidth,r=t.getBoundingClientRect().left;this.prevPageX=i-(n-r)}},{key:"handleVerticalThumbMouseDown",value:function(e){e.preventDefault(),this.handleDragStart(e);var t=e.target,n=e.clientY,i=t.offsetHeight,r=t.getBoundingClientRect().top;this.prevPageY=i-(n-r)}},{key:"setupDragging",value:function(){(0,a.default)(document.body,v.disableSelectStyle),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.onselectstart=h.default}},{key:"teardownDragging",value:function(){(0,a.default)(document.body,v.disableSelectStyleReset),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.onselectstart=void 0}},{key:"handleDragStart",value:function(e){this.dragging=!0,e.stopImmediatePropagation(),this.setupDragging()}},{key:"handleDrag",value:function(e){if(this.prevPageX){var t=e.clientX,n=-this.trackHorizontal.getBoundingClientRect().left+t-(this.getThumbHorizontalWidth()-this.prevPageX);this.view.scrollLeft=this.getScrollLeftForOffset(n)}if(this.prevPageY){var i=e.clientY,r=-this.trackVertical.getBoundingClientRect().top+i-(this.getThumbVerticalHeight()-this.prevPageY);this.view.scrollTop=this.getScrollTopForOffset(r)}return!1}},{key:"handleDragEnd",value:function(){this.dragging=!1,this.prevPageX=this.prevPageY=0,this.teardownDragging(),this.handleDragEndAutoHide()}},{key:"handleDragEndAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"handleTrackMouseEnter",value:function(){this.trackMouseOver=!0,this.handleTrackMouseEnterAutoHide()}},{key:"handleTrackMouseEnterAutoHide",value:function(){this.props.autoHide&&this.showTracks()}},{key:"handleTrackMouseLeave",value:function(){this.trackMouseOver=!1,this.handleTrackMouseLeaveAutoHide()}},{key:"handleTrackMouseLeaveAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"showTracks",value:function(){clearTimeout(this.hideTracksTimeout),(0,a.default)(this.trackHorizontal,{opacity:1}),(0,a.default)(this.trackVertical,{opacity:1})}},{key:"hideTracks",value:function(){var e=this;if(!this.dragging&&!this.scrolling&&!this.trackMouseOver){var t=this.props.autoHideTimeout;clearTimeout(this.hideTracksTimeout),this.hideTracksTimeout=setTimeout((function(){(0,a.default)(e.trackHorizontal,{opacity:0}),(0,a.default)(e.trackVertical,{opacity:0})}),t)}}},{key:"detectScrolling",value:function(){var e=this;this.scrolling||(this.scrolling=!0,this.handleScrollStart(),this.detectScrollingInterval=setInterval((function(){e.lastViewScrollLeft===e.viewScrollLeft&&e.lastViewScrollTop===e.viewScrollTop&&(clearInterval(e.detectScrollingInterval),e.scrolling=!1,e.handleScrollStop()),e.lastViewScrollLeft=e.viewScrollLeft,e.lastViewScrollTop=e.viewScrollTop}),100))}},{key:"raf",value:function(e){var t=this;this.requestFrame&&l.default.cancel(this.requestFrame),this.requestFrame=(0,l.default)((function(){t.requestFrame=void 0,e()}))}},{key:"update",value:function(e){var t=this;this.raf((function(){return t._update(e)}))}},{key:"_update",value:function(e){var t=this.props,n=t.onUpdate,i=t.hideTracksWhenNotNeeded,r=this.getValues();if((0,d.default)()){var o=r.scrollLeft,l=r.clientWidth,u=r.scrollWidth,s=(0,f.default)(this.trackHorizontal),c=this.getThumbHorizontalWidth(),h={width:c,transform:"translateX("+o/(u-l)*(s-c)+"px)"},v=r.scrollTop,m=r.clientHeight,g=r.scrollHeight,y=(0,p.default)(this.trackVertical),b=this.getThumbVerticalHeight(),w={height:b,transform:"translateY("+v/(g-m)*(y-b)+"px)"};if(i){var S={visibility:u>l?"visible":"hidden"},T={visibility:g>m?"visible":"hidden"};(0,a.default)(this.trackHorizontal,S),(0,a.default)(this.trackVertical,T)}(0,a.default)(this.thumbHorizontal,h),(0,a.default)(this.thumbVertical,w)}n&&n(r),"function"==typeof e&&e(r)}},{key:"render",value:function(){var e=this,t=(0,d.default)(),n=this.props,r=(n.onScroll,n.onScrollFrame,n.onScrollStart,n.onScrollStop,n.onUpdate,n.renderView),o=n.renderTrackHorizontal,l=n.renderTrackVertical,a=n.renderThumbHorizontal,s=n.renderThumbVertical,h=n.tagName,f=(n.hideTracksWhenNotNeeded,n.autoHide),p=(n.autoHideTimeout,n.autoHideDuration),m=(n.thumbSize,n.thumbMinSize,n.universal),g=n.autoHeight,y=n.autoHeightMin,b=n.autoHeightMax,w=n.style,S=n.children,T=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(n,["onScroll","onScrollFrame","onScrollStart","onScrollStop","onUpdate","renderView","renderTrackHorizontal","renderTrackVertical","renderThumbHorizontal","renderThumbVertical","tagName","hideTracksWhenNotNeeded","autoHide","autoHideTimeout","autoHideDuration","thumbSize","thumbMinSize","universal","autoHeight","autoHeightMin","autoHeightMax","style","children"]),k=this.state.didMountUniversal,E=i({},v.containerStyleDefault,g&&i({},v.containerStyleAutoHeight,{minHeight:y,maxHeight:b}),w),H=i({},v.viewStyleDefault,{marginRight:t?-t:0,marginBottom:t?-t:0},g&&i({},v.viewStyleAutoHeight,{minHeight:(0,c.default)(y)?"calc("+y+" + "+t+"px)":y+t,maxHeight:(0,c.default)(b)?"calc("+b+" + "+t+"px)":b+t}),g&&m&&!k&&{minHeight:y,maxHeight:b},m&&!k&&v.viewStyleUniversalInitial),x={transition:"opacity "+p+"ms",opacity:0},O=i({},v.trackHorizontalStyleDefault,f&&x,(!t||m&&!k)&&{display:"none"}),M=i({},v.trackVerticalStyleDefault,f&&x,(!t||m&&!k)&&{display:"none"});return(0,u.createElement)(h,i({},T,{style:E,ref:function(t){e.container=t}}),[(0,u.cloneElement)(r({style:H}),{key:"view",ref:function(t){e.view=t}},S),(0,u.cloneElement)(o({style:O}),{key:"trackHorizontal",ref:function(t){e.trackHorizontal=t}},(0,u.cloneElement)(a({style:v.thumbHorizontalStyleDefault}),{ref:function(t){e.thumbHorizontal=t}})),(0,u.cloneElement)(l({style:M}),{key:"trackVertical",ref:function(t){e.trackVertical=t}},(0,u.cloneElement)(s({style:v.thumbVerticalStyleDefault}),{ref:function(t){e.thumbVertical=t}}))])}}]),t}(u.Component);t.default=w,w.propTypes={onScroll:s.default.func,onScrollFrame:s.default.func,onScrollStart:s.default.func,onScrollStop:s.default.func,onUpdate:s.default.func,renderView:s.default.func,renderTrackHorizontal:s.default.func,renderTrackVertical:s.default.func,renderThumbHorizontal:s.default.func,renderThumbVertical:s.default.func,tagName:s.default.string,thumbSize:s.default.number,thumbMinSize:s.default.number,hideTracksWhenNotNeeded:s.default.bool,autoHide:s.default.bool,autoHideTimeout:s.default.number,autoHideDuration:s.default.number,autoHeight:s.default.bool,autoHeightMin:s.default.oneOfType([s.default.number,s.default.string]),autoHeightMax:s.default.oneOfType([s.default.number,s.default.string]),universal:s.default.bool,style:s.default.object,children:s.default.node},w.defaultProps={renderView:m.renderViewDefault,renderTrackHorizontal:m.renderTrackHorizontalDefault,renderTrackVertical:m.renderTrackVerticalDefault,renderThumbHorizontal:m.renderThumbHorizontalDefault,renderThumbVertical:m.renderThumbVerticalDefault,tagName:"div",thumbMinSize:30,hideTracksWhenNotNeeded:!1,autoHide:!1,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!1,autoHeightMin:0,autoHeightMax:200,universal:!1}},7679:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.containerStyleDefault={position:"relative",overflow:"hidden",width:"100%",height:"100%"},t.containerStyleAutoHeight={height:"auto"},t.viewStyleDefault={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"},t.viewStyleAutoHeight={position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0},t.viewStyleUniversalInitial={overflow:"hidden",marginRight:0,marginBottom:0},t.trackHorizontalStyleDefault={position:"absolute",height:6},t.trackVerticalStyleDefault={position:"absolute",width:6},t.thumbHorizontalStyleDefault={position:"relative",display:"block",height:"100%"},t.thumbVerticalStyleDefault={position:"relative",display:"block",width:"100%"},t.disableSelectStyle={userSelect:"none"},t.disableSelectStyleReset={userSelect:""}},1298:(e,t,n)=>{"use strict";t.$B=void 0;var i,r=(i=n(4608))&&i.__esModule?i:{default:i};r.default,t.$B=r.default},6839:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.clientHeight,n=getComputedStyle(e),i=n.paddingTop,r=n.paddingBottom;return t-parseFloat(i)-parseFloat(r)}},4749:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.clientWidth,n=getComputedStyle(e),i=n.paddingLeft,r=n.paddingRight;return t-parseFloat(i)-parseFloat(r)}},3305:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!1!==o)return o;if("undefined"!=typeof document){var e=document.createElement("div");(0,r.default)(e,{width:100,height:100,position:"absolute",top:-9999,overflow:"scroll",MsOverflowStyle:"scrollbar"}),document.body.appendChild(e),o=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}else o=0;return o||0};var i,r=(i=n(3879))&&i.__esModule?i:{default:i},o=!1},5205:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"string"==typeof e}},8669:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return!1}},6189:(e,t,n)=>{var i=n(7966);e.exports=function(e){return i(e).replace(/\s(\w)/g,(function(e,t){return t.toUpperCase()}))}},4551:e=>{e.exports=function(e){return t.test(e)?e.toLowerCase():n.test(e)?(function(e){return e.replace(r,(function(e,t){return t?" "+t:""}))}(e)||e).toLowerCase():i.test(e)?function(e){return e.replace(o,(function(e,t,n){return t+" "+n.toLowerCase().split("").join(" ")}))}(e).toLowerCase():e.toLowerCase()};var t=/\s/,n=/(_|-|\.|:)/,i=/([a-z][A-Z]|[A-Z][a-z])/,r=/[\W_]+(.|$)/g,o=/(.)([A-Z]+)/g},7966:(e,t,n)=>{var i=n(4551);e.exports=function(e){return i(e).replace(/[\W_]+(.|$)/g,(function(e,t){return t?" "+t:""})).trim()}}}]);