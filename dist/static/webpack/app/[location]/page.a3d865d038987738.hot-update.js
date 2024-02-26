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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_create_pointSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/create/pointSelection */ \"(app-pages-browser)/./app/create/pointSelection.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction PostContent(props) {\n    _s();\n    const { post, isModify, postId, idToken, setIsModify } = props;\n    const selectedPoint = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_4__.selectedPointStore);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const inputStyle = \"text-black focus:outline-none rounded-md border-[1px] w-[12vw] p-2\";\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(post);\n        if (post) {\n            setTitle(post.title);\n            setContent(post.content);\n        }\n    }, [\n        post\n    ]);\n    const handleClickModify = ()=>{\n        fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/posts/\".concat(postId, \"?updateMask.fieldPaths=title&updateMask.fieldPaths=content&updateMask.fieldPaths=point\"), {\n            method: \"PATCH\",\n            headers: {\n                \"Authorization\": \"Bearer \".concat(idToken)\n            },\n            body: JSON.stringify({\n                fields: {\n                    title: {\n                        stringValue: title\n                    },\n                    content: {\n                        stringValue: content\n                    },\n                    point: {\n                        stringValue: selectedPoint\n                    }\n                }\n            })\n        }).then(()=>{\n            console.log(\"수정 완료\");\n            setIsModify(false);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isModify ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_create_pointSelection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    curSelectedPoint: post === null || post === void 0 ? void 0 : post.point\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: title,\n                    onChange: (e)=>setTitle(e.target.value),\n                    className: \"\".concat(inputStyle, \" nnb\")\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    value: content,\n                    onChange: (e)=>setContent(e.target.value),\n                    className: \"\".concat(inputStyle, \" nnn text-[0.8rem]\")\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClickModify,\n                    className: \"w-[12vw] bg-[#003545] rounded-md text-sm py-1\",\n                    children: \"수정\"\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    className: \"nnb\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    className: \"text-[0.8rem] nnn\",\n                    children: content\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap\",\n                    children: post === null || post === void 0 ? void 0 : post.tags.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-400 text-[0.8rem] mr-1\",\n                            children: [\n                                \"#\",\n                                item.stringValue\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s(PostContent, \"3Q1rloLN0IAVEdDrUnQsEscfCiU=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue\n    ];\n});\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3Bvc3RDb250ZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFeUQ7QUFDRTtBQUNMO0FBQzBDO0FBVWpGLFNBQVNLLFlBQVlDLEtBQVU7O0lBQzFDLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUMsR0FBR0w7SUFDdkQsTUFBTU0sZ0JBQWdCWCxzREFBY0EsQ0FBQ0csMEVBQWtCQTtJQUN2RCxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFTO0lBQy9DLE1BQU1jLGFBQWE7SUFFbkJmLGdEQUFTQSxDQUFDO1FBQ05nQixRQUFRQyxHQUFHLENBQUNaO1FBQ1osSUFBR0EsTUFBTTtZQUNMTyxTQUFTUCxLQUFLTSxLQUFLO1lBQ25CRyxXQUFXVCxLQUFLUSxPQUFPO1FBQzNCO0lBQ0osR0FBRztRQUFDUjtLQUFLO0lBRVQsTUFBTWEsb0JBQW9CO1FBQ3RCQyxNQUFNLHlHQUFnSCxPQUFQWixRQUFPLDJGQUF5RjtZQUMzTWEsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGlCQUFpQixVQUFrQixPQUFSYjtZQUMvQjtZQUNBYyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCQyxRQUFRO29CQUNKZCxPQUFPO3dCQUFFZSxhQUFhZjtvQkFBTTtvQkFDNUJFLFNBQVM7d0JBQUVhLGFBQWFiO29CQUFRO29CQUNoQ2MsT0FBTzt3QkFBRUQsYUFBYWhCO29CQUFjO2dCQUN4QztZQUNKO1FBQ0osR0FDQ2tCLElBQUksQ0FBQztZQUNGWixRQUFRQyxHQUFHLENBQUM7WUFDWlIsWUFBWTtRQUNoQixHQUNDb0IsS0FBSyxDQUFDLENBQUNDLE1BQU9kLFFBQVFDLEdBQUcsQ0FBQ2E7SUFDL0I7SUFFQSxxQkFDSSw4REFBQ0M7a0JBQ0N6Qix5QkFDRSw4REFBQ3lCOzs4QkFDRyw4REFBQ2pDLGtFQUFjQTtvQkFBQ2tDLGdCQUFnQixFQUFFM0IsaUJBQUFBLDJCQUFBQSxLQUFNc0IsS0FBSzs7Ozs7OzhCQUM3Qyw4REFBQ007b0JBQ0dDLE9BQU92QjtvQkFDUHdCLFVBQVUsQ0FBQ0MsSUFBSXhCLFNBQVN3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7b0JBQ3RDSSxXQUFXLEdBQWMsT0FBWHZCLFlBQVc7Ozs7Ozs4QkFFN0IsOERBQUN3QjtvQkFDR0wsT0FBT3JCO29CQUNQc0IsVUFBVSxDQUFDQyxJQUFJdEIsV0FBV3NCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFDeENJLFdBQVcsR0FBYyxPQUFYdkIsWUFBVzs7Ozs7OzhCQUU3Qiw4REFBQ3lCO29CQUNHQyxTQUFTdkI7b0JBQ1RvQixXQUFVOzhCQUNiOzs7Ozs7Ozs7OztpQ0FLTCw4REFBQ1A7OzhCQUNHLDhEQUFDVztvQkFBSUosV0FBVTs4QkFBTzNCOzs7Ozs7OEJBQ3RCLDhEQUFDK0I7b0JBQUlKLFdBQVU7OEJBQXFCekI7Ozs7Ozs4QkFDcEMsOERBQUNrQjtvQkFBSU8sV0FBVTs4QkFDYmpDLGlCQUFBQSwyQkFBQUEsS0FBTXNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQTJCQzt3QkFDekMscUJBQ0ksOERBQUNDOzRCQUFjVCxXQUFVOztnQ0FBbUM7Z0NBQUVPLEtBQUtuQixXQUFXOzsyQkFBdEVvQjs7Ozs7b0JBRWhCOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQjtHQTNFd0IzQzs7UUFFRUosa0RBQWNBOzs7S0FGaEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3Bvc3RDb250ZW50LnRzeD8zYTg4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFBvaW50U2VsZWN0aW9uIGZyb20gXCJAL2FwcC9jcmVhdGUvcG9pbnRTZWxlY3Rpb25cIjtcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IERpc3BhdGNoLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3N0VHlwZSwgaXNQb3N0Vmlld09wZW5TdG9yZSwgc2VsZWN0ZWRQb2ludFN0b3JlIH0gZnJvbSBcIkAvYXBwL3JlY29pbENvbnRleHRQcm92aWRlclwiO1xuXG50eXBlIFByb3AgPSB7XG4gICAgcG9zdDpQb3N0VHlwZXxudWxsLCBcbiAgICBpc01vZGlmeTpib29sZWFuLCBcbiAgICBzZXRJc01vZGlmeTpEaXNwYXRjaDxib29sZWFuPiwgXG4gICAgcG9zdElkOnN0cmluZywgXG4gICAgaWRUb2tlbjpzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENvbnRlbnQocHJvcHM6UHJvcCkge1xuICAgIGNvbnN0IHtwb3N0LCBpc01vZGlmeSwgcG9zdElkLCBpZFRva2VuLCBzZXRJc01vZGlmeX0gPSBwcm9wcztcbiAgICBjb25zdCBzZWxlY3RlZFBvaW50ID0gdXNlUmVjb2lsVmFsdWUoc2VsZWN0ZWRQb2ludFN0b3JlKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBpbnB1dFN0eWxlID0gXCJ0ZXh0LWJsYWNrIGZvY3VzOm91dGxpbmUtbm9uZSByb3VuZGVkLW1kIGJvcmRlci1bMXB4XSB3LVsxMnZ3XSBwLTJcIlxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocG9zdCk7XG4gICAgICAgIGlmKHBvc3QpIHtcbiAgICAgICAgICAgIHNldFRpdGxlKHBvc3QudGl0bGUpO1xuICAgICAgICAgICAgc2V0Q29udGVudChwb3N0LmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfSwgW3Bvc3RdKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tNb2RpZnkgPSAoKSA9PiB7ICBcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vZmlyZXN0b3JlLmdvb2dsZWFwaXMuY29tL3YxL3Byb2plY3RzL2RhZWRvbmd5b3VybWFwLWFkNjNkL2RhdGFiYXNlcy8oZGVmYXVsdCkvZG9jdW1lbnRzL3Bvc3RzLyR7cG9zdElkfT91cGRhdGVNYXNrLmZpZWxkUGF0aHM9dGl0bGUmdXBkYXRlTWFzay5maWVsZFBhdGhzPWNvbnRlbnQmdXBkYXRlTWFzay5maWVsZFBhdGhzPXBvaW50YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7aWRUb2tlbn1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogeyBzdHJpbmdWYWx1ZTogdGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyBzdHJpbmdWYWx1ZTogY29udGVudCB9LFxuICAgICAgICAgICAgICAgICAgICBwb2ludDogeyBzdHJpbmdWYWx1ZTogc2VsZWN0ZWRQb2ludCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4geyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi7IiY7KCVIOyZhOujjFwiKTsgXG4gICAgICAgICAgICBzZXRJc01vZGlmeShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKT0+IGNvbnNvbGUubG9nKGVycikgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICB7IGlzTW9kaWZ5ID8gXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQb2ludFNlbGVjdGlvbiBjdXJTZWxlY3RlZFBvaW50PXtwb3N0Py5wb2ludH0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5wdXRTdHlsZX0gbm5iYH0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lucHV0U3R5bGV9IG5ubiB0ZXh0LVswLjhyZW1dYH0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja01vZGlmeX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzEydnddIGJnLVsjMDAzNTQ1XSByb3VuZGVkLW1kIHRleHQtc20gcHktMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDsiJjsoJVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm5uYlwiPnt0aXRsZX08L3ByZT4gXG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJ0ZXh0LVswLjhyZW1dIG5ublwiPntjb250ZW50fTwvcHJlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7IHBvc3Q/LnRhZ3MubWFwKChpdGVtOntzdHJpbmdWYWx1ZTpzdHJpbmd9LCBpbmRleDpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1bMC44cmVtXSBtci0xXCI+I3tpdGVtLnN0cmluZ1ZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlBvaW50U2VsZWN0aW9uIiwidXNlUmVjb2lsVmFsdWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUG9pbnRTdG9yZSIsIlBvc3RDb250ZW50IiwicHJvcHMiLCJwb3N0IiwiaXNNb2RpZnkiLCJwb3N0SWQiLCJpZFRva2VuIiwic2V0SXNNb2RpZnkiLCJzZWxlY3RlZFBvaW50IiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaW5wdXRTdHlsZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGlja01vZGlmeSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmllbGRzIiwic3RyaW5nVmFsdWUiLCJwb2ludCIsInRoZW4iLCJjYXRjaCIsImVyciIsImRpdiIsImN1clNlbGVjdGVkUG9pbnQiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIiwicHJlIiwidGFncyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postView/postContent.tsx\n"));

/***/ })

});