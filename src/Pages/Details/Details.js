import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { serviceID } = useParams();
    return (
        <div className="container text-center my-5 py-5">
            <h2>{serviceID}</h2>
            <Link to="/">
                <button className="btn btn-success">Go Back</button>
            </Link>
        </div>
    );
};

export default Details;