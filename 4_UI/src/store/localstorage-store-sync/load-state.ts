export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authTokens");
    if (serializedState === null) {
      return undefined; // No tokens stored, return undefined to use initial state
    }
    return { authTokens: JSON.parse(serializedState) };
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};
