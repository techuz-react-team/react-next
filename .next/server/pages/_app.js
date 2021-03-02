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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/var/www/html/react-test-ashish/react-next/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/**\n * Baseurl of github\n */\n\nconst GITHUB_BASE_URL = \"https://api.github.com/graphql\";\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"HttpLink\"]({\n  uri: GITHUB_BASE_URL,\n  headers: {\n    Authorization: `Bearer ${\"657bb0dac12ed4be579901f1f1ae075a26e2ea7b\"}`\n  }\n});\n/**\n *  Error part of graphql or network error\n */\n\nconst errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__[\"onError\"])(({\n  graphQLErrors,\n  networkError\n}) => {\n  if (graphQLErrors) {\n    graphQLErrors.map(({\n      message,\n      locations,\n      path\n    }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));\n  }\n\n  if (networkError) {\n    console.log(`[Network error]: ${networkError}`);\n  }\n});\nconst link = _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloLink\"].from([errorLink, httpLink]);\n/**\n *  Using Apollo client set url and header link\n */\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n  uri: GITHUB_BASE_URL,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"](),\n  link\n});\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloProvider\"], {\n    client: client,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkdJVEhVQl9CQVNFX1VSTCIsImh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlcnJvckxpbmsiLCJvbkVycm9yIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsIm1hcCIsIm1lc3NhZ2UiLCJsb2NhdGlvbnMiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImxpbmsiLCJBcG9sbG9MaW5rIiwiZnJvbSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsZUFBZSxHQUFHLGdDQUF4QjtBQUVBLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyx1REFBSixDQUFhO0FBQzVCQyxLQUFHLEVBQUVILGVBRHVCO0FBRTVCSSxTQUFPLEVBQUU7QUFDUEMsaUJBQWEsRUFBRyxVQUFTQywwQ0FBbUQ7QUFEckU7QUFGbUIsQ0FBYixDQUFqQjtBQU9BO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLHlFQUFPLENBQUMsQ0FBQztBQUFFQyxlQUFGO0FBQWlCQztBQUFqQixDQUFELEtBQXFDO0FBQzdELE1BQUlELGFBQUosRUFBbUI7QUFDakJBLGlCQUFhLENBQUNFLEdBQWQsQ0FBa0IsQ0FBQztBQUFFQyxhQUFGO0FBQVdDLGVBQVg7QUFBc0JDO0FBQXRCLEtBQUQsS0FDaEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUNHLDZCQUE0QkosT0FBUSxlQUFjQyxTQUFVLFdBQVVDLElBQUssRUFEOUUsQ0FERjtBQUtEOztBQUNELE1BQUlKLFlBQUosRUFBa0I7QUFDaEJLLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQk4sWUFBYSxFQUE3QztBQUNEO0FBQ0YsQ0FYd0IsQ0FBekI7QUFhQSxNQUFNTyxJQUFJLEdBQUdDLHlEQUFVLENBQUNDLElBQVgsQ0FBZ0IsQ0FBQ1osU0FBRCxFQUFZTixRQUFaLENBQWhCLENBQWI7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTW1CLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUM5QmxCLEtBQUcsRUFBRUgsZUFEeUI7QUFFOUJzQixPQUFLLEVBQUUsSUFBSUMsNERBQUosRUFGdUI7QUFHOUJOO0FBSDhCLENBQWpCLENBQWY7O0FBTUEsTUFBTU8sS0FBeUIsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzlELHNCQUNFLHFFQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRU4sTUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlTSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFlRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHtcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgQXBvbGxvTGluayxcbiAgSHR0cExpbmssXG59IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XG5cbi8qKlxuICogQmFzZXVybCBvZiBnaXRodWJcbiAqL1xuY29uc3QgR0lUSFVCX0JBU0VfVVJMID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWxcIjtcblxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6IEdJVEhVQl9CQVNFX1VSTCxcbiAgaGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfR0lUSFVCX1BFUlNPTkFMX0FDQ0VTU19UT0tFTn1gLFxuICB9LFxufSk7XG5cbi8qKlxuICogIEVycm9yIHBhcnQgb2YgZ3JhcGhxbCBvciBuZXR3b3JrIGVycm9yXG4gKi9cbmNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgaWYgKGdyYXBoUUxFcnJvcnMpIHtcbiAgICBncmFwaFFMRXJyb3JzLm1hcCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgaWYgKG5ldHdvcmtFcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBbTmV0d29yayBlcnJvcl06ICR7bmV0d29ya0Vycm9yfWApO1xuICB9XG59KTtcblxuY29uc3QgbGluayA9IEFwb2xsb0xpbmsuZnJvbShbZXJyb3JMaW5rLCBodHRwTGlua10pO1xuXG4vKipcbiAqICBVc2luZyBBcG9sbG8gY2xpZW50IHNldCB1cmwgYW5kIGhlYWRlciBsaW5rXG4gKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICB1cmk6IEdJVEhVQl9CQVNFX1VSTCxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIGxpbmssXG59KTtcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client/link/error\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yXCI/NzVkMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client/link/error\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });