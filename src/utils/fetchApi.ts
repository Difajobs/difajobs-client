import { API_URL } from "./access";

interface login {
  email: string;
  password: string;
}

interface registerJobseeker {
  email: string;
  password: string;
  role: string;
  fullname: string;
  dob: string;
  gender: string;
  phone_number?: string;
  city?: string;
  disability_id: number[];
  description?: string;
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

export const registerJobseeker = async (value: registerJobseeker) => {
  try {
    const response = await fetch(API_URL + "/v1/auth/jobseeker-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    const response = await fetch(API_URL + "/v1/auth/recruiter-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
