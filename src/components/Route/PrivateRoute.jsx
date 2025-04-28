// src/components/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = sessionStorage.getItem('authToken');

    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
