// const getHttpOptions = async () => {
//   const authTokens: any = localStorage.getItem("authTokens");
//   console.log("HERE IS id token:::");
//   console.log(authTokens.tokens.IdToken);

import { fetchRequest } from "./fetch-request";
import { getHttpOptions } from "./get-http-options";

//   if (!authTokens) return {};
//   const headers = new Headers({
//     Authorization: authTokens.tokens.IdToken,
//   });

//   headers.append("Content-Type", "application/json");

//   return {
//     headers,
//   };
// };

// const fetchRequest = async (
//   url: RequestInfo | URL,
//   options: RequestInit | undefined
// ): Promise<any> => {
//   const response: Response = await fetch(url, options);
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   return response.json();
// };

// export const authFetch = {
//   get: async (url: string): Promise<any> => {
//     const httpOptions = await getHttpOptions();
//     return fetchRequest(url, { ...httpOptions, method: "GET" });
//   },

//   post: async (url: string, body: any): Promise<any> => {
//     const httpOptions = await getHttpOptions();
//     return fetchRequest(url, {
//       ...httpOptions,
//       method: "POST",
//       body: JSON.stringify(body),
//     });
//   },

//   put: async (url: string, body: any): Promise<any> => {
//     const httpOptions = await getHttpOptions();
//     return fetchRequest(url, {
//       ...httpOptions,
//       method: "PUT",
//       body: JSON.stringify(body),
//     });
//   },

//   delete: async (url: string): Promise<any> => {
//     const httpOptions = await getHttpOptions();
//     return fetchRequest(url, { ...httpOptions, method: "DELETE" });
//   },
// };

// Reusable fetch method for all HTTP verbs
const requestWithAuth = async (
  method: string,
  url: string,
  body?: any
): Promise<any> => {
  const httpOptions = getHttpOptions();
  const options: RequestInit = {
    ...httpOptions,
    method,
    ...(body && { body: JSON.stringify(body) }), // Include body only if it exists
  };

  return fetchRequest(url, options);
};

export const authFetch = {
  get: (url: string) => requestWithAuth("GET", url),

  post: (url: string, body: any) => requestWithAuth("POST", url, body),

  put: (url: string, body: any) => requestWithAuth("PUT", url, body),

  delete: (url: string) => requestWithAuth("DELETE", url),
};
