export const getHttpOptions = () => {
  const authTokensString = localStorage.getItem("authTokens");

  if (!authTokensString) {
    console.warn(
      "No auth token found. Returning without authorization header."
    );
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  const authTokens = JSON.parse(authTokensString);

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: authTokens.tokens.IdToken,
    },
  };
};
