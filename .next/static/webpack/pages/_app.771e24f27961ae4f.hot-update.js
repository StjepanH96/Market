"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavigationBar.tsx":
/*!******************************************!*\
  !*** ./src/components/NavigationBar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavigationBar: function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaBars,FaHome,FaShoppingCart,FaTimes,FaUserCircle!=!react-icons/fa */ \"__barrel_optimize__?names=FaBars,FaHome,FaShoppingCart,FaTimes,FaUserCircle!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.tsx\");\n/* harmony import */ var _CartDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartDropdown */ \"./src/components/CartDropdown.tsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/SearchBar.tsx\");\n/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styled-components */ \"./src/styled-components/index.ts\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib */ \"./src/lib/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst NavigationBar = ()=>{\n    _s();\n    const { setIsMobile, setIsCartOpen, isOpen, isMobile, isCartOpen, setIsOpen } = (0,_lib__WEBPACK_IMPORTED_MODULE_7__.useDataState)();\n    const auth = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function updateMobileStatus() {\n            setIsMobile(window.innerWidth < 968);\n        }\n        if (true) {\n            updateMobileStatus();\n            window.addEventListener(\"resize\", updateMobileStatus);\n            return ()=>window.removeEventListener(\"resize\", updateMobileStatus);\n        }\n    }, []);\n    const toggleMenu = ()=>setIsOpen(!isOpen);\n    const toggleCartDropdown = ()=>{\n        setIsCartOpen(!isCartOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isOpen) {\n            document.body.style.overflow = \"hidden\";\n        } else {\n            document.body.style.overflow = \"auto\";\n        }\n    }, [\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledNavigation, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.NavigationLogo, {\n                children: \"Market\"\n            }, void 0, false, {\n                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.MenuIcon, {\n                onClick: toggleMenu,\n                children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaTimes, {}, void 0, false, {\n                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 19\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaBars, {}, void 0, false, {\n                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 33\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.NavigationLinks, {\n                $show: isOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/product/home\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledLink, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaHome, {}, void 0, false, {\n                                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" Home\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/product/categories\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledLink, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaShoppingCart, {}, void 0, false, {\n                                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" Categories\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledButton, {\n                                onClick: toggleCartDropdown,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaShoppingCart, {}, void 0, false, {\n                                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" Your Cart\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartDropdown__WEBPACK_IMPORTED_MODULE_4__.CartDropdown, {\n                                isOpen: isCartOpen,\n                                toggleDropdown: toggleCartDropdown\n                            }, void 0, false, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/product/categories\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledLink, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_5__.SearchBar, {}, void 0, false, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 12\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    (auth === null || auth === void 0 ? void 0 : auth.user) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.UserGreeting, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaUserCircle, {}, void 0, false, {\n                                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" Welcome, \",\n                                    auth.user.username,\n                                    \"!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledLogoutButton, {\n                                onClick: auth.logout,\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavigationBar, \"ysNU6bd+RUcFg90jVl5JlOKF0pM=\", false, function() {\n    return [\n        _lib__WEBPACK_IMPORTED_MODULE_7__.useDataState,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = NavigationBar;\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDc0I7QUFRM0I7QUFDeUI7QUFDSDtBQUNOO0FBVVg7QUFDUTtBQUU5QixNQUFNb0IsZ0JBQWdCOztJQUMzQixNQUFNLEVBQ0pDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxTQUFTLEVBQ1YsR0FBR1Asa0RBQVlBO0lBQ2hCLE1BQU1RLE9BQU9uQiw2REFBT0E7SUFFcEJOLGdEQUFTQSxDQUFDO1FBQ1IsU0FBUzBCO1lBQ1BQLFlBQVlRLE9BQU9DLFVBQVUsR0FBRztRQUNsQztRQUVBLElBQUksSUFBNkIsRUFBRTtZQUNqQ0Y7WUFDQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7WUFFbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUNwRDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLGFBQWEsSUFBTVAsVUFBVSxDQUFDSDtJQUVwQyxNQUFNVyxxQkFBcUI7UUFDekJaLGNBQWMsQ0FBQ0c7SUFDakI7SUFFQXZCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSXFCLFFBQVE7WUFDVlksU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRztRQUNqQyxPQUFPO1lBQ0xILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7UUFDakM7SUFDRixHQUFHO1FBQUNmO0tBQU87SUFFWCxxQkFDRSw4REFBQ04sZ0VBQWdCQTs7MEJBQ2YsOERBQUNOLDhEQUFjQTswQkFBQzs7Ozs7OzBCQUNoQiw4REFBQ0Msd0RBQVFBO2dCQUFDMkIsU0FBU047MEJBQ2hCVix1QkFBUyw4REFBQ25CLDRIQUFPQTs7Ozs4Q0FBTSw4REFBQ0QsMkhBQU1BOzs7Ozs7Ozs7OzBCQUVqQyw4REFBQ1UsK0RBQWVBO2dCQUFDMkIsT0FBT2pCOztrQ0FDdEIsOERBQUN2QixrREFBSUE7d0JBQUN5QyxNQUFLO3dCQUFnQkMsUUFBUTtrQ0FDakMsNEVBQUMzQiwwREFBVUE7OzhDQUNULDhEQUFDUiwySEFBTUE7Ozs7O2dDQUFHOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNQLGtEQUFJQTt3QkFBQ3lDLE1BQUs7d0JBQXNCQyxRQUFRO2tDQUN2Qyw0RUFBQzNCLDBEQUFVQTs7OENBQ1QsOERBQUNULG1JQUFjQTs7Ozs7Z0NBQUc7Ozs7Ozs7Ozs7OztrQ0FJdEIsOERBQUNxQzs7MENBQ0MsOERBQUM3Qiw0REFBWUE7Z0NBQUN5QixTQUFTTDs7a0RBQ3JCLDhEQUFDNUIsbUlBQWNBOzs7OztvQ0FBRzs7Ozs7OzswQ0FFcEIsOERBQUNHLHVEQUFZQTtnQ0FDWGMsUUFBUUU7Z0NBQ1JtQixnQkFBZ0JWOzs7Ozs7Ozs7Ozs7a0NBR3BCLDhEQUFDbEMsa0RBQUlBO3dCQUFDeUMsTUFBSzt3QkFBc0JDLFFBQVE7a0NBQ3ZDLDRFQUFDM0IsMERBQVVBO3NDQUNWLDRFQUFDTCxpREFBU0E7Ozs7Ozs7Ozs7Ozs7OztvQkFHWmlCLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWtCLElBQUksbUJBQ1Q7OzBDQUNFLDhEQUFDM0IsNERBQVlBOztrREFDWCw4REFBQ2IsaUlBQVlBOzs7OztvQ0FBRztvQ0FBV3NCLEtBQUtrQixJQUFJLENBQUNDLFFBQVE7b0NBQUM7Ozs7Ozs7MENBRWhELDhEQUFDOUIsa0VBQWtCQTtnQ0FBQ3VCLFNBQVNaLEtBQUtvQixNQUFNOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0RCxFQUFFO0dBbkZXM0I7O1FBUVBELDhDQUFZQTtRQUNIWCx5REFBT0E7OztLQVRUWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeD9kOTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBGYUJhcnMsXG4gIEZhVGltZXMsXG4gIEZhVXNlckNpcmNsZSxcbiAgRmFTaG9wcGluZ0NhcnQsXG4gIEZhSG9tZSxcbiAgRmFTZWFyY2gsXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyBDYXJ0RHJvcGRvd24gfSBmcm9tIFwiLi9DYXJ0RHJvcGRvd25cIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCIuL1NlYXJjaEJhclwiO1xuaW1wb3J0IHtcbiAgTmF2aWdhdGlvbkxvZ28sXG4gIE1lbnVJY29uLFxuICBOYXZpZ2F0aW9uTGlua3MsXG4gIFN0eWxlZEJ1dHRvbixcbiAgU3R5bGVkTGluayxcbiAgU3R5bGVkTG9nb3V0QnV0dG9uLFxuICBTdHlsZWROYXZpZ2F0aW9uLFxuICBVc2VyR3JlZXRpbmcsXG59IGZyb20gXCJAL3N0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VEYXRhU3RhdGUgfSBmcm9tIFwiQC9saWJcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzZXRJc01vYmlsZSxcbiAgICBzZXRJc0NhcnRPcGVuLFxuICAgIGlzT3BlbixcbiAgICBpc01vYmlsZSxcbiAgICBpc0NhcnRPcGVuLFxuICAgIHNldElzT3BlbixcbiAgfSA9IHVzZURhdGFTdGF0ZSgpO1xuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdXBkYXRlTW9iaWxlU3RhdHVzKCkge1xuICAgICAgc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPCA5NjgpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB1cGRhdGVNb2JpbGVTdGF0dXMoKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU1vYmlsZVN0YXR1cyk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVNb2JpbGVTdGF0dXMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG5cbiAgY29uc3QgdG9nZ2xlQ2FydERyb3Bkb3duID0gKCkgPT4ge1xuICAgIHNldElzQ2FydE9wZW4oIWlzQ2FydE9wZW4pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICB9XG4gIH0sIFtpc09wZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWROYXZpZ2F0aW9uPlxuICAgICAgPE5hdmlnYXRpb25Mb2dvPk1hcmtldDwvTmF2aWdhdGlvbkxvZ28+XG4gICAgICA8TWVudUljb24gb25DbGljaz17dG9nZ2xlTWVudX0+XG4gICAgICAgIHtpc09wZW4gPyA8RmFUaW1lcyAvPiA6IDxGYUJhcnMgLz59XG4gICAgICA8L01lbnVJY29uPlxuICAgICAgPE5hdmlnYXRpb25MaW5rcyAkc2hvdz17aXNPcGVufT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L2hvbWVcIiBwYXNzSHJlZj5cbiAgICAgICAgICA8U3R5bGVkTGluaz5cbiAgICAgICAgICAgIDxGYUhvbWUgLz4gSG9tZVxuICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvY2F0ZWdvcmllc1wiIHBhc3NIcmVmPlxuICAgICAgICAgIDxTdHlsZWRMaW5rPlxuICAgICAgICAgICAgPEZhU2hvcHBpbmdDYXJ0IC8+IENhdGVnb3JpZXNcbiAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTdHlsZWRCdXR0b24gb25DbGljaz17dG9nZ2xlQ2FydERyb3Bkb3dufT5cbiAgICAgICAgICAgIDxGYVNob3BwaW5nQ2FydCAvPiBZb3VyIENhcnRcbiAgICAgICAgICA8L1N0eWxlZEJ1dHRvbj5cbiAgICAgICAgICA8Q2FydERyb3Bkb3duXG4gICAgICAgICAgICBpc09wZW49e2lzQ2FydE9wZW59XG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bj17dG9nZ2xlQ2FydERyb3Bkb3dufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvY2F0ZWdvcmllc1wiIHBhc3NIcmVmPlxuICAgICAgICAgIDxTdHlsZWRMaW5rPlxuICAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHthdXRoPy51c2VyICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFVzZXJHcmVldGluZz5cbiAgICAgICAgICAgICAgPEZhVXNlckNpcmNsZSAvPiBXZWxjb21lLCB7YXV0aC51c2VyLnVzZXJuYW1lfSFcbiAgICAgICAgICAgIDwvVXNlckdyZWV0aW5nPlxuICAgICAgICAgICAgPFN0eWxlZExvZ291dEJ1dHRvbiBvbkNsaWNrPXthdXRoLmxvZ291dH0+XG4gICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgPC9TdHlsZWRMb2dvdXRCdXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L05hdmlnYXRpb25MaW5rcz5cbiAgICA8L1N0eWxlZE5hdmlnYXRpb24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsIkZhQmFycyIsIkZhVGltZXMiLCJGYVVzZXJDaXJjbGUiLCJGYVNob3BwaW5nQ2FydCIsIkZhSG9tZSIsInVzZUF1dGgiLCJDYXJ0RHJvcGRvd24iLCJTZWFyY2hCYXIiLCJOYXZpZ2F0aW9uTG9nbyIsIk1lbnVJY29uIiwiTmF2aWdhdGlvbkxpbmtzIiwiU3R5bGVkQnV0dG9uIiwiU3R5bGVkTGluayIsIlN0eWxlZExvZ291dEJ1dHRvbiIsIlN0eWxlZE5hdmlnYXRpb24iLCJVc2VyR3JlZXRpbmciLCJ1c2VEYXRhU3RhdGUiLCJOYXZpZ2F0aW9uQmFyIiwic2V0SXNNb2JpbGUiLCJzZXRJc0NhcnRPcGVuIiwiaXNPcGVuIiwiaXNNb2JpbGUiLCJpc0NhcnRPcGVuIiwic2V0SXNPcGVuIiwiYXV0aCIsInVwZGF0ZU1vYmlsZVN0YXR1cyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1lbnUiLCJ0b2dnbGVDYXJ0RHJvcGRvd24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93Iiwib25DbGljayIsIiRzaG93IiwiaHJlZiIsInBhc3NIcmVmIiwiZGl2IiwidG9nZ2xlRHJvcGRvd24iLCJ1c2VyIiwidXNlcm5hbWUiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavigationBar.tsx\n"));

/***/ })

});