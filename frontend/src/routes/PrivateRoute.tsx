// ✅ PrivateRoute.tsx - Logic unchanged
import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const token = localStorage.getItem("access_token");
  return token ? <>{children}</> : <Navigate to="/" replace />;
};

export default PrivateRoute;
