import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ user, children }) {
  const location = useLocation();

  if (!user) {
    // If the user is not logged in, redirect to the /login page
    // We also pass the current location so we can redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the user is logged in, show the page they were trying to access
  return children;
}

export default ProtectedRoute;