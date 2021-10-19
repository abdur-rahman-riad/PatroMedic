import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css';
import { useEffect, useState } from 'react';

const Details = () => {
    const { key } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    // const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(response => response.json())
            .then(data => setServiceDetails(data));
    }, [])

    const findService = serviceDetails.find((service) => service.key === key);
    console.log(findService);

    return (
        <div className="container text-center mt-4 mb-2 pb-5">
            <div className="w-50 mx-auto card p-3">
                <img src={findService?.img} className="card-img-top img-fluid" width="100%" alt="Service Img" />
                <h4 className="fw-bold">{findService?.name}</h4>
                <p>{findService?.description}</p>
                <Link to="/">
                    <button className="btn btn-success">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;