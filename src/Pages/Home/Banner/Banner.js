import React from 'react';
import banner from '../../../img/Banner/home-banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="row align-items-center my-5 py-3">
                <div className="col-md-6">
                    <h2 className="fw-bold">Lorem ipsum dolor sit amet <br /> ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate voluptates amet ut fugit est asperiores soluta libero ex ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, numquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, molestiae?</p>
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