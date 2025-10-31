import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchProfile } from "../fearures/auth/authThunk";

export const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProfile());
    }
  }, [status, dispatch]);

  if (status === "loading" || status === "idle") {
    return <div className="p-8 text-center text-lg">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
