webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _var_www_html_react_test_ashish_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/error */ \"./node_modules/@apollo/client/link/error/index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/var/www/html/react-test-ashish/react-next/pages/_app.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_var_www_html_react_test_ashish_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/**\n * Baseurl of github\n */\n\nvar GITHUB_BASE_URL = \"https://api.github.com/graphql\";\nvar httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"HttpLink\"]({\n  uri: GITHUB_BASE_URL,\n  headers: {\n    Authorization: \"Bearer \".concat(\"657bb0dac12ed4be579901f1f1ae075a26e2ea7b\")\n  }\n});\n/**\n *  Error part of graphql or network error\n */\n\nvar errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__[\"onError\"])(function (_ref) {\n  var graphQLErrors = _ref.graphQLErrors,\n      networkError = _ref.networkError;\n\n  if (graphQLErrors) {\n    graphQLErrors.map(function (_ref2) {\n      var message = _ref2.message,\n          locations = _ref2.locations,\n          path = _ref2.path;\n      return console.log(\"[GraphQL error]: Message: \".concat(message, \", Location: \").concat(locations, \", Path: \").concat(path));\n    });\n  }\n\n  if (networkError) {\n    console.log(\"[Network error]: \".concat(networkError));\n  }\n});\nvar link = _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloLink\"].from([errorLink, httpLink]); // Using Apollo client set url and header link\n\nvar client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n  uri: GITHUB_BASE_URL,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"](),\n  link: link\n});\n\nvar MyApp = function MyApp(_ref3) {\n  var Component = _ref3.Component,\n      pageProps = _ref3.pageProps;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: client,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJHSVRIVUJfQkFTRV9VUkwiLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZXJyb3JMaW5rIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJtYXAiLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwiQXBvbGxvTGluayIsImZyb20iLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxnQ0FBeEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUM1QkMsS0FBRyxFQUFFSCxlQUR1QjtBQUU1QkksU0FBTyxFQUFFO0FBQ1BDLGlCQUFhLG1CQUFZQywwQ0FBWjtBQUROO0FBRm1CLENBQWIsQ0FBakI7QUFPQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHQyx5RUFBTyxDQUFDLGdCQUFxQztBQUFBLE1BQWxDQyxhQUFrQyxRQUFsQ0EsYUFBa0M7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUM3RCxNQUFJRCxhQUFKLEVBQW1CO0FBQ2pCQSxpQkFBYSxDQUFDRSxHQUFkLENBQWtCO0FBQUEsVUFBR0MsT0FBSCxTQUFHQSxPQUFIO0FBQUEsVUFBWUMsU0FBWixTQUFZQSxTQUFaO0FBQUEsVUFBdUJDLElBQXZCLFNBQXVCQSxJQUF2QjtBQUFBLGFBQ2hCQyxPQUFPLENBQUNDLEdBQVIscUNBQytCSixPQUQvQix5QkFDcURDLFNBRHJELHFCQUN5RUMsSUFEekUsRUFEZ0I7QUFBQSxLQUFsQjtBQUtEOztBQUNELE1BQUlKLFlBQUosRUFBa0I7QUFDaEJLLFdBQU8sQ0FBQ0MsR0FBUiw0QkFBZ0NOLFlBQWhDO0FBQ0Q7QUFDRixDQVh3QixDQUF6QjtBQWFBLElBQU1PLElBQUksR0FBR0MseURBQVUsQ0FBQ0MsSUFBWCxDQUFnQixDQUFDWixTQUFELEVBQVlOLFFBQVosQ0FBaEIsQ0FBYixDLENBRUE7O0FBQ0EsSUFBTW1CLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUM5QmxCLEtBQUcsRUFBRUgsZUFEeUI7QUFFOUJzQixPQUFLLEVBQUUsSUFBSUMsNERBQUosRUFGdUI7QUFHOUJOLE1BQUksRUFBSkE7QUFIOEIsQ0FBakIsQ0FBZjs7QUFNQSxJQUFNTyxLQUF5QixHQUFHLFNBQTVCQSxLQUE0QixRQUE4QjtBQUFBLE1BQTNCQyxTQUEyQixTQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsU0FBaEJBLFNBQWdCO0FBQzlELHNCQUNFLHFFQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRU4sTUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlTSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztLQUFNRixLO0FBUVNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQge1xuICBBcG9sbG9Qcm92aWRlcixcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBBcG9sbG9MaW5rLFxuICBIdHRwTGluayxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L2xpbmsvZXJyb3JcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcblxuLyoqXG4gKiBCYXNldXJsIG9mIGdpdGh1YlxuICovXG5jb25zdCBHSVRIVUJfQkFTRV9VUkwgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbFwiO1xuXG5jb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gIHVyaTogR0lUSFVCX0JBU0VfVVJMLFxuICBoZWFkZXJzOiB7XG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9HSVRIVUJfUEVSU09OQUxfQUNDRVNTX1RPS0VOfWAsXG4gIH0sXG59KTtcblxuLyoqXG4gKiAgRXJyb3IgcGFydCBvZiBncmFwaHFsIG9yIG5ldHdvcmsgZXJyb3JcbiAqL1xuY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICBpZiAoZ3JhcGhRTEVycm9ycykge1xuICAgIGdyYXBoUUxFcnJvcnMubWFwKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gXG4gICAgICApXG4gICAgKTtcbiAgfVxuICBpZiAobmV0d29ya0Vycm9yKSB7XG4gICAgY29uc29sZS5sb2coYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9YCk7XG4gIH1cbn0pO1xuXG5jb25zdCBsaW5rID0gQXBvbGxvTGluay5mcm9tKFtlcnJvckxpbmssIGh0dHBMaW5rXSk7XG5cbi8vIFVzaW5nIEFwb2xsbyBjbGllbnQgc2V0IHVybCBhbmQgaGVhZGVyIGxpbmtcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICB1cmk6IEdJVEhVQl9CQVNFX1VSTCxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIGxpbmssXG59KTtcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})