import { AuthCredentials } from "../../../models/auth-credentials.model";

const AUTH_API_BASE_URL = "https://api.example.com";

export const loginService = async (credentials: AuthCredentials) => {
  try {
    const response = await fetch(`${AUTH_API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const registerService = async (credentials: AuthCredentials) => {
  try {
    const response = await fetch(`${AUTH_API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const refreshTokensService = async (refreshToken: string) => {
  try {
    const response = await fetch(`${AUTH_API_BASE_URL}/auth/refresh-tokens`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(refreshToken),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
