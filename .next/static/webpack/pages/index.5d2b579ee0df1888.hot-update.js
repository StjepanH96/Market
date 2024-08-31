"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginForm */ \"./src/components/LoginForm.tsx\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const auth = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const handleGuestClick = ()=>{\n        auth === null || auth === void 0 ? void 0 : auth.setUser({\n            username: \"Guest\"\n        });\n        router.push(\"/product/home\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                    children: \"Welcome to Market\"\n                }, void 0, false, {\n                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginFormWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/pages/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GuestButton, {\n                            onClick: handleGuestClick,\n                            children: \"Continue as Guest\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/pages/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/pages/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"HBRHZF1ELSwWbcAxuantxFDfJ9U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = Home;\nHome.getLayout = function getLayout(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: page\n    }, void 0, false);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nconst PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"pages__PageContainer\",\n    componentId: \"sc-9ccac6bd-0\"\n})([\n    \"display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;background-image:url('/images/market.jpg');background-size:cover;background-position:center;\"\n]);\n_c1 = PageContainer;\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].main.withConfig({\n    displayName: \"pages__Main\",\n    componentId: \"sc-9ccac6bd-1\"\n})([\n    \"display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:400px;padding:20px;background-color:#ffffff;box-shadow:0px 4px 12px rgba(0,0,0,0.1);border-radius:10px;\"\n]);\n_c2 = Main;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].h1.withConfig({\n    displayName: \"pages__Title\",\n    componentId: \"sc-9ccac6bd-2\"\n})([\n    \"font-size:2rem;color:#333;margin-bottom:15px;\"\n]);\n_c3 = Title;\nconst LoginFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"pages__LoginFormWrapper\",\n    componentId: \"sc-9ccac6bd-3\"\n})([\n    \"display:flex;flex-direction:column;align-items:center;gap:15px;width:100%;\"\n]);\n_c4 = LoginFormWrapper;\nconst GuestButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button.withConfig({\n    displayName: \"pages__GuestButton\",\n    componentId: \"sc-9ccac6bd-4\"\n})([\n    \"background-color:#007bff;color:white;padding:10px 20px;border:none;border-radius:5px;font-size:16px;cursor:pointer;transition:background-color 0.3s ease;width:100%;&:hover{background-color:#0056b3;}\"\n]);\n_c5 = GuestButton;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"PageContainer\");\n$RefreshReg$(_c2, \"Main\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"LoginFormWrapper\");\n$RefreshReg$(_c5, \"GuestButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ1M7QUFDQztBQUNUO0FBRXhDLE1BQU1LLE9BQU87O0lBQ1gsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU1HLE9BQU9KLDZEQUFPQTtJQUVwQixNQUFNSyxtQkFBbUI7UUFDdkJELGlCQUFBQSwyQkFBQUEsS0FBTUUsT0FBTyxDQUFDO1lBQUVDLFVBQVU7UUFBUTtRQUNsQ0osT0FBT0ssSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDOzs4QkFDQyw4REFBQ0M7OEJBQU07Ozs7Ozs4QkFDUCw4REFBQ0M7O3NDQUNDLDhEQUFDYiw2REFBU0E7Ozs7O3NDQUNWLDhEQUFDYzs0QkFBWUMsU0FBU1Q7c0NBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRDtHQXBCTUg7O1FBQ1dELGtEQUFTQTtRQUNYRCx5REFBT0E7OztLQUZoQkU7QUFzQk5BLEtBQUthLFNBQVMsR0FBRyxTQUFTQSxVQUFVQyxJQUFRO0lBQzFDLHFCQUNFO2tCQUNHQTs7QUFHUDtBQUVBLCtEQUFlZCxJQUFJQSxFQUFDO0FBR3BCLE1BQU1PLGdCQUFnQlgsNkRBQVU7Ozs7OztNQUExQlc7QUFXTixNQUFNQyxPQUFPWiw4REFBVzs7Ozs7O01BQWxCWTtBQWFOLE1BQU1DLFFBQVFiLDREQUFTOzs7Ozs7TUFBakJhO0FBTU4sTUFBTUMsbUJBQW1CZCw2REFBVTs7Ozs7O01BQTdCYztBQVFOLE1BQU1DLGNBQWNmLGdFQUFhOzs7Ozs7TUFBM0JlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG5cbiAgY29uc3QgaGFuZGxlR3Vlc3RDbGljayA9ICgpID0+IHtcbiAgICBhdXRoPy5zZXRVc2VyKHsgdXNlcm5hbWU6ICdHdWVzdCcgfSk7XG4gICAgcm91dGVyLnB1c2goJy9wcm9kdWN0L2hvbWUnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlQ29udGFpbmVyPlxuICAgICAgPE1haW4+XG4gICAgICAgIDxUaXRsZT5XZWxjb21lIHRvIE1hcmtldDwvVGl0bGU+XG4gICAgICAgIDxMb2dpbkZvcm1XcmFwcGVyPlxuICAgICAgICAgIDxMb2dpbkZvcm0gLz5cbiAgICAgICAgICA8R3Vlc3RCdXR0b24gb25DbGljaz17aGFuZGxlR3Vlc3RDbGlja30+Q29udGludWUgYXMgR3Vlc3Q8L0d1ZXN0QnV0dG9uPlxuICAgICAgICA8L0xvZ2luRm9ybVdyYXBwZXI+XG4gICAgICA8L01haW4+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuICApO1xufTtcblxuSG9tZS5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQocGFnZTphbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3BhZ2V9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbmNvbnN0IFBhZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9tYXJrZXQuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG5gO1xuXG5jb25zdCBMb2dpbkZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEd1ZXN0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gIH1cbmA7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiTG9naW5Gb3JtIiwidXNlQXV0aCIsInVzZVJvdXRlciIsIkhvbWUiLCJyb3V0ZXIiLCJhdXRoIiwiaGFuZGxlR3Vlc3RDbGljayIsInNldFVzZXIiLCJ1c2VybmFtZSIsInB1c2giLCJQYWdlQ29udGFpbmVyIiwiTWFpbiIsIlRpdGxlIiwiTG9naW5Gb3JtV3JhcHBlciIsIkd1ZXN0QnV0dG9uIiwib25DbGljayIsImdldExheW91dCIsInBhZ2UiLCJkaXYiLCJtYWluIiwiaDEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});