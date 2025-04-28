import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SIGN_IN } from '../../serves/api/utilis';


export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(SIGN_IN, credentials, {
                headers: { 'Content-Type': 'application/json' },
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue({ message: 'Server bilan bog‘lanib bo‘lmadi' });
            }
        }
    }
);