import { API_URL } from "./access";

interface login {
  value: string;
  value2: string;
}

interface register {
  value: string;
  value2: string;
  value3: string;
}

export const login = async (value: login) => {
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
