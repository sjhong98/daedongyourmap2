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

/***/ "(app-pages-browser)/./app/functions/getProfile.tsx":
/*!**************************************!*\
  !*** ./app/functions/getProfile.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProfile: function() { return /* binding */ getProfile; }\n/* harmony export */ });\nconst getProfile = async (email)=>{\n    console.log(\"looking for\", email, \"'s data\");\n    const profile = await fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents/users/\".concat(email), {\n        method: \"GET\"\n    });\n    const data = await profile.json();\n    let extract;\n    if (data.fields !== undefined) {\n        extract = {\n            displayName: data.fields.displayName.stringValue,\n            photoURL: data.fields.photoURL.stringValue,\n            follower: data.fields.follewer.arrayValue.values,\n            follow: data.fields.follow.arrayValue.values\n        };\n    }\n    return extract;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mdW5jdGlvbnMvZ2V0UHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGFBQWEsT0FBT0M7SUFDN0JDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlRixPQUFPO0lBQ2xDLE1BQU1HLFVBQVUsTUFBTUMsTUFBTSx5R0FBK0csT0FBTkosUUFBUztRQUMxSUssUUFBUTtJQUNaO0lBQ0EsTUFBTUMsT0FBTyxNQUFNSCxRQUFRSSxJQUFJO0lBQy9CLElBQUlDO0lBQ0osSUFBR0YsS0FBS0csTUFBTSxLQUFLQyxXQUFXO1FBQzFCRixVQUFVO1lBQ05HLGFBQWFMLEtBQUtHLE1BQU0sQ0FBQ0UsV0FBVyxDQUFDQyxXQUFXO1lBQ2hEQyxVQUFVUCxLQUFLRyxNQUFNLENBQUNJLFFBQVEsQ0FBQ0QsV0FBVztZQUMxQ0UsVUFBVVIsS0FBS0csTUFBTSxDQUFDTSxRQUFRLENBQUNDLFVBQVUsQ0FBQ0MsTUFBTTtZQUNoREMsUUFBUVosS0FBS0csTUFBTSxDQUFDUyxNQUFNLENBQUNGLFVBQVUsQ0FBQ0MsTUFBTTtRQUNoRDtJQUNKO0lBQ0EsT0FBT1Q7QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9mdW5jdGlvbnMvZ2V0UHJvZmlsZS50c3g/NzQyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9IGFzeW5jIChlbWFpbDpzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImxvb2tpbmcgZm9yXCIsIGVtYWlsLCBcIidzIGRhdGFcIik7XG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy9kYWVkb25neW91cm1hcC1hZDYzZC9kYXRhYmFzZXMvKGRlZmF1bHQpL2RvY3VtZW50cy91c2Vycy8ke2VtYWlsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJvZmlsZS5qc29uKCk7XG4gICAgbGV0IGV4dHJhY3Q7XG4gICAgaWYoZGF0YS5maWVsZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBleHRyYWN0ID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRhdGEuZmllbGRzLmRpc3BsYXlOYW1lLnN0cmluZ1ZhbHVlLFxuICAgICAgICAgICAgcGhvdG9VUkw6IGRhdGEuZmllbGRzLnBob3RvVVJMLnN0cmluZ1ZhbHVlLFxuICAgICAgICAgICAgZm9sbG93ZXI6IGRhdGEuZmllbGRzLmZvbGxld2VyLmFycmF5VmFsdWUudmFsdWVzLFxuICAgICAgICAgICAgZm9sbG93OiBkYXRhLmZpZWxkcy5mb2xsb3cuYXJyYXlWYWx1ZS52YWx1ZXNcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0cmFjdDtcbn0iXSwibmFtZXMiOlsiZ2V0UHJvZmlsZSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsInByb2ZpbGUiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwiZXh0cmFjdCIsImZpZWxkcyIsInVuZGVmaW5lZCIsImRpc3BsYXlOYW1lIiwic3RyaW5nVmFsdWUiLCJwaG90b1VSTCIsImZvbGxvd2VyIiwiZm9sbGV3ZXIiLCJhcnJheVZhbHVlIiwidmFsdWVzIiwiZm9sbG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/functions/getProfile.tsx\n"));

/***/ })

});