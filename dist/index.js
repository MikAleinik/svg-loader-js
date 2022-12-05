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
/***/ ((module) => {

eval("const EOL = '\\n';\nconst SEPARATOR_PROPERTY = '\" ';\nconst SEPARATOR_VALUE = '=';\nconst QUOTE = '\"';\nconst TAG_CLOSE = '>';\nconst NMSP = 'xmlns';\nmodule.exports = function (content) {\n    let result = {\n        property: Array(),\n        geometry: Array()\n    };\n    const svgParced = content.replaceAll(EOL, '').split(TAG_CLOSE);\n    const svgProperty = parseString(svgParced[0]);\n    svgProperty[0] = svgProperty[0].slice(5);\n    for (let i = 1; i < svgProperty.length; i += 1) {\n        const prop = parseProperty(svgProperty[i]);\n        if (prop.name === NMSP) {\n            result.xmlns = prop.value;\n        } else {\n            result.property.push(prop);\n        }\n    }\n    for (let i = 1; i < svgParced.length - 2; i += 1) {\n        result.geometry.push(svgParced[i] + TAG_CLOSE);\n    }\n    return `export default ((result = ${JSON.stringify(result)})=>{\n        const svg = document.createElementNS(result.xmlns, \"svg\");\n        // svg.setAttributeNS(null,\"height\",60);\n        // svg.setAttributeNS(null,\"width\",60);\n        for (let i = 0; i < result.property.length; i++) {\n            svg.setAttributeNS(null,\\`\\${result.property[i].name}\\`,\\`\\$\\{result.property[i].value\\}\\`);\n        }\n        for (let i = 0; i < result.geometry.length; i++) {\n            svg.insertAdjacentHTML('beforeend',result.geometry[i]);\n        }\n        return svg;})()`;\n};\nfunction parseString(svgString) {\n    return svgString.split(SEPARATOR_PROPERTY);\n}\nfunction parseProperty(strProperty) {\n    const result = strProperty.split(SEPARATOR_VALUE);\n    const lastSymbol = result[1].slice(result[1].length - 1);\n    return {\n        name: result[0],\n        value: (lastSymbol !== QUOTE ? result[1].slice(1) : result[1].slice(1, result[1].length - 1))\n    }\n}\n\n//# sourceURL=webpack://svg-loader-js/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;