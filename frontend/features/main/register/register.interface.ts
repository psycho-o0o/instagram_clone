// Register.tsx
export interface IRegisterProps {
    onClickLogIn : () => void
}

// register.slice.ts
export interface IRegisterState {
    id: string;
    name : string;
    nickName : string;
    pw: string;
    error: null | string;
}

export interface IChangeInputPayload {
    key : 'id'|'name'|'nickName'|'pw';
    value: string;
}

export interface IRegisterApiProps {
    id: string;
    name : string;
    nickName : string;
    pw: string;
}

export interface IRegisterThunkFulfilledProps {
    jwt: string;
}

export interface IRegisterThunkRejectedProps {
    message: string;
}
