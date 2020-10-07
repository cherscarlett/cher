webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.css */ \"./components/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/cherstewart/Code/personal/cher/components/Header.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Header = () => {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const pathname = router.pathname.replace('/', '');\n  const routeName = pathname || 'home';\n  return __jsx(\"header\", {\n    className: [_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header, _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[`header--${routeName}`]].join(' '),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, \"Cher\", __jsx(\"span\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingPresentation,\n    role: \"presentation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingPresentationLayer,\n    role: \"presentation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, \"Cher\")), __jsx(\"h2\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subheading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, \"Principal Software Engineer\"), __jsx(\"h2\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subheading,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \"Hot Sauce Maker\"), __jsx(\"nav\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJyb3V0ZU5hbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJqb2luIiwiaGVhZGluZyIsImhlYWRpbmdQcmVzZW50YXRpb24iLCJoZWFkaW5nUHJlc2VudGF0aW9uTGF5ZXIiLCJzdWJoZWFkaW5nIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUNqQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCLEVBQTZCLEVBQTdCLENBQWpCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRixRQUFRLElBQUksTUFBOUI7QUFFQSxTQUNJO0FBQVEsYUFBUyxFQUFFLENBQUNHLHlEQUFNLENBQUNDLE1BQVIsRUFBZ0JELHlEQUFNLENBQUUsV0FBVUQsU0FBVSxFQUF0QixDQUF0QixFQUFnREcsSUFBaEQsQ0FBcUQsR0FBckQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFRix5REFBTSxDQUFDRyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUk7QUFBTSxhQUFTLEVBQUVILHlEQUFNLENBQUNJLG1CQUF4QjtBQUE2QyxRQUFJLEVBQUMsY0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUVKLHlEQUFNLENBQUNLLHdCQUF4QjtBQUFrRCxRQUFJLEVBQUMsY0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLENBREosRUFNSTtBQUFJLGFBQVMsRUFBRUwseURBQU0sQ0FBQ00sVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FOSixFQU9JO0FBQUksYUFBUyxFQUFFTix5REFBTSxDQUFDTSxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKLEVBUUk7QUFBSyxhQUFTLEVBQUVOLHlEQUFNLENBQUNPLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FSSixDQURKO0FBd0JILENBN0JEOztHQUFNYixNO1VBQ2FFLHFEOzs7S0FEYkYsTTtBQStCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtSb3V0ZXIsIHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWUucmVwbGFjZSgnLycsICcnKTtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSBwYXRobmFtZSB8fCAnaG9tZSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17W3N0eWxlcy5oZWFkZXIsIHN0eWxlc1tgaGVhZGVyLS0ke3JvdXRlTmFtZX1gXV0uam9pbignICcpfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgICAgICAgICBDaGVyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ1ByZXNlbnRhdGlvbn0gcm9sZT1cInByZXNlbnRhdGlvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nUHJlc2VudGF0aW9uTGF5ZXJ9IHJvbGU9XCJwcmVzZW50YXRpb25cIj5DaGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkaW5nfT5QcmluY2lwYWwgU29mdHdhcmUgRW5naW5lZXI8L2gyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YmhlYWRpbmd9PkhvdCBTYXVjZSBNYWtlcjwvaDI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90aGluZ3NcIj5UaGluZ3M8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFudHJ5XCI+UGFudHJ5PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5TaG9wIOKWujwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})