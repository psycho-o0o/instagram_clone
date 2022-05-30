import styled, { css, DefaultTheme } from 'styled-components';
import { Button1 } from '@/fragments/Buttons';
import {
  IRegisterInputLabel,
  IToggleWrap,
  IRegisterButton,
  IErrorWrapperProps,
} from './register.interface';

export const RegisterWrapper = styled.div`
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
export const FacebookLoginButtonWrapper = styled.div`
  margin: 8px 40px;
  flex: 0 0 auto;
`;
export const FacebookLoginButton = styled(Button1)<DefaultTheme>`
  background-color: ${(props) => props.colors.blue1};
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

export const OrWrapper = styled.div<DefaultTheme>`
  margin: 14px 40px 22px;
  flex-direction: row;

  & > div:first-child,
  & > div:last-child {
    background-color: ${(props) => props.colors.gray4};
    flex: 1 1 auto;
    height: 1px;
    position: relative;
    top: 0.45em;
  }

  .text {
    color: ${(props) => props.colors.gray1};
    flex: 0 0 auto;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 0 18px;
    text-transform: uppercase;
  }
`;

export const RegisterInputWrapper = styled.div`
  margin: 0 40px 6px;
`;
export const RegisterInputWrap = styled.div<DefaultTheme>`
  width: 100%;
  color: ${(props) => props.colors.black2};
  background: ${(props) => props.colors.gray7};
  border: 1px solid ${(props) => props.colors.gray4};
  border-radius: 3px;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
export const RegisterInputLabel = styled.label<
  IRegisterInputLabel & DefaultTheme
>`
  flex: 1 0 0;
  min-width: 0;
  height: 36px;
  margin: 0;
  padding: 0;
  position: relative;

  & > span {
    color: ${(props) => props.colors.gray1};
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
    ${(props) =>
      !props.isEmptyInput &&
      css`
        transform: scale(0.83333) translateY(-10px);
      `}
  }

  & > input {
    font-size: 12px;
    background: ${(props) => props.colors.gray7};
    border: 0;
    flex: 1 0 auto;
    margin: 0;
    outline: 0;
    overflow: hidden;
    padding: 14px 0 2px 8px;
    text-overflow: ellipsis;
  }
`;

export const ToggleWrapper = styled.div`
  height: 100%;
  padding-right: 8px;
  flex: 0 0 auto;
`;

export const ToggleWrap = styled.div<IToggleWrap & DefaultTheme>`
  margin-left: 8px;
  display: ${(props) =>
    props.isEmpty !== undefined && props.isEmpty === true ? 'none' : 'flex'};

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
    color: ${(props) => props.colors.black2};
    border: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    background-color: transparent;
  }
`;

export const ForgotPasswordWrapper = styled.div<DefaultTheme>`
  padding: 12px 0px;
  margin: 0 40px 8px;
  flex-direction: row;
  justify-content: flex-end;

  .text {
    color: ${(props) => props.colors.blue1};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin: -3px 0 -4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
  }
`;

export const RegisterButtonWrapper = styled.div`
  margin: 8px 40px;
  flex: 0 0 auto;
`;
export const RegisterButton = styled.button<IRegisterButton & DefaultTheme>`
  ${(props) =>
    props.isPossibleRegister
      ? css`
          opacity: 1;
          cursor: pointer;
        `
      : css`
          opacity: 0.3;
          pointer-events: none;
        `};

  border: 1px solid transparent;
  border-radius: 4px;
  color: ${(props) => props.colors.white};
  background-color: ${(props) => props.colors.blue1};
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

export const ErrorWrapper = styled.div<IErrorWrapperProps & DefaultTheme>`
  color: ${(props) => props.colors.red2};
  display: ${(props) => (props.hide ? 'none' : 'block')};
  margin: 10px 40px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

export const LoginWrapper = styled.div<DefaultTheme>`
  color: ${(props) => props.colors.gray1};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin: -3px 0 -4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  align-items: center;
`;

export const LoginWrap = styled.span<DefaultTheme>`
  margin: 0;
  margin-left: 4px;
  color: ${(props) => props.colors.blue1};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;
