"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/[email]/page",{

/***/ "(app-pages-browser)/./app/profile/[email]/updateFollow.tsx":
/*!**********************************************!*\
  !*** ./app/profile/[email]/updateFollow.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UpdateFollower: function() { return /* binding */ UpdateFollower; }\n/* harmony export */ });\nconst UpdateFollower = (idToken, idToFollow, updateData)=>{\n    return new Promise((resolve)=>{\n        fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/users/\".concat(idToFollow, \"?updateMask.fieldPaths=follower\"), {\n            method: \"PATCH\",\n            headers: {\n                \"Authorization\": \"Bearer \".concat(idToken)\n            },\n            body: JSON.stringify({\n                fields: {\n                    follower: {\n                        arrayValue: {\n                            values: updateData\n                        }\n                    }\n                }\n            })\n        }).then((res)=>{\n            resolve(res);\n        });\n    });\n};\n_c = UpdateFollower;\nvar _c;\n$RefreshReg$(_c, \"UpdateFollower\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9maWxlL1tlbWFpbF0vdXBkYXRlRm9sbG93LnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsaUJBQWlCLENBQ3RCQyxTQUNBQyxZQUNBQztJQUVKLE9BQU8sSUFBSUMsUUFBUSxDQUFDQztRQUNoQkMsTUFBTSx5R0FBb0gsT0FBWEosWUFBVyxvQ0FBa0M7WUFDeEpLLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxpQkFBaUIsVUFBa0IsT0FBUlA7WUFDL0I7WUFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsUUFBUTtvQkFDSkMsVUFBVTt3QkFDTkMsWUFBWTs0QkFDUkMsUUFBUVo7d0JBQ1o7b0JBQ0o7Z0JBQ0o7WUFDSjtRQUNKLEdBQ0NhLElBQUksQ0FBQyxDQUFDQztZQUNIWixRQUFRWTtRQUNaO0lBQ0o7QUFDSixFQUFDO0tBekJZakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2ZpbGUvW2VtYWlsXS91cGRhdGVGb2xsb3cudHN4P2JhMWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVwZGF0ZUZvbGxvd2VyID0gKFxuICAgICAgICBpZFRva2VuOnN0cmluZywgXG4gICAgICAgIGlkVG9Gb2xsb3c6c3RyaW5nLCBcbiAgICAgICAgdXBkYXRlRGF0YTpBcnJheTx7c3RyaW5nVmFsdWU6IHN0cmluZ30+LFxuICAgICkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly9maXJlc3RvcmUuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvZGFlZG9uZ3lvdXJtYXAtYWQ2M2QvZGF0YWJhc2VzLyhkZWZhdWx0KS9kb2N1bWVudHMvdXNlcnMvJHtpZFRvRm9sbG93fT91cGRhdGVNYXNrLmZpZWxkUGF0aHM9Zm9sbG93ZXJgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtpZFRva2VufWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbGxvd2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB1cGRhdGVEYXRhIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgIH0pXG59Il0sIm5hbWVzIjpbIlVwZGF0ZUZvbGxvd2VyIiwiaWRUb2tlbiIsImlkVG9Gb2xsb3ciLCJ1cGRhdGVEYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZpZWxkcyIsImZvbGxvd2VyIiwiYXJyYXlWYWx1ZSIsInZhbHVlcyIsInRoZW4iLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/profile/[email]/updateFollow.tsx\n"));

/***/ })

});