"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{9584:function(e,t,r){r.d(t,{Jt:function(){return getDownloadURL},cF:function(){return getStorage},iH:function(){return ref},KV:function(){return uploadBytes}});var n,o,s,i,a=r(3991),l=r(8745),u=r(5538);/**
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
 */let StorageError=class StorageError extends l.ZR{constructor(e,t,r=0){super(prependCode(e),`Firebase Storage: ${t} (${prependCode(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,StorageError.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return prependCode(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}};function prependCode(e){return"storage/"+e}function unknown(){return new StorageError(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function invalidArgument(e){return new StorageError(s.INVALID_ARGUMENT,e)}function appDeleted(){return new StorageError(s.APP_DELETED,"The Firebase app was deleted.")}function invalidFormat(e,t){return new StorageError(s.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function internalError(e){throw new StorageError(s.INTERNAL_ERROR,"Internal error: "+e)}(n=s||(s={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
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
 */let Location=class Location{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Location.makeFromUrl(e,t)}catch(t){return new Location(e,"")}if(""===r.path)return r;throw new StorageError(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",o=RegExp("^gs://"+n+"(/(.*))?$","i");function httpModify(e){e.path_=decodeURIComponent(e.path)}let i=t.replace(/[.]/g,"\\."),a=RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===c?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),u=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:httpModify},{regex:l,indices:{bucket:1,path:2},postModify:httpModify}];for(let t=0;t<u.length;t++){let n=u[t],o=n.regex.exec(e);if(o){let e=o[n.indices.bucket],t=o[n.indices.path];t||(t=""),r=new Location(e,t),n.postModify(r);break}}if(null==r)throw new StorageError(s.INVALID_URL,"Invalid URL '"+e+"'.");return r}};let FailRequest=class FailRequest{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function isString(e){return"string"==typeof e||e instanceof String}function isNativeBlob(e){return isNativeBlobDefined()&&e instanceof Blob}function isNativeBlobDefined(){return"undefined"!=typeof Blob}function validateNumber(e,t,r,n){if(n<t)throw invalidArgument(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw invalidArgument(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function makeUrl(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function makeQueryString(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let o=t(n)+"="+t(e[n]);r=r+o+"&"}return r.slice(0,-1)}(o=i||(i={}))[o.NO_ERROR=0]="NO_ERROR",o[o.NETWORK_ERROR=1]="NETWORK_ERROR",o[o.ABORT=2]="ABORT";/**
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
 */let NetworkRequest=class NetworkRequest{constructor(e,t,r,n,o,s,i,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let backoffDone=(e,t)=>{let r=this.resolve_,n=this.reject_,o=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(o,o.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==o){let e=unknown();e.serverResponse=o.getErrorText(),n(this.errorCallback_?this.errorCallback_(o,e):e)}else if(t.canceled){let e=this.appDelete_?appDeleted():new StorageError(s.CANCELED,"User canceled the upload/download.");n(e)}else{let e=new StorageError(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");n(e)}};this.canceled_?backoffDone(!1,new RequestEndStatus(!1,null,!0)):this.backoffId_=/**
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
 */function(e,t,r){let n=1,o=null,s=null,i=!1,a=0,l=!1;function triggerCallback(...e){l||(l=!0,t.apply(null,e))}function callWithDelay(t){o=setTimeout(()=>{o=null,e(responseHandler,2===a)},t)}function clearGlobalTimeout(){s&&clearTimeout(s)}function responseHandler(e,...t){let r;if(l){clearGlobalTimeout();return}if(e){clearGlobalTimeout(),triggerCallback.call(null,e,...t);return}let o=2===a||i;if(o){clearGlobalTimeout(),triggerCallback.call(null,e,...t);return}n<64&&(n*=2),1===a?(a=2,r=0):r=(n+Math.random())*1e3,callWithDelay(r)}let u=!1;function stop(e){!u&&(u=!0,clearGlobalTimeout(),!l&&(null!==o?(e||(a=2),clearTimeout(o),callWithDelay(0)):e||(a=1)))}return callWithDelay(0),s=setTimeout(()=>{i=!0,stop(!0)},r),stop}((e,t)=>{if(t){e(!1,new RequestEndStatus(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let progressListener=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(progressListener),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(progressListener),this.pendingConnection_=null;let t=r.getErrorCode()===i.NO_ERROR,n=r.getStatus();if(!t||/**
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
 */function(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return r||n||o}(n,this.additionalRetryCodes_)&&this.retry){let t=r.getErrorCode()===i.ABORT;e(!1,new RequestEndStatus(!1,null,t));return}let o=-1!==this.successCodes_.indexOf(n);e(!0,new RequestEndStatus(o,r))})},backoffDone,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}};let RequestEndStatus=class RequestEndStatus{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}};function getBlob$1(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(isNativeBlobDefined())return new Blob(e);throw new StorageError(s.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
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
 */let d={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};let StringData=class StringData{constructor(e,t){this.data=e,this.contentType=t||null}};function utf8Bytes_(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let o=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(o){let o=n,s=e.charCodeAt(++r);n=65536|(1023&o)<<10|1023&s,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function base64Bytes_(e,t){let r;switch(e){case d.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw invalidFormat(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case d.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw invalidFormat(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
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
 */function(e){if("undefined"==typeof atob)throw new StorageError(s.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw invalidFormat(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}let DataURLParts=class DataURLParts{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw invalidFormat(d.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}};/**
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
 */let FbsBlob=class FbsBlob{constructor(e,t){let r=0,n="";isNativeBlob(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(isNativeBlob(this.data_)){let r=this.data_,n=r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new FbsBlob(n)}{let r=new Uint8Array(this.data_.buffer,e,t-e);return new FbsBlob(r,!0)}}static getBlob(...e){if(isNativeBlobDefined()){let t=e.map(e=>e instanceof FbsBlob?e.data_:e);return new FbsBlob(getBlob$1.apply(null,t))}{let t=e.map(e=>isString(e)?function(e,t){switch(e){case d.RAW:return new StringData(utf8Bytes_(t));case d.BASE64:case d.BASE64URL:return new StringData(base64Bytes_(e,t));case d.DATA_URL:return new StringData(function(e){let t=new DataURLParts(e);return t.base64?base64Bytes_(d.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw invalidFormat(d.DATA_URL,"Malformed data URL.")}return utf8Bytes_(t)}(t.rest)}(t),function(e){let t=new DataURLParts(e);return t.contentType}(t))}throw unknown()}(d.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),o=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[o++]=e[t]}),new FbsBlob(n,!0)}}uploadData(){return this.data_}};/**
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
 */function jsonObjectOrNull(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function lastComponent(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
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
 */function noXform_(e,t){return t}let Mapping=class Mapping{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||noXform_}};let p=null;function getMappings(){if(p)return p;let e=[];e.push(new Mapping("bucket")),e.push(new Mapping("generation")),e.push(new Mapping("metageneration")),e.push(new Mapping("name","fullPath",!0));let t=new Mapping("name");t.xform=function(e,t){return!isString(t)||t.length<2?t:lastComponent(t)},e.push(t);let r=new Mapping("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new Mapping("timeCreated")),e.push(new Mapping("updated")),e.push(new Mapping("md5Hash",null,!0)),e.push(new Mapping("cacheControl",null,!0)),e.push(new Mapping("contentDisposition",null,!0)),e.push(new Mapping("contentEncoding",null,!0)),e.push(new Mapping("contentLanguage",null,!0)),e.push(new Mapping("contentType",null,!0)),e.push(new Mapping("metadata","customMetadata",!0)),p=e}function fromResourceString(e,t,r){let n=jsonObjectOrNull(t);return null===n?null:function(e,t,r){let n={};n.type="file";let o=r.length;for(let e=0;e<o;e++){let o=r[e];n[o.local]=o.xform(n,t[o.server])}return Object.defineProperty(n,"ref",{get:function(){let t=n.bucket,r=n.fullPath,o=new Location(t,r);return e._makeStorageReference(o)}}),n}(e,n,r)}let RequestInfo=class RequestInfo{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};/**
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
 */function handlerCheck(e){if(!e)throw unknown()}function sharedErrorHandler(e){return function(t,r){var n,o;let i;return 401===t.getStatus()?i=t.getErrorText().includes("Firebase App Check token is invalid")?new StorageError(s.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new StorageError(s.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,i=new StorageError(s.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,i=new StorageError(s.UNAUTHORIZED,"User does not have permission to access '"+o+"'.")):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}}let XhrConnection=class XhrConnection{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=i.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=i.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=i.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw internalError("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw internalError("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw internalError("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw internalError("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw internalError("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}};let XhrTextConnection=class XhrTextConnection extends XhrConnection{initXhr(){this.xhr_.responseType="text"}};function newTextConnection(){return new XhrTextConnection}/**
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
 */let Reference=class Reference{constructor(e,t){this._service=e,t instanceof Location?this._location=t:this._location=Location.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Reference(e,t)}get root(){let e=new Location(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lastComponent(this._location.path)}get storage(){return this._service}get parent(){let e=/**
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
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new Location(this._location.bucket,e);return new Reference(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new StorageError(s.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}};function extractBucket(e,t){let r=null==t?void 0:t[h];return null==r?null:Location.makeFromBucketSpec(r,e)}let FirebaseStorageImpl=class FirebaseStorageImpl{constructor(e,t,r,n,o){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=o,this._bucket=null,this._host=c,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=Location.makeFromBucketSpec(n,this._host):this._bucket=extractBucket(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Location.makeFromBucketSpec(this._url,e):this._bucket=extractBucket(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Reference(this,e)}_makeRequest(e,t,r,n,o=!0){if(this._deleted)return new FailRequest(appDeleted());{let s=function(e,t,r,n,o,s,i=!0){let a=makeQueryString(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(u.Authorization="Firebase "+r),u["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==n&&(u["X-Firebase-AppCheck"]=n),new NetworkRequest(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,i)}(e,this._appId,r,n,t,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}};let f="@firebase/storage",_="0.12.1",g="storage";function uploadBytes(e,t,r){return function(e,t,r){e._throwIfRoot("uploadBytes");let n=function(e,t,r,n,o){let i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},l=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+l;let u=function(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}(t,n,o),c=function(e,t){let r={},n=t.length;for(let o=0;o<n;o++){let n=t[o];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}(u,r),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+l+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",d=FbsBlob.getBlob(h,n,"\r\n--"+l+"--");if(null===d)throw new StorageError(s.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");let p={name:u.fullPath},f=makeUrl(i,e.host,e._protocol),_=e.maxUploadRetryTime,g=new RequestInfo(f,"POST",function(t,n){let o=fromResourceString(e,n,r);return handlerCheck(null!==o),o},_);return g.urlParams=p,g.headers=a,g.body=d.uploadData(),g.errorHandler=sharedErrorHandler(t),g}(e.storage,e._location,getMappings(),new FbsBlob(t,!0),r);return e.storage.makeRequestWithTokens(n,newTextConnection).then(t=>({metadata:t,ref:e}))}(e=(0,l.m9)(e),t,r)}function getDownloadURL(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=t.fullServerUrl(),o=makeUrl(n,e.host,e._protocol),i=e.maxOperationRetryTime,a=new RequestInfo(o,"GET",function(t,n){let o=fromResourceString(e,n,r);return handlerCheck(null!==o),function(e,t,r,n){let o=jsonObjectOrNull(t);if(null===o||!isString(o.downloadTokens))return null;let s=o.downloadTokens;if(0===s.length)return null;let i=encodeURIComponent,a=s.split(","),l=a.map(t=>{let o=e.bucket,s=e.fullPath,a="/b/"+i(o)+"/o/"+i(s),l=makeUrl(a,r,n),u=makeQueryString({alt:"media",token:t});return l+u});return l[0]}(o,n,e.host,e._protocol)},i);return a.errorHandler=function(e){let t=sharedErrorHandler(e);return function(r,n){let o=t(r,n);if(404===r.getStatus()){var i;i=e.path,o=new StorageError(s.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}return o.serverResponse=n.serverResponse,o}}(t),a}(e.storage,e._location,getMappings());return e.storage.makeRequestWithTokens(t,newTextConnection).then(e=>{if(null===e)throw new StorageError(s.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function ref(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function refFromPath(e,t){if(e instanceof FirebaseStorageImpl){if(null==e._bucket)throw new StorageError(s.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");let r=new Reference(e,e._bucket);return null!=t?refFromPath(r,t):r}return void 0!==t?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new Location(e._location.bucket,r);return new Reference(e.storage,n)}(e,t):e}(e,t);if(e instanceof FirebaseStorageImpl)return new Reference(e,t);throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function getStorage(e=(0,a.Mq)(),t){e=(0,l.m9)(e);let r=(0,a.qX)(e,g),n=r.getImmediate({identifier:t}),o=(0,l.P0)("storage");return o&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:o}=n;o&&(e._overrideAuthToken="string"==typeof o?o:(0,l.Sg)(o,e.app.options.projectId))}(e,t,r,n)}(n,...o),n}(0,a.Xd)(new u.wA(g,function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new FirebaseStorageImpl(r,n,o,t,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(f,_,""),(0,a.KN)(f,_,"esm2017")}}]);