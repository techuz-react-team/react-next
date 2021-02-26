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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/createNewRepo.tsx":
/*!**************************************!*\
  !*** ./components/createNewRepo.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/var/www/html/react-test-ashish/react-next/components/createNewRepo.tsx\";\n\nconst CreateRepo = ({}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \" create repo\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateRepo); // import React from \"react\";\n// import { Formik, ErrorMessage } from \"formik\";\n// import { Input, Button, Form } from \"antd\";\n// import * as Yup from \"yup\";\n// const CreateRepo: React.FC<any> = ({}) => {\n//   const createRepo = Yup.object().shape({\n//     name: Yup.string().required(\"Repository name is required\"),\n//     visibility: Yup.string().required(\"Visibility is required\"),\n//   });\n// \tconst handleSubmit = (data: any) => {\n// \t\t// this.props.login(data);\n//   };\n//   return (\n//     <div className=\"container-body\">\n//       <Formik\n//         initialValues={{\n//           name: \"\",\n//           visibility: \"\",\n//         }}\n//         validationSchema={createRepo}\n//         onSubmit={handleSubmit}\n//         render={({ handleSubmit, handleChange, values }) => (\n//           <Form onSubmit={handleSubmit}>\n//             <Form.Item>\n//               <Input\n//                 type=\"text\"\n//                 onChange={handleChange}\n//                 value={values.name}\n//                 name=\"name\"\n//                 placeholder=\"Enter Repo Name\"\n//               />\n//               <ErrorMessage bottom component={ErrorBlock} name=\"email\" />\n//             </Form.Item>\n//             <Form.Item>\n//               <Input\n//                 type=\"password\"\n//                 onChange={handleChange}\n//                 value={values.password}\n//                 name=\"password\"\n//                 placeholder=\"Password\"\n//               />\n//               <ErrorMessage bottom component={ErrorBlock} name=\"password\" />\n//             </Form.Item>\n//             <Button htmlType=\"submit\" className=\"btn\" type=\"primary\">\n//               Signin\n//             </Button>\n//           </Form>\n//         )}\n//       />\n//       <hr className=\"divider\" />\n//       <div className=\"form-group\">\n//         <div className=\"forgot-part text-right\">\n//           <span className=\"forgot\" onClick={onRegister}>\n//             Register your account?\n//           </span>\n//         </div>\n//       </div>\n//     </div>\n//   );\n// };\n// export default CreateRepo;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZU5ld1JlcG8udHN4PzRkYjIiXSwibmFtZXMiOlsiQ3JlYXRlUmVwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsVUFBeUIsR0FBRyxDQUFDLEVBQUQsS0FBUTtBQUN4QyxzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBR0QsQ0FKRDs7QUFLZUEseUVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jcmVhdGVOZXdSZXBvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENyZWF0ZVJlcG86IFJlYWN0LkZDPGFueT4gPSAoe30pID0+IHsgXG4gIHJldHVybihcbiAgICA8ZGl2PiBjcmVhdGUgcmVwbzwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDcmVhdGVSZXBvO1xuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBGb3JtaWssIEVycm9yTWVzc2FnZSB9IGZyb20gXCJmb3JtaWtcIjtcbi8vIGltcG9ydCB7IElucHV0LCBCdXR0b24sIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xuLy8gaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcblxuLy8gY29uc3QgQ3JlYXRlUmVwbzogUmVhY3QuRkM8YW55PiA9ICh7fSkgPT4ge1xuLy8gICBjb25zdCBjcmVhdGVSZXBvID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbi8vICAgICBuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXBvc2l0b3J5IG5hbWUgaXMgcmVxdWlyZWRcIiksXG4vLyAgICAgdmlzaWJpbGl0eTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiVmlzaWJpbGl0eSBpcyByZXF1aXJlZFwiKSxcbi8vICAgfSk7XG5cbi8vIFx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGRhdGE6IGFueSkgPT4ge1xuLy8gXHRcdC8vIHRoaXMucHJvcHMubG9naW4oZGF0YSk7XG4vLyAgIH07XG4gIFxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWJvZHlcIj5cbi8vICAgICAgIDxGb3JtaWtcbi8vICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuLy8gICAgICAgICAgIG5hbWU6IFwiXCIsXG4vLyAgICAgICAgICAgdmlzaWJpbGl0eTogXCJcIixcbi8vICAgICAgICAgfX1cbi8vICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17Y3JlYXRlUmVwb31cbi8vICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbi8vICAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgdmFsdWVzIH0pID0+IChcbi8vICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbi8vICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4vLyAgICAgICAgICAgICAgIDxJbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuLy8gICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cbi8vICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZXBvIE5hbWVcIlxuLy8gICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIGJvdHRvbSBjb21wb25lbnQ9e0Vycm9yQmxvY2t9IG5hbWU9XCJlbWFpbFwiIC8+XG4vLyAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbi8vICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4vLyAgICAgICAgICAgICAgIDxJbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbi8vICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxuLy8gICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgYm90dG9tIGNvbXBvbmVudD17RXJyb3JCbG9ja30gbmFtZT1cInBhc3N3b3JkXCIgLz5cbi8vICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuLy8gICAgICAgICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJwcmltYXJ5XCI+XG4vLyAgICAgICAgICAgICAgIFNpZ25pblxuLy8gICAgICAgICAgICAgPC9CdXR0b24+XG4vLyAgICAgICAgICAgPC9Gb3JtPlxuLy8gICAgICAgICApfVxuLy8gICAgICAgLz5cbi8vICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdvdC1wYXJ0IHRleHQtcmlnaHRcIj5cbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3Jnb3RcIiBvbkNsaWNrPXtvblJlZ2lzdGVyfT5cbi8vICAgICAgICAgICAgIFJlZ2lzdGVyIHlvdXIgYWNjb3VudD9cbi8vICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBDcmVhdGVSZXBvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/createNewRepo.tsx\n");

/***/ }),

/***/ "./components/profile.tsx":
/*!********************************!*\
  !*** ./components/profile.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/queries */ \"./queries/queries.js\");\n\nvar _jsxFileName = \"/var/www/html/react-test-ashish/react-next/components/profile.tsx\";\n\n\n\n\nconst Profile = ({}) => {\n  var _data$viewer, _data$viewer2;\n\n  const {\n    loading,\n    data\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_queries_queries__WEBPACK_IMPORTED_MODULE_3__[\"GET_PROFILE\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"topnav\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"search-container\",\n      children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Username: \", data === null || data === void 0 ? void 0 : (_data$viewer = data.viewer) === null || _data$viewer === void 0 ? void 0 : _data$viewer.login, \" || Email: \", data === null || data === void 0 ? void 0 : (_data$viewer2 = data.viewer) === null || _data$viewer2 === void 0 ? void 0 : _data$viewer2.email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile); // import React from \"react\";\n// import { useQuery } from \"@apollo/client\";\n// import { GET_PROFILE } from \"../queries/queries\";\n// import PropTypes from \"prop-types\";\n// const Profile = () => {\n//   const { loading, data } = useQuery(GET_PROFILE);\n//   return (\n//     <div className=\"topnav\">\n//       <div className=\"search-container\">\n//           { loading\n//           ? (<p>Loading...</p>)\n//           : (<p>Username: {data?.viewer?.login} || Email: {data?.viewer?.email}</p>)\n//           }\n//         <p>\n//         </p>\n//       </div>\n//     </div>\n//   );\n// };\n// Profile.propTypes = {\n//   data: PropTypes.objectOf(\n//     PropTypes.shape({\n//       login: PropTypes.string,\n//       email: PropTypes.string,\n//     })\n//   ),\n// };\n// export default Profile;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUudHN4PzdhNDciXSwibmFtZXMiOlsiUHJvZmlsZSIsImxvYWRpbmciLCJkYXRhIiwidXNlUXVlcnkiLCJHRVRfUFJPRklMRSIsInZpZXdlciIsImxvZ2luIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBc0IsR0FBRyxDQUFDLEVBQUQsS0FBUztBQUFBOztBQUV0QyxRQUFNO0FBQUVDLFdBQUY7QUFBV0M7QUFBWCxNQUFvQkMsK0RBQVEsQ0FBV0MsNERBQVgsQ0FBbEM7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSxpQkFDR0gsT0FBTyxnQkFDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETSxnQkFHTjtBQUFBLGlDQUNhQyxJQURiLGFBQ2FBLElBRGIsdUNBQ2FBLElBQUksQ0FBRUcsTUFEbkIsaURBQ2EsYUFBY0MsS0FEM0IsaUJBQzZDSixJQUQ3QyxhQUM2Q0EsSUFEN0Msd0NBQzZDQSxJQUFJLENBQUVHLE1BRG5ELGtEQUM2QyxjQUFjRSxLQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELENBbEJEOztBQW9CZVAsc0VBQWYsRSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9maWxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElQcm9maWxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgR0VUX1BST0ZJTEUgfSBmcm9tIFwiLi4vcXVlcmllcy9xdWVyaWVzXCI7XG5cbmNvbnN0IFByb2ZpbGU6IFJlYWN0LkZDPGFueT4gPSAoeyB9KSA9PiB7XG4gIFxuICBjb25zdCB7IGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5PElQcm9maWxlPihHRVRfUFJPRklMRSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcG5hdlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBVc2VybmFtZToge2RhdGE/LnZpZXdlcj8ubG9naW59IHx8IEVtYWlsOiB7ZGF0YT8udmlld2VyPy5lbWFpbH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICAgIDxwPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcblxuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuLy8gaW1wb3J0IHsgR0VUX1BST0ZJTEUgfSBmcm9tIFwiLi4vcXVlcmllcy9xdWVyaWVzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8vIGNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XG5cbi8vICAgY29uc3QgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUFJPRklMRSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcG5hdlwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4vLyAgICAgICAgICAgeyBsb2FkaW5nXG4vLyAgICAgICAgICAgPyAoPHA+TG9hZGluZy4uLjwvcD4pXG4vLyAgICAgICAgICAgOiAoPHA+VXNlcm5hbWU6IHtkYXRhPy52aWV3ZXI/LmxvZ2lufSB8fCBFbWFpbDoge2RhdGE/LnZpZXdlcj8uZW1haWx9PC9wPilcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIDxwPlxuLy8gICAgICAgICA8L3A+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIFByb2ZpbGUucHJvcFR5cGVzID0ge1xuLy8gICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0T2YoXG4vLyAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICAgIGxvZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuLy8gICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4vLyAgICAgfSlcbi8vICAgKSxcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile.tsx\n");

/***/ }),

/***/ "./components/repository.tsx":
/*!***********************************!*\
  !*** ./components/repository.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/queries */ \"./queries/queries.js\");\n\nvar _jsxFileName = \"/var/www/html/react-test-ashish/react-next/components/repository.tsx\";\n\n\n\n\nconst Repository = ({}) => {\n  var _data$viewer, _data$viewer$reposito;\n\n  const {\n    data\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_queries_queries__WEBPACK_IMPORTED_MODULE_3__[\"GET_REPOSITORIES\"]);\n  const repoList = data === null || data === void 0 ? void 0 : (_data$viewer = data.viewer) === null || _data$viewer === void 0 ? void 0 : (_data$viewer$reposito = _data$viewer.repositories) === null || _data$viewer$reposito === void 0 ? void 0 : _data$viewer$reposito.nodes;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"footer\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"All Repositories\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: (repoList || []).map((repo, index) => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: repo.name\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 18\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repository);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlcG9zaXRvcnkudHN4P2YzZDMiXSwibmFtZXMiOlsiUmVwb3NpdG9yeSIsImRhdGEiLCJ1c2VRdWVyeSIsIkdFVF9SRVBPU0lUT1JJRVMiLCJyZXBvTGlzdCIsInZpZXdlciIsInJlcG9zaXRvcmllcyIsIm5vZGVzIiwibWFwIiwicmVwbyIsImluZGV4IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFHQSxNQUFNQSxVQUF5QixHQUFHLENBQUMsRUFBRCxLQUFVO0FBQUE7O0FBRTFDLFFBQU07QUFBRUM7QUFBRixNQUFXQywrREFBUSxDQUFDQyxpRUFBRCxDQUF6QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0gsSUFBSCxhQUFHQSxJQUFILHVDQUFHQSxJQUFJLENBQUVJLE1BQVQsMEVBQUcsYUFBY0MsWUFBakIsMERBQUcsc0JBQTRCQyxLQUE3QztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsZ0JBQ0csQ0FBQ0gsUUFBUSxJQUFJLEVBQWIsRUFBa0JJLEdBQWxCLENBQXNCLENBQUNDLElBQUQsRUFBY0MsS0FBZCxLQUE2QjtBQUNsRCw0QkFBTztBQUFBLG9CQUFpQkQsSUFBSSxDQUFDRTtBQUF0QixXQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBZkQ7O0FBaUJlVix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVwb3NpdG9yeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZXBvTGlzdFByb3BzLCBSZXBvcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdFVF9SRVBPU0lUT1JJRVMgfSBmcm9tIFwiLi4vcXVlcmllcy9xdWVyaWVzXCI7XG5cblxuY29uc3QgUmVwb3NpdG9yeTogUmVhY3QuRkM8YW55PiA9ICh7ICB9KSA9PiB7XG4gICAgXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFUE9TSVRPUklFUyk7XG4gIGNvbnN0IHJlcG9MaXN0ID0gZGF0YT8udmlld2VyPy5yZXBvc2l0b3JpZXM/Lm5vZGVzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxoMz5BbGwgUmVwb3NpdG9yaWVzPC9oMz5cbiAgICAgIDx1bD5cbiAgICAgICAgeyhyZXBvTGlzdCB8fCBbXSApLm1hcCgocmVwbzogUmVwb3MsIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PntyZXBvLm5hbWV9PC9saT47XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9zaXRvcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/repository.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/profile */ \"./components/profile.tsx\");\n/* harmony import */ var _components_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/repository */ \"./components/repository.tsx\");\n/* harmony import */ var _components_createNewRepo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/createNewRepo */ \"./components/createNewRepo.tsx\");\n\nvar _jsxFileName = \"/var/www/html/react-test-ashish/react-next/pages/index.tsx\";\n\n\n\n\nfunction IndexPage({}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_createNewRepo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_repository__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3BDLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDhCQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9maWxlJ1xuaW1wb3J0IFJlcG9zaXRvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9yZXBvc2l0b3J5J1xuaW1wb3J0IENyZWF0ZVJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9jcmVhdGVOZXdSZXBvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2Uoe30pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8UHJvZmlsZSAvPlxuICAgICAgICA8Q3JlYXRlUmVwbyAvPlxuICAgICAgICA8UmVwb3NpdG9yeSAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./queries/queries.js":
/*!****************************!*\
  !*** ./queries/queries.js ***!
  \****************************/
/*! exports provided: GET_PROFILE, GET_REPOSITORIES, CREATE_REPO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PROFILE\", function() { return GET_PROFILE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_REPOSITORIES\", function() { return GET_REPOSITORIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_REPO\", function() { return CREATE_REPO; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_PROFILE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  query getProfile {\n    viewer {\n      login\n      email\n    }\n  }\n`;\nconst GET_REPOSITORIES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  query getRepositories {\n    viewer {\n      repositories(first: 100) {\n        totalCount\n        nodes {\n          name\n          # owner {\n          #   login\n          # }\n        }\n      }\n    }\n  }\n`;\nconst CREATE_REPO = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  mutation createRepo($name: String!, $visibility: RepositoryVisibility!) {\n    createRepository(input: { name: $name, visibility: $visibility }) {\n      clientMutationId\n      repository {\n        id\n        nameWithOwner\n      }\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9xdWVyaWVzL3F1ZXJpZXMuanM/YmQ2MiJdLCJuYW1lcyI6WyJHRVRfUFJPRklMRSIsImdxbCIsIkdFVF9SRVBPU0lUT1JJRVMiLCJDUkVBVEVfUkVQTyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLGtEQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFTQSxNQUFNQyxnQkFBZ0IsR0FBR0Qsa0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRBO0FBZ0JBLE1BQU1FLFdBQVcsR0FBR0Ysa0RBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWQSIsImZpbGUiOiIuL3F1ZXJpZXMvcXVlcmllcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBHRVRfUFJPRklMRSA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZmlsZSB7XG4gICAgdmlld2VyIHtcbiAgICAgIGxvZ2luXG4gICAgICBlbWFpbFxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR0VUX1JFUE9TSVRPUklFUyA9IGdxbGBcbiAgcXVlcnkgZ2V0UmVwb3NpdG9yaWVzIHtcbiAgICB2aWV3ZXIge1xuICAgICAgcmVwb3NpdG9yaWVzKGZpcnN0OiAxMDApIHtcbiAgICAgICAgdG90YWxDb3VudFxuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgICMgb3duZXIge1xuICAgICAgICAgICMgICBsb2dpblxuICAgICAgICAgICMgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBDUkVBVEVfUkVQTyA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlUmVwbygkbmFtZTogU3RyaW5nISwgJHZpc2liaWxpdHk6IFJlcG9zaXRvcnlWaXNpYmlsaXR5ISkge1xuICAgIGNyZWF0ZVJlcG9zaXRvcnkoaW5wdXQ6IHsgbmFtZTogJG5hbWUsIHZpc2liaWxpdHk6ICR2aXNpYmlsaXR5IH0pIHtcbiAgICAgIGNsaWVudE11dGF0aW9uSWRcbiAgICAgIHJlcG9zaXRvcnkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lV2l0aE93bmVyXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBHRVRfUFJPRklMRSwgR0VUX1JFUE9TSVRPUklFUywgQ1JFQVRFX1JFUE8gfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./queries/queries.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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