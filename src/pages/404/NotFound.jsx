import React from 'react';
import "./404.scss";

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound_fluid">
                <div className="notFound_fluid_pendulum">
                    <div className="notFound_fluid_pendulum_holder"></div>
                    <div className="notFound_fluid_pendulum_thread">
                        <div className="notFound_fluid_pendulum_thread_knob"></div>
                        <div className="notFound_fluid_pendulum_thread_404">404</div>
                        <div className="notFound_fluid_pendulum_thread_shadow"></div>
                    </div>
                    <div className="notFound_fluid_pendulum_textDetail">
                        <h4 className="notFound_fluid_pendulum_textDetail_subTitle">Oops</h4>
                        <p className="notFound_fluid_pendulum_textDetail_detail">We're sorry, <br/> The page you were looking for doesn't exist anymore.</p>
                        <a href="/" className="notFound_fluid_pendulum_textDetail_goBack">Back to Home</a>
                    </div>
                </div>
                {/*<h2 className="bigTitle pos">Page Not Found</h2>*/}
                {/*<p className="pos">The page you are looking for no longer exists. Perhaps you can return back to the site’s homepage and*/}
                {/*    see if you can find what you are looking for.</p>*/}
                {/*<a href="/" className="notFound_goBack">Back to Homepage</a>*/}

            </div>
        </div>
    );
};

export default NotFound;