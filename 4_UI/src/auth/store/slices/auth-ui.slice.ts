import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../thunks/auth-tokens.thunk";

export interface AuthUiState {
  isLoading: boolean;
  error: any;
  errorMessage: string | undefined;
}

const initialState: AuthUiState = {
  isLoading: false,
  error: undefined,
  errorMessage: undefined,
};

const authUiSlice = createSlice({
  name: "auth-ui",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //LOGIN
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
      })

      //REGISTER
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const authUIReducer = authUiSlice.reducer;
