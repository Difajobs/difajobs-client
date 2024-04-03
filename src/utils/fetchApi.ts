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

interface disabilityList {
  category_id: number[];
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
  let data;
  try {
    const response = await fetch(API_URL + "/v1/auth/jobseeker-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }
    return response;
  } catch (error) {
    const errorMessage =
      data && data.message ? data.message : (error as Error).message;
    throw new Error("An error occurred while registering: " + errorMessage);
  }
};

export const registerRecruiter = async (value: registerRecruiter) => {
  let data;
  try {
    const response = await fetch(API_URL + "/v1/auth/recruiter-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }
    return response;
  } catch (error) {
    const errorMessage =
      data && data.message ? data.message : (error as Error).message;
    throw new Error("An error occurred while registering: " + errorMessage);
  }
};

export const getDisability = async (value: disabilityList) => {
  let data;
  try {
    const response = await fetch(API_URL + "/v1/disability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch disabilities: " + response.statusText);
    }
    data = await response.json();
    return data;
  } catch (error) {
    const errorMessage =
      data && data.message ? data.message : (error as Error).message;
    throw new Error(
      "An error occurred while retrieving category: " + errorMessage
    );
  }
};
