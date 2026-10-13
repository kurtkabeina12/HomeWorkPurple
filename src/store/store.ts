import { configureStore } from "@reduxjs/toolkit";
import { saveState } from "./storage";
import userReducer from "./user.slice";
import favoritesReducer from "./favorites.slice";

export const JWT_PERSISTENT_STATE = "userData";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  saveState(
    {
      jwt: state.user.jwt,
      profile: state.user.profile,
    },
    JWT_PERSISTENT_STATE
  );

  const userName = state.user.profile?.userName;

  if (userName) {
    saveState(
      state.favorites,
      `favorites_${userName}`
    );
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;