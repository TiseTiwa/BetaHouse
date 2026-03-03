const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const BASE_URL = `${API_BASE}/auth`;

// ---- SIGN UP ----
export const signupUser = async (formData) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMsg = data.error || data.errors?.map(e => e.msg).join(", ") || "Signup failed";
    throw new Error(errorMsg);
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
    const errorMsg = data.error || data.errors?.map(e => e.msg).join(", ") || "Login failed";
    throw new Error(errorMsg);
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
