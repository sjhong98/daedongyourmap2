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

/***/ "(app-pages-browser)/./app/[location]/postView/functions/deleteComment.tsx":
/*!*************************************************************!*\
  !*** ./app/[location]/postView/functions/deleteComment.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteComment: function() { return /* binding */ DeleteComment; }\n/* harmony export */ });\nconst DeleteComment = (postId, index, comments, idToken)=>{\n    let temp = comments;\n    console.log(index, comments);\n    temp.splice(index, 1);\n    fetch(\"https://firestore.googleapis.com/v1/\".concat(postId, \"?updateMask.fieldPaths=comments\"), {\n        method: \"PATCH\",\n        headers: {\n            \"Authorization\": \"Bearer \".concat(idToken)\n        },\n        body: JSON.stringify({\n            fields: {\n                comments: {\n                    arrayValue: {\n                        values: temp\n                    }\n                }\n            }\n        })\n    }).then((res)=>console.log(\"댓글 삭제 성공\", res)).catch((err)=>console.log(\"댓글 삭제 실패\", err));\n};\n_c = DeleteComment;\nvar _c;\n$RefreshReg$(_c, \"DeleteComment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L2Z1bmN0aW9ucy9kZWxldGVDb21tZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsZ0JBQWdCLENBQUNDLFFBQWVDLE9BQWNDLFVBQWNDO0lBQ3JFLElBQUlDLE9BQU9GO0lBQ1hHLFFBQVFDLEdBQUcsQ0FBQ0wsT0FBT0M7SUFDbkJFLEtBQUtHLE1BQU0sQ0FBQ04sT0FBTztJQUNuQk8sTUFBTSx1Q0FBOEMsT0FBUFIsUUFBTyxvQ0FBa0M7UUFDbEZTLFFBQVE7UUFDUkMsU0FBUztZQUNMLGlCQUFpQixVQUFrQixPQUFSUDtRQUMvQjtRQUNBUSxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDakJDLFFBQVE7Z0JBQ0paLFVBQVU7b0JBQ05hLFlBQVk7d0JBQ1JDLFFBQVFaO29CQUNaO2dCQUNKO1lBQ0o7UUFDSjtJQUNKLEdBQ0NhLElBQUksQ0FBQyxDQUFDQyxNQUFRYixRQUFRQyxHQUFHLENBQUMsWUFBWVksTUFDdENDLEtBQUssQ0FBQyxDQUFDQyxNQUFRZixRQUFRQyxHQUFHLENBQUMsWUFBWWM7QUFDNUMsRUFBQztLQXJCWXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL3Bvc3RWaWV3L2Z1bmN0aW9ucy9kZWxldGVDb21tZW50LnRzeD9iNTNmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBEZWxldGVDb21tZW50ID0gKHBvc3RJZDpzdHJpbmcsIGluZGV4Om51bWJlciwgY29tbWVudHM6YW55LCBpZFRva2VuOnN0cmluZykgPT4ge1xuICAgIGxldCB0ZW1wID0gY29tbWVudHM7XG4gICAgY29uc29sZS5sb2coaW5kZXgsIGNvbW1lbnRzKTtcbiAgICB0ZW1wLnNwbGljZShpbmRleCwgMSk7XG4gICAgZmV0Y2goYGh0dHBzOi8vZmlyZXN0b3JlLmdvb2dsZWFwaXMuY29tL3YxLyR7cG9zdElkfT91cGRhdGVNYXNrLmZpZWxkUGF0aHM9Y29tbWVudHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtpZFRva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgY29tbWVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlWYWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB0ZW1wIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2coXCLrjJPquIAg7IKt7KCcIOyEseqztVwiLCByZXMpKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcIuuMk+q4gCDsgq3soJwg7Iuk7YyoXCIsIGVycikpO1xufSJdLCJuYW1lcyI6WyJEZWxldGVDb21tZW50IiwicG9zdElkIiwiaW5kZXgiLCJjb21tZW50cyIsImlkVG9rZW4iLCJ0ZW1wIiwiY29uc29sZSIsImxvZyIsInNwbGljZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmllbGRzIiwiYXJyYXlWYWx1ZSIsInZhbHVlcyIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/postView/functions/deleteComment.tsx\n"));

/***/ })

});