import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export interface FavoritesState {
    idMovies: number[];
}

const savedFavorites = loadState<FavoritesState>("favorites");

const initialState: FavoritesState = {
    idMovies: savedFavorites?.idMovies ?? [],
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
    },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;