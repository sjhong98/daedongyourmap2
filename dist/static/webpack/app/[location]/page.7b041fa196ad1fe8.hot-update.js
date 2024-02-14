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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPost: function() { return /* binding */ fetchPost; }\n/* harmony export */ });\nconst fetchPost = async (startIndex, value, endIndex)=>{\n    const response = await fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery\", {\n        method: \"POST\",\n        cache: \"no-cache\",\n        body: JSON.stringify({\n            \"structuredQuery\": {\n                \"from\": [\n                    {\n                        \"collectionId\": \"posts\"\n                    }\n                ],\n                \"where\": {\n                    \"fieldFilter\": {\n                        \"field\": {\n                            \"fieldPath\": \"point\"\n                        },\n                        \"op\": \"EQUAL\",\n                        \"value\": {\n                            \"stringValue\": \"\".concat(value)\n                        }\n                    }\n                },\n                \"orderBy\": [\n                    {\n                        \"field\": {\n                            \"fieldPath\": \"createTime\"\n                        },\n                        \"direction\": \"DESCENDING\"\n                    }\n                ]\n            }\n        })\n    });\n    const data = await response.json();\n    let extract = [];\n    data.map((elem)=>{\n        let item = elem.document;\n        let curComments;\n        console.log(\"item.fields.comments : \", item.fields.comments);\n        if (item.fields.comments.arrayValue.values === undefined) {\n            curComments = [];\n            console.log(\"item.fields.comments.arrayValue.values === undefined\");\n        } else curComments = item.fields.comments.arrayValue.values;\n        item !== undefined && extract.push({\n            createTime: item.createTime,\n            title: item.fields.title.stringValue,\n            content: item.fields.content.stringValue,\n            point: item.fields.point.stringValue,\n            photo: item.fields.photo.arrayValue.values,\n            user: item.fields.user.stringValue,\n            comments: curComments,\n            name: item.name,\n            likes: item.fields.likes.arrayValue.values\n        });\n    });\n    console.log(\"rough data : \", data);\n    return extract;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL2ZldGNoUG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFlBQVksT0FBT0MsWUFBb0JDLE9BQWdCQztJQUNoRSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sNEdBQTRHO1FBQ3pJQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCLG1CQUFtQjtnQkFDZixRQUFRO29CQUFDO3dCQUNMLGdCQUFnQjtvQkFDcEI7aUJBQUU7Z0JBQ0YsU0FBUztvQkFDTCxlQUFlO3dCQUNYLFNBQVM7NEJBQUUsYUFBYTt3QkFBUTt3QkFDaEMsTUFBTTt3QkFDTixTQUFTOzRCQUFFLGVBQWUsR0FBUyxPQUFOUjt3QkFBUTtvQkFDekM7Z0JBQ0o7Z0JBQ0EsV0FBVztvQkFDUDt3QkFDRSxTQUFTOzRCQUFFLGFBQWE7d0JBQWE7d0JBQ3JDLGFBQWE7b0JBQ2Y7aUJBQ0Q7WUFDUDtRQUNKO0lBQ0E7SUFFQSxNQUFNUyxPQUFPLE1BQU1QLFNBQVNRLElBQUk7SUFFaEMsSUFBSUMsVUFBaUIsRUFBRTtJQUN2QkYsS0FBS0csR0FBRyxDQUFDLENBQUNDO1FBQ04sSUFBSUMsT0FBT0QsS0FBS0UsUUFBUTtRQUN4QixJQUFJQztRQUNKQyxRQUFRQyxHQUFHLENBQUMsMkJBQTRCSixLQUFLSyxNQUFNLENBQUNDLFFBQVE7UUFDNUQsSUFBR04sS0FBS0ssTUFBTSxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQ0MsTUFBTSxLQUFLQyxXQUFXO1lBQUVQLGNBQWMsRUFBRTtZQUFFQyxRQUFRQyxHQUFHLENBQUM7UUFBd0QsT0FDNUlGLGNBQWNGLEtBQUtLLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUNDLE1BQU07UUFDekRSLFNBQVNTLGFBQWFaLFFBQVFhLElBQUksQ0FBQztZQUMvQkMsWUFBWVgsS0FBS1csVUFBVTtZQUMzQkMsT0FBT1osS0FBS0ssTUFBTSxDQUFDTyxLQUFLLENBQUNDLFdBQVc7WUFDcENDLFNBQVNkLEtBQUtLLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDRCxXQUFXO1lBQ3hDRSxPQUFPZixLQUFLSyxNQUFNLENBQUNVLEtBQUssQ0FBQ0YsV0FBVztZQUNwQ0csT0FBT2hCLEtBQUtLLE1BQU0sQ0FBQ1csS0FBSyxDQUFDVCxVQUFVLENBQUNDLE1BQU07WUFDMUNTLE1BQU1qQixLQUFLSyxNQUFNLENBQUNZLElBQUksQ0FBQ0osV0FBVztZQUNsQ1AsVUFBVUo7WUFDVmdCLE1BQU1sQixLQUFLa0IsSUFBSTtZQUNmQyxPQUFPbkIsS0FBS0ssTUFBTSxDQUFDYyxLQUFLLENBQUNaLFVBQVUsQ0FBQ0MsTUFBTTtRQUM5QztJQUNKO0lBQ0FMLFFBQVFDLEdBQUcsQ0FBQyxpQkFBa0JUO0lBQzlCLE9BQU9FO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xvY2F0aW9uXS9mZXRjaFBvc3QudHN4PzU4ODUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jIChzdGFydEluZGV4OiBudW1iZXIsIHZhbHVlPzogc3RyaW5nLCBlbmRJbmRleD86bnVtYmVyICkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZmlyZXN0b3JlLmdvb2dsZWFwaXMuY29tL3YxL3Byb2plY3RzL2RhZWRvbmd5b3VybWFwLWFkNjNkL2RhdGFiYXNlcy8oZGVmYXVsdCkvZG9jdW1lbnRzOnJ1blF1ZXJ5Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgXCJzdHJ1Y3R1cmVkUXVlcnlcIjoge1xuICAgICAgICAgICAgXCJmcm9tXCI6IFt7XG4gICAgICAgICAgICAgICAgXCJjb2xsZWN0aW9uSWRcIjogXCJwb3N0c1wiLFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBcIndoZXJlXCI6IHtcbiAgICAgICAgICAgICAgICBcImZpZWxkRmlsdGVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZFwiOiB7IFwiZmllbGRQYXRoXCI6IFwicG9pbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBcIm9wXCI6IFwiRVFVQUxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7IFwic3RyaW5nVmFsdWVcIjogYCR7dmFsdWV9YCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib3JkZXJCeVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJmaWVsZFwiOiB7IFwiZmllbGRQYXRoXCI6IFwiY3JlYXRlVGltZVwiIH0sXG4gICAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcIkRFU0NFTkRJTkdcIiBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgbGV0IGV4dHJhY3Q6IGFueVtdID0gW107XG4gICAgZGF0YS5tYXAoKGVsZW06IGFueSkgPT4ge1xuICAgICAgICBsZXQgaXRlbSA9IGVsZW0uZG9jdW1lbnQ7XG4gICAgICAgIGxldCBjdXJDb21tZW50czphbnk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbS5maWVsZHMuY29tbWVudHMgOiBcIiAsIGl0ZW0uZmllbGRzLmNvbW1lbnRzKTtcbiAgICAgICAgaWYoaXRlbS5maWVsZHMuY29tbWVudHMuYXJyYXlWYWx1ZS52YWx1ZXMgPT09IHVuZGVmaW5lZCkgeyBjdXJDb21tZW50cyA9IFtdOyBjb25zb2xlLmxvZyhcIml0ZW0uZmllbGRzLmNvbW1lbnRzLmFycmF5VmFsdWUudmFsdWVzID09PSB1bmRlZmluZWRcIikgfVxuICAgICAgICBlbHNlIGN1ckNvbW1lbnRzID0gaXRlbS5maWVsZHMuY29tbWVudHMuYXJyYXlWYWx1ZS52YWx1ZXM7XG4gICAgICAgIGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBleHRyYWN0LnB1c2goe1xuICAgICAgICAgICAgY3JlYXRlVGltZTogaXRlbS5jcmVhdGVUaW1lLFxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZmllbGRzLnRpdGxlLnN0cmluZ1ZhbHVlLFxuICAgICAgICAgICAgY29udGVudDogaXRlbS5maWVsZHMuY29udGVudC5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgIHBvaW50OiBpdGVtLmZpZWxkcy5wb2ludC5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgIHBob3RvOiBpdGVtLmZpZWxkcy5waG90by5hcnJheVZhbHVlLnZhbHVlcyxcbiAgICAgICAgICAgIHVzZXI6IGl0ZW0uZmllbGRzLnVzZXIuc3RyaW5nVmFsdWUsXG4gICAgICAgICAgICBjb21tZW50czogY3VyQ29tbWVudHMsXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBsaWtlczogaXRlbS5maWVsZHMubGlrZXMuYXJyYXlWYWx1ZS52YWx1ZXMsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwicm91Z2ggZGF0YSA6IFwiICwgZGF0YSk7XG4gICAgcmV0dXJuIGV4dHJhY3Q7XG59IFxuICAiXSwibmFtZXMiOlsiZmV0Y2hQb3N0Iiwic3RhcnRJbmRleCIsInZhbHVlIiwiZW5kSW5kZXgiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiY2FjaGUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXh0cmFjdCIsIm1hcCIsImVsZW0iLCJpdGVtIiwiZG9jdW1lbnQiLCJjdXJDb21tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZHMiLCJjb21tZW50cyIsImFycmF5VmFsdWUiLCJ2YWx1ZXMiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY3JlYXRlVGltZSIsInRpdGxlIiwic3RyaW5nVmFsdWUiLCJjb250ZW50IiwicG9pbnQiLCJwaG90byIsInVzZXIiLCJuYW1lIiwibGlrZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/fetchPost.tsx\n"));

/***/ })

});