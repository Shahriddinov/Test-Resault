import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import ScrollTop from "./hoc/ScrollTop";
import Layout from "./components/Layout/layout";
import NotFound from "./pages/404/NotFound";
import PrivateWrapper from "./components/Route/PrivateWrapper";
import PublicWrapper from "./components/Route/PublicWrapper";

const Home = lazy(() => import("./pages/Home/home"));
const Courses = lazy(() => import("./pages/Courses/Courses"));
const Login = lazy(() => import("./pages/Authorization/Login"));
const Settings = lazy(() => import("./pages/Settings"));
const Register = lazy(() => import("./pages/Authorization/Register"));
const Exams = lazy(() => import("./pages/Exams"));
const ExamsResult = lazy(() => import("./pages/Exams/components/ExamsResult"));

// Faqat "/"" ochiq bo‘lsin, qolganlari yopiladi
const routes = [
    { path: "/", element: Home, isPublic: true },
    { path: "/login", element: Login, isPublic: true, authOnly: false },
    { path: "/settings", element: Settings, isPublic: true, authOnly: false },
    { path: "/register", element: Register, isPublic: true, authOnly: false },
    { path: "/courses", element: Courses },
    { path: "/exams/:id", element: Exams },
    { path: "/result", element: ExamsResult },
];

const RoutesContainer = () => (
    <Router>
        <Layout>
            <Suspense fallback={<Spinner position="full" />}>
                <Routes>
                    {routes.map((route, key) => {
                        const Component = ScrollTop(route.element);

                        let element;

                        if (route.isPublic && route.authOnly === false) {
                            // ❗ Kirgan foydalanuvchini qaytmasligi uchun
                            element = (
                                <PublicWrapper>
                                    <Component />
                                </PublicWrapper>
                            );
                        } else if (route.isPublic) {
                            // Ochiq sahifalar (home)
                            element = <Component />;
                        } else {
                            // Token kerak bo‘lgan sahifalar
                            element = (
                                <PrivateWrapper>
                                    <Component />
                                </PrivateWrapper>
                            );
                        }

                        return <Route key={key} path={route.path} element={element} />;
                    })}


                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="/404" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Layout>
    </Router>
);

export default RoutesContainer;
