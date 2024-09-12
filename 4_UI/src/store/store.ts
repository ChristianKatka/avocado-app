import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { authTokensReducer } from "../auth/store/slices/auth-tokens.slice";

const appReducer = combineReducers({
  authTokens: authTokensReducer,
});

const rootReducer: any = (state: RootState, action: Action) => {
  if (action.type === "auth/signOut/fulfilled") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
