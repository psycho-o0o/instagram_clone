// Login.ts
export interface ILoginProps {
    onClickRegister: () => void;
}

// Login.style.ts
interface ILoginInputLabel {
    isEmptyInput: boolean;
}

interface IToggleWrap {
    isEmpty?: boolean;
}

interface ILoginButton {
    isPossibleLogin: boolean;
}

interface IErrorWrapperProps {
    hide : boolean;
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

