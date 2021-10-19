import React from 'react';
import './NotFound.css';
import error404 from '../../img/Icons/error.PNG';

const NotFound = () => {
    return (
        <div className="container text-center my-4 py-5">
            <img src={error404} className="img-fluid" alt="" />
            <h2 className="fw-bold text-danger">404 Page Not Found</h2>
        </div>
    );
};

export default NotFound;