import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { serviceID } = useParams();
    return (
        <div className="container text-center my-5 py-5">
            <h2 className="mt-5 mb-3">Service ID:  {serviceID}</h2>
            <Link to="/">
                <button className="btn btn-success">Go to Home</button>
            </Link>
        </div>
    );
};

export default Details;