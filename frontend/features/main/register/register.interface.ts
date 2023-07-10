// Register.tsx
export interface IRegisterProps {
  onClickLogIn: () => void;
}

// Register.style.tsx
export interface IRegisterInputLabel {
  isEmptyInput: boolean;
}

export interface IToggleWrap {
  isEmpty?: boolean;
}

export interface IRegisterButton {
  isPossibleRegister: boolean;
}

export interface IErrorWrapperProps {
  hide: boolean;
}

// register.slice.ts
export interface IRegisterState {
  id: string;
  name: string;
  nickName: string;
  pw: string;
  error: null | string;
}

export interface IChangeInputPayload {
  key: 'id' | 'name' | 'nickName' | 'pw';
  value: string;
}
