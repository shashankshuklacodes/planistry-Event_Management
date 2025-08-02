import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");
  const hasShownToast = useRef(false); // This prevents duplicate toasts

  if (!isAuthenticated) {
    if (!hasShownToast.current) {
      toast.error("Please register/login before accessing this page.");
      hasShownToast.current = true;
    }
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
