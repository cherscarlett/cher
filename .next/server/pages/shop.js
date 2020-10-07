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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/cherstewart/Code/personal/cher/pages/shop.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Shop = () => __jsx(\"div\", {\n  id: \"mc_embed_signup\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 2,\n    columnNumber: 5\n  }\n}, __jsx(\"form\", {\n  action: \"https://dev.us2.list-manage.com/subscribe/post?u=7cbfbcaeb41c17acd21483b3d&id=2fd9833a71\",\n  method: \"post\",\n  id: \"mc-embedded-subscribe-form\",\n  name: \"mc-embedded-subscribe-form\",\n  target: \"_blank\",\n  noValidate: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }\n}, __jsx(\"div\", {\n  id: \"mc_embed_signup_scroll\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 13\n  }\n}, __jsx(\"label\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 17\n  }\n}, \"Get notified when STOKED! Hot Sauces are available\"), __jsx(\"input\", {\n  type: \"email\",\n  name: \"EMAIL\",\n  id: \"mce-EMAIL\",\n  placeholder: \"email address\",\n  required: true,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 17\n  }\n}), __jsx(\"div\", {\n  \"aria-hidden\": \"true\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 17\n  }\n}, __jsx(\"input\", {\n  type: \"text\",\n  name: \"b_7cbfbcaeb41c17acd21483b3d_2fd9833a71\",\n  tabIndex: \"-1\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 21\n  }\n})), __jsx(\"input\", {\n  type: \"submit\",\n  value: \"Subscribe\",\n  name: \"subscribe\",\n  id: \"mc-embedded-subscribe\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 17\n  }\n}))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wLmpzPzVmMmIiXSwibmFtZXMiOlsiU2hvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLElBQUksR0FBRyxNQUNUO0FBQUssSUFBRSxFQUFDLGlCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFNLFFBQU0sRUFBQywwRkFBYjtBQUE0RyxRQUFNLEVBQUMsTUFBbkg7QUFBMEgsSUFBRSxFQUFDLDRCQUE3SDtBQUEwSixNQUFJLEVBQUMsNEJBQS9KO0FBQTRMLFFBQU0sRUFBQyxRQUFuTTtBQUE0TSxZQUFVLE1BQXROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFLLElBQUUsRUFBQyx3QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFESixFQUVJO0FBQU8sTUFBSSxFQUFDLE9BQVo7QUFBb0IsTUFBSSxFQUFDLE9BQXpCO0FBQWlDLElBQUUsRUFBQyxXQUFwQztBQUFnRCxhQUFXLEVBQUMsZUFBNUQ7QUFBNEUsVUFBUSxNQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkosRUFHSTtBQUFLLGlCQUFZLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFPLE1BQUksRUFBQyxNQUFaO0FBQW1CLE1BQUksRUFBQyx3Q0FBeEI7QUFBaUUsVUFBUSxFQUFDLElBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixDQUhKLEVBTUk7QUFBTyxNQUFJLEVBQUMsUUFBWjtBQUFxQixPQUFLLEVBQUMsV0FBM0I7QUFBdUMsTUFBSSxFQUFDLFdBQTVDO0FBQXdELElBQUUsRUFBQyx1QkFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU5KLENBREosQ0FESixDQURKOztBQWVlQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Nob3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaG9wID0gKCkgPT4gKFxuICAgIDxkaXYgaWQ9XCJtY19lbWJlZF9zaWdudXBcIj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9kZXYudXMyLmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTdjYmZiY2FlYjQxYzE3YWNkMjE0ODNiM2QmYW1wO2lkPTJmZDk4MzNhNzFcIiBtZXRob2Q9XCJwb3N0XCIgaWQ9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIG5hbWU9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIHRhcmdldD1cIl9ibGFua1wiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibWNfZW1iZWRfc2lnbnVwX3Njcm9sbFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5HZXQgbm90aWZpZWQgd2hlbiBTVE9LRUQhIEhvdCBTYXVjZXMgYXJlIGF2YWlsYWJsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJFTUFJTFwiIGlkPVwibWNlLUVNQUlMXCIgcGxhY2Vob2xkZXI9XCJlbWFpbCBhZGRyZXNzXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYl83Y2JmYmNhZWI0MWMxN2FjZDIxNDgzYjNkXzJmZDk4MzNhNzFcIiB0YWJJbmRleD1cIi0xXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgbmFtZT1cInN1YnNjcmliZVwiIGlkPVwibWMtZW1iZWRkZWQtc3Vic2NyaWJlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4pO1xuICBcbmV4cG9ydCBkZWZhdWx0IFNob3A7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop.js\n");

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