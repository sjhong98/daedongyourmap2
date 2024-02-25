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

/***/ "(app-pages-browser)/./app/components/map/mapImage.tsx":
/*!*****************************************!*\
  !*** ./app/components/map/mapImage.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MapImage(props) {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const isPostBoard = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_5__.isPostBoardStore);\n    const set = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_5__.selectedPointStore);\n    const { src, alt, width, position, count } = props;\n    const [invertLevel, setInvertLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (count < 2) setInvertLevel(\"invert-0\");\n        else if (count < 5) setInvertLevel(\"invert-[2%]\");\n        else if (count < 7) setInvertLevel(\"invert-[4%]\");\n        else if (count < 10) setInvertLevel(\"invert-[6%]\");\n        else if (count < 13) setInvertLevel(\"invert-[8%]\");\n        else if (count < 17) setInvertLevel(\"invert-[10%]\");\n        else if (count < 20) setInvertLevel(\"invert-[12%]\");\n        else if (count < 23) setInvertLevel(\"invert-[14%]\");\n        else if (count < 26) setInvertLevel(\"invert-[16%]\");\n        else if (count < 30) setInvertLevel(\"invert-[18%]\");\n        else setInvertLevel(\"invert-[20%]\");\n    }, []);\n    const handleClick = (e)=>{\n        if (isPostBoard) router.push(\"/\".concat(e.target.alt));\n        else router.push(\"\".concat(pathName, \"/\").concat(e.target.alt));\n    };\n    const handleMouseOver = (e)=>{\n        set(e.target.alt);\n    };\n    const handleMouseOut = ()=>{\n        set(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        src: src,\n        alt: alt,\n        width: width,\n        className: \"\".concat(position, \" \").concat(invertLevel),\n        onClick: handleClick,\n        onMouseOver: handleMouseOver,\n        onMouseOut: handleMouseOut\n    }, void 0, false, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/map/mapImage.tsx\",\n        lineNumber: 52,\n        columnNumber: 12\n    }, this);\n}\n_s(MapImage, \"wWjRM7tY2SaspvLKgClXl+S67n0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState\n    ];\n});\n_c = MapImage;\nvar _c;\n$RefreshReg$(_c, \"MapImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21hcC9tYXBJbWFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNlO0FBQ1A7QUFDSztBQUMwQjtBQVVwRSxTQUFTUyxTQUFTQyxLQUF1Qjs7SUFDcEQsTUFBTUMsU0FBU04sMERBQVNBO0lBQ3hCLE1BQU1PLFdBQVdOLDREQUFXQTtJQUM1QixNQUFNTyxjQUFjWCxzREFBY0EsQ0FBQ0ssd0VBQWdCQTtJQUNuRCxNQUFNTyxNQUFNWCx5REFBaUJBLENBQUNLLDBFQUFrQkE7SUFDaEQsTUFBTSxFQUFFTyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRSxHQUFHVDtJQUM3QyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFTO0lBRXZERCxnREFBU0EsQ0FBQztRQUNOLElBQUdtQixRQUFRLEdBQUdFLGVBQWU7YUFDeEIsSUFBR0YsUUFBUSxHQUFHRSxlQUFlO2FBQzdCLElBQUdGLFFBQVEsR0FBR0UsZUFBZTthQUM3QixJQUFHRixRQUFRLElBQUlFLGVBQWU7YUFDOUIsSUFBR0YsUUFBUSxJQUFJRSxlQUFlO2FBQzlCLElBQUdGLFFBQVEsSUFBSUUsZUFBZTthQUM5QixJQUFHRixRQUFRLElBQUlFLGVBQWU7YUFDOUIsSUFBR0YsUUFBUSxJQUFJRSxlQUFlO2FBQzlCLElBQUdGLFFBQVEsSUFBSUUsZUFBZTthQUM5QixJQUFHRixRQUFRLElBQUlFLGVBQWU7YUFDOUJBLGVBQWU7SUFDeEIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsY0FBYyxDQUFDQztRQUNqQixJQUFHVixhQUFhRixPQUFPYSxJQUFJLENBQUMsSUFBaUIsT0FBYkQsRUFBRUUsTUFBTSxDQUFDVCxHQUFHO2FBQ3ZDTCxPQUFPYSxJQUFJLENBQUMsR0FBZUQsT0FBWlgsVUFBUyxLQUFnQixPQUFiVyxFQUFFRSxNQUFNLENBQUNULEdBQUc7SUFDaEQ7SUFFQSxNQUFNVSxrQkFBa0IsQ0FBQ0g7UUFDckJULElBQUlTLEVBQUVFLE1BQU0sQ0FBQ1QsR0FBRztJQUNwQjtJQUVBLE1BQU1XLGlCQUFpQjtRQUNuQmIsSUFBSTtJQUNSO0lBRUEscUJBQU8sOERBQUNWLGtEQUFLQTtRQUNEVyxLQUFLQTtRQUNMQyxLQUFLQTtRQUNMQyxPQUFPQTtRQUNQVyxXQUFXLEdBQWVSLE9BQVpGLFVBQVMsS0FBZSxPQUFaRTtRQUMxQlMsU0FBU1A7UUFDVFEsYUFBYUo7UUFDYkssWUFBWUo7Ozs7OztBQUU1QjtHQTVDd0JsQjs7UUFDTEosc0RBQVNBO1FBQ1BDLHdEQUFXQTtRQUNSSixrREFBY0E7UUFDdEJDLHFEQUFpQkE7OztLQUpUTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwSW1hZ2UudHN4PzBhMWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IEltYWdlLCB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBpc1Bvc3RCb2FyZFN0b3JlLCBzZWxlY3RlZFBvaW50U3RvcmUgfSBmcm9tICdAL2FwcC9yZWNvaWxDb250ZXh0UHJvdmlkZXInO1xuXG5pbnRlcmZhY2UgTWFwSW1hZ2VQcm9wc1R5cGUge1xuICAgIHNyYzogU3RhdGljSW1hZ2VEYXRhO1xuICAgIGFsdDogc3RyaW5nO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgcG9zaXRpb246IHN0cmluZztcbiAgICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBJbWFnZShwcm9wczpNYXBJbWFnZVByb3BzVHlwZSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgICBjb25zdCBpc1Bvc3RCb2FyZCA9IHVzZVJlY29pbFZhbHVlKGlzUG9zdEJvYXJkU3RvcmUpO1xuICAgIGNvbnN0IHNldCA9IHVzZVNldFJlY29pbFN0YXRlKHNlbGVjdGVkUG9pbnRTdG9yZSk7XG4gICAgY29uc3QgeyBzcmMsIGFsdCwgd2lkdGgsIHBvc2l0aW9uLCBjb3VudCB9ID0gcHJvcHM7XG4gICAgY29uc3QgW2ludmVydExldmVsLCBzZXRJbnZlcnRMZXZlbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoY291bnQgPCAyKSBzZXRJbnZlcnRMZXZlbChcImludmVydC0wXCIpXG4gICAgICAgIGVsc2UgaWYoY291bnQgPCA1KSBzZXRJbnZlcnRMZXZlbChcImludmVydC1bMiVdXCIpXG4gICAgICAgIGVsc2UgaWYoY291bnQgPCA3KSBzZXRJbnZlcnRMZXZlbChcImludmVydC1bNCVdXCIpXG4gICAgICAgIGVsc2UgaWYoY291bnQgPCAxMCkgc2V0SW52ZXJ0TGV2ZWwoXCJpbnZlcnQtWzYlXVwiKVxuICAgICAgICBlbHNlIGlmKGNvdW50IDwgMTMpIHNldEludmVydExldmVsKFwiaW52ZXJ0LVs4JV1cIilcbiAgICAgICAgZWxzZSBpZihjb3VudCA8IDE3KSBzZXRJbnZlcnRMZXZlbChcImludmVydC1bMTAlXVwiKVxuICAgICAgICBlbHNlIGlmKGNvdW50IDwgMjApIHNldEludmVydExldmVsKFwiaW52ZXJ0LVsxMiVdXCIpXG4gICAgICAgIGVsc2UgaWYoY291bnQgPCAyMykgc2V0SW52ZXJ0TGV2ZWwoXCJpbnZlcnQtWzE0JV1cIilcbiAgICAgICAgZWxzZSBpZihjb3VudCA8IDI2KSBzZXRJbnZlcnRMZXZlbChcImludmVydC1bMTYlXVwiKVxuICAgICAgICBlbHNlIGlmKGNvdW50IDwgMzApIHNldEludmVydExldmVsKFwiaW52ZXJ0LVsxOCVdXCIpXG4gICAgICAgIGVsc2Ugc2V0SW52ZXJ0TGV2ZWwoXCJpbnZlcnQtWzIwJV1cIilcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6YW55KSA9PiB7XG4gICAgICAgIGlmKGlzUG9zdEJvYXJkKSByb3V0ZXIucHVzaChgLyR7ZS50YXJnZXQuYWx0fWApO1xuICAgICAgICBlbHNlIHJvdXRlci5wdXNoKGAke3BhdGhOYW1lfS8ke2UudGFyZ2V0LmFsdH1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoZTphbnkpID0+IHtcbiAgICAgICAgc2V0KGUudGFyZ2V0LmFsdCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdXQgPSAoKSA9PiB7XG4gICAgICAgIHNldChcIlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPEltYWdlIFxuICAgICAgICAgICAgICAgIHNyYz17c3JjfSBcbiAgICAgICAgICAgICAgICBhbHQ9e2FsdH0gXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3Bvc2l0aW9ufSAke2ludmVydExldmVsfWB9IFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZU91dD17aGFuZGxlTW91c2VPdXR9XG4gICAgICAgICAgICAvPlxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwidXNlU2V0UmVjb2lsU3RhdGUiLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZVBhdGhuYW1lIiwiaXNQb3N0Qm9hcmRTdG9yZSIsInNlbGVjdGVkUG9pbnRTdG9yZSIsIk1hcEltYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJwYXRoTmFtZSIsImlzUG9zdEJvYXJkIiwic2V0Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJwb3NpdGlvbiIsImNvdW50IiwiaW52ZXJ0TGV2ZWwiLCJzZXRJbnZlcnRMZXZlbCIsImhhbmRsZUNsaWNrIiwiZSIsInB1c2giLCJ0YXJnZXQiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/map/mapImage.tsx\n"));

/***/ })

});