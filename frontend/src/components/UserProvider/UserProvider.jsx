import React, { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

// ✅ Configure axios defaults globally
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      console.log('Checking user with backend:', backendUrl);
      
      // ✅ Explicitly set withCredentials for this request
      const res = await axios.get(`${backendUrl}/user/check`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      console.log('User check successful:', res.data.user);
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      console.log('User check failed:', err.response?.status, err.response?.data);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, checkUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;