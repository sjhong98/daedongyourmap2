(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{4331:function(e,t,n){Promise.resolve().then(n.bind(n,431))},431:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Create}});var a=n(230),r=n(7437),l=n(2265);async function UploadPost(e){let{title:t,content:n,idToken:a,selectedPoint:r}=e,l=localStorage.getItem("ddym-email"),o={fields:{title:{stringValue:t},content:{stringValue:n},photo:{arrayValue:{values:[]}},time:{stringValue:new Date().toISOString()},point:{stringValue:r},comments:{arrayValue:{values:[]}},likes:{arrayValue:{values:[]}},user:{stringValue:l},createTime:{doubleValue:+new Date}}},u=await fetch("https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts",{method:"POST",headers:{Authorization:"Bearer ".concat(a)},body:JSON.stringify(o)}),s=u.json();return s.then(e=>e.name).catch(e=>console.log("upload post err : ",e)),s}var o=n(5883),u=n(62),s=n(994),c=n(9584),i=n(5075);let patchURL=(e,t,n,a,r)=>{let l=e.slice(0,-2);fetch("https://firestore.googleapis.com/v1/".concat(l,"?updateMask.fieldPaths=photo"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t)},body:JSON.stringify(r)}).then(()=>{a(n)}).catch(e=>console.log(e))};var d=n(1806),h=n(209);function _templateObject(){let e=(0,a._)(["\n    transition: 0.15s ease;\n    &:hover {\n        background-color: #003545;\n        color: white;\n    }\n"]);return _templateObject=function(){return e},e}function InputImage(e){let{image:t,setImage:n}=e,handleDeleteImage=e=>{let a=[...t];a.splice(e,1),n(a)};return(0,r.jsxs)("div",{className:"w-[20vw] h-[10vh]",children:[(0,r.jsx)("input",{id:"input-image",type:"file",multiple:!0,onChange:e=>{let a=[...t];a.push(e.target.files[0]),n(a)},accept:".png, .jpg, .jpeg, .HEIC, image/*",className:"hidden"}),(0,r.jsx)(m,{htmlFor:"input-image",className:"cursor-pointer lml mc bg-white rounded-md center",children:"upload image"}),(0,r.jsx)("div",{className:"w-full h-full p-2 flex justify-center",children:t.map((e,t)=>{let n=URL.createObjectURL(e);return(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:n,alt:"...",className:"h-[5vh] aspect-square object-cover mr-2"}),(0,r.jsx)("div",{className:"absolute w-[1vw] h-[1vw] bg-black mt-[-1.5vh] center cursor-pointer",onClick:()=>handleDeleteImage(t),children:(0,r.jsx)(h.Z,{sx:{width:20}})})]},t)})})]})}let m=d.ZP.label(_templateObject());var p=n(7739),g=n(2106);function PointSelection(){let[e,t]=(0,o.FV)(u.selectedPointStore);return(0,r.jsxs)(g.Z,{value:e,label:"지역",onChange:e=>{t(e.target.value)},className:"w-[20vw]",sx:{backgroundColor:"white",height:"3vh",marginBottom:"2vh"},children:[(0,r.jsx)(p.Z,{value:"seoul",children:"서울"}),(0,r.jsx)(p.Z,{value:"incheon",children:"인천"}),(0,r.jsx)(p.Z,{value:"gangwon",children:"강원"}),(0,r.jsx)(p.Z,{value:"jeju",children:"제주"}),(0,r.jsx)(p.Z,{value:"gyeonggi",children:"경기"}),(0,r.jsx)(p.Z,{value:"busan",children:"부산"}),(0,r.jsx)(p.Z,{value:"daegu",children:"대구"}),(0,r.jsx)(p.Z,{value:"kyungnam",children:"경상남도"}),(0,r.jsx)(p.Z,{value:"kyungbuk",children:"경상북도"}),(0,r.jsx)(p.Z,{value:"jeonnam",children:"전라남도"}),(0,r.jsx)(p.Z,{value:"jeonbuk",children:"전라북도"}),(0,r.jsx)(p.Z,{value:"chungnam",children:"충청남도"}),(0,r.jsx)(p.Z,{value:"chungbuk",children:"충청북도"}),(0,r.jsx)(p.Z,{value:"daejeon",children:"대전"}),(0,r.jsx)(p.Z,{value:"gwangju",children:"광주"}),(0,r.jsx)(p.Z,{value:"ulsan",children:"울산"})]})}var f=n(4033),j=n(6882);function Loading(){return(0,r.jsx)("div",{children:(0,r.jsx)(j.Z,{className:"mb-4"})})}function page_templateObject(){let e=(0,a._)(["\n    transition: 0.3s ease;\n    &:hover {\n        background-color: #003545;\n        color: white;\n    }\n"]);return page_templateObject=function(){return e},e}function _templateObject1(){let e=(0,a._)(["\n    &:focus {\n        outline: none;\n    }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,a._)(["\n    &:focus {\n        outline: none;\n    }\n"]);return _templateObject2=function(){return e},e}function Create(){let e=(0,f.useRouter)(),t=(0,o.sJ)(u.idTokenStore),n=(0,o.sJ)(u.isLoginStore),[a,d]=(0,l.useState)([]),[h,m]=(0,l.useState)(""),[p,g]=(0,l.useState)(""),[j,w]=(0,l.useState)(!1),[k,y]=(0,l.useState)(!1),S=(0,o.sJ)(u.selectedPointStore),_="text-black mb-6 w-[20vw] rounded-md px-3",routerToMain=t=>{e.push("/".concat(t))};return(0,l.useEffect)(()=>{n||e.push("/signin")},[]),(0,l.useEffect)(()=>{""!==h&&a.length>0&&""!==S?y(!0):y(!1)},[h,a]),(0,r.jsxs)("div",{className:"flex flex-col center bg-stone-800 rounded-2xl w-[40vw] min-h-[60vh] shadow-2xl",children:[j?(0,r.jsx)(Loading,{}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("p",{className:"text-3xl lml text-white mb-8",children:"New Post"}),(0,r.jsx)(PointSelection,{}),(0,r.jsx)(InputImage,{image:a,setImage:d}),(0,r.jsx)(x,{value:h,placeholder:"title",onChange:e=>m(e.target.value),className:_}),(0,r.jsx)(b,{value:p,placeholder:"content",onChange:e=>g(e.target.value),className:_}),j?(0,r.jsx)(r.Fragment,{}):k?(0,r.jsx)(v,{onClick:()=>{UploadPost({title:h,content:p,idToken:t,selectedPoint:S}).then(e=>{(function(e,t,n,a,r){let l,o;(0,s.ZF)(i.q);let u=(0,c.cF)(),d=[];e.map((e,s)=>{let i="".concat(n,"-").concat(s);o=(0,c.iH)(u,i),(0,c.KV)(o,e).then(e=>{l=e.metadata.fullPath,(0,c.Jt)((0,c.iH)(u,l)).then(e=>{d.push({stringValue:e}),patchURL(l,t,a,r,{fields:{photo:{arrayValue:{values:d}}}})})})})})(a,t,e.name,S,routerToMain),w(!0)})},className:"lml rounded-md bg-white text-black w-[20vw]",children:"upload"}):(0,r.jsx)(r.Fragment,{})]})}let v=d.ZP.button(page_templateObject()),x=d.ZP.input(_templateObject1()),b=d.ZP.textarea(_templateObject2())},62:function(e,t,n){"use strict";n.r(t),n.d(t,{curComments:function(){return u},curPostStore:function(){return d},default:function(){return RecoilContextProvider},idTokenStore:function(){return s},isLoginStore:function(){return o},isPostViewOpenStore:function(){return h},profileStore:function(){return l},selectedPointStore:function(){return i},userDataStore:function(){return c}});var a=n(7437);n(2265);var r=n(5883);let l=(0,r.cn)({key:"profile",default:{}}),o=(0,r.cn)({key:"isLogin",default:!1}),u=(0,r.cn)({key:"curComments",default:""}),s=(0,r.cn)({key:"idTokenStore",default:""}),c=(0,r.cn)({key:"userDataStore",default:null}),i=(0,r.cn)({key:"selectedPointStore",default:""}),d=(0,r.cn)({key:"curPostStore",default:null}),h=(0,r.cn)({key:"isPostViewOpen",default:!1});function RecoilContextProvider(e){let{children:t}=e;return(0,a.jsx)(r.Wh,{children:t})}},5075:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});let a={apiKey:"AIzaSyCA6Q_TA6dyl7wf2BtR_V_oEVIW2_Q94y0",authDomain:"daedongyourmap-ad63d.firebaseapp.com",projectId:"daedongyourmap-ad63d",storageBucket:"daedongyourmap-ad63d.appspot.com",messagingSenderId:"68098855208",appId:"1:68098855208:web:aa0e9a5602074a3b6c401d",measurementId:"G-7X00QEEQ08"}}},function(e){e.O(0,[691,928,13,472,92,732,584,838,971,864,744],function(){return e(e.s=4331)}),_N_E=e.O()}]);