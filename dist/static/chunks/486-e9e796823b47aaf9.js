"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{6142:function(e,t,n){n.d(t,{ZF:function(){return r.ZF}});var r=n(5723);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r.KN)("firebase","10.8.0","app")},4905:function(e,t,n){n.d(t,{oq:function(){return eo},Jt:function(){return er},cF:function(){return ei},iH:function(){return es},KV:function(){return en}});var r,o,s,i,a=n(5723),l=n(8954),u=n(6574);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c="firebasestorage.googleapis.com",h="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends l.ZR{get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}constructor(e,t,n=0){super(p(e),"Firebase Storage: ".concat(t," (").concat(p(e),")")),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}}function p(e){return"storage/"+e}function _(){return new d(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function f(e){return new d(s.INVALID_ARGUMENT,e)}function g(){return new d(s.APP_DELETED,"The Firebase app was deleted.")}function m(e,t){return new d(s.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function b(e){throw new d(s.INTERNAL_ERROR,"Internal error: "+e)}(r=s||(s={})).UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=w.makeFromUrl(e,t)}catch(t){return new w(e,"")}if(""===n.path)return n;throw new d(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null,r="([A-Za-z0-9.\\-_]+)",o=RegExp("^gs://"+r+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),l=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp("^https?://".concat(a,"/").concat("v[A-Za-z0-9_]+","/b/").concat(r,"/o").concat("(/([^?#]*).*)?$"),"i"),indices:{bucket:1,path:3},postModify:i},{regex:RegExp("^https?://".concat(t===c?"(?:storage.googleapis.com|storage.cloud.google.com)":t,"/").concat(r,"/").concat("([^?#]*)"),"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<l.length;t++){let r=l[t],o=r.regex.exec(e);if(o){let e=o[r.indices.bucket],t=o[r.indices.path];t||(t=""),n=new w(e,t),r.postModify(n);break}}if(null==n)throw new d(s.INVALID_URL,"Invalid URL '"+e+"'.");return n}constructor(e,t){this.bucket=e,this.path_=t}}class R{getPromise(){return this.promise_}cancel(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}constructor(e){this.promise_=Promise.reject(e)}}function T(e){return"string"==typeof e||e instanceof String}function E(e){return k()&&e instanceof Blob}function k(){return"undefined"!=typeof Blob}function y(e,t,n,r){if(r<t)throw f("Invalid value for '".concat(e,"'. Expected ").concat(t," or greater."));if(r>n)throw f("Invalid value for '".concat(e,"'. Expected ").concat(n," or less."))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t,n){let r=t;return null==n&&(r="https://".concat(t)),"".concat(n,"://").concat(r,"/v0").concat(e)}function v(e){let t=encodeURIComponent,n="?";for(let r in e)e.hasOwnProperty(r)&&(n=n+(t(r)+"=")+t(e[r])+"&");return n.slice(0,-1)}(o=i||(i={}))[o.NO_ERROR=0]="NO_ERROR",o[o.NETWORK_ERROR=1]="NETWORK_ERROR",o[o.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{start_(){let e=(e,t)=>{let n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){let e=_();e.serverResponse=o.getErrorText(),r(this.errorCallback_?this.errorCallback_(o,e):e)}else r(t.canceled?this.appDelete_?g():new d(s.CANCELED,"User canceled the upload/download."):new d(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))};this.canceled_?e(!1,new N(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){let r=1,o=null,s=null,i=!1,a=0,l=!1;function u(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];l||(l=!0,t.apply(null,n))}function c(t){o=setTimeout(()=>{o=null,e(d,2===a)},t)}function h(){s&&clearTimeout(s)}function d(e){let t;for(var n=arguments.length,o=Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];if(l){h();return}if(e||2===a||i){h(),u.call(null,e,...o);return}r<64&&(r*=2),1===a?(a=2,t=0):t=(r+Math.random())*1e3,c(t)}let p=!1;function _(e){!p&&(p=!0,h(),!l&&(null!==o?(e||(a=2),clearTimeout(o),c(0)):e||(a=1)))}return c(0),s=setTimeout(()=>{i=!0,_(!0)},n),_}((e,t)=>{if(t){e(!1,new N(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===i.NO_ERROR,o=n.getStatus();if(!t||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return n||r||o}(o,this.additionalRetryCodes_)&&this.retry){e(!1,new N(!1,null,n.getErrorCode()===i.ABORT));return}e(!0,new N(-1!==this.successCodes_.indexOf(o),n))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}constructor(e,t,n,r,o,s,i,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}}class N{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function U(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==r){let e=new r;for(let n=0;n<t.length;n++)e.append(t[n]);return e.getBlob()}if(k())return new Blob(t);throw new d(s.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class C{constructor(e,t){this.data=e,this.contentType=t||null}}function x(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<=127?t.push(r):r<=2047?t.push(192|r>>6,128|63&r):(64512&r)==55296?n<e.length-1&&(64512&e.charCodeAt(n+1))==56320?(r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)):t.push(239,191,189):(64512&r)==56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function D(e,t){let n;switch(e){case I.BASE64:{let n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw m(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case I.BASE64URL:{let n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r)throw m(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{n=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("undefined"==typeof atob)throw new d(s.UNSUPPORTED_ENVIRONMENT,"".concat("base-64"," is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information."));return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw m(e,"Invalid character found")}let r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class L{constructor(e){var t;this.base64=!1,this.contentType=null;let n=e.match(/^data:([^,]+)?,/);if(null===n)throw m(I.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=n[1]||null;null!=r&&(this.base64=(t=";base64",r.length>=t.length&&r.substring(r.length-t.length)===t),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{size(){return this.size_}type(){return this.type_}slice(e,t){if(!E(this.data_))return new P(new Uint8Array(this.data_.buffer,e,t-e),!0);{var n;let r=(n=this.data_).webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null;return null===r?null:new P(r)}}static getBlob(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(k()){let e=t.map(e=>e instanceof P?e.data_:e);return new P(U.apply(null,e))}{let e=t.map(e=>T(e)?function(e,t){switch(e){case I.RAW:return new C(x(t));case I.BASE64:case I.BASE64URL:return new C(D(e,t));case I.DATA_URL:return new C(function(e){let t=new L(e);return t.base64?D(I.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw m(I.DATA_URL,"Malformed data URL.")}return x(t)}(t.rest)}(t),new L(t).contentType)}throw _()}(I.RAW,e).data:e.data_),n=0;e.forEach(e=>{n+=e.byteLength});let r=new Uint8Array(n),o=0;return e.forEach(e=>{for(let t=0;t<e.length;t++)r[o++]=e[t]}),new P(r,!0)}}uploadData(){return this.data_}constructor(e,t){let n=0,r="";E(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){var t;let n;try{n=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=n)||Array.isArray(t)?null:n}function B(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return t}class M{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||F}}let V=null;function q(){if(V)return V;let e=[];e.push(new M("bucket")),e.push(new M("generation")),e.push(new M("metageneration")),e.push(new M("name","fullPath",!0));let t=new M("name");t.xform=function(e,t){return!T(t)||t.length<2?t:B(t)},e.push(t);let n=new M("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new M("timeCreated")),e.push(new M("updated")),e.push(new M("md5Hash",null,!0)),e.push(new M("cacheControl",null,!0)),e.push(new M("contentDisposition",null,!0)),e.push(new M("contentEncoding",null,!0)),e.push(new M("contentLanguage",null,!0)),e.push(new M("contentType",null,!0)),e.push(new M("metadata","customMetadata",!0)),V=e}function j(e,t,n){let r=S(t);return null===r?null:function(e,t,n){let r={};r.type="file";let o=n.length;for(let e=0;e<o;e++){let o=n[e];r[o.local]=o.xform(r,t[o.server])}return Object.defineProperty(r,"ref",{get:function(){let t=new w(r.bucket,r.fullPath);return e._makeStorageReference(t)}}),r}(e,r,n)}class H{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(!e)throw _()}function K(e){return function(t,n){var r,o;let i;return 401===t.getStatus()?i=t.getErrorText().includes("Firebase App Check token is invalid")?new d(s.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new d(s.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(r=e.bucket,i=new d(s.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,i=new d(s.UNAUTHORIZED,"User does not have permission to access '"+o+"'.")):i=n,i.status=t.getStatus(),i.serverResponse=n.serverResponse,i}}function W(e){let t=K(e);return function(n,r){let o=t(n,r);if(404===n.getStatus()){var i;i=e.path,o=new d(s.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}return o.serverResponse=r.serverResponse,o}}class X{send(e,t,n,r){if(this.sent_)throw b("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(let e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw b("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw b("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw b("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw b("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=i.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=i.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=i.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}}class Z extends X{initXhr(){this.xhr_.responseType="text"}}function G(){return new Z}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new J(e,t)}get root(){let e=new w(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new w(this._location.bucket,e);return new J(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new d(s.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}constructor(e,t){this._service=e,t instanceof w?this._location=t:this._location=w.makeFromUrl(t,e.host)}}function Y(e,t){let n=null==t?void 0:t[h];return null==n?null:w.makeFromBucketSpec(n,e)}class Q{get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=w.makeFromBucketSpec(this._url,e):this._bucket=Y(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new J(this,e)}_makeRequest(e,t,n,r){let o=!(arguments.length>4)||void 0===arguments[4]||arguments[4];if(this._deleted)return new R(g());{let s=function(e,t,n,r,o,s){let i=!(arguments.length>6)||void 0===arguments[6]||arguments[6],a=v(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==n&&n.length>0&&(u.Authorization="Firebase "+n),u["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==r&&(u["X-Firebase-AppCheck"]=r),new O(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=c,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=w.makeFromBucketSpec(r,this._host):this._bucket=Y(this._host,this.app.options)}}let $="@firebase/storage",ee="0.12.1",et="storage";function en(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");let r=function(e,t,n,r,o){let i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},l=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+l;let u=function(e,t,n){let r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),!r.contentType&&(r.contentType=t&&t.type()||"application/octet-stream"),r}(t,r,o),c="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+function(e,t){let n={},r=t.length;for(let o=0;o<r;o++){let r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(u,n)+"\r\n--"+l+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",h=P.getBlob(c,r,"\r\n--"+l+"--");if(null===h)throw new d(s.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");let p={name:u.fullPath},_=new H(A(i,e.host,e._protocol),"POST",function(t,r){let o=j(e,r,n);return z(null!==o),o},e.maxUploadRetryTime);return _.urlParams=p,_.headers=a,_.body=h.uploadData(),_.errorHandler=K(t),_}(e.storage,e._location,q(),new P(t,!0),n);return e.storage.makeRequestWithTokens(r,G).then(t=>({metadata:t,ref:e}))}(e=(0,l.m9)(e),t,n)}function er(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,n){let r=new H(A(t.fullServerUrl(),e.host,e._protocol),"GET",function(t,r){let o=j(e,r,n);return z(null!==o),function(e,t,n,r){let o=S(t);if(null===o||!T(o.downloadTokens))return null;let s=o.downloadTokens;if(0===s.length)return null;let i=encodeURIComponent;return s.split(",").map(t=>{let o=e.bucket,s=e.fullPath;return A("/b/"+i(o)+"/o/"+i(s),n,r)+v({alt:"media",token:t})})[0]}(o,r,e.host,e._protocol)},e.maxOperationRetryTime);return r.errorHandler=W(t),r}(e.storage,e._location,q());return e.storage.makeRequestWithTokens(t,G).then(e=>{if(null===e)throw new d(s.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function eo(e){return function(e){e._throwIfRoot("deleteObject");let t=function(e,t){let n=new H(A(t.fullServerUrl(),e.host,e._protocol),"DELETE",function(e,t){},e.maxOperationRetryTime);return n.successCodes=[200,204],n.errorHandler=W(t),n}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,G)}(e=(0,l.m9)(e))}function es(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,n){if(t instanceof Q){if(null==t._bucket)throw new d(s.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");let r=new J(t,t._bucket);return null!=n?e(r,n):r}return void 0!==n?function(e,t){let n=function(e,t){let n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new w(e._location.bucket,n);return new J(e.storage,r)}(t,n):t}(e,t);if(e instanceof Q)return new J(e,t);throw f("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function ei(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,a.Mq)(),t=arguments.length>1?arguments[1]:void 0;e=(0,l.m9)(e);let n=(0,a.qX)(e,et).getImmediate({identifier:t}),r=(0,l.P0)("storage");return r&&function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.host="".concat(t,":").concat(n),e._protocol="http";let{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"==typeof o?o:(0,l.Sg)(o,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}(0,a.Xd)(new u.wA(et,function(e,t){let{instanceIdentifier:n}=t;return new Q(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)($,ee,""),(0,a.KN)($,ee,"esm2017")}}]);