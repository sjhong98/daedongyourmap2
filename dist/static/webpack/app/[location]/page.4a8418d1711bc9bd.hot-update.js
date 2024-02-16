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

/***/ "(app-pages-browser)/./app/[location]/fetchPost.tsx":
/*!**************************************!*\
  !*** ./app/[location]/fetchPost.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPost: function() { return /* binding */ fetchPost; }\n/* harmony export */ });\nconst fetchPost = async (startIndex, value, endIndex)=>{\n    const response = await fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery\", {\n        method: \"POST\",\n        cache: \"no-cache\",\n        body: JSON.stringify({\n            \"structuredQuery\": {\n                \"from\": [\n                    {\n                        \"collectionId\": \"posts\"\n                    }\n                ],\n                \"where\": {\n                    \"fieldFilter\": {\n                        \"field\": {\n                            \"fieldPath\": \"point\"\n                        },\n                        \"op\": \"EQUAL\",\n                        \"value\": {\n                            \"stringValue\": \"\".concat(value)\n                        }\n                    }\n                },\n                \"orderBy\": [\n                    {\n                        \"field\": {\n                            \"fieldPath\": \"createTime\"\n                        },\n                        \"direction\": \"DESCENDING\"\n                    }\n                ],\n                \"limit\": 30,\n                \"startAt\": {\n                    \"values\": [\n                        {\n                            integerValue: startIndex\n                        }\n                    ]\n                }\n            }\n        })\n    });\n    const data = await response.json();\n    let extract = [];\n    data.map((elem)=>{\n        let item = elem.document;\n        let curComments;\n        if (item.fields.comments.arrayValue.values === undefined) curComments = [];\n        else curComments = item.fields.comments.arrayValue.values;\n        item !== undefined && extract.push({\n            createTime: item.createTime,\n            title: item.fields.title.stringValue,\n            content: item.fields.content.stringValue,\n            point: item.fields.point.stringValue,\n            photo: item.fields.photo.arrayValue.values,\n            user: item.fields.user.stringValue,\n            comments: curComments,\n            name: item.name,\n            likes: item.fields.likes.arrayValue.values\n        });\n    });\n    console.log(\"rough data : \", data);\n    return extract;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL2ZldGNoUG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFlBQVksT0FBT0MsWUFBb0JDLE9BQWdCQztJQUNoRSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sNEdBQTRHO1FBQ3pJQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCLG1CQUFtQjtnQkFDZixRQUFRO29CQUFDO3dCQUNMLGdCQUFnQjtvQkFDcEI7aUJBQUU7Z0JBQ0YsU0FBUztvQkFDTCxlQUFlO3dCQUNYLFNBQVM7NEJBQUUsYUFBYTt3QkFBUTt3QkFDaEMsTUFBTTt3QkFDTixTQUFTOzRCQUFFLGVBQWUsR0FBUyxPQUFOUjt3QkFBUTtvQkFDekM7Z0JBQ0o7Z0JBQ0EsV0FBVztvQkFBQzt3QkFDSixTQUFTOzRCQUFFLGFBQWE7d0JBQWE7d0JBQ3JDLGFBQWE7b0JBQ3JCO2lCQUFFO2dCQUNGLFNBQVM7Z0JBQ1QsV0FBVztvQkFDUCxVQUFVO3dCQUNOOzRCQUFFUyxjQUFjVjt3QkFBVztxQkFDOUI7Z0JBQ0w7WUFDSjtRQUNKO0lBQ0E7SUFFQSxNQUFNVyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7SUFFaEMsSUFBSUMsVUFBaUIsRUFBRTtJQUN2QkYsS0FBS0csR0FBRyxDQUFDLENBQUNDO1FBQ04sSUFBSUMsT0FBT0QsS0FBS0UsUUFBUTtRQUN4QixJQUFJQztRQUNKLElBQUdGLEtBQUtHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUNDLE1BQU0sS0FBS0MsV0FBV0wsY0FBYyxFQUFFO2FBQ3BFQSxjQUFjRixLQUFLRyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDQyxNQUFNO1FBQ3pETixTQUFTTyxhQUFhVixRQUFRVyxJQUFJLENBQUM7WUFDL0JDLFlBQVlULEtBQUtTLFVBQVU7WUFDM0JDLE9BQU9WLEtBQUtHLE1BQU0sQ0FBQ08sS0FBSyxDQUFDQyxXQUFXO1lBQ3BDQyxTQUFTWixLQUFLRyxNQUFNLENBQUNTLE9BQU8sQ0FBQ0QsV0FBVztZQUN4Q0UsT0FBT2IsS0FBS0csTUFBTSxDQUFDVSxLQUFLLENBQUNGLFdBQVc7WUFDcENHLE9BQU9kLEtBQUtHLE1BQU0sQ0FBQ1csS0FBSyxDQUFDVCxVQUFVLENBQUNDLE1BQU07WUFDMUNTLE1BQU1mLEtBQUtHLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDSixXQUFXO1lBQ2xDUCxVQUFVRjtZQUNWYyxNQUFNaEIsS0FBS2dCLElBQUk7WUFDZkMsT0FBT2pCLEtBQUtHLE1BQU0sQ0FBQ2MsS0FBSyxDQUFDWixVQUFVLENBQUNDLE1BQU07UUFDOUM7SUFDSjtJQUNBWSxRQUFRQyxHQUFHLENBQUMsaUJBQWtCeEI7SUFDOUIsT0FBT0U7QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbG9jYXRpb25dL2ZldGNoUG9zdC50c3g/NTg4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZmV0Y2hQb3N0ID0gYXN5bmMgKHN0YXJ0SW5kZXg6IG51bWJlciwgdmFsdWU/OiBzdHJpbmcsIGVuZEluZGV4PzpudW1iZXIgKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9maXJlc3RvcmUuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvZGFlZG9uZ3lvdXJtYXAtYWQ2M2QvZGF0YWJhc2VzLyhkZWZhdWx0KS9kb2N1bWVudHM6cnVuUXVlcnknLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInN0cnVjdHVyZWRRdWVyeVwiOiB7XG4gICAgICAgICAgICBcImZyb21cIjogW3tcbiAgICAgICAgICAgICAgICBcImNvbGxlY3Rpb25JZFwiOiBcInBvc3RzXCIsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFwid2hlcmVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmllbGRGaWx0ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZpZWxkXCI6IHsgXCJmaWVsZFBhdGhcIjogXCJwb2ludFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFwib3BcIjogXCJFUVVBTFwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHsgXCJzdHJpbmdWYWx1ZVwiOiBgJHt2YWx1ZX1gIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcmRlckJ5XCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGRcIjogeyBcImZpZWxkUGF0aFwiOiBcImNyZWF0ZVRpbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcIkRFU0NFTkRJTkdcIiBcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgXCJsaW1pdFwiOiAzMCxcbiAgICAgICAgICAgIFwic3RhcnRBdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7IGludGVnZXJWYWx1ZTogc3RhcnRJbmRleCB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBsZXQgZXh0cmFjdDogYW55W10gPSBbXTtcbiAgICBkYXRhLm1hcCgoZWxlbTogYW55KSA9PiB7XG4gICAgICAgIGxldCBpdGVtID0gZWxlbS5kb2N1bWVudDtcbiAgICAgICAgbGV0IGN1ckNvbW1lbnRzOmFueTtcbiAgICAgICAgaWYoaXRlbS5maWVsZHMuY29tbWVudHMuYXJyYXlWYWx1ZS52YWx1ZXMgPT09IHVuZGVmaW5lZCkgY3VyQ29tbWVudHMgPSBbXTtcbiAgICAgICAgZWxzZSBjdXJDb21tZW50cyA9IGl0ZW0uZmllbGRzLmNvbW1lbnRzLmFycmF5VmFsdWUudmFsdWVzO1xuICAgICAgICBpdGVtICE9PSB1bmRlZmluZWQgJiYgZXh0cmFjdC5wdXNoKHtcbiAgICAgICAgICAgIGNyZWF0ZVRpbWU6IGl0ZW0uY3JlYXRlVGltZSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLmZpZWxkcy50aXRsZS5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZmllbGRzLmNvbnRlbnQuc3RyaW5nVmFsdWUsXG4gICAgICAgICAgICBwb2ludDogaXRlbS5maWVsZHMucG9pbnQuc3RyaW5nVmFsdWUsXG4gICAgICAgICAgICBwaG90bzogaXRlbS5maWVsZHMucGhvdG8uYXJyYXlWYWx1ZS52YWx1ZXMsXG4gICAgICAgICAgICB1c2VyOiBpdGVtLmZpZWxkcy51c2VyLnN0cmluZ1ZhbHVlLFxuICAgICAgICAgICAgY29tbWVudHM6IGN1ckNvbW1lbnRzLFxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgbGlrZXM6IGl0ZW0uZmllbGRzLmxpa2VzLmFycmF5VmFsdWUudmFsdWVzLFxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInJvdWdoIGRhdGEgOiBcIiAsIGRhdGEpO1xuICAgIHJldHVybiBleHRyYWN0O1xufSBcbiAgIl0sIm5hbWVzIjpbImZldGNoUG9zdCIsInN0YXJ0SW5kZXgiLCJ2YWx1ZSIsImVuZEluZGV4IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnRlZ2VyVmFsdWUiLCJkYXRhIiwianNvbiIsImV4dHJhY3QiLCJtYXAiLCJlbGVtIiwiaXRlbSIsImRvY3VtZW50IiwiY3VyQ29tbWVudHMiLCJmaWVsZHMiLCJjb21tZW50cyIsImFycmF5VmFsdWUiLCJ2YWx1ZXMiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY3JlYXRlVGltZSIsInRpdGxlIiwic3RyaW5nVmFsdWUiLCJjb250ZW50IiwicG9pbnQiLCJwaG90byIsInVzZXIiLCJuYW1lIiwibGlrZXMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/fetchPost.tsx\n"));

/***/ })

});