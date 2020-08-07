import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = props => {
    return (
        <div id="error-page" className="vh-100">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <h1 className="mb-0" style={{fontSize: '6rem', fontWeight: '600', letterSpacing: '5px'}}>{props.status? props.status: '404'}</h1>
                <h3 className="p-3 text-center" style={{fontSize: '2rem', fontWeight: '400'}}>{props.message? props.message: 'صفحه مورد نظر شما یافت نشد!'}</h3>
                <Link to="/user/home" className="px-5" style={{fontSize: '1.4rem', fontWeight: '400'}}>برو به خانه</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
