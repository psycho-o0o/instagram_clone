"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 8339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OB": () => (/* binding */ changeInput),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mc": () => (/* binding */ reset)
/* harmony export */ });
/* unused harmony export loginSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    id: "",
    pw: ""
};
const loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "login",
    initialState,
    reducers: {
        reset: ()=>initialState
        ,
        changeInput: (state, action)=>{
            state[action.payload.key] = action.payload.value;
        }
    }
});
// Action creators are generated for each case reducer function
const { reset , changeInput  } = loginSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer);


/***/ }),

/***/ 9308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OB": () => (/* binding */ changeInput),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mc": () => (/* binding */ reset)
/* harmony export */ });
/* unused harmony export registerSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    id: "",
    name: "",
    nickName: "",
    pw: "",
    error: null
};
const registerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "register",
    initialState,
    reducers: {
        reset: ()=>initialState
        ,
        changeInput: (state, action)=>{
            state[action.payload.key] = action.payload.value;
        }
    }
});
// Action creators are generated for each case reducer function
const { reset , changeInput  } = registerSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerSlice.reducer);


/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pf": () => (/* binding */ CheckApi),
  "Ig": () => (/* binding */ LoginApi),
  "pk": () => (/* binding */ RegisterApi),
  "ZP": () => (/* binding */ user_slice)
});

// UNUSED EXPORTS: LogoutApi, UserSlice

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./utils/axios.ts

const axiosInstance = external_axios_default().create({
    headers: {
        "Content-Type": "application/json"
    }
});
/* harmony default export */ const axios = (axiosInstance);

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./features/user/user.slice.ts


const LoginApi = (0,toolkit_.createAsyncThunk)("user/loginApi", async (data, { rejectWithValue  })=>{
    try {
        const response = await axios.post("/api/users/login", data);
        return response?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
const LogoutApi = (0,toolkit_.createAsyncThunk)("user/logoutApi", async (_, { rejectWithValue  })=>{
    try {
        const data = localStorage.getItem("jwt");
        const response = await axios.post("/api/users/logout", data);
        return response?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
const RegisterApi = (0,toolkit_.createAsyncThunk)("user/registerApi", async (data, { rejectWithValue  })=>{
    try {
        const response = await axios.post("/api/users/register", data);
        return response?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
const CheckApi = (0,toolkit_.createAsyncThunk)("user/checkApi", async (data, { rejectWithValue  })=>{
    try {
        const response = await axios.post("/api/users/check", data);
        return response?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
const initialState = {
    isOnLogin: false,
    loading: true,
    error: null
};
const UserSlice = (0,toolkit_.createSlice)({
    name: "User",
    initialState,
    reducers: {},
    extraReducers: {
        [LoginApi.pending.type]: (state)=>{
            state.error = null;
            state.loading = true;
        },
        [LoginApi.fulfilled.type]: (state, { payload: { jwt  }  })=>{
            state.isOnLogin = true;
            state.loading = false;
            localStorage.setItem("jwt", jwt);
        },
        [LoginApi.rejected.type]: (state, { payload: { message  }  })=>{
            state.error = message;
            state.loading = false;
            state.isOnLogin = false;
        },
        [RegisterApi.pending.type]: (state)=>{
            state.error = null;
            state.loading = true;
        },
        [RegisterApi.fulfilled.type]: (state, { payload: { jwt  }  })=>{
            state.isOnLogin = true;
            state.loading = false;
            localStorage.setItem("jwt", jwt);
        },
        [RegisterApi.rejected.type]: (state, { payload: { message  }  })=>{
            state.error = message;
            state.loading = false;
            state.isOnLogin = false;
        },
        [CheckApi.pending.type]: (state)=>{
            state.error = null;
            state.loading = true;
        },
        [CheckApi.fulfilled.type]: (state)=>{
            state.isOnLogin = true;
            state.loading = false;
        },
        [CheckApi.rejected.type]: (state, { payload: { message  }  })=>{
            state.error = message;
            state.isOnLogin = false;
            state.loading = false;
        }
    }
});
// Action creators are generated for each case reducer function
/* harmony default export */ const user_slice = (UserSlice.reducer);


/***/ }),

/***/ 4833:
/***/ ((module) => {


module.exports = {
    i18n: {
        defaultLocale: "en-US",
        locales: [
            "ko-KR",
            "en-US"
        ]
    }
};


/***/ })

};
;