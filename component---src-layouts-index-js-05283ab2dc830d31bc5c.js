webpackJsonp([0x67ef26645b2a,60335399758886],{109:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Amr Elsekilly | Sr. Frontend Engineer at Rubikal.",description:"Amr Elsekilly | Sr. Frontend Engineer at Rubikal."}}},layoutContext:{}}},213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(2),o=r(l),i=n(219),u=r(i),c=n(109),s=r(c);t.default=function(e){return o.default.createElement(u.default,a({},e,s.default))},e.exports=t.default},100:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function l(e,t,n){var l,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=o.call(e),t=o.call(t),c(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(l=0;l<e.length;l++)if(e[l]!==t[l])return!1;return!0}try{var f=i(e),p=i(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),l=f.length-1;l>=0;l--)if(f[l]!=p[l])return!1;for(l=f.length-1;l>=0;l--)if(s=f[l],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var o=Array.prototype.slice,i=n(102),u=n(101),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:l(e,t,n))}},101:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},102:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},104:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),l={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};r=function(){return l}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},131:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=r(s),p=n(7),d=r(p),m=n(136),E=r(m),T=n(100),h=r(T),y=n(132),A=n(51),b=function(e){var t,n;return n=t=function(t){function n(){return l(this,n),o(this,t.apply(this,arguments))}return i(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},a,this.mapNestedChildrenToProps(n,l))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,o=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return u({},a,(t={},t[r.type]=o,t.titleAttributes=u({},l),t));case A.TAG_NAMES.BODY:return u({},a,{bodyAttributes:u({},l)});case A.TAG_NAMES.HTML:return u({},a,{htmlAttributes:u({},l)})}return u({},a,(n={},n[r.type]=u({},l),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var l=e.props,o=l.children,i=a(l,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),l=u({},r);return n&&(l=this.mapChildrenToProps(n,l)),f.default.createElement(e,l)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},S=function(){return null},_=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(S),v=b(_);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},51:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},132:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(2),i=r(o),u=n(5),c=r(u),s=n(51),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return l({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a],o=l.toLowerCase();if(e.indexOf(o)!==-1&&n[o])return t.concat(n)}return t},[])},T=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,l=Object.keys(e),o=0;o<l.length;o++){var i=l[o],u=i.toLowerCase();t.indexOf(u)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(i)===-1||i!==s.TAG_PROPERTIES.INNER_HTML&&i!==s.TAG_PROPERTIES.CSS_TEXT&&i!==s.TAG_PROPERTIES.ITEM_PROP||(n=i)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var l=Object.keys(a),o=0;o<l.length;o++){var i=l[o],u=(0,c.default)({},r[i],a[i]);r[i]=u}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:m(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(s.ATTRIBUTE_NAMES.HTML,e),linkTags:T(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:T(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:T(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:m(s.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),b=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,O=function(e){g&&_(g),e.defer?g=S(function(){N(e,function(){g=null})}):(N(e),g=null)},N=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,o=e.metaTags,i=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;P(s.TAG_NAMES.BODY,r),P(s.TAG_NAMES.HTML,a),w(p,d);var m={baseTag:M(s.TAG_NAMES.BASE,n),linkTags:M(s.TAG_NAMES.LINK,l),metaTags:M(s.TAG_NAMES.META,o),noscriptTags:M(s.TAG_NAMES.NOSCRIPT,i),scriptTags:M(s.TAG_NAMES.SCRIPT,c),styleTags:M(s.TAG_NAMES.STYLE,f)},E={},T={};Object.keys(m).forEach(function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(T[e]=m[e].oldTags)}),t&&t(),u(e,E,T)},R=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),P(s.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),a=r?r.split(","):[],l=[].concat(a),o=Object.keys(t),i=0;i<o.length;i++){var u=o[i],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),a.indexOf(u)===-1&&a.push(u);var f=l.indexOf(u);f!==-1&&l.splice(f,1)}for(var p=l.length-1;p>=0;p--)n.removeAttribute(l[p]);a.length===l.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},M=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),l=[],o=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return o=t,n.isEqualNode(e)})?a.splice(o,1):l.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),l.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:l}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var a=C(n),l=R(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+f(l,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(l,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+a:a},""),l=r.innerHTML||r.cssText||"",o=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+l+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,a=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),l=j(n,a);return[i.default.createElement(s.TAG_NAMES.TITLE,l,t)]},x=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),i.default.createElement(e,a)})},H=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,o=e.metaTags,i=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:H(s.TAG_NAMES.BASE,t,r),bodyAttributes:H(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(s.ATTRIBUTE_NAMES.HTML,a,r),link:H(s.TAG_NAMES.LINK,l,r),meta:H(s.TAG_NAMES.META,o,r),noscript:H(s.TAG_NAMES.NOSCRIPT,i,r),script:H(s.TAG_NAMES.SCRIPT,u,r),style:H(s.TAG_NAMES.STYLE,c,r),title:H(s.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=k,t.handleClientStateChange=O,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=S,t.warn=v}).call(t,function(){return this}())},136:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){function p(){m=e(d.map(function(e){return e.props})),E.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var d=[],m=void 0,E=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return c.createElement(i,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(i)+")",E.canUseDOM=s.canUseDOM,E}}var u=n(2),c=r(u),s=r(n(104)),f=r(n(137));e.exports=i},137:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var l=Object.keys(e),o=Object.keys(t);if(l.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<l.length;u++){var c=l[u];if(!i(c))return!1;var s=e[c],f=t[c];if(a=n?n.call(r,s,f,c):void 0,a===!1||void 0===a&&s!==f)return!1}return!0}},372:function(e,t){},216:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),o=function(e){return l.default.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},l.default.createElement("p",{className:"copyright"},l.default.createElement("span",{className:"brand-name"},"© Amr Elsekilly")," - Coding with ❤️ at ",l.default.createElement("a",{href:"https://www.instagram.com/Rubikal/",target:"_blank"},"Rubikal"),"."))};o.propTypes={timeout:l.default.PropTypes.bool},t.default=o,e.exports=t.default},217:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),o=function(e){return l.default.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},l.default.createElement("div",{className:"logo"},l.default.createElement("span",{className:"fas fa-laptop-code"})),l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"inner"},l.default.createElement("h1",null,"Amr Elsekilly"),l.default.createElement("p",null,"Sr. Frontend Engineer at ",l.default.createElement("a",{href:"https://www.rubikal.com/",target:"_blank"},"Rubikal")),l.default.createElement("div",{className:"technologies"},l.default.createElement("span",{className:"fab fa-react",title:"React.js",style:{color:"#61dafb"}}),l.default.createElement("span",{className:"fi fi-redux",title:"Redux",style:{color:"#754ABC"}}),l.default.createElement("span",{className:"fi fi-graphql",title:"GraphQL",style:{color:"#E430A9"}}),l.default.createElement("span",{className:"fab fa-node-js",title:"Node.js",style:{color:"#24B45D"}}),l.default.createElement("span",{className:"fab fa-phoenix-framework",title:"Phoenix/Elixir",style:{color:"#F15424"}}),l.default.createElement("span",{className:"fi fi-mongodb",title:"MongoDB",style:{color:"#449A45"}}),l.default.createElement("span",{className:"fi fi-mysql",title:"MySQL/PostgreSQL",style:{color:"#02608B",fontWeight:"bold"}})),l.default.createElement("div",null,l.default.createElement("a",{href:"https://github.com/amrsekilly",className:"button hvr-ripple-out",target:"_blank"},l.default.createElement("span",{className:"fab fa-github main-button-icon"}),"Github")))),l.default.createElement("nav",null,l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("about")}},"About")),l.default.createElement("li",null,l.default.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("work")}},"Courses")),l.default.createElement("li",null,l.default.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("experience")}},"Experience")),l.default.createElement("li",null,l.default.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("contact")}},"Contact")))))};o.propTypes={onOpenArticle:l.default.PropTypes.func,timeout:l.default.PropTypes.bool},t.default=o,e.exports=t.default},218:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),u=r(i),c=n(169),s=(r(c),n(473)),f=r(s),p=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this,t=u.default.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return u.default.createElement("div",{id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},u.default.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"About Me"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:f.default,alt:""})),u.default.createElement("p",null,"Hiii!",u.default.createElement("br",null),u.default.createElement("br",null),"Right now I'm working as a Sr. Frontend Engineer at an awesome startup in Alexandria, Egypt called Rubikal.",u.default.createElement("br",null),u.default.createElement("br",null),"Our main client is a revolutionary Ed-Tech company in the US called InsideTrack. I'm working on the web experience for the students, coaches, and admins apps.",u.default.createElement("br",null),u.default.createElement("br",null),"My work involves working with: React, Redux, ImmutableJS, SWs, and much more cool tech!",u.default.createElement("br",null),u.default.createElement("br",null),"Follow me on ",u.default.createElement("a",{href:"https://www.instagram.com/amrsekilly/",target:"_blank"},"IG")," to know more about my journey! ❤️🎉"),t),u.default.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},"My Free Courses",u.default.createElement("span",{className:"fi fi-youtube-play",style:{color:"red"}}),u.default.createElement("span",{className:"fi fi-code ig-gradient"})),u.default.createElement("div",{className:"course-container"},u.default.createElement("h3",null,"Getting started with GraphQL "," ",u.default.createElement("span",{className:"fi fi-graphql",title:"GraphQL",style:{color:"#E430A9"}}),u.default.createElement("span",{className:"fi fi-react",title:"React.js",style:{color:"#53C1DF"}})),u.default.createElement("p",null,"Coming by the end of June!")),t),u.default.createElement("article",{id:"experience",className:("experience"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},u.default.createElement("span",{className:"fa fa-briefcase"})," Experience"),u.default.createElement("p",null,u.default.createElement("i",{className:"fas fa-download",style:{marginRight:10}}),u.default.createElement("a",{href:"https://github.com/amrsekilly/my-resume/raw/master/amr-elsekilly-resume.pdf"},"Download my Résumé"),"."),t),u.default.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},u.default.createElement("h2",{className:"major"},u.default.createElement("span",{className:"fa fa-envelope"})," Contact Me"),u.default.createElement("form",{method:"post",action:"https://formspree.io/amr.e.dev@gmail.com"},u.default.createElement("div",{className:"field half first"},u.default.createElement("label",{htmlFor:"name"},"Name"),u.default.createElement("input",{type:"text",name:"name",id:"name",placeholder:"YOUR NAME",required:!0})),u.default.createElement("div",{className:"field half"},u.default.createElement("label",{htmlFor:"email"},"Email"),u.default.createElement("input",{type:"email",name:"_replyto",id:"email",placeholder:"YOUR EMAIL",required:!0})),u.default.createElement("div",{className:"field"},u.default.createElement("label",{htmlFor:"message"},"Message"),u.default.createElement("textarea",{name:"message",id:"message",rows:"4",placeholder:"YOUR MESSAGE",required:!0}),u.default.createElement("input",{type:"hidden",name:"_next",value:"/"})),u.default.createElement("ul",{className:"actions"},u.default.createElement("li",null,u.default.createElement("input",{type:"submit",value:"Send",className:"special"})),u.default.createElement("li",null,u.default.createElement("input",{type:"reset",value:"Reset"})))),u.default.createElement("ul",{className:"icons"},u.default.createElement("li",null,u.default.createElement("a",{href:"tel:+201153993369",className:"icon fa-phone"},u.default.createElement("span",{className:"label"},"Phone"))),u.default.createElement("li",null,u.default.createElement("a",{href:"mailto:amr@amrsekilly.com",className:"icon fa-envelope"},u.default.createElement("span",{className:"label"},"Email"))),u.default.createElement("li",null,u.default.createElement("a",{href:"https://twitter.com/amrsekilly",className:"icon fa-twitter"},u.default.createElement("span",{className:"label"},"Twitter"))),u.default.createElement("li",null,u.default.createElement("a",{href:"https://github.com/amrsekilly",className:"icon fa-github"},u.default.createElement("span",{className:"label"},"Github"))),u.default.createElement("li",null,u.default.createElement("a",{href:"https://eg.linkedin.com/in/amrsekilly",className:"icon fa-linkedin-in"},u.default.createElement("span",{className:"label"},"Linkedin"))),u.default.createElement("li",null,u.default.createElement("a",{href:"https://www.instagram.com/amrsekilly",className:"icon fa-instagram"},u.default.createElement("span",{className:"label"},"Instagram"))),u.default.createElement("li",null,u.default.createElement("a",{href:"https://keybase.io/amrsekilly",className:"icon fa-key"},u.default.createElement("span",{className:"label"},"Keybase")))),t))},t}(u.default.Component);p.propTypes={route:u.default.PropTypes.object,article:u.default.PropTypes.string,articleTimeout:u.default.PropTypes.bool,onCloseArticle:u.default.PropTypes.func,timeout:u.default.PropTypes.bool},t.default=p,e.exports=t.default},473:function(e,t,n){e.exports=n.p+"static/profile.611b128a.jpg"},219:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(2),u=r(i);n(372);var c=n(131),s=r(c),f=n(217),p=r(f),d=n(218),m=r(d),E=n(216),T=r(E),h=function(e){function t(n){a(this,t);var r=l(this,e.call(this,n));return r.state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},r.handleOpenArticle=r.handleOpenArticle.bind(r),r.handleCloseArticle=r.handleCloseArticle.bind(r),r}return o(t,e),t.prototype.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.prototype.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},t.prototype.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.site.siteMetadata.description;return u.default.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},u.default.createElement(s.default,null,u.default.createElement("title",null,e),u.default.createElement("meta",{name:"description",content:t})),u.default.createElement("div",{id:"wrapper"},u.default.createElement(p.default,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),u.default.createElement(m.default,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle}),u.default.createElement(T.default,{timeout:this.state.timeout})),u.default.createElement("div",{id:"bg"}))},t}(u.default.Component);h.propTypes={route:u.default.PropTypes.object},t.default=h;t.pageQuery="** extracted graphql fragment **";
}});
//# sourceMappingURL=component---src-layouts-index-js-05283ab2dc830d31bc5c.js.map