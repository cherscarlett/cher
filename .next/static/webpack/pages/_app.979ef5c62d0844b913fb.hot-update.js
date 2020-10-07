webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.css */ \"./components/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/cherstewart/Code/personal/cher/components/Header.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Header = () => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const pathname = router.pathname.replace('/', '');\n  const routeName = pathname || 'home';\n\n  const LinkOrSpan = ({\n    name\n  }) => {\n    const isCurrent = routeName === name.toLowerCase();\n    return isCurrent ? __jsx(\"span\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 29\n      }\n    }, name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: `/${name.toLowerCase()}`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 53\n      }\n    }, name);\n  };\n\n  return __jsx(\"header\", {\n    className: [_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header, _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[`header--${routeName}`]].join(' '),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, \"Cher\", __jsx(\"span\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingPresentation,\n    role: \"presentation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingPresentationLayer,\n    role: \"presentation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, \"Cher\")), __jsx(\"div\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subheadingGroup,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subheading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"Principal Software Engineer\"), __jsx(\"h2\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subheading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"Hot Sauce Maker\")), __jsx(\"nav\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, __jsx(LinkOrSpan, {\n    name: \"Things\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  })), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, __jsx(LinkOrSpan, {\n    name: \"Pantry\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }\n  })), __jsx(\"li\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.shop,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }, __jsx(LinkOrSpan, {\n    name: \"Shop\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 25\n    }\n  })))));\n};\n\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJyb3V0ZU5hbWUiLCJMaW5rT3JTcGFuIiwibmFtZSIsImlzQ3VycmVudCIsInRvTG93ZXJDYXNlIiwic3R5bGVzIiwiaGVhZGVyIiwiam9pbiIsImhlYWRpbmciLCJoZWFkaW5nUHJlc2VudGF0aW9uIiwiaGVhZGluZ1ByZXNlbnRhdGlvbkxheWVyIiwic3ViaGVhZGluZ0dyb3VwIiwic3ViaGVhZGluZyIsIm5hdiIsInNob3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQUE7O0FBQ2pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEIsRUFBNkIsRUFBN0IsQ0FBakI7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLFFBQVEsSUFBSSxNQUE5Qjs7QUFFQSxRQUFNRyxVQUFVLEdBQUcsQ0FBQztBQUFDQztBQUFELEdBQUQsS0FBWTtBQUMzQixVQUFNQyxTQUFTLEdBQUdILFNBQVMsS0FBS0UsSUFBSSxDQUFDRSxXQUFMLEVBQWhDO0FBQ0EsV0FBT0QsU0FBUyxHQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0QsSUFBUCxDQUFKLEdBQTRCLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUcsSUFBR0EsSUFBSSxDQUFDRSxXQUFMLEVBQW1CLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUNGLElBQXZDLENBQTVDO0FBQ0gsR0FIRDs7QUFLQSxTQUNJO0FBQVEsYUFBUyxFQUFFLENBQUNHLHlEQUFNLENBQUNDLE1BQVIsRUFBZ0JELHlEQUFNLENBQUUsV0FBVUwsU0FBVSxFQUF0QixDQUF0QixFQUFnRE8sSUFBaEQsQ0FBcUQsR0FBckQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFRix5REFBTSxDQUFDRyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUk7QUFBTSxhQUFTLEVBQUVILHlEQUFNLENBQUNJLG1CQUF4QjtBQUE2QyxRQUFJLEVBQUMsY0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUVKLHlEQUFNLENBQUNLLHdCQUF4QjtBQUFrRCxRQUFJLEVBQUMsY0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBRUwseURBQU0sQ0FBQ00sZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFTix5REFBTSxDQUFDTyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURKLEVBRUk7QUFBSSxhQUFTLEVBQUVQLHlEQUFNLENBQUNPLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosQ0FOSixFQVVJO0FBQUssYUFBUyxFQUFFUCx5REFBTSxDQUFDUSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0k7QUFBSSxhQUFTLEVBQUVSLHlEQUFNLENBQUNTLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosQ0FESixDQVZKLENBREo7QUEwQkgsQ0FwQ0Q7O0dBQU1uQixNO1VBQ2FFLHFEOzs7S0FEYkYsTTtBQXNDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtSb3V0ZXIsIHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZSgnLycsICcnKTtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSBwYXRobmFtZSB8fCAnaG9tZSc7XG5cbiAgICBjb25zdCBMaW5rT3JTcGFuID0gKHtuYW1lfSkgPT4ge1xuICAgICAgICBjb25zdCBpc0N1cnJlbnQgPSByb3V0ZU5hbWUgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGlzQ3VycmVudCA/ICg8c3Bhbj57bmFtZX08L3NwYW4+KSA6ICg8TGluayBocmVmPXtgLyR7bmFtZS50b0xvd2VyQ2FzZSgpfWB9PntuYW1lfTwvTGluaz4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtbc3R5bGVzLmhlYWRlciwgc3R5bGVzW2BoZWFkZXItLSR7cm91dGVOYW1lfWBdXS5qb2luKCcgJyl9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgIENoZXJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nUHJlc2VudGF0aW9ufSByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmdQcmVzZW50YXRpb25MYXllcn0gcm9sZT1cInByZXNlbnRhdGlvblwiPkNoZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkaW5nR3JvdXB9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkaW5nfT5QcmluY2lwYWwgU29mdHdhcmUgRW5naW5lZXI8L2gyPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkaW5nfT5Ib3QgU2F1Y2UgTWFrZXI8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua09yU3BhbiBuYW1lPVwiVGhpbmdzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtPclNwYW4gbmFtZT1cIlBhbnRyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5zaG9wfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rT3JTcGFuIG5hbWU9XCJTaG9wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})