import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";
import UserContext from "../UserContext"; // import
import { blue } from "@mui/material/colors";

const LoginPage = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { checkUser } = useContext(UserContext); //  use context

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/user/login`, form, {
        withCredentials: true,
      });
      setMessage(res.data.message);
      setUser(res.data.user);

      if (res.status === 200) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4 transition-colors duration-300">
      {/* The neon-blobs background you defined in your CSS */}
      <div className="neon-blobs pointer-events-none absolute inset-0 z-0 opacity-30" />

      <form
        className="animate-fadeIn card glass z-10 w-full max-w-md p-8 md:p-10"
        onSubmit={handleSubmit}>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-text-primary">
          Login to <span className="text-primary">CodeVerse</span>
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-secondary ml-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              className="input text-text-primary placeholder:text-text-muted"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-secondary ml-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="input text-text-primary placeholder:text-text-muted"
              style={{ color: "black" }}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-card-md bg-primary py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-hover hover:shadow-primary/20 active:scale-[0.98]">
            Login
          </button>
        </div>

        {message && (
          <p className="mt-4 animate-fadeIn text-center text-sm font-medium text-danger">
            {message}
          </p>
        )}

        <p className="mt-8 text-center text-sm text-text-secondary">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-primary transition-colors hover:text-primary-hover underline underline-offset-4">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
