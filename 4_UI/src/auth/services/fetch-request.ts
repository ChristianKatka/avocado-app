export const fetchRequest = async (
  url: RequestInfo | URL,
  options: RequestInit
): Promise<any> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      if (response.status === 401) {
        // Optionally, you can trigger a logout or token refresh logic here
        console.error("Unauthorized: Token may be invalid or expired.");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch request failed:", error);
    throw error; // Propagate error for calling code to handle
  }
};
