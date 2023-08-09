import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, ...props }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Route {...props} />;
}
