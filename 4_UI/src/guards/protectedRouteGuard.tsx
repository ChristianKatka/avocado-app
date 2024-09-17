import { Navigate, useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "../auth/store/selectors/auth.selectors";
import { useAppSelector } from "../store/hooks";

interface Props {
  children: JSX.Element;
}

export const ProtectedRouteGuard = ({ children }: Props) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
