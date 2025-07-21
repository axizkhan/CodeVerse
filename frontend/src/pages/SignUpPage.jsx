import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignupPage.css";
import axios from "axios";
import UserContext from "../UserContext"; // ✅ import





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
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container neon-blobs">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Your Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="signup-input"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="signup-input"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="signup-input"
          onChange={handleChange}
          required
        />

        <button type="submit" className="neon-button signup-button">
          Sign Up
        </button>

        {message && <p className="signup-message">{message}</p>}

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login" className="link-neon">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;

