import React from 'react';

const Service = (props) => {
    const { key, name, img, description } = props.service;
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={img} class="card-img-top img-fluid" width="100%" alt="Service Img" />
                <div class="card-body">
                    <h5>{key}</h5>
                    <h4 className="card-title">{name}</h4>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <button className="btn btn-success w-100">View More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;