import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useTheme } from 'styled-components';
import { reset, changeInput } from './register.slice';
import { IRegisterProps } from './register.interface';
import { RegisterApi } from '@/features/user/user.slice';
import {
  ToggleWrapper,
  FacebookLoginButton,
  FacebookLoginButtonWrapper,
  RegisterButton,
  RegisterButtonWrapper,
  RegisterInputLabel,
  RegisterInputWrap,
  RegisterInputWrapper,
  RegisterWrapper,
  OrWrapper,
  LoginWrap,
  LoginWrapper,
  ToggleWrap,
  ErrorWrapper,
} from './Register.style';

type InputNameType = 'id' | 'pw' | 'nickName' | 'name';

function Register({ onClickLogIn }: IRegisterProps) {
  const theme = useTheme();
  const { t } = useTranslation('register');
  const [showPw, setShowPw] = useState(false);

  const dispatch = useAppDispatch();
  const { id, name, nickName, pw, error } = useAppSelector((state) => ({
    id: state.register.id,
    name: state.register.name,
    nickName: state.register.nickName,
    pw: state.register.pw,
    error: state.user.error,
  }));

  const onChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        changeInput({
          key: e.target.name as InputNameType,
          value: e.currentTarget.value,
        })
      );
    },
    []
  );

  const onClickTogglePassword = useCallback(() => {
    setShowPw((s) => !s);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(
        RegisterApi({
          id,
          name,
          nickName,
          pw,
        })
      );
    },
    [id, name, nickName, pw]
  );

  const errorText = useMemo(() => {
    if (error === null) return '';
    else return t(error);
  }, [error]);

  const isEmptyId = useMemo(() => {
    return id.length === 0;
  }, [id]);

  const isEmptyName = useMemo(() => {
    return name.length === 0;
  }, [name]);

  const isEmptyNickName = useMemo(() => {
    return nickName.length === 0;
  }, [nickName]);

  const isEmptyPw = useMemo(() => {
    return pw.length === 0;
  }, [pw]);

  const isPossibleRegister = useMemo(() => {
    return !isEmptyId && !isEmptyName && !isEmptyNickName && pw.length >= 6;
  }, [isEmptyId, isEmptyName, isEmptyNickName, pw]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <RegisterWrapper>
      <form onSubmit={onSubmit}>
        <div className="top">
          <FacebookLoginButtonWrapper>
            <FacebookLoginButton colors={theme.colors} type="button">
              <a href="">
                <span />
                {t('facebookLogin')}
              </a>
            </FacebookLoginButton>
          </FacebookLoginButtonWrapper>
          <OrWrapper colors={theme.colors}>
            <div />
            <div className="text">{t('or')}</div>
            <div />
          </OrWrapper>
          <RegisterInputWrapper>
            <RegisterInputWrap colors={theme.colors}>
              <RegisterInputLabel
                colors={theme.colors}
                isEmptyInput={isEmptyId}
              >
                <span>{t('placeholderAboutId')}</span>
                <input
                  aria-label={t('placeholderAboutId')}
                  aria-required="true"
                  autoCapitalize="off"
                  autoComplete="tel"
                  autoCorrect="off"
                  name="id"
                  type="text"
                  value={id}
                  onChange={onChangeInputValue}
                />
              </RegisterInputLabel>
              <ToggleWrapper />
            </RegisterInputWrap>
          </RegisterInputWrapper>
          <RegisterInputWrapper>
            <RegisterInputWrap colors={theme.colors}>
              <RegisterInputLabel
                colors={theme.colors}
                isEmptyInput={isEmptyName}
              >
                <span>{t('placeholderAboutName')}</span>
                <input
                  aria-label={t('placeholderAboutName')}
                  aria-required="true"
                  autoCapitalize="off"
                  autoComplete="tel"
                  autoCorrect="off"
                  name="name"
                  type="text"
                  value={name}
                  onChange={onChangeInputValue}
                />
              </RegisterInputLabel>
              <ToggleWrapper />
            </RegisterInputWrap>
          </RegisterInputWrapper>
          <RegisterInputWrapper>
            <RegisterInputWrap colors={theme.colors}>
              <RegisterInputLabel
                colors={theme.colors}
                isEmptyInput={isEmptyNickName}
              >
                <span>{t('placeholderAboutNickName')}</span>
                <input
                  aria-label={t('placeholderAboutNickName')}
                  aria-required="true"
                  autoCapitalize="off"
                  autoComplete="tel"
                  autoCorrect="off"
                  name="nickName"
                  type="text"
                  value={nickName}
                  onChange={onChangeInputValue}
                />
              </RegisterInputLabel>
              <ToggleWrapper />
            </RegisterInputWrap>
          </RegisterInputWrapper>
          <RegisterInputWrapper>
            <RegisterInputWrap colors={theme.colors}>
              <RegisterInputLabel
                colors={theme.colors}
                isEmptyInput={isEmptyPw}
              >
                <span>{t('placeholderAboutPassword')}</span>
                <input
                  aria-label={t('placeholderAboutPassword')}
                  aria-required="true"
                  autoCapitalize="off"
                  autoCorrect="off"
                  maxLength={75}
                  name="pw"
                  type={showPw === true ? 'text' : 'password'}
                  value={pw}
                  onChange={onChangeInputValue}
                />
              </RegisterInputLabel>
              <ToggleWrapper>
                <ToggleWrap colors={theme.colors} isEmpty={isEmptyPw}>
                  <button type="button" onClick={onClickTogglePassword}>
                    {showPw === true ? t('hidePassword') : t('showPassword')}
                  </button>
                </ToggleWrap>
              </ToggleWrapper>
            </RegisterInputWrap>
          </RegisterInputWrapper>
          <RegisterButtonWrapper>
            <RegisterButton
              type="submit"
              colors={theme.colors}
              isPossibleRegister={isPossibleRegister}
            >
              <div className="text">{t('signUp')}</div>
            </RegisterButton>
          </RegisterButtonWrapper>
          <ErrorWrapper hide={error === null} colors={theme.colors}>
            {errorText}
          </ErrorWrapper>
        </div>
        <div className="bottom">
          <LoginWrapper colors={theme.colors} onClick={onClickLogIn}>
            <p>
              {t('logInText')}
              <LoginWrap colors={theme.colors}>{t('logInButton')}</LoginWrap>
            </p>
          </LoginWrapper>
        </div>
      </form>
    </RegisterWrapper>
  );
}

export default Register;
