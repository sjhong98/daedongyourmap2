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

/***/ "(app-pages-browser)/./app/recoilContextProvider.tsx":
/*!***************************************!*\
  !*** ./app/recoilContextProvider.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   curComments: function() { return /* binding */ curComments; },\n/* harmony export */   curPostStore: function() { return /* binding */ curPostStore; },\n/* harmony export */   \"default\": function() { return /* binding */ RecoilContextProvider; },\n/* harmony export */   idTokenStore: function() { return /* binding */ idTokenStore; },\n/* harmony export */   isLoginStore: function() { return /* binding */ isLoginStore; },\n/* harmony export */   isPostViewOpenStore: function() { return /* binding */ isPostViewOpenStore; },\n/* harmony export */   postCreatedStore: function() { return /* binding */ postCreatedStore; },\n/* harmony export */   profileStore: function() { return /* binding */ profileStore; },\n/* harmony export */   selectedPointStore: function() { return /* binding */ selectedPointStore; },\n/* harmony export */   userDataStore: function() { return /* binding */ userDataStore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ postCreatedStore,profileStore,isLoginStore,curComments,idTokenStore,userDataStore,selectedPointStore,curPostStore,isPostViewOpenStore,default auto */ \n\n\nconst postCreatedStore = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"postCreated\",\n    default: 0\n});\nconst profileStore = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"profile\",\n    default: {}\n});\nconst isLoginStore = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"isLogin\",\n    default: false\n});\nconst curComments = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"curComments\",\n    default: \"\"\n});\nconst idTokenStore = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"idTokenStore\",\n    default: \"\"\n});\nconst userDataStore = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"userDataStore\",\n    default: null\n});\nconst selectedPointStore = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"selectedPointStore\",\n    default: \"\"\n});\nconst curPostStore = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"curPostStore\",\n    default: null\n});\nconst isPostViewOpenStore = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({\n    key: \"isPostViewOpen\",\n    default: false\n});\nfunction RecoilContextProvider(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/recoilContextProvider.tsx\",\n        lineNumber: 80,\n        columnNumber: 12\n    }, this);\n}\n_c = RecoilContextProvider;\nvar _c;\n$RefreshReg$(_c, \"RecoilContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWNvaWxDb250ZXh0UHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNnQjtBQThCbkMsTUFBTUcsbUJBQW1CRCw0Q0FBSUEsQ0FBUztJQUN6Q0UsS0FBSTtJQUNKQyxTQUFTO0FBQ2IsR0FBRTtBQUVLLE1BQU1DLGVBQWVKLDRDQUFJQSxDQUFNO0lBQ2xDRSxLQUFJO0lBQ0pDLFNBQVMsQ0FBQztBQUNkLEdBQUU7QUFFSyxNQUFNRSxlQUFlTCw0Q0FBSUEsQ0FBVTtJQUN0Q0UsS0FBSTtJQUNKQyxTQUFTO0FBQ2IsR0FBRTtBQUVLLE1BQU1HLGNBQWNOLDRDQUFJQSxDQUFNO0lBQ2pDRSxLQUFJO0lBQ0pDLFNBQVM7QUFDYixHQUFFO0FBRUssTUFBTUksZUFBZVAsNENBQUlBLENBQVM7SUFDckNFLEtBQUk7SUFDSkMsU0FBUztBQUNiLEdBQUU7QUFFSyxNQUFNSyxnQkFBZ0JSLDRDQUFJQSxDQUFzQjtJQUNuREUsS0FBSTtJQUNKQyxTQUFTO0FBQ2IsR0FBRTtBQUVLLE1BQU1NLHFCQUFxQlQsNENBQUlBLENBQVM7SUFDM0NFLEtBQUk7SUFDSkMsU0FBUztBQUNiLEdBQUU7QUFFSyxNQUFNTyxlQUFlViw0Q0FBSUEsQ0FBa0I7SUFDOUNFLEtBQUk7SUFDSkMsU0FBUztBQUNiLEdBQUU7QUFFSyxNQUFNUSxzQkFBc0JYLDRDQUFJQSxDQUFVO0lBQzdDRSxLQUFJO0lBQ0pDLFNBQVE7QUFDWixHQUFFO0FBRWEsU0FBU1Msc0JBQXNCLEtBQXNDO1FBQXRDLEVBQUNDLFFBQVEsRUFBNkIsR0FBdEM7SUFDMUMscUJBQU8sOERBQUNkLDhDQUFVQTtrQkFBR2M7Ozs7OztBQUN6QjtLQUZ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3JlY29pbENvbnRleHRQcm92aWRlci50c3g/MTcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCwgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YVR5cGV7XG4gICAgZW1haWw6c3RyaW5nIHwgbnVsbCxcbiAgICB1aWQ6c3RyaW5nLFxuICAgIHBob3RvVVJMOnN0cmluZyB8IG51bGwsXG4gICAgaWRUb2tlbjogc3RyaW5nLFxuICAgIHJlZnJlc2hUb2tlbjogc3RyaW5nLFxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdFR5cGUge1xuICAgIGNyZWF0ZVRpbWU6c3RyaW5nXG4gICAgY29udGVudDpzdHJpbmcsXG4gICAgdGl0bGU6c3RyaW5nLFxuICAgIHBvaW50OnN0cmluZyxcbiAgICBwaG90bzpBcnJheTxhbnk+LFxuICAgIHVzZXI6c3RyaW5nLFxuICAgIGNvbW1lbnRzOkFycmF5PGFueT4sXG4gICAgbmFtZTpzdHJpbmcsXG4gICAgbGlrZXM6QXJyYXk8YW55Pixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9maWxlVHlwZSB7XG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyB8IG51bGwsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwaG90b1VSTDogc3RyaW5nIHwgbnVsbCxcbiAgICBlbWFpbFZlcmlmaWVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBwb3N0Q3JlYXRlZFN0b3JlID0gYXRvbTxudW1iZXI+KHtcbiAgICBrZXk6J3Bvc3RDcmVhdGVkJyxcbiAgICBkZWZhdWx0OiAwXG59KVxuXG5leHBvcnQgY29uc3QgcHJvZmlsZVN0b3JlID0gYXRvbTxhbnk+KHtcbiAgICBrZXk6J3Byb2ZpbGUnLFxuICAgIGRlZmF1bHQ6IHt9XG59KVxuXG5leHBvcnQgY29uc3QgaXNMb2dpblN0b3JlID0gYXRvbTxib29sZWFuPih7XG4gICAga2V5Oidpc0xvZ2luJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbn0pXG5cbmV4cG9ydCBjb25zdCBjdXJDb21tZW50cyA9IGF0b208YW55Pih7XG4gICAga2V5OidjdXJDb21tZW50cycsXG4gICAgZGVmYXVsdDogXCJcIixcbn0pXG5cbmV4cG9ydCBjb25zdCBpZFRva2VuU3RvcmUgPSBhdG9tPHN0cmluZz4oe1xuICAgIGtleTonaWRUb2tlblN0b3JlJyxcbiAgICBkZWZhdWx0OiBcIlwiXG59KVxuXG5leHBvcnQgY29uc3QgdXNlckRhdGFTdG9yZSA9IGF0b208VXNlckRhdGFUeXBlIHwgbnVsbD4oe1xuICAgIGtleTondXNlckRhdGFTdG9yZScsXG4gICAgZGVmYXVsdDogbnVsbFxufSlcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkUG9pbnRTdG9yZSA9IGF0b208c3RyaW5nPih7XG4gICAga2V5OidzZWxlY3RlZFBvaW50U3RvcmUnLFxuICAgIGRlZmF1bHQ6IFwiXCIsXG59KVxuXG5leHBvcnQgY29uc3QgY3VyUG9zdFN0b3JlID0gYXRvbTxQb3N0VHlwZSB8IG51bGw+KHtcbiAgICBrZXk6J2N1clBvc3RTdG9yZScsXG4gICAgZGVmYXVsdDogbnVsbFxufSlcblxuZXhwb3J0IGNvbnN0IGlzUG9zdFZpZXdPcGVuU3RvcmUgPSBhdG9tPGJvb2xlYW4+KHtcbiAgICBrZXk6J2lzUG9zdFZpZXdPcGVuJyxcbiAgICBkZWZhdWx0OmZhbHNlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvaWxDb250ZXh0UHJvdmlkZXIoe2NoaWxkcmVufToge2NoaWxkcmVuOlJlYWN0LlJlYWN0Tm9kZX0pIHtcbiAgICByZXR1cm4gPFJlY29pbFJvb3Q+eyBjaGlsZHJlbiB9PC9SZWNvaWxSb290PlxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlY29pbFJvb3QiLCJhdG9tIiwicG9zdENyZWF0ZWRTdG9yZSIsImtleSIsImRlZmF1bHQiLCJwcm9maWxlU3RvcmUiLCJpc0xvZ2luU3RvcmUiLCJjdXJDb21tZW50cyIsImlkVG9rZW5TdG9yZSIsInVzZXJEYXRhU3RvcmUiLCJzZWxlY3RlZFBvaW50U3RvcmUiLCJjdXJQb3N0U3RvcmUiLCJpc1Bvc3RWaWV3T3BlblN0b3JlIiwiUmVjb2lsQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/recoilContextProvider.tsx\n"));

/***/ })

});