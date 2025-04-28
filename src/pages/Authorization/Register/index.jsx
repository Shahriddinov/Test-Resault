import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../Login/Login.scss';
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addSignUp } from '../../../reduxToolkit/SignUpSlice/index'; // import path to thunk
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.SignUpSlice); // redux state
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm your password'),
        }),
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('fullName', values.fullName);
            formData.append('email', values.email);
            formData.append('password', values.password);
            formData.append('role', 1);
            formData.append('isActive', true);

            try {
                const result = await dispatch(addSignUp(formData)).unwrap();

                // 200 bo'lsa (muvaffaqiyatli)
                toast.success("Siz muvaffaqqiyatli ro'yxatdan o'tdingiz");
                navigate('/login');
            } catch (err) {
                // Xatolik holatlari
                if (err?.message?.includes("already")) {
                    toast.info("Siz allaqachon ro'yxatdan o'tgansiz");
                } else if (err?.message) {
                    toast.error(err.message);
                } else {
                    toast.error("Nimadir xato ketdi, iltimos tekshirib qaytadan urinib ko'ring");
                }
            }
        }

    });

    return (
        <div className="auth-container">
            <form className="auth-card" onSubmit={formik.handleSubmit}>
                <h2>Create an Account</h2>
                <p>Sign up to get started</p>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                    <div className="error">{formik.errors.fullName}</div>
                )}

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                )}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="error">{formik.errors.password}</div>
                )}

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div className="error">{formik.errors.confirmPassword}</div>
                )}

                <button type="submit" className="primary-btn" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>

                {error && <div className="error">{error}</div>}

                <div className="divider">Or Sign up with</div>

                <div className="social-buttons">
                    <button type="button"><FaGoogle className="social-buttons_socialIcon"/> Google</button>
                    <button type="button"><FaApple className="social-buttons_socialIcon"/> Apple </button>
                    <button type="button"><FaFacebook className="social-buttons_socialIcon"/> Facebook</button>
                </div>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default RegisterPage;
