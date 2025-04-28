// src/components/Routes/PrivateWrapper.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateWrapper = ({ children }) => {
    const token = sessionStorage.getItem('authToken');
    return token ? children : <Navigate to="/login" replace />;
};

export default PrivateWrapper;
