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

eval("/* eslint-disable prefer-arrow-callback */\n/* eslint-disable func-names */\nconst loc = document.querySelector('.loc');\nconst locTime = document.querySelector('.locTime');\nconst tempC = document.querySelector('.tempC');\nconst tempF = document.querySelector('.tempF');\nconst locCondition = document.querySelector('.locCondition');\nconst locDay = document.querySelector('.locDay');\nconst humidity = document.querySelector('.humidity');\nconst search = document.querySelector('#search');\nconst form = document.querySelector('#form-city');\n\nfetch(\n  `https://api.weatherapi.com/v1/current.json?key=346db19fc2d3410b90233359231708&q=$new york&aqi=no`,\n  {\n    mode: 'cors',\n  }\n)\n  .then(function (response) {\n    return response.json();\n  })\n  .then(function (data) {\n    console.log(data);\n    loc.textContent = `[ ${data.location.name} ]`;\n    if (data.current.is_day === 1) locDay.textContent = `Day time ]`;\n    else locDay.textContent = `Night time ]`;\n    locTime.textContent = `${data.location.localtime} ]`;\n    tempC.textContent = `${data.current.temp_c} °C ]`;\n    tempF.textContent = `${data.current.temp_f} °F ]`;\n    locCondition.textContent = `${data.current.condition.text} skies ]`;\n    humidity.textContent = `Humidity ${data.current.humidity}% ]`;\n  })\n  .catch((error) => console.error('Error:', error));\n\nfunction formSubmit(e) {\n  e.preventDefault();\n  fetch(\n    `https://api.weatherapi.com/v1/current.json?key=346db19fc2d3410b90233359231708&q=${search.value}&aqi=no`,\n    {\n      mode: 'cors',\n    }\n  )\n    .then(function (response) {\n      return response.json();\n    })\n    .then(function (data) {\n      loc.textContent = `[ ${data.location.name} ]`;\n      if (data.current.is_day === 1) locDay.textContent = `Day time ]`;\n      else locDay.textContent = `Night time ]`;\n      locTime.textContent = `${data.location.localtime} ]`;\n      tempC.textContent = `${data.current.temp_c} °C ]`;\n      tempF.textContent = `${data.current.temp_f} °F ]`;\n      locCondition.textContent = `${data.current.condition.text} skies ]`;\n      humidity.textContent = `Humidity ${data.current.humidity}% ]`;\n    })\n    .catch((error) => console.error('Error:', error));\n}\n\nform.addEventListener('submit', formSubmit);\n\n\n//# sourceURL=webpack://webpack-template-eslint-prettier/./src/index.js?");

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