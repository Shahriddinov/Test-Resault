import React from 'react';
import './Login.scss';
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../reduxToolkit/SignInSlice/index';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector(state => state.SignInSlice);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email noto‘g‘ri').required('Email majburiy'),
            password: Yup.string().min(6).required('Parol majburiy'),
        }),
        onSubmit: async (values) => {
            try {
                const result = await dispatch(loginUser(values)).unwrap();
                if (result?.token) {
                    sessionStorage.setItem('authToken', result.token);
                    sessionStorage.setItem('useID', result.user.id);
                }
                toast.success("Tizimga muvaffaqiyatli kirildi");
                navigate('/'); // yoki kerakli sahifa
            } catch (err) {
                toast.error(err.message || "Tizimga kirishda xatolik");
            }
        },
    });

    return (
        <div className="auth-container">
            <form className="auth-card" onSubmit={formik.handleSubmit}>
                <h2>Agent Login</h2>
                <p>Hi, Enter your details to get sign in<br/>to your account</p>

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

                <a href="#">Having trouble signing in?</a>

                <button type="submit" className="primary-btn" disabled={loading}>
                    {loading ? "Signing in..." : "Sign in"}
                </button>

                <div className="divider">Or Sign in with</div>

                <div className="social-buttons">
                    <button type="button"><FaGoogle className="social-buttons_socialIcon" /> Google</button>
                    <button type="button"><FaApple className="social-buttons_socialIcon" /> Apple</button>
                    <button type="button"><FaFacebook className="social-buttons_socialIcon" /> Facebook</button>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ display: "flex", gap: "5px" }}>
                        Don't have an account?
                        <Link to="/register" style={{ fontWeight: "bold", fontSize: "14px" }}>Request Now</Link>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;
