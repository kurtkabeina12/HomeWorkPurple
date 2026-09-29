import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export interface FavoritesState {
  idMovies: number[];
}

const initialState: FavoritesState = {
  idMovies: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.idMovies.includes(action.payload)) {
        state.idMovies.push(action.payload);
      }
    },

    removeFavorite: (state, action: PayloadAction<number>) => {
      state.idMovies = state.idMovies.filter(
        (id) => id !== action.payload
      );
    },

    loadFavorites: (state, action: PayloadAction<string>) => {
      const savedFavorites = loadState<FavoritesState>(
        `favorites_${action.payload}`
      );

      state.idMovies = savedFavorites?.idMovies ?? [];
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;