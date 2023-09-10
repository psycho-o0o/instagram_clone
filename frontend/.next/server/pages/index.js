"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next-i18next/serverSideTranslations"
const serverSideTranslations_namespaceObject = require("next-i18next/serverSideTranslations");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "ua-parser-js"
const external_ua_parser_js_namespaceObject = require("ua-parser-js");
var external_ua_parser_js_default = /*#__PURE__*/__webpack_require__.n(external_ua_parser_js_namespaceObject);
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(4833);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(8579);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./redux/hooks.ts + 1 modules
var hooks = __webpack_require__(4348);
// EXTERNAL MODULE: ./features/user/user.slice.ts + 1 modules
var user_slice = __webpack_require__(513);
// EXTERNAL MODULE: ./features/main/login/login.slice.ts
var login_slice = __webpack_require__(8339);
;// CONCATENATED MODULE: external "react-i18next"
const external_react_i18next_namespaceObject = require("react-i18next");
;// CONCATENATED MODULE: ./fragments/Buttons.tsx

const Button1 = external_styled_components_default().button.withConfig({
    componentId: "sc-eaa5ef68-0"
})`
  appearance: none;
  background: 0 0;
  cursor: pointer;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  user-select: none;
  width: auto;
`;

;// CONCATENATED MODULE: ./features/main/login/Login.style.tsx


const LoginWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-0"
})`
  margin-bottom: 10px;
  max-width: 350px;
  width: 100%;

  .top {
    margin-top: 24px;
    flex: 0 0 auto;
  }

  .bottom {
    margin-top: 16px;
    flex: 0 0 auto;
  }
`;
const FacebookLoginButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-1"
})`
  margin: 8px 40px;
  flex: 0 0 auto;
`;
const FacebookLoginButton = external_styled_components_default()(Button1).withConfig({
    componentId: "sc-8336b033-2"
})`
  background-color: ${(props)=>props.colors.blue1
};
  border: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  & > a {
    color: white;
    & > span {
      display: inline-block;
      margin-right: 8px;
      position: relative;
      top: 3px;

      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-size: 440px 411px;
      background-position: -364px -329px;
      background-image: url('/images/sprite/icons2.png');
    }
  }
`;
const OrWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-3"
})`
  margin: 14px 40px 22px;
  flex-direction: row;

  & > div:first-child,
  & > div:last-child {
    background-color: ${(props)=>props.colors.gray4
};
    flex: 1 1 auto;
    height: 1px;
    position: relative;
    top: 0.45em;
  }

  .text {
    color: ${(props)=>props.colors.gray1
};
    flex: 0 0 auto;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 0 18px;
    text-transform: uppercase;
  }
`;
const LoginInputWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-4"
})`
  margin: 0 40px 6px;
`;
const LoginInputWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-5"
})`
  width: 100%;
  color: ${(props)=>props.colors.black2
};
  background: ${(props)=>props.colors.gray7
};
  border: 1px solid ${(props)=>props.colors.gray4
};
  border-radius: 3px;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
const LoginInputLabel = external_styled_components_default().label.withConfig({
    componentId: "sc-8336b033-6"
})`
  flex: 1 0 0;
  min-width: 0;
  height: 36px;
  margin: 0;
  padding: 0;
  position: relative;

  & > span {
    color: ${(props)=>props.colors.gray1
};
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-overflow: ellipsis;
    transform-origin: left;
    white-space: nowrap;
    transition: transform ease-out 0.1s;
    ${(props)=>!props.isEmptyInput && external_styled_components_.css`
        transform: scale(0.83333) translateY(-10px);
      `
}
  }

  & > input {
    font-size: 12px;
    background: ${(props)=>props.colors.gray7
};
    border: 0;
    flex: 1 0 auto;
    margin: 0;
    outline: 0;
    overflow: hidden;
    padding: 14px 0 2px 8px;
    text-overflow: ellipsis;
  }
`;
const ToggleWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-7"
})`
  height: 100%;
  padding-right: 8px;
  flex: 0 0 auto;
`;
const ToggleWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-8"
})`
  margin-left: 8px;
  display: ${(props)=>props.isEmpty !== undefined && props.isEmpty === true ? "none" : "flex"
};

  & > button {
    appearance: none;
    background: 0 0;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-overflow: ellipsis;
    width: auto;
    color: ${(props)=>props.colors.black2
};
    border: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    background-color: transparent;
  }
`;
const ForgotPasswordWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-9"
})`
  padding: 12px 0px;
  margin: 0 40px 8px;
  flex-direction: row;
  justify-content: flex-end;

  .text {
    color: ${(props)=>props.colors.blue1
};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin: -3px 0 -4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
  }
`;
const LoginButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-10"
})`
  margin: 8px 40px;
  flex: 0 0 auto;
`;
const LoginButton = external_styled_components_default().button.withConfig({
    componentId: "sc-8336b033-11"
})`
  ${(props)=>props.isPossibleLogin ? external_styled_components_.css`
          opacity: 1;
          cursor: pointer;
        ` : external_styled_components_.css`
          opacity: 0.3;
          pointer-events: none;
        `
};

  border: 1px solid transparent;
  border-radius: 4px;
  color: ${(props)=>props.colors.white
};
  background-color: ${(props)=>props.colors.blue1
};
  position: relative;
  appearance: none;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  width: auto;
`;
const ErrorWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-12"
})`
  color: ${(props)=>props.colors.red2
};
  display: ${(props)=>props.hide ? "none" : "block"
};
  margin: 10px 40px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;
const SignUpWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-8336b033-13"
})`
  color: ${(props)=>props.colors.gray1
};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin: -3px 0 -4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  align-items: center;
`;
const SignUpWrap = external_styled_components_default().span.withConfig({
    componentId: "sc-8336b033-14"
})`
  margin: 0;
  margin-left: 4px;
  color: ${(props)=>props.colors.blue1
};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;

;// CONCATENATED MODULE: ./features/main/login/Login.tsx








function Login({ onClickRegister  }) {
    const theme = (0,external_styled_components_.useTheme)();
    const { t  } = (0,external_react_i18next_namespaceObject.useTranslation)("login");
    const { 0: showPw , 1: setShowPw  } = (0,external_react_.useState)(false);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { id , pw , error  } = (0,hooks/* useAppSelector */.C)((state)=>({
            id: state.login.id,
            pw: state.login.pw,
            error: state.user.error
        })
    );
    const onChangeInputValue = (0,external_react_.useCallback)((e)=>{
        dispatch((0,login_slice/* changeInput */.OB)({
            key: e.target.name,
            value: e.currentTarget.value
        }));
    }, []);
    const onClickTogglePassword = (0,external_react_.useCallback)(()=>{
        setShowPw((s)=>!s
        );
    }, []);
    const onSubmit = (0,external_react_.useCallback)((e)=>{
        e.preventDefault();
        dispatch((0,user_slice/* LoginApi */.Ig)({
            id,
            pw
        }));
    }, [
        id,
        pw
    ]);
    const errorText = (0,external_react_.useMemo)(()=>{
        if (error === null) return "";
        else return t(error);
    }, [
        error
    ]);
    const isEmptyId = (0,external_react_.useMemo)(()=>{
        return id.length === 0;
    }, [
        id
    ]);
    const isEmptyPw = (0,external_react_.useMemo)(()=>{
        return pw.length === 0;
    }, [
        pw
    ]);
    const isPossibleLogin = (0,external_react_.useMemo)(()=>{
        return id.length > 0 && pw.length >= 6;
    }, [
        id,
        pw
    ]);
    (0,external_react_.useEffect)(()=>{
        return ()=>{
            dispatch((0,login_slice/* reset */.mc)());
        };
    }, [
        login_slice/* reset */.mc
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(LoginWrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(FacebookLoginButtonWrapper, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(FacebookLoginButton, {
                                colors: theme.colors,
                                type: "button",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        t("facebookLogin")
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OrWrapper, {
                            colors: theme.colors,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: t("or")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LoginInputWrapper, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LoginInputWrap, {
                                colors: theme.colors,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LoginInputLabel, {
                                        colors: theme.colors,
                                        isEmptyInput: isEmptyId,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: t("placeholderAboutId")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                "aria-label": t("placeholderAboutId"),
                                                "aria-required": "true",
                                                autoCapitalize: "off",
                                                autoCorrect: "off",
                                                maxLength: 75,
                                                type: "text",
                                                name: "id",
                                                value: id,
                                                onChange: onChangeInputValue
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ToggleWrapper, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LoginInputWrapper, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LoginInputWrap, {
                                colors: theme.colors,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LoginInputLabel, {
                                        colors: theme.colors,
                                        isEmptyInput: isEmptyPw,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: t("placeholderAboutPw")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                "aria-label": t("placeholderAboutPw"),
                                                "aria-required": "true",
                                                autoCapitalize: "off",
                                                autoCorrect: "off",
                                                maxLength: 75,
                                                type: showPw === true ? "text" : "password",
                                                name: "pw",
                                                value: pw,
                                                onChange: onChangeInputValue
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ToggleWrapper, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ToggleWrap, {
                                            colors: theme.colors,
                                            isEmpty: isEmptyPw,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                onClick: onClickTogglePassword,
                                                children: showPw === true ? t("hidePassword") : t("showPassword")
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ForgotPasswordWrapper, {
                            colors: theme.colors,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/accounts/password/reset/",
                                tabIndex: 0,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: t("forgetPassword")
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LoginButtonWrapper, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(LoginButton, {
                                type: "submit",
                                colors: theme.colors,
                                isPossibleLogin: isPossibleLogin,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: t("logIn")
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ErrorWrapper, {
                            hide: error === null,
                            colors: theme.colors,
                            children: errorText
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SignUpWrapper, {
                        colors: theme.colors,
                        onClick: onClickRegister,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                t("signUpText"),
                                /*#__PURE__*/ jsx_runtime_.jsx(SignUpWrap, {
                                    colors: theme.colors,
                                    children: t("signUpButton")
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const login_Login = (Login);

// EXTERNAL MODULE: ./features/main/register/register.slice.ts
var register_slice = __webpack_require__(9308);
;// CONCATENATED MODULE: ./features/main/register/Register.style.tsx


const RegisterWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-0"
})`
  margin-bottom: 10px;
  max-width: 350px;
  width: 100%;

  .top {
    margin-top: 24px;
    flex: 0 0 auto;
  }

  .bottom {
    margin-top: 16px;
    flex: 0 0 auto;
  }
`;
const Register_style_FacebookLoginButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-1"
})`
  margin: 8px 40px;
  flex: 0 0 auto;
`;
const Register_style_FacebookLoginButton = external_styled_components_default()(Button1).withConfig({
    componentId: "sc-9b171a49-2"
})`
  background-color: ${(props)=>props.colors.blue1
};
  border: 1px solid transparent;
  border-radius: 4px;
  position: relative;
  & > a {
    color: white;
    & > span {
      display: inline-block;
      margin-right: 8px;
      position: relative;
      top: 3px;

      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-size: 440px 411px;
      background-position: -364px -329px;
      background-image: url('/images/sprite/icons2.png');
    }
  }
`;
const Register_style_OrWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-3"
})`
  margin: 14px 40px 22px;
  flex-direction: row;

  & > div:first-child,
  & > div:last-child {
    background-color: ${(props)=>props.colors.gray4
};
    flex: 1 1 auto;
    height: 1px;
    position: relative;
    top: 0.45em;
  }

  .text {
    color: ${(props)=>props.colors.gray1
};
    flex: 0 0 auto;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 0 18px;
    text-transform: uppercase;
  }
`;
const RegisterInputWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-4"
})`
  margin: 0 40px 6px;
`;
const RegisterInputWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-5"
})`
  width: 100%;
  color: ${(props)=>props.colors.black2
};
  background: ${(props)=>props.colors.gray7
};
  border: 1px solid ${(props)=>props.colors.gray4
};
  border-radius: 3px;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
const RegisterInputLabel = external_styled_components_default().label.withConfig({
    componentId: "sc-9b171a49-6"
})`
  flex: 1 0 0;
  min-width: 0;
  height: 36px;
  margin: 0;
  padding: 0;
  position: relative;

  & > span {
    color: ${(props)=>props.colors.gray1
};
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-overflow: ellipsis;
    transform-origin: left;
    white-space: nowrap;
    transition: transform ease-out 0.1s;
    ${(props)=>!props.isEmptyInput && external_styled_components_.css`
        transform: scale(0.83333) translateY(-10px);
      `
}
  }

  & > input {
    font-size: 12px;
    background: ${(props)=>props.colors.gray7
};
    border: 0;
    flex: 1 0 auto;
    margin: 0;
    outline: 0;
    overflow: hidden;
    padding: 14px 0 2px 8px;
    text-overflow: ellipsis;
  }
`;
const Register_style_ToggleWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-7"
})`
  height: 100%;
  padding-right: 8px;
  flex: 0 0 auto;
`;
const Register_style_ToggleWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-8"
})`
  margin-left: 8px;
  display: ${(props)=>props.isEmpty !== undefined && props.isEmpty === true ? "none" : "flex"
};

  & > button {
    appearance: none;
    background: 0 0;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-overflow: ellipsis;
    width: auto;
    color: ${(props)=>props.colors.black2
};
    border: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    background-color: transparent;
  }
`;
const Register_style_ForgotPasswordWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-9"
})`
  padding: 12px 0px;
  margin: 0 40px 8px;
  flex-direction: row;
  justify-content: flex-end;

  .text {
    color: ${(props)=>props.colors.blue1
};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin: -3px 0 -4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
  }
`;
const RegisterButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-10"
})`
  margin: 8px 40px;
  flex: 0 0 auto;
`;
const RegisterButton = external_styled_components_default().button.withConfig({
    componentId: "sc-9b171a49-11"
})`
  ${(props)=>props.isPossibleRegister ? external_styled_components_.css`
          opacity: 1;
          cursor: pointer;
        ` : external_styled_components_.css`
          opacity: 0.3;
          pointer-events: none;
        `
};

  border: 1px solid transparent;
  border-radius: 4px;
  color: ${(props)=>props.colors.white
};
  background-color: ${(props)=>props.colors.blue1
};
  position: relative;
  appearance: none;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: inherit;
  width: auto;
`;
const Register_style_ErrorWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-12"
})`
  color: ${(props)=>props.colors.red2
};
  display: ${(props)=>props.hide ? "none" : "block"
};
  margin: 10px 40px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;
const Register_style_LoginWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9b171a49-13"
})`
  color: ${(props)=>props.colors.gray1
};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin: -3px 0 -4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  align-items: center;
`;
const LoginWrap = external_styled_components_default().span.withConfig({
    componentId: "sc-9b171a49-14"
})`
  margin: 0;
  margin-left: 4px;
  color: ${(props)=>props.colors.blue1
};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;

;// CONCATENATED MODULE: ./features/main/register/Register.tsx








function Register({ onClickLogIn  }) {
    const theme = (0,external_styled_components_.useTheme)();
    const { t  } = (0,external_react_i18next_namespaceObject.useTranslation)("register");
    const { 0: showPw , 1: setShowPw  } = (0,external_react_.useState)(false);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { id , name , nickName , pw , error  } = (0,hooks/* useAppSelector */.C)((state)=>({
            id: state.register.id,
            name: state.register.name,
            nickName: state.register.nickName,
            pw: state.register.pw,
            error: state.user.error
        })
    );
    const onChangeInputValue = (0,external_react_.useCallback)((e)=>{
        dispatch((0,register_slice/* changeInput */.OB)({
            key: e.target.name,
            value: e.currentTarget.value
        }));
    }, []);
    const onClickTogglePassword = (0,external_react_.useCallback)(()=>{
        setShowPw((s)=>!s
        );
    }, []);
    const onSubmit = (0,external_react_.useCallback)((e)=>{
        e.preventDefault();
        dispatch((0,user_slice/* RegisterApi */.pk)({
            id,
            name,
            nickName,
            pw
        }));
    }, [
        id,
        name,
        nickName,
        pw
    ]);
    const errorText = (0,external_react_.useMemo)(()=>{
        if (error === null) return "";
        else return t(error);
    }, [
        error
    ]);
    const isEmptyId = (0,external_react_.useMemo)(()=>{
        return id.length === 0;
    }, [
        id
    ]);
    const isEmptyName = (0,external_react_.useMemo)(()=>{
        return name.length === 0;
    }, [
        name
    ]);
    const isEmptyNickName = (0,external_react_.useMemo)(()=>{
        return nickName.length === 0;
    }, [
        nickName
    ]);
    const isEmptyPw = (0,external_react_.useMemo)(()=>{
        return pw.length === 0;
    }, [
        pw
    ]);
    const isPossibleRegister = (0,external_react_.useMemo)(()=>{
        return !isEmptyId && !isEmptyName && !isEmptyNickName && pw.length >= 6;
    }, [
        isEmptyId,
        isEmptyName,
        isEmptyNickName,
        pw
    ]);
    (0,external_react_.useEffect)(()=>{
        return ()=>{
            dispatch((0,register_slice/* reset */.mc)());
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(RegisterWrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Register_style_FacebookLoginButtonWrapper, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Register_style_FacebookLoginButton, {
                                colors: theme.colors,
                                type: "button",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        t("facebookLogin")
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Register_style_OrWrapper, {
                            colors: theme.colors,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: t("or")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RegisterInputWrapper, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterInputWrap, {
                                colors: theme.colors,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterInputLabel, {
                                        colors: theme.colors,
                                        isEmptyInput: isEmptyId,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: t("placeholderAboutId")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                "aria-label": t("placeholderAboutId"),
                                                "aria-required": "true",
                                                autoCapitalize: "off",
                                                autoComplete: "tel",
                                                autoCorrect: "off",
                                                name: "id",
                                                type: "text",
                                                value: id,
                                                onChange: onChangeInputValue
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Register_style_ToggleWrapper, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RegisterInputWrapper, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterInputWrap, {
                                colors: theme.colors,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterInputLabel, {
                                        colors: theme.colors,
                                        isEmptyInput: isEmptyName,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: t("placeholderAboutName")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                "aria-label": t("placeholderAboutName"),
                                                "aria-required": "true",
                                                autoCapitalize: "off",
                                                autoComplete: "tel",
                                                autoCorrect: "off",
                                                name: "name",
                                                type: "text",
                                                value: name,
                                                onChange: onChangeInputValue
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Register_style_ToggleWrapper, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RegisterInputWrapper, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterInputWrap, {
                                colors: theme.colors,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterInputLabel, {
                                        colors: theme.colors,
                                        isEmptyInput: isEmptyNickName,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: t("placeholderAboutNickName")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                "aria-label": t("placeholderAboutNickName"),
                                                "aria-required": "true",
                                                autoCapitalize: "off",
                                                autoComplete: "tel",
                                                autoCorrect: "off",
                                                name: "nickName",
                                                type: "text",
                                                value: nickName,
                                                onChange: onChangeInputValue
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Register_style_ToggleWrapper, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RegisterInputWrapper, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterInputWrap, {
                                colors: theme.colors,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RegisterInputLabel, {
                                        colors: theme.colors,
                                        isEmptyInput: isEmptyPw,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: t("placeholderAboutPassword")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                "aria-label": t("placeholderAboutPassword"),
                                                "aria-required": "true",
                                                autoCapitalize: "off",
                                                autoCorrect: "off",
                                                maxLength: 75,
                                                name: "pw",
                                                type: showPw === true ? "text" : "password",
                                                value: pw,
                                                onChange: onChangeInputValue
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Register_style_ToggleWrapper, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Register_style_ToggleWrap, {
                                            colors: theme.colors,
                                            isEmpty: isEmptyPw,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                onClick: onClickTogglePassword,
                                                children: showPw === true ? t("hidePassword") : t("showPassword")
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RegisterButtonWrapper, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(RegisterButton, {
                                type: "submit",
                                colors: theme.colors,
                                isPossibleRegister: isPossibleRegister,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: t("signUp")
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Register_style_ErrorWrapper, {
                            hide: error === null,
                            colors: theme.colors,
                            children: errorText
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Register_style_LoginWrapper, {
                        colors: theme.colors,
                        onClick: onClickLogIn,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                t("logInText"),
                                /*#__PURE__*/ jsx_runtime_.jsx(LoginWrap, {
                                    colors: theme.colors,
                                    children: t("logInButton")
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const register_Register = (Register);

;// CONCATENATED MODULE: external "@ant-design/icons"
const icons_namespaceObject = require("@ant-design/icons");
;// CONCATENATED MODULE: ./features/main/MobileMain.style.tsx


const StyledMain = external_styled_components_default().main.withConfig({
    componentId: "sc-c0727b73-0"
})`
  min-height: 100vh;
  background-color: #fff;
  flex-grow: 1;
`;
const StyledNav = external_styled_components_default().nav.withConfig({
    componentId: "sc-c0727b73-1"
})`
  margin: 16px 16px 6px;
`;
const StyledArticle = external_styled_components_default().article.withConfig({
    componentId: "sc-c0727b73-2"
})`
  margin: 0 auto;
  padding-bottom: 32px;
  width: 100%;
  max-width: 935px;
  display: flex;
  flex: 1 0 0;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const MainWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-c0727b73-3"
})`
  padding-top: ${(props)=>props.hideTopPadding ? "0px" : "100px"
};
  padding-bottom: 60px;
  max-width: 100%;
  min-width: 350px;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
    padding-bottom: 20px;
    border: 1px solid ${(props)=>props.colors.gray4
};
  }
`;
const LogoWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-c0727b73-4"
})`
  margin-top: 36px;
  margin-bottom: 12px;
  flex: 0 0 auto;
`;
const LogoWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-c0727b73-5"
})`
  cursor: pointer;
  width: 175px;
  height: 51px;
  justify-content: center;
  align-items: center;
`;
const SuggestionWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-c0727b73-6"
})`
  display: ${(props)=>props.hide && "none"
};
  & > .top {
    margin-top: 4px;
    margin-right: 40px;
    margin-left: 40px;
    flex: 0 0 auto;
    & > div {
      text-align: center;
      color: ${(props)=>props.colors.gray1
};
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      margin: -3px 0 -4px;
    }
  }

  & > .middle {
    margin-top: 16px;
    margin-right: 40px;
    margin-left: 40px;
    flex: 0 0 auto;
  }

  & > .bottom {
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;

    font-size: 14px;
    text-align: center;
    text-overflow: ellipsis;
    color: ${(props)=>props.colors.gray1
};

    & > div {
      margin: 0 4px;
      flex: 0 0 auto;
    }
    & > button {
      border: 0;
      padding: 0;
      background: 0 0;
      font-weight: 600;
      color: ${(props)=>props.colors.blue1
};
      display: inline-block;
      cursor: pointer;
    }
  }
`;
const DownLoadAppButton = external_styled_components_default()(Button1).withConfig({
    componentId: "sc-c0727b73-7"
})`
  background-color: ${(props)=>props.colors.blue1
};
  border: 1px solid transparent;
  padding: 12px 18px;
  color: white;
  border-radius: 4px;
`;
const CompanyWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-c0727b73-8"
})`
  margin-bottom: 24px;
  flex: 0 0 auto;
  align-items: center;

  & > span {
    width: 52px;
    height: 26px;
    display: block;
    background-position: -242px -194px;
    background-size: 553px 524px;
    background-image: url('/images/sprite/icons.png');
  }
`;
const LanguageWrapper = external_styled_components_default().span.withConfig({
    componentId: "sc-c0727b73-9"
})`
  color: ${(props)=>props.colors.gray1
};
  font-size: 12px;
  width: 100%;

  select {
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
const LanguageWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-c0727b73-10"
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ArrowWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-c0727b73-11"
})`
  margin-left: 4px;
`;
const ArrowWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-c0727b73-12"
})``;

;// CONCATENATED MODULE: ./features/main/MobileMain.tsx









function MobileMain({ os  }) {
    const theme = (0,external_styled_components_.useTheme)();
    const { t  } = (0,external_next_i18next_.useTranslation)("main");
    const { 0: isClickedLogin , 1: setIsClickedLogin  } = (0,external_react_.useState)(false);
    const { 0: isClickedRegister , 1: setIsClickedRegister  } = (0,external_react_.useState)(false);
    const onChangeLanguage = (0,external_react_.useCallback)((e)=>{
        external_next_i18next_.i18n?.changeLanguage(e.target.value);
    }, [
        external_next_i18next_.i18n
    ]);
    const onClickDownloadApp = (0,external_react_.useCallback)(()=>{
        const [hl, gl] = external_next_i18next_.i18n?.language.split("-");
        const googlePlayUrl = `https://play.google.com/store/apps/details?id=com.instagram.android&hl=${hl}&gl=${gl}`;
        const AppStoreUrl = "https://apps.apple.com/us/app/instagram/id389801252";
        if (window === undefined) {
            return;
        }
        if (os === "iOS") {
            window.open(AppStoreUrl, "__blank");
        } else {
            window.open(googlePlayUrl, "__blank");
        }
    }, [
        external_next_i18next_.i18n?.language
    ]);
    const onClickLogIn = (0,external_react_.useCallback)(()=>{
        setIsClickedLogin(true);
        setIsClickedRegister(false);
    }, []);
    const onClickRegister = (0,external_react_.useCallback)(()=>{
        setIsClickedRegister(true);
        setIsClickedLogin(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledMain, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledNav, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LanguageWrapper, {
                    colors: theme.colors,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LanguageWrap, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: t("selectLanguage")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowWrapper, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowWrap, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.DownOutlined, {})
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            "aria-label": "\uD45C\uC2DC \uC5B8\uC5B4 \uBCC0\uACBD",
                            onChange: onChangeLanguage,
                            value: external_next_i18next_.i18n?.language,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "ko-KR",
                                    children: "\uD55C\uAD6D\uC5B4"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "en-US",
                                    children: "English"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledArticle, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainWrapper, {
                    colors: theme.colors,
                    hideTopPadding: isClickedLogin || isClickedRegister,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LogoWrapper, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(LogoWrap, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/logo/instagram.png",
                                    layout: "fill",
                                    objectFit: "contain",
                                    quality: 100,
                                    priority: true
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SuggestionWrapper, {
                            colors: theme.colors,
                            hide: isClickedLogin || isClickedRegister,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "top",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: t("suggestion")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "middle",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DownLoadAppButton, {
                                        colors: theme.colors,
                                        onClick: onClickDownloadApp,
                                        children: t("downloadApp")
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bottom",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: onClickLogIn,
                                            children: t("logIn")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: t("or")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: onClickRegister,
                                            children: t("signUp")
                                        })
                                    ]
                                })
                            ]
                        }),
                        isClickedLogin && /*#__PURE__*/ jsx_runtime_.jsx(login_Login, {
                            onClickRegister: onClickRegister
                        }),
                        isClickedRegister && /*#__PURE__*/ jsx_runtime_.jsx(register_Register, {
                            onClickLogIn: onClickLogIn
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CompanyWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    "aria-label": "from Meta"
                })
            })
        ]
    });
}
/* harmony default export */ const main_MobileMain = (MobileMain);

;// CONCATENATED MODULE: ./features/common/footer/Footer.style.tsx

const StyledFooter = external_styled_components_default().footer.withConfig({
    componentId: "sc-83ab7e91-0"
})`
  background-color: ${(props)=>props.colors.gray7
};
  padding: 0 16px;
`;
const Footer_style_MainWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-83ab7e91-1"
})`
  margin-bottom: 2px;
  flex: 0 0 auto;
`;
const MainWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-83ab7e91-2"
})`
  margin-top: 24px;
  flex: 0 0 auto;

  & > div {
    flex-wrap: wrap;
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: center;
  }
`;
const TagWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-83ab7e91-3"
})`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 12px;
  flex: 0 0 auto;
`;
const TagWrap = external_styled_components_default().div.withConfig({
    componentId: "sc-83ab7e91-4"
})`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin: -2px 0 -3px;
  color: ${(props)=>props.colors.gray1
};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;

;// CONCATENATED MODULE: ./features/common/footer/Footer.tsx





function Footer() {
    const theme = (0,external_styled_components_.useTheme)();
    const { t  } = (0,external_react_i18next_namespaceObject.useTranslation)("footer");
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledFooter, {
        colors: theme.colors,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Footer_style_MainWrapper, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainWrap, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://about.facebook.com/meta",
                                    rel: "nofollow noopener noreferrer",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("meta")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://about.instagram.com/",
                                    rel: "nofollow noopener noreferrer",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("about")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://about.instagram.com/blog/",
                                    rel: "nofollow noopener noreferrer",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("blog")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/about/jobs/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("jobs")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://help.instagram.com/",
                                    rel: "nofollow noopener noreferrer",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("help")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://developers.facebook.com/docs/instagram",
                                    rel: "nofollow noopener noreferrer",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("api")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/legal/privacy/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("privacy")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/legal/terms/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("terms")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/directory/profiles/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("topAccounts")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/directory/hashtags/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("hashtags")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/explore/locations/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("locations")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/web/lite/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("instgramLite")
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/topics/dance-and-performance/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("dance")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/topics/food-and-drink/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("foodAndDrink")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/topics/home-and-garden/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("homeAndGarden")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/topics/music/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("music")
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/topics/visual-arts/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TagWrap, {
                                        colors: theme.colors,
                                        children: t("visualArts")
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const footer_Footer = (Footer);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./utils/checkJWT.ts




function checkJWT() {
    const router = (0,router_.useRouter)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const { isOnLogin  } = (0,hooks/* useAppSelector */.C)((state)=>({
            isOnLogin: state.user.isOnLogin
        })
    );
    (0,external_react_.useEffect)(()=>{
        const jwt = localStorage.getItem("jwt");
        if (jwt !== null) {
            dispatch((0,user_slice/* CheckApi */.pf)({
                jwt
            }));
        }
        if (isOnLogin) {
            router.push("/home");
        }
    }, [
        isOnLogin
    ]);
    return isOnLogin;
}

;// CONCATENATED MODULE: ./pages/index.tsx









const StyledSection = external_styled_components_default().section.withConfig({
    componentId: "sc-ab8300c0-0"
})`
  min-height: 100vh;
  overflow: hidden;
  flex-grow: 1;
`;
function App({ userAgent  }) {
    const ua = external_ua_parser_js_default()(userAgent);
    const isOnLogin = checkJWT();
    if (isOnLogin) return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledSection, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(main_MobileMain, {
                os: ua.os.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
        ]
    });
}
const getServerSideProps = async ({ req , locale , defaultLocale  })=>({
        props: {
            userAgent: req ? req.headers["user-agent"] : navigator.userAgent,
            ...await (0,serverSideTranslations_namespaceObject.serverSideTranslations)(locale || defaultLocale, [
                "main",
                "login",
                "register",
                "footer"
            ], (next_i18next_config_default()))
        }
    })
;
/* harmony default export */ const pages = (App);


/***/ }),

/***/ 4348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ useAppDispatch),
  "C": () => (/* binding */ useAppSelector)
});

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./redux/hooks.ts

const useAppDispatch = ()=>(0,external_react_redux_namespaceObject.useDispatch)()
; // Export a hook that can be reused to resolve types
const useAppSelector = external_react_redux_namespaceObject.useSelector;


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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [404,579,367], () => (__webpack_exec__(5633)));
module.exports = __webpack_exports__;

})();