// UserProvider.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    try {
      const res = await axios.get(`${backendUrl}/user/check`, {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (err) {
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
