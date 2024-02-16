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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchPost: function() { return /* binding */ fetchPost; }\n/* harmony export */ });\nconst fetchPost = async (value, lastIndex)=>{\n    let startIndex;\n    if (lastIndex === undefined) {\n        const getFirstPost = await fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery\", {\n            method: \"POST\",\n            cache: \"no-cache\",\n            body: JSON.stringify({\n                \"structuredQuery\": {\n                    \"from\": [\n                        {\n                            \"collectionId\": \"posts\"\n                        }\n                    ],\n                    \"where\": {\n                        \"fieldFilter\": {\n                            \"field\": {\n                                \"fieldPath\": \"point\"\n                            },\n                            \"op\": \"EQUAL\",\n                            \"value\": {\n                                \"stringValue\": \"\".concat(value)\n                            }\n                        }\n                    },\n                    \"orderBy\": [\n                        {\n                            \"field\": {\n                                \"fieldPath\": \"createTime\"\n                            },\n                            \"direction\": \"DESCENDING\"\n                        }\n                    ],\n                    \"limit\": 1\n                }\n            })\n        });\n        const firstPost = await getFirstPost.json();\n        if (firstPost && firstPost) startIndex = firstPost[0].document.fields.createTime.doubleValue;\n        else startIndex = 0;\n    } else {\n        startIndex = lastIndex;\n    }\n    const response = await fetch(\"https://firestore.googleapis.com/v1/projects/daedongyourmap-ad63d/databases/(default)/documents:runQuery\", {\n        method: \"POST\",\n        cache: \"no-cache\",\n        body: JSON.stringify({\n            \"structuredQuery\": {\n                \"from\": [\n                    {\n                        \"collectionId\": \"posts\"\n                    }\n                ],\n                \"where\": {\n                    \"fieldFilter\": {\n                        \"field\": {\n                            \"fieldPath\": \"point\"\n                        },\n                        \"op\": \"EQUAL\",\n                        \"value\": {\n                            \"stringValue\": \"\".concat(value)\n                        }\n                    }\n                },\n                \"orderBy\": [\n                    {\n                        \"field\": {\n                            \"fieldPath\": \"createTime\"\n                        },\n                        \"direction\": \"DESCENDING\"\n                    }\n                ],\n                \"startAt\": [\n                    {\n                        \"values\": {\n                            \"doubleValue\": startIndex\n                        },\n                        \"before\": false\n                    }\n                ],\n                \"limit\": 30\n            }\n        })\n    });\n    const data = await response.json();\n    console.log(\"res : \", data, startIndex);\n    let extract = [];\n    data.map((elem)=>{\n        let item = elem.document;\n        let curComments;\n        if (item) {\n            if (item.fields.comments.arrayValue.values === undefined) curComments = [];\n            else curComments = item.fields.comments.arrayValue.values;\n            item !== undefined && extract.push({\n                createTime: item.createTime,\n                title: item.fields.title.stringValue,\n                content: item.fields.content.stringValue,\n                point: item.fields.point.stringValue,\n                photo: item.fields.photo.arrayValue.values,\n                user: item.fields.user.stringValue,\n                comments: curComments,\n                name: item.name,\n                likes: item.fields.likes.arrayValue.values\n            });\n        }\n    });\n    // console.log(\"rough data : \" , data);\n    return extract;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYXRpb25dL2ZldGNoUG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFlBQVksT0FBT0MsT0FBZUM7SUFDM0MsSUFBSUM7SUFDSixJQUFHRCxjQUFjRSxXQUFXO1FBQ3hCLE1BQU1DLGVBQWUsTUFBTUMsTUFBTSw0R0FBNEc7WUFDeklDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCLG1CQUFtQjtvQkFDZixRQUFRO3dCQUFDOzRCQUNMLGdCQUFnQjt3QkFDcEI7cUJBQUU7b0JBQ0YsU0FBUzt3QkFDTCxlQUFlOzRCQUNYLFNBQVM7Z0NBQUUsYUFBYTs0QkFBUTs0QkFDaEMsTUFBTTs0QkFDTixTQUFTO2dDQUFFLGVBQWUsR0FBUyxPQUFOVjs0QkFBUTt3QkFDekM7b0JBQ0o7b0JBQ0EsV0FBVzt3QkFBQzs0QkFDSixTQUFTO2dDQUFFLGFBQWE7NEJBQWE7NEJBQ3JDLGFBQWE7d0JBQ3JCO3FCQUFFO29CQUNGLFNBQVM7Z0JBQ2I7WUFDSjtRQUNKO1FBQ0EsTUFBTVcsWUFBWSxNQUFNUCxhQUFhUSxJQUFJO1FBQ3pDLElBQUdELGFBQWFBLFdBQVdULGFBQWFTLFNBQVMsQ0FBQyxFQUFFLENBQUNFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFdBQVc7YUFDdEZkLGFBQWE7SUFDdEIsT0FBTztRQUNIQSxhQUFhRDtJQUNqQjtJQUVBLE1BQU1nQixXQUFXLE1BQU1aLE1BQU0sNEdBQTRHO1FBQ3JJQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCLG1CQUFtQjtnQkFDZixRQUFRO29CQUFDO3dCQUNMLGdCQUFnQjtvQkFDcEI7aUJBQUU7Z0JBQ0YsU0FBUztvQkFDTCxlQUFlO3dCQUNYLFNBQVM7NEJBQUUsYUFBYTt3QkFBUTt3QkFDaEMsTUFBTTt3QkFDTixTQUFTOzRCQUFFLGVBQWUsR0FBUyxPQUFOVjt3QkFBUTtvQkFDekM7Z0JBQ0o7Z0JBQ0EsV0FBVztvQkFBQzt3QkFDSixTQUFTOzRCQUFFLGFBQWE7d0JBQWE7d0JBQ3JDLGFBQWE7b0JBQ3JCO2lCQUFFO2dCQUNGLFdBQVc7b0JBQUM7d0JBQ1IsVUFBVTs0QkFBRSxlQUFlRTt3QkFBVzt3QkFDdEMsVUFBVTtvQkFDZDtpQkFBRTtnQkFDRixTQUFTO1lBQ2I7UUFDSjtJQUNKO0lBRUEsTUFBTWdCLE9BQU8sTUFBTUQsU0FBU0wsSUFBSTtJQUNoQ08sUUFBUUMsR0FBRyxDQUFDLFVBQVVGLE1BQU1oQjtJQUU1QixJQUFJbUIsVUFBaUIsRUFBRTtJQUN2QkgsS0FBS0ksR0FBRyxDQUFDLENBQUNDO1FBQ04sSUFBSUMsT0FBT0QsS0FBS1YsUUFBUTtRQUN4QixJQUFJWTtRQUNKLElBQUdELE1BQU07WUFDTCxJQUFHQSxLQUFLVixNQUFNLENBQUNZLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDQyxNQUFNLEtBQUt6QixXQUFXc0IsY0FBYyxFQUFFO2lCQUNwRUEsY0FBY0QsS0FBS1YsTUFBTSxDQUFDWSxRQUFRLENBQUNDLFVBQVUsQ0FBQ0MsTUFBTTtZQUN6REosU0FBU3JCLGFBQWFrQixRQUFRUSxJQUFJLENBQUM7Z0JBQy9CZCxZQUFZUyxLQUFLVCxVQUFVO2dCQUMzQmUsT0FBT04sS0FBS1YsTUFBTSxDQUFDZ0IsS0FBSyxDQUFDQyxXQUFXO2dCQUNwQ0MsU0FBU1IsS0FBS1YsTUFBTSxDQUFDa0IsT0FBTyxDQUFDRCxXQUFXO2dCQUN4Q0UsT0FBT1QsS0FBS1YsTUFBTSxDQUFDbUIsS0FBSyxDQUFDRixXQUFXO2dCQUNwQ0csT0FBT1YsS0FBS1YsTUFBTSxDQUFDb0IsS0FBSyxDQUFDUCxVQUFVLENBQUNDLE1BQU07Z0JBQzFDTyxNQUFNWCxLQUFLVixNQUFNLENBQUNxQixJQUFJLENBQUNKLFdBQVc7Z0JBQ2xDTCxVQUFVRDtnQkFDVlcsTUFBTVosS0FBS1ksSUFBSTtnQkFDZkMsT0FBT2IsS0FBS1YsTUFBTSxDQUFDdUIsS0FBSyxDQUFDVixVQUFVLENBQUNDLE1BQU07WUFDOUM7UUFDSjtJQUNKO0lBQ0EsdUNBQXVDO0lBQ3ZDLE9BQU9QO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvW2xvY2F0aW9uXS9mZXRjaFBvc3QudHN4PzU4ODUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICh2YWx1ZTogc3RyaW5nLCBsYXN0SW5kZXg/OiBudW1iZXIsICkgPT4ge1xuICAgIGxldCBzdGFydEluZGV4O1xuICAgIGlmKGxhc3RJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGdldEZpcnN0UG9zdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy9kYWVkb25neW91cm1hcC1hZDYzZC9kYXRhYmFzZXMvKGRlZmF1bHQpL2RvY3VtZW50czpydW5RdWVyeScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgXCJzdHJ1Y3R1cmVkUXVlcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZyb21cIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvbklkXCI6IFwicG9zdHNcIixcbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIFwid2hlcmVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZEZpbHRlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZFwiOiB7IFwiZmllbGRQYXRoXCI6IFwicG9pbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3BcIjogXCJFUVVBTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogeyBcInN0cmluZ1ZhbHVlXCI6IGAke3ZhbHVlfWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm9yZGVyQnlcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkXCI6IHsgXCJmaWVsZFBhdGhcIjogXCJjcmVhdGVUaW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcIkRFU0NFTkRJTkdcIiBcbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIFwibGltaXRcIjogMSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmlyc3RQb3N0ID0gYXdhaXQgZ2V0Rmlyc3RQb3N0Lmpzb24oKTtcbiAgICAgICAgaWYoZmlyc3RQb3N0ICYmIGZpcnN0UG9zdCkgc3RhcnRJbmRleCA9IGZpcnN0UG9zdFswXS5kb2N1bWVudC5maWVsZHMuY3JlYXRlVGltZS5kb3VibGVWYWx1ZTtcbiAgICAgICAgZWxzZSBzdGFydEluZGV4ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydEluZGV4ID0gbGFzdEluZGV4O1xuICAgIH0gXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy9kYWVkb25neW91cm1hcC1hZDYzZC9kYXRhYmFzZXMvKGRlZmF1bHQpL2RvY3VtZW50czpydW5RdWVyeScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcInN0cnVjdHVyZWRRdWVyeVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmcm9tXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvbklkXCI6IFwicG9zdHNcIixcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcIndoZXJlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZEZpbHRlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkXCI6IHsgXCJmaWVsZFBhdGhcIjogXCJwb2ludFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9wXCI6IFwiRVFVQUxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogeyBcInN0cmluZ1ZhbHVlXCI6IGAke3ZhbHVlfWAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm9yZGVyQnlcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRcIjogeyBcImZpZWxkUGF0aFwiOiBcImNyZWF0ZVRpbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJERVNDRU5ESU5HXCIgXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJzdGFydEF0XCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IHsgXCJkb3VibGVWYWx1ZVwiOiBzdGFydEluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwibGltaXRcIjogMzBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJyZXMgOiBcIiwgZGF0YSwgc3RhcnRJbmRleCk7XG5cbiAgICBsZXQgZXh0cmFjdDogYW55W10gPSBbXTtcbiAgICBkYXRhLm1hcCgoZWxlbTogYW55KSA9PiB7XG4gICAgICAgIGxldCBpdGVtID0gZWxlbS5kb2N1bWVudDtcbiAgICAgICAgbGV0IGN1ckNvbW1lbnRzOmFueTtcbiAgICAgICAgaWYoaXRlbSkge1xuICAgICAgICAgICAgaWYoaXRlbS5maWVsZHMuY29tbWVudHMuYXJyYXlWYWx1ZS52YWx1ZXMgPT09IHVuZGVmaW5lZCkgY3VyQ29tbWVudHMgPSBbXTtcbiAgICAgICAgICAgIGVsc2UgY3VyQ29tbWVudHMgPSBpdGVtLmZpZWxkcy5jb21tZW50cy5hcnJheVZhbHVlLnZhbHVlcztcbiAgICAgICAgICAgIGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBleHRyYWN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IGl0ZW0uY3JlYXRlVGltZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5maWVsZHMudGl0bGUuc3RyaW5nVmFsdWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogaXRlbS5maWVsZHMuY29udGVudC5zdHJpbmdWYWx1ZSxcbiAgICAgICAgICAgICAgICBwb2ludDogaXRlbS5maWVsZHMucG9pbnQuc3RyaW5nVmFsdWUsXG4gICAgICAgICAgICAgICAgcGhvdG86IGl0ZW0uZmllbGRzLnBob3RvLmFycmF5VmFsdWUudmFsdWVzLFxuICAgICAgICAgICAgICAgIHVzZXI6IGl0ZW0uZmllbGRzLnVzZXIuc3RyaW5nVmFsdWUsXG4gICAgICAgICAgICAgICAgY29tbWVudHM6IGN1ckNvbW1lbnRzLFxuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBsaWtlczogaXRlbS5maWVsZHMubGlrZXMuYXJyYXlWYWx1ZS52YWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwicm91Z2ggZGF0YSA6IFwiICwgZGF0YSk7XG4gICAgcmV0dXJuIGV4dHJhY3Q7XG59IFxuICAiXSwibmFtZXMiOlsiZmV0Y2hQb3N0IiwidmFsdWUiLCJsYXN0SW5kZXgiLCJzdGFydEluZGV4IiwidW5kZWZpbmVkIiwiZ2V0Rmlyc3RQb3N0IiwiZmV0Y2giLCJtZXRob2QiLCJjYWNoZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlyc3RQb3N0IiwianNvbiIsImRvY3VtZW50IiwiZmllbGRzIiwiY3JlYXRlVGltZSIsImRvdWJsZVZhbHVlIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImV4dHJhY3QiLCJtYXAiLCJlbGVtIiwiaXRlbSIsImN1ckNvbW1lbnRzIiwiY29tbWVudHMiLCJhcnJheVZhbHVlIiwidmFsdWVzIiwicHVzaCIsInRpdGxlIiwic3RyaW5nVmFsdWUiLCJjb250ZW50IiwicG9pbnQiLCJwaG90byIsInVzZXIiLCJuYW1lIiwibGlrZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[location]/fetchPost.tsx\n"));

/***/ })

});