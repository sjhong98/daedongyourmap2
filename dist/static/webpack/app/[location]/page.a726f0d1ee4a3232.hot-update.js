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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const setCurPost = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.curPostStore);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(40);\n    const [endIndex, setEndIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(80);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [firstRender, setFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_6__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item)=>{\n        setCurPost(item);\n        setPostViewOpen(true);\n    };\n    // postView 닫히면 post update\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!firstRender) {\n            const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(startIndex - 40, props.location, endIndex - 40);\n            res.then((res)=>{\n                let temp = [];\n                if (posts !== undefined) {\n                    temp = [\n                        ...posts\n                    ];\n                    temp.splice(startIndex - 40, 40, ...res);\n                    setPosts(temp);\n                    console.log(\"post updated\", res);\n                }\n            });\n        } else setFirstRender(false);\n    }, [\n        postViewOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                console.log(\"진입\", startIndex, endIndex);\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_3__.fetchPost)(startIndex, props.location, endIndex);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 40);\n                        setEndIndex((prev)=>prev + 40);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        endIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-3 gap-1 min-h-[100vh]\",\n        children: [\n            posts !== undefined && posts.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                    className: \"center\",\n                    onClick: ()=>handleClickPost(item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"absolute text-white nnn opacity-0 z-[100]\",\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: item.photo !== undefined && item.photo[0].stringValue,\n                                alt: item.title,\n                                width: 400,\n                                height: 400,\n                                className: \"aspect-square object-cover object-center w-[20vw]\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"R2dv1SEtCJW6cCpefal2pg/W530=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDUTtBQUNDO0FBQ0k7QUFDZTtBQUM0QjtBQUV4RSxTQUFTUyxVQUFXQyxLQUFtRDs7SUFDbEYsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNUyxhQUFhUCx5REFBaUJBLENBQUNDLGdFQUFZQTtJQUNqRCxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQXlCTSxNQUFNTSxJQUFJO0lBQ3JFLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFTO0lBQ2pELE1BQU0sQ0FBQ2lCLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU0sQ0FBQ21CLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFVO0lBQ3hELE1BQU0sQ0FBQ3FCLGNBQWNDLGdCQUFnQixHQUFHckIsc0RBQWNBLENBQUNHLHVFQUFtQkE7SUFFMUUsY0FBYztJQUNkLE1BQU1tQixrQkFBa0IsQ0FBQ0M7UUFDckJmLFdBQVdlO1FBQ1hGLGdCQUFnQjtJQUNwQjtJQUVBLDJCQUEyQjtJQUMzQnZCLGdEQUFTQSxDQUFDO1FBQ04sSUFBRyxDQUFDb0IsYUFBYTtZQUNiLE1BQU1NLE1BQU0zQixxREFBU0EsQ0FBQ2UsYUFBVyxJQUFJUCxNQUFNb0IsUUFBUSxFQUFFWCxXQUFTO1lBQzlEVSxJQUFJRSxJQUFJLENBQUMsQ0FBQ0Y7Z0JBQ04sSUFBSUcsT0FBYSxFQUFFO2dCQUNuQixJQUFHbEIsVUFBVW1CLFdBQVc7b0JBQ3BCRCxPQUFPOzJCQUFJbEI7cUJBQU07b0JBQ2pCa0IsS0FBS0UsTUFBTSxDQUFDakIsYUFBVyxJQUFJLE9BQU9ZO29CQUNsQ2QsU0FBU2lCO29CQUNURyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCUDtnQkFDaEM7WUFDSjtRQUNKLE9BQ0FMLGVBQWU7SUFDbkIsR0FBRztRQUFDQztLQUFhO0lBRWpCdEIsZ0RBQVNBLENBQUM7UUFDTixNQUFNa0MsVUFBVTtZQUNkQyxNQUFNO1lBQ05DLFdBQVc7UUFDYjtRQUVBLE1BQU1DLGtCQUFrQjtnQkFBQyxDQUFDQyxNQUFVO1lBQ2hDLElBQUdBLE1BQU1DLGNBQWMsRUFBRTtnQkFDckJQLFFBQVFDLEdBQUcsQ0FBQyxNQUFNbkIsWUFBWUU7Z0JBQzlCLE1BQU1VLE1BQU0zQixxREFBU0EsQ0FBQ2UsWUFBWVAsTUFBTW9CLFFBQVEsRUFBRVg7Z0JBQ2xEVSxJQUFJRSxJQUFJLENBQUMsQ0FBQ0Y7b0JBQ04sSUFBSUcsT0FBYSxFQUFFO29CQUNuQixJQUFHbEIsVUFBVW1CLFdBQVc7d0JBQ3BCRCxPQUFPOytCQUFJbEI7K0JBQVVlO3lCQUFJO3dCQUN6QmQsU0FBU2lCO3dCQUNUZCxjQUFjLENBQUN5QixPQUFPQSxPQUFLO3dCQUMzQnZCLFlBQVksQ0FBQ3VCLE9BQU9BLE9BQUs7d0JBQ3pCckIsYUFBYTt3QkFDYnNCLFdBQVc7NEJBQ1B0QixhQUFhO3dCQUNqQixHQUFHO29CQUNQO2dCQUNKO1lBQ0o7UUFDSjtRQUVBLElBQUl1QjtRQUNKLElBQUdsQyxRQUFRO1lBQ1RrQyxXQUFXLElBQUlDLHFCQUFxQk4saUJBQWlCSDtZQUNyRFEsU0FBU0UsT0FBTyxDQUFDcEM7UUFDbkI7UUFDQSxPQUFPO1lBQ0wsSUFBR2tDLFVBQ0hBLFNBQVNHLFVBQVU7UUFDckI7SUFDRixHQUFHO1FBQUNyQztRQUFRUTtLQUFTO0lBRXZCLHFCQUNJLDhEQUFDOEI7UUFBSUMsV0FBVTs7WUFDVHBDLFVBQVFtQixhQUFhbkIsTUFBTXFDLEdBQUcsQ0FBQyxDQUFDdkIsTUFBZXdCO2dCQUM3QyxxQkFDQSw4REFBQ0M7b0JBRUdILFdBQVU7b0JBQ1ZJLFNBQVMsSUFBSTNCLGdCQUFnQkM7O3NDQUU3Qiw4REFBQzJCOzRCQUFFTCxXQUFVO3NDQUE2Q3RCLEtBQUs0QixLQUFLOzs7Ozs7c0NBQ3BFLDhEQUFDUDtzQ0FDRyw0RUFBQ2pELG1EQUFLQTtnQ0FDRnlELEtBQUs3QixLQUFLOEIsS0FBSyxLQUFHekIsYUFBYUwsS0FBSzhCLEtBQUssQ0FBQyxFQUFFLENBQUNDLFdBQVc7Z0NBQ3hEQyxLQUFLaEMsS0FBSzRCLEtBQUs7Z0NBQ2ZLLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JaLFdBQVU7Ozs7Ozs7Ozs7OzttQkFYYkU7Ozs7O1lBZ0JiOzBCQUNBLDhEQUFDSDtnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBSzNCO0dBakd3QnpDOztRQUVESCxxREFBaUJBO1FBTUlELGtEQUFjQTs7O0tBUmxDSTtBQW1HeEIsTUFBTTRDLFVBQVVwRCx5REFBTUEsQ0FBQ2dELEdBQUc7TUFBcEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3g/M2YxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGZldGNoUG9zdCB9IGZyb20gXCIuL2ZldGNoUG9zdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgY3VyUG9zdFN0b3JlLCBpc1Bvc3RWaWV3T3BlblN0b3JlLCBQb3N0VHlwZSB9IGZyb20gXCIuLi9yZWNvaWxDb250ZXh0UHJvdmlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEJvYXJkKCBwcm9wczp7ZGF0YTpQb3N0VHlwZVtdLCBkYXRhMjphbnksIGxvY2F0aW9uOnN0cmluZ30gKSB7XG4gICAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgICBjb25zdCBzZXRDdXJQb3N0ID0gdXNlU2V0UmVjb2lsU3RhdGUoY3VyUG9zdFN0b3JlKTtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RUeXBlW10gfCB1bmRlZmluZWQ+KHByb3BzLmRhdGEpO1xuICAgIGNvbnN0IFtzdGFydEluZGV4LCBzZXRTdGFydEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oNDApO1xuICAgIGNvbnN0IFtlbmRJbmRleCwgc2V0RW5kSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPig4MCk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbZmlyc3RSZW5kZXIsIHNldEZpcnN0UmVuZGVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIGNvbnN0IFtwb3N0Vmlld09wZW4sIHNldFBvc3RWaWV3T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShpc1Bvc3RWaWV3T3BlblN0b3JlKTtcbiAgICBcbiAgICAvLyBwb3N0VmlldyDsl7TquLBcbiAgICBjb25zdCBoYW5kbGVDbGlja1Bvc3QgPSAoaXRlbTpQb3N0VHlwZSkgPT4ge1xuICAgICAgICBzZXRDdXJQb3N0KGl0ZW0pO1xuICAgICAgICBzZXRQb3N0Vmlld09wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gcG9zdFZpZXcg64ur7Z6I66m0IHBvc3QgdXBkYXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoIWZpcnN0UmVuZGVyKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaFBvc3Qoc3RhcnRJbmRleC00MCwgcHJvcHMubG9jYXRpb24sIGVuZEluZGV4LTQwKTtcbiAgICAgICAgICAgIHJlcy50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcDphbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmKHBvc3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IFsuLi5wb3N0c107XG4gICAgICAgICAgICAgICAgICAgIHRlbXAuc3BsaWNlKHN0YXJ0SW5kZXgtNDAsIDQwLCAuLi5yZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyh0ZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IHVwZGF0ZWRcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpO1xuICAgIH0sIFtwb3N0Vmlld09wZW5dKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgIHRocmVzaG9sZDogMC44ICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUZldGNoRGF0YSA9IChbZW50cnldOmFueSkgPT4ge1xuICAgICAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuynhOyehVwiLCBzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2hQb3N0KHN0YXJ0SW5kZXgsIHByb3BzLmxvY2F0aW9uLCBlbmRJbmRleCk7XG4gICAgICAgICAgICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcDphbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZihwb3N0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wID0gWy4uLnBvc3RzLCAuLi5yZXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHModGVtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGFydEluZGV4KChwcmV2KT0+cHJldis0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFbmRJbmRleCgocHJldik9PnByZXYrNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgb2JzZXJ2ZXI6YW55O1xuICAgICAgICBpZih0YXJnZXQpIHtcbiAgICAgICAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVGZXRjaERhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlmKG9ic2VydmVyKVxuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFt0YXJnZXQsIGVuZEluZGV4XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEgbWluLWgtWzEwMHZoXVwiPlxuICAgICAgICAgICAgeyBwb3N0cyE9PXVuZGVmaW5lZCAmJiBwb3N0cy5tYXAoKGl0ZW06UG9zdFR5cGUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFdyYXBwZXIgXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aGFuZGxlQ2xpY2tQb3N0KGl0ZW0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC13aGl0ZSBubm4gb3BhY2l0eS0wIHotWzEwMF1cIj57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvIT09dW5kZWZpbmVkICYmIGl0ZW0ucGhvdG9bMF0uc3RyaW5nVmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1bMjB2d11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgey8qIHsgaXNMb2FkaW5nID8gPD48Lz4gOiA8ZGl2IHJlZj17c2V0VGFyZ2V0fSBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLVsxMHZoXSBiZy1yZWQtNTAwXCIgLz4gfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciBkaXZ7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguNSk7XG4gICAgfVxuICAgICY6aG92ZXIgcHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5gXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZWQiLCJmZXRjaFBvc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwidXNlU2V0UmVjb2lsU3RhdGUiLCJjdXJQb3N0U3RvcmUiLCJpc1Bvc3RWaWV3T3BlblN0b3JlIiwiUG9zdEJvYXJkIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzZXRDdXJQb3N0IiwicG9zdHMiLCJzZXRQb3N0cyIsImRhdGEiLCJzdGFydEluZGV4Iiwic2V0U3RhcnRJbmRleCIsImVuZEluZGV4Iiwic2V0RW5kSW5kZXgiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmaXJzdFJlbmRlciIsInNldEZpcnN0UmVuZGVyIiwicG9zdFZpZXdPcGVuIiwic2V0UG9zdFZpZXdPcGVuIiwiaGFuZGxlQ2xpY2tQb3N0IiwiaXRlbSIsInJlcyIsImxvY2F0aW9uIiwidGhlbiIsInRlbXAiLCJ1bmRlZmluZWQiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJoYW5kbGVGZXRjaERhdGEiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicHJldiIsInNldFRpbWVvdXQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsIldyYXBwZXIiLCJvbkNsaWNrIiwicCIsInRpdGxlIiwic3JjIiwicGhvdG8iLCJzdHJpbmdWYWx1ZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});