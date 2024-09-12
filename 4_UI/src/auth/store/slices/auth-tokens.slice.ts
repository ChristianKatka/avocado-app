import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import {
  loginThunk,
  refreshTokensThunk,
  registerThunk,
} from "../thunks/auth-tokens.thunk";
import { includeExistingRefreshTokenWithNewTokens } from "./utils/include-existing-refresh-token-with-new-tokens.util";

export interface AuthTokensState {
  tokens: any;
  decodedAccessToken: any;
}

const initialState: AuthTokensState = {
  tokens: undefined,
  decodedAccessToken: undefined,
};

const authTokensSlice = createSlice({
  name: "auth-tokens",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //LOGIN
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.tokens = action.payload;
        state.decodedAccessToken = jwtDecode(action.payload.AccessToken);
      })

      //REGISTER
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.tokens = action.payload;
        state.decodedAccessToken = jwtDecode(action.payload.AccessToken);
      })

      //REFRESH TOKEN
      // reuse a Refresh Token as long as it is valid (API will tell when its no longer valid)
      // NOTE when updating session/tokens with refresh token api wont return new refresh token
      .addCase(refreshTokensThunk.fulfilled, (state, action) => {
        state.tokens = includeExistingRefreshTokenWithNewTokens(
          state.tokens.RefreshToken,
          action.payload
        );
        state.decodedAccessToken = jwtDecode(action.payload.AccessToken);
      });
  },
});

export const authTokensReducer = authTokensSlice.reducer;
