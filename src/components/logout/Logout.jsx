import { Navigate } from "react-router-dom";
import { useLoguot } from "../../hooks/useAuth";

export default function Logout() {
  const logout = useLoguot();
  logout();
  return <Navigate to="/" />;
}
