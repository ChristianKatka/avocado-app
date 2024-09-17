import { RootState } from "../store";

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state.authTokens);
    localStorage.setItem("authTokens", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
