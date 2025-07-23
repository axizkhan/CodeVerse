import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";
import UserContext from "../UserContext"; // import
import { useEffect } from "react";


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

    // ✅ Immediately check user after login
    await checkUser();  
  } catch (err) {
    setMessage(err.response?.data?.message || "Login failed");
  }
};

// ✅ Check user once when component mounts (optional, like on page refresh)
useEffect(() => {
  const fetchUser = async () => {
    await checkUser();
  };
  fetchUser();
}, []); // empty dependency: runs once on mount

        

  return (
    <div className="login-container neon-blobs">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login to CodeVerse</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="login-input"
          required
        />

        <button type="submit" className="neon-button login-button">
          Login
        </button>

        {message && <p className="login-message">{message}</p>}

        <p className="signup-link">
          Don't have an account?{" "}
          <Link to="/signup" className="link-neon">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
