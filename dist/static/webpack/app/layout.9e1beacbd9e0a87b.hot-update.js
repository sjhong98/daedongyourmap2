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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"914100167480\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2YwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5MTQxMDAxNjc0ODBcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/header/search/searchKeyword.tsx":
/*!********************************************************!*\
  !*** ./app/components/header/search/searchKeyword.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchKeyword: function() { return /* binding */ searchKeyword; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var _firestore_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firestore/config */ \"(app-pages-browser)/./firestore/config.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\nasync function searchKeyword(keyword) {\n    console.log(\"search keyword ...\", keyword);\n    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(_firestore_config__WEBPACK_IMPORTED_MODULE_1__.firebaseConfig);\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n    const postsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"posts\");\n    const searchQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(postsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"title\", \"array-contains\", keyword));\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(searchQuery);\n    console.log(querySnapshot.docs);\n    querySnapshot.forEach((doc)=>{\n        console.log(doc.id, \" => \", doc.data());\n    });\n// return res;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9zZWFyY2gvc2VhcmNoS2V5d29yZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QztBQUNPO0FBQ2lDO0FBRTlFLGVBQWVPLGNBQWVDLE9BQWU7SUFDaERDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JGO0lBQ2xDLE1BQU1HLE1BQU1YLDJEQUFhQSxDQUFDQyw2REFBY0E7SUFDeEMsTUFBTVcsS0FBS1QsZ0VBQVlBLENBQUNRO0lBQ3hCLE1BQU1FLFdBQVdYLDhEQUFVQSxDQUFDVSxJQUFJO0lBQ2hDLE1BQU1FLGNBQWNWLHlEQUFLQSxDQUFDUyxVQUFVUix5REFBS0EsQ0FBQyxTQUFTLGtCQUFrQkc7SUFDckUsTUFBTU8sZ0JBQWdCLE1BQU1ULDJEQUFPQSxDQUFDUTtJQUNwQ0wsUUFBUUMsR0FBRyxDQUFDSyxjQUFjQyxJQUFJO0lBQzlCRCxjQUFjRSxPQUFPLENBQUMsQ0FBQ0M7UUFDbkJULFFBQVFDLEdBQUcsQ0FBQ1EsSUFBSUMsRUFBRSxFQUFFLFFBQVFELElBQUlFLElBQUk7SUFDeEM7QUFDQSxjQUFjO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9zZWFyY2gvc2VhcmNoS2V5d29yZC50c3g/ZWZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VDb25maWcgfSBmcm9tIFwiQC9maXJlc3RvcmUvY29uZmlnXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXRGaXJlc3RvcmUsIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEtleXdvcmQgKGtleXdvcmQ6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKFwic2VhcmNoIGtleXdvcmQgLi4uXCIsIGtleXdvcmQpO1xuICAgIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG4gICAgY29uc3QgcG9zdHNSZWYgPSBjb2xsZWN0aW9uKGRiLCBcInBvc3RzXCIpO1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gcXVlcnkocG9zdHNSZWYsIHdoZXJlKFwidGl0bGVcIiwgXCJhcnJheS1jb250YWluc1wiLCBrZXl3b3JkKSk7XG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3Moc2VhcmNoUXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKHF1ZXJ5U25hcHNob3QuZG9jcyk7XG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgfSk7XG4gICAgLy8gcmV0dXJuIHJlcztcbn0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiY29sbGVjdGlvbiIsImdldEZpcmVzdG9yZSIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2NzIiwic2VhcmNoS2V5d29yZCIsImtleXdvcmQiLCJjb25zb2xlIiwibG9nIiwiYXBwIiwiZGIiLCJwb3N0c1JlZiIsInNlYXJjaFF1ZXJ5IiwicXVlcnlTbmFwc2hvdCIsImRvY3MiLCJmb3JFYWNoIiwiZG9jIiwiaWQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/header/search/searchKeyword.tsx\n"));

/***/ })

});