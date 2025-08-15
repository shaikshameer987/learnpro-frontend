export type AuthMode = "login" | "signup";

export type SignUpForm = {
    name: string;
    email: string;
    password: string;
};

export type SignInForm = {
    email: string;
    password: string;
};
