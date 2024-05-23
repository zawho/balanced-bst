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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-sort */ \"./src/merge-sort.js\");\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print */ \"./src/print.js\");\n\n\n\n\n// Next: replace the below section with driver script.\n\nconst testArr = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);\nconst testTree = new _tree__WEBPACK_IMPORTED_MODULE_1__[\"default\"](testArr);\n\n// testTree.insert(10);\n// testTree.insert(14);\n// testTree.insert(39);\n// testTree.insert(82);\n// testTree.insert(700);\n// testTree.find(67);\n// testTree.find(10);\n// testTree.find(0)\n// testTree.delete(67);\n// testTree.delete(8);\n\n// testTree.height(4);\n// testTree.depth(5);\n\n// console.log(testTree.levelOrder());\n// console.log(testTree.preOrder());\n// console.log(testTree.inOrder());\n// console.log(testTree.postOrder());\n\n// console.log(testTree.isBalanced());\n\n// testTree.rebalance();\n\n(0,_print__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(testTree.root);\n\n//# sourceURL=webpack://balanced-bst/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-node */ \"./src/tree-node.js\");\n/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge-sort */ \"./src/merge-sort.js\");\n\n\n\nfunction findNextBiggest(deletedNode) {\n    let currentNode = deletedNode.right;\n\n    while (currentNode.left !== null) {\n        currentNode = currentNode.left;\n    }\n    return currentNode.node;\n}\n\nclass Tree {\n\n    constructor(arr) {\n        this.root = this.buildTree(arr, 0, arr.length - 1);\n    }\n\n    buildTree(arr, start, end) {\n        if (start > end) {\n            return null;\n        }\n\n        const mid = Math.floor((start + end) / 2);\n        const treeNode = new _tree_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](arr[mid]);\n\n        treeNode.left = this.buildTree(arr, start, mid - 1);\n        treeNode.right = this.buildTree(arr, mid + 1, end);\n        return treeNode;\n    }\n\n    insert(value, root = this.root) {\n        let rootVar = root;\n\n        if (rootVar === null) {\n            rootVar = new _tree_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n            return rootVar;\n        }\n\n        if (value < rootVar.node) {\n            rootVar.left = this.insert(value, rootVar.left);\n        } else if (value > rootVar.node) {\n            rootVar.right = this.insert(value, rootVar.right);\n        }\n\n        return rootVar;\n    }\n\n    find(value, rootVar = this.root) {\n        if (rootVar.node === value) {\n            return rootVar;\n        } \n\n        if (rootVar.node !== value && rootVar.left === null && rootVar.right === null ||\n            value < rootVar.node && rootVar.left === null || \n        value > rootVar.node && rootVar.right === null ) {\n            console.log(`This tree does not contain ${value}.`);\n            return null;\n        }\n\n        if (typeof value !== 'number') {\n            console.log(`Please enter a number.`);\n            return null;\n        }\n\n        if (value < rootVar.node) {\n            return this.find(value, rootVar.left);\n        } \n        return this.find(value, rootVar.right);\n    }\n\n    delete(value, root = this.root) {\n        const rootVar = root;\n\n        if (rootVar === null) {\n            return rootVar;\n        }\n\n        if (value < rootVar.node) {\n            rootVar.left = this.delete(value, rootVar.left);\n        } else if (value > rootVar.node) {\n            rootVar.right = this.delete(value, rootVar.right);\n        } else if (rootVar.left === null) {\n            return rootVar.right;\n        } else if (rootVar.right === null) {\n            return rootVar.left;\n        } else {\n            rootVar.node = findNextBiggest(rootVar);\n            rootVar.right = this.delete(rootVar.node, rootVar.right);\n        }\n    \n        return rootVar;\n    }\n\n    levelOrder() {\n        if (this.root === null) {\n            return null;\n        }\n\n        const queue = [];\n        const arr = [];\n        \n        queue.push(this.root);\n\n        while (queue.length > 0) {\n            const current = queue.shift();\n            if (current.left) {\n                queue.push(current.left);\n            }\n            if (current.right) {\n                queue.push(current.right);\n            }\n            arr.push(current.node);\n        }\n\n        return arr;\n    }\n\n    preOrder(rootVar = this.root, arr = []) {\n        if (rootVar === null) {\n            return null;\n        }\n        \n        arr.push(rootVar.node);\n\n        this.preOrder(rootVar.left, arr);\n        this.preOrder(rootVar.right, arr);\n\n        return arr;\n    }\n\n    inOrder(rootVar = this.root, arr = []) {\n        if (rootVar === null) {\n            return null;\n        }\n        \n        this.inOrder(rootVar.left, arr);\n\n        arr.push(rootVar.node);\n\n        this.inOrder(rootVar.right, arr);\n\n        return arr;\n    }\n\n    postOrder(rootVar = this.root, arr = []) {\n        if (rootVar === null) {\n            return null;\n        }\n\n        this.postOrder(rootVar.left, arr);\n        this.postOrder(rootVar.right, arr);\n\n        arr.push(rootVar.node);\n\n        return arr;\n    }\n\n    height(nodeVar, rootVar = this.find(nodeVar)) {\n        if (rootVar === null) {\n            return 0;\n        }\n\n        const leafHeight = Math.max(this.height(nodeVar, rootVar.left), \n        this.height(nodeVar, rootVar.right)) + 0;\n        const nodeHeight = Math.max(this.height(nodeVar, rootVar.left), \n        this.height(nodeVar, rootVar.right)) + 1;\n\n        if (rootVar.left === null && rootVar.right === null) {\n            return leafHeight;\n        }\n\n        return nodeHeight;\n    }\n\n    depth(nodeVar, rootVar = this.root) {\n        if (this.find(nodeVar) === null) {\n            return 0;\n        }\n\n        if (rootVar.node === nodeVar) {\n            return 0;\n        }\n\n        if (nodeVar < rootVar.node) {\n            return this.depth(nodeVar, rootVar.left) + 1;\n        } \n        return this.depth(nodeVar, rootVar.right) + 1;\n    }\n\n    isBalanced(rootVar = this.root) {\n        if (rootVar === null) {\n            return true;\n        }\n\n        const leftHeight = this.height(rootVar.node, rootVar.left);\n        const rightHeight = this.height(rootVar.node, rootVar.right);\n        const heightDiff = leftHeight - rightHeight;\n\n        if (heightDiff < 2 && heightDiff > -2) {\n            this.isBalanced(rootVar.left);\n            this.isBalanced(rootVar.right);\n            return true;\n        }\n        return false;\n    }\n\n    rebalance() {\n        const newArr = this.levelOrder();\n        const newSortedArr = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newArr);\n        const newTree = new Tree(newSortedArr);\n        this.root = newTree.root;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);\n\n//# sourceURL=webpack://balanced-bst/./src/tree.js?");

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