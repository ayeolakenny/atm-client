import { createSlice } from "@reduxjs/toolkit";
import { AUTH_STORAGE_KEY, TOKEN_STORAGE_KEY } from "../index";

const auth = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem(AUTH_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "")
      : null,
    token: localStorage.getItem(TOKEN_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY) || "")
      : null,
  },

  reducers: {
    setCredentials: (state, action) => {
      const { user, access_token } = action.payload;
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(access_token));
      state.user = user;
      state.token = access_token;
    },
    logout: (state, _action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = auth.actions;

export default auth.reducer;

export const selectCurrentAuthUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;
