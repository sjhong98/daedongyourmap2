"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b73f5ccd7c6d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2YwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiNzNmNWNjZDdjNmRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/header/search/searchKeyword.tsx":
/*!********************************************************!*\
  !*** ./app/components/header/search/searchKeyword.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchKeyword: function() { return /* binding */ searchKeyword; }\n/* harmony export */ });\n/* harmony import */ var _firestore_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/firestore/config */ \"(app-pages-browser)/./firestore/config.tsx\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\nasync function searchKeyword(keyword) {\n    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(_firestore_config__WEBPACK_IMPORTED_MODULE_0__.firebaseConfig);\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n    const posts = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"posts\");\n    const searchQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(posts, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"content\", \"array-contains\", keyword));\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(searchQuery);\n    querySnapshot.forEach((doc)=>{\n        console.log(doc.id, \" => \", doc.data());\n    });\n// return res;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9zZWFyY2gvc2VhcmNoS2V5d29yZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvRDtBQUNQO0FBQ3dDO0FBRTlFLGVBQWVPLGNBQWVDLE9BQWU7SUFDaEQsTUFBTUMsTUFBTVIsMkRBQWFBLENBQUNELDZEQUFjQTtJQUN4QyxNQUFNVSxLQUFLUCxnRUFBWUEsQ0FBQ007SUFDeEIsTUFBTUUsUUFBUVQsOERBQVVBLENBQUNRLElBQUk7SUFDN0IsTUFBTUUsY0FBY1IseURBQUtBLENBQUNPLE9BQU9OLHlEQUFLQSxDQUFDLFdBQVcsa0JBQWtCRztJQUNwRSxNQUFNSyxnQkFBZ0IsTUFBTVAsMkRBQU9BLENBQUNNO0lBQ3BDQyxjQUFjQyxPQUFPLENBQUMsQ0FBQ0M7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsRUFBRSxFQUFFLFFBQVFILElBQUlJLElBQUk7SUFDdEM7QUFDRixjQUFjO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9zZWFyY2gvc2VhcmNoS2V5d29yZC50c3g/ZWZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZUNvbmZpZyB9IGZyb20gXCJAL2ZpcmVzdG9yZS9jb25maWdcIjtcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXRGaXJlc3RvcmUsIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEtleXdvcmQgKGtleXdvcmQ6IHN0cmluZykge1xuICAgIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG4gICAgY29uc3QgcG9zdHMgPSBjb2xsZWN0aW9uKGRiLCBcInBvc3RzXCIpO1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gcXVlcnkocG9zdHMsIHdoZXJlKFwiY29udGVudFwiLCBcImFycmF5LWNvbnRhaW5zXCIsIGtleXdvcmQpKTtcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhzZWFyY2hRdWVyeSk7XG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgICB9KTtcbiAgICAvLyByZXR1cm4gcmVzO1xufSJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImluaXRpYWxpemVBcHAiLCJjb2xsZWN0aW9uIiwiZ2V0RmlyZXN0b3JlIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJzZWFyY2hLZXl3b3JkIiwia2V5d29yZCIsImFwcCIsImRiIiwicG9zdHMiLCJzZWFyY2hRdWVyeSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/header/search/searchKeyword.tsx\n"));

/***/ })

});