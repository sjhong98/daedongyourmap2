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

/***/ "(app-pages-browser)/./app/[location]/postView/uploadComment.tsx":
/*!***************************************************!*\
  !*** ./app/[location]/postView/uploadComment.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UploadComment: function() { return /* binding */ UploadComment; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var _firestore_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firestore/config */ \"(app-pages-browser)/./firestore/config.tsx\");\n/* __next_internal_client_entry_do_not_use__ UploadComment auto */ \n\nasync function UploadComment(post, idToken, comment, comments, setComments) {\n    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(_firestore_config__WEBPACK_IMPORTED_MODULE_1__.firebaseConfig);\n    const email = localStorage.getItem(\"ddym-email\");\n    let temp = [];\n    if (comments.length !== 0) {\n        temp = [\n            ...comments\n        ];\n    }\n    temp.push({\n        mapValue: {\n            fields: {\n                user: {\n                    stringValue: email\n                },\n                comment: {\n                    stringValue: comment\n                }\n            }\n        }\n    });\n    fetch(\"https://firestore.googleapis.com/v1/\".concat(post.name, \"?updateMask.fieldPaths=comments\"), {\n        method: \"PATCH\",\n        headers: {\n            \"Authorization\": \"Bearer \".concat(idToken)\n        },\n        body: JSON.stringify({\n            fields: {\n                comments: {\n                    arrayValue: {\n                        values: temp\n                    }\n                }\n            }\n        })\n    });\n}\n_c = UploadComment;\nvar _c;\n$RefreshReg$(_c, \"UploadComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3VwbG9hZENvbW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7OzttRUFHNkM7QUFDTztBQUc3QyxlQUFlRSxjQUFjQyxJQUFhLEVBQUVDLE9BQWMsRUFBRUMsT0FBYyxFQUFFQyxRQUFZLEVBQUVDLFdBQXlCO0lBQ3RIUCwyREFBYUEsQ0FBQ0MsNkRBQWNBO0lBQzVCLE1BQU1PLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxJQUFJQyxPQUFhLEVBQUU7SUFDbkIsSUFBR0wsU0FBU00sTUFBTSxLQUFLLEdBQUc7UUFDdEJELE9BQU87ZUFBSUw7U0FBUztJQUN4QjtJQUNBSyxLQUFLRSxJQUFJLENBQ0w7UUFBRUMsVUFDRTtZQUFFQyxRQUNFO2dCQUNJQyxNQUFNO29CQUFFQyxhQUFjVDtnQkFBTTtnQkFDNUJILFNBQVM7b0JBQUVZLGFBQWNaO2dCQUFRO1lBQ3JDO1FBQ0o7SUFDSjtJQUdKYSxNQUFNLHVDQUFpRCxPQUFWZixLQUFLZ0IsSUFBSSxFQUFDLG9DQUFrQztRQUNyRkMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsaUJBQWlCLFVBQWtCLE9BQVJqQjtRQUMvQjtRQUNBa0IsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCVCxRQUFRO2dCQUNKVCxVQUFVO29CQUNObUIsWUFBWTt3QkFDUkMsUUFBUWY7b0JBQ1o7Z0JBQ0o7WUFDSjtRQUNKO0lBQ0o7QUFDSjtLQWpDc0JUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L3VwbG9hZENvbW1lbnQudHN4PzJmYjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGZpcmViYXNlQ29uZmlnIH0gZnJvbSBcIkAvZmlyZXN0b3JlL2NvbmZpZ1wiO1xuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tIFwiQC9hcHAvcmVjb2lsQ29udGV4dFByb3ZpZGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGxvYWRDb21tZW50KHBvc3Q6UG9zdFR5cGUsIGlkVG9rZW46c3RyaW5nLCBjb21tZW50OnN0cmluZywgY29tbWVudHM6YW55LCBzZXRDb21tZW50czpEaXNwYXRjaDxhbnk+KSB7XG4gICAgaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgY29uc3QgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGR5bS1lbWFpbCcpO1xuICAgIGxldCB0ZW1wOmFueVtdID0gW107XG4gICAgaWYoY29tbWVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRlbXAgPSBbLi4uY29tbWVudHNdO1xuICAgIH1cbiAgICB0ZW1wLnB1c2goXG4gICAgICAgIHsgbWFwVmFsdWUgOiBcbiAgICAgICAgICAgIHsgZmllbGRzIDogXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7IHN0cmluZ1ZhbHVlIDogZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogeyBzdHJpbmdWYWx1ZSA6IGNvbW1lbnQgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIClcblxuICAgIGZldGNoKGBodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS8ke3Bvc3QubmFtZX0/dXBkYXRlTWFzay5maWVsZFBhdGhzPWNvbW1lbnRzYCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7aWRUb2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5VmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogdGVtcCBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcbn0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiVXBsb2FkQ29tbWVudCIsInBvc3QiLCJpZFRva2VuIiwiY29tbWVudCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJlbWFpbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0ZW1wIiwibGVuZ3RoIiwicHVzaCIsIm1hcFZhbHVlIiwiZmllbGRzIiwidXNlciIsInN0cmluZ1ZhbHVlIiwiZmV0Y2giLCJuYW1lIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYXJyYXlWYWx1ZSIsInZhbHVlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postView/uploadComment.tsx\n"));

/***/ })

});