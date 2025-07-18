// import React, { useState } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Paper,
// } from "@mui/material";
// import axios from "axios";

// const Login = () => {
//   const [form, setForm] = useState({ username: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/auth/login", form);
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={5} sx={{ p: 4, backgroundColor: "#1A1A1D", color: "#FFF" }}>
//         <Typography variant="h4" gutterBottom sx={{ color: "#00FFE0" }}>
//           Welcome Back to CodeVerse
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit}>
//           <TextField
//             label="Username"
//             name="username"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             onChange={handleChange}
//             InputLabelProps={{ style: { color: "#FFF" } }}
//             InputProps={{ style: { color: "#FFF" } }}
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             onChange={handleChange}
//             InputLabelProps={{ style: { color: "#FFF" } }}
//             InputProps={{ style: { color: "#FFF" } }}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2, backgroundColor: "#00FFE0", color: "#000" }}
//           >
//             Login
//           </Button>
//         </Box>
//         {message && (
//           <Typography sx={{ mt: 2, color: "#FF4081" }}>{message}</Typography>
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default Login;

import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";
import UserContext from "../UserContext"; // import

const LoginPage = () => {
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
      const res = await axios.post("http://localhost:8080/user/login", form, {
        withCredentials: true,
      });
      setMessage(res.data.message);

      if (res.status === 200) {
        await checkUser(); // update context immediately
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

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
