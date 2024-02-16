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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPost: function() { return /* binding */ fetchPost; }\n/* harmony export */ });\nconst fetchPost = async (startIndex, value, endIndex)=>{\n    const response = await fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery\", {\n        method: \"POST\",\n        cache: \"no-cache\",\n        body: JSON.stringify({\n            \"structuredQuery\": {\n                \"from\": [\n                    {\n                        \"collectionId\": \"posts\"\n                    }\n                ],\n                \"where\": {\n                    \"fieldFilter\": {\n                        \"field\": {\n                            \"fieldPath\": \"point\"\n                        },\n                        \"op\": \"EQUAL\",\n                        \"value\": {\n                            \"stringValue\": \"\".concat(value)\n                        }\n                    }\n                },\n                \"orderBy\": [\n                    {\n                        \"field\": {\n                            \"fieldPath\": \"createTime\"\n                        },\n                        \"direction\": \"DESCENDING\"\n                    }\n                ],\n                \"limit\": 30,\n                \"startAt\": {\n                    \"values\": [\n                        {\n                            \"doubleValue\": 0\n                        }\n                    ],\n                    \"before\": false\n                }\n            }\n        })\n    });\n    const data = await response.json();\n    let extract = [];\n    data.map((elem)=>{\n        let item = elem.document;\n        let curComments;\n        if (item) {\n            if (item.fields.comments.arrayValue.values === undefined) curComments = [];\n            else curComments = item.fields.comments.arrayValue.values;\n            item !== undefined && extract.push({\n                createTime: item.createTime,\n                title: item.fields.title.stringValue,\n                content: item.fields.content.stringValue,\n                point: item.fields.point.stringValue,\n                photo: item.fields.photo.arrayValue.values,\n                user: item.fields.user.stringValue,\n                comments: curComments,\n                name: item.name,\n                likes: item.fields.likes.arrayValue.values\n            });\n        }\n    });\n    console.log(\"\\n\\n\\n\\n\\n\\nstartIndex : \", startIndex, \"\\n\\n\\n\\n\\n\\n\\n\");\n    // console.log(\"rough data : \" , data);\n    return extract;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL2ZldGNoUG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFlBQVksT0FBT0MsWUFBcUJDLE9BQWdCQztJQUNqRSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sNEdBQTRHO1FBQ3pJQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCLG1CQUFtQjtnQkFDZixRQUFRO29CQUFDO3dCQUNMLGdCQUFnQjtvQkFDcEI7aUJBQUU7Z0JBQ0YsU0FBUztvQkFDTCxlQUFlO3dCQUNYLFNBQVM7NEJBQUUsYUFBYTt3QkFBUTt3QkFDaEMsTUFBTTt3QkFDTixTQUFTOzRCQUFFLGVBQWUsR0FBUyxPQUFOUjt3QkFBUTtvQkFDekM7Z0JBQ0o7Z0JBQ0EsV0FBVztvQkFBQzt3QkFDSixTQUFTOzRCQUFFLGFBQWE7d0JBQWE7d0JBQ3JDLGFBQWE7b0JBQ3JCO2lCQUFFO2dCQUNGLFNBQVM7Z0JBQ1QsV0FBVztvQkFDUCxVQUFVO3dCQUNOOzRCQUFFLGVBQWU7d0JBQUU7cUJBQ3RCO29CQUNELFVBQVU7Z0JBQ2Q7WUFDSjtRQUNKO0lBQ0E7SUFFQSxNQUFNUyxPQUFPLE1BQU1QLFNBQVNRLElBQUk7SUFFaEMsSUFBSUMsVUFBaUIsRUFBRTtJQUN2QkYsS0FBS0csR0FBRyxDQUFDLENBQUNDO1FBQ04sSUFBSUMsT0FBT0QsS0FBS0UsUUFBUTtRQUN4QixJQUFJQztRQUNKLElBQUdGLE1BQU07WUFDTCxJQUFHQSxLQUFLRyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDQyxNQUFNLEtBQUtDLFdBQVdMLGNBQWMsRUFBRTtpQkFDcEVBLGNBQWNGLEtBQUtHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUNDLE1BQU07WUFDekROLFNBQVNPLGFBQWFWLFFBQVFXLElBQUksQ0FBQztnQkFDL0JDLFlBQVlULEtBQUtTLFVBQVU7Z0JBQzNCQyxPQUFPVixLQUFLRyxNQUFNLENBQUNPLEtBQUssQ0FBQ0MsV0FBVztnQkFDcENDLFNBQVNaLEtBQUtHLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDRCxXQUFXO2dCQUN4Q0UsT0FBT2IsS0FBS0csTUFBTSxDQUFDVSxLQUFLLENBQUNGLFdBQVc7Z0JBQ3BDRyxPQUFPZCxLQUFLRyxNQUFNLENBQUNXLEtBQUssQ0FBQ1QsVUFBVSxDQUFDQyxNQUFNO2dCQUMxQ1MsTUFBTWYsS0FBS0csTUFBTSxDQUFDWSxJQUFJLENBQUNKLFdBQVc7Z0JBQ2xDUCxVQUFVRjtnQkFDVmMsTUFBTWhCLEtBQUtnQixJQUFJO2dCQUNmQyxPQUFPakIsS0FBS0csTUFBTSxDQUFDYyxLQUFLLENBQUNaLFVBQVUsQ0FBQ0MsTUFBTTtZQUM5QztRQUNKO0lBQ0o7SUFDQVksUUFBUUMsR0FBRyxDQUFDLDZCQUE2QmxDLFlBQVk7SUFDckQsdUNBQXVDO0lBQ3ZDLE9BQU9ZO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xvY2F0aW9uXS9mZXRjaFBvc3QudHN4PzU4ODUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jIChzdGFydEluZGV4PzogbnVtYmVyLCB2YWx1ZT86IHN0cmluZywgZW5kSW5kZXg/Om51bWJlciApID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy9kYWVkb25neW91cm1hcC1hZDYzZC9kYXRhYmFzZXMvKGRlZmF1bHQpL2RvY3VtZW50czpydW5RdWVyeScsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwic3RydWN0dXJlZFF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwiZnJvbVwiOiBbe1xuICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvbklkXCI6IFwicG9zdHNcIixcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgXCJ3aGVyZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmaWVsZEZpbHRlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGRcIjogeyBcImZpZWxkUGF0aFwiOiBcInBvaW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJvcFwiOiBcIkVRVUFMXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogeyBcInN0cmluZ1ZhbHVlXCI6IGAke3ZhbHVlfWAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9yZGVyQnlcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZFwiOiB7IFwiZmllbGRQYXRoXCI6IFwiY3JlYXRlVGltZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwiREVTQ0VORElOR1wiIFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBcImxpbWl0XCI6IDMwLFxuICAgICAgICAgICAgXCJzdGFydEF0XCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgXCJkb3VibGVWYWx1ZVwiOiAwIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiYmVmb3JlXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGxldCBleHRyYWN0OiBhbnlbXSA9IFtdO1xuICAgIGRhdGEubWFwKChlbGVtOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGl0ZW0gPSBlbGVtLmRvY3VtZW50O1xuICAgICAgICBsZXQgY3VyQ29tbWVudHM6YW55O1xuICAgICAgICBpZihpdGVtKSB7XG4gICAgICAgICAgICBpZihpdGVtLmZpZWxkcy5jb21tZW50cy5hcnJheVZhbHVlLnZhbHVlcyA9PT0gdW5kZWZpbmVkKSBjdXJDb21tZW50cyA9IFtdO1xuICAgICAgICAgICAgZWxzZSBjdXJDb21tZW50cyA9IGl0ZW0uZmllbGRzLmNvbW1lbnRzLmFycmF5VmFsdWUudmFsdWVzO1xuICAgICAgICAgICAgaXRlbSAhPT0gdW5kZWZpbmVkICYmIGV4dHJhY3QucHVzaCh7XG4gICAgICAgICAgICAgICAgY3JlYXRlVGltZTogaXRlbS5jcmVhdGVUaW1lLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmZpZWxkcy50aXRsZS5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmZpZWxkcy5jb250ZW50LnN0cmluZ1ZhbHVlLFxuICAgICAgICAgICAgICAgIHBvaW50OiBpdGVtLmZpZWxkcy5wb2ludC5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICBwaG90bzogaXRlbS5maWVsZHMucGhvdG8uYXJyYXlWYWx1ZS52YWx1ZXMsXG4gICAgICAgICAgICAgICAgdXNlcjogaXRlbS5maWVsZHMudXNlci5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb21tZW50czogY3VyQ29tbWVudHMsXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGxpa2VzOiBpdGVtLmZpZWxkcy5saWtlcy5hcnJheVZhbHVlLnZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJcXG5cXG5cXG5cXG5cXG5cXG5zdGFydEluZGV4IDogXCIsIHN0YXJ0SW5kZXgsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIpXG4gICAgLy8gY29uc29sZS5sb2coXCJyb3VnaCBkYXRhIDogXCIgLCBkYXRhKTtcbiAgICByZXR1cm4gZXh0cmFjdDtcbn0gXG4gICJdLCJuYW1lcyI6WyJmZXRjaFBvc3QiLCJzdGFydEluZGV4IiwidmFsdWUiLCJlbmRJbmRleCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjYWNoZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJleHRyYWN0IiwibWFwIiwiZWxlbSIsIml0ZW0iLCJkb2N1bWVudCIsImN1ckNvbW1lbnRzIiwiZmllbGRzIiwiY29tbWVudHMiLCJhcnJheVZhbHVlIiwidmFsdWVzIiwidW5kZWZpbmVkIiwicHVzaCIsImNyZWF0ZVRpbWUiLCJ0aXRsZSIsInN0cmluZ1ZhbHVlIiwiY29udGVudCIsInBvaW50IiwicGhvdG8iLCJ1c2VyIiwibmFtZSIsImxpa2VzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/fetchPost.tsx\n"));

/***/ })

});