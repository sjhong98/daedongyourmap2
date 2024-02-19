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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBoard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator */ \"(app-pages-browser)/./app/[location]/navigator.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fetchPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchPost */ \"(app-pages-browser)/./app/[location]/fetchPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    transition: 0.2s ease;\\n    cursor: pointer;\\n    &:hover div{\\n        filter: brightness(.5);\\n    }\\n    &:hover p{\\n        opacity: 1;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction PostBoard(props) {\n    _s();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const setCurPost = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.curPostStore);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.data);\n    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(30);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [firstRender, setFirstRender] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [postCreated, setPostCreated] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.postCreatedStore);\n    const [postViewOpen, setPostViewOpen] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoilContextProvider__WEBPACK_IMPORTED_MODULE_7__.isPostViewOpenStore);\n    // postView 열기\n    const handleClickPost = (item)=>{\n        setCurPost(item);\n        console.log(item);\n        setPostViewOpen(true);\n    };\n    // useEffect(() => {\n    //     console.log(props.data2);\n    // }, [])\n    // postView 닫히면 post update\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (!firstRender || postCreated) {\n            let startUpdateIndex;\n            if (posts[startIndex - 1] !== undefined) startUpdateIndex = +posts[startIndex - 1].createTime; // 모든 게시물 최소 30개씩 만들고, 제대로 업데이트되는지 확인\n            else startUpdateIndex = +posts[posts.length - 30].createTime;\n            const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(props.location, startUpdateIndex);\n            res.then((res)=>{\n                let temp = [];\n                if (posts !== undefined) {\n                    temp = [\n                        ...posts\n                    ];\n                    temp.splice(startIndex - 30, 30, ...res);\n                    setPosts(temp);\n                    setPostCreated(false);\n                    console.log(\"post updated\", res);\n                }\n            });\n        } else setFirstRender(false);\n    }, [\n        postViewOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 0.8\n        };\n        const handleFetchData = (param)=>{\n            let [entry] = param;\n            // posts[startIndex-1] !== undefined일 경우 -> 더 이상 게시물이 없는 경우\n            if (entry.isIntersecting && posts[startIndex - 1] !== undefined) {\n                const res = (0,_fetchPost__WEBPACK_IMPORTED_MODULE_4__.fetchPost)(props.location, +posts[startIndex - 1].createTime);\n                res.then((res)=>{\n                    let temp = [];\n                    if (posts !== undefined) {\n                        temp = [\n                            ...posts,\n                            ...res\n                        ];\n                        setPosts(temp);\n                        setStartIndex((prev)=>prev + 30);\n                        setIsLoading(true);\n                        setTimeout(()=>{\n                            setIsLoading(false);\n                        }, 2000);\n                    }\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleFetchData, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        startIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-row w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_navigator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-1 w-[50vw]\",\n                        children: posts !== undefined && posts.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n                                className: \"center\",\n                                onClick: ()=>handleClickPost(item),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"absolute text-white nnn opacity-0 z-[100]\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.photo !== undefined && item.photo[0].stringValue,\n                                            alt: item.title,\n                                            width: 400,\n                                            height: 400,\n                                            className: \"aspect-square object-cover object-center w-[20vw]\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                className: \"w-full h-[10vh] bg-red-500\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 118,\n                columnNumber: 35\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full h-[10vh]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postBoard.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this);\n}\n_s(PostBoard, \"0cgiWQlxiuEO2VPy0AwGrQmMHl8=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = PostBoard;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostBoard\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RCb2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDTTtBQUNFO0FBQ0M7QUFDSTtBQUMrQjtBQUNpRDtBQUU3RyxTQUFTVyxVQUFXQyxLQUFtRDs7SUFDbEYsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQTtJQUNwQyxNQUFNVSxhQUFhUix5REFBaUJBLENBQUNDLGdFQUFZQTtJQUNqRCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQWFPLE1BQU1NLElBQUk7SUFDekQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFTO0lBQ3JELE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU0sQ0FBQ2tCLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFVO0lBQ3hELE1BQU0sQ0FBQ29CLGFBQWFDLGVBQWUsR0FBR3BCLHNEQUFjQSxDQUFDSSxvRUFBZ0JBO0lBQ3JFLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHdEIsc0RBQWNBLENBQUNHLHVFQUFtQkE7SUFFMUUsY0FBYztJQUNkLE1BQU1vQixrQkFBa0IsQ0FBQ0M7UUFDckJmLFdBQVdlO1FBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWkYsZ0JBQWdCO0lBQ3BCO0lBRUEsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxTQUFTO0lBRVQsMkJBQTJCO0lBQzNCeEIsZ0RBQVNBLENBQUM7UUFDTixJQUFHLENBQUNtQixlQUFlRSxhQUFhO1lBQzVCLElBQUlRO1lBQ0osSUFBR2pCLEtBQUssQ0FBQ0csYUFBVyxFQUFFLEtBQUtlLFdBQ3ZCRCxtQkFBbUIsQ0FBQ2pCLEtBQUssQ0FBQ0csYUFBVyxFQUFFLENBQUNnQixVQUFVLEVBQVMscUNBQXFDO2lCQUVoR0YsbUJBQW1CLENBQUNqQixLQUFLLENBQUNBLE1BQU1vQixNQUFNLEdBQUMsR0FBRyxDQUFDRCxVQUFVO1lBQ3pELE1BQU1FLE1BQU1sQyxxREFBU0EsQ0FBQ1MsTUFBTTBCLFFBQVEsRUFBRUw7WUFDdENJLElBQUlFLElBQUksQ0FBQyxDQUFDRjtnQkFDTixJQUFJRyxPQUFhLEVBQUU7Z0JBQ25CLElBQUd4QixVQUFVa0IsV0FBVztvQkFDcEJNLE9BQU87MkJBQUl4QjtxQkFBTTtvQkFDakJ3QixLQUFLQyxNQUFNLENBQUN0QixhQUFXLElBQUksT0FBT2tCO29CQUNsQ3BCLFNBQVN1QjtvQkFDVGQsZUFBZTtvQkFDZkssUUFBUUMsR0FBRyxDQUFDLGdCQUFnQks7Z0JBQ2hDO1lBQ0o7UUFDSixPQUNBYixlQUFlO0lBQ25CLEdBQUc7UUFBQ0c7S0FBYTtJQUVqQnZCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTXNDLFVBQVU7WUFDZEMsTUFBTTtZQUNOQyxXQUFXO1FBQ2I7UUFFQSxNQUFNQyxrQkFBa0I7Z0JBQUMsQ0FBQ0MsTUFBVTtZQUNoQywyREFBMkQ7WUFDM0QsSUFBR0EsTUFBTUMsY0FBYyxJQUFJL0IsS0FBSyxDQUFDRyxhQUFXLEVBQUUsS0FBS2UsV0FBVztnQkFDMUQsTUFBTUcsTUFBTWxDLHFEQUFTQSxDQUFDUyxNQUFNMEIsUUFBUSxFQUFFLENBQUN0QixLQUFLLENBQUNHLGFBQVcsRUFBRSxDQUFDZ0IsVUFBVTtnQkFDckVFLElBQUlFLElBQUksQ0FBQyxDQUFDRjtvQkFDTixJQUFJRyxPQUFhLEVBQUU7b0JBQ25CLElBQUd4QixVQUFVa0IsV0FBVzt3QkFDcEJNLE9BQU87K0JBQUl4QjsrQkFBVXFCO3lCQUFJO3dCQUN6QnBCLFNBQVN1Qjt3QkFDVHBCLGNBQWM0QixDQUFBQSxPQUFRQSxPQUFLO3dCQUMzQjFCLGFBQWE7d0JBQ2IyQixXQUFXOzRCQUNQM0IsYUFBYTt3QkFDakIsR0FBRztvQkFDUDtnQkFDSjtZQUNKO1FBQ0o7UUFFQSxJQUFJNEI7UUFDSixJQUFHckMsUUFBUTtZQUNUcUMsV0FBVyxJQUFJQyxxQkFBcUJOLGlCQUFpQkg7WUFDckRRLFNBQVNFLE9BQU8sQ0FBQ3ZDO1FBQ25CO1FBQ0EsT0FBTztZQUNMLElBQUdxQyxVQUNIQSxTQUFTRyxVQUFVO1FBQ3JCO0lBQ0osR0FBRztRQUFDeEM7UUFBUU07S0FBVztJQUV2QixxQkFDSSw4REFBQ21DO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUN0RCxrREFBVUE7Ozs7O2tDQUNYLDhEQUFDcUQ7d0JBQUlDLFdBQVU7a0NBQ1R2QyxVQUFRa0IsYUFBYWxCLE1BQU13QyxHQUFHLENBQUMsQ0FBQzFCLE1BQWUyQjs0QkFDN0MscUJBQ0EsOERBQUNDO2dDQUVHSCxXQUFVO2dDQUNWSSxTQUFTLElBQUk5QixnQkFBZ0JDOztrREFFN0IsOERBQUM4Qjt3Q0FBRUwsV0FBVTtrREFBNkN6QixLQUFLK0IsS0FBSzs7Ozs7O2tEQUNwRSw4REFBQ1A7a0RBQ0csNEVBQUN0RCxrREFBS0E7NENBQ0Y4RCxLQUFLaEMsS0FBS2lDLEtBQUssS0FBRzdCLGFBQWFKLEtBQUtpQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxXQUFXOzRDQUN4REMsS0FBS25DLEtBQUsrQixLQUFLOzRDQUNmSyxPQUFPOzRDQUNQQyxRQUFROzRDQUNSWixXQUFVOzs7Ozs7Ozs7Ozs7K0JBWGJFOzs7Ozt3QkFnQmI7Ozs7Ozs7Ozs7OztZQUdOcEMsMEJBQVksOEpBQVEsOERBQUNpQztnQkFBSWMsS0FBS3REO2dCQUFXeUMsV0FBVTs7Ozs7OzBCQUNyRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUczQjtHQS9Hd0I1Qzs7UUFFREoscURBQWlCQTtRQUtFRCxrREFBY0E7UUFDWkEsa0RBQWNBOzs7S0FSbENLO0FBaUh4QixNQUFNK0MsVUFBVXhELHlEQUFNQSxDQUFDb0QsR0FBRztNQUFwQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhdGlvbl0vcG9zdEJvYXJkLnRzeD8zZjFlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTmF2aWFnYXRvciBmcm9tIFwiLi9uYXZpZ2F0b3JcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBmZXRjaFBvc3QgfSBmcm9tIFwiLi9mZXRjaFBvc3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBjdXJQb3N0U3RvcmUsIGlzUG9zdFZpZXdPcGVuU3RvcmUsIHBvc3RDcmVhdGVkU3RvcmUsIFBvc3RUeXBlLCBzZWxlY3RlZFBvaW50U3RvcmUgfSBmcm9tIFwiLi4vcmVjb2lsQ29udGV4dFByb3ZpZGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEJvYXJkKCBwcm9wczp7ZGF0YTpQb3N0VHlwZVtdLCBkYXRhMjphbnksIGxvY2F0aW9uOnN0cmluZ30gKSB7XG4gICAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgICBjb25zdCBzZXRDdXJQb3N0ID0gdXNlU2V0UmVjb2lsU3RhdGUoY3VyUG9zdFN0b3JlKTtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RUeXBlW10+KHByb3BzLmRhdGEpO1xuICAgIGNvbnN0IFtzdGFydEluZGV4LCBzZXRTdGFydEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMzApO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2ZpcnN0UmVuZGVyLCBzZXRGaXJzdFJlbmRlcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBbcG9zdENyZWF0ZWQsIHNldFBvc3RDcmVhdGVkXSA9IHVzZVJlY29pbFN0YXRlKHBvc3RDcmVhdGVkU3RvcmUpO1xuICAgIGNvbnN0IFtwb3N0Vmlld09wZW4sIHNldFBvc3RWaWV3T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShpc1Bvc3RWaWV3T3BlblN0b3JlKTtcbiAgICBcbiAgICAvLyBwb3N0VmlldyDsl7TquLBcbiAgICBjb25zdCBoYW5kbGVDbGlja1Bvc3QgPSAoaXRlbTpQb3N0VHlwZSkgPT4ge1xuICAgICAgICBzZXRDdXJQb3N0KGl0ZW0pO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgc2V0UG9zdFZpZXdPcGVuKHRydWUpO1xuICAgIH1cblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHByb3BzLmRhdGEyKTtcbiAgICAvLyB9LCBbXSlcblxuICAgIC8vIHBvc3RWaWV3IOuLq+2eiOuptCBwb3N0IHVwZGF0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKCFmaXJzdFJlbmRlciB8fCBwb3N0Q3JlYXRlZCkge1xuICAgICAgICAgICAgbGV0IHN0YXJ0VXBkYXRlSW5kZXg7XG4gICAgICAgICAgICBpZihwb3N0c1tzdGFydEluZGV4LTFdICE9PSB1bmRlZmluZWQpIFxuICAgICAgICAgICAgICAgIHN0YXJ0VXBkYXRlSW5kZXggPSArcG9zdHNbc3RhcnRJbmRleC0xXS5jcmVhdGVUaW1lOyAgICAgICAgLy8g66qo65OgIOqyjOyLnOusvCDstZzshowgMzDqsJzslKkg66eM65Ok6rOgLCDsoJzrjIDroZwg7JeF642w7J207Yq465CY64qU7KeAIO2ZleyduFxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICBzdGFydFVwZGF0ZUluZGV4ID0gK3Bvc3RzW3Bvc3RzLmxlbmd0aC0zMF0uY3JlYXRlVGltZTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoUG9zdChwcm9wcy5sb2NhdGlvbiwgc3RhcnRVcGRhdGVJbmRleCk7XG4gICAgICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXA6YW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBpZihwb3N0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSBbLi4ucG9zdHNdO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wLnNwbGljZShzdGFydEluZGV4LTMwLCAzMCwgLi4ucmVzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHModGVtcCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvc3RDcmVhdGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IHVwZGF0ZWRcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpO1xuICAgIH0sIFtwb3N0Vmlld09wZW5dKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgIHRocmVzaG9sZDogMC44ICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUZldGNoRGF0YSA9IChbZW50cnldOmFueSkgPT4ge1xuICAgICAgICAgICAgLy8gcG9zdHNbc3RhcnRJbmRleC0xXSAhPT0gdW5kZWZpbmVk7J28IOqyveyasCAtPiDrjZQg7J207IOBIOqyjOyLnOusvOydtCDsl4bripQg6rK97JqwXG4gICAgICAgICAgICBpZihlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBwb3N0c1tzdGFydEluZGV4LTFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaFBvc3QocHJvcHMubG9jYXRpb24sICtwb3N0c1tzdGFydEluZGV4LTFdLmNyZWF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgIHJlcy50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXA6YW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYocG9zdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IFsuLi5wb3N0cywgLi4ucmVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RzKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhcnRJbmRleChwcmV2ID0+IHByZXYrMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgb2JzZXJ2ZXI6YW55O1xuICAgICAgICBpZih0YXJnZXQpIHtcbiAgICAgICAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVGZXRjaERhdGEsIG9wdGlvbnMpO1xuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlmKG9ic2VydmVyKVxuICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbdGFyZ2V0LCBzdGFydEluZGV4XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1yb3cgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlhZ2F0b3IgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEgdy1bNTB2d11cIj5cbiAgICAgICAgICAgICAgICAgICAgeyBwb3N0cyE9PXVuZGVmaW5lZCAmJiBwb3N0cy5tYXAoKGl0ZW06UG9zdFR5cGUsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXcmFwcGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmhhbmRsZUNsaWNrUG9zdChpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LXdoaXRlIG5ubiBvcGFjaXR5LTAgei1bMTAwXVwiPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG8hPT11bmRlZmluZWQgJiYgaXRlbS5waG90b1swXS5zdHJpbmdWYWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3Qtc3F1YXJlIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHctWzIwdnddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgaXNMb2FkaW5nID8gPD48Lz4gOiA8ZGl2IHJlZj17c2V0VGFyZ2V0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTB2aF0gYmctcmVkLTUwMFwiIC8+IH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzEwdmhdXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIgZGl2e1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjUpO1xuICAgIH1cbiAgICAmOmhvdmVyIHB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuYFxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTmF2aWFnYXRvciIsInN0eWxlZCIsImZldGNoUG9zdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsImN1clBvc3RTdG9yZSIsImlzUG9zdFZpZXdPcGVuU3RvcmUiLCJwb3N0Q3JlYXRlZFN0b3JlIiwiUG9zdEJvYXJkIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzZXRDdXJQb3N0IiwicG9zdHMiLCJzZXRQb3N0cyIsImRhdGEiLCJzdGFydEluZGV4Iiwic2V0U3RhcnRJbmRleCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZpcnN0UmVuZGVyIiwic2V0Rmlyc3RSZW5kZXIiLCJwb3N0Q3JlYXRlZCIsInNldFBvc3RDcmVhdGVkIiwicG9zdFZpZXdPcGVuIiwic2V0UG9zdFZpZXdPcGVuIiwiaGFuZGxlQ2xpY2tQb3N0IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFVwZGF0ZUluZGV4IiwidW5kZWZpbmVkIiwiY3JlYXRlVGltZSIsImxlbmd0aCIsInJlcyIsImxvY2F0aW9uIiwidGhlbiIsInRlbXAiLCJzcGxpY2UiLCJvcHRpb25zIiwicm9vdCIsInRocmVzaG9sZCIsImhhbmRsZUZldGNoRGF0YSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJwcmV2Iiwic2V0VGltZW91dCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwiV3JhcHBlciIsIm9uQ2xpY2siLCJwIiwidGl0bGUiLCJzcmMiLCJwaG90byIsInN0cmluZ1ZhbHVlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postBoard.tsx\n"));

/***/ })

});