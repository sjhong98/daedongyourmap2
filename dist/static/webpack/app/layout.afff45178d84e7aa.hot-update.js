"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f813d3778f49\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzM2MjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJmODEzZDM3NzhmNDlcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/header/signInCheck.tsx":
/*!***********************************************!*\
  !*** ./app/components/header/signInCheck.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignInCheck; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _public_defaultProfilePic_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/defaultProfilePic.jpeg */ \"(app-pages-browser)/./public/defaultProfilePic.jpeg\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Add */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firestore_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/firestore/config */ \"(app-pages-browser)/./firestore/config.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/recoilContextProvider */ \"(app-pages-browser)/./app/recoilContextProvider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction SignInCheck() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    let email;\n    if ( true && localStorage !== null) email = localStorage.getItem(\"ddym-email\");\n    const setIdToken = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useSetRecoilState)(_app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_9__.idTokenStore);\n    const [proPic, setProPic] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isLogin, setIsLogin] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_9__.isLoginStore);\n    const [displayName, setDisplayName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [profile, setProfile] = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState)(_app_recoilContextProvider__WEBPACK_IMPORTED_MODULE_9__.profileStore);\n    (0,firebase_app__WEBPACK_IMPORTED_MODULE_5__.initializeApp)(_firestore_config__WEBPACK_IMPORTED_MODULE_7__.firebaseConfig);\n    const handleBtnClick = ()=>{\n        router.push(\"/signin\");\n    };\n    const handleSignOut = ()=>{\n        console.log(\"로그아웃\");\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)());\n        setIsLogin(false);\n        localStorage.setItem(\"ddym-refresh-token\", \"none\");\n    };\n    const handleClickProfile = ()=>{\n        router.push(\"/profile/\".concat(email));\n    };\n    const handleClickAdd = ()=>{\n        router.push(\"/create\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // idToken 갱신\n        const refreshCount = async ()=>{\n            const refreshToken = localStorage.getItem(\"ddym-refresh-token\");\n            const res = fetch(\"https://securetoken.googleapis.com/v1/token?key=AIzaSyCA6Q_TA6dyl7wf2BtR_V_oEVIW2_Q94y0\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    grant_type: \"refresh_token\",\n                    refresh_token: refreshToken\n                })\n            });\n            (await res).json().then((res)=>{\n                console.log(\"로그인 상태\");\n                setIsLogin(true);\n                setIdToken(res.access_token);\n                const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();\n                auth.onAuthStateChanged((user)=>{\n                    if (user && user.email) {\n                        let temp = {\n                            email: user.email,\n                            emailVerified: user.emailVerified,\n                            displayName: user.displayName,\n                            photoURL: user.photoURL\n                        };\n                        setProfile(temp);\n                    }\n                });\n                localStorage.setItem(\"ddym-refresh-token\", res.refresh_token);\n            });\n        };\n        // sign out 시 none이 됨\n        if (localStorage.getItem(\"ddym-refresh-token\") !== \"none\") refreshCount();\n        else {\n            console.log(\"로그아웃 상태\");\n            setIsLogin(false);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(profile);\n        if (profile.photoURL) setProPic(profile.photoURL);\n        else setProPic(_public_defaultProfilePic_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        if (profile.displayName) setDisplayName(profile.displayName);\n        else if (email) setDisplayName(email);\n    }, [\n        profile\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        className: \"cursor-pointer mr-4\",\n                        onClick: handleClickAdd\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/header/signInCheck.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/header/signInCheck.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: proPic,\n                    width: 50,\n                    height: 50,\n                    alt: \"profile\",\n                    className: \"rounded-full object-cover aspect-square mr-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/header/signInCheck.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClickProfile,\n                    children: displayName\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/header/signInCheck.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    onClick: handleSignOut,\n                    className: \"ml-3 mt-3\"\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/header/signInCheck.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/header/signInCheck.tsx\",\n            lineNumber: 101,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginBtn, {\n            variant: \"text\",\n            onClick: handleBtnClick,\n            children: \"Sign In\"\n        }, void 0, false, {\n            fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/header/signInCheck.tsx\",\n            lineNumber: 116,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/daedongyourmap/app/components/header/signInCheck.tsx\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, this);\n}\n_s(SignInCheck, \"n61WkOqB2DL/lqXjH8rnfwxM+gs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useSetRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilState\n    ];\n});\n_c = SignInCheck;\nconst LoginBtn = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"])({\n    color: \"white\",\n    fontSize: \"1rem\",\n    \"&:hover\": {\n        backgroundColor: \"white\",\n        color: \"#003545\",\n        boxShadow: \"none\"\n    }\n});\n_c1 = LoginBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"SignInCheck\");\n$RefreshReg$(_c1, \"LoginBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9zaWduSW5DaGVjay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDcUI7QUFDSztBQUNsQjtBQUNLO0FBQ0E7QUFDQztBQUNDO0FBQ0E7QUFDRztBQUNHO0FBQ087QUFDeUM7QUFFckYsU0FBU2tCOztJQUNwQixNQUFNQyxTQUFTZiwwREFBU0E7SUFDeEIsSUFBSWdCO0lBQ0osSUFBRyxLQUFrQixJQUFlQyxpQkFBaUIsTUFDakRELFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNqQyxNQUFNQyxhQUFhVCx5REFBaUJBLENBQUNDLG9FQUFZQTtJQUNqRCxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR25CLCtDQUFRQSxDQUFNO0lBQzFDLE1BQU0sQ0FBQ29CLFNBQVNDLFdBQVcsR0FBR2Qsc0RBQWNBLENBQUNHLG9FQUFZQTtJQUN6RCxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR3ZCLCtDQUFRQSxDQUFTO0lBQ3ZELE1BQU0sQ0FBQ3dCLFNBQVNDLFdBQVcsR0FBR2xCLHNEQUFjQSxDQUFjSSxvRUFBWUE7SUFDdEVWLDJEQUFhQSxDQUFDSyw2REFBY0E7SUFFNUIsTUFBTW9CLGlCQUFpQjtRQUNuQmIsT0FBT2MsSUFBSSxDQUFDO0lBQ2hCO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUM7UUFDWnpCLHNEQUFPQSxDQUFDRCxzREFBT0E7UUFDZmlCLFdBQVc7UUFDWE4sYUFBYWdCLE9BQU8sQ0FBQyxzQkFBc0I7SUFDL0M7SUFFQSxNQUFNQyxxQkFBcUI7UUFDdkJuQixPQUFPYyxJQUFJLENBQUMsWUFBa0IsT0FBTmI7SUFDNUI7SUFFQSxNQUFNbUIsaUJBQWlCO1FBQ25CcEIsT0FBT2MsSUFBSSxDQUFDO0lBQ2hCO0lBRUE1QixnREFBU0EsQ0FBQztRQUNOLGFBQWE7UUFDYixNQUFNbUMsZUFBZTtZQUNqQixNQUFNQyxlQUFlcEIsYUFBYUMsT0FBTyxDQUFDO1lBQzFDLE1BQU1vQixNQUFNQyxNQUFPLDJGQUEwRjtnQkFDekdDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJDLFlBQVk7b0JBQ1pDLGVBQWVSO2dCQUNuQjtZQUNKO1lBQ0MsT0FBTUMsR0FBRSxFQUFHUSxJQUFJLEdBQ2ZDLElBQUksQ0FBQyxDQUFDVDtnQkFDSFAsUUFBUUMsR0FBRyxDQUFDO2dCQUNaVCxXQUFXO2dCQUNYSixXQUFXbUIsSUFBSVUsWUFBWTtnQkFDM0IsTUFBTUMsT0FBTzNDLHNEQUFPQTtnQkFDcEIyQyxLQUFLQyxrQkFBa0IsQ0FBQyxDQUFDQztvQkFDckIsSUFBR0EsUUFBUUEsS0FBS25DLEtBQUssRUFBRTt3QkFDbkIsSUFBSW9DLE9BQU87NEJBQ1BwQyxPQUFPbUMsS0FBS25DLEtBQUs7NEJBQ2pCcUMsZUFBZUYsS0FBS0UsYUFBYTs0QkFDakM3QixhQUFhMkIsS0FBSzNCLFdBQVc7NEJBQzdCOEIsVUFBVUgsS0FBS0csUUFBUTt3QkFDM0I7d0JBQ0EzQixXQUFXeUI7b0JBQ2Y7Z0JBQ0o7Z0JBQ0FuQyxhQUFhZ0IsT0FBTyxDQUFDLHNCQUFzQkssSUFBSU8sYUFBYTtZQUNoRTtRQUNKO1FBRUEscUJBQXFCO1FBQ3JCLElBQUc1QixhQUFhQyxPQUFPLENBQUMsMEJBQTBCLFFBQzlDa0I7YUFDQztZQUNETCxRQUFRQyxHQUFHLENBQUM7WUFDWlQsV0FBVztRQUNmO0lBQ0osR0FBRyxFQUFFO0lBRUx0QixnREFBU0EsQ0FBQztRQUNOOEIsUUFBUUMsR0FBRyxDQUFDTjtRQUNaLElBQUdBLFFBQVE0QixRQUFRLEVBQUVqQyxVQUFVSyxRQUFRNEIsUUFBUTthQUMxQ2pDLFVBQVV2QixzRUFBVUE7UUFFekIsSUFBRzRCLFFBQVFGLFdBQVcsRUFBRUMsZUFBZUMsUUFBUUYsV0FBVzthQUNyRCxJQUFHUixPQUFPUyxlQUFlVDtJQUNsQyxHQUFHO1FBQUNVO0tBQVE7SUFFWixxQkFDSSw4REFBQzZCO2tCQUNDakMsd0JBQ0UsOERBQUNpQztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNuRCxnRUFBT0E7d0JBQUNtRCxXQUFVO3dCQUFzQkMsU0FBU3RCOzs7Ozs7Ozs7Ozs4QkFFdEQsOERBQUN2QyxtREFBS0E7b0JBQ0Y4RCxLQUFLdEM7b0JBQ0x1QyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFJO29CQUNKTCxXQUFVOzs7Ozs7OEJBRWQsOERBQUNNO29CQUFPTCxTQUFTdkI7OEJBQXFCVjs7Ozs7OzhCQUN0Qyw4REFBQzNCLG1FQUFVQTtvQkFBQzRELFNBQVMzQjtvQkFBZTBCLFdBQVU7Ozs7Ozs7Ozs7O2lDQUdsRCw4REFBQ087WUFBU0MsU0FBUTtZQUFPUCxTQUFTN0I7c0JBQWlCOzs7Ozs7Ozs7OztBQUkvRDtHQXZHd0JkOztRQUNMZCxzREFBU0E7UUFJTFUscURBQWlCQTtRQUVORCxrREFBY0E7UUFFZEEsa0RBQWNBOzs7S0FUeEJLO0FBeUd4QixNQUFNaUQsV0FBVzNELGlFQUFNQSxDQUFDTCxtRkFBTUEsRUFBRTtJQUM1QmtFLE9BQU87SUFDUEMsVUFBVTtJQUNWLFdBQVc7UUFDUEMsaUJBQWdCO1FBQ2hCRixPQUFPO1FBQ1BHLFdBQVc7SUFDZjtBQUNKO01BUk1MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9zaWduSW5DaGVjay50c3g/NWI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTG9nb3V0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tICdAL3B1YmxpYy9kZWZhdWx0UHJvZmlsZVBpYy5qcGVnJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FkZCc7XG5pbXBvcnQgeyBnZXRBdXRoLCBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGZpcmViYXNlQ29uZmlnIH0gZnJvbSBcIkAvZmlyZXN0b3JlL2NvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgUHJvZmlsZVR5cGUsIGlkVG9rZW5TdG9yZSwgaXNMb2dpblN0b3JlLCBwcm9maWxlU3RvcmUgfSBmcm9tIFwiQC9hcHAvcmVjb2lsQ29udGV4dFByb3ZpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbkNoZWNrKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGxldCBlbWFpbDpzdHJpbmcgfCBudWxsO1xuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZSAhPT0gbnVsbClcbiAgICAgICAgZW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGR5bS1lbWFpbCcpO1xuICAgIGNvbnN0IHNldElkVG9rZW4gPSB1c2VTZXRSZWNvaWxTdGF0ZShpZFRva2VuU3RvcmUpO1xuICAgIGNvbnN0IFtwcm9QaWMsIHNldFByb1BpY10gPSB1c2VTdGF0ZTxhbnk+KFwiXCIpO1xuICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVJlY29pbFN0YXRlKGlzTG9naW5TdG9yZSk7XG4gICAgY29uc3QgW2Rpc3BsYXlOYW1lLCBzZXREaXNwbGF5TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVJlY29pbFN0YXRlPFByb2ZpbGVUeXBlPihwcm9maWxlU3RvcmUpO1xuICAgIGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZUJ0bkNsaWNrID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnL3NpZ25pbicpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi66Gc6re47JWE7JuDXCIpO1xuICAgICAgICBzaWduT3V0KGdldEF1dGgoKSk7XG4gICAgICAgIHNldElzTG9naW4oZmFsc2UpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGR5bS1yZWZyZXNoLXRva2VuJywgXCJub25lXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrUHJvZmlsZSA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goYC9wcm9maWxlLyR7ZW1haWx9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tBZGQgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvY3JlYXRlJyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gaWRUb2tlbiDqsLHsi6BcbiAgICAgICAgY29uc3QgcmVmcmVzaENvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RkeW0tcmVmcmVzaC10b2tlbicpO1xuICAgICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2goYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlYXBpcy5jb20vdjEvdG9rZW4/a2V5PUFJemFTeUNBNlFfVEE2ZHlsN3dmMkJ0Ul9WX29FVklXMl9ROTR5MGAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6IFwicmVmcmVzaF90b2tlblwiLFxuICAgICAgICAgICAgICAgICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAoYXdhaXQgcmVzKS5qc29uKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuuhnOq3uOyduCDsg4Htg5xcIik7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2dpbih0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRJZFRva2VuKHJlcy5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgICAgICAgICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlciAmJiB1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2ZpbGUodGVtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZHltLXJlZnJlc2gtdG9rZW4nLCByZXMucmVmcmVzaF90b2tlbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2lnbiBvdXQg7IucIG5vbmXsnbQg65CoXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZHltLXJlZnJlc2gtdG9rZW4nKSAhPT0gXCJub25lXCIpXG4gICAgICAgICAgICByZWZyZXNoQ291bnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuuhnOq3uOyVhOybgyDsg4Htg5xcIik7XG4gICAgICAgICAgICBzZXRJc0xvZ2luKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZmlsZSk7XG4gICAgICAgIGlmKHByb2ZpbGUucGhvdG9VUkwpIHNldFByb1BpYyhwcm9maWxlLnBob3RvVVJMKTtcbiAgICAgICAgZWxzZSBzZXRQcm9QaWMocHJvZmlsZVBpYyk7XG5cbiAgICAgICAgaWYocHJvZmlsZS5kaXNwbGF5TmFtZSkgc2V0RGlzcGxheU5hbWUocHJvZmlsZS5kaXNwbGF5TmFtZSk7XG4gICAgICAgIGVsc2UgaWYoZW1haWwpIHNldERpc3BsYXlOYW1lKGVtYWlsKTtcbiAgICB9LCBbcHJvZmlsZV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICB7IGlzTG9naW4gPyBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtci00XCIgb25DbGljaz17aGFuZGxlQ2xpY2tBZGR9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb1BpY30gXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH0gXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9IFxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgYXNwZWN0LXNxdWFyZSBtci0yXCIgXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrUHJvZmlsZX0+e2Rpc3BsYXlOYW1lfTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICA8TG9nb3V0SWNvbiBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fSBjbGFzc05hbWU9XCJtbC0zIG10LTNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IFxuICAgICAgICAgICAgPExvZ2luQnRuIHZhcmlhbnQ9XCJ0ZXh0XCIgb25DbGljaz17aGFuZGxlQnRuQ2xpY2t9ID5TaWduIEluPC8gTG9naW5CdG4+IFxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgTG9naW5CdG4gPSBzdHlsZWQoQnV0dG9uKSh7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsXG4gICAgICAgIGNvbG9yOiAnIzAwMzU0NScsXG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIH1cbn0pIl0sIm5hbWVzIjpbIkltYWdlIiwiTG9nb3V0SWNvbiIsInByb2ZpbGVQaWMiLCJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImluaXRpYWxpemVBcHAiLCJzdHlsZWQiLCJBZGRJY29uIiwiZ2V0QXV0aCIsInNpZ25PdXQiLCJmaXJlYmFzZUNvbmZpZyIsInVzZVJlY29pbFN0YXRlIiwidXNlU2V0UmVjb2lsU3RhdGUiLCJpZFRva2VuU3RvcmUiLCJpc0xvZ2luU3RvcmUiLCJwcm9maWxlU3RvcmUiLCJTaWduSW5DaGVjayIsInJvdXRlciIsImVtYWlsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldElkVG9rZW4iLCJwcm9QaWMiLCJzZXRQcm9QaWMiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImRpc3BsYXlOYW1lIiwic2V0RGlzcGxheU5hbWUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImhhbmRsZUJ0bkNsaWNrIiwicHVzaCIsImhhbmRsZVNpZ25PdXQiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImhhbmRsZUNsaWNrUHJvZmlsZSIsImhhbmRsZUNsaWNrQWRkIiwicmVmcmVzaENvdW50IiwicmVmcmVzaFRva2VuIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdyYW50X3R5cGUiLCJyZWZyZXNoX3Rva2VuIiwianNvbiIsInRoZW4iLCJhY2Nlc3NfdG9rZW4iLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInRlbXAiLCJlbWFpbFZlcmlmaWVkIiwicGhvdG9VUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJidXR0b24iLCJMb2dpbkJ0biIsInZhcmlhbnQiLCJjb2xvciIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/header/signInCheck.tsx\n"));

/***/ })

});