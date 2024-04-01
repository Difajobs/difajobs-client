import { API_URL } from "./access";

interface login {
  value: string;
  value2: string;
}

interface registerJobseeker {
  email: string;
  password: string;
  role: string;
  fullname: string;
  dob: string;
  gender: string;
  disability_id: number[];
}

interface registerRecruiter {
  email: string;
  password: string;
  role: string;
  name: string;
  city: string;
  about: string;
  logo?: string;
  picture?: string;
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

export const registerJobseeker = async (value: registerJobseeker) => {
  try {
    const response = await fetch(API_URL + "v1/auth/jobseeker-register", {
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

export const registerRecruiter = async (value: registerRecruiter) => {
  try {
    const response = await fetch(API_URL + "v1/auth/jobseeker-register", {
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
