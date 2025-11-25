import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import goog from "../../public/🦆 icon _google_.png";
import sig from "../../public/Frame 1000002379.png";
import { signinUser } from "../services/authService";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Load saved email if "remember me" was used
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setFormData({ email: savedEmail, password: "" });
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors.length > 0) setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    try {
      const data = await signinUser(formData);

      // Save token + user
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("authuser", JSON.stringify(data.user));

      // Remember email if checked
      if (rememberMe) {
        localStorage.setItem("rememberEmail", formData.email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      navigate("/home");
    } catch (error) {
      setErrors([error.message]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="min-h-screen bg-white text-black p-6 sm:p-10 lg:p-20 flex justify-center w-full lg:w-1/2">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold">Welcome Back to BetaHouse!</h1>
          <p className="mt-2">Let's get started by signing in</p>

          {errors.length > 0 && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {errors.map((error, idx) => (
                <p key={idx}>{error}</p>
              ))}
            </div>
          )}

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 accent-green-600"
                />
                <p className="text-sm">Remember Me</p>
              </div>
              <a href="#" className="text-red-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 text-white bg-green-600 rounded-full hover:bg-green-700 disabled:bg-gray-400"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="px-4 text-gray-400">or</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full flex justify-center items-center gap-3 py-3 border border-gray-600 rounded-full hover:bg-gray-100"
            >
              <img src={goog} className="w-5 h-5" /> Continue with Google
            </button>

            <p className="text-center mt-6">
              New User?{" "}
              <Link to="/signup" className="text-green-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 h-screen">
        <img src={sig} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
