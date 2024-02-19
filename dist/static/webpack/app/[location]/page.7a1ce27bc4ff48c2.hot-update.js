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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator */ \"(app-pages-browser)/./app/[location]/navigator.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* harmony import */ var _updatePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updatePost */ \"(app-pages-browser)/./app/[location]/updatePost.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [curPost, setCurPost] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.curPostStore);\n    const [curPostIndex, setCurPostIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(30);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [firstRender, setFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [postCreated, setPostCreated] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.postCreatedStore);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item, index)=>{\n        setCurPost(item);\n        setCurPostIndex(index);\n        setPostViewOpen(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // 해당 게시물 업데이트\n        const postId = curPost === null || curPost === void 0 ? void 0 : curPost.name.split(\"/\")[6];\n        if (postId !== undefined) {\n            (0,_updatePost__WEBPACK_IMPORTED_MODULE_8__.updatePost)(postId).then((res)=>{\n                let temp = [\n                    ...posts\n                ];\n                temp.splice(curPostIndex, 1, res[0]);\n                setPosts(temp);\n            });\n        }\n    }, [\n        postViewOpen\n    ]);\n    // useEffect(() => {\n    //     console.log(props.data2);\n    // }, [])\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            // posts[startIndex-1] !== undefined일 경우 -> 더 이상 게시물이 없는 경우\n            if (entry.isIntersecting && posts[startIndex - 1] !== undefined) {\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 30);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        startIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-row w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-1 w-[50vw]\",\n                        children: posts !== undefined && posts.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                                className: \"center\",\n                                onClick: ()=>handleClickPost(item, index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.photo !== undefined && item.photo[0].stringValue,\n                                            alt: item.title,\n                                            width: 400,\n                                            height: 400,\n                                            className: \"aspect-square object-cover object-center w-[20vw]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 109,\n                columnNumber: 35\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"Lgrauhz4zqSjZbOj+Vr+z0eE02Y=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ007QUFDRTtBQUNDO0FBQ0k7QUFDSjtBQUNvRjtBQUNsRjtBQUUzQixTQUFTVyxVQUFXQyxLQUFtRDs7SUFDbEYsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQTtJQUNwQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1Ysc0RBQWNBLENBQUNDLGdFQUFZQTtJQUN6RCxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBUztJQUN6RCxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQWFPLE1BQU1TLElBQUk7SUFDekQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNtQixXQUFXQyxhQUFhLEdBQUdwQiwrQ0FBUUEsQ0FBVTtJQUNwRCxNQUFNLENBQUNxQixhQUFhQyxlQUFlLEdBQUd0QiwrQ0FBUUEsQ0FBVTtJQUN4RCxNQUFNLENBQUN1QixhQUFhQyxlQUFlLEdBQUd2QixzREFBY0EsQ0FBQ0csb0VBQWdCQTtJQUNyRSxNQUFNLENBQUNxQixjQUFjQyxnQkFBZ0IsR0FBR3pCLHNEQUFjQSxDQUFDRSx1RUFBbUJBO0lBRTFFLGNBQWM7SUFDZCxNQUFNd0Isa0JBQWtCLENBQUNDLE1BQWVDO1FBQ3BDbEIsV0FBV2lCO1FBQ1hmLGdCQUFnQmdCO1FBQ2hCSCxnQkFBZ0I7SUFDcEI7SUFFQTNCLGdEQUFTQSxDQUFDO1FBQ04sY0FBYztRQUNkLE1BQU0rQixTQUFTcEIsb0JBQUFBLDhCQUFBQSxRQUFTcUIsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDMUMsSUFBR0YsV0FBV0csV0FBVztZQUNyQjVCLHVEQUFVQSxDQUFDeUIsUUFBUUksSUFBSSxDQUFDLENBQUNDO2dCQUNyQixJQUFJQyxPQUFPO3VCQUFJdEI7aUJBQU07Z0JBQ3JCc0IsS0FBS0MsTUFBTSxDQUFDekIsY0FBYyxHQUFHdUIsR0FBRyxDQUFDLEVBQUU7Z0JBQ25DcEIsU0FBU3FCO1lBQ2I7UUFDSjtJQUNKLEdBQUc7UUFBQ1g7S0FBYTtJQUVqQixvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFFVDFCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTXVDLFVBQVU7WUFDZEMsTUFBTTtZQUNOQyxXQUFXO1FBQ2I7UUFFQSxNQUFNQyxrQkFBa0I7Z0JBQUMsQ0FBQ0MsTUFBVTtZQUNoQywyREFBMkQ7WUFDM0QsSUFBR0EsTUFBTUMsY0FBYyxJQUFJN0IsS0FBSyxDQUFDRyxhQUFXLEVBQUUsS0FBS2dCLFdBQVc7Z0JBQzFELE1BQU1FLE1BQU1yQyxxREFBU0EsQ0FBQ1MsTUFBTXFDLFFBQVEsRUFBRSxDQUFDOUIsS0FBSyxDQUFDRyxhQUFXLEVBQUUsQ0FBQzRCLFVBQVU7Z0JBQ3JFVixJQUFJRCxJQUFJLENBQUMsQ0FBQ0M7b0JBQ04sSUFBSUMsT0FBYSxFQUFFO29CQUNuQixJQUFHdEIsVUFBVW1CLFdBQVc7d0JBQ3BCRyxPQUFPOytCQUFJdEI7K0JBQVVxQjt5QkFBSTt3QkFDekJwQixTQUFTcUI7d0JBQ1RsQixjQUFjNEIsQ0FBQUEsT0FBUUEsT0FBSzt3QkFDM0IxQixhQUFhO3dCQUNiMkIsV0FBVzs0QkFDUDNCLGFBQWE7d0JBQ2pCLEdBQUc7b0JBQ1A7Z0JBQ0o7WUFDSjtRQUNKO1FBRUEsSUFBSTRCO1FBQ0osSUFBR3hDLFFBQVE7WUFDVHdDLFdBQVcsSUFBSUMscUJBQXFCUixpQkFBaUJIO1lBQ3JEVSxTQUFTRSxPQUFPLENBQUMxQztRQUNuQjtRQUNBLE9BQU87WUFDTCxJQUFHd0MsVUFDSEEsU0FBU0csVUFBVTtRQUNyQjtJQUNKLEdBQUc7UUFBQzNDO1FBQVFTO0tBQVc7SUFFdkIscUJBQ0ksOERBQUNtQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDekQsa0RBQVVBOzs7OztrQ0FDWCw4REFBQ3dEO3dCQUFJQyxXQUFVO2tDQUNUdkMsVUFBUW1CLGFBQWFuQixNQUFNd0MsR0FBRyxDQUFDLENBQUMxQixNQUFlQzs0QkFDN0MscUJBQ0EsOERBQUMwQjtnQ0FFR0YsV0FBVTtnQ0FDVkcsU0FBUyxJQUFJN0IsZ0JBQWdCQyxNQUFNQzs7a0RBRW5DLDhEQUFDNEI7d0NBQUVKLFdBQVU7a0RBQTZDekIsS0FBSzhCLEtBQUs7Ozs7OztrREFDcEUsOERBQUNOO2tEQUNHLDRFQUFDekQsa0RBQUtBOzRDQUNGZ0UsS0FBSy9CLEtBQUtnQyxLQUFLLEtBQUczQixhQUFhTCxLQUFLZ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsV0FBVzs0Q0FDeERDLEtBQUtsQyxLQUFLOEIsS0FBSzs0Q0FDZkssT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUlgsV0FBVTs7Ozs7Ozs7Ozs7OytCQVhieEI7Ozs7O3dCQWdCYjs7Ozs7Ozs7Ozs7O1lBR05WLDBCQUFZLDhKQUFRLDhEQUFDaUM7Z0JBQUlhLEtBQUt4RDtnQkFBVzRDLFdBQVU7Ozs7OzswQkFDckQsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHM0I7R0FyR3dCL0M7O1FBRVVMLGtEQUFjQTtRQU1OQSxrREFBY0E7UUFDWkEsa0RBQWNBOzs7S0FUbENLO0FBdUd4QixNQUFNaUQsVUFBVTFELHlEQUFNQSxDQUFDdUQsR0FBRztNQUFwQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhdGlvbl0vcG9zdEJvYXJkLnRzeD8zZjFlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTmF2aWFnYXRvciBmcm9tIFwiLi9uYXZpZ2F0b3JcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBmZXRjaFBvc3QgfSBmcm9tIFwiLi9mZXRjaFBvc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgY3VyUG9zdFN0b3JlLCBpc1Bvc3RWaWV3T3BlblN0b3JlLCBwb3N0Q3JlYXRlZFN0b3JlLCBQb3N0VHlwZSwgc2VsZWN0ZWRQb2ludFN0b3JlIH0gZnJvbSBcIi4uL3JlY29pbENvbnRleHRQcm92aWRlclwiXG5pbXBvcnQgeyB1cGRhdGVQb3N0IH0gZnJvbSBcIi4vdXBkYXRlUG9zdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Qm9hcmQoIHByb3BzOntkYXRhOlBvc3RUeXBlW10sIGRhdGEyOmFueSwgbG9jYXRpb246c3RyaW5nfSApIHtcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IFtjdXJQb3N0LCBzZXRDdXJQb3N0XSA9IHVzZVJlY29pbFN0YXRlKGN1clBvc3RTdG9yZSk7XG4gICAgY29uc3QgW2N1clBvc3RJbmRleCwgc2V0Q3VyUG9zdEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxQb3N0VHlwZVtdPihwcm9wcy5kYXRhKTtcbiAgICBjb25zdCBbc3RhcnRJbmRleCwgc2V0U3RhcnRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtmaXJzdFJlbmRlciwgc2V0Rmlyc3RSZW5kZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgY29uc3QgW3Bvc3RDcmVhdGVkLCBzZXRQb3N0Q3JlYXRlZF0gPSB1c2VSZWNvaWxTdGF0ZShwb3N0Q3JlYXRlZFN0b3JlKTtcbiAgICBjb25zdCBbcG9zdFZpZXdPcGVuLCBzZXRQb3N0Vmlld09wZW5dID0gdXNlUmVjb2lsU3RhdGUoaXNQb3N0Vmlld09wZW5TdG9yZSk7XG4gICAgXG4gICAgLy8gcG9zdFZpZXcg7Je06riwXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tQb3N0ID0gKGl0ZW06UG9zdFR5cGUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICBzZXRDdXJQb3N0KGl0ZW0pO1xuICAgICAgICBzZXRDdXJQb3N0SW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRQb3N0Vmlld09wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8g7ZW064u5IOqyjOyLnOusvCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgcG9zdElkID0gY3VyUG9zdD8ubmFtZS5zcGxpdChcIi9cIilbNl07XG4gICAgICAgIGlmKHBvc3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB1cGRhdGVQb3N0KHBvc3RJZCkudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IFsuLi5wb3N0c107XG4gICAgICAgICAgICAgICAgdGVtcC5zcGxpY2UoY3VyUG9zdEluZGV4LCAxLCByZXNbMF0pO1xuICAgICAgICAgICAgICAgIHNldFBvc3RzKHRlbXApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSAgICAgXG4gICAgfSwgW3Bvc3RWaWV3T3Blbl0pXG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhMik7XG4gICAgLy8gfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgdGhyZXNob2xkOiAwLjggIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlRmV0Y2hEYXRhID0gKFtlbnRyeV06YW55KSA9PiB7XG4gICAgICAgICAgICAvLyBwb3N0c1tzdGFydEluZGV4LTFdICE9PSB1bmRlZmluZWTsnbwg6rK97JqwIC0+IOuNlCDsnbTsg4Eg6rKM7Iuc66y87J20IOyXhuuKlCDqsr3smrBcbiAgICAgICAgICAgIGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIHBvc3RzW3N0YXJ0SW5kZXgtMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoUG9zdChwcm9wcy5sb2NhdGlvbiwgK3Bvc3RzW3N0YXJ0SW5kZXgtMV0uY3JlYXRlVGltZSk7XG4gICAgICAgICAgICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcDphbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZihwb3N0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wID0gWy4uLnBvc3RzLCAuLi5yZXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHModGVtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGFydEluZGV4KHByZXYgPT4gcHJldiszMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCBvYnNlcnZlcjphbnk7XG4gICAgICAgIGlmKHRhcmdldCkge1xuICAgICAgICAgIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZUZldGNoRGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaWYob2JzZXJ2ZXIpXG4gICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9O1xuICAgIH0sIFt0YXJnZXQsIHN0YXJ0SW5kZXhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJvdyB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8TmF2aWFnYXRvciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMSB3LVs1MHZ3XVwiPlxuICAgICAgICAgICAgICAgICAgICB7IHBvc3RzIT09dW5kZWZpbmVkICYmIHBvc3RzLm1hcCgoaXRlbTpQb3N0VHlwZSwgaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFdyYXBwZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlQ2xpY2tQb3N0KGl0ZW0sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LXdoaXRlIG5ubiBvcGFjaXR5LTAgei1bMTAwXVwiPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG8hPT11bmRlZmluZWQgJiYgaXRlbS5waG90b1swXS5zdHJpbmdWYWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHctWzIwdnddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgaXNMb2FkaW5nID8gPD48Lz4gOiA8ZGl2IHJlZj17c2V0VGFyZ2V0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTB2aF1cIiAvPiB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVsxMHZoXVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIGRpdntcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKC41KTtcbiAgICB9XG4gICAgJjpob3ZlciBwe1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbmBcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIk5hdmlhZ2F0b3IiLCJzdHlsZWQiLCJmZXRjaFBvc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiY3VyUG9zdFN0b3JlIiwiaXNQb3N0Vmlld09wZW5TdG9yZSIsInBvc3RDcmVhdGVkU3RvcmUiLCJ1cGRhdGVQb3N0IiwiUG9zdEJvYXJkIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJjdXJQb3N0Iiwic2V0Q3VyUG9zdCIsImN1clBvc3RJbmRleCIsInNldEN1clBvc3RJbmRleCIsInBvc3RzIiwic2V0UG9zdHMiLCJkYXRhIiwic3RhcnRJbmRleCIsInNldFN0YXJ0SW5kZXgiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmaXJzdFJlbmRlciIsInNldEZpcnN0UmVuZGVyIiwicG9zdENyZWF0ZWQiLCJzZXRQb3N0Q3JlYXRlZCIsInBvc3RWaWV3T3BlbiIsInNldFBvc3RWaWV3T3BlbiIsImhhbmRsZUNsaWNrUG9zdCIsIml0ZW0iLCJpbmRleCIsInBvc3RJZCIsIm5hbWUiLCJzcGxpdCIsInVuZGVmaW5lZCIsInRoZW4iLCJyZXMiLCJ0ZW1wIiwic3BsaWNlIiwib3B0aW9ucyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJoYW5kbGVGZXRjaERhdGEiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibG9jYXRpb24iLCJjcmVhdGVUaW1lIiwicHJldiIsInNldFRpbWVvdXQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJXcmFwcGVyIiwib25DbGljayIsInAiLCJ0aXRsZSIsInNyYyIsInBob3RvIiwic3RyaW5nVmFsdWUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});