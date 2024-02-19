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

/***/ "(app-pages-browser)/./app/[location]/postBoard.tsx":
/*!**************************************!*\
  !*** ./app/[location]/postBoard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator */ \"(app-pages-browser)/./app/[location]/navigator.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* harmony import */ var _updatePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updatePost */ \"(app-pages-browser)/./app/[location]/updatePost.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [curPost, setCurPost] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.curPostStore);\n    const [curPostIndex, setCurPostIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(30);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [firstRender, setFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [postCreated, setPostCreated] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.postCreatedStore);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item, index)=>{\n        setCurPost(item);\n        setCurPostIndex(index);\n        setPostViewOpen(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // 해당 게시물 업데이트\n        const postId = curPost === null || curPost === void 0 ? void 0 : curPost.name.split(\"/\")[6];\n        if (postId !== undefined) {\n            (0,_updatePost__WEBPACK_IMPORTED_MODULE_8__.updatePost)(postId).then((res)=>{\n                let temp = [\n                    ...posts\n                ];\n                temp.splice(curPostIndex, 1, res[0]);\n                setPosts(temp);\n            });\n        }\n    }, [\n        postViewOpen\n    ]);\n    // useEffect(() => {\n    //     console.log(props.data2);\n    // }, [])\n    // postView 닫히면 post update\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (!firstRender || postCreated) {\n            let startUpdateIndex;\n            if (posts[startIndex - 1] !== undefined) startUpdateIndex = +posts[startIndex - 1].createTime; // 모든 게시물 최소 30개씩 만들고, 제대로 업데이트되는지 확인\n            else startUpdateIndex = +posts[posts.length - 30].createTime;\n            const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(props.location, startUpdateIndex);\n            res.then((res)=>{\n                let temp = [];\n                if (posts !== undefined) {\n                    temp = [\n                        ...posts\n                    ];\n                    temp.splice(startIndex - 30, 30, ...res);\n                    setPosts(temp);\n                    setPostCreated(false);\n                    console.log(\"post updated\", res);\n                }\n            });\n        } else setFirstRender(false);\n    }, [\n        postViewOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            // posts[startIndex-1] !== undefined일 경우 -> 더 이상 게시물이 없는 경우\n            if (entry.isIntersecting && posts[startIndex - 1] !== undefined) {\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 30);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        startIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-row w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-1 w-[50vw]\",\n                        children: posts !== undefined && posts.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                                className: \"center\",\n                                onClick: ()=>handleClickPost(item, index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.photo !== undefined && item.photo[0].stringValue,\n                                            alt: item.title,\n                                            width: 400,\n                                            height: 400,\n                                            className: \"aspect-square object-cover object-center w-[20vw]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                className: \"w-full h-[10vh] bg-red-500\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 133,\n                columnNumber: 35\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 134,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"8cn5qn0lri+8qyl4M1JbkVXsg+I=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ007QUFDRTtBQUNDO0FBQ0k7QUFDK0I7QUFDaUQ7QUFDbEY7QUFFM0IsU0FBU1csVUFBV0MsS0FBbUQ7O0lBQ2xGLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdWLHNEQUFjQSxDQUFDQyxnRUFBWUE7SUFDekQsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQVM7SUFDekQsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFhTyxNQUFNUyxJQUFJO0lBQ3pELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQVU7SUFDcEQsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDdUIsYUFBYUMsZUFBZSxHQUFHdkIsc0RBQWNBLENBQUNHLG9FQUFnQkE7SUFDckUsTUFBTSxDQUFDcUIsY0FBY0MsZ0JBQWdCLEdBQUd6QixzREFBY0EsQ0FBQ0UsdUVBQW1CQTtJQUUxRSxjQUFjO0lBQ2QsTUFBTXdCLGtCQUFrQixDQUFDQyxNQUFlQztRQUNwQ2xCLFdBQVdpQjtRQUNYZixnQkFBZ0JnQjtRQUNoQkgsZ0JBQWdCO0lBQ3BCO0lBRUEzQixnREFBU0EsQ0FBQztRQUNOLGNBQWM7UUFDZCxNQUFNK0IsU0FBU3BCLG9CQUFBQSw4QkFBQUEsUUFBU3FCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFDLElBQUdGLFdBQVdHLFdBQVc7WUFDckI1Qix1REFBVUEsQ0FBQ3lCLFFBQVFJLElBQUksQ0FBQyxD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QUtrQyxLQUFLOzRDQUNmSyxPQUFPOzRDQUNQQyxRQUFROzRDQUNSWCxXQUFVOzs7Ozs7Ozs7Ozs7K0JBWGI1Qjs7Ozs7d0JBZ0JiOzs7Ozs7Ozs7Ozs7WUFHTlYsMEJBQVksOEpBQVEsOERBQUNxQztnQkFBSWEsS0FBSzVEO2dCQUFXZ0QsV0FBVTs7Ozs7OzBCQUNyRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUczQjtHQTdId0JuRDs7UUFFVUwsa0RBQWNBO1FBTU5BLGtEQUFjQTtRQUNaQSxrREFBY0E7OztLQVRsQ0s7QUErSHhCLE1BQU1xRCxVQUFVOUQseURBQU1BLENBQUMyRCxHQUFHO01BQXBCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xvY2F0aW9uXS9wb3N0Qm9hcmQudHN4PzNmMWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBOYXZpYWdhdG9yIGZyb20gXCIuL25hdmlnYXRvclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGZldGNoUG9zdCB9IGZyb20gXCIuL2ZldGNoUG9zdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGN1clBvc3RTdG9yZSwgaXNQb3N0Vmlld09wZW5TdG9yZSwgcG9zdENyZWF0ZWRTdG9yZSwgUG9zdFR5cGUsIHNlbGVjdGVkUG9pbnRTdG9yZSB9IGZyb20gXCIuLi9yZWNvaWxDb250ZXh0UHJvdmlkZXJcIlxuaW1wb3J0IHsgdXBkYXRlUG9zdCB9IGZyb20gXCIuL3VwZGF0ZVBvc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEJvYXJkKCBwcm9wczp7ZGF0YTpQb3N0VHlwZVtdLCBkYXRhMjphbnksIGxvY2F0aW9uOnN0cmluZ30gKSB7XG4gICAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgICBjb25zdCBbY3VyUG9zdCwgc2V0Q3VyUG9zdF0gPSB1c2VSZWNvaWxTdGF0ZShjdXJQb3N0U3RvcmUpO1xuICAgIGNvbnN0IFtjdXJQb3N0SW5kZXgsIHNldEN1clBvc3RJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFR5cGVbXT4ocHJvcHMuZGF0YSk7XG4gICAgY29uc3QgW3N0YXJ0SW5kZXgsIHNldFN0YXJ0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigzMCk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbZmlyc3RSZW5kZXIsIHNldEZpcnN0UmVuZGVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIGNvbnN0IFtwb3N0Q3JlYXRlZCwgc2V0UG9zdENyZWF0ZWRdID0gdXNlUmVjb2lsU3RhdGUocG9zdENyZWF0ZWRTdG9yZSk7XG4gICAgY29uc3QgW3Bvc3RWaWV3T3Blbiwgc2V0UG9zdFZpZXdPcGVuXSA9IHVzZVJlY29pbFN0YXRlKGlzUG9zdFZpZXdPcGVuU3RvcmUpO1xuICAgIFxuICAgIC8vIHBvc3RWaWV3IOyXtOq4sFxuICAgIGNvbnN0IGhhbmRsZUNsaWNrUG9zdCA9IChpdGVtOlBvc3RUeXBlLCBpbmRleDpudW1iZXIpID0+IHtcbiAgICAgICAgc2V0Q3VyUG9zdChpdGVtKTtcbiAgICAgICAgc2V0Q3VyUG9zdEluZGV4KGluZGV4KTtcbiAgICAgICAgc2V0UG9zdFZpZXdPcGVuKHRydWUpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIO2VtOuLuSDqsozsi5zrrLwg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IGN1clBvc3Q/Lm5hbWUuc3BsaXQoXCIvXCIpWzZdO1xuICAgICAgICBpZihwb3N0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdXBkYXRlUG9zdChwb3N0SWQpLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBbLi4ucG9zdHNdO1xuICAgICAgICAgICAgICAgIHRlbXAuc3BsaWNlKGN1clBvc3RJbmRleCwgMSwgcmVzWzBdKTtcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyh0ZW1wKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSAgIFxuICAgICAgICBcbiAgICB9LCBbcG9zdFZpZXdPcGVuXSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHByb3BzLmRhdGEyKTtcbiAgICAvLyB9LCBbXSlcblxuICAgIC8vIHBvc3RWaWV3IOuLq+2eiOuptCBwb3N0IHVwZGF0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKCFmaXJzdFJlbmRlciB8fCBwb3N0Q3JlYXRlZCkge1xuICAgICAgICAgICAgbGV0IHN0YXJ0VXBkYXRlSW5kZXg7XG4gICAgICAgICAgICBpZihwb3N0c1tzdGFydEluZGV4LTFdICE9PSB1bmRlZmluZWQpIFxuICAgICAgICAgICAgICAgIHN0YXJ0VXBkYXRlSW5kZXggPSArcG9zdHNbc3RhcnRJbmRleC0xXS5jcmVhdGVUaW1lOyAgICAgICAgLy8g66qo65OgIOqyjOyLnOusvCDstZzshowgMzDqsJzslKkg66eM65Ok6rOgLCDsoJzrjIDroZwg7JeF642w7J207Yq465CY64qU7KeAIO2ZleyduFxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICBzdGFydFVwZGF0ZUluZGV4ID0gK3Bvc3RzW3Bvc3RzLmxlbmd0aC0zMF0uY3JlYXRlVGltZTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoUG9zdChwcm9wcy5sb2NhdGlvbiwgc3RhcnRVcGRhdGVJbmRleCk7XG4gICAgICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXA6YW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBpZihwb3N0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSBbLi4ucG9zdHNdO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLnNwbGljZShzdGFydEluZGV4LTMwLCAzMCwgLi4ucmVzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHModGVtcCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RDcmVhdGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IHVwZGF0ZWRcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpO1xuICAgIH0sIFtwb3N0Vmlld09wZW5dKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgIHRocmVzaG9sZDogMC44ICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUZldGNoRGF0YSA9IChbZW50cnldOmFueSkgPT4ge1xuICAgICAgICAgICAgLy8gcG9zdHNbc3RhcnRJbmRleC0xXSAhPT0gdW5kZWZpbmVk7J28IOqyveyasCAtPiDrjZQg7J207IOBIOqyjOyLnOusvOydtCDsl4bripQg6rK97JqwXG4gICAgICAgICAgICBpZihlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBwb3N0c1tzdGFydEluZGV4LTFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaFBvc3QocHJvcHMubG9jYXRpb24sICtwb3N0c1tzdGFydEluZGV4LTFdLmNyZWF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgIHJlcy50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXA6YW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYocG9zdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IFsuLi5wb3N0cywgLi4ucmVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhcnRJbmRleChwcmV2ID0+IHByZXYrMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgb2JzZXJ2ZXI6YW55O1xuICAgICAgICBpZih0YXJnZXQpIHtcbiAgICAgICAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVGZXRjaERhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlmKG9ic2VydmVyKVxuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbdGFyZ2V0LCBzdGFydEluZGV4XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1yb3cgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlhZ2F0b3IgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEgdy1bNTB2d11cIj5cbiAgICAgICAgICAgICAgICAgICAgeyBwb3N0cyE9PXVuZGVmaW5lZCAmJiBwb3N0cy5tYXAoKGl0ZW06UG9zdFR5cGUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXcmFwcGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrUG9zdChpdGVtLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC13aGl0ZSBubm4gb3BhY2l0eS0wIHotWzEwMF1cIj57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvIT09dW5kZWZpbmVkICYmIGl0ZW0ucGhvdG9bMF0uc3RyaW5nVmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LXNxdWFyZSBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LVsyMHZ3XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IGlzTG9hZGluZyA/IDw+PC8+IDogPGRpdiByZWY9e3NldFRhcmdldH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtWzEwdmhdIGJnLXJlZC01MDBcIiAvPiB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVsxMHZoXVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIGRpdntcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKC41KTtcbiAgICB9XG4gICAgJjpob3ZlciBwe1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbmBcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIk5hdmlhZ2F0b3IiLCJzdHlsZWQiLCJmZXRjaFBvc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiY3VyUG9zdFN0b3JlIiwiaXNQb3N0Vmlld09wZW5TdG9yZSIsInBvc3RDcmVhdGVkU3RvcmUiLCJ1cGRhdGVQb3N0IiwiUG9zdEJvYXJkIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJjdXJQb3N0Iiwic2V0Q3VyUG9zdCIsImN1clBvc3RJbmRleCIsInNldEN1clBvc3RJbmRleCIsInBvc3RzIiwic2V0UG9zdHMiLCJkYXRhIiwic3RhcnRJbmRleCIsInNldFN0YXJ0SW5kZXgiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmaXJzdFJlbmRlciIsInNldEZpcnN0UmVuZGVyIiwicG9zdENyZWF0ZWQiLCJzZXRQb3N0Q3JlYXRlZCIsInBvc3RWaWV3T3BlbiIsInNldFBvc3RWaWV3T3BlbiIsImhhbmRsZUNsaWNrUG9zdCIsIml0ZW0iLCJpbmRleCIsInBvc3RJZCIsIm5hbWUiLCJzcGxpdCIsInVuZGVmaW5lZCIsInRoZW4iLCJyZXMiLCJ0ZW1wIiwic3BsaWNlIiwic3RhcnRVcGRhdGVJbmRleCIsImNyZWF0ZVRpbWUiLCJsZW5ndGgiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwicm9vdCIsInRocmVzaG9sZCIsImhhbmRsZUZldGNoRGF0YSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJwcmV2Iiwic2V0VGltZW91dCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIldyYXBwZXIiLCJvbkNsaWNrIiwicCIsInRpdGxlIiwic3JjIiwicGhvdG8iLCJzdHJpbmdWYWx1ZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});