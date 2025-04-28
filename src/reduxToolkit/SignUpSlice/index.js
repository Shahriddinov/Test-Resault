import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SIGN_UP } from "../../serves/api/utilis";

export const addSignUp = createAsyncThunk(
    'sign/up',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(SIGN_UP, formData, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            // Agar serverdan xabar kelsa, uni qaytarish
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue({ message: 'Tarmoqda xatolik yuz berdi' });
            }
        }
    }
);
