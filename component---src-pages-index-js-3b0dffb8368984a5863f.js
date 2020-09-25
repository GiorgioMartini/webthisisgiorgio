/*! For license information please see component---src-pages-index-js-3b0dffb8368984a5863f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return n.isMemo(e)?c:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var i=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(d){var o=m(r);o&&o!==d&&e(t,o,n)}var c=u(r);f&&(c=c.concat(f(r)));for(var s=l(t),y=l(r),h=0;h<c.length;++h){var b=c[h];if(!(a[b]||n&&n[b]||y&&y[b]||s&&s[b])){var v=p(r,b);try{i(t,b,v)}catch(g){}}}}return t}},"7oih":function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("LbRr");r("8ypT");t.a=function(e){var t=e.children;return o.a.createElement("div",{className:"text-white h-screen px-8"},o.a.createElement("div",{className:"m-auto block max-w-4xl"},o.a.createElement(a.a,null),t))}},"8ypT":function(e,t,r){},LbRr:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("Wbzz");t.a=function(){return o.a.createElement("ul",{className:"flex justify-end"},o.a.createElement("li",{className:"mr-auto"},o.a.createElement(a.a,{className:"py-6 block",to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(a.a,{className:"hover:text-gray-600 p-6 block",to:"/blog"},"Code")),o.a.createElement("li",null,o.a.createElement(a.a,{className:"hover:text-gray-600 p-6 block",to:"/blog"},"Music")),o.a.createElement("li",null,o.a.createElement(a.a,{className:"hover:text-gray-600 p-6 block",to:"/blog"},"Photos")),o.a.createElement("li",null,o.a.createElement(a.a,{className:"hover:text-gray-600 py-6 pl-6 block",to:"/about"},"About")))}},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),c=r("7oih");function s(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=r("dI71"),f=r("TOwV"),p=r("2mql"),m=r.n(p);function d(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var y=o.a.createContext();var h={initialChunks:{}};var b=function(e){return e};function v(e){var t=e.defaultResolveComponent,r=void 0===t?b:t,n=e.render,a=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),p={};function b(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):null}function v(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(f.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return m()(o,a,{preload:!0}),a}var g,E=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:b(r)},d(!r.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(c.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(c.chunkName(r))),i(n)):(!1!==t.ssr&&(c.isReady&&c.isReady(r)||c.chunkName&&h.initialChunks[c.chunkName(r)])&&n.loadSync(),n)}Object(u.a)(r,e),r.getDerivedStateFromProps=function(e,t){var r=b(e);return l({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return b(this.props)||JSON.stringify(this.props)},o.getCache=function(){return p[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),p[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=v(c.requireSync(this.props),this.props,S);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:c.resolve(this.props),chunkName:c.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=v(t,e.props,{Loadable:S});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,s(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=c.requireAsync(r)).status="PENDING",this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:c.resolve(e.props),chunkName:c.chunkName(e.props),error:t?t.message:t}),n.status="REJECTED"}))),n},o.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,s(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,i=c.error,u=c.loading,f=c.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(i)throw i;var p=o||t.fallback||null;return u?p:n({fallback:p,result:f,options:t,props:l({},a,{ref:r})})},r}(o.a.Component),w=(g=E,function(e){return o.a.createElement(y.Consumer,null,(function(t){return o.a.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),S=o.a.forwardRef((function(e,t){return o.a.createElement(w,Object.assign({forwardedRef:t},e))}));return S.preload=function(e){c.requireAsync(e)},S.load=function(e){return c.requireAsync(e)},S}return{loadable:c,lazy:function(e,t){return c(e,l({},t,{suspense:!0}))}}}var g=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.a.createElement(t,r)}}),E=g.loadable,w=g.lazy,S=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),x=S.loadable,N=S.lazy;var k=E;k.lib=x,w.lib=N;t.default=function(){return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("div",{className:"max-w-lg"},o.a.createElement("p",{className:"mt-16 mb-4 text-6xl"},"Hey!"),o.a.createElement("p",{className:"text-4xl"},"I'm a Berlin based web developer with a passion for music."),o.a.createElement("p",{className:"text-4xl"},"I love creating stuff with",o.a.createElement(a.a,{className:"text-gray-600",to:"/code"}," code"),", making",o.a.createElement(a.a,{className:"text-gray-600",to:"/code"}," music")," and taking",o.a.createElement(a.a,{className:"text-gray-600",to:"/code"}," pics"),"."),o.a.createElement("p",{className:"text-4xl"},"You can find me on twitter, soundcloud and instagram."))))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,E=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case c:case l:case s:case d:return e;default:switch(e=e&&e.$$typeof){case u:case m:case b:case h:case i:return e;default:return t}}case a:return t}}}function x(e){return S(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=i,t.Element=o,t.ForwardRef=m,t.Fragment=c,t.Lazy=b,t.Memo=h,t.Portal=a,t.Profiler=l,t.StrictMode=s,t.Suspense=d,t.isAsyncMode=function(e){return x(e)||S(e)===f},t.isConcurrentMode=x,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return S(e)===m},t.isFragment=function(e){return S(e)===c},t.isLazy=function(e){return S(e)===b},t.isMemo=function(e){return S(e)===h},t.isPortal=function(e){return S(e)===a},t.isProfiler=function(e){return S(e)===l},t.isStrictMode=function(e){return S(e)===s},t.isSuspense=function(e){return S(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===l||e===s||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===i||e.$$typeof===u||e.$$typeof===m||e.$$typeof===g||e.$$typeof===E||e.$$typeof===w||e.$$typeof===v)},t.typeOf=S}}]);
//# sourceMappingURL=component---src-pages-index-js-3b0dffb8368984a5863f.js.map