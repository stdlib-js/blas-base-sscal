"use strict";var o=function(s,r){return function(){return r||s((r={exports:{}}).exports,r),r.exports}};var f=o(function(D,q){
var v=5;function E(s,r,e,u,a){var i,n,t;if(s<=0||r===1)return e;if(i=a,u===1){if(n=s%v,n>0)for(t=0;t<n;t++)e[i]*=r,i+=u;if(s<v)return e;for(t=n;t<s;t+=v)e[i]*=r,e[i+1]*=r,e[i+2]*=r,e[i+3]*=r,e[i+4]*=r,i+=v;return e}for(t=0;t<s;t++)e[i]*=r,i+=u;return e}q.exports=E
});var m=o(function(F,y){
var M=require('@stdlib/strided-base-stride2offset/dist'),O=f();function b(s,r,e,u){var a=M(s,u);return O(s,r,e,u,a)}y.exports=b
});var R=o(function(G,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=m(),k=f();g(d,"ndarray",k);j.exports=d
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=R(),c,_=z(w(__dirname,"./native.js"));A(_)?c=B:c=_;module.exports=c;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
