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

eval("/* eslint-disable prefer-arrow-callback */\n/* eslint-disable func-names */\nconst loc = document.querySelector('.loc');\nconst locTime = document.querySelector('.locTime');\nconst temp = document.querySelector('.temp');\nconst locCondition = document.querySelector('.locCondition');\nconst locDay = document.querySelector('.locDay');\nconst humidity = document.querySelector('.humidity');\nconst search = document.querySelector('#search');\nconst form = document.querySelector('#form-city');\nconst tempText = document.querySelector('.temp-text');\nconst corf = document.querySelector('.celorfar');\n\nfetch(\n  `http://api.weatherapi.com/v1/forecast.json?key=346db19fc2d3410b90233359231708&q=New York&days=3&aqi=no&alerts=no`,\n  {\n    mode: 'cors',\n  }\n)\n  .then(function (response) {\n    return response.json();\n  })\n  .then(function (data) {\n    console.log(data);\n    loc.textContent = `「 ${data.location.name} 」`;\n    if (data.current.is_day === 1) locDay.textContent = `Day time`;\n    else locDay.textContent = `Night time`;\n    locTime.textContent = `${locTime}`;\n    temp.textContent = Math.round(`${data.current.temp_f}`);\n    corf.textContent = '°F';\n    locCondition.textContent = `${data.current.condition.text} skies`;\n    humidity.textContent = `Humidity ${data.current.humidity}%`;\n  })\n  .catch((error) => console.error('Error:', error));\n\nfunction formSubmit(e) {\n  e.preventDefault();\n  fetch(\n    `https://api.weatherapi.com/v1/current.json?key=346db19fc2d3410b90233359231708&q=${search.value}&days=3&aqi=no&alerts=no`,\n    {\n      mode: 'cors',\n    }\n  )\n    .then(function (response) {\n      return response.json();\n    })\n    .then(function (data) {\n      loc.textContent = `「 ${data.location.name} 」`;\n      if (data.current.is_day === 1) locDay.textContent = `Day time`;\n      else locDay.textContent = `Night time`;\n      temp.textContent = Math.round(`${data.current.temp_f}`);\n      locCondition.textContent = `${data.current.condition.text} skies`;\n      humidity.textContent = `Humidity ${data.current.humidity}%`;\n      // button text and value reset\n      tempText.textContent = '°C';\n      tempText.value = '0';\n      corf.textContent = '°F';\n    })\n    .catch((error) => console.error('Error:', error));\n}\n\nfunction convertCelsiusToFahrenheit(e) {\n  e.preventDefault();\n  if (tempText.value === '0') {\n    tempText.value = '1';\n    tempText.textContent = '°F';\n    corf.textContent = '°C';\n    const result = Math.round((5 / 9) * (temp.textContent - 32));\n    temp.textContent = result;\n  } else {\n    tempText.value = '0';\n    tempText.textContent = '°C';\n    corf.textContent = '°F';\n    const result = Math.round((9 / 5) * temp.textContent + 32);\n    temp.textContent = result;\n  }\n}\n\nfunction updateTime() {\n  let currentTime = new Date();\n  currentTime = currentTime.toLocaleTimeString();\n  locTime.textContent = currentTime;\n}\n\nsetInterval(updateTime, 1000);\nupdateTime();\nform.addEventListener('submit', formSubmit);\ntempText.addEventListener('click', convertCelsiusToFahrenheit);\n\n\n//# sourceURL=webpack://webpack-template-eslint-prettier/./src/index.js?");

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