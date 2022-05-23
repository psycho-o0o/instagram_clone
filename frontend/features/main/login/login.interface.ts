export interface ILoginState {
    id: string;
    pw: string;
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

export interface ILoginThunkFulfilledProps {
    jwt: string;
}

export interface ILoginThunkRejectedProps {
    message: string;
}
