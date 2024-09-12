import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import {
  loginService,
  refreshTokensService,
  registerService,
} from "../services/auth.service";
import { selectRefreshToken } from "../selectors/auth.selectors";
import { AuthCredentials } from "../../../models/auth-credentials.model";
import { handleError } from "../../../shared/handle-error";

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
    return await refreshTokensService(refreshToken);
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
      const res = await registerService(credentials);

      console.log("RESPONSE::");

      console.log(res);
      return res.AuthenticationResult;
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
      const res = await loginService(credentials);

      if (res.error) {
        console.log("FOUND ERRROR");

        return handleError("error: auth/login", res.error, rejectWithValue);
      }

      console.log("RESPONSE::");
      console.log(res);
      return res;
    } catch (err) {
      return handleError("error: auth/login", err, rejectWithValue);
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
