export interface UserType {
    email?: string;
    password?: string;
    token?: string;
}

export interface ContextType extends UserType {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}
