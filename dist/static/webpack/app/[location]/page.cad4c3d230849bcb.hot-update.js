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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator */ \"(app-pages-browser)/./app/[location]/navigator.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* harmony import */ var _updatePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updatePost */ \"(app-pages-browser)/./app/[location]/updatePost.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [curPost, setCurPost] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.curPostStore);\n    const [curPostIndex, setCurPostIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(30);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [firstRender, setFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [postCreated, setPostCreated] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.postCreatedStore);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item, index)=>{\n        setCurPost(item);\n        setCurPostIndex(index);\n        setPostViewOpen(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // 해당 게시물 업데이트\n        const postId = curPost === null || curPost === void 0 ? void 0 : curPost.name.split(\"/\")[6];\n        if (postId !== undefined) {\n            (0,_updatePost__WEBPACK_IMPORTED_MODULE_8__.updatePost)(postId).then((res)=>{\n                console.log(res);\n            // let newPostData = updatePost(postId);\n            // let temp = [...posts];\n            // temp.splice(curPostIndex, 1, res);\n            });\n        }\n    }, [\n        postViewOpen\n    ]);\n    // useEffect(() => {\n    //     console.log(props.data2);\n    // }, [])\n    // postView 닫히면 post update\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (!firstRender || postCreated) {\n            let startUpdateIndex;\n            if (posts[startIndex - 1] !== undefined) startUpdateIndex = +posts[startIndex - 1].createTime; // 모든 게시물 최소 30개씩 만들고, 제대로 업데이트되는지 확인\n            else startUpdateIndex = +posts[posts.length - 30].createTime;\n            const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(props.location, startUpdateIndex);\n            res.then((res)=>{\n                let temp = [];\n                if (posts !== undefined) {\n                    temp = [\n                        ...posts\n                    ];\n                    temp.splice(startIndex - 30, 30, ...res);\n                    setPosts(temp);\n                    setPostCreated(false);\n                    console.log(\"post updated\", res);\n                }\n            });\n        } else setFirstRender(false);\n    }, [\n        postViewOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            // posts[startIndex-1] !== undefined일 경우 -> 더 이상 게시물이 없는 경우\n            if (entry.isIntersecting && posts[startIndex - 1] !== undefined) {\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 30);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        startIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-row w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-1 w-[50vw]\",\n                        children: posts !== undefined && posts.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                                className: \"center\",\n                                onClick: ()=>handleClickPost(item, index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.photo !== undefined && item.photo[0].stringValue,\n                                            alt: item.title,\n                                            width: 400,\n                                            height: 400,\n                                            className: \"aspect-square object-cover object-center w-[20vw]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                className: \"w-full h-[10vh] bg-red-500\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 134,\n                columnNumber: 35\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 135,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 108,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"8cn5qn0lri+8qyl4M1JbkVXsg+I=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ007QUFDRTtBQUNDO0FBQ0k7QUFDK0I7QUFDaUQ7QUFDbEY7QUFFM0IsU0FBU1csVUFBV0MsS0FBbUQ7O0lBQ2xGLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdWLHNEQUFjQSxDQUFDQyxnRUFBWUE7SUFDekQsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQVM7SUFDekQsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFhTyxNQUFNUyxJQUFJO0lBQ3pELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQVU7SUFDcEQsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDdUIsYUFBYUMsZUFBZSxHQUFHdkIsc0RBQWNBLENBQUNHLG9FQUFnQkE7SUFDckUsTUFBTSxDQUFDcUIsY0FBY0MsZ0JBQWdCLEdBQUd6QixzREFBY0EsQ0FBQ0UsdUVBQW1CQTtJQUUxRSxjQUFjO0lBQ2QsTUFBTXdCLGtCQUFrQixDQUFDQyxNQUFlQztRQUNwQ2xCLFdBQVdpQjtRQUNYZixnQkFBZ0JnQjtRQUNoQkgsZ0JBQWdCO0lBQ3BCO0lBRUEzQixnREFBU0EsQ0FBQztRQUNOLGNBQWM7UUFDZCxNQUFNK0IsU0FBU3BCLG9CQUFBQSw4QkFBQUEsUUFBU3FCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFDLElBQUdGLFdBQVdHLFdBQVc7WUFDckI1Qix1REFBVUEsQ0FBQ3lCLFFBQVFJLElBQUksQ0FBQyxD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UlgsV0FBVTs7Ozs7Ozs7Ozs7OytCQVhiNUI7Ozs7O3dCQWdCYjs7Ozs7Ozs7Ozs7O1lBR05WLDBCQUFZLDhKQUFRLDhEQUFDcUM7Z0JBQUlhLEtBQUs1RDtnQkFBV2dELFdBQVU7Ozs7OzswQkFDckQsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHM0I7R0E5SHdCbkQ7O1FBRVVMLGtEQUFjQTtRQU1OQSxrREFBY0E7UUFDWkEsa0RBQWNBOzs7S0FUbENLO0FBZ0l4QixNQUFNcUQsVUFBVTlELHlEQUFNQSxDQUFDMkQsR0FBRztNQUFwQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhdGlvbl0vcG9zdEJvYXJkLnRzeD8zZjFlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTmF2aWFnYXRvciBmcm9tIFwiLi9uYXZpZ2F0b3JcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBmZXRjaFBvc3QgfSBmcm9tIFwiLi9mZXRjaFBvc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBjdXJQb3N0U3RvcmUsIGlzUG9zdFZpZXdPcGVuU3RvcmUsIHBvc3RDcmVhdGVkU3RvcmUsIFBvc3RUeXBlLCBzZWxlY3RlZFBvaW50U3RvcmUgfSBmcm9tIFwiLi4vcmVjb2lsQ29udGV4dFByb3ZpZGVyXCJcbmltcG9ydCB7IHVwZGF0ZVBvc3QgfSBmcm9tIFwiLi91cGRhdGVQb3N0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RCb2FyZCggcHJvcHM6e2RhdGE6UG9zdFR5cGVbXSwgZGF0YTI6YW55LCBsb2NhdGlvbjpzdHJpbmd9ICkge1xuICAgIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gICAgY29uc3QgW2N1clBvc3QsIHNldEN1clBvc3RdID0gdXNlUmVjb2lsU3RhdGUoY3VyUG9zdFN0b3JlKTtcbiAgICBjb25zdCBbY3VyUG9zdEluZGV4LCBzZXRDdXJQb3N0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RUeXBlW10+KHByb3BzLmRhdGEpO1xuICAgIGNvbnN0IFtzdGFydEluZGV4LCBzZXRTdGFydEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMzApO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2ZpcnN0UmVuZGVyLCBzZXRGaXJzdFJlbmRlcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBbcG9zdENyZWF0ZWQsIHNldFBvc3RDcmVhdGVkXSA9IHVzZVJlY29pbFN0YXRlKHBvc3RDcmVhdGVkU3RvcmUpO1xuICAgIGNvbnN0IFtwb3N0Vmlld09wZW4sIHNldFBvc3RWaWV3T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShpc1Bvc3RWaWV3T3BlblN0b3JlKTtcbiAgICBcbiAgICAvLyBwb3N0VmlldyDsl7TquLBcbiAgICBjb25zdCBoYW5kbGVDbGlja1Bvc3QgPSAoaXRlbTpQb3N0VHlwZSwgaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgIHNldEN1clBvc3QoaXRlbSk7XG4gICAgICAgIHNldEN1clBvc3RJbmRleChpbmRleCk7XG4gICAgICAgIHNldFBvc3RWaWV3T3Blbih0cnVlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyDtlbTri7kg6rKM7Iuc66y8IOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBwb3N0SWQgPSBjdXJQb3N0Py5uYW1lLnNwbGl0KFwiL1wiKVs2XTtcbiAgICAgICAgaWYocG9zdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc3QocG9zdElkKS50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG5ld1Bvc3REYXRhID0gdXBkYXRlUG9zdChwb3N0SWQpO1xuICAgICAgICAgICAgICAgIC8vIGxldCB0ZW1wID0gWy4uLnBvc3RzXTtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wLnNwbGljZShjdXJQb3N0SW5kZXgsIDEsIHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgIH0gICBcbiAgICAgICAgXG4gICAgfSwgW3Bvc3RWaWV3T3Blbl0pXG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhMik7XG4gICAgLy8gfSwgW10pXG5cbiAgICAvLyBwb3N0VmlldyDri6vtnojrqbQgcG9zdCB1cGRhdGVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighZmlyc3RSZW5kZXIgfHwgcG9zdENyZWF0ZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGFydFVwZGF0ZUluZGV4O1xuICAgICAgICAgICAgaWYocG9zdHNbc3RhcnRJbmRleC0xXSAhPT0gdW5kZWZpbmVkKSBcbiAgICAgICAgICAgICAgICBzdGFydFVwZGF0ZUluZGV4ID0gK3Bvc3RzW3N0YXJ0SW5kZXgtMV0uY3JlYXRlVGltZTsgICAgICAgIC8vIOuqqOuToCDqsozsi5zrrLwg7LWc7IaMIDMw6rCc7JSpIOunjOuTpOqzoCwg7KCc64yA66GcIOyXheuNsOydtO2KuOuQmOuKlOyngCDtmZXsnbhcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgc3RhcnRVcGRhdGVJbmRleCA9ICtwb3N0c1twb3N0cy5sZW5ndGgtMzBdLmNyZWF0ZVRpbWU7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaFBvc3QocHJvcHMubG9jYXRpb24sIHN0YXJ0VXBkYXRlSW5kZXgpO1xuICAgICAgICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wOmFueVtdID0gW107XG4gICAgICAgICAgICAgICAgaWYocG9zdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wID0gWy4uLnBvc3RzXTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5zcGxpY2Uoc3RhcnRJbmRleC0zMCwgMzAsIC4uLnJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0Q3JlYXRlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCB1cGRhdGVkXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHNldEZpcnN0UmVuZGVyKGZhbHNlKTtcbiAgICB9LCBbcG9zdFZpZXdPcGVuXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAuOCAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVGZXRjaERhdGEgPSAoW2VudHJ5XTphbnkpID0+IHtcbiAgICAgICAgICAgIC8vIHBvc3RzW3N0YXJ0SW5kZXgtMV0gIT09IHVuZGVmaW5lZOydvCDqsr3smrAgLT4g642UIOydtOyDgSDqsozsi5zrrLzsnbQg7JeG64qUIOqyveyasFxuICAgICAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgcG9zdHNbc3RhcnRJbmRleC0xXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2hQb3N0KHByb3BzLmxvY2F0aW9uLCArcG9zdHNbc3RhcnRJbmRleC0xXS5jcmVhdGVUaW1lKTtcbiAgICAgICAgICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wOmFueVtdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmKHBvc3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAgPSBbLi4ucG9zdHMsIC4uLnJlc107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyh0ZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXJ0SW5kZXgocHJldiA9PiBwcmV2KzMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IG9ic2VydmVyOmFueTtcbiAgICAgICAgaWYodGFyZ2V0KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlRmV0Y2hEYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpZihvYnNlcnZlcilcbiAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH07XG4gICAgfSwgW3RhcmdldCwgc3RhcnRJbmRleF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcm93IHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxOYXZpYWdhdG9yIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0xIHctWzUwdnddXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgcG9zdHMhPT11bmRlZmluZWQgJiYgcG9zdHMubWFwKChpdGVtOlBvc3RUeXBlLCBpbmRleDpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8V3JhcHBlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVDbGlja1Bvc3QoaXRlbSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtd2hpdGUgbm5uIG9wYWNpdHktMCB6LVsxMDBdXCI+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90byE9PXVuZGVmaW5lZCAmJiBpdGVtLnBob3RvWzBdLnN0cmluZ1ZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1bMjB2d11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyBpc0xvYWRpbmcgPyA8PjwvPiA6IDxkaXYgcmVmPXtzZXRUYXJnZXR9IGNsYXNzTmFtZT1cInctZnVsbCBoLVsxMHZoXSBiZy1yZWQtNTAwXCIgLz4gfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTB2aF1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciBkaXZ7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguNSk7XG4gICAgfVxuICAgICY6aG92ZXIgcHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5gXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJOYXZpYWdhdG9yIiwic3R5bGVkIiwiZmV0Y2hQb3N0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsImN1clBvc3RTdG9yZSIsImlzUG9zdFZpZXdPcGVuU3RvcmUiLCJwb3N0Q3JlYXRlZFN0b3JlIiwidXBkYXRlUG9zdCIsIlBvc3RCb2FyZCIsInByb3BzIiwidGFyZ2V0Iiwic2V0VGFyZ2V0IiwiY3VyUG9zdCIsInNldEN1clBvc3QiLCJjdXJQb3N0SW5kZXgiLCJzZXRDdXJQb3N0SW5kZXgiLCJwb3N0cyIsInNldFBvc3RzIiwiZGF0YSIsInN0YXJ0SW5kZXgiLCJzZXRTdGFydEluZGV4IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmlyc3RSZW5kZXIiLCJzZXRGaXJzdFJlbmRlciIsInBvc3RDcmVhdGVkIiwic2V0UG9zdENyZWF0ZWQiLCJwb3N0Vmlld09wZW4iLCJzZXRQb3N0Vmlld09wZW4iLCJoYW5kbGVDbGlja1Bvc3QiLCJpdGVtIiwiaW5kZXgiLCJwb3N0SWQiLCJuYW1lIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXJ0VXBkYXRlSW5kZXgiLCJjcmVhdGVUaW1lIiwibGVuZ3RoIiwibG9jYXRpb24iLCJ0ZW1wIiwic3BsaWNlIiwib3B0aW9ucyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJoYW5kbGVGZXRjaERhdGEiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicHJldiIsInNldFRpbWVvdXQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJXcmFwcGVyIiwib25DbGljayIsInAiLCJ0aXRsZSIsInNyYyIsInBob3RvIiwic3RyaW5nVmFsdWUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});