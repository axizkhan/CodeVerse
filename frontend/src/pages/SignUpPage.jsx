import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignupPage.css";
import axios from "axios";
import UserContext from "../UserContext"; //  import
const SignupPage = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { checkUser } = useContext(UserContext); // use context
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/user/signup`, form, {
        withCredentials: true,
      });
      setMessage(res.data.message);

      if (res.status === 200) {
        await checkUser(); //  update context immediately
        setTimeout(() => {
          navigate("/Verify");
        }, 1000);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4 transition-colors duration-300">
      {/* The neon-blobs background for atmospheric depth */}
      <div className="neon-blobs pointer-events-none absolute inset-0 z-0 opacity-20" />

      <form
        className="animate-fadeIn card glass z-10 w-full max-w-md p-8 md:p-10"
        onSubmit={handleSubmit}>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary">
            Join <span className="text-primary">CodeVerse</span>
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Start your coding journey today
          </p>
        </div>

        <div className="space-y-5">
          {/* Username Field */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-text-secondary ml-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              onChange={handleChange}
              className="input text-black placeholder:text-text-muted"
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-text-secondary ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              className="input text-black placeholder:text-text-muted"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-text-secondary ml-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="input text-black placeholder:text-text-muted"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-card-md bg-primary py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-hover hover:shadow-primary/25 active:scale-[0.98] mt-4">
            Create Account
          </button>
        </div>

        {message && (
          <div className="mt-4 rounded-md bg-danger/10 p-3 animate-fadeIn">
            <p className="text-center text-sm font-medium text-danger">
              {message}
            </p>
          </div>
        )}

        <p className="mt-8 text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-primary transition-colors hover:text-primary-hover underline underline-offset-4">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
