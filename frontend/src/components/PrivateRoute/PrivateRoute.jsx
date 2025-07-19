import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../UserContext";

const PrivateRoute = ({ element }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <div>Loading...</div>;

  // Check if the user is logged in and has the admin role
  if (!user || user.role !== "admin") {
    return <Navigate to="/" />; // Redirect to homepage if not admin
  }

  return element; // Return the element if the user is admin
};

export default PrivateRoute;
