// src/components/Routes/PublicWrapper.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicWrapper = ({ children }) => {
    const token = sessionStorage.getItem('authToken');
    return token ? <Navigate to="/" replace /> : children;
};

export default PublicWrapper;
    