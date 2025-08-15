import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
// here RootState type is created and exported to use it when we are accessing state of redux store.
// ex:- const { loading, error } = useSelector((state: RootState) => state.auth);

export type AppDispatch = typeof store.dispatch;

// here AppDispatch type is created and exported to use it when we are accessing the dispatch function returned by useDispatch hook.
// const dispatch = useDispatch<AppDispatch>();
