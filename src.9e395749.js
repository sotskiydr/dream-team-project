parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"eByr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="9b0c2f9965f33f91e75ff619d689bb58";class t{constructor(){this.page=1}async getTrandingMovie(t){const o=`https://api.themoviedb.org/3/trending/movie/week?api_key=${e}&page=${this.page}`;try{return(await fetch(`${o}`)).json()}catch(a){console.log("error")}}async getQueryMovie(t){const o=`&query=${t}`,a=`https://api.themoviedb.org/3/search/movie?api_key=${e}&language=en-US&page=${this.page}&include_adult=false`;try{return(await fetch(`${a}${o}`)).json()}catch(r){console.log("error")}}async getDescriptionMovie(t){const o=`https://api.themoviedb.org/3/movie/${t}?api_key=${e}&language=en-US`;try{return(await fetch(`${o}`)).json()}catch(a){console.log("error")}}}exports.default=t;
},{}],"msV8":[function(require,module,exports) {
"use strict";var e=o(require("../js/api/API"));function o(e){return e&&e.__esModule?e:{default:e}}const n=new e.default;n.getTrandingMovie().then(e=>console.log(e)),n.getQueryMovie("batman").then(e=>console.log(e)),n.getDescriptionMovie("321528").then(e=>console.log(e));
},{"../js/api/API":"eByr"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/example-api");
},{"./sass/main.scss":"clu1","./js/example-api":"msV8"}]},{},["Focm"], null)
//# sourceMappingURL=/dream-team-project/src.9e395749.js.map