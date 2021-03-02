webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _var_www_html_react_test_ashish_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/error */ \"./node_modules/@apollo/client/link/error/index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/var/www/html/react-test-ashish/react-next/pages/_app.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_var_www_html_react_test_ashish_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/**\n * Baseurl of github\n */\n\nvar GITHUB_BASE_URL = \"https://api.github.com/graphql\";\nvar httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"HttpLink\"]({\n  uri: GITHUB_BASE_URL,\n  headers: {\n    Authorization: \"Bearer \".concat(\"657bb0dac12ed4be579901f1f1ae075a26e2ea7b\")\n  }\n}); // Error part of graphql or network error\n\nvar errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__[\"onError\"])(function (_ref) {\n  var graphQLErrors = _ref.graphQLErrors,\n      networkError = _ref.networkError;\n\n  if (graphQLErrors) {\n    graphQLErrors.map(function (_ref2) {\n      var message = _ref2.message,\n          locations = _ref2.locations,\n          path = _ref2.path;\n      return console.log(\"[GraphQL error]: Message: \".concat(message, \", Location: \").concat(locations, \", Path: \").concat(path));\n    });\n  }\n\n  if (networkError) {\n    console.log(\"[Network error]: \".concat(networkError));\n  }\n});\nvar link = _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloLink\"].from([errorLink, httpLink]); // Using Apollo client set url and header link\n\nvar client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n  uri: GITHUB_BASE_URL,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"](),\n  link: link\n});\n\nvar MyApp = function MyApp(_ref3) {\n  var Component = _ref3.Component,\n      pageProps = _ref3.pageProps;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: client,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJHSVRIVUJfQkFTRV9VUkwiLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZXJyb3JMaW5rIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJtYXAiLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwiQXBvbGxvTGluayIsImZyb20iLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxnQ0FBeEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUM1QkMsS0FBRyxFQUFFSCxlQUR1QjtBQUU1QkksU0FBTyxFQUFFO0FBQ1BDLGlCQUFhLG1CQUFZQywwQ0FBWjtBQUROO0FBRm1CLENBQWIsQ0FBakIsQyxDQU9BOztBQUNBLElBQU1DLFNBQVMsR0FBR0MseUVBQU8sQ0FBQyxnQkFBcUM7QUFBQSxNQUFsQ0MsYUFBa0MsUUFBbENBLGFBQWtDO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFDN0QsTUFBSUQsYUFBSixFQUFtQjtBQUNqQkEsaUJBQWEsQ0FBQ0UsR0FBZCxDQUFrQjtBQUFBLFVBQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFVBQVlDLFNBQVosU0FBWUEsU0FBWjtBQUFBLFVBQXVCQyxJQUF2QixTQUF1QkEsSUFBdkI7QUFBQSxhQUNoQkMsT0FBTyxDQUFDQyxHQUFSLHFDQUMrQkosT0FEL0IseUJBQ3FEQyxTQURyRCxxQkFDeUVDLElBRHpFLEVBRGdCO0FBQUEsS0FBbEI7QUFLRDs7QUFDRCxNQUFJSixZQUFKLEVBQWtCO0FBQ2hCSyxXQUFPLENBQUNDLEdBQVIsNEJBQWdDTixZQUFoQztBQUNEO0FBQ0YsQ0FYd0IsQ0FBekI7QUFhQSxJQUFNTyxJQUFJLEdBQUdDLHlEQUFVLENBQUNDLElBQVgsQ0FBZ0IsQ0FBQ1osU0FBRCxFQUFZTixRQUFaLENBQWhCLENBQWIsQyxDQUVBOztBQUNBLElBQU1tQixNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFDOUJsQixLQUFHLEVBQUVILGVBRHlCO0FBRTlCc0IsT0FBSyxFQUFFLElBQUlDLDREQUFKLEVBRnVCO0FBRzlCTixNQUFJLEVBQUpBO0FBSDhCLENBQWpCLENBQWY7O0FBTUEsSUFBTU8sS0FBeUIsR0FBRyxTQUE1QkEsS0FBNEIsUUFBOEI7QUFBQSxNQUEzQkMsU0FBMkIsU0FBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFNBQWhCQSxTQUFnQjtBQUM5RCxzQkFDRSxxRUFBQyw2REFBRDtBQUFnQixVQUFNLEVBQUVOLE1BQXhCO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZU0sU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUYsSztBQVFTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHtcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgQXBvbGxvTGluayxcbiAgSHR0cExpbmssXG59IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XG5cbi8qKlxuICogQmFzZXVybCBvZiBnaXRodWJcbiAqL1xuY29uc3QgR0lUSFVCX0JBU0VfVVJMID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWxcIjtcblxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6IEdJVEhVQl9CQVNFX1VSTCxcbiAgaGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfR0lUSFVCX1BFUlNPTkFMX0FDQ0VTU19UT0tFTn1gLFxuICB9LFxufSk7XG5cbi8vIEVycm9yIHBhcnQgb2YgZ3JhcGhxbCBvciBuZXR3b3JrIGVycm9yXG5jb25zdCBlcnJvckxpbmsgPSBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gIGlmIChncmFwaFFMRXJyb3JzKSB7XG4gICAgZ3JhcGhRTEVycm9ycy5tYXAoKHsgbWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoIH0pID0+XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWBcbiAgICAgIClcbiAgICApO1xuICB9XG4gIGlmIChuZXR3b3JrRXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn1gKTtcbiAgfVxufSk7XG5cbmNvbnN0IGxpbmsgPSBBcG9sbG9MaW5rLmZyb20oW2Vycm9yTGluaywgaHR0cExpbmtdKTtcblxuLy8gVXNpbmcgQXBvbGxvIGNsaWVudCBzZXQgdXJsIGFuZCBoZWFkZXIgbGlua1xuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogR0lUSFVCX0JBU0VfVVJMLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgbGluayxcbn0pO1xuXG5jb25zdCBNeUFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})