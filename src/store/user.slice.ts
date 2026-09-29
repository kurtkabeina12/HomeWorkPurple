import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import { Profile } from "../components/interfaces/user.interface";
import { apiHeaders, PREFIX } from "../helpers/Api";

export const JWT_PERSISTENT_STATE = 'userData';
export interface UserPersistentState {
    jwt: string | null;
}

export interface UserState {
    jwt: string | null;
    loginErrorMessage?: string | null;
    profile?: Profile;
}

const initialState: UserState = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
    loginErrorMessage: null,
}

export const login = createAsyncThunk(
    'user/login',
    async () => {

        const response = await fetch(
            `${PREFIX}/authentication/token/new`,
            {
                method: 'GET',
                headers: apiHeaders,
            }
        );


        const data = await response.json();


        if (!response.ok || !data.success || !data.request_token) {
            throw new Error('Не удалось получить токен');
        }

        return data.request_token;
    }
);

export const userSLice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.jwt = null
        },
        clearLoginError: (state) => {
            state.loginErrorMessage = undefined
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.jwt = action.payload;
                state.loginErrorMessage = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.jwt = null;
                state.loginErrorMessage = action.error.message;
            });
    }
})

export default userSLice.reducer;
export const userAction = userSLice.actions;