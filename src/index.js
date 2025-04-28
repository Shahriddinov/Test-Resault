import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './App';
import "./assest/style/global.scss";
import "./assest/style/header.scss";
import "./assest/style/footer.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback="">
            <Routes/>
        </Suspense>
    </React.StrictMode>
);


