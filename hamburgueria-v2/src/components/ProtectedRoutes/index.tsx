import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return null;
  } else {
    return user ? <Outlet /> : <Navigate to="/" />;
  }
};
