(self.webpackChunkbats_rocks=self.webpackChunkbats_rocks||[]).push([[107],{7218:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>y});var o=i(7294),r=i(7786),a=[{image:"img-1.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. aut odit aut fugit, sed quia consequuntur ",date:"01 Nov 2020",morelink:""},{image:"img-2.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"img-3.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"img-4.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"img-5.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. aut odit aut fugit, sed quia consequuntur ",date:"01 Nov 2020",morelink:""},{image:"img-6.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"img-7.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"img-8.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"img-9.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""},{image:"img-10.jpg",heading:"Vivamus ultricies mi a urna sodales lobortis",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque.",date:"01 Nov 2020",morelink:""}];function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(d,e);var t,r,n,m,p=(n=d,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(m){var i=l(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return u(this,e)});function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=p.call(this,e)).playerDiv=o.createRef(),t.vimeoPlayer=null,t.state={videoOpen:!1,defaultVidId:492482567},t}return t=d,(r=[{key:"componentDidMount",value:function(){}},{key:"fireVideo",value:function(e){this.setState({videoOpen:!0,defaultVidId:videoData[e].id})}},{key:"onCloseVideo",value:function(){this.setState({videoOpen:!1})}},{key:"render",value:function(){return o.createElement("div",{ref:this.props.containerRef,className:"container-fluid blog-list-container-bg",style:{minHeight:this.props.visibleHeight.actualHeight}},o.createElement("div",{className:"section-wrapper blog-list-container",style:{minHeight:this.props.visibleHeight.actualHeight}},o.createElement("div",{className:"row no-gutters"},o.createElement("div",{className:"col-12 text-center"},o.createElement("h1",null,"BATS Blog"))),o.createElement("div",{className:"row no-gutters"},a.map((function(e,t){return o.createElement("div",{key:t,className:"col-12 col-md-6 col-lg-4"},o.createElement("div",{className:"blog-item-wrapper"},""!==e.image&&o.createElement("img",{className:"blog-img",src:i(6454)("./"+e.image),alt:""}),o.createElement("div",{className:"text-section"},o.createElement("h3",null,e.heading),o.createElement("p",null,e.desc),o.createElement("div",{className:"footer"},o.createElement("img",{src:i(6924),alt:"Blog date"}),o.createElement("div",{className:"date"},e.date),o.createElement("div",{className:"read-more"},o.createElement("a",{href:"/blog/post/a-post-with-pretty-url"},"Read more ",o.createElement("img",{src:i(4643),alt:"Read more"})))))))}))),o.createElement("div",{className:"row"},o.createElement("div",{className:"col-12 text-center"},o.createElement("button",{className:"load-more"},"Load More")))))}}])&&s(t.prototype,r),d}(o.PureComponent);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=o.lazy((function(){return Promise.all([i.e(836),i.e(620)]).then(i.bind(i,4400))})),b=o.lazy((function(){return i.e(962).then(i.bind(i,8766))}));const y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,i,a,n,s=(a=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(a);if(n){var i=h(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return g(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=s.call(this,e)).homeRoot=o.createRef(),t.footerContainer=o.createRef(),t.allSections=["footer-container-bg"],t.state={makeSticky:!0,upScrollDetected:!0,lastScrollPos:1,navclass:"light",thresholdUp:40,sectionIntersectionThreshold:25,hideOverFlowOnRoot:!1},t}return t=c,(i=[{key:"scrollListener",value:function(){var e=this;if(this.allSections.map((function(t){e.switchNavVisibility(t)})),this.props.match.winDimen.width<=768){var t=this.homeRoot.current.scrollTop;t>this.state.lastScrollPos?this.setState({upScrollDetected:!1,lastScrollPos:t}):this.setState({upScrollDetected:!0,lastScrollPos:t})}}},{key:"switchNavVisibility",value:function(e){var t,i=this;switch(e){case"footer-container-bg":t=this.footerContainer.current.getBoundingClientRect();break;default:t=this.homeHeroContainer.current.getBoundingClientRect()}var o=this.state.sectionIntersectionThreshold-t.height;t.top>=o&&t.top<this.state.thresholdUp?(clearTimeout(this.toHandle),this.toHandle=setTimeout((function(){i.setState({navclass:r.vk[e]})}),15)):(clearTimeout(this.toHandle),this.toHandle=setTimeout((function(){i.setState({navclass:"light"})}),15))}},{key:"rootScrollBarVisibilityToggler",value:function(e){this.setState({hideOverFlowOnRoot:e})}},{key:"render",value:function(){var e=this;return o.createElement("div",{ref:this.homeRoot,className:"home-root",style:{height:this.props.match.winDimen.actualHeight,overflow:1==this.state.hideOverFlowOnRoot?"hidden":"auto"},onScroll:function(){return e.scrollListener()}},o.createElement(v,{makeSticky:this.state.makeSticky,scrolling:this.state.upScrollDetected,navclass:this.state.navclass,winDimen:this.props.match.winDimen,rootSbToggler:function(t){return e.rootScrollBarVisibilityToggler(t)}}),o.createElement(m,{visibleHeight:this.props.match.winDimen}),o.createElement(b,{visibleHeight:this.props.match.winDimen,containerRef:this.footerContainer,extraClass:"vid-footer-cont"}))}}])&&d(t.prototype,i),c}(o.PureComponent)},7786:(e,t,i)=>{"use strict";i.d(t,{Od:()=>r,To:()=>a,G0:()=>n,s8:()=>s,vk:()=>c});var o="/",r="".concat(o,"contactus"),a="".concat(o,"api/getVideoResources"),n="".concat(o,"api/getVideoTestimonials"),s="".concat(o,"api/getBatsSliderVideos"),c={"hm-container-bg":"light","hm-slider-1":"dark","all-in-one":"light",stats:"dark","video-testimonial":"light","offerings-container-bg":"light","crmup-container-bg":"dark","contact-us":"light","footer-container-bg":"dark","abouthero-container":"light","mission-container-bg":"dark","about-testimonial-bg":"dark","contacthero-container-bg":"dark","maponly-container-bg":"light"}},2999:(e,t,i)=>{"use strict";e.exports=i.p+"images/details-cover8579dc428bbf828c314b.jpg"},7526:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-17469cafc7c8a3330c34d.jpg"},7122:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-105216c2d57d737a5d44ef.jpg"},8088:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-2c0c10c47b769d8211f17.jpg"},6580:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-378f3f178976f2ff7fb67.jpg"},2813:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-4e4cf30cbe6e7d938febd.jpg"},1485:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-52440920ca3374b3dc857.jpg"},2776:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-62e434d7ec896996830f9.jpg"},324:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-7f0c93a75df98c1131822.jpg"},231:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-844b395cf9e460854a994.jpg"},891:(e,t,i)=>{"use strict";e.exports=i.p+"images/img-9796e5c7a8284355a2bc7.jpg"},6454:(e,t,i)=>{var o={"./details-cover.jpg":2999,"./img-1.jpg":7526,"./img-10.jpg":7122,"./img-2.jpg":8088,"./img-3.jpg":6580,"./img-4.jpg":2813,"./img-5.jpg":1485,"./img-6.jpg":2776,"./img-7.jpg":324,"./img-8.jpg":231,"./img-9.jpg":891};function r(e){var t=a(e);return i(t)}function a(e){if(!i.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=6454},6924:(e,t,i)=>{"use strict";e.exports=i.p+"images/calendarde96f2f380b5b48cf330.png"},4643:(e,t,i)=>{"use strict";e.exports=i.p+"images/right-arrow954a36fdd812e29f58d8.png"}}]);