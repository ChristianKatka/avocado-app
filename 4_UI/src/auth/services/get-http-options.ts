export const getHttpOptions = () => {
  // const authTokens = JSON.parse(localStorage.getItem("authTokens") || "{}");
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
  console.log("heres tokens::");
  console.log(authTokens.tokens.IdToken);

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: authTokens.tokens.IdToken,
    },
  };
};
