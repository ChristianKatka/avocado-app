import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import {
  loginService,
  refreshTokensService,
  registerService,
} from "../services/auth.service";
import { selectRefreshToken } from "../selectors/auth.selectors";
import { AuthCredentials } from "../../../models/auth-credentials.model";

// TYPE PROPS::
// 1. Return type
// 2. props
// 3. when using selector inside thunk. { state: RootState }

export const refreshTokensThunk = createAsyncThunk<
  any,
  void,
  { state: RootState }
>("auth/refreshTokens", async (_, { getState, dispatch, rejectWithValue }) => {
  const refreshToken = selectRefreshToken(getState());

  if (!refreshToken) {
    dispatch(logOutThunk);
  }

  try {
    return refreshTokensService(refreshToken);
  } catch (error) {
    console.log("error: auth/refreshTokens");
    console.log(error);

    return rejectWithValue({
      payload: "Failed",
      error: true,
    });
  }
});

// REGISTER
export const registerThunk = createAsyncThunk<any, AuthCredentials>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      return registerService(credentials);
    } catch (error) {
      console.log("error: auth/register");
      console.log(error);

      return rejectWithValue({
        payload: "Failed",
        error: true,
      });
    }
  }
);

// LOGIN
export const loginThunk = createAsyncThunk<any, AuthCredentials>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      return loginService(credentials);
    } catch (error) {
      console.log("error: auth/login");
      console.log(error);

      return rejectWithValue({
        payload: "Failed",
        error: true,
      });
    }
  }
);

export const logOutThunk = createAsyncThunk("auth/logOut", async () => {
  // Perform log out operations here, such as clearing tokens
  // Optionally, you can call your log out service or API

  console.log("logout thunk");

  // Example: Clear local storage and return
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");

  return;
});
