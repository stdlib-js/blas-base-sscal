// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__,l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},_=r()?l:c;function p(e,r,t,o){var n,i;if(e<=0||o<=0||1===r)return t;if(1===o){if((i=e%5)>0)for(n=0;n<i;n++)t[n]*=r;if(e<5)return t;for(n=i;n<e;n+=5)t[n]*=r,t[n+1]*=r,t[n+2]*=r,t[n+3]*=r,t[n+4]*=r;return t}for(e*=o,n=0;n<e;n+=o)t[n]*=r;return t}return _(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n){var i,a,u;if(e<=0||1===r)return t;if(i=n,1===o){if((u=e%5)>0)for(a=0;a<u;a++)t[i]*=r,i+=o;if(e<5)return t;for(a=u;a<e;a+=5)t[a]*=r,t[a+1]*=r,t[a+2]*=r,t[a+3]*=r,t[a+4]*=r,i+=5;return t}for(a=0;a<e;a++)t[i]*=r,i+=o;return t}}),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).sscal=r();
//# sourceMappingURL=browser.js.map
