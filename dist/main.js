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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-sort */ \"./src/merge-sort.js\");\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print */ \"./src/print.js\");\n\n\n\n\nconst testArr = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);\nconst testTree = new _tree__WEBPACK_IMPORTED_MODULE_1__[\"default\"](testArr);\n\ntestTree.insert(testTree.root, 2);\ntestTree.insert(testTree.root, 10);\ntestTree.insert(testTree.root, 50);\ntestTree.insert(testTree.root, 700);\n\n(0,_print__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(testTree.root);\n\n//# sourceURL=webpack://balanced-bst/./src/index.js?");

/***/ }),

/***/ "./src/merge-sort.js":
/*!***************************!*\
  !*** ./src/merge-sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\nfunction merge(arr1, arr2) {\n    const arr3 = [];\n    let i = 0;\n    let j = 0;\n    let k = 0;\n    while (i < (arr1.length) && j < arr2.length) {\n        if (arr1[i] < arr2[j]) {\n            arr3[k] = arr1[i];\n            i++;\n        } else {\n            arr3[k] = arr2[j];\n            j++;\n        }\n        k++;\n    }\n    while (i < arr1.length) {\n        arr3[k] = arr1[i];\n        i++;\n        k++;\n    }\n    while (j < arr2.length) {\n        arr3[k] = arr2[j];\n        j++;\n        k++;\n    }\n    return arr3;\n}\n\nfunction mergeSort(arr) {\n    if (arr.length <= 1) {\n        return arr;\n    }\n    const split = Math.floor(arr.length / 2);\n    const left = mergeSort(arr.slice(0, (split)));\n    const right = mergeSort(arr.slice(split));\n    return merge(left, right);\n}\n\nfunction removeDuplicates(arr) {\n    const testSet = new Set(arr);\n    const newArr = Array.from(testSet);\n    return newArr;\n}\n\nfunction sortAndReduce(arr) {\n    return removeDuplicates(mergeSort(arr));\n}\n  \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortAndReduce);\n\n//# sourceURL=webpack://balanced-bst/./src/merge-sort.js?");

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction printTree(root, prefix = \"\", isLeft = true) {\n\n    if (root === null) {\n        return;\n      }\n\n      if (root.right !== null) {\n        printTree(root.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n      }\n\n      console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${root.node}`);\n      \n      if (root.left !== null) {\n        printTree(root.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n      }\n   \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printTree);\n\n//# sourceURL=webpack://balanced-bst/./src/print.js?");

/***/ }),

/***/ "./src/tree-node.js":
/*!**************************!*\
  !*** ./src/tree-node.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Node {\n    constructor(data) {\n        this.node = data;\n        this.left = null;\n        this.right = null;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);\n\n//# sourceURL=webpack://balanced-bst/./src/tree-node.js?");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-node */ \"./src/tree-node.js\");\n\n\nclass Tree {\n\n    constructor(arr) {\n        this.root = this.buildTree(arr, 0, arr.length - 1);\n    }\n\n    buildTree(arr, start, end) {\n        if (start > end) {\n            return null;\n        }\n\n        const mid = Math.floor((start + end) / 2);\n        const treeNode = new _tree_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](arr[mid]);\n\n        treeNode.left = this.buildTree(arr, start, mid - 1);\n        treeNode.right = this.buildTree(arr, mid + 1, end);\n        return treeNode;\n    }\n\n    insert(root, value) {\n        let rootVar = root;\n        if (rootVar === null) {\n            rootVar = new _tree_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n            return rootVar;\n        }\n\n        if (value < rootVar.node) {\n            rootVar.left = this.insert(rootVar.left, value);\n        } else if (value > rootVar.node) {\n            rootVar.right = this.insert(rootVar.right, value);\n        }\n\n        return rootVar;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);\n\n//# sourceURL=webpack://balanced-bst/./src/tree.js?");

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