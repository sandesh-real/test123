(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},u=r(1003),l=r(880),c=r(9246);function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function d(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,i=void 0===n?!0!==Boolean(!1):n,p=e.href,y=e.as,v=e.children,h=e.prefetch,b=e.passHref,g=e.replace,m=e.shallow,w=e.scroll,O=e.locale,j=e.onClick,k=e.onMouseEnter,E=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,i&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var C,I=!1!==h,M=l.useRouter(),S=a.default.useMemo((function(){var e=o(u.resolveHref(M,p,!0),2),t=e[0],r=e[1];return{href:t,as:y?u.resolveHref(M,y):r||t}}),[M,p,y]),R=S.href,A=S.as,_=a.default.useRef(R),x=a.default.useRef(A);i&&(C=a.default.Children.only(r));var V=i?C&&"object"===typeof C&&C.ref:t,L=o(c.useIntersection({rootMargin:"200px"}),3),P=L[0],N=L[1],U=L[2],z=a.default.useCallback((function(e){x.current===A&&_.current===R||(U(),x.current=A,_.current=R),P(e),V&&("function"===typeof V?V(e):"object"===typeof V&&(V.current=e))}),[A,V,R,U,P]);a.default.useEffect((function(){var e=N&&I&&u.isLocalURL(R),t="undefined"!==typeof O?O:M&&M.locale,r=s[R+"%"+A+(t?"%"+t:"")];e&&!r&&d(M,R,A,{locale:t})}),[A,R,N,O,I,M]);var B={ref:z,onClick:function(e){i||"function"!==typeof j||j(e),i&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:a}))}(e,M,R,A,g,m,w,O)},onMouseEnter:function(e){i||"function"!==typeof k||k(e),i&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),u.isLocalURL(R)&&d(M,R,A,{priority:!0})}};if(!i||b||"a"===C.type&&!("href"in C.props)){var D="undefined"!==typeof O?O:M&&M.locale,H=M&&M.isLocaleDomain&&u.getDomainLocale(A,D,M&&M.locales,M&&M.domainLocales);B.href=H||u.addBasePath(u.addLocale(A,D,M&&M.defaultLocale))}return i?a.default.cloneElement(C,B):a.default.createElement("a",Object.assign({},E,B),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=i.useRef(),s=o(i.useState(!1),2),d=s[0],p=s[1],y=o(i.useState(t?t.current:null),2),v=y[0],h=y[1],b=i.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]),g=i.useCallback((function(){p(!1)}),[]);return i.useEffect((function(){if(!u&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&h(t.current)}),[t]),[b,d,g]};var i=r(7294),a=r(4686),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return n.createElement(f,a({attr:a({},e.attr)},t),l(e.child))}}function f(e){var t=function(t){var r,o=e.attr,i=e.size,l=e.title,c=u(e,["attr","size","title"]),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},131:function(e,t,r){"use strict";r.d(t,{YD:function(){return y}});var n=r(7294);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}var a=new Map,u=new WeakMap,l=0,c=void 0;function f(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(u.has(r)||(l+=1,u.set(r,l.toString())),u.get(r)):"0":e[t]);var r})).toString()}function s(e,t,r,n){if(void 0===r&&(r={}),void 0===n&&(n=c),"undefined"===typeof window.IntersectionObserver&&void 0!==n){var o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=function(e){var t=f(e),r=a.get(t);if(!r){var n,o=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var r,i=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(r=o.get(t.target))||r.forEach((function(e){e(i,t)}))}))}),e);n=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:o},a.set(t,r)}return r}(r),u=i.id,l=i.observer,s=i.elements,d=s.get(e)||[];return s.has(e)||s.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(s.delete(e),l.unobserve(e)),0===s.size&&(l.disconnect(),a.delete(u))}}var d=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function p(e){return"function"!==typeof e.children}n.Component;function y(e){var t=void 0===e?{}:e,r=t.threshold,o=t.delay,i=t.trackVisibility,a=t.rootMargin,u=t.root,l=t.triggerOnce,c=t.skip,f=t.initialInView,d=t.fallbackInView,p=t.onChange,y=n.useRef(),v=n.useRef(),h=n.useState({inView:!!f}),b=h[0],g=h[1];v.current=p;var m=n.useCallback((function(e){void 0!==y.current&&(y.current(),y.current=void 0),c||e&&(y.current=s(e,(function(e,t){g({inView:e,entry:t}),v.current&&v.current(e,t),t.isIntersecting&&l&&y.current&&(y.current(),y.current=void 0)}),{root:u,rootMargin:a,threshold:r,trackVisibility:i,delay:o},d))}),[Array.isArray(r)?r.toString():r,u,a,l,c,i,d,o]);n.useEffect((function(){y.current||!b.entry||l||c||g({inView:!!f})}));var w=[m,b.inView,b.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}}}]);