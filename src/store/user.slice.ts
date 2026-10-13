import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import { Profile } from "../components/interfaces/user.interface";
import { apiHeaders, PREFIX } from "../helpers/Api";

export const JWT_PERSISTENT_STATE = "userData";

export interface UserPersistentState {
  jwt: string | null;
  profile?: Profile;
}

export interface UserState {
  jwt: string | null;
  loginErrorMessage?: string | null;
  profile?: Profile;
}

const savedState = loadState<UserPersistentState>(
  JWT_PERSISTENT_STATE
);

const initialState: UserState = {
  jwt: savedState?.jwt ?? null,
  profile: savedState?.profile,
  loginErrorMessage: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (userName: string) => {
    const response = await fetch(
      `${PREFIX}/authentication/token/new`,
      {
        method: "GET",
        headers: apiHeaders,
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success || !data.request_token) {
      throw new Error("Не удалось получить токен");
    }

    return {
      token: data.request_token,
      userName,
    };
  }
);

export const userSLice = createSlice({
  name: "user",

  initialState,

  reducers: {
    logout: (state) => {
      state.jwt = null;
      state.profile = undefined;
    },

    clearLoginError: (state) => {
      state.loginErrorMessage = undefined;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        state.jwt = null;
        state.profile = undefined;
        state.loginErrorMessage = action.error.message;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.jwt = action.payload.token;

        state.profile = {
          id: 0,
          userName: action.payload.userName,
          isLogined: true,
        };

        state.loginErrorMessage = null;
      });
  },
});

export default userSLice.reducer;

export const userAction = userSLice.actions;