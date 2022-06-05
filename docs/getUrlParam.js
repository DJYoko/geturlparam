/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getUrlParam.ts":
/*!****************************!*\
  !*** ./src/getUrlParam.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nwindow.getUrlParam = function (url) {\r\n    'use strict';\r\n    var return_json = {};\r\n    if (typeof url !== 'string' || url.match(/\\?/g) === null) {\r\n        return return_json;\r\n    }\r\n    var query_array = url.split('?')[1].split('&');\r\n    query_array.forEach(function (item) {\r\n        var key = item.split('=')[0];\r\n        var value = item.replace(key + '=', '').split('#')[0];\r\n        if (key.match(/\\[\\]/g) !== null) {\r\n            var insert_destination = return_json[key];\r\n            if (typeof return_json[key] !== 'object') {\r\n                return_json[key] = [];\r\n            }\r\n            return_json[key].push(value);\r\n        }\r\n        else {\r\n            return_json[key] = value;\r\n        }\r\n    });\r\n    return return_json;\r\n};\r\n\n\n//# sourceURL=webpack://geturlparam/./src/getUrlParam.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/getUrlParam.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;