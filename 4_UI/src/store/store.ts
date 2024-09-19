import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { authTokensReducer } from "../auth/store/slices/auth-tokens.slice";
import { authUIReducer } from "../auth/store/slices/auth-ui.slice";
import { loadState } from "./localstorage-store-sync/load-state";
import { saveState } from "./localstorage-store-sync/save-state";
import { notesReducer } from "../notes/store/slices/notes.slice";

const appReducer = combineReducers({
  authTokens: authTokensReducer,
  authUi: authUIReducer,
  notes: notesReducer,
});

const rootReducer = (state: RootState, action: Action) => {
  if (action.type === "auth/logOut/fulfilled") {
    // initialize/empty all states when logged out
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export const store: any = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(), // Hydrate the store with the state from localStorage
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Subscribe to store updates
// and sync authTokens to localstorage
store.subscribe(() => {
  try {
    saveState(store.getState());
  } catch (err) {
    console.error("Failed to save state", err);
  }
});
