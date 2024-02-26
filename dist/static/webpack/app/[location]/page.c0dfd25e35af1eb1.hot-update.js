"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[location]/page",{

/***/ "(app-pages-browser)/./app/[location]/postView/postContent.tsx":
/*!*************************************************!*\
  !*** ./app/[location]/postView/postContent.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_create_pointSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/create/pointSelection */ \"(app-pages-browser)/./app/create/pointSelection.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction PostContent(props) {\n    _s();\n    const { post, isModify, postId, idToken, setIsModify } = props;\n    const selectedPoint = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_4__.selectedPointStore);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const inputStyle = \"text-black focus:outline-none rounded-md border-[1px] w-[12vw] p-2\";\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(post);\n        if (post) {\n            setTitle(post.title);\n            setContent(post.content);\n        }\n    }, [\n        post\n    ]);\n    const handleClickModify = ()=>{\n        fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts/\".concat(postId, \"?updateMask.fieldPaths=title&updateMask.fieldPaths=content&updateMask.fieldPaths=point\"), {\n            method: \"PATCH\",\n            headers: {\n                \"Authorization\": \"Bearer \".concat(idToken)\n            },\n            body: JSON.stringify({\n                fields: {\n                    title: {\n                        stringValue: title\n                    },\n                    content: {\n                        stringValue: content\n                    },\n                    point: {\n                        stringValue: selectedPoint\n                    }\n                }\n            })\n        }).then(()=>{\n            console.log(\"수정 완료\");\n            setIsModify(false);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isModify ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_create_pointSelection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    curSelectedPoint: post === null || post === void 0 ? void 0 : post.point\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: title,\n                    onChange: (e)=>setTitle(e.target.value),\n                    className: \"\".concat(inputStyle, \" nnb\")\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    value: content,\n                    onChange: (e)=>setContent(e.target.value),\n                    className: \"\".concat(inputStyle, \" nnn text-[0.8rem]\")\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClickModify,\n                    className: \"w-[12vw] bg-[#003545] rounded-md text-sm py-1\",\n                    children: \"수정\"\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    className: \"nnb\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    className: \"text-[0.8rem] nnn\",\n                    children: content\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap\",\n                    children: post === null || post === void 0 ? void 0 : post.tags.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-400 text-[0.8rem] mr-1 cursor-pointer\",\n                            children: [\n                                \"#\",\n                                item.stringValue\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s(PostContent, \"3Q1rloLN0IAVEdDrUnQsEscfCiU=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue\n    ];\n});\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3Bvc3RDb250ZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFeUQ7QUFDRTtBQUNMO0FBQzBDO0FBVWpGLFNBQVNLLFlBQVlDLEtBQVU7O0lBQzFDLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUMsR0FBR0w7SUFDdkQsTUFBTU0sZ0JBQWdCWCxzREFBY0EsQ0FBQ0csMEVBQWtCQTtJQUN2RCxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFTO0lBQy9DLE1BQU1jLGFBQWE7SUFFbkJmLGdEQUFTQSxDQUFDO1FBQ05nQixRQUFRQyxHQUFHLENBQUNaO1FBQ1osSUFBR0EsTUFBTTtZQUNMTyxTQUFTUCxLQUFLTSxLQUFLO1lBQ25CRyxXQUFXVCxLQUFLUSxPQUFPO1FBQzNCO0lBQ0osR0FBRztRQUFDUjtLQUFLO0lBRVQsTUFBTWEsb0JBQW9CO1FBQ3RCQyxNQUFNLHlHQUFnSCxPQUFQWixRQUFPLDJGQUF5RjtZQUMzTWEsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGlCQUFpQixVQUFrQixPQUFSYjtZQUMvQjtZQUNBYyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCQyxRQUFRO29CQUNKZCxPQUFPO3dCQUFFZSxhQUFhZjtvQkFBTTtvQkFDNUJFLFNBQVM7d0JBQUVhLGFBQWFiO29CQUFRO29CQUNoQ2MsT0FBTzt3QkFBRUQsYUFBYWhCO29CQUFjO2dCQUN4QztZQUNKO1FBQ0osR0FDQ2tCLElBQUksQ0FBQztZQUNGWixRQUFRQyxHQUFHLENBQUM7WUFDWlIsWUFBWTtRQUNoQixHQUNDb0IsS0FBSyxDQUFDLENBQUNDLE1BQU9kLFFBQVFDLEdBQUcsQ0FBQ2E7SUFDL0I7SUFFQSxxQkFDSSw4REFBQ0M7a0JBQ0N6Qix5QkFDRSw4REFBQ3lCOzs4QkFDRyw4REFBQ2pDLGtFQUFjQTtvQkFBQ2tDLGdCQUFnQixFQUFFM0IsaUJBQUFBLDJCQUFBQSxLQUFNc0IsS0FBSzs7Ozs7OzhCQUM3Qyw4REFBQ007b0JBQ0dDLE9BQU92QjtvQkFDUHdCLFVBQVUsQ0FBQ0MsSUFBSXhCLFNBQVN3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7b0JBQ3RDSSxXQUFXLEdBQWMsT0FBWHZCLFlBQVc7Ozs7Ozs4QkFFN0IsOERBQUN3QjtvQkFDR0wsT0FBT3JCO29CQUNQc0IsVUFBVSxDQUFDQyxJQUFJdEIsV0FBV3NCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFDeENJLFdBQVcsR0FBYyxPQUFYdkIsWUFBVzs7Ozs7OzhCQUU3Qiw4REFBQ3lCO29CQUNHQyxTQUFTdkI7b0JBQ1RvQixXQUFVOzhCQUNiOzs7Ozs7Ozs7OztpQ0FLTCw4REFBQ1A7OzhCQUNHLDhEQUFDVztvQkFBSUosV0FBVTs4QkFBTzNCOzs7Ozs7OEJBQ3RCLDhEQUFDK0I7b0JBQUlKLFdBQVU7OEJBQXFCekI7Ozs7Ozs4QkFDcEMsOERBQUNrQjtvQkFBSU8sV0FBVTs4QkFDYmpDLGlCQUFBQSwyQkFBQUEsS0FBTXNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQTJCQzt3QkFDekMscUJBQ0ksOERBQUNDOzRCQUVHVCxXQUFVOztnQ0FDYjtnQ0FDS08sS0FBS25CLFdBQVc7OzJCQUhib0I7Ozs7O29CQU1qQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEI7R0FoRndCM0M7O1FBRUVKLGtEQUFjQTs7O0tBRmhCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xvY2F0aW9uXS9wb3N0Vmlldy9wb3N0Q29udGVudC50c3g/M2E4OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBQb2ludFNlbGVjdGlvbiBmcm9tIFwiQC9hcHAvY3JlYXRlL3BvaW50U2VsZWN0aW9uXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUG9zdFR5cGUsIGlzUG9zdFZpZXdPcGVuU3RvcmUsIHNlbGVjdGVkUG9pbnRTdG9yZSB9IGZyb20gXCJAL2FwcC9yZWNvaWxDb250ZXh0UHJvdmlkZXJcIjtcblxudHlwZSBQcm9wID0ge1xuICAgIHBvc3Q6UG9zdFR5cGV8bnVsbCwgXG4gICAgaXNNb2RpZnk6Ym9vbGVhbiwgXG4gICAgc2V0SXNNb2RpZnk6RGlzcGF0Y2g8Ym9vbGVhbj4sIFxuICAgIHBvc3RJZDpzdHJpbmcsIFxuICAgIGlkVG9rZW46c3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb250ZW50KHByb3BzOlByb3ApIHtcbiAgICBjb25zdCB7cG9zdCwgaXNNb2RpZnksIHBvc3RJZCwgaWRUb2tlbiwgc2V0SXNNb2RpZnl9ID0gcHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRQb2ludCA9IHVzZVJlY29pbFZhbHVlKHNlbGVjdGVkUG9pbnRTdG9yZSk7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IFwidGV4dC1ibGFjayBmb2N1czpvdXRsaW5lLW5vbmUgcm91bmRlZC1tZCBib3JkZXItWzFweF0gdy1bMTJ2d10gcC0yXCJcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QpO1xuICAgICAgICBpZihwb3N0KSB7XG4gICAgICAgICAgICBzZXRUaXRsZShwb3N0LnRpdGxlKTtcbiAgICAgICAgICAgIHNldENvbnRlbnQocG9zdC5jb250ZW50KTtcbiAgICAgICAgfVxuICAgIH0sIFtwb3N0XSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrTW9kaWZ5ID0gKCkgPT4geyAgXG4gICAgICAgIGZldGNoKGBodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy9kYWVkb25neW91cm1hcC1hZDYzZC9kYXRhYmFzZXMvKGRlZmF1bHQpL2RvY3VtZW50cy9wb3N0cy8ke3Bvc3RJZH0/dXBkYXRlTWFzay5maWVsZFBhdGhzPXRpdGxlJnVwZGF0ZU1hc2suZmllbGRQYXRocz1jb250ZW50JnVwZGF0ZU1hc2suZmllbGRQYXRocz1wb2ludGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2lkVG9rZW59YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHsgc3RyaW5nVmFsdWU6IHRpdGxlIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgc3RyaW5nVmFsdWU6IGNvbnRlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHsgc3RyaW5nVmFsdWU6IHNlbGVjdGVkUG9pbnQgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuyImOyglSDsmYTro4xcIik7IFxuICAgICAgICAgICAgc2V0SXNNb2RpZnkoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycik9PiBjb25zb2xlLmxvZyhlcnIpICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgeyBpc01vZGlmeSA/IFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UG9pbnRTZWxlY3Rpb24gY3VyU2VsZWN0ZWRQb2ludD17cG9zdD8ucG9pbnR9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lucHV0U3R5bGV9IG5uYmB9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbnB1dFN0eWxlfSBubm4gdGV4dC1bMC44cmVtXWB9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tNb2RpZnl9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsxMnZ3XSBiZy1bIzAwMzU0NV0gcm91bmRlZC1tZCB0ZXh0LXNtIHB5LTFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg7IiY7KCVXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJubmJcIj57dGl0bGV9PC9wcmU+IFxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwidGV4dC1bMC44cmVtXSBubm5cIj57Y29udGVudH08L3ByZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgeyBwb3N0Py50YWdzLm1hcCgoaXRlbTp7c3RyaW5nVmFsdWU6c3RyaW5nfSwgaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtWzAuOHJlbV0gbXItMSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3tpdGVtLnN0cmluZ1ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUG9pbnRTZWxlY3Rpb24iLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWRQb2ludFN0b3JlIiwiUG9zdENvbnRlbnQiLCJwcm9wcyIsInBvc3QiLCJpc01vZGlmeSIsInBvc3RJZCIsImlkVG9rZW4iLCJzZXRJc01vZGlmeSIsInNlbGVjdGVkUG9pbnQiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpbnB1dFN0eWxlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrTW9kaWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWVsZHMiLCJzdHJpbmdWYWx1ZSIsInBvaW50IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY3VyU2VsZWN0ZWRQb2ludCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmUiLCJ0YWdzIiwibWFwIiwiaXRlbSIsImluZGV4IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postView/postContent.tsx\n"));

/***/ })

});