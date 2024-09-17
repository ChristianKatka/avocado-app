import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { AuthTokensState } from "../slices/auth-tokens.slice";
import { AuthUiState } from "../slices/auth-ui.slice";

const selectAuthTokensState = (state: RootState) => state.authTokens;
const selectAuthUiState = (state: RootState) => state.authUi;

export const selectRefreshToken = createSelector(
  [selectAuthTokensState],
  (state: AuthTokensState) => {
    if (!state.tokens) return undefined;

    return state.tokens.RefreshToken;
  }
);

export const selectIsAuthLoading = createSelector(
  [selectAuthUiState],
  (state: AuthUiState) => state.isLoading
);

export const selectIsAuthenticated = createSelector(
  [selectAuthTokensState],
  (state: AuthTokensState) => {
    if (!state.decodedAccessToken) return false;

    const epochDateTimeNowInSeconds = Math.floor(Date.now() / 1000); // Returns the current time in seconds (Unix epoch)
    const jwtExpirationTime = state.decodedAccessToken.exp;

    const jwtExpirationMinus5Seconds = jwtExpirationTime - 5;

    return jwtExpirationMinus5Seconds > epochDateTimeNowInSeconds;
  }
);

export const selectDecodedAccessToken = createSelector(
  [selectAuthTokensState],
  (state: AuthTokensState) => state.decodedAccessToken
);
