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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPost: function() { return /* binding */ fetchPost; }\n/* harmony export */ });\nconst fetchPost = async (value, lastIndex)=>{\n    let startIndex;\n    if (lastIndex === undefined) {\n        const getFirstPost = await fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery\", {\n            method: \"POST\",\n            cache: \"no-cache\",\n            body: JSON.stringify({\n                \"structuredQuery\": {\n                    \"from\": [\n                        {\n                            \"collectionId\": \"posts\"\n                        }\n                    ],\n                    \"where\": {\n                        \"fieldFilter\": {\n                            \"field\": {\n                                \"fieldPath\": \"point\"\n                            },\n                            \"op\": \"EQUAL\",\n                            \"value\": {\n                                \"stringValue\": \"\".concat(value)\n                            }\n                        }\n                    },\n                    \"orderBy\": [\n                        {\n                            \"field\": {\n                                \"fieldPath\": \"createTime\"\n                            },\n                            \"direction\": \"DESCENDING\"\n                        }\n                    ],\n                    \"limit\": 1\n                }\n            })\n        });\n        const firstPost = await getFirstPost.json();\n        if (firstPost && firstPost) startIndex = firstPost[0].document.fields.createTime.doubleValue;\n        else startIndex = 0;\n    } else {\n        startIndex = lastIndex;\n    }\n    const response = await fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery\", {\n        method: \"POST\",\n        cache: \"no-cache\",\n        body: JSON.stringify({\n            \"structuredQuery\": {\n                \"from\": [\n                    {\n                        \"collectionId\": \"posts\"\n                    }\n                ],\n                \"where\": {\n                    \"fieldFilter\": {\n                        \"field\": {\n                            \"fieldPath\": \"point\"\n                        },\n                        \"op\": \"EQUAL\",\n                        \"value\": {\n                            \"stringValue\": \"\".concat(value)\n                        }\n                    }\n                },\n                \"orderBy\": [\n                    {\n                        \"field\": {\n                            \"fieldPath\": \"createTime\"\n                        },\n                        \"direction\": \"DESCENDING\"\n                    }\n                ],\n                \"startAt\": {\n                    \"values\": {\n                        \"doubleValue\": 1708043788719\n                    },\n                    \"before\": true\n                },\n                \"limit\": 30\n            }\n        })\n    });\n    const data = await response.json();\n    let extract = [];\n    data.map((elem)=>{\n        let item = elem.document;\n        let curComments;\n        if (item) {\n            if (item.fields.comments.arrayValue.values === undefined) curComments = [];\n            else curComments = item.fields.comments.arrayValue.values;\n            item !== undefined && extract.push({\n                createTime: item.fields.createTime.doubleValue,\n                title: item.fields.title.stringValue,\n                content: item.fields.content.stringValue,\n                point: item.fields.point.stringValue,\n                photo: item.fields.photo.arrayValue.values,\n                user: item.fields.user.stringValue,\n                comments: curComments,\n                name: item.name,\n                likes: item.fields.likes.arrayValue.values\n            });\n        }\n    });\n    // console.log(\"rough data : \" , data);\n    return extract;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL2ZldGNoUG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFlBQVksT0FBT0MsT0FBZUM7SUFDM0MsSUFBSUM7SUFDSixJQUFHRCxjQUFjRSxXQUFXO1FBQ3hCLE1BQU1DLGVBQWUsTUFBTUMsTUFBTSw0R0FBNEc7WUFDeklDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCLG1CQUFtQjtvQkFDZixRQUFRO3dCQUFDOzRCQUNMLGdCQUFnQjt3QkFDcEI7cUJBQUU7b0JBQ0YsU0FBUzt3QkFDTCxlQUFlOzRCQUNYLFNBQVM7Z0NBQUUsYUFBYTs0QkFBUTs0QkFDaEMsTUFBTTs0QkFDTixTQUFTO2dDQUFFLGVBQWUsR0FBUyxPQUFOVjs0QkFBUTt3QkFDekM7b0JBQ0o7b0JBQ0EsV0FBVzt3QkFBQzs0QkFDSixTQUFTO2dDQUFFLGFBQWE7NEJBQWE7NEJBQ3JDLGFBQWE7d0JBQ3JCO3FCQUFFO29CQUNGLFNBQVM7Z0JBQ2I7WUFDSjtRQUNKO1FBQ0EsTUFBTVcsWUFBWSxNQUFNUCxhQUFhUSxJQUFJO1FBQ3pDLElBQUdELGFBQWFBLFdBQVdULGFBQWFTLFNBQVMsQ0FBQyxFQUFFLENBQUNFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFdBQVc7YUFDdEZkLGFBQWE7SUFDdEIsT0FBTztRQUNIQSxhQUFhRDtJQUNqQjtJQUVBLE1BQU1nQixXQUFXLE1BQU1aLE1BQU0sNEdBQTRHO1FBQ3JJQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCLG1CQUFtQjtnQkFDZixRQUFRO29CQUFDO3dCQUNMLGdCQUFnQjtvQkFDcEI7aUJBQUU7Z0JBQ0YsU0FBUztvQkFDTCxlQUFlO3dCQUNYLFNBQVM7NEJBQUUsYUFBYTt3QkFBUTt3QkFDaEMsTUFBTTt3QkFDTixTQUFTOzRCQUFFLGVBQWUsR0FBUyxPQUFOVjt3QkFBUTtvQkFDekM7Z0JBQ0o7Z0JBQ0EsV0FBVztvQkFBQzt3QkFDSixTQUFTOzRCQUFFLGFBQWE7d0JBQWE7d0JBQ3JDLGFBQWE7b0JBQ3JCO2lCQUFFO2dCQUNGLFdBQVc7b0JBQ1AsVUFBVTt3QkFBRSxlQUFlO29CQUFjO29CQUN6QyxVQUFVO2dCQUNkO2dCQUNBLFNBQVM7WUFDYjtRQUNKO0lBQ0o7SUFFQSxNQUFNa0IsT0FBTyxNQUFNRCxTQUFTTCxJQUFJO0lBRWhDLElBQUlPLFVBQWlCLEVBQUU7SUFDdkJELEtBQUtFLEdBQUcsQ0FBQyxDQUFDQztRQUNOLElBQUlDLE9BQU9ELEtBQUtSLFFBQVE7UUFDeEIsSUFBSVU7UUFDSixJQUFHRCxNQUFNO1lBQ0wsSUFBR0EsS0FBS1IsTUFBTSxDQUFDVSxRQUFRLENBQUNDLFVBQVUsQ0FBQ0MsTUFBTSxLQUFLdkIsV0FBV29CLGNBQWMsRUFBRTtpQkFDcEVBLGNBQWNELEtBQUtSLE1BQU0sQ0FBQ1UsUUFBUSxDQUFDQyxVQUFVLENBQUNDLE1BQU07WUFDekRKLFNBQVNuQixhQUFhZ0IsUUFBUVEsSUFBSSxDQUFDO2dCQUMvQlosWUFBWU8sS0FBS1IsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFdBQVc7Z0JBQzlDWSxPQUFPTixLQUFLUixNQUFNLENBQUNjLEtBQUssQ0FBQ0MsV0FBVztnQkFDcENDLFNBQVNSLEtBQUtSLE1BQU0sQ0FBQ2dCLE9BQU8sQ0FBQ0QsV0FBVztnQkFDeENFLE9BQU9ULEtBQUtSLE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQ0YsV0FBVztnQkFDcENHLE9BQU9WLEtBQUtSLE1BQU0sQ0FBQ2tCLEtBQUssQ0FBQ1AsVUFBVSxDQUFDQyxNQUFNO2dCQUMxQ08sTUFBTVgsS0FBS1IsTUFBTSxDQUFDbUIsSUFBSSxDQUFDSixXQUFXO2dCQUNsQ0wsVUFBVUQ7Z0JBQ1ZXLE1BQU1aLEtBQUtZLElBQUk7Z0JBQ2ZDLE9BQU9iLEtBQUtSLE1BQU0sQ0FBQ3FCLEtBQUssQ0FBQ1YsVUFBVSxDQUFDQyxNQUFNO1lBQzlDO1FBQ0o7SUFDSjtJQUNBLHVDQUF1QztJQUN2QyxPQUFPUDtBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhdGlvbl0vZmV0Y2hQb3N0LnRzeD81ODg1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaFBvc3QgPSBhc3luYyAodmFsdWU6IHN0cmluZywgbGFzdEluZGV4PzogbnVtYmVyLCApID0+IHtcbiAgICBsZXQgc3RhcnRJbmRleDtcbiAgICBpZihsYXN0SW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBnZXRGaXJzdFBvc3QgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9maXJlc3RvcmUuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvZGFlZG9uZ3lvdXJtYXAtYWQ2M2QvZGF0YWJhc2VzLyhkZWZhdWx0KS9kb2N1bWVudHM6cnVuUXVlcnknLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIFwic3RydWN0dXJlZFF1ZXJ5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbGxlY3Rpb25JZFwiOiBcInBvc3RzXCIsXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICBcIndoZXJlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRGaWx0ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRcIjogeyBcImZpZWxkUGF0aFwiOiBcInBvaW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wXCI6IFwiRVFVQUxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHsgXCJzdHJpbmdWYWx1ZVwiOiBgJHt2YWx1ZX1gIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJvcmRlckJ5XCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZFwiOiB7IFwiZmllbGRQYXRoXCI6IFwiY3JlYXRlVGltZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJERVNDRU5ESU5HXCIgXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICBcImxpbWl0XCI6IDEsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpcnN0UG9zdCA9IGF3YWl0IGdldEZpcnN0UG9zdC5qc29uKCk7XG4gICAgICAgIGlmKGZpcnN0UG9zdCAmJiBmaXJzdFBvc3QpIHN0YXJ0SW5kZXggPSBmaXJzdFBvc3RbMF0uZG9jdW1lbnQuZmllbGRzLmNyZWF0ZVRpbWUuZG91YmxlVmFsdWU7XG4gICAgICAgIGVsc2Ugc3RhcnRJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IGxhc3RJbmRleDtcbiAgICB9IFxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9maXJlc3RvcmUuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvZGFlZG9uZ3lvdXJtYXAtYWQ2M2QvZGF0YWJhc2VzLyhkZWZhdWx0KS9kb2N1bWVudHM6cnVuUXVlcnknLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgXCJzdHJ1Y3R1cmVkUXVlcnlcIjoge1xuICAgICAgICAgICAgICAgIFwiZnJvbVwiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcImNvbGxlY3Rpb25JZFwiOiBcInBvc3RzXCIsXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJ3aGVyZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGRGaWx0ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZFwiOiB7IFwiZmllbGRQYXRoXCI6IFwicG9pbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcFwiOiBcIkVRVUFMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHsgXCJzdHJpbmdWYWx1ZVwiOiBgJHt2YWx1ZX1gIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJvcmRlckJ5XCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkXCI6IHsgXCJmaWVsZFBhdGhcIjogXCJjcmVhdGVUaW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwiREVTQ0VORElOR1wiIFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwic3RhcnRBdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IHsgXCJkb3VibGVWYWx1ZVwiOiAxNzA4MDQzNzg4NzE5IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxpbWl0XCI6IDMwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgbGV0IGV4dHJhY3Q6IGFueVtdID0gW107XG4gICAgZGF0YS5tYXAoKGVsZW06IGFueSkgPT4ge1xuICAgICAgICBsZXQgaXRlbSA9IGVsZW0uZG9jdW1lbnQ7XG4gICAgICAgIGxldCBjdXJDb21tZW50czphbnk7XG4gICAgICAgIGlmKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmKGl0ZW0uZmllbGRzLmNvbW1lbnRzLmFycmF5VmFsdWUudmFsdWVzID09PSB1bmRlZmluZWQpIGN1ckNvbW1lbnRzID0gW107XG4gICAgICAgICAgICBlbHNlIGN1ckNvbW1lbnRzID0gaXRlbS5maWVsZHMuY29tbWVudHMuYXJyYXlWYWx1ZS52YWx1ZXM7XG4gICAgICAgICAgICBpdGVtICE9PSB1bmRlZmluZWQgJiYgZXh0cmFjdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiBpdGVtLmZpZWxkcy5jcmVhdGVUaW1lLmRvdWJsZVZhbHVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmZpZWxkcy50aXRsZS5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmZpZWxkcy5jb250ZW50LnN0cmluZ1ZhbHVlLFxuICAgICAgICAgICAgICAgIHBvaW50OiBpdGVtLmZpZWxkcy5wb2ludC5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICBwaG90bzogaXRlbS5maWVsZHMucGhvdG8uYXJyYXlWYWx1ZS52YWx1ZXMsXG4gICAgICAgICAgICAgICAgdXNlcjogaXRlbS5maWVsZHMudXNlci5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb21tZW50czogY3VyQ29tbWVudHMsXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGxpa2VzOiBpdGVtLmZpZWxkcy5saWtlcy5hcnJheVZhbHVlLnZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJyb3VnaCBkYXRhIDogXCIgLCBkYXRhKTtcbiAgICByZXR1cm4gZXh0cmFjdDtcbn0gXG4gICJdLCJuYW1lcyI6WyJmZXRjaFBvc3QiLCJ2YWx1ZSIsImxhc3RJbmRleCIsInN0YXJ0SW5kZXgiLCJ1bmRlZmluZWQiLCJnZXRGaXJzdFBvc3QiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaXJzdFBvc3QiLCJqc29uIiwiZG9jdW1lbnQiLCJmaWVsZHMiLCJjcmVhdGVUaW1lIiwiZG91YmxlVmFsdWUiLCJyZXNwb25zZSIsImRhdGEiLCJleHRyYWN0IiwibWFwIiwiZWxlbSIsIml0ZW0iLCJjdXJDb21tZW50cyIsImNvbW1lbnRzIiwiYXJyYXlWYWx1ZSIsInZhbHVlcyIsInB1c2giLCJ0aXRsZSIsInN0cmluZ1ZhbHVlIiwiY29udGVudCIsInBvaW50IiwicGhvdG8iLCJ1c2VyIiwibmFtZSIsImxpa2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/fetchPost.tsx\n"));

/***/ })

});