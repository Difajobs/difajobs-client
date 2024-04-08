import { API_URL } from "./access";

interface login {
  email: string;
  password: string;
}

interface register {
  value: string;
  value2: string;
  value3: string;
}

export const login = async (value: login) => {
  try {
    const response = await fetch(API_URL + "/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }
    return data;
  } catch (error) {
    throw new Error("An error occurred while logging in.");
  }
};

export const register = async (value: register) => {
  try {
    const response = await fetch(API_URL + "endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(value),
    });
    if (!response.ok) {
      throw response;
    }
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};
