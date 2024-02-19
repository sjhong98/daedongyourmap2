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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator */ \"(app-pages-browser)/./app/[location]/navigator.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* harmony import */ var _updatePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updatePost */ \"(app-pages-browser)/./app/[location]/updatePost.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [curPost, setCurPost] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.curPostStore);\n    const [curPostIndex, setCurPostIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(-1);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(30);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item, index)=>{\n        setCurPost(item);\n        setCurPostIndex(index);\n        setPostViewOpen(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // 해당 게시물 업데이트\n        const postId = curPost === null || curPost === void 0 ? void 0 : curPost.name.split(\"/\")[6];\n        if (postId !== undefined && curPostIndex !== -1) {\n            (0,_updatePost__WEBPACK_IMPORTED_MODULE_8__.updatePost)(postId).then((res)=>{\n                let temp = [\n                    ...posts\n                ];\n                temp.splice(curPostIndex, 1, res[0]);\n                setPosts(temp);\n            });\n        }\n    }, [\n        postViewOpen\n    ]);\n    // useEffect(() => {\n    //     console.log(props.data2);\n    // }, [])\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            // posts[startIndex-1] !== undefined일 경우 -> 더 이상 게시물이 없는 경우\n            if (entry.isIntersecting && posts[startIndex - 1] !== undefined) {\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 30);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        startIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-row w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-1 w-[50vw]\",\n                        children: posts !== undefined && posts.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                                className: \"center\",\n                                onClick: ()=>handleClickPost(item, index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.photo !== undefined && item.photo[0].stringValue,\n                                            alt: item.title,\n                                            width: 400,\n                                            height: 400,\n                                            className: \"aspect-square object-cover object-center w-[20vw]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 107,\n                columnNumber: 35\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"M4pCmnOV5IglDAoLOosjVY1twY0=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ007QUFDRTtBQUNDO0FBQ0k7QUFDSjtBQUM4QztBQUM1QztBQUUzQixTQUFTVSxVQUFXQyxLQUFtRDs7SUFDbEYsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1Qsc0RBQWNBLENBQUNDLGdFQUFZQTtJQUN6RCxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBUyxDQUFDO0lBQzFELE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBYU0sTUFBTVMsSUFBSTtJQUN6RCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2pCLCtDQUFRQSxDQUFTO0lBQ3JELE1BQU0sQ0FBQ2tCLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU0sQ0FBQ29CLGNBQWNDLGdCQUFnQixHQUFHcEIsc0RBQWNBLENBQUNFLHVFQUFtQkE7SUFFMUUsY0FBYztJQUNkLE1BQU1tQixrQkFBa0IsQ0FBQ0MsTUFBZUM7UUFDcENkLFdBQVdhO1FBQ1hYLGdCQUFnQlk7UUFDaEJILGdCQUFnQjtJQUNwQjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDTixjQUFjO1FBQ2QsTUFBTTBCLFNBQVNoQixvQkFBQUEsOEJBQUFBLFFBQVNpQixJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMxQyxJQUFHRixXQUFXRyxhQUFhakIsaUJBQWlCLENBQUMsR0FBRztZQUM1Q1AsdURBQVVBLENBQUNxQixRQUFRSSxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ3JCLElBQUlDLE9BQU87dUJBQUlsQjtpQkFBTTtnQkFDckJrQixLQUFLQyxNQUFNLENBQUNyQixjQUFjLEdBQUdtQixHQUFHLENBQUMsRUFBRTtnQkFDbkNoQixTQUFTaUI7WUFDYjtRQUNKO0lBQ0osR0FBRztRQUFDWDtLQUFhO0lBRWpCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsU0FBUztJQUVUckIsZ0RBQVNBLENBQUM7UUFDTixNQUFNa0MsVUFBVTtZQUNkQyxNQUFNO1lBQ05DLFdBQVc7UUFDYjtRQUVBLE1BQU1DLGtCQUFrQjtnQkFBQyxDQUFDQyxNQUFVO1lBQ2hDLDJEQUEyRDtZQUMzRCxJQUFHQSxNQUFNQyxjQUFjLElBQUl6QixLQUFLLENBQUNHLGFBQVcsRUFBRSxLQUFLWSxXQUFXO2dCQUMxRCxNQUFNRSxNQUFNaEMscURBQVNBLENBQUNRLE1BQU1pQyxRQUFRLEVBQUUsQ0FBQzFCLEtBQUssQ0FBQ0csYUFBVyxFQUFFLENBQUN3QixVQUFVO2dCQUNyRVYsSUFBSUQsSUFBSSxDQUFDLENBQUNDO29CQUNOLElBQUlDLE9BQWEsRUFBRTtvQkFDbkIsSUFBR2xCLFVBQVVlLFdBQVc7d0JBQ3BCRyxPQUFPOytCQUFJbEI7K0JBQVVpQjt5QkFBSTt3QkFDekJoQixTQUFTaUI7d0JBQ1RkLGNBQWN3QixDQUFBQSxPQUFRQSxPQUFLO3dCQUMzQnRCLGFBQWE7d0JBQ2J1QixXQUFXOzRCQUNQdkIsYUFBYTt3QkFDakIsR0FBRztvQkFDUDtnQkFDSjtZQUNKO1FBQ0o7UUFFQSxJQUFJd0I7UUFDSixJQUFHcEMsUUFBUTtZQUNUb0MsV0FBVyxJQUFJQyxxQkFBcUJSLGlCQUFpQkg7WUFDckRVLFNBQVNFLE9BQU8sQ0FBQ3RDO1FBQ25CO1FBQ0EsT0FBTztZQUNMLElBQUdvQyxVQUNIQSxTQUFTRyxVQUFVO1FBQ3JCO0lBQ0osR0FBRztRQUFDdkM7UUFBUVM7S0FBVztJQUV2QixxQkFDSSw4REFBQytCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNwRCxrREFBVUE7Ozs7O2tDQUNYLDhEQUFDbUQ7d0JBQUlDLFdBQVU7a0NBQ1RuQyxVQUFRZSxhQUFhZixNQUFNb0MsR0FBRyxDQUFDLENBQUMxQixNQUFlQzs0QkFDN0MscUJBQ0EsOERBQUMwQjtnQ0FFR0YsV0FBVTtnQ0FDVkcsU0FBUyxJQUFJN0IsZ0JBQWdCQyxNQUFNQzs7a0RBRW5DLDhEQUFDNEI7d0NBQUVKLFdBQVU7a0RBQTZDekIsS0FBSzhCLEtBQUs7Ozs7OztrREFDcEUsOERBQUNOO2tEQUNHLDRFQUFDcEQsa0RBQUtBOzRDQUNGMkQsS0FBSy9CLEtBQUtnQyxLQUFLLEtBQUczQixhQUFhTCxLQUFLZ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsV0FBVzs0Q0FDeERDLEtBQUtsQyxLQUFLOEIsS0FBSzs0Q0FDZkssT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUlgsV0FBVTs7Ozs7Ozs7Ozs7OytCQVhieEI7Ozs7O3dCQWdCYjs7Ozs7Ozs7Ozs7O1lBR05OLDBCQUFZLDhKQUFRLDhEQUFDNkI7Z0JBQUlhLEtBQUtwRDtnQkFBV3dDLFdBQVU7Ozs7OzswQkFDckQsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHM0I7R0FuR3dCM0M7O1FBRVVKLGtEQUFjQTtRQUtKQSxrREFBY0E7OztLQVBsQ0k7QUFxR3hCLE1BQU02QyxVQUFVckQseURBQU1BLENBQUNrRCxHQUFHO01BQXBCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xvY2F0aW9uXS9wb3N0Qm9hcmQudHN4PzNmMWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBOYXZpYWdhdG9yIGZyb20gXCIuL25hdmlnYXRvclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGZldGNoUG9zdCB9IGZyb20gXCIuL2ZldGNoUG9zdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBjdXJQb3N0U3RvcmUsIGlzUG9zdFZpZXdPcGVuU3RvcmUsIFBvc3RUeXBlIH0gZnJvbSBcIi4uL3JlY29pbENvbnRleHRQcm92aWRlclwiXG5pbXBvcnQgeyB1cGRhdGVQb3N0IH0gZnJvbSBcIi4vdXBkYXRlUG9zdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Qm9hcmQoIHByb3BzOntkYXRhOlBvc3RUeXBlW10sIGRhdGEyOmFueSwgbG9jYXRpb246c3RyaW5nfSApIHtcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IFtjdXJQb3N0LCBzZXRDdXJQb3N0XSA9IHVzZVJlY29pbFN0YXRlKGN1clBvc3RTdG9yZSk7XG4gICAgY29uc3QgW2N1clBvc3RJbmRleCwgc2V0Q3VyUG9zdEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oLTEpO1xuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFR5cGVbXT4ocHJvcHMuZGF0YSk7XG4gICAgY29uc3QgW3N0YXJ0SW5kZXgsIHNldFN0YXJ0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigzMCk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbcG9zdFZpZXdPcGVuLCBzZXRQb3N0Vmlld09wZW5dID0gdXNlUmVjb2lsU3RhdGUoaXNQb3N0Vmlld09wZW5TdG9yZSk7XG4gICAgXG4gICAgLy8gcG9zdFZpZXcg7Je06riwXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tQb3N0ID0gKGl0ZW06UG9zdFR5cGUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICBzZXRDdXJQb3N0KGl0ZW0pO1xuICAgICAgICBzZXRDdXJQb3N0SW5kZXgoaW5kZXgpO1xuICAgICAgICBzZXRQb3N0Vmlld09wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8g7ZW064u5IOqyjOyLnOusvCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgcG9zdElkID0gY3VyUG9zdD8ubmFtZS5zcGxpdChcIi9cIilbNl07XG4gICAgICAgIGlmKHBvc3RJZCAhPT0gdW5kZWZpbmVkICYmIGN1clBvc3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc3QocG9zdElkKS50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gWy4uLnBvc3RzXTtcbiAgICAgICAgICAgICAgICB0ZW1wLnNwbGljZShjdXJQb3N0SW5kZXgsIDEsIHJlc1swXSk7XG4gICAgICAgICAgICAgICAgc2V0UG9zdHModGVtcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgICBcbiAgICB9LCBbcG9zdFZpZXdPcGVuXSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHByb3BzLmRhdGEyKTtcbiAgICAvLyB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAuOCAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVGZXRjaERhdGEgPSAoW2VudHJ5XTphbnkpID0+IHtcbiAgICAgICAgICAgIC8vIHBvc3RzW3N0YXJ0SW5kZXgtMV0gIT09IHVuZGVmaW5lZOydvCDqsr3smrAgLT4g642UIOydtOyDgSDqsozsi5zrrLzsnbQg7JeG64qUIOqyveyasFxuICAgICAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgcG9zdHNbc3RhcnRJbmRleC0xXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2hQb3N0KHByb3BzLmxvY2F0aW9uLCArcG9zdHNbc3RhcnRJbmRleC0xXS5jcmVhdGVUaW1lKTtcbiAgICAgICAgICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wOmFueVtdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmKHBvc3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAgPSBbLi4ucG9zdHMsIC4uLnJlc107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyh0ZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXJ0SW5kZXgocHJldiA9PiBwcmV2KzMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IG9ic2VydmVyOmFueTtcbiAgICAgICAgaWYodGFyZ2V0KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlRmV0Y2hEYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBpZihvYnNlcnZlcilcbiAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH07XG4gICAgfSwgW3RhcmdldCwgc3RhcnRJbmRleF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtcm93IHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxOYXZpYWdhdG9yIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0xIHctWzUwdnddXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgcG9zdHMhPT11bmRlZmluZWQgJiYgcG9zdHMubWFwKChpdGVtOlBvc3RUeXBlLCBpbmRleDpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8V3JhcHBlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVDbGlja1Bvc3QoaXRlbSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtd2hpdGUgbm5uIG9wYWNpdHktMCB6LVsxMDBdXCI+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90byE9PXVuZGVmaW5lZCAmJiBpdGVtLnBob3RvWzBdLnN0cmluZ1ZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1bMjB2d11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyBpc0xvYWRpbmcgPyA8PjwvPiA6IDxkaXYgcmVmPXtzZXRUYXJnZXR9IGNsYXNzTmFtZT1cInctZnVsbCBoLVsxMHZoXVwiIC8+IH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzEwdmhdXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIgZGl2e1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjUpO1xuICAgIH1cbiAgICAmOmhvdmVyIHB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuYFxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTmF2aWFnYXRvciIsInN0eWxlZCIsImZldGNoUG9zdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJjdXJQb3N0U3RvcmUiLCJpc1Bvc3RWaWV3T3BlblN0b3JlIiwidXBkYXRlUG9zdCIsIlBvc3RCb2FyZCIsInByb3BzIiwidGFyZ2V0Iiwic2V0VGFyZ2V0IiwiY3VyUG9zdCIsInNldEN1clBvc3QiLCJjdXJQb3N0SW5kZXgiLCJzZXRDdXJQb3N0SW5kZXgiLCJwb3N0cyIsInNldFBvc3RzIiwiZGF0YSIsInN0YXJ0SW5kZXgiLCJzZXRTdGFydEluZGV4IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicG9zdFZpZXdPcGVuIiwic2V0UG9zdFZpZXdPcGVuIiwiaGFuZGxlQ2xpY2tQb3N0IiwiaXRlbSIsImluZGV4IiwicG9zdElkIiwibmFtZSIsInNwbGl0IiwidW5kZWZpbmVkIiwidGhlbiIsInJlcyIsInRlbXAiLCJzcGxpY2UiLCJvcHRpb25zIiwicm9vdCIsInRocmVzaG9sZCIsImhhbmRsZUZldGNoRGF0YSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJsb2NhdGlvbiIsImNyZWF0ZVRpbWUiLCJwcmV2Iiwic2V0VGltZW91dCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIldyYXBwZXIiLCJvbkNsaWNrIiwicCIsInRpdGxlIiwic3JjIiwicGhvdG8iLCJzdHJpbmdWYWx1ZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});