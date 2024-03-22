import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentToken } from "../app/data/auth";
import { useAppSelector } from "../app/data/store";

export const PrivateRoute = () => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
