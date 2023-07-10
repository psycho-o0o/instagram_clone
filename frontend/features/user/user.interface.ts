// User.ts
export interface IUserProps {
  onClickRegister: () => void;
}

// User.slice.ts
export interface IUserState {
  isLogin: boolean;
  loading: boolean;
  error: null | string;
}

export interface IChangeInputPayload {
  key: 'id' | 'pw';
  value: string;
}

export interface ILoginApiProps {
  id: string;
  pw: string;
}

export interface IRegisterApiProps {
  id: string;
  name: string;
  nickName: string;
  pw: string;
}

export interface ICheckApiProps {
  jwt: string;
}

export interface IUserThunkFulfilledProps {
  jwt: string;
}

export interface IUserThunkRejectedProps {
  message: string;
}
