module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/pantry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/HotSauce.js":
/*!********************************!*\
  !*** ./components/HotSauce.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst HotSauce = ({\n  name,\n  img,\n  url,\n  shu,\n  rating\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"List of Hot Sauce coming soon!\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HotSauce);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvdFNhdWNlLmpzPzFiMzQiXSwibmFtZXMiOlsiSG90U2F1Y2UiLCJuYW1lIiwiaW1nIiwidXJsIiwic2h1IiwicmF0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFDQyxNQUFEO0FBQU9DLEtBQVA7QUFBWUMsS0FBWjtBQUFpQkMsS0FBakI7QUFBc0JDO0FBQXRCLENBQUQsS0FDYixvR0FESjs7QUFNZUwsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvdFNhdWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSG90U2F1Y2UgPSAoe25hbWUsIGltZywgdXJsLCBzaHUsIHJhdGluZ30pID0+IChcbiAgICA8PlxuICAgICAgICBMaXN0IG9mIEhvdCBTYXVjZSBjb21pbmcgc29vbiFcbiAgICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvdFNhdWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HotSauce.js\n");

/***/ }),

/***/ "./pages/pantry.js":
/*!*************************!*\
  !*** ./pages/pantry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HotSauce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HotSauce */ \"./components/HotSauce.js\");\nvar _jsxFileName = \"/Users/cherstewart/Code/personal/cher/pages/pantry.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Pantry = () => __jsx(_components_HotSauce__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  name: \"Tapat\\xEDo\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pantry);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYW50cnkuanM/NzljZiJdLCJuYW1lcyI6WyJQYW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFDWCxNQUFDLDREQUFEO0FBQVUsTUFBSSxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURKOztBQUllQSxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BhbnRyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb3RTYXVjZSBmcm9tICcuLi9jb21wb25lbnRzL0hvdFNhdWNlJztcblxuY29uc3QgUGFudHJ5ID0gKCkgPT4gKFxuICAgIDxIb3RTYXVjZSBuYW1lPVwiVGFwYXTDrW9cIiAvPlxuKTtcbiAgXG5leHBvcnQgZGVmYXVsdCBQYW50cnk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pantry.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });