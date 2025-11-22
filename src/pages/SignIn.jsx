import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import goog from "../../public/🦆 icon _google_.png";
import sig from "../../public/Frame 1000002379.png";
import { signinUser } from "../services/authService";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    try {
      await signinUser({
        email: formData.email,
        password: formData.password,
      });

      // Store remember me preference if checked
      if (rememberMe) {
        localStorage.setItem("rememberEmail", formData.email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // Redirect to home page on successful signin
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
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Welcome Back to BetaHouse!
          </h1>

          <p className="mt-3 text-black-300">
            Let's get started by filling out the information below
          </p>

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {errors.map((error, idx) => (
                <p key={idx} className="text-sm">
                  {error}
                </p>
              ))}
            </div>
          )}

          {/* Form */}
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 bg-transparent rounded-md focus:outline-none text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 bg-transparent rounded-md focus:outline-none text-sm sm:text-base"
                required
              />
            </div>

            <div className="flex items-center justify-between space-x-2 mt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 accent-green-500"
                />
                <p className="text-gray-300 text-sm">Remember Me</p>
              </div>
              <a href="#" className="text-[#EC5E5E] text-sm hover:underline">
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer py-3 sm:py-4 mt-2 text-white bg-green-600 rounded-full text-base sm:text-lg font-medium hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
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
              className="w-full cursor-pointer flex justify-center items-center gap-3 py-2 sm:py-3 border border-gray-600 rounded-full text-sm sm:text-lg hover:bg-gray-800 transition"
            >
              <img src={goog} alt="Google" className="w-5 sm:w-6 h-5 sm:h-6" />
              Continue with Google
            </button>

            <p className="text-center mt-6 text-gray-300">
              New User?{" "}
              <Link
                to="/signup"
                className="text-green-500 cursor-pointer hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex w-full lg:w-1/2 h-screen">
        <img src={sig} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
