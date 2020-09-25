/*! For license information please see component---src-pages-index-js-7a76db1030cfa8851229.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var o=d(r);o&&o!==m&&e(t,o,n)}var c=u(r);f&&(c=c.concat(f(r)));for(var s=i(t),y=i(r),h=0;h<c.length;++h){var v=c[h];if(!(a[v]||n&&n[v]||y&&y[v]||s&&s[v])){var b=p(r,v);try{l(t,v,b)}catch(g){}}}}return t}},"7oih":function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("LbRr");r("8ypT");t.a=function(e){var t=e.children;return o.a.createElement("div",{className:"text-white h-screen px-8"},o.a.createElement("div",{className:"m-auto block max-w-4xl"},o.a.createElement(a.a,null),t))}},"8ypT":function(e,t,r){},LbRr:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("Wbzz");t.a=function(){return o.a.createElement("ul",{className:"flex justify-end"},o.a.createElement("li",{className:"mr-auto"},o.a.createElement(a.a,{className:"py-6 block",to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(a.a,{className:"hover:text-gray-600 p-6 block",to:"/blog"},"Code")),o.a.createElement("li",null,o.a.createElement(a.a,{className:"hover:text-gray-600 p-6 block",to:"/blog"},"Music")),o.a.createElement("li",null,o.a.createElement(a.a,{className:"hover:text-gray-600 p-6 block",to:"/blog"},"Photos")),o.a.createElement("li",null,o.a.createElement(a.a,{className:"hover:text-gray-600 py-6 pl-6 block",to:"/about"},"About")))}},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),c=r("7oih");function s(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=r("dI71"),f=r("TOwV"),p=r("2mql"),d=r.n(p);function m(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var y=o.a.createContext();var h={initialChunks:{}};var v=function(e){return e};function b(e){var t=e.defaultResolveComponent,r=void 0===t?v:t,n=e.render,a=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),p={};function v(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):null}function b(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(f.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return d()(o,a,{preload:!0}),a}var g,E=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:v(r)},m(!r.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(c.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(c.chunkName(r))),l(n)):(!1!==t.ssr&&(c.isReady&&c.isReady(r)||c.chunkName&&h.initialChunks[c.chunkName(r)])&&n.loadSync(),n)}Object(u.a)(r,e),r.getDerivedStateFromProps=function(e,t){var r=v(e);return i({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return v(this.props)||JSON.stringify(this.props)},o.getCache=function(){return p[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),p[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=b(c.requireSync(this.props),this.props,x);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:c.resolve(this.props),chunkName:c.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=b(t,e.props,{Loadable:x});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,s(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=c.requireAsync(r)).status="PENDING",this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:c.resolve(e.props),chunkName:c.chunkName(e.props),error:t?t.message:t}),n.status="REJECTED"}))),n},o.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,s(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,l=c.error,u=c.loading,f=c.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(l)throw l;var p=o||t.fallback||null;return u?p:n({fallback:p,result:f,options:t,props:i({},a,{ref:r})})},r}(o.a.Component),w=(g=E,function(e){return o.a.createElement(y.Consumer,null,(function(t){return o.a.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),x=o.a.forwardRef((function(e,t){return o.a.createElement(w,Object.assign({forwardedRef:t},e))}));return x.preload=function(e){c.requireAsync(e)},x.load=function(e){return c.requireAsync(e)},x}return{loadable:c,lazy:function(e,t){return c(e,i({},t,{suspense:!0}))}}}var g=b({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),E=g.loadable,w=g.lazy,x=b({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),S=x.loadable,k=x.lazy;var N=E;N.lib=S,w.lib=k;var C=N((function(){return Promise.all([r.e(2),r.e(10)]).then(r.t.bind(null,"58Bg",7))})),_=function(e,t,r){return e>=t&&e<=r};var $=function(e){var t,r=[];function n(e,t,r){var n=t,o=r,a=2,c=!1;return{display:function(){e.noStroke(),e.fill("#2b1b69"),e.ellipse(n,o,a)},flash:function(){a=80,c=!0},randomWalk:function(){n+=e.random(-1,1),o+=e.random(-1,1)},values:function(){return{_x:n,_y:o,hovered:c}},fade:function(){a>=0?a-=1:c=!1}}}e.setup=function(o){t=e.createCanvas(e.windowWidth,e.windowHeight);var a=e.width/30,c=e.height/20;t.position(0,0),t.style("z-index","-1"),e.background(0);for(var s=0;s<31;s++)for(var i=0;i<21;i++)r.push(n(e,s*a,i*c))},e.draw=function(){e.background(0),e.strokeWeight(3),r.forEach((function(t,n){var o,a,c,s,i=t.values(),l=i._x,u=i._y,f=i.hovered;t.randomWalk(),t.display(),0!==n&&(o=e.mouseX,a=e.mouseY,s=u,_(o,(c=l)-10,c+10)&&_(a,s-10,s+10))&&t.flash(),f&&t.fade(),r.forEach((function(t){_(l,t.values()._x-30,t.values()._x+30)&&_(u,t.values()._y-30,t.values()._y+30)&&(e.stroke("#2b1b69"),e.line(l,u,t.values()._x,t.values()._y))}))}))}};t.default=function(){return o.a.createElement("div",null,o.a.createElement(C,{sketch:$}),o.a.createElement(c.a,null,o.a.createElement("div",{className:"max-w-lg"},o.a.createElement("p",{className:"mt-16 mb-4 text-6xl"},"Hey!"),o.a.createElement("p",{className:"text-4xl"},"I'm a Berlin based web developer with a passion for music."),o.a.createElement("p",{className:"text-4xl"},"I love creating stuff with",o.a.createElement(a.a,{className:"text-gray-600",to:"/code"}," code"),", making",o.a.createElement(a.a,{className:"text-gray-600",to:"/code"}," music")," and taking",o.a.createElement(a.a,{className:"text-gray-600",to:"/code"}," pics"),"."),o.a.createElement("p",{className:"text-4xl"},"You can find me on twitter, soundcloud and instagram."))))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,E=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case c:case i:case s:case m:return e;default:switch(e=e&&e.$$typeof){case u:case d:case v:case h:case l:return e;default:return t}}case a:return t}}}function S(e){return x(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=l,t.Element=o,t.ForwardRef=d,t.Fragment=c,t.Lazy=v,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=m,t.isAsyncMode=function(e){return S(e)||x(e)===f},t.isConcurrentMode=S,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===c},t.isLazy=function(e){return x(e)===v},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===a},t.isProfiler=function(e){return x(e)===i},t.isStrictMode=function(e){return x(e)===s},t.isSuspense=function(e){return x(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===i||e===s||e===m||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===g||e.$$typeof===E||e.$$typeof===w||e.$$typeof===b)},t.typeOf=x}}]);
//# sourceMappingURL=component---src-pages-index-js-7a76db1030cfa8851229.js.map