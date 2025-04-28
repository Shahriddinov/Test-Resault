import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_ROOT,
});

API.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
