import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { AuthTokensState } from "../slices/auth-tokens.slice";

const selectAuthTokensState = (state: RootState) => state.authTokens;

export const selectRefreshToken = createSelector(
  [selectAuthTokensState],
  (state: AuthTokensState) => {
    if (!state.tokens) return undefined;

    return state.tokens.RefreshToken;
  }
);
