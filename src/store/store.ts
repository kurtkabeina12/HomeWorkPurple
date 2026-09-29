import { configureStore } from "@reduxjs/toolkit";
import { saveState } from "./storage";
import { userSLice } from "./user.slice";
import { favoritesSlice } from "./favorites.slice";

export const JWT_PERSISTENT_STATE = 'userData';

export const store = configureStore({
    reducer:{
        user: userSLice.reducer,
        favorites: favoritesSlice.reducer,
    }
});
store.subscribe(() => {
    const state = store.getState();

    saveState(
        {
            jwt: state.user.jwt,
        },
        JWT_PERSISTENT_STATE
    );

    saveState(
        state.favorites,
        "favorites"
    );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;