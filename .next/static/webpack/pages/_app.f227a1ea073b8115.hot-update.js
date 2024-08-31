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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavigationBar: function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaBars,FaHome,FaShoppingCart,FaTimes,FaUserCircle!=!react-icons/fa */ \"__barrel_optimize__?names=FaBars,FaHome,FaShoppingCart,FaTimes,FaUserCircle!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.tsx\");\n/* harmony import */ var _CartDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartDropdown */ \"./src/components/CartDropdown.tsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/SearchBar.tsx\");\n/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styled-components */ \"./src/styled-components/index.ts\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib */ \"./src/lib/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst NavigationBar = ()=>{\n    _s();\n    const { setIsMobile, setIsCartOpen, isOpen, isMobile, isCartOpen, setIsOpen } = (0,_lib__WEBPACK_IMPORTED_MODULE_7__.useDataState)();\n    const auth = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function updateMobileStatus() {\n            setIsMobile(window.innerWidth < 968);\n        }\n        if (true) {\n            updateMobileStatus();\n            window.addEventListener(\"resize\", updateMobileStatus);\n            return ()=>window.removeEventListener(\"resize\", updateMobileStatus);\n        }\n    }, []);\n    const toggleMenu = ()=>setIsOpen(!isOpen);\n    const toggleCartDropdown = ()=>{\n        setIsCartOpen(!isCartOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isOpen) {\n            document.body.style.overflow = \"hidden\";\n        } else {\n            document.body.style.overflow = \"auto\";\n        }\n    }, [\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledNavigation, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.NavigationLogo, {\n                children: \"Market\"\n            }, void 0, false, {\n                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.MenuIcon, {\n                onClick: toggleMenu,\n                children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaTimes, {}, void 0, false, {\n                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 19\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaBars, {}, void 0, false, {\n                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 33\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.NavigationLinks, {\n                $show: isOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/product/home\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledLink, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaHome, {}, void 0, false, {\n                                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" Home\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/product/categories\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledLink, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaShoppingCart, {}, void 0, false, {\n                                    fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" Categories\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledButton, {\n                                onClick: toggleCartDropdown,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaShoppingCart, {}, void 0, false, {\n                                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" Your Cart\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartDropdown__WEBPACK_IMPORTED_MODULE_4__.CartDropdown, {\n                                isOpen: isCartOpen,\n                                toggleDropdown: toggleCartDropdown\n                            }, void 0, false, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_5__.SearchBar, {}, void 0, false, {\n                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 23\n                    }, undefined),\n                    (auth === null || auth === void 0 ? void 0 : auth.user) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.UserGreeting, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBars_FaHome_FaShoppingCart_FaTimes_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaUserCircle, {}, void 0, false, {\n                                        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" Welcome, \",\n                                    auth.user.username,\n                                    \"!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_6__.StyledLogoutButton, {\n                                onClick: auth.logout,\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stjepan/Documents/Programiranje/Market/src/components/NavigationBar.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavigationBar, \"ysNU6bd+RUcFg90jVl5JlOKF0pM=\", false, function() {\n    return [\n        _lib__WEBPACK_IMPORTED_MODULE_7__.useDataState,\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = NavigationBar;\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDc0I7QUFPM0I7QUFDeUI7QUFDSDtBQUNOO0FBVVg7QUFDUTtBQUU5QixNQUFNb0IsZ0JBQWdCOztJQUMzQixNQUFNLEVBQ0pDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxTQUFTLEVBQ1YsR0FBR1Asa0RBQVlBO0lBQ2hCLE1BQU1RLE9BQU9uQiw2REFBT0E7SUFFcEJOLGdEQUFTQSxDQUFDO1FBQ1IsU0FBUzBCO1lBQ1BQLFlBQVlRLE9BQU9DLFVBQVUsR0FBRztRQUNsQztRQUVBLElBQUksSUFBNkIsRUFBRTtZQUNqQ0Y7WUFDQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7WUFFbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUNwRDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLGFBQWEsSUFBTVAsVUFBVSxDQUFDSDtJQUVwQyxNQUFNVyxxQkFBcUI7UUFDekJaLGNBQWMsQ0FBQ0c7SUFDakI7SUFFQXZCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSXFCLFFBQVE7WUFDVlksU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRztRQUNqQyxPQUFPO1lBQ0xILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7UUFDakM7SUFDRixHQUFHO1FBQUNmO0tBQU87SUFFWCxxQkFDRSw4REFBQ04sZ0VBQWdCQTs7MEJBQ2YsOERBQUNOLDhEQUFjQTswQkFBQzs7Ozs7OzBCQUNoQiw4REFBQ0Msd0RBQVFBO2dCQUFDMkIsU0FBU047MEJBQ2hCVix1QkFBUyw4REFBQ25CLDRIQUFPQTs7Ozs4Q0FBTSw4REFBQ0QsMkhBQU1BOzs7Ozs7Ozs7OzBCQUVqQyw4REFBQ1UsK0RBQWVBO2dCQUFDMkIsT0FBT2pCOztrQ0FDdEIsOERBQUN2QixrREFBSUE7d0JBQUN5QyxNQUFLO3dCQUFnQkMsUUFBUTtrQ0FDakMsNEVBQUMzQiwwREFBVUE7OzhDQUNULDhEQUFDUiwySEFBTUE7Ozs7O2dDQUFHOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNQLGtEQUFJQTt3QkFBQ3lDLE1BQUs7d0JBQXNCQyxRQUFRO2tDQUN2Qyw0RUFBQzNCLDBEQUFVQTs7OENBQ1QsOERBQUNULG1JQUFjQTs7Ozs7Z0NBQUc7Ozs7Ozs7Ozs7OztrQ0FJdEIsOERBQUNxQzs7MENBQ0MsOERBQUM3Qiw0REFBWUE7Z0NBQUN5QixTQUFTTDs7a0RBQ3JCLDhEQUFDNUIsbUlBQWNBOzs7OztvQ0FBRzs7Ozs7OzswQ0FFcEIsOERBQUNHLHVEQUFZQTtnQ0FDWGMsUUFBUUU7Z0NBQ1JtQixnQkFBZ0JWOzs7Ozs7Ozs7Ozs7b0JBR25CLENBQUNWLDBCQUFZLDhEQUFDZCxpREFBU0E7Ozs7O29CQUN2QmlCLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWtCLElBQUksbUJBQ1Q7OzBDQUNFLDhEQUFDM0IsNERBQVlBOztrREFDWCw4REFBQ2IsaUlBQVlBOzs7OztvQ0FBRztvQ0FBV3NCLEtBQUtrQixJQUFJLENBQUNDLFFBQVE7b0NBQUM7Ozs7Ozs7MENBRWhELDhEQUFDOUIsa0VBQWtCQTtnQ0FBQ3VCLFNBQVNaLEtBQUtvQixNQUFNOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0RCxFQUFFO0dBL0VXM0I7O1FBUVBELDhDQUFZQTtRQUNIWCx5REFBT0E7OztLQVRUWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeD9kOTI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBGYUJhcnMsXG4gIEZhVGltZXMsXG4gIEZhVXNlckNpcmNsZSxcbiAgRmFTaG9wcGluZ0NhcnQsXG4gIEZhSG9tZSxcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCB7IENhcnREcm9wZG93biB9IGZyb20gXCIuL0NhcnREcm9wZG93blwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcIi4vU2VhcmNoQmFyXCI7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uTG9nbyxcbiAgTWVudUljb24sXG4gIE5hdmlnYXRpb25MaW5rcyxcbiAgU3R5bGVkQnV0dG9uLFxuICBTdHlsZWRMaW5rLFxuICBTdHlsZWRMb2dvdXRCdXR0b24sXG4gIFN0eWxlZE5hdmlnYXRpb24sXG4gIFVzZXJHcmVldGluZyxcbn0gZnJvbSBcIkAvc3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZURhdGFTdGF0ZSB9IGZyb20gXCJAL2xpYlwiO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkJhciA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHNldElzTW9iaWxlLFxuICAgIHNldElzQ2FydE9wZW4sXG4gICAgaXNPcGVuLFxuICAgIGlzTW9iaWxlLFxuICAgIGlzQ2FydE9wZW4sXG4gICAgc2V0SXNPcGVuLFxuICB9ID0gdXNlRGF0YVN0YXRlKCk7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB1cGRhdGVNb2JpbGVTdGF0dXMoKSB7XG4gICAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDk2OCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHVwZGF0ZU1vYmlsZVN0YXR1cygpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlTW9iaWxlU3RhdHVzKTtcblxuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU1vYmlsZVN0YXR1cyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICBjb25zdCB0b2dnbGVDYXJ0RHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0SXNDYXJ0T3BlbighaXNDYXJ0T3Blbik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgIH1cbiAgfSwgW2lzT3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZE5hdmlnYXRpb24+XG4gICAgICA8TmF2aWdhdGlvbkxvZ28+TWFya2V0PC9OYXZpZ2F0aW9uTG9nbz5cbiAgICAgIDxNZW51SWNvbiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAge2lzT3BlbiA/IDxGYVRpbWVzIC8+IDogPEZhQmFycyAvPn1cbiAgICAgIDwvTWVudUljb24+XG4gICAgICA8TmF2aWdhdGlvbkxpbmtzICRzaG93PXtpc09wZW59PlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvaG9tZVwiIHBhc3NIcmVmPlxuICAgICAgICAgIDxTdHlsZWRMaW5rPlxuICAgICAgICAgICAgPEZhSG9tZSAvPiBIb21lXG4gICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9jYXRlZ29yaWVzXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPFN0eWxlZExpbms+XG4gICAgICAgICAgICA8RmFTaG9wcGluZ0NhcnQgLz4gQ2F0ZWdvcmllc1xuICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFN0eWxlZEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDYXJ0RHJvcGRvd259PlxuICAgICAgICAgICAgPEZhU2hvcHBpbmdDYXJ0IC8+IFlvdXIgQ2FydFxuICAgICAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAgICAgIDxDYXJ0RHJvcGRvd25cbiAgICAgICAgICAgIGlzT3Blbj17aXNDYXJ0T3Blbn1cbiAgICAgICAgICAgIHRvZ2dsZURyb3Bkb3duPXt0b2dnbGVDYXJ0RHJvcGRvd259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshaXNNb2JpbGUgJiYgPFNlYXJjaEJhciAvPn1cbiAgICAgICAge2F1dGg/LnVzZXIgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VXNlckdyZWV0aW5nPlxuICAgICAgICAgICAgICA8RmFVc2VyQ2lyY2xlIC8+IFdlbGNvbWUsIHthdXRoLnVzZXIudXNlcm5hbWV9IVxuICAgICAgICAgICAgPC9Vc2VyR3JlZXRpbmc+XG4gICAgICAgICAgICA8U3R5bGVkTG9nb3V0QnV0dG9uIG9uQ2xpY2s9e2F1dGgubG9nb3V0fT5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L1N0eWxlZExvZ291dEJ1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvTmF2aWdhdGlvbkxpbmtzPlxuICAgIDwvU3R5bGVkTmF2aWdhdGlvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwiRmFCYXJzIiwiRmFUaW1lcyIsIkZhVXNlckNpcmNsZSIsIkZhU2hvcHBpbmdDYXJ0IiwiRmFIb21lIiwidXNlQXV0aCIsIkNhcnREcm9wZG93biIsIlNlYXJjaEJhciIsIk5hdmlnYXRpb25Mb2dvIiwiTWVudUljb24iLCJOYXZpZ2F0aW9uTGlua3MiLCJTdHlsZWRCdXR0b24iLCJTdHlsZWRMaW5rIiwiU3R5bGVkTG9nb3V0QnV0dG9uIiwiU3R5bGVkTmF2aWdhdGlvbiIsIlVzZXJHcmVldGluZyIsInVzZURhdGFTdGF0ZSIsIk5hdmlnYXRpb25CYXIiLCJzZXRJc01vYmlsZSIsInNldElzQ2FydE9wZW4iLCJpc09wZW4iLCJpc01vYmlsZSIsImlzQ2FydE9wZW4iLCJzZXRJc09wZW4iLCJhdXRoIiwidXBkYXRlTW9iaWxlU3RhdHVzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlTWVudSIsInRvZ2dsZUNhcnREcm9wZG93biIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJvbkNsaWNrIiwiJHNob3ciLCJocmVmIiwicGFzc0hyZWYiLCJkaXYiLCJ0b2dnbGVEcm9wZG93biIsInVzZXIiLCJ1c2VybmFtZSIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavigationBar.tsx\n"));

/***/ })

});