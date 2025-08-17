import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    id: string;
    email: string;
    name: string;
};

type AuthState = {
    user: User | null;
    // | is a union operator used to mention the value can be any type from these options.
    // user can be User type or null type here.
    loading: boolean;
    error: boolean;
};

const initialState: AuthState = {
    user: null,
    loading: true,
    error: false,
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
        },
        authenticationFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { authenticationSuccess, authenticationFailure, logout } = authSlice.actions;
export default authSlice.reducer;
