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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction PostContent(props) {\n    _s();\n    const { post, isModify } = props;\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputStyle = \"text-black focus:outline-none rounded-md border-[1px] w-[12vw] p-2\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"postContent : \", post);\n        if (post) {\n            setTitle(post.title);\n            setContent(post.content);\n        }\n    }, [\n        post,\n        isModify\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"title\", title);\n    }, [\n        title\n    ]);\n    const handleChangeTitle = (e)=>{\n        setTitle(e.target.value);\n    };\n    const handleChangeContent = (e)=>{\n        setContent(e.tartget.value);\n    };\n    if (isModify) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: title,\n                onChange: handleChangeTitle,\n                className: \"\".concat(inputStyle, \" nnb\")\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: content,\n                onChange: handleChangeContent,\n                className: \"\".concat(inputStyle, \" nnn text-[0.8rem]\")\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-[12vw] bg-[#003545] rounded-md text-sm\",\n                children: \"수정\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n        lineNumber: 33,\n        columnNumber: 13\n    }, this);\n    else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"nnb\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[0.8rem] nnn\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/[location]/postView/postContent.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(PostContent, \"pbA3VLhLndDaFR7nOnFmDWUuYvE=\");\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3Bvc3RDb250ZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHNEM7QUFFN0IsU0FBU0UsWUFBWUMsS0FBNEM7O0lBQzVFLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUMsR0FBR0Y7SUFDekIsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNUyxhQUFhO0lBRW5CVixnREFBU0EsQ0FBQztRQUNOVyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCUjtRQUM5QixJQUFHQSxNQUFNO1lBQ0xHLFNBQVNILEtBQUtFLEtBQUs7WUFDbkJHLFdBQVdMLEtBQUtJLE9BQU87UUFDM0I7SUFDSixHQUFHO1FBQUNKO1FBQU1DO0tBQVM7SUFFbkJMLGdEQUFTQSxDQUFDO1FBQ05XLFFBQVFDLEdBQUcsQ0FBQyxTQUFTTjtJQUN6QixHQUFHO1FBQUNBO0tBQU07SUFFVixNQUFNTyxvQkFBb0IsQ0FBQ0M7UUFDdkJQLFNBQVNPLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMzQjtJQUVBLE1BQU1DLHNCQUFzQixDQUFDSDtRQUN6QkwsV0FBV0ssRUFBRUksT0FBTyxDQUFDRixLQUFLO0lBQzlCO0lBRUEsSUFBR1gsVUFBVSxxQkFDTCw4REFBQ2M7OzBCQUNHLDhEQUFDQztnQkFBTUosT0FBT1Y7Z0JBQU9lLFVBQVVSO2dCQUFtQlMsV0FBVyxHQUFjLE9BQVhaLFlBQVc7Ozs7OzswQkFDM0UsOERBQUNhO2dCQUFTUCxPQUFPUjtnQkFBU2EsVUFBVUo7Z0JBQXFCSyxXQUFXLEdBQWMsT0FBWFosWUFBVzs7Ozs7OzBCQUNsRiw4REFBQ2M7Z0JBQU9GLFdBQVU7MEJBQTJDOzs7Ozs7Ozs7Ozs7U0FHcEUscUJBQ0QsOERBQUNIOzswQkFDRyw4REFBQ007Z0JBQUVILFdBQVU7MEJBQU9oQjs7Ozs7OzBCQUNwQiw4REFBQ21CO2dCQUFFSCxXQUFVOzBCQUFxQmQ7Ozs7Ozs7Ozs7OztBQUc5QztHQXZDd0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3Bvc3RDb250ZW50LnRzeD8zYTg4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tIFwiQC9hcHAvcmVjb2lsQ29udGV4dFByb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb250ZW50KHByb3BzOntwb3N0OlBvc3RUeXBlfG51bGwsIGlzTW9kaWZ5OmJvb2xlYW59KSB7XG4gICAgY29uc3Qge3Bvc3QsIGlzTW9kaWZ5fSA9IHByb3BzO1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IGlucHV0U3R5bGUgPSBcInRleHQtYmxhY2sgZm9jdXM6b3V0bGluZS1ub25lIHJvdW5kZWQtbWQgYm9yZGVyLVsxcHhdIHctWzEydnddIHAtMlwiXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBvc3RDb250ZW50IDogXCIsIHBvc3QpO1xuICAgICAgICBpZihwb3N0KSB7XG4gICAgICAgICAgICBzZXRUaXRsZShwb3N0LnRpdGxlKTtcbiAgICAgICAgICAgIHNldENvbnRlbnQocG9zdC5jb250ZW50KTtcbiAgICAgICAgfVxuICAgIH0sIFtwb3N0LCBpc01vZGlmeV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRpdGxlXCIsIHRpdGxlKTtcbiAgICB9LCBbdGl0bGVdKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlVGl0bGUgPSAoZTphbnkpID0+IHtcbiAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbnRlbnQgPSAoZTphbnkpID0+IHtcbiAgICAgICAgc2V0Q29udGVudChlLnRhcnRnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGlmKGlzTW9kaWZ5KSByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGl0bGV9IGNsYXNzTmFtZT17YCR7aW5wdXRTdHlsZX0gbm5iYH0gLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2NvbnRlbnR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb250ZW50fSBjbGFzc05hbWU9e2Ake2lucHV0U3R5bGV9IG5ubiB0ZXh0LVswLjhyZW1dYH0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctWzEydnddIGJnLVsjMDAzNTQ1XSByb3VuZGVkLW1kIHRleHQtc21cIj7siJjsoJU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgZWxzZSByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm5iXCI+e3RpdGxlfTwvcD4gXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVswLjhyZW1dIG5ublwiPntjb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvc3RDb250ZW50IiwicHJvcHMiLCJwb3N0IiwiaXNNb2RpZnkiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpbnB1dFN0eWxlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlQ29udGVudCIsInRhcnRnZXQiLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postView/postContent.tsx\n"));

/***/ })

});