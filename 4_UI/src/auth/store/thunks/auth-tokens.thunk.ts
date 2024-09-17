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
    const res = await refreshTokensService(refreshToken);
    console.log("RESPONSE from service::");
    console.log(res);
    return res.AuthenticationResult;
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
      if (res?.$metadata?.httpStatusCode === 200) {
        console.log("HEHEII status koodi oli 200");
      }

      if (res?.errorMessage === "User already exists") {
        console.log("error user already exists");
        return rejectWithValue({
          payload: "Failed",
          error: true,
        });
      }
      console.log("RESPONSE from service::");
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
      console.log(res.AuthenticationResult);
      return res.AuthenticationResult;
    } catch (err) {
      return handleError("error: auth/login", err, rejectWithValue);
    }
  }
);

export const logOutThunk = createAsyncThunk("auth/logOut", async () => {
  console.log("logout thunk");
  localStorage.removeItem("authTokens");

  return;
});
