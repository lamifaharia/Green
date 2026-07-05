import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      await registerUser(email, password);

      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl bg-white/80 backdrop-blur-xl border border-white/30 rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.12)] overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-green-600 to-emerald-500 text-white p-12">

          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl">
                🌿
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Green Store
                </h2>
                <p className="text-sm text-green-100">
                  Fresh • Organic • Healthy
                </p>
              </div>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Join
              <br />
              Us Today.
            </h1>

            <p className="text-lg text-green-50 max-w-md">
              Create your account and start exploring fresh organic
              products, healthy choices, and exclusive member benefits.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Organic"
              className="w-72 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-14">
          <div className="max-w-md mx-auto">

            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold text-gray-800">
                Create Account
              </h2>

              <p className="text-gray-500 mt-3">
                Register and start your healthy shopping journey
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <p className="text-xs text-gray-400 mt-2">
                  Use at least 8 characters for better security.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* Register Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Create Account
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Google Button */}
            <button className="w-full h-12 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all font-medium flex items-center justify-center gap-3">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600 mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-600 hover:text-green-700 hover:underline"
              >
                Sign In
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;