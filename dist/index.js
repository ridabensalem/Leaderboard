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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scoreAdd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scoreAdd.js */ \"./src/modules/scoreAdd.js\");\n/* harmony import */ var _modules_fetshScores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetshScores.js */ \"./src/modules/fetshScores.js\");\n// import './style.css';\n\n\n\nconst LeaderBoard = async () => {\n  const response = await fetch(\n    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        name: 'LeaderBoard game',\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n  const output = await response.json();\n  return output;\n};\nconst userName = document.querySelector('#username');\nconst scoreValue = document.querySelector('#scores');\nconst submitButton = document.querySelector('#submitButton');\nconst refresh = document.querySelector('#refresh');\nLeaderBoard();\nwindow.addEventListener('load', () => {\n  (0,_modules_fetshScores_js__WEBPACK_IMPORTED_MODULE_1__.display)();\n});\n\nsubmitButton.addEventListener('click', (event) => {\n  event.preventDefault();\n  (0,_modules_scoreAdd_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  userName.value = '';\n  scoreValue.value = '';\n});\n\nrefresh.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_modules_fetshScores_js__WEBPACK_IMPORTED_MODULE_1__.scoreRequest)();\n  (0,_modules_fetshScores_js__WEBPACK_IMPORTED_MODULE_1__.display)();\n});\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/fetshScores.js":
/*!************************************!*\
  !*** ./src/modules/fetshScores.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"scoreRequest\": () => (/* binding */ scoreRequest)\n/* harmony export */ });\nconst scoreRequest = async () => {\n  const response = await fetch(\n    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tSjTqVfZRihvosjUtNet/scores/',\n  );\n  const scoreValue = await response.json();\n  return scoreValue.result;\n};\n\nconst list = document.querySelector('#scoresList');\n\nconst display = async () => {\n  const data = await scoreRequest();\n  list.innerHTML = '';\n  data.forEach((value) => {\n    const renderData = `\n      <div>\n      <div>${value.user}</div>\n      <div>${value.score}</div>\n      </div>`;\n    list.insertAdjacentHTML('beforeend', renderData);\n  });\n};\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/fetshScores.js?");

/***/ }),

/***/ "./src/modules/scoreAdd.js":
/*!*********************************!*\
  !*** ./src/modules/scoreAdd.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scoreAdd = async () => {\n  const response = await fetch(\n    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tSjTqVfZRihvosjUtNet/scores/',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        user: document.querySelector('#username').value,\n        score: document.querySelector('#scores').value,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n  const addedScore = await response.json();\n  return addedScore;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreAdd);\n\n//# sourceURL=webpack://leaderboard/./src/modules/scoreAdd.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;