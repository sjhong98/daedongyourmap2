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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigator */ \"(app-pages-browser)/./app/[location]/navigator.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const setCurPost = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.curPostStore);\n    const selectedPoint = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.selectedPointStore);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(30);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [firstRender, setFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [postCreated, setPostCreated] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.postCreatedStore);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item)=>{\n        setCurPost(item);\n        setPostViewOpen(true);\n    };\n    // useEffect(() => {\n    //     console.log(props.data2);\n    // }, [])\n    // postView 닫히면 post update\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!firstRender || postCreated) {\n            const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n            res.then((res)=>{\n                let temp = [];\n                if (posts !== undefined) {\n                    temp = [\n                        ...posts\n                    ];\n                    temp.splice(startIndex - 30, 30, ...res);\n                    setPosts(temp);\n                    setPostCreated(false);\n                    console.log(\"post updated\", res);\n                }\n            });\n        } else setFirstRender(false);\n    }, [\n        postViewOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                console.log(\"진입\", startIndex, posts[startIndex - 1].createTime);\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 30);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        startIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(\"startIndex : \", startIndex);\n    }, [\n        startIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-row w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigator__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-1 w-[50vw]\",\n                        children: posts !== undefined && posts.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                                className: \"center\",\n                                onClick: ()=>handleClickPost(item),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.photo !== undefined && item.photo[0].stringValue,\n                                            alt: item.title,\n                                            width: 400,\n                                            height: 400,\n                                            className: \"aspect-square object-cover object-center w-[20vw]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                className: \"w-full h-[10vh] bg-red-500\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 119,\n                columnNumber: 35\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"0Ygl+hrYiWSUsrHsDRcmyDB8jho=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDUTtBQUVDO0FBQ0k7QUFDK0I7QUFDa0Q7QUFDeEY7QUFHdEIsU0FBU2EsVUFBV0MsS0FBbUQ7O0lBQ2xGLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUE7SUFDcEMsTUFBTWEsYUFBYVYseURBQWlCQSxDQUFDQyxnRUFBWUE7SUFDakQsTUFBTVUsZ0JBQWdCWixzREFBY0EsQ0FBQ0ssc0VBQWtCQTtJQUN2RCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFhVSxNQUFNTyxJQUFJO0lBQ3pELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbkIsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQVU7SUFDcEQsTUFBTSxDQUFDc0IsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQVU7SUFDeEQsTUFBTSxDQUFDd0IsYUFBYUMsZUFBZSxHQUFHeEIsc0RBQWNBLENBQUNLLG9FQUFnQkE7SUFDckUsTUFBTSxDQUFDb0IsY0FBY0MsZ0JBQWdCLEdBQUcxQixzREFBY0EsQ0FBQ0ksdUVBQW1CQTtJQUUxRSxjQUFjO0lBQ2QsTUFBTXVCLGtCQUFrQixDQUFDQztRQUNyQmhCLFdBQVdnQjtRQUNYRixnQkFBZ0I7SUFDcEI7SUFFQSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFFVCwyQkFBMkI7SUFDM0I1QixnREFBU0EsQ0FBQztRQUNOLElBQUcsQ0FBQ3VCLGVBQWVFLGFBQWE7WUFDNUIsTUFBTU0sTUFBTWhDLHFEQUFTQSxDQUFDWSxNQUFNcUIsUUFBUSxFQUFFLENBQUNoQixLQUFLLENBQUNHLGFBQVcsRUFBRSxDQUFDYyxVQUFVO1lBQ3JFRixJQUFJRyxJQUFJLENBQUMsQ0FBQ0g7Z0JBQ04sSUFBSUksT0FBYSxFQUFFO2dCQUNuQixJQUFHbkIsVUFBVW9CLFdBQVc7b0JBQ3BCRCxPQUFPOzJCQUFJbkI7cUJBQU07b0JBQ2pCbUIsS0FBS0UsTUFBTSxDQUFDbEIsYUFBVyxJQUFJLE9BQU9ZO29CQUNsQ2QsU0FBU2tCO29CQUNUVCxlQUFlO29CQUNmWSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCUjtnQkFDaEM7WUFDSjtRQUNKLE9BQ0FQLGVBQWU7SUFDbkIsR0FBRztRQUFDRztLQUFhO0lBRWpCM0IsZ0RBQVNBLENBQUM7UUFDTixNQUFNd0MsVUFBVTtZQUNkQyxNQUFNO1lBQ05DLFdBQVc7UUFDYjtRQUVBLE1BQU1DLGtCQUFrQjtnQkFBQyxDQUFDQyxNQUFVO1lBQ2hDLElBQUdBLE1BQU1DLGNBQWMsRUFBRTtnQkFDckJQLFFBQVFDLEdBQUcsQ0FBQyxNQUFNcEIsWUFBWUgsS0FBSyxDQUFDRyxhQUFXLEVBQUUsQ0FBQ2MsVUFBVTtnQkFDNUQsTUFBTUYsTUFBTWhDLHFEQUFTQSxDQUFDWSxNQUFNcUIsUUFBUSxFQUFFLENBQUNoQixLQUFLLENBQUNHLGFBQVcsRUFBRSxDQUFDYyxVQUFVO2dCQUNyRUYsSUFBSUcsSUFBSSxDQUFDLENBQUNIO29CQUNOLElBQUlJLE9BQWEsRUFBRTtvQkFDbkIsSUFBR25CLFVBQVVvQixXQUFXO3dCQUNwQkQsT0FBTzsrQkFBSW5COytCQUFVZTt5QkFBSTt3QkFDekJkLFNBQVNrQjt3QkFDVGYsY0FBYzBCLENBQUFBLE9BQVFBLE9BQUs7d0JBQzNCeEIsYUFBYTt3QkFDYnlCLFdBQVc7NEJBQ1B6QixhQUFhO3dCQUNqQixHQUFHO29CQUNQO2dCQUNKO1lBQ0o7UUFDSjtRQUVBLElBQUkwQjtRQUNKLElBQUdwQyxRQUFRO1lBQ1RvQyxXQUFXLElBQUlDLHFCQUFxQk4saUJBQWlCSDtZQUNyRFEsU0FBU0UsT0FBTyxDQUFDdEM7UUFDbkI7UUFDQSxPQUFPO1lBQ0wsSUFBR29DLFVBQ0hBLFNBQVNHLFVBQVU7UUFDckI7SUFDSixHQUFHO1FBQUN2QztRQUFRTztLQUFXO0lBRXJCbkIsZ0RBQVNBLENBQUM7UUFDUnNDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJwQjtJQUMvQixHQUFHO1FBQUNBO0tBQVc7SUFFakIscUJBQ0ksOERBQUNpQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDNUMsa0RBQVVBOzs7OztrQ0FDWCw4REFBQzJDO3dCQUFJQyxXQUFVO2tDQUNUckMsVUFBUW9CLGFBQWFwQixNQUFNc0MsR0FBRyxDQUFDLENBQUN4QixNQUFleUI7NEJBQzdDLHFCQUNBLDhEQUFDQztnQ0FFR0gsV0FBVTtnQ0FDVkksU0FBUyxJQUFJNUIsZ0JBQWdCQzs7a0RBRTdCLDhEQUFDNEI7d0NBQUVMLFdBQVU7a0RBQTZDdkIsS0FBSzZCLEtBQUs7Ozs7OztrREFDcEUsOERBQUNQO2tEQUNHLDRFQUFDdkQsa0RBQUtBOzRDQUNGK0QsS0FBSzlCLEtBQUsrQixLQUFLLEtBQUd6QixhQUFhTixLQUFLK0IsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsV0FBVzs0Q0FDeERDLEtBQUtqQyxLQUFLNkIsS0FBSzs0Q0FDZkssT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUlosV0FBVTs7Ozs7Ozs7Ozs7OytCQVhiRTs7Ozs7d0JBZ0JiOzs7Ozs7Ozs7Ozs7WUFHTmxDLDBCQUFZLDhKQUFRLDhEQUFDK0I7Z0JBQUljLEtBQUtyRDtnQkFBV3dDLFdBQVU7Ozs7Ozs7Ozs7OztBQUdqRTtHQTdHd0IzQzs7UUFFRE4scURBQWlCQTtRQUNkRCxrREFBY0E7UUFLRUQsa0RBQWNBO1FBQ1pBLGtEQUFjQTs7O0tBVGxDUTtBQStHeEIsTUFBTThDLFVBQVUxRCx5REFBTUEsQ0FBQ3NELEdBQUc7TUFBcEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3g/M2YxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBNYXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFwL21hcFwiO1xuaW1wb3J0IHsgZmV0Y2hQb3N0IH0gZnJvbSBcIi4vZmV0Y2hQb3N0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUsIHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgY3VyUG9zdFN0b3JlLCBpc1Bvc3RWaWV3T3BlblN0b3JlLCBwb3N0Q3JlYXRlZFN0b3JlLCBQb3N0VHlwZSwgc2VsZWN0ZWRQb2ludFN0b3JlIH0gZnJvbSBcIi4uL3JlY29pbENvbnRleHRQcm92aWRlclwiO1xuaW1wb3J0IE5hdmlhZ2F0b3IgZnJvbSBcIi4vbmF2aWdhdG9yXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEJvYXJkKCBwcm9wczp7ZGF0YTpQb3N0VHlwZVtdLCBkYXRhMjphbnksIGxvY2F0aW9uOnN0cmluZ30gKSB7XG4gICAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgICBjb25zdCBzZXRDdXJQb3N0ID0gdXNlU2V0UmVjb2lsU3RhdGUoY3VyUG9zdFN0b3JlKTtcbiAgICBjb25zdCBzZWxlY3RlZFBvaW50ID0gdXNlUmVjb2lsVmFsdWUoc2VsZWN0ZWRQb2ludFN0b3JlKTtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RUeXBlW10+KHByb3BzLmRhdGEpO1xuICAgIGNvbnN0IFtzdGFydEluZGV4LCBzZXRTdGFydEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMzApO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2ZpcnN0UmVuZGVyLCBzZXRGaXJzdFJlbmRlcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBbcG9zdENyZWF0ZWQsIHNldFBvc3RDcmVhdGVkXSA9IHVzZVJlY29pbFN0YXRlKHBvc3RDcmVhdGVkU3RvcmUpO1xuICAgIGNvbnN0IFtwb3N0Vmlld09wZW4sIHNldFBvc3RWaWV3T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShpc1Bvc3RWaWV3T3BlblN0b3JlKTtcbiAgICBcbiAgICAvLyBwb3N0VmlldyDsl7TquLBcbiAgICBjb25zdCBoYW5kbGVDbGlja1Bvc3QgPSAoaXRlbTpQb3N0VHlwZSkgPT4ge1xuICAgICAgICBzZXRDdXJQb3N0KGl0ZW0pO1xuICAgICAgICBzZXRQb3N0Vmlld09wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocHJvcHMuZGF0YTIpO1xuICAgIC8vIH0sIFtdKVxuXG4gICAgLy8gcG9zdFZpZXcg64ur7Z6I66m0IHBvc3QgdXBkYXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoIWZpcnN0UmVuZGVyIHx8IHBvc3RDcmVhdGVkKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaFBvc3QocHJvcHMubG9jYXRpb24sICtwb3N0c1tzdGFydEluZGV4LTFdLmNyZWF0ZVRpbWUpO1xuICAgICAgICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wOmFueVtdID0gW107XG4gICAgICAgICAgICAgICAgaWYocG9zdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wID0gWy4uLnBvc3RzXTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5zcGxpY2Uoc3RhcnRJbmRleC0zMCwgMzAsIC4uLnJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0Q3JlYXRlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCB1cGRhdGVkXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHNldEZpcnN0UmVuZGVyKGZhbHNlKTtcbiAgICB9LCBbcG9zdFZpZXdPcGVuXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAuOCAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVGZXRjaERhdGEgPSAoW2VudHJ5XTphbnkpID0+IHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLsp4TsnoVcIiwgc3RhcnRJbmRleCwgcG9zdHNbc3RhcnRJbmRleC0xXS5jcmVhdGVUaW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaFBvc3QocHJvcHMubG9jYXRpb24sICtwb3N0c1tzdGFydEluZGV4LTFdLmNyZWF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgIHJlcy50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXA6YW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYocG9zdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IFsuLi5wb3N0cywgLi4ucmVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhcnRJbmRleChwcmV2ID0+IHByZXYrMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgb2JzZXJ2ZXI6YW55O1xuICAgICAgICBpZih0YXJnZXQpIHtcbiAgICAgICAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVGZXRjaERhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlmKG9ic2VydmVyKVxuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbdGFyZ2V0LCBzdGFydEluZGV4XSk7XG5cbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRJbmRleCA6IFwiLCBzdGFydEluZGV4KTtcbiAgICAgIH0sIFtzdGFydEluZGV4XSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJvdyB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8TmF2aWFnYXRvciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMSB3LVs1MHZ3XVwiPlxuICAgICAgICAgICAgICAgICAgICB7IHBvc3RzIT09dW5kZWZpbmVkICYmIHBvc3RzLm1hcCgoaXRlbTpQb3N0VHlwZSwgaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFdyYXBwZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlQ2xpY2tQb3N0KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtd2hpdGUgbm5uIG9wYWNpdHktMCB6LVsxMDBdXCI+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90byE9PXVuZGVmaW5lZCAmJiBpdGVtLnBob3RvWzBdLnN0cmluZ1ZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1bMjB2d11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyBpc0xvYWRpbmcgPyA8PjwvPiA6IDxkaXYgcmVmPXtzZXRUYXJnZXR9IGNsYXNzTmFtZT1cInctZnVsbCBoLVsxMHZoXSBiZy1yZWQtNTAwXCIgLz4gfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciBkaXZ7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguNSk7XG4gICAgfVxuICAgICY6aG92ZXIgcHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5gXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZWQiLCJmZXRjaFBvc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsImN1clBvc3RTdG9yZSIsImlzUG9zdFZpZXdPcGVuU3RvcmUiLCJwb3N0Q3JlYXRlZFN0b3JlIiwic2VsZWN0ZWRQb2ludFN0b3JlIiwiTmF2aWFnYXRvciIsIlBvc3RCb2FyZCIsInByb3BzIiwidGFyZ2V0Iiwic2V0VGFyZ2V0Iiwic2V0Q3VyUG9zdCIsInNlbGVjdGVkUG9pbnQiLCJwb3N0cyIsInNldFBvc3RzIiwiZGF0YSIsInN0YXJ0SW5kZXgiLCJzZXRTdGFydEluZGV4IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmlyc3RSZW5kZXIiLCJzZXRGaXJzdFJlbmRlciIsInBvc3RDcmVhdGVkIiwic2V0UG9zdENyZWF0ZWQiLCJwb3N0Vmlld09wZW4iLCJzZXRQb3N0Vmlld09wZW4iLCJoYW5kbGVDbGlja1Bvc3QiLCJpdGVtIiwicmVzIiwibG9jYXRpb24iLCJjcmVhdGVUaW1lIiwidGhlbiIsInRlbXAiLCJ1bmRlZmluZWQiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJoYW5kbGVGZXRjaERhdGEiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicHJldiIsInNldFRpbWVvdXQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsIldyYXBwZXIiLCJvbkNsaWNrIiwicCIsInRpdGxlIiwic3JjIiwicGhvdG8iLCJzdHJpbmdWYWx1ZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});