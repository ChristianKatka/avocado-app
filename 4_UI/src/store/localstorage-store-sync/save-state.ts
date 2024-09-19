import { RootState } from "../store";

export const saveState = (state: RootState) => {
  try {
    const tokens = JSON.stringify(state.authTokens);
    localStorage.setItem("authTokens", tokens);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
