"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./features/user/user.slice.ts + 1 modules
var user_slice = __webpack_require__(513);
// EXTERNAL MODULE: ./features/main/login/login.slice.ts
var login_slice = __webpack_require__(8339);
// EXTERNAL MODULE: ./features/main/register/register.slice.ts
var register_slice = __webpack_require__(9308);
;// CONCATENATED MODULE: ./redux/reducer.ts





const rootReducer = (0,toolkit_.combineReducers)({
    user: user_slice/* default */.ZP,
    login: login_slice/* default */.ZP,
    register: register_slice/* default */.ZP
});
const reducer = (state, action)=>{
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }
    return rootReducer(state, action);
};
/* harmony default export */ const redux_reducer = (rootReducer);

;// CONCATENATED MODULE: ./redux/store.ts



const makeStore = ()=>(0,toolkit_.configureStore)({
        reducer: redux_reducer
    })
;
/* harmony default export */ const store = ((0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore));

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(4833);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
;// CONCATENATED MODULE: ./styles/theme.tsx
const theme = {
    colors: {
        //white
        white: "rgb(255,255,255)",
        //black
        black1: "rgb(0,0,0)",
        black2: "rgb(38, 38, 38)",
        black3: "rgb(54,54,54)",
        // gray
        gray1: "rgb(142,142,142)",
        gray2: "rgb(168,168,168)",
        gray3: "rgb(199, 199, 199)",
        gray4: "rgb(219,219,219)",
        gray5: "rgb(239,239,239)",
        gray6: "rgb(243,243,243)",
        gray7: "rgb(250, 250, 250)",
        //green
        green1: "rgb(88,195,34)",
        green2: "rgb(28,209,79)",
        //blue
        blue1: "rgb(0,149,246)",
        blue2: "rgb(53,121,234)",
        blue3: "rgb(0, 55, 107)",
        blue4: "rgb(224,241,255)",
        blue5: "rgb(245,251,255)",
        //red
        red1: "rgb(255,1,105)",
        red2: "rgb(237,73,86)",
        //purple
        purple: "rgb(118,56,250)"
    }
};
/* harmony default export */ const styles_theme = (theme);

;// CONCATENATED MODULE: ./pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
        theme: styles_theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(store.withRedux(MyApp), (next_i18next_config_default())));


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [367], () => (__webpack_exec__(1492)));
module.exports = __webpack_exports__;

})();