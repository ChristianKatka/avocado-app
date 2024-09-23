import { fetchRequest } from "./fetch-request";
import { getHttpOptions } from "./get-http-options";

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
