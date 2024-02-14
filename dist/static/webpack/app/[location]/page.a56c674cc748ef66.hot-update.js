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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const setCurPost = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.curPostStore);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(40);\n    const [endIndex, setEndIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(80);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [firstRender, setFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item)=>{\n        setCurPost(item);\n        setPostViewOpen(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(data2);\n    }, []);\n    // postView 닫히면 post update\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!firstRender) {\n            const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(startIndex - 40, props.location, endIndex - 40);\n            res.then((res)=>{\n                let temp = [];\n                if (posts !== undefined) {\n                    temp = [\n                        ...posts\n                    ];\n                    temp.splice(startIndex - 40, 40, ...res);\n                    setPosts(temp);\n                    console.log(\"post updated\", res);\n                }\n            });\n        } else setFirstRender(false);\n    }, [\n        postViewOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                console.log(\"진입\", startIndex, endIndex);\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(startIndex, props.location, endIndex);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 40);\n                        setEndIndex((prev)=>prev + 40);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        endIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-1\",\n                children: posts !== undefined && posts.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                        className: \"center\",\n                        onClick: ()=>handleClickPost(item),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: item.photo !== undefined && item.photo[0].stringValue,\n                                    alt: item.title,\n                                    width: 400,\n                                    height: 400,\n                                    className: \"aspect-square object-cover object-center w-[20vw]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-full h-[100vh]\"\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"Vazhc6sY8yPc5SX6tRePKG84aFw=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDUTtBQUNDO0FBQ0k7QUFDZTtBQUM0QjtBQUV4RSxTQUFTUyxVQUFXQyxLQUFtRDs7SUFDbEYsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNUyxhQUFhUCx5REFBaUJBLENBQUNDLGdFQUFZQTtJQUNqRCxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQXlCTSxNQUFNTSxJQUFJO0lBQ3JFLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFTO0lBQ2pELE1BQU0sQ0FBQ2lCLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU0sQ0FBQ21CLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFVO0lBQ3hELE1BQU0sQ0FBQ3FCLGNBQWNDLGdCQUFnQixHQUFHckIsc0RBQWNBLENBQUNHLHVFQUFtQkE7SUFFMUUsY0FBYztJQUNkLE1BQU1tQixrQkFBa0IsQ0FBQ0M7UUFDckJmLFdBQVdlO1FBQ1hGLGdCQUFnQjtJQUNwQjtJQUVBdkIsZ0RBQVNBLENBQUM7UUFDTjBCLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDaEIsR0FBRyxFQUFFO0lBRUwsMkJBQTJCO0lBQzNCNUIsZ0RBQVNBLENBQUM7UUFDTixJQUFHLENBQUNvQixhQUFhO1lBQ2IsTUFBTVMsTUFBTTlCLHFEQUFTQSxDQUFDZSxhQUFXLElBQUlQLE1BQU11QixRQUFRLEVBQUVkLFdBQVM7WUFDOURhLElBQUlFLElBQUksQ0FBQyxDQUFDRjtnQkFDTixJQUFJRyxPQUFhLEVBQUU7Z0JBQ25CLElBQUdyQixVQUFVc0IsV0FBVztvQkFDcEJELE9BQU87MkJBQUlyQjtxQkFBTTtvQkFDakJxQixLQUFLRSxNQUFNLENBQUNwQixhQUFXLElBQUksT0FBT2U7b0JBQ2xDakIsU0FBU29CO29CQUNUTixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRTtnQkFDaEM7WUFDSjtRQUNKLE9BQ0FSLGVBQWU7SUFDbkIsR0FBRztRQUFDQztLQUFhO0lBRWpCdEIsZ0RBQVNBLENBQUM7UUFDTixNQUFNbUMsVUFBVTtZQUNkQyxNQUFNO1lBQ05DLFdBQVc7UUFDYjtRQUVBLE1BQU1DLGtCQUFrQjtnQkFBQyxDQUFDQyxNQUFVO1lBQ2hDLElBQUdBLE1BQU1DLGNBQWMsRUFBRTtnQkFDckJkLFFBQVFDLEdBQUcsQ0FBQyxNQUFNYixZQUFZRTtnQkFDOUIsTUFBTWEsTUFBTTlCLHFEQUFTQSxDQUFDZSxZQUFZUCxNQUFNdUIsUUFBUSxFQUFFZDtnQkFDbERhLElBQUlFLElBQUksQ0FBQyxDQUFDRjtvQkFDTixJQUFJRyxPQUFhLEVBQUU7b0JBQ25CLElBQUdyQixVQUFVc0IsV0FBVzt3QkFDcEJELE9BQU87K0JBQUlyQjsrQkFBVWtCO3lCQUFJO3dCQUN6QmpCLFNBQVNvQjt3QkFDVGpCLGNBQWMsQ0FBQzBCLE9BQU9BLE9BQUs7d0JBQzNCeEIsWUFBWSxDQUFDd0IsT0FBT0EsT0FBSzt3QkFDekJ0QixhQUFhO3dCQUNidUIsV0FBVzs0QkFDUHZCLGFBQWE7d0JBQ2pCLEdBQUc7b0JBQ1A7Z0JBQ0o7WUFDSjtRQUNKO1FBRUEsSUFBSXdCO1FBQ0osSUFBR25DLFFBQVE7WUFDVG1DLFdBQVcsSUFBSUMscUJBQXFCTixpQkFBaUJIO1lBQ3JEUSxTQUFTRSxPQUFPLENBQUNyQztRQUNuQjtRQUNBLE9BQU87WUFDTCxJQUFHbUMsVUFDSEEsU0FBU0csVUFBVTtRQUNyQjtJQUNGLEdBQUc7UUFBQ3RDO1FBQVFRO0tBQVM7SUFFdkIscUJBQ0ksOERBQUMrQjs7MEJBQ0csOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNUckMsVUFBUXNCLGFBQWF0QixNQUFNc0MsR0FBRyxDQUFDLENBQUN4QixNQUFleUI7b0JBQzdDLHFCQUNBLDhEQUFDQzt3QkFFR0gsV0FBVTt3QkFDVkksU0FBUyxJQUFJNUIsZ0JBQWdCQzs7MENBRTdCLDhEQUFDNEI7Z0NBQUVMLFdBQVU7MENBQTZDdkIsS0FBSzZCLEtBQUs7Ozs7OzswQ0FDcEUsOERBQUNQOzBDQUNHLDRFQUFDbEQsbURBQUtBO29DQUNGMEQsS0FBSzlCLEtBQUsrQixLQUFLLEtBQUd2QixhQUFhUixLQUFLK0IsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsV0FBVztvQ0FDeERDLEtBQUtqQyxLQUFLNkIsS0FBSztvQ0FDZkssT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUlosV0FBVTs7Ozs7Ozs7Ozs7O3VCQVhiRTs7Ozs7Z0JBZ0JiOzs7Ozs7MEJBRUosOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0F4R3dCMUM7O1FBRURILHFEQUFpQkE7UUFNSUQsa0RBQWNBOzs7S0FSbENJO0FBMEd4QixNQUFNNkMsVUFBVXJELHlEQUFNQSxDQUFDaUQsR0FBRztNQUFwQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhdGlvbl0vcG9zdEJvYXJkLnRzeD8zZjFlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgZmV0Y2hQb3N0IH0gZnJvbSBcIi4vZmV0Y2hQb3N0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBjdXJQb3N0U3RvcmUsIGlzUG9zdFZpZXdPcGVuU3RvcmUsIFBvc3RUeXBlIH0gZnJvbSBcIi4uL3JlY29pbENvbnRleHRQcm92aWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Qm9hcmQoIHByb3BzOntkYXRhOlBvc3RUeXBlW10sIGRhdGEyOmFueSwgbG9jYXRpb246c3RyaW5nfSApIHtcbiAgICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGU8YW55PigpO1xuICAgIGNvbnN0IHNldEN1clBvc3QgPSB1c2VTZXRSZWNvaWxTdGF0ZShjdXJQb3N0U3RvcmUpO1xuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFR5cGVbXSB8IHVuZGVmaW5lZD4ocHJvcHMuZGF0YSk7XG4gICAgY29uc3QgW3N0YXJ0SW5kZXgsIHNldFN0YXJ0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPig0MCk7XG4gICAgY29uc3QgW2VuZEluZGV4LCBzZXRFbmRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDgwKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtmaXJzdFJlbmRlciwgc2V0Rmlyc3RSZW5kZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgY29uc3QgW3Bvc3RWaWV3T3Blbiwgc2V0UG9zdFZpZXdPcGVuXSA9IHVzZVJlY29pbFN0YXRlKGlzUG9zdFZpZXdPcGVuU3RvcmUpO1xuICAgIFxuICAgIC8vIHBvc3RWaWV3IOyXtOq4sFxuICAgIGNvbnN0IGhhbmRsZUNsaWNrUG9zdCA9IChpdGVtOlBvc3RUeXBlKSA9PiB7XG4gICAgICAgIHNldEN1clBvc3QoaXRlbSk7XG4gICAgICAgIHNldFBvc3RWaWV3T3Blbih0cnVlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhMik7XG4gICAgfSwgW10pXG5cbiAgICAvLyBwb3N0VmlldyDri6vtnojrqbQgcG9zdCB1cGRhdGVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighZmlyc3RSZW5kZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoUG9zdChzdGFydEluZGV4LTQwLCBwcm9wcy5sb2NhdGlvbiwgZW5kSW5kZXgtNDApO1xuICAgICAgICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wOmFueVtdID0gW107XG4gICAgICAgICAgICAgICAgaWYocG9zdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wID0gWy4uLnBvc3RzXTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5zcGxpY2Uoc3RhcnRJbmRleC00MCwgNDAsIC4uLnJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3QgdXBkYXRlZFwiLCByZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZVxuICAgICAgICBzZXRGaXJzdFJlbmRlcihmYWxzZSk7XG4gICAgfSwgW3Bvc3RWaWV3T3Blbl0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgdGhyZXNob2xkOiAwLjggIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlRmV0Y2hEYXRhID0gKFtlbnRyeV06YW55KSA9PiB7XG4gICAgICAgICAgICBpZihlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi7KeE7J6FXCIsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaFBvc3Qoc3RhcnRJbmRleCwgcHJvcHMubG9jYXRpb24sIGVuZEluZGV4KTtcbiAgICAgICAgICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wOmFueVtdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmKHBvc3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAgPSBbLi4ucG9zdHMsIC4uLnJlc107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyh0ZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXJ0SW5kZXgoKHByZXYpPT5wcmV2KzQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVuZEluZGV4KChwcmV2KT0+cHJldis0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCBvYnNlcnZlcjphbnk7XG4gICAgICAgIGlmKHRhcmdldCkge1xuICAgICAgICAgIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZUZldGNoRGF0YSwgb3B0aW9ucyk7XG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgaWYob2JzZXJ2ZXIpXG4gICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9O1xuICAgICAgfSwgW3RhcmdldCwgZW5kSW5kZXhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICB7IHBvc3RzIT09dW5kZWZpbmVkICYmIHBvc3RzLm1hcCgoaXRlbTpQb3N0VHlwZSwgaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxXcmFwcGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrUG9zdChpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC13aGl0ZSBubm4gb3BhY2l0eS0wIHotWzEwMF1cIj57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvIT09dW5kZWZpbmVkICYmIGl0ZW0ucGhvdG9bMF0uc3RyaW5nVmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHctWzIwdnddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVsxMDB2aF1cIiAvPlxuICAgICAgICAgICAgICAgIHsvKiB7IGlzTG9hZGluZyA/IDw+PC8+IDogPGRpdiByZWY9e3NldFRhcmdldH0gY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1bMTB2aF0gYmctcmVkLTUwMFwiIC8+IH0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIgZGl2e1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjUpO1xuICAgIH1cbiAgICAmOmhvdmVyIHB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuYFxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVkIiwiZmV0Y2hQb3N0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZVNldFJlY29pbFN0YXRlIiwiY3VyUG9zdFN0b3JlIiwiaXNQb3N0Vmlld09wZW5TdG9yZSIsIlBvc3RCb2FyZCIsInByb3BzIiwidGFyZ2V0Iiwic2V0VGFyZ2V0Iiwic2V0Q3VyUG9zdCIsInBvc3RzIiwic2V0UG9zdHMiLCJkYXRhIiwic3RhcnRJbmRleCIsInNldFN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInNldEVuZEluZGV4IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmlyc3RSZW5kZXIiLCJzZXRGaXJzdFJlbmRlciIsInBvc3RWaWV3T3BlbiIsInNldFBvc3RWaWV3T3BlbiIsImhhbmRsZUNsaWNrUG9zdCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGF0YTIiLCJyZXMiLCJsb2NhdGlvbiIsInRoZW4iLCJ0ZW1wIiwidW5kZWZpbmVkIiwic3BsaWNlIiwib3B0aW9ucyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJoYW5kbGVGZXRjaERhdGEiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicHJldiIsInNldFRpbWVvdXQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsIldyYXBwZXIiLCJvbkNsaWNrIiwicCIsInRpdGxlIiwic3JjIiwicGhvdG8iLCJzdHJpbmdWYWx1ZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});