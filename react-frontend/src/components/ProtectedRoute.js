import React from 'react';
import { Navigate } from 'react-router-dom';
import api from '../service/api';

const ProtectedRoute = ({ children }) => {
  if (!api.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;