const BASE_URL = "https://betahouse-backend-pr81.onrender.com/api/auth";

// ---- SIGN UP ----
export const signupUser = async (formData) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  return data; // { user, token }
};

// ---- SIGN IN ----
export const signinUser = async (credentials) => {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data; // { user, token }
};

// ---- SAVE TOKEN & USER ----
export const saveAuthData = (user, token) => {
  localStorage.setItem("authUser", JSON.stringify(user));
  localStorage.setItem("authToken", token);
};

// ---- GET STORED USER ----
export const getCurrentUser = () => {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
};

// ---- GET STORED TOKEN ----
export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// ---- LOGOUT ----
export const logoutUser = () => {
  localStorage.removeItem("authUser");
  localStorage.removeItem("authToken");
};
// saveAuthData(data.user, data.token);
// login(data.user, data.token);
