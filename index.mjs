// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";var t=5;function n(r,e,n,s,i){var d,f,o;if(r<=0||1===e)return n;if(d=i,1===s){if((f=r%t)>0)for(o=0;o<f;o++)n[d]*=e,d+=s;if(r<t)return n;for(o=f;o<r;o+=t)n[d]*=e,n[d+1]*=e,n[d+2]*=e,n[d+3]*=e,n[d+4]*=e,d+=t;return n}for(o=0;o<r;o++)n[d]*=e,d+=s;return n}function s(r,t,s,i){return n(r,t,s,i,e(r,i))}r(s,"ndarray",n);export{s as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
