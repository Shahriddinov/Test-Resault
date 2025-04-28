import React from 'react';
import "./404.scss";

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="container">
                <h1 className="notFound_404">404</h1>
                <h2 className="bigTitle pos">Page Not Found</h2>
                <p className="pos">The page you are looking for no longer exists. Perhaps you can return back to the site’s homepage and
                    see if you can find what you are looking for.</p>
                <a href="/" className="notFound_goBack">Back to Homepage</a>

            </div>
        </div>
    );
};

export default NotFound;