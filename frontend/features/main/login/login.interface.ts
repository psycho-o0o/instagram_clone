// Login.ts
export interface ILoginProps {
  onClickRegister: () => void;
}

// Login.style.ts
export interface ILoginInputLabel {
  isEmptyInput: boolean;
}

export interface IToggleWrap {
  isEmpty?: boolean;
}

export interface ILoginButton {
  isPossibleLogin: boolean;
}

export interface IErrorWrapperProps {
  hide: boolean;
}

// login.slice.ts
export interface ILoginState {
  id: string;
  pw: string;
}

export interface IChangeInputPayload {
  key: 'id' | 'pw';
  value: string;
}
