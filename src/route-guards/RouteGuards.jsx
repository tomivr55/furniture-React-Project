import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "../contexts/AuthContext";

export default function RouteGuard() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
}
