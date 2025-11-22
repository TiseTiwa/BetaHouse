const BASE_URL = "https://betahouse-backend-pr81.onrender.com/api/auth";

// ---- SIGN UP ----
export const signupUser = async (formData) => {
  const response = await fetch(
    `https://betahouse-backend-pr81.onrender.com/api/auth/signup`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  return data; // { user, token }
};

// ---- SIGN IN ----
export const signinUser = async (credentials) => {
  const response = await fetch(
    `https://betahouse-backend-pr81.onrender.com/api/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data; // { user, token }
};
