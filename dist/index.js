"use strict";var o=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var y=o(function(D,m){
var c=5;function a(u,e,r,s){var i,n;if(u<=0||s<=0||e===1)return r;if(s===1){if(n=u%c,n>0)for(i=0;i<n;i++)r[i]*=e;if(u<c)return r;for(i=n;i<u;i+=c)r[i]*=e,r[i+1]*=e,r[i+2]*=e,r[i+3]*=e,r[i+4]*=e;return r}for(u*=s,i=0;i<u;i+=s)r[i]*=e;return r}m.exports=a
});var M=o(function(F,j){
var v=5;function b(u,e,r,s,i){var n,t,f;if(u<=0||e===1)return r;if(n=i,s===1){if(f=u%v,f>0)for(t=0;t<f;t++)r[n]*=e,n+=s;if(u<v)return r;for(t=f;t<u;t+=v)r[t]*=e,r[t+1]*=e,r[t+2]*=e,r[t+3]*=e,r[t+4]*=e,n+=v;return r}for(t=0;t<u;t++)r[n]*=e,n+=s;return r}j.exports=b
});var E=o(function(G,_){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),k=M();g(R,"ndarray",k);_.exports=R
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=E(),q,O=z(w(__dirname,"./native.js"));A(O)?q=B:q=O;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
