webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "E:\\Creative Cloud Files\\_E11\\code\\React\\NextJS\\ninjalist\\components\\Navbar.js",
    _this = undefined;

var Navbar = function Navbar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "logo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Ninja List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "",
      children: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "",
      children: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "",
      children: "Ninjas List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, _this);
};

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\Creative Cloud Files\\_E11\\code\\React\\NextJS\\ninjalist\\pages\\index.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Home Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque rerum quidem quia voluptatem, voluptatum sint unde error iusto consequatur reiciendis corrupti distinctio expedita sed labore? Corrupti vel vero voluptas delectus non! Corporis laudantium culpa inventore illum beatae quas, asperiores optio dolores dignissimos odio?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A incidunt quae, rem necessitatibus minus dolores! Magni, incidunt asperiores?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this) // <div className={styles.container}>
  //   <Head>
  //     <title>Create Next App</title>
  //     <link rel="icon" href="/favicon.ico" />
  //   </Head>
  //   <main className={styles.main}>
  //     <h1 className={styles.title}>
  //       Welcome to <a href="https://nextjs.org">Next.js!</a>
  //     </h1>
  //     <p className={styles.description}>
  //       Get started by editing{' '}
  //       <code className={styles.code}>pages/index.js</code>
  //     </p>
  //     <div className={styles.grid}>
  //       <a href="https://nextjs.org/docs" className={styles.card}>
  //         <h3>Documentation &rarr;</h3>
  //         <p>Find in-depth information about Next.js features and API.</p>
  //       </a>
  //       <a href="https://nextjs.org/learn" className={styles.card}>
  //         <h3>Learn &rarr;</h3>
  //         <p>Learn about Next.js in an interactive course with quizzes!</p>
  //       </a>
  //       <a
  //         href="https://github.com/vercel/next.js/tree/master/examples"
  //         className={styles.card}
  //       >
  //         <h3>Examples &rarr;</h3>
  //         <p>Discover and deploy boilerplate example Next.js projects.</p>
  //       </a>
  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //       >
  //         <h3>Deploy &rarr;</h3>
  //         <p>
  //           Instantly deploy your Next.js site to a public URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  //   <footer className={styles.footer}>
  //     <a
  //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Powered by{' '}
  //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  //     </a>
  //   </footer>
  // </div>
  ;
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSTtBQUFHLFVBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFLSTtBQUFHLFVBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFNSTtBQUFHLFVBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQVhEOztLQUFNQSxNO0FBYVNBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLHNCQUdNO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhOLENBU0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEVGO0FBb0VEO0tBckV1QkEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDZmZGExZDZlY2YzYTFjMDY4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+TmluamEgTGlzdDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIlwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiXCI+TmluamFzIExpc3Q8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIFxuICAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxoMT5Ib21lIFBhZ2U8L2gxPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpIGF0cXVlIHJlcnVtIHF1aWRlbSBxdWlhIHZvbHVwdGF0ZW0sIHZvbHVwdGF0dW0gc2ludCB1bmRlIGVycm9yIGl1c3RvIGNvbnNlcXVhdHVyIHJlaWNpZW5kaXMgY29ycnVwdGkgZGlzdGluY3RpbyBleHBlZGl0YSBzZWQgbGFib3JlPyBDb3JydXB0aSB2ZWwgdmVybyB2b2x1cHRhcyBkZWxlY3R1cyBub24hIENvcnBvcmlzIGxhdWRhbnRpdW0gY3VscGEgaW52ZW50b3JlIGlsbHVtIGJlYXRhZSBxdWFzLCBhc3BlcmlvcmVzIG9wdGlvIGRvbG9yZXMgZGlnbmlzc2ltb3Mgb2Rpbz88L3A+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gQSBpbmNpZHVudCBxdWFlLCByZW0gbmVjZXNzaXRhdGlidXMgbWludXMgZG9sb3JlcyEgTWFnbmksIGluY2lkdW50IGFzcGVyaW9yZXM/PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgLy8gICA8SGVhZD5cbiAgICAvLyAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgLy8gICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAvLyAgIDwvSGVhZD5cblxuICAgIC8vICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgLy8gICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgLy8gICAgICAgV2VsY29tZSB0byA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnXCI+TmV4dC5qcyE8L2E+XG4gICAgLy8gICAgIDwvaDE+XG5cbiAgICAvLyAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgIC8vICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmd7JyAnfVxuICAgIC8vICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PnBhZ2VzL2luZGV4LmpzPC9jb2RlPlxuICAgIC8vICAgICA8L3A+XG5cbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAvLyAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3NcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAvLyAgICAgICAgIDxoMz5Eb2N1bWVudGF0aW9uICZyYXJyOzwvaDM+XG4gICAgLy8gICAgICAgICA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+XG4gICAgLy8gICAgICAgPC9hPlxuXG4gICAgLy8gICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgIC8vICAgICAgICAgPGgzPkxlYXJuICZyYXJyOzwvaDM+XG4gICAgLy8gICAgICAgICA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPlxuICAgIC8vICAgICAgIDwvYT5cblxuICAgIC8vICAgICAgIDxhXG4gICAgLy8gICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzXCJcbiAgICAvLyAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgLy8gICAgICAgPlxuICAgIC8vICAgICAgICAgPGgzPkV4YW1wbGVzICZyYXJyOzwvaDM+XG4gICAgLy8gICAgICAgICA8cD5EaXNjb3ZlciBhbmQgZGVwbG95IGJvaWxlcnBsYXRlIGV4YW1wbGUgTmV4dC5qcyBwcm9qZWN0cy48L3A+XG4gICAgLy8gICAgICAgPC9hPlxuXG4gICAgLy8gICAgICAgPGFcbiAgICAvLyAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vbmV3P3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAvLyAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgLy8gICAgICAgPlxuICAgIC8vICAgICAgICAgPGgzPkRlcGxveSAmcmFycjs8L2gzPlxuICAgIC8vICAgICAgICAgPHA+XG4gICAgLy8gICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgIC8vICAgICAgICAgPC9wPlxuICAgIC8vICAgICAgIDwvYT5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICA8L21haW4+XG5cbiAgICAvLyAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAvLyAgICAgPGFcbiAgICAvLyAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAvLyAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgIC8vICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgIC8vICAgICA+XG4gICAgLy8gICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgLy8gICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAvLyAgICAgPC9hPlxuICAgIC8vICAgPC9mb290ZXI+XG4gICAgLy8gPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=