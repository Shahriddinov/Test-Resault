import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './App';
import "./assest/style/global.scss";
import "./assest/style/header.scss";
import "./assest/style/footer.scss";
import {Provider} from "react-redux";
import store from "./reduxToolkit/store";
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
            <ToastContainer position="top-right" autoClose={3000} />
            <Suspense fallback="">
                <Routes/>
            </Suspense>
        </Provider>
    </Suspense>
);


