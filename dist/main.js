/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint-disable prefer-arrow-callback */\n/* eslint-disable func-names */\nconst loc = document.querySelector('.loc');\nconst img = document.querySelector('img');\n\nfetch(\n  'https://api.weatherapi.com/v1/current.json?key=346db19fc2d3410b90233359231708&q=new york&aqi=no',\n  {\n    mode: 'cors',\n  }\n)\n  .then(function (response) {\n    return response.json();\n  })\n  .then(function (data) {\n    console.log(data);\n    console.log(data.location.name);\n    loc.textContent = data.location.name;\n    console.log(data.location.localtime);\n    console.log(data.current.temp_c);\n    console.log(data.current.temp_f);\n    console.log(data.current.condition.text);\n    console.log(data.current.condition.icon);\n    img.src = data.current.condition.icon;\n    console.log(data.current.wind_mph);\n    console.log(data.current.wind_dir);\n    console.log(data.current.humidity);\n    console.log(data.current.feelslike_c);\n    console.log(data.current.feelslike_f);\n  })\n  .catch((error) => console.error('Error:', error));\n\n\n//# sourceURL=webpack://webpack-template-eslint-prettier/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;