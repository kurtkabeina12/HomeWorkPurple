import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { loadState } from "./storage";
import {
  login,
  userAction,
  JWT_PERSISTENT_STATE,
  type UserPersistentState,
} from "./user.slice";

export interface FavoritesState {
  idMovies: number[];
}

const savedUserName =
  loadState<UserPersistentState>(
    JWT_PERSISTENT_STATE
  )?.profile?.userName;

const initialState: FavoritesState = {
  idMovies: savedUserName
    ? loadState<FavoritesState>(
        `favorites_${savedUserName}`
      )?.idMovies ?? []
    : [],
};

export const favoritesSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    addFavorite: (
      state,
      action: PayloadAction<number>
    ) => {
      if (!state.idMovies.includes(action.payload)) {
        state.idMovies.push(action.payload);
      }
    },

    removeFavorite: (
      state,
      action: PayloadAction<number>
    ) => {
      state.idMovies = state.idMovies.filter(
        (id) => id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const savedFavorites =
          loadState<FavoritesState>(
            `favorites_${action.payload.userName}`
          );

        state.idMovies =
          savedFavorites?.idMovies ?? [];
      })

      .addCase(userAction.logout, (state) => {
        state.idMovies = [];
      });
  },
});

export const favoritesActions =
  favoritesSlice.actions;

export default favoritesSlice.reducer;