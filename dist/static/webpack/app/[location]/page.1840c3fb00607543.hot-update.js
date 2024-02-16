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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigator */ \"(app-pages-browser)/./app/[location]/navigator.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const setCurPost = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.curPostStore);\n    const selectedPoint = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.selectedPointStore);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(30);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [firstRender, setFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [postCreated, setPostCreated] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.postCreatedStore);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item)=>{\n        setCurPost(item);\n        setPostViewOpen(true);\n    };\n    // useEffect(() => {\n    //     console.log(props.data2);\n    // }, [])\n    // postView 닫히면 post update\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!firstRender || postCreated) {\n            const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n            res.then((res)=>{\n                let temp = [];\n                if (posts !== undefined) {\n                    temp = [\n                        ...posts\n                    ];\n                    temp.splice(startIndex - 30, 30, ...res);\n                    setPosts(temp);\n                    setPostCreated(false);\n                    console.log(\"post updated\", res);\n                }\n            });\n        } else setFirstRender(false);\n    }, [\n        postViewOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting && posts[startIndex - 1] !== undefined) {\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 30);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        startIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(\"startIndex : \", startIndex);\n    }, [\n        startIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-row w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigator__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-1 w-[50vw]\",\n                        children: posts !== undefined && posts.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                                className: \"center\",\n                                onClick: ()=>handleClickPost(item),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.photo !== undefined && item.photo[0].stringValue,\n                                            alt: item.title,\n                                            width: 400,\n                                            height: 400,\n                                            className: \"aspect-square object-cover object-center w-[20vw]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                className: \"w-full h-[10vh] bg-red-500\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 118,\n                columnNumber: 35\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"0Ygl+hrYiWSUsrHsDRcmyDB8jho=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDUTtBQUVDO0FBQ0k7QUFDK0I7QUFDa0Q7QUFDeEY7QUFHdEIsU0FBU2EsVUFBV0MsS0FBbUQ7O0lBQ2xGLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUE7SUFDcEMsTUFBTWEsYUFBYVYseURBQWlCQSxDQUFDQyxnRUFBWUE7SUFDakQsTUFBTVUsZ0JBQWdCWixzREFBY0EsQ0FBQ0ssc0VBQWtCQTtJQUN2RCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFhVSxNQUFNTyxJQUFJO0lBQ3pELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbkIsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQVU7SUFDcEQsTUFBTSxDQUFDc0IsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDd0IsYUFBYUMsZUFBZSxHQUFHeEIsc0RBQWNBLENBQUNLLG9FQUFnQkE7SUFDckUsTUFBTSxDQUFDb0IsY0FBY0MsZ0JBQWdCLEdBQUcxQixzREFBY0EsQ0FBQ0ksdUVBQW1CQTtJQUUxRSxjQUFjO0lBQ2QsTUFBTXVCLGtCQUFrQixDQUFDQztRQUNyQmhCLFdBQVdnQjtRQUNYRixnQkFBZ0I7SUFDcEI7SUFFQSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFFVCwyQkFBMkI7SUFDM0I1QixnREFBU0EsQ0FBQztRQUNOLElBQUcsQ0FBQ3VCLGVBQWVFLGFBQWE7WUFDNUIsTUFBTU0sTUFBTWhDLHFEQUFTQSxDQUFDWSxNQUFNcUIsUUFBUSxFQUFFLENBQUNoQixLQUFLLENBQUNHLGFBQVcsRUFBRSxDQUFDYyxVQUFVO1lBQ3JFRixJQUFJRyxJQUFJLENBQUMsQ0FBQ0g7Z0JBQ04sSUFBSUksT0FBYSxFQUFFO2dCQUNuQixJQUFHbkIsVUFBVW9CLFdBQVc7b0JBQ3BCRCxPQUFPOzJCQUFJbkI7cUJBQU07b0JBQ2pCbUIsS0FBS0UsTUFBTSxDQUFDbEIsYUFBVyxJQUFJLE9BQU9ZO29CQUNsQ2QsU0FBU2tCO29CQUNUVCxlQUFlO29CQUNmWSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCUjtnQkFDaEM7WUFDSjtRQUNKLE9BQ0FQLGVBQWU7SUFDbkIsR0FBRztRQUFDRztLQUFhO0lBRWpCM0IsZ0RBQVNBLENBQUM7UUFDTixNQUFNd0MsVUFBVTtZQUNkQyxNQUFNO1lBQ05DLFdBQVc7UUFDYjtRQUVBLE1BQU1DLGtCQUFrQjtnQkFBQyxDQUFDQyxNQUFVO1lBQ2hDLElBQUdBLE1BQU1DLGNBQWMsSUFBSTdCLEtBQUssQ0FBQ0csYUFBVyxFQUFFLEtBQUtpQixXQUFXO2dCQUMxRCxNQUFNTCxNQUFNaEMscURBQVNBLENBQUNZLE1BQU1xQixRQUFRLEVBQUUsQ0FBQ2hCLEtBQUssQ0FBQ0csYUFBVyxFQUFFLENBQUNjLFVBQVU7Z0JBQ3JFRixJQUFJRyxJQUFJLENBQUMsQ0FBQ0g7b0JBQ04sSUFBSUksT0FBYSxFQUFFO29CQUNuQixJQUFHbkIsVUFBVW9CLFdBQVc7d0JBQ3BCRCxPQUFPOytCQUFJbkI7K0JBQVVlO3lCQUFJO3dCQUN6QmQsU0FBU2tCO3dCQUNUZixjQUFjMEIsQ0FBQUEsT0FBUUEsT0FBSzt3QkFDM0J4QixhQUFhO3dCQUNieUIsV0FBVzs0QkFDUHpCLGFBQWE7d0JBQ2pCLEdBQUc7b0JBQ1A7Z0JBQ0o7WUFDSjtRQUNKO1FBRUEsSUFBSTBCO1FBQ0osSUFBR3BDLFFBQVE7WUFDVG9DLFdBQVcsSUFBSUMscUJBQXFCTixpQkFBaUJIO1lBQ3JEUSxTQUFTRSxPQUFPLENBQUN0QztRQUNuQjtRQUNBLE9BQU87WUFDTCxJQUFHb0MsVUFDSEEsU0FBU0csVUFBVTtRQUNyQjtJQUNKLEdBQUc7UUFBQ3ZDO1FBQVFPO0tBQVc7SUFFckJuQixnREFBU0EsQ0FBQztRQUNSc0MsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQnBCO0lBQy9CLEdBQUc7UUFBQ0E7S0FBVztJQUVqQixxQkFDSSw4REFBQ2lDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUM1QyxrREFBVUE7Ozs7O2tDQUNYLDhEQUFDMkM7d0JBQUlDLFdBQVU7a0NBQ1RyQyxVQUFRb0IsYUFBYXBCLE1BQU1zQyxHQUFHLENBQUMsQ0FBQ3hCLE1BQWV5Qjs0QkFDN0MscUJBQ0EsOERBQUNDO2dDQUVHSCxXQUFVO2dDQUNWSSxTQUFTLElBQUk1QixnQkFBZ0JDOztrREFFN0IsOERBQUM0Qjt3Q0FBRUwsV0FBVTtrREFBNkN2QixLQUFLNkIsS0FBSzs7Ozs7O2tEQUNwRSw4REFBQ1A7a0RBQ0csNEVBQUN2RCxrREFBS0E7NENBQ0YrRCxLQUFLOUIsS0FBSytCLEtBQUssS0FBR3pCLGFBQWFOLEtBQUsrQixLQUFLLENBQUMsRUFBRSxDQUFDQyxXQUFXOzRDQUN4REMsS0FBS2pDLEtBQUs2QixLQUFLOzRDQUNmSyxPQUFPOzRDQUNQQyxRQUFROzRDQUNSWixXQUFVOzs7Ozs7Ozs7Ozs7K0JBWGJFOzs7Ozt3QkFnQmI7Ozs7Ozs7Ozs7OztZQUdObEMsMEJBQVksOEpBQVEsOERBQUMrQjtnQkFBSWMsS0FBS3JEO2dCQUFXd0MsV0FBVTs7Ozs7Ozs7Ozs7O0FBR2pFO0dBNUd3QjNDOztRQUVETixxREFBaUJBO1FBQ2RELGtEQUFjQTtRQUtFRCxrREFBY0E7UUFDWkEsa0RBQWNBOzs7S0FUbENRO0FBOEd4QixNQUFNOEMsVUFBVTFELHlEQUFNQSxDQUFDc0QsR0FBRztNQUFwQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhdGlvbl0vcG9zdEJvYXJkLnRzeD8zZjFlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9tYXAvbWFwXCI7XG5pbXBvcnQgeyBmZXRjaFBvc3QgfSBmcm9tIFwiLi9mZXRjaFBvc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBjdXJQb3N0U3RvcmUsIGlzUG9zdFZpZXdPcGVuU3RvcmUsIHBvc3RDcmVhdGVkU3RvcmUsIFBvc3RUeXBlLCBzZWxlY3RlZFBvaW50U3RvcmUgfSBmcm9tIFwiLi4vcmVjb2lsQ29udGV4dFByb3ZpZGVyXCI7XG5pbXBvcnQgTmF2aWFnYXRvciBmcm9tIFwiLi9uYXZpZ2F0b3JcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Qm9hcmQoIHByb3BzOntkYXRhOlBvc3RUeXBlW10sIGRhdGEyOmFueSwgbG9jYXRpb246c3RyaW5nfSApIHtcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IHNldEN1clBvc3QgPSB1c2VTZXRSZWNvaWxTdGF0ZShjdXJQb3N0U3RvcmUpO1xuICAgIGNvbnN0IHNlbGVjdGVkUG9pbnQgPSB1c2VSZWNvaWxWYWx1ZShzZWxlY3RlZFBvaW50U3RvcmUpO1xuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFR5cGVbXT4ocHJvcHMuZGF0YSk7XG4gICAgY29uc3QgW3N0YXJ0SW5kZXgsIHNldFN0YXJ0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigzMCk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbZmlyc3RSZW5kZXIsIHNldEZpcnN0UmVuZGVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIGNvbnN0IFtwb3N0Q3JlYXRlZCwgc2V0UG9zdENyZWF0ZWRdID0gdXNlUmVjb2lsU3RhdGUocG9zdENyZWF0ZWRTdG9yZSk7XG4gICAgY29uc3QgW3Bvc3RWaWV3T3Blbiwgc2V0UG9zdFZpZXdPcGVuXSA9IHVzZVJlY29pbFN0YXRlKGlzUG9zdFZpZXdPcGVuU3RvcmUpO1xuICAgIFxuICAgIC8vIHBvc3RWaWV3IOyXtOq4sFxuICAgIGNvbnN0IGhhbmRsZUNsaWNrUG9zdCA9IChpdGVtOlBvc3RUeXBlKSA9PiB7XG4gICAgICAgIHNldEN1clBvc3QoaXRlbSk7XG4gICAgICAgIHNldFBvc3RWaWV3T3Blbih0cnVlKTtcbiAgICB9XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhMik7XG4gICAgLy8gfSwgW10pXG5cbiAgICAvLyBwb3N0VmlldyDri6vtnojrqbQgcG9zdCB1cGRhdGVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighZmlyc3RSZW5kZXIgfHwgcG9zdENyZWF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoUG9zdChwcm9wcy5sb2NhdGlvbiwgK3Bvc3RzW3N0YXJ0SW5kZXgtMV0uY3JlYXRlVGltZSk7XG4gICAgICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXA6YW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBpZihwb3N0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSBbLi4ucG9zdHNdO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLnNwbGljZShzdGFydEluZGV4LTMwLCAzMCwgLi4ucmVzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHModGVtcCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RDcmVhdGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IHVwZGF0ZWRcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpO1xuICAgIH0sIFtwb3N0Vmlld09wZW5dKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgIHRocmVzaG9sZDogMC44ICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUZldGNoRGF0YSA9IChbZW50cnldOmFueSkgPT4ge1xuICAgICAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgcG9zdHNbc3RhcnRJbmRleC0xXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2hQb3N0KHByb3BzLmxvY2F0aW9uLCArcG9zdHNbc3RhcnRJbmRleC0xXS5jcmVhdGVUaW1lKTtcbiAgICAgICAgICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wOmFueVtdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmKHBvc3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAgPSBbLi4ucG9zdHMsIC4uLnJlc107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyh0ZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXJ0SW5kZXgocHJldiA9PiBwcmV2KzMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IG9ic2VydmVyOmFueTtcbiAgICAgICAgaWYodGFyZ2V0KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlRmV0Y2hEYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpZihvYnNlcnZlcilcbiAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH07XG4gICAgfSwgW3RhcmdldCwgc3RhcnRJbmRleF0pO1xuXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0SW5kZXggOiBcIiwgc3RhcnRJbmRleCk7XG4gICAgICB9LCBbc3RhcnRJbmRleF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1yb3cgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlhZ2F0b3IgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEgdy1bNTB2d11cIj5cbiAgICAgICAgICAgICAgICAgICAgeyBwb3N0cyE9PXVuZGVmaW5lZCAmJiBwb3N0cy5tYXAoKGl0ZW06UG9zdFR5cGUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXcmFwcGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrUG9zdChpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LXdoaXRlIG5ubiBvcGFjaXR5LTAgei1bMTAwXVwiPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG8hPT11bmRlZmluZWQgJiYgaXRlbS5waG90b1swXS5zdHJpbmdWYWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHctWzIwdnddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgaXNMb2FkaW5nID8gPD48Lz4gOiA8ZGl2IHJlZj17c2V0VGFyZ2V0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTB2aF0gYmctcmVkLTUwMFwiIC8+IH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIgZGl2e1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjUpO1xuICAgIH1cbiAgICAmOmhvdmVyIHB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuYFxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVkIiwiZmV0Y2hQb3N0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwidXNlU2V0UmVjb2lsU3RhdGUiLCJjdXJQb3N0U3RvcmUiLCJpc1Bvc3RWaWV3T3BlblN0b3JlIiwicG9zdENyZWF0ZWRTdG9yZSIsInNlbGVjdGVkUG9pbnRTdG9yZSIsIk5hdmlhZ2F0b3IiLCJQb3N0Qm9hcmQiLCJwcm9wcyIsInRhcmdldCIsInNldFRhcmdldCIsInNldEN1clBvc3QiLCJzZWxlY3RlZFBvaW50IiwicG9zdHMiLCJzZXRQb3N0cyIsImRhdGEiLCJzdGFydEluZGV4Iiwic2V0U3RhcnRJbmRleCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZpcnN0UmVuZGVyIiwic2V0Rmlyc3RSZW5kZXIiLCJwb3N0Q3JlYXRlZCIsInNldFBvc3RDcmVhdGVkIiwicG9zdFZpZXdPcGVuIiwic2V0UG9zdFZpZXdPcGVuIiwiaGFuZGxlQ2xpY2tQb3N0IiwiaXRlbSIsInJlcyIsImxvY2F0aW9uIiwiY3JlYXRlVGltZSIsInRoZW4iLCJ0ZW1wIiwidW5kZWZpbmVkIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJyb290IiwidGhyZXNob2xkIiwiaGFuZGxlRmV0Y2hEYXRhIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInByZXYiLCJzZXRUaW1lb3V0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJXcmFwcGVyIiwib25DbGljayIsInAiLCJ0aXRsZSIsInNyYyIsInBob3RvIiwic3RyaW5nVmFsdWUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});