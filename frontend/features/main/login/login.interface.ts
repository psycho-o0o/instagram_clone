// Login.ts
export interface ILoginProps {
    onClickRegister: () => void;
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
