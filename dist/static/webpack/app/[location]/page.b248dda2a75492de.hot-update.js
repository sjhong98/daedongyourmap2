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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator */ \"(app-pages-browser)/./app/[location]/navigator.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* harmony import */ var _updatePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updatePost */ \"(app-pages-browser)/./app/[location]/updatePost.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [curPost, setCurPost] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.curPostStore);\n    const [curPostIndex, setCurPostIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(-1);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(30);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.isPostViewOpenStore);\n    let location;\n    if (props.location) location = props.location;\n    else location = \"all\";\n    let email;\n    if (props.email) email = props.email;\n    else email = \"all\";\n    // postView 열기\n    const handleClickPost = (item, index)=>{\n        setCurPost(item);\n        setCurPostIndex(index);\n        setPostViewOpen(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // 해당 게시물 업데이트\n        const postId = curPost === null || curPost === void 0 ? void 0 : curPost.name.split(\"/\")[6];\n        if (postId !== undefined && curPostIndex !== -1) {\n            (0,_updatePost__WEBPACK_IMPORTED_MODULE_8__.updatePost)(postId).then((res)=>{\n                let temp = [\n                    ...posts\n                ];\n                temp.splice(curPostIndex, 1, res[0]);\n                setPosts(temp);\n            });\n        }\n    }, [\n        postViewOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            // posts[startIndex-1] !== undefined일 경우 -> 더 이상 게시물이 없는 경우\n            if (entry.isIntersecting && posts[startIndex - 1] !== undefined) {\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(location, email, +posts[startIndex - 1].createTime);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 30);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        startIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-row w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        counts: counts\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-1 w-[50vw]\",\n                        children: posts !== undefined && posts.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                                className: \"center\",\n                                onClick: ()=>handleClickPost(item, index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.photo !== undefined && item.photo[0].stringValue,\n                                            alt: item.title,\n                                            width: 400,\n                                            height: 400,\n                                            className: \"aspect-square object-cover object-center w-[20vw]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 118,\n                columnNumber: 35\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"M4pCmnOV5IglDAoLOosjVY1twY0=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ007QUFDRTtBQUNDO0FBQ0k7QUFDSjtBQUM4QztBQUM1QztBQVczQixTQUFTVSxVQUFXQyxLQUFZOztJQUMzQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHVCxzREFBY0EsQ0FBQ0MsZ0VBQVlBO0lBQ3pELE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFTLENBQUM7SUFDMUQsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFhTSxNQUFNUyxJQUFJO0lBQ3pELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHakIsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQVU7SUFDcEQsTUFBTSxDQUFDb0IsY0FBY0MsZ0JBQWdCLEdBQUdwQixzREFBY0EsQ0FBQ0UsdUVBQW1CQTtJQUMxRSxJQUFJbUI7SUFDSixJQUFHaEIsTUFBTWdCLFFBQVEsRUFBRUEsV0FBV2hCLE1BQU1nQixRQUFRO1NBQ3ZDQSxXQUFXO0lBQ2hCLElBQUlDO0lBQ0osSUFBR2pCLE1BQU1pQixLQUFLLEVBQUVBLFFBQVFqQixNQUFNaUIsS0FBSztTQUM5QkEsUUFBUTtJQUViLGNBQWM7SUFDZCxNQUFNQyxrQkFBa0IsQ0FBQ0MsTUFBZUM7UUFDcENoQixXQUFXZTtRQUNYYixnQkFBZ0JjO1FBQ2hCTCxnQkFBZ0I7SUFDcEI7SUFFQXRCLGdEQUFTQSxDQUFDO1FBQ04sY0FBYztRQUNkLE1BQU00QixTQUFTbEIsb0JBQUFBLDhCQUFBQSxRQUFTbUIsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDMUMsSUFBR0YsV0FBV0csYUFBYW5CLGlCQUFpQixDQUFDLEdBQUc7WUFDNUNQLHVEQUFVQSxDQUFDdUIsUUFBUUksSUFBSSxDQUFDLENBQUNDO2dCQUNyQixJQUFJQyxPQUFPO3VCQUFJcEI7aUJBQU07Z0JBQ3JCb0IsS0FBS0MsTUFBTSxDQUFDdkIsY0FBYyxHQUFHcUIsR0FBRyxDQUFDLEVBQUU7Z0JBQ25DbEIsU0FBU21CO1lBQ2I7UUFDSjtJQUNKLEdBQUc7UUFBQ2I7S0FBYTtJQUVqQnJCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTW9DLFVBQVU7WUFDZEMsTUFBTTtZQUNOQyxXQUFXO1FBQ2I7UUFFQSxNQUFNQyxrQkFBa0I7Z0JBQUMsQ0FBQ0MsTUFBVTtZQUNoQywyREFBMkQ7WUFDM0QsSUFBR0EsTUFBTUMsY0FBYyxJQUFJM0IsS0FBSyxDQUFDRyxhQUFXLEVBQUUsS0FBS2MsV0FBVztnQkFDMUQsTUFBTUUsTUFBTWxDLHFEQUFTQSxDQUFDd0IsVUFBVUMsT0FBTyxDQUFDVixLQUFLLENBQUNHLGFBQVcsRUFBRSxDQUFDeUIsVUFBVTtnQkFDdEVULElBQUlELElBQUksQ0FBQyxDQUFDQztvQkFDTixJQUFJQyxPQUFhLEVBQUU7b0JBQ25CLElBQUdwQixVQUFVaUIsV0FBVzt3QkFDcEJHLE9BQU87K0JBQUlwQjsrQkFBVW1CO3lCQUFJO3dCQUN6QmxCLFNBQVNtQjt3QkFDVGhCLGNBQWN5QixDQUFBQSxPQUFRQSxPQUFLO3dCQUMzQnZCLGFBQWE7d0JBQ2J3QixXQUFXOzRCQUNQeEIsYUFBYTt3QkFDakIsR0FBRztvQkFDUDtnQkFDSjtZQUNKO1FBQ0o7UUFFQSxJQUFJeUI7UUFDSixJQUFHckMsUUFBUTtZQUNUcUMsV0FBVyxJQUFJQyxxQkFBcUJQLGlCQUFpQkg7WUFDckRTLFNBQVNFLE9BQU8sQ0FBQ3ZDO1FBQ25CO1FBQ0EsT0FBTztZQUNMLElBQUdxQyxVQUNIQSxTQUFTRyxVQUFVO1FBQ3JCO0lBQ0osR0FBRztRQUFDeEM7UUFBUVM7S0FBVztJQUV2QixxQkFDSSw4REFBQ2dDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNyRCxrREFBVUE7d0JBQUNzRCxRQUFRQTs7Ozs7O2tDQUNwQiw4REFBQ0Y7d0JBQUlDLFdBQVU7a0NBQ1RwQyxVQUFRaUIsYUFBYWpCLE1BQU1zQyxHQUFHLENBQUMsQ0FBQzFCLE1BQWVDOzRCQUM3QyxxQkFDQSw4REFBQzBCO2dDQUVHSCxXQUFVO2dDQUNWSSxTQUFTLElBQUk3QixnQkFBZ0JDLE1BQU1DOztrREFFbkMsOERBQUM0Qjt3Q0FBRUwsV0FBVTtrREFBNkN4QixLQUFLOEIsS0FBSzs7Ozs7O2tEQUNwRSw4REFBQ1A7a0RBQ0csNEVBQUNyRCxrREFBS0E7NENBQ0Y2RCxLQUFLL0IsS0FBS2dDLEtBQUssS0FBRzNCLGFBQWFMLEtBQUtnQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxXQUFXOzRDQUN4REMsS0FBS2xDLEtBQUs4QixLQUFLOzRDQUNmSyxPQUFPOzRDQUNQQyxRQUFROzRDQUNSWixXQUFVOzs7Ozs7Ozs7Ozs7K0JBWGJ2Qjs7Ozs7d0JBZ0JiOzs7Ozs7Ozs7Ozs7WUFHTlIsMEJBQVksOEpBQVEsOERBQUM4QjtnQkFBSWMsS0FBS3REO2dCQUFXeUMsV0FBVTs7Ozs7OzBCQUNyRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUczQjtHQXJHd0I1Qzs7UUFFVUosa0RBQWNBO1FBS0pBLGtEQUFjQTs7O0tBUGxDSTtBQXVHeEIsTUFBTStDLFVBQVV2RCx5REFBTUEsQ0FBQ21ELEdBQUc7TUFBcEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3g/M2YxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE5hdmlhZ2F0b3IgZnJvbSBcIi4vbmF2aWdhdG9yXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgZmV0Y2hQb3N0IH0gZnJvbSBcIi4vZmV0Y2hQb3N0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGN1clBvc3RTdG9yZSwgaXNQb3N0Vmlld09wZW5TdG9yZSwgUG9zdFR5cGUgfSBmcm9tIFwiLi4vcmVjb2lsQ29udGV4dFByb3ZpZGVyXCJcbmltcG9ydCB7IHVwZGF0ZVBvc3QgfSBmcm9tIFwiLi91cGRhdGVQb3N0XCI7XG5pbXBvcnQgeyBDb3VudFR5cGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYXAvZ2V0Q291bnRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBkYXRhOiBQb3N0VHlwZVtdLCBcbiAgICBkYXRhMj86IGFueSwgXG4gICAgbG9jYXRpb24/OiBzdHJpbmdcbiAgICBlbWFpbD86IHN0cmluZyxcbiAgICBjb3VudHM6IENvdW50VHlwZVtdLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Qm9hcmQoIHByb3BzOiBQcm9wcyApIHtcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IFtjdXJQb3N0LCBzZXRDdXJQb3N0XSA9IHVzZVJlY29pbFN0YXRlKGN1clBvc3RTdG9yZSk7XG4gICAgY29uc3QgW2N1clBvc3RJbmRleCwgc2V0Q3VyUG9zdEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oLTEpO1xuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFR5cGVbXT4ocHJvcHMuZGF0YSk7XG4gICAgY29uc3QgW3N0YXJ0SW5kZXgsIHNldFN0YXJ0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigzMCk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbcG9zdFZpZXdPcGVuLCBzZXRQb3N0Vmlld09wZW5dID0gdXNlUmVjb2lsU3RhdGUoaXNQb3N0Vmlld09wZW5TdG9yZSk7XG4gICAgbGV0IGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgaWYocHJvcHMubG9jYXRpb24pIGxvY2F0aW9uID0gcHJvcHMubG9jYXRpb247XG4gICAgZWxzZSBsb2NhdGlvbiA9IFwiYWxsXCI7XG4gICAgbGV0IGVtYWlsOiBzdHJpbmc7XG4gICAgaWYocHJvcHMuZW1haWwpIGVtYWlsID0gcHJvcHMuZW1haWw7XG4gICAgZWxzZSBlbWFpbCA9IFwiYWxsXCI7XG4gICAgXG4gICAgLy8gcG9zdFZpZXcg7Je06riwXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tQb3N0ID0gKGl0ZW06UG9zdFR5cGUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICBzZXRDdXJQb3N0KGl0ZW0pO1xuICAgICAgICBzZXRDdXJQb3N0SW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRQb3N0Vmlld09wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8g7ZW064u5IOqyjOyLnOusvCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgcG9zdElkID0gY3VyUG9zdD8ubmFtZS5zcGxpdChcIi9cIilbNl07XG4gICAgICAgIGlmKHBvc3RJZCAhPT0gdW5kZWZpbmVkICYmIGN1clBvc3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc3QocG9zdElkKS50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gWy4uLnBvc3RzXTtcbiAgICAgICAgICAgICAgICB0ZW1wLnNwbGljZShjdXJQb3N0SW5kZXgsIDEsIHJlc1swXSk7XG4gICAgICAgICAgICAgICAgc2V0UG9zdHModGVtcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgICBcbiAgICB9LCBbcG9zdFZpZXdPcGVuXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAuOCAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVGZXRjaERhdGEgPSAoW2VudHJ5XTphbnkpID0+IHtcbiAgICAgICAgICAgIC8vIHBvc3RzW3N0YXJ0SW5kZXgtMV0gIT09IHVuZGVmaW5lZOydvCDqsr3smrAgLT4g642UIOydtOyDgSDqsozsi5zrrLzsnbQg7JeG64qUIOqyveyasFxuICAgICAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgcG9zdHNbc3RhcnRJbmRleC0xXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2hQb3N0KGxvY2F0aW9uLCBlbWFpbCwgK3Bvc3RzW3N0YXJ0SW5kZXgtMV0uY3JlYXRlVGltZSk7XG4gICAgICAgICAgICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcDphbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZihwb3N0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wID0gWy4uLnBvc3RzLCAuLi5yZXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHModGVtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGFydEluZGV4KHByZXYgPT4gcHJldiszMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCBvYnNlcnZlcjphbnk7XG4gICAgICAgIGlmKHRhcmdldCkge1xuICAgICAgICAgIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZUZldGNoRGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaWYob2JzZXJ2ZXIpXG4gICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9O1xuICAgIH0sIFt0YXJnZXQsIHN0YXJ0SW5kZXhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJvdyB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8TmF2aWFnYXRvciBjb3VudHM9e2NvdW50c30gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEgdy1bNTB2d11cIj5cbiAgICAgICAgICAgICAgICAgICAgeyBwb3N0cyE9PXVuZGVmaW5lZCAmJiBwb3N0cy5tYXAoKGl0ZW06UG9zdFR5cGUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXcmFwcGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrUG9zdChpdGVtLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC13aGl0ZSBubm4gb3BhY2l0eS0wIHotWzEwMF1cIj57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvIT09dW5kZWZpbmVkICYmIGl0ZW0ucGhvdG9bMF0uc3RyaW5nVmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LXNxdWFyZSBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LVsyMHZ3XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IGlzTG9hZGluZyA/IDw+PC8+IDogPGRpdiByZWY9e3NldFRhcmdldH0gY2xhc3NOYW1lPVwidy1mdWxsIGgtWzEwdmhdXCIgLz4gfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTB2aF1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciBkaXZ7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguNSk7XG4gICAgfVxuICAgICY6aG92ZXIgcHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5gXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJOYXZpYWdhdG9yIiwic3R5bGVkIiwiZmV0Y2hQb3N0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsImN1clBvc3RTdG9yZSIsImlzUG9zdFZpZXdPcGVuU3RvcmUiLCJ1cGRhdGVQb3N0IiwiUG9zdEJvYXJkIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJjdXJQb3N0Iiwic2V0Q3VyUG9zdCIsImN1clBvc3RJbmRleCIsInNldEN1clBvc3RJbmRleCIsInBvc3RzIiwic2V0UG9zdHMiLCJkYXRhIiwic3RhcnRJbmRleCIsInNldFN0YXJ0SW5kZXgiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJwb3N0Vmlld09wZW4iLCJzZXRQb3N0Vmlld09wZW4iLCJsb2NhdGlvbiIsImVtYWlsIiwiaGFuZGxlQ2xpY2tQb3N0IiwiaXRlbSIsImluZGV4IiwicG9zdElkIiwibmFtZSIsInNwbGl0IiwidW5kZWZpbmVkIiwidGhlbiIsInJlcyIsInRlbXAiLCJzcGxpY2UiLCJvcHRpb25zIiwicm9vdCIsInRocmVzaG9sZCIsImhhbmRsZUZldGNoRGF0YSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJjcmVhdGVUaW1lIiwicHJldiIsInNldFRpbWVvdXQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjb3VudHMiLCJtYXAiLCJXcmFwcGVyIiwib25DbGljayIsInAiLCJ0aXRsZSIsInNyYyIsInBob3RvIiwic3RyaW5nVmFsdWUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});