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
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-base-100 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-success text-white p-12">
          <h1 className="text-5xl font-bold mb-4">
            Welcome 🌿
          </h1>

          <p className="text-lg opacity-90">
            Create your account and start shopping fresh,
            healthy and organic products.
          </p>

          <div className="mt-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Organic"
              className="w-48"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <div className="max-w-md mx-auto">

            <h2 className="text-4xl font-bold text-center mb-2">
              Create Account
            </h2>

            <p className="text-center text-gray-500 mb-8">
              Register to continue shopping
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-medium">
                    Email Address
                  </span>
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text font-medium">
                    Password
                  </span>
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="alert alert-error mb-4">
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-success w-full"
              >
                Create Account
              </button>

            </form>

            <div className="divider my-6">OR</div>

            <button className="btn btn-outline w-full">
              Continue with Google
            </button>

            <p className="text-center mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-success font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;