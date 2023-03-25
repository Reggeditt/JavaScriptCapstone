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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./heart-svgrepo-com.svg */ \"./src/heart-svgrepo-com.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./heart-svgrepo-com-shaded.svg */ \"./src/heart-svgrepo-com-shaded.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100vw;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nli a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  padding: 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  border-bottom: 2px solid lightgray;\\r\\n  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.344);\\r\\n  border-bottom-left-radius: 10px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 150px;\\r\\n  height: 150px;\\r\\n  padding: 35px;\\r\\n  border: 5px solid yellowgreen;\\r\\n  border-radius: 100px;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  width: 300px;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 90%;\\r\\n  min-height: 80vh;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.search-wrap {\\r\\n  width: 50%;\\r\\n  max-width: 500px;\\r\\n}\\r\\n\\r\\n.search-form {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.main-content-wrap {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 10px;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  row-gap: 10px;\\r\\n  column-gap: 10px;\\r\\n}\\r\\n\\r\\n.show-card {\\r\\n  width: 100%;\\r\\n  padding: 10px 5px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border: 1px solid lightgray;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.show-info {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.like-button {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  margin-inline: auto;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like-button:hover {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n.comment-button {\\r\\n  cursor: pointer;\\r\\n  padding: 10px 25px;\\r\\n  border: 1px solid lightgray;\\r\\n  border-radius: 5px;\\r\\n  transition: box-shadow 0.5s;\\r\\n}\\r\\n\\r\\n.comment-button:hover {\\r\\n  box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.356);\\r\\n}\\r\\n\\r\\n.comments-popup-wrap {\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  border: 1px solid #000;\\r\\n  backdrop-filter: blur(50px);\\r\\n}\\r\\n\\r\\n.comments-popup {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-evenly;\\r\\n  width: 100%;\\r\\n  gap: 20px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.popup-header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding-block: 30px;\\r\\n}\\r\\n\\r\\n.popup-image {\\r\\n  width: 80%;\\r\\n  max-width: 500px;\\r\\n  max-height: 700px;\\r\\n}\\r\\n\\r\\n.popup-close-btn {\\r\\n  font-size: 100px;\\r\\n  cursor: pointer;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\n.pop-show-header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.pop-show-header > * {\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.show-language {\\r\\n  text-align: center;\\r\\n  margin-block: 5px;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.popup-close-btn:hover {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.popup-content {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.popup-content h2 {\\r\\n  font-size: 2.5rem;\\r\\n  font-weight: 900;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comments-title {\\r\\n  font-size: 2rem;\\r\\n  font-weight: 200;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup-comments {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup-comment-form {\\r\\n  width: 80%;\\r\\n  max-width: 320px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  gap: 25px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  border: 2px solid #000;\\r\\n  font-size: 15px;\\r\\n  font-weight: 250;\\r\\n  text-align: center;\\r\\n  margin: 15px 0 5px 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_showsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showsCounter.js */ \"./src/modules/showsCounter.js\");\n/* harmony import */ var _modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n\n\n\n\nconst apiBaseUrl = 'https://api.tvmaze.com';\nconst involvementAPIBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst searchFormEl = document.getElementById('search-form');\nconst searchInputEl = document.getElementById('search-input');\nconst involvementApiID = '71VEvRYFUclLOrVdlfg1';\n\nconst updateLikesCounter = async (id) => {\n  const getLikes = await fetch(`${involvementAPIBaseUrl}apps/${involvementApiID}/likes`);\n  const likesData = await getLikes.json();\n\n  const counter = document.getElementById(`${id}-counter`);\n  const likesCount = likesData.filter((like) => like.item_id === id);\n  counter.textContent = (`${likesCount[0].likes + 1} likes`);\n};\n\nconst postLike = async (id) => {\n  const options = {\n    method: 'POST',\n    headers: { 'Content-type': 'application/json; charset=UTF-8' },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  };\n  fetch(`${involvementAPIBaseUrl}apps/${involvementApiID}/likes`, options);\n};\n\nconst searchShows = async (query) => {\n  const response = await fetch(`${apiBaseUrl}/search/shows?q=${query}`);\n  const data = await response.json();\n  return data;\n};\n\nconst postComment = async (itemID, commentData) => {\n  const options = {\n    method: 'POST',\n    headers: { 'Content-type': 'application/json; charset=UTF-8' },\n    body: JSON.stringify(commentData),\n  };\n\n  fetch(`${involvementAPIBaseUrl}apps/${involvementApiID}/comments/`, options)\n    .then((response) => {\n      if (response.ok);\n      throw new Error('there was a problem');\n    });\n};\n\nconst getAndUpdateComment = async (data) => {\n  const popupCommentsEl = document.querySelector('.popup-comments');\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/71VEvRYFUclLOrVdlfg1/comments?item_id=item${data.id}`);\n  const commentsData = await response.json();\n  const commentTitleEl = document.querySelector('.comments-title');\n  commentTitleEl.textContent = `Comments (${commentsData.length})`;\n  commentsData.forEach((comment) => {\n    const commentEl = document.createElement('p');\n    commentEl.classList.add('popup-comment');\n    commentEl.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\n    popupCommentsEl.appendChild(commentEl);\n  });\n\n  const commentForm = document.getElementById('popup-comment-form');\n  commentForm.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const name = commentForm.name.value;\n    const comment = commentForm.comment.value;\n    const commentData = {\n      item_id: `item${data.id}`,\n      username: name,\n      comment,\n    };\n\n    postComment(data.id, commentData);\n    commentForm.reset();\n    popupCommentsEl.innerHTML = '';\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/71VEvRYFUclLOrVdlfg1/comments?item_id=item${data.id}`);\n    const commentsData = await response.json();\n    const commentTitleEl = document.querySelector('.comments-title');\n    commentTitleEl.textContent = `Comments (${commentsData.length})`;\n    commentsData.forEach((comment) => {\n      const commentEl = document.createElement('p');\n      commentEl.classList.add('popup-comment');\n      commentEl.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\n      popupCommentsEl.appendChild(commentEl);\n    });\n    const commentEl = document.createElement('p');\n    commentEl.classList.add('popup-comment');\n    commentEl.textContent = `${commentsData[1].creation_date} ${commentData.username}: ${commentData.comment}`;\n    popupCommentsEl.appendChild(commentEl);\n    (0,_modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.popup-comment');\n  });\n};\n\nconst closePopup = (id) => {\n  const closeBtns = document.querySelectorAll('.popup-close-btn');\n  const commentsPopupWrapperEl = document.querySelector('.comments-popup-wrap');\n  const commentsPopupEl = document.querySelector(`#popup${id}`);\n  closeBtns.forEach((closeBtn) => {\n    closeBtn.addEventListener('click', () => {\n      commentsPopupEl.remove();\n      commentsPopupWrapperEl.style.display = 'none';\n    });\n  });\n};\n\nconst renderCommentsPopup = (data) => {\n  const commentsPopupWrapperEl = document.querySelector('.comments-popup-wrap');\n  const commentsPopupEl = document.createElement('div');\n  commentsPopupEl.classList.add('comments-popup');\n  commentsPopupEl.id = `popup${data.id}`;\n  commentsPopupEl.innerHTML = `\n    <div class=\"popup-header\">\n      <img class='popup-image' src='${data.image.original}'></img>\n      <span class='popup-close-btn'>&times;</span>\n    </div>\n    <div class='popup-content'>\n      <h2 class='title'>${data.name}</h2>\n      <div class='details'>\n        <div class='pop-show-header'>\n          <div class='pop-show-genre'>\n            <p class='show-genre'>Genres: ${data.genres}</p>\n            <p class='show-rating'>Rating: ${data.rating.average}</p>\n          </div>\n          <div class='pop-runtime-header'>\n            <p class='show-runtime'>Runtime: ${data.runtime}mins</p>\n            <p class='show-status'>Status: ${data.status}</p>\n          </div>\n        </div>\n        <p class='show-language'>Language: ${data.language}</p>\n        <p class='show-synopsis'>${data.summary}</p>\n      </div>\n    </div>\n    <h3 class='comments-title'>Comments (0)</h3>\n    <div class='popup-comments'></div>\n    <form class='popup-comment-form' id='popup-comment-form'>\n      <input type='name' name='name' placeholder='Your name' required>\n      <textarea name='comment' placeholder='Your comment' required></textarea>\n      <button type='submit'>Submit</button>\n    </form>\n  `;\n  commentsPopupWrapperEl.appendChild(commentsPopupEl);\n  closePopup(data.id);\n  getAndUpdateComment(data);\n  (0,_modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.popup-comment');\n};\n\nconst renderShow = (data) => {\n  const mainContentWrapperEl = document.querySelector('.main-content-wrap');\n  const showCardEl = document.createElement('div');\n  showCardEl.classList.add('show-card');\n  showCardEl.innerHTML = `\n    <img class='show-image' src='${data.image.medium || data.image.original}'></img>\n    <div class='show-info'>\n      <h2 class='title'>${data.name}</h2>\n      <div class='likes-info'>\n        <div class='like-button' data-id='item${data.id}'></div>\n        <small class='likes-counter' id='item${data.id}-counter'>0 likes</small>\n      </div>\n    </div>\n    <p class='comment-button' id='show${data.id}' data-id='${data.id}'>Comment</p>\n    <p class='rent-movie-button' data-id='${data.id}'>Rent movie</p>\n  `;\n  mainContentWrapperEl.appendChild(showCardEl);\n  const commentBtn = document.querySelector(`#show${data.id}`);\n  commentBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    renderCommentsPopup(data);\n    const commentsPopupWrapperEl = document.querySelector('.comments-popup-wrap');\n    commentsPopupWrapperEl.style.display = 'flex';\n    const commentsPopupEl = document.querySelector(`#popup${data.id}`);\n    commentsPopupEl.style.display = 'flex';\n  });\n  updateLikesCounter(`item${data.id}`);\n};\n\nconst likeBtnsListenEvents = (likeBtns) => {\n  likeBtns = document.querySelectorAll('.like-button');\n  likeBtns.forEach((likeBtn) => {\n    likeBtn.addEventListener('click', (e) => {\n      postLike(e.target.dataset.id);\n      const counter = document.getElementById(`${e.target.dataset.id}-counter`);\n      const count = +counter.innerText.split(' ')[0];\n      counter.innerText = `${count + 1} likes`;\n    });\n  });\n};\n\nconst getShowsData = () => {\n  const promises = [];\n  for (let showId = 1; showId < 15; showId += 1) {\n    promises.push(\n      fetch(`${apiBaseUrl}/shows/${showId}`)\n        .then((response) => response.json()),\n    );\n  }\n\n  Promise.all(promises)\n    .then((result) => {\n      const tvShowsData = result;\n      tvShowsData.forEach((tvShow) => {\n        renderShow(tvShow);\n      });\n      likeBtnsListenEvents();\n      (0,_modules_showsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.show-card');\n    });\n};\ngetShowsData();\n\nsearchFormEl.addEventListener('submit', async (event) => {\n  const query = searchInputEl.value;\n  event.preventDefault();\n  searchShows(query).then((data) => {\n    data.forEach((show) => {\n      renderShow(show.show);\n      (0,_modules_showsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.show-card');\n    });\n  });\n});\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = (targetEl) => {\n  const ourArray = document.querySelectorAll(`${targetEl}`);\n  const count = ourArray.length;\n  const commentsCounterEl = document.querySelector('.comments-title');\n  commentsCounterEl.textContent = `Comments (${count})`;\n  return count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n//# sourceURL=webpack://webpack-template/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/showsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/showsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showsCounter = (targetEl) => {\n  const ourArray = document.querySelectorAll(`${targetEl}`);\n  const count = ourArray.length;\n  const displayCount = document.querySelector('.shows-count');\n  displayCount.textContent = `TVshows (${count})`;\n  return count;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showsCounter);\n\n//# sourceURL=webpack://webpack-template/./src/modules/showsCounter.js?");

/***/ }),

/***/ "./src/heart-svgrepo-com-shaded.svg":
/*!******************************************!*\
  !*** ./src/heart-svgrepo-com-shaded.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf95465d73473f4cdea6.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/heart-svgrepo-com-shaded.svg?");

/***/ }),

/***/ "./src/heart-svgrepo-com.svg":
/*!***********************************!*\
  !*** ./src/heart-svgrepo-com.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e428c3168fddf50e5371.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/heart-svgrepo-com.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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