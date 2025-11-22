import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import goog from "../../public/🦆 icon _google_.png";
import sig from "../../public/Frame 1000002379.png";
import { signupUser } from "../services/authService";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!termsAccepted) {
      return setErrors([
        "You must agree to the Terms of Service and Privacy Policies",
      ]);
    }

    if (formData.password !== formData.confirmPassword) {
      return setErrors(["Passwords do not match"]);
    }

    setLoading(true);

    try {
      const data = await signupUser(formData);

      // Save token + user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

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
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>

          <p className="mt-3 text-black-300">
            Let's get started by filling out the information below
          </p>

          {errors.length > 0 && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {errors.map((error, idx) => (
                <p key={idx} className="text-sm">
                  {error}
                </p>
              ))}
            </div>
          )}

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md bg-transparent"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md bg-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-transparent"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-transparent"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-md bg-transparent"
                required
              />
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-5 h-5 accent-green-500"
              />
              <p className="text-gray-300 text-sm">
                I agree to{" "}
                <a href="#" className="text-green-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-500 hover:underline">
                  Privacy Policies
                </a>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="px-4 text-gray-400">or</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full flex justify-center items-center gap-3 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition"
            >
              <img src={goog} alt="Google" className="w-6 h-6" />
              Continue with Google
            </button>

            <p className="text-center mt-6 text-gray-300">
              Already have an account?{" "}
              <Link to="/signin" className="text-green-500 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 h-screen">
        <img src={sig} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
