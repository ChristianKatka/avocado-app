export const loadState = () => {
  try {
    const tokens = localStorage.getItem("authTokens");
    if (tokens === null) {
      return undefined; // No tokens stored, return undefined to use initial state
    }
    return { authTokens: JSON.parse(tokens) };
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};
