_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"3gFA":function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r,o=n("mXGw"),i=n.n(o),a=n("W0B4"),c=n.n(a),l=n("G0rA"),u=n("5MD+");function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function p(){var t=d(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  "]);return p=function(){return t},t}function g(){var t=d(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  "]);return g=function(){return t},t}function b(){var t=d(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  "]);return b=function(){return t},t}function h(){var t=d(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  "]);return h=function(){return t},t}function y(){var t=d(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  "]);return y=function(){return t},t}function v(){var t=d(["\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  "]);return v=function(){return t},t}function m(){var t=d(["\n  display: inline-flex;\n  align-items: center;\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 20px;\n  border-radius: 50px;\n  height: 20px;\n  padding-left: 9px;\n  padding-right: 9px;\n  text-transform: uppercase;\n  border: 1px solid;\n"]);return m=function(){return t},t}var w={DarkGray:"darkgray",LightGray:"lightgray",Red:"red",Yellow:"yellow",Blue:"blue",Green:"green"},O=Object(u.css)(m()),j=(s(r={},w.LightGray,Object(u.css)(v(),l.a.gray.light3,l.a.gray.light2,l.a.gray.dark1)),s(r,w.DarkGray,Object(u.css)(y(),l.a.gray.dark2,l.a.gray.dark3,l.a.white)),s(r,w.Red,Object(u.css)(h(),l.a.red.light3,l.a.red.light2,l.a.red.dark2)),s(r,w.Yellow,Object(u.css)(b(),l.a.yellow.light3,l.a.yellow.light2,l.a.yellow.dark2)),s(r,w.Blue,Object(u.css)(g(),l.a.blue.light3,l.a.blue.light2,l.a.blue.dark2)),s(r,w.Green,Object(u.css)(p(),l.a.green.light3,l.a.green.light2,l.a.green.dark2)),r);function P(t){var e=t.children,n=t.variant,r=void 0===n?w.LightGray:n,o=t.className,a=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["children","variant","className"]);return i.a.createElement("div",f({},a,{className:Object(u.cx)(O,j[r],o)}),e)}P.displayName="Badge",P.propTypes={className:c.a.string,children:c.a.node,variant:c.a.oneOf(Object.values(w))},e.b=P},"6XVK":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n("rePB"),o=n("oYCi"),i=(n("mXGw"),n("3gFA")),a=n("hnBo");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l={variant:{type:"select",options:Object.values(i.a),default:i.a.Blue,label:"Variant"},children:{type:"text",default:"Sandbox",label:"Children"}};function u(){return Object(o.jsx)(a.a,{knobsConfig:l,children:function(t){return Object(o.jsx)(i.b,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t))}})}},"91KN":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("5iLb"),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.literal,r=e.overlap,o=n?t:["&"].concat(t);function i(t){if("object"!==typeof t||null==t)return[];if(Array.isArray(t))return t.map(i);var e={},a={},c={};return Object.keys(t).forEach((function(l){var u=t[l];if(!Array.isArray(u)&&n&&(u=[u]),(n||Array.isArray(u))&&38!==l.charCodeAt(0)){var s=void 0;u.forEach((function(t,i){if((!r||s!==t)&&null!=t)if(s=t,0!==i||n)if(void 0===e[o[i]]){var a;e[o[i]]=((a={})[l]=t,a)}else e[o[i]][l]=t;else c[l]=t}))}else"object"===typeof u?a[l]=i(u):c[l]=u})),o.forEach((function(t){e[t]&&(c[t]=e[t])})),Object.assign(c,a),c}return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.map(i)}}(Object.values(r.a).map((function(t){return"@media (min-width: ".concat(t,"px)")})),{literal:!0})},KQAK:function(t,e,n){t.exports=function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(e);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var u={small:14,default:16,large:20,xlarge:24};function s(){var t=l(["\n    flex-shrink: 0;\n  "]);return s=function(){return t},t}function f(){var t=l(["\n    color: ",";\n  "]);return f=function(){return t},t}var d=function(e){var r,o=e.className,l=e.size,d=void 0===l?16:l,p=e.title,g=e["aria-label"],b=e["aria-labelledby"],h=e.fill,y=e.role,v=void 0===y?"img":y,m=c(e,["className","size","title","aria-label","aria-labelledby","fill","role"]),w=n.css(f(),h),O=n.css(s()),j=function(t,e,n){var r,o,a=n["aria-label"],c=n["aria-labelledby"],l=n.title;switch(t){case"img":return a||c||l?(i(r={},"aria-labelledby",c),i(r,"aria-label",a),i(r,"title",l),r):{"aria-label":(o=e,"".concat(o.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,"Checkmark",(i(r={title:p},"aria-label",g),i(r,"aria-labelledby",b),r));return t.createElement("svg",a({className:n.cx(i({},w,null!=h),O,o),height:"number"==typeof d?d:u[d],width:"number"==typeof d?d:u[d],role:v},j,m,{viewBox:"0 0 16 16"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.30583 9.05037L11.7611 3.59509C12.1516 3.20457 12.7848 3.20457 13.1753 3.59509L13.8824 4.3022C14.273 4.69273 14.273 5.32589 13.8824 5.71642L6.81525 12.7836C6.38819 13.2106 5.68292 13.1646 5.31505 12.6856L2.26638 8.71605C1.92998 8.27804 2.01235 7.65025 2.45036 7.31385L3.04518 6.85702C3.59269 6.43652 4.37742 6.53949 4.79792 7.087L6.30583 9.05037Z",fill:"currentColor"}))};return d.displayName="Checkmark",d.isGlyph=!0,d.propTypes={fill:o.default.string,size:o.default.oneOfType([o.default.number,o.default.string]),className:o.default.string},d}(n("mXGw"),n("W0B4"),n("5MD+"))},ZmRa:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"b",(function(){return N}));var r=n("mXGw"),o=n.n(r),i=n("W0B4"),a=n.n(i),c=n("m3N6"),l=n("5MD+"),u=n("q7FG"),s=n("WM7k");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O,j,P,E,x,S,C,D,k={Top:"top",Bottom:"bottom",Left:"left",Right:"right",CenterVertical:"center-vertical",CenterHorizontal:"center-horizontal"},N={Start:"start",Middle:"middle",End:"end",Fit:"fit"};function H(t){var e=t.useRelativePositioning,n=t.spacing,r=t.align,o=t.justify,i=t.referenceElViewportPos,a=void 0===i?B:i,c=t.referenceElDocumentPos,l=void 0===c?B:c,u=t.contentElViewportPos,s=void 0===u?B:u,f=t.contentElDocumentPos,d=void 0===f?B:f,p=t.windowHeight,b=void 0===p?window.innerHeight:p,h=t.windowWidth,y=void 0===h?window.innerWidth:h,m={windowWidth:y,windowHeight:b,referenceElViewportPos:a,contentElViewportPos:s,spacing:n},w=function(t,e){var n=e.spacing,r=e.windowWidth,o=e.windowHeight,i=e.contentElViewportPos,a=e.referenceElViewportPos;return[t].concat(v(Y[t])).find((function(t){return[k.Top,k.Bottom,k.CenterVertical].includes(t)?K({top:_({align:t,contentElPos:i,referenceElPos:a,spacing:n}),windowHeight:o,contentHeight:i.height}):!![k.Left,k.Right,k.CenterHorizontal].includes(t)&&X({left:I({align:t,contentElPos:i,referenceElPos:a,spacing:n}),windowWidth:r,contentWidth:i.width})}))||t}(r,m),O=function(t,e,n){var r,o,i=n.spacing,a=n.windowWidth,c=n.windowHeight,l=n.contentElViewportPos,u=n.referenceElViewportPos,s=[t].concat(v(Z[t]));switch(e){case k.Top:case k.Bottom:case k.CenterVertical:return null!==(r=s.find((function(t){return X({contentWidth:t===N.Fit?u.width:l.width,windowWidth:a,left:I({contentElPos:l,referenceElPos:u,spacing:i,align:e,justify:t})})})))&&void 0!==r?r:Z[t][0];case k.Left:case k.Right:case k.CenterHorizontal:return null!==(o=s.find((function(t){return K({contentHeight:t===N.Fit?u.height:l.height,windowHeight:c,top:_({contentElPos:l,referenceElPos:u,spacing:i,align:e,justify:t})})})))&&void 0!==o?o:Z[t][0]}}(o,w,m),j=function(t){var e,n,r=t.justify,o=A[t.align],i=null!==(e=o.x)&&void 0!==e?e:z[r],a=null!==(n=o.y)&&void 0!==n?n:R[r];return"".concat(i," ").concat(a)}({align:w,justify:O}),P=function(t,e){var n=.8;switch(t){case k.Top:return"translate3d(0, ".concat(e,"px, 0) scale(").concat(n,")");case k.Bottom:return"translate3d(0, -".concat(e,"px, 0) scale(").concat(n,")");case k.Left:return"translate3d(".concat(e,"px, 0, 0) scale(").concat(n,")");case k.Right:return"translate3d(-".concat(e,"px, 0, 0) scale(").concat(n,")");case k.CenterHorizontal:case k.CenterVertical:return"scale(".concat(n,")")}}(w,n);return e?{align:w,justify:O,positionCSS:g({},W({align:w,justify:O,referenceElDocumentPos:l,contentElDocumentPos:d,spacing:n}),{transformOrigin:j,transform:P})}:{align:w,justify:O,positionCSS:g({},G({align:w,justify:O,referenceElDocumentPos:l,contentElDocumentPos:d,spacing:n,windowHeight:b,windowWidth:y}),{transformOrigin:j,transform:P})}}var B={top:0,bottom:0,left:0,right:0,height:0,width:0};function L(t){if(!t)return B;var e=t.getBoundingClientRect(),n=e.top,r=e.bottom,o=e.left,i=e.right,a=t.offsetHeight,c=t.offsetWidth,l=window,u=l.scrollX,s=l.scrollY;return{top:n+s,bottom:r+s,left:o+u,right:i+u,height:a,width:c}}function M(t){if(!t)return B;var e=t.getBoundingClientRect();return{top:e.top,bottom:e.bottom,left:e.left,right:e.right,height:t.offsetHeight,width:t.offsetWidth}}var R=(f(O={},N.Start,"top"),f(O,N.Middle,"center"),f(O,N.End,"bottom"),f(O,N.Fit,"center"),O),z=(f(j={},N.Start,"left"),f(j,N.Middle,"center"),f(j,N.End,"right"),f(j,N.Fit,"center"),j),A=(f(P={},k.Left,{x:"right"}),f(P,k.Right,{x:"left"}),f(P,k.Top,{y:"bottom"}),f(P,k.Bottom,{y:"top"}),f(P,k.CenterHorizontal,{x:"center"}),f(P,k.CenterVertical,{y:"center"}),P),V=(f(E={},N.Start,{top:0}),f(E,N.End,{bottom:0}),f(E,N.Middle,(function(t){var e=t.contentElDocumentPos,n=t.referenceElDocumentPos;return{top:"".concat(n.height/2-e.height/2,"px")}})),f(E,N.Fit,{top:0,bottom:0}),E),T=(f(x={},N.Start,{left:0}),f(x,N.End,{right:0}),f(x,N.Middle,(function(t){var e=t.contentElDocumentPos,n=t.referenceElDocumentPos;return{left:"".concat(n.width/2-e.width/2,"px")}})),f(x,N.Fit,{left:0,right:0}),x),F=(f(S={},k.Top,{constant:function(t){var e=t.spacing;return{bottom:"calc(100% + ".concat(e,"px)")}},justifyPositions:T}),f(S,k.Bottom,{constant:function(t){var e=t.spacing;return{top:"calc(100% + ".concat(e,"px)")}},justifyPositions:T}),f(S,k.CenterVertical,{constant:function(t){var e=t.referenceElDocumentPos;return{top:"calc(".concat(e.height/2,"px - 50%)")}},justifyPositions:T}),f(S,k.Left,{constant:function(t){var e=t.spacing;return{right:"calc(100% + ".concat(e,"px)")}},justifyPositions:V}),f(S,k.Right,{constant:function(t){var e=t.spacing;return{left:"calc(100% + ".concat(e,"px)")}},justifyPositions:V}),f(S,k.CenterHorizontal,{constant:function(t){var e=t.referenceElDocumentPos;return{left:"calc(".concat(e.width/2,"px - 50%)")}},justifyPositions:V}),S);function W(t){var e,n=t.align,r=t.justify,o=t.referenceElDocumentPos,i=t.contentElDocumentPos,a=t.spacing,c=F[n],l=c.justifyPositions[r],u={contentElDocumentPos:i,referenceElDocumentPos:o,spacing:a};return g({},null===(e=c.constant)||void 0===e?void 0:e.call(c,u),{},"function"==typeof l?l(u):l)}function G(t){var e=t.align,n=t.justify,r=t.referenceElDocumentPos,o=t.contentElDocumentPos,i=t.spacing,a=t.windowWidth,c=t.windowHeight,l="".concat(I({align:e,justify:n,referenceElPos:r,contentElPos:o,spacing:i}),"px"),u="".concat(_({align:e,justify:n,referenceElPos:r,contentElPos:o,spacing:i}),"px");return n!==N.Fit?{left:l,top:u}:[k.Left,k.Right,k.CenterHorizontal].includes(e)?{left:l,top:u,bottom:"".concat(c-r.bottom,"px")}:{left:l,top:u,right:"".concat(a-r.right,"px")}}function _(t){var e=t.align,n=t.justify,r=t.contentElPos,o=t.referenceElPos,i=t.spacing;switch(e){case k.Left:case k.Right:case k.CenterHorizontal:switch(n){case N.Start:case N.Fit:return o.top;case N.End:return o.top+o.height-r.height;case N.Middle:default:return o.top-(r.height-o.height)/2}case k.CenterVertical:return o.top-(r.height-o.height)/2;case k.Top:return o.top-r.height-i;case k.Bottom:default:return o.top+o.height+i}}function I(t){var e=t.align,n=t.justify,r=t.contentElPos,o=t.referenceElPos,i=t.spacing;switch(e){case k.Top:case k.Bottom:case k.CenterVertical:switch(n){case N.End:return o.left+o.width-r.width;case N.Middle:return o.left-(r.width-o.width)/2;case N.Start:case N.Fit:default:return o.left}case k.Left:return o.left-r.width-i;case k.Right:return o.left+o.width+i;case k.CenterHorizontal:default:return o.left-(r.width-o.width)/2}}function X(t){var e=t.left,n=t.windowWidth,r=t.contentWidth;return e>=0&&!(e+r>n)}function K(t){var e=t.top,n=t.windowHeight,r=t.contentHeight;return e>=0&&!(e+r>n)}var Y=(f(C={},k.Top,[k.Bottom]),f(C,k.Bottom,[k.Top]),f(C,k.Left,[k.Right]),f(C,k.Right,[k.Left]),f(C,k.CenterHorizontal,[k.Left,k.Right]),f(C,k.CenterVertical,[k.Top,k.Bottom]),C),Z=(f(D={},N.Start,[N.End,N.Middle]),f(D,N.Middle,[N.End,N.Start]),f(D,N.End,[N.Start,N.Middle]),f(D,N.Fit,[N.Middle,N.Start,N.End]),D);function $(){var t=h(["\n              display: none;\n            "]);return $=function(){return t},t}function J(){var t=h(["\n    opacity: 1;\n    position: ",";\n    pointer-events: initial;\n  "]);return J=function(){return t},t}function q(){var t=h(["\n  position: absolute;\n  transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;\n  opacity: 0;\n"]);return q=function(){return t},t}var Q=Object(l.css)(q()),U={attributes:!0,characterData:!0,childList:!0,subtree:!0};function tt(t){var e=t.active,n=void 0!==e&&e,i=t.usePortal,a=void 0===i||i,p=t.spacing,g=void 0===p?10:p,h=t.align,v=void 0===h?k.Bottom:h,m=t.justify,w=void 0===m?N.Start:m,O=t.adjustOnMutation,j=void 0!==O&&O,P=t.children,E=t.className,x=t.portalClassName,S=t.refEl,C=b(t,["active","usePortal","spacing","align","justify","adjustOnMutation","children","className","portalClassName","refEl"]),D=y(Object(r.useState)(null),2),B=D[0],R=D[1],z=y(Object(r.useState)(null),2),A=z[0],V=z[1],T=y(Object(r.useState)(0),2),F=T[0],W=T[1],G=o.a.useRef(A);G.current=A;var _=null;if(S&&S.current)_=S.current;else if(B){var I=B.parentNode;I&&I instanceof HTMLElement&&(_=I)}var X=Object(s.h)(),K=j&&n,Y=Object(s.d)(_,U,Date.now,K),Z=Object(s.d)(A,U,Date.now,K),q=Object(s.e)(M(_)),tt=Object(s.e)(M(A)),et=Object(s.e)(Object(r.useMemo)((function(){return L(_)}),[_,X,Y,n,v,w,F])),nt=Object(s.e)(Object(r.useMemo)((function(){return L(A)}),[A,X,Z,n,v,w,F])),rt=Object(s.g)(w),ot=Object(s.g)(v),it=rt!==w&&(w===N.Fit||rt===N.Fit)||ot!==v&&w===N.Fit;Object(s.c)((function(){it&&W((function(t){return t+1}))}),[it]);var at=y(Object(r.useState)(!1),2),ct=at[0],lt=at[1];if(Object(s.c)((function(){return lt(!0)}),[]),!ct)return null;var ut,st=H({useRelativePositioning:!a,spacing:g,align:v,justify:w,referenceElViewportPos:q,referenceElDocumentPos:et,contentElViewportPos:tt,contentElDocumentPos:nt}),ft=st.align,dt=st.justify,pt=st.positionCSS,gt=pt.transform,bt=b(pt,["transform"]),ht=Object(l.css)(J(),a?"":"absolute"),yt=a?u.a:r.Fragment,vt=a?{className:x}:{};return ut=null==P?null:"function"==typeof P?P({align:ft,justify:dt,referenceElPos:et}):P,o.a.createElement(c.a,{nodeRef:G,in:n,timeout:150,mountOnEnter:!0,unmountOnExit:!0,appear:!0},(function(t){var e;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:R,className:Object(l.css)($())}),o.a.createElement(yt,vt,o.a.createElement("div",d({},C,{className:Object(l.cx)(Q,Object(l.css)(bt),(e={},f(e,Object(l.css)({transform:gt}),"entering"===t||"exiting"===t),f(e,ht,"entered"===t),e),E)}),o.a.createElement("div",{ref:V},ut))))}))}tt.displayName="Popover",tt.propTypes={children:a.a.oneOfType([a.a.node,a.a.func]),active:a.a.bool,className:a.a.string,align:a.a.oneOf(Object.values(k)),justify:a.a.oneOf(Object.values(N)),refEl:a.a.shape({current:"undefined"!=typeof window?a.a.instanceOf(Element):a.a.any}),usePortal:a.a.bool,portalClassName:a.a.string,spacing:a.a.number,adjustOnMutation:a.a.bool},tt.defaultProps={children:void 0,align:k.Bottom,justify:N.Start,active:!1,usePortal:!0,spacing:10,adjustOnMutation:!1},e.c=tt},nfx3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={default:700,dataGraphic:1138}},tk6G:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/badge/example",function(){return n("6XVK")}])}},[["tk6G",0,1,2,3,4,5,6,14,16]]]);