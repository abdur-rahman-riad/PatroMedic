import React from 'react';
import './Discuss.css';
import img from '../../../img/Banner/home-banner-2.png';

const Discuss = () => {
    return (
        <div className="container border shadow-sm mb-5 p-3">
            <h3 className="text-center fw-bold">Let’s discuss. <br />If you have any question in mind?</h3>
            <div className="d-flex align-items-center">
                <div>
                    <img src={img} width="85%" className="img-fluid" alt="" />
                </div>
                <div>
                    <h5>Get your custom offer with discussion to our team. ust send a message, we will be answered within 5 minutes.</h5>
                    <button className="btn btn-secondary">Let's Start for Discuss</button>
                </div>
            </div>
        </div>
    );
};

export default Discuss;