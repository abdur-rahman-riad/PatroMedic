import React from 'react';
import banner from '../../../img/Banner/home-banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="row align-items-center my-5 py-3">
                <div className="col-md-6">
                    <h2 className="fw-bold">Time is generally the best doctor.</h2>
                    <p>We assured to you that we will provide responsible treatment to you. It’s our duty for any patients. More information below. Every patient getting best care from us. again is there anyone who of itself, because it is pain, but because occasionally circumstance procure him some great pleasure</p>
                    <button className="btn btn-dark">View More</button>
                </div>

                <div className="col-md-6">
                    <img src={banner} width="100%" className="img-fluid" alt="Home Banner" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Banner;