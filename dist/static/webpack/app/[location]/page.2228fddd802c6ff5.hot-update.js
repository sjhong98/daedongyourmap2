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

/***/ "(app-pages-browser)/./app/[location]/postView/postContent.tsx":
/*!*************************************************!*\
  !*** ./app/[location]/postView/postContent.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction PostContent(props) {\n    _s();\n    const { post, isModify } = props;\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"postContent : \", post);\n        if (post) {\n            setTitle(post.title);\n            setContent(post.content);\n        }\n    }, [\n        props\n    ]);\n    const handleChangeTitle = (e)=>{\n        setTitle(e.target.value);\n    };\n    const handleChangeContent = (e)=>{\n        setContent(e.tartget.value);\n    };\n    return isModify ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-black nnb\",\n                children: post === null || post === void 0 ? void 0 : post.title\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[0.8rem] nnn\",\n                children: post === null || post === void 0 ? void 0 : post.content\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: title,\n                onChange: handleChangeTitle\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: content,\n                onChange: handleChangeContent\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(PostContent, \"KuTwR968C3VC+q4D9aRn47Ht1g4=\");\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3Bvc3RDb250ZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHNEM7QUFFN0IsU0FBU0UsWUFBWUMsS0FBNEM7O0lBQzVFLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUMsR0FBR0Y7SUFDekIsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBUztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDTlUsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlA7UUFDOUIsSUFBR0EsTUFBTTtZQUNMRyxTQUFTSCxLQUFLRSxLQUFLO1lBQ25CRyxXQUFXTCxLQUFLSSxPQUFPO1FBQzNCO0lBQ0osR0FBRztRQUFDTDtLQUFNO0lBRVYsTUFBTVMsb0JBQW9CLENBQUNDO1FBQ3ZCTixTQUFTTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDM0I7SUFFQSxNQUFNQyxzQkFBc0IsQ0FBQ0g7UUFDekJKLFdBQVdJLEVBQUVJLE9BQU8sQ0FBQ0YsS0FBSztJQUM5QjtJQUVBLE9BQ0lWLHlCQUNBLDhEQUFDYTs7MEJBQ0csOERBQUNDO2dCQUFFQyxXQUFVOzBCQUFrQmhCLGlCQUFBQSwyQkFBQUEsS0FBTUUsS0FBSzs7Ozs7OzBCQUMxQyw4REFBQ2E7Z0JBQUVDLFdBQVU7MEJBQXFCaEIsaUJBQUFBLDJCQUFBQSxLQUFNSSxPQUFPOzs7Ozs7Ozs7Ozs2QkFHbkQsOERBQUNVOzswQkFDRyw4REFBQ0c7Z0JBQU1OLE9BQU9UO2dCQUFPZ0IsVUFBVVY7Ozs7OzswQkFDL0IsOERBQUNTO2dCQUFNTixPQUFPUDtnQkFBU2MsVUFBVU47Ozs7Ozs7Ozs7OztBQUc3QztHQWpDd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3Bvc3RDb250ZW50LnRzeD8zYTg4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tIFwiQC9hcHAvcmVjb2lsQ29udGV4dFByb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb250ZW50KHByb3BzOntwb3N0OlBvc3RUeXBlfG51bGwsIGlzTW9kaWZ5OmJvb2xlYW59KSB7XG4gICAgY29uc3Qge3Bvc3QsIGlzTW9kaWZ5fSA9IHByb3BzO1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3N0Q29udGVudCA6IFwiLCBwb3N0KTtcbiAgICAgICAgaWYocG9zdCkge1xuICAgICAgICAgICAgc2V0VGl0bGUocG9zdC50aXRsZSk7XG4gICAgICAgICAgICBzZXRDb250ZW50KHBvc3QuY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHNdKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlVGl0bGUgPSAoZTphbnkpID0+IHtcbiAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbnRlbnQgPSAoZTphbnkpID0+IHtcbiAgICAgICAgc2V0Q29udGVudChlLnRhcnRnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGlzTW9kaWZ5ID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgbm5iXCI+e3Bvc3Q/LnRpdGxlfTwvcD4gXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVswLjhyZW1dIG5ublwiPntwb3N0Py5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaXRsZX0gLz5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17Y29udGVudH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvbnRlbnR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb3N0Q29udGVudCIsInByb3BzIiwicG9zdCIsImlzTW9kaWZ5IiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlQ29udGVudCIsInRhcnRnZXQiLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postView/postContent.tsx\n"));

/***/ })

});