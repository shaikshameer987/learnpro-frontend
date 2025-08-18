import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    id: string;
    email: string;
    name: string;
    is_staff: boolean;
    is_superuser: boolean;
    last_login: string;
    is_active: boolean;
    groups: string[];
    user_permissions: string[];
};

type AuthState = {
    user: User | null;
    // | is a union operator used to mention the value can be any type from these options.
    // user can be User type or null type here.
    loggedIn: boolean;
    loading: boolean;
    error: boolean;
};

const initialState: AuthState = {
    user: null,
    loading: true,
    error: false,
    loggedIn: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticationSuccess: (state, action: PayloadAction<{ user: User }>) => {
            // By default the structure of action object is type -> string and payload -> any.
            // so mentioning PayloadAction<{ user: User; token: string }> will mention the type of payload recevied by loginSuccess reducer.
            // By default PayloadAction will have type -> string also, so we dont need to mention that
            state.loading = false;
            state.user = action.payload.user;
            state.loggedIn = true;
        },
        authenticationFailure: (state) => {
            state.loading = false;
            state.error = true;
            state.loggedIn = false;
        },
        logout: (state) => {
            state.user = null;
            state.loggedIn = false;
        },
    },
});

export const { authenticationSuccess, authenticationFailure, logout } = authSlice.actions;
export default authSlice.reducer;
