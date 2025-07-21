import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext(null);

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 const checkUser = async () => {
  try {
    const res = await fetch(`${backendUrl}/user/check`, {
      credentials: 'include',
    });
    const data = await res.json();

    if (res.ok) {
      setUser(data.user || null);
    } else {
      setUser(null);
    }
  } catch (err) {
    console.error("checkUser failed:", err);
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
