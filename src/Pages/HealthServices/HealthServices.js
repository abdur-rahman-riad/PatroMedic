import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './HealthServices.css';
import covid from '../../img/Banner/covid.png';

const HealthServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h3 className="fw-bold text-center mt-5">Services We Provide</h3>
            <div className="row g-4 mb-5 mt-2">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>

            <div className="row align-items-center mt-5 mb-5">
                <div className="col-md-6">
                    <h2 className="fw-bold">Free Covid-19 Vaccine Campaign</h2>
                    <p>The COVID-19 public education campaign is a national initiative to increase public confidence in and uptake of COVID-19 vaccines while reinforcing basic prevention measures such as mask wearing and social distancing.</p>
                    <button className="btn btn-success">See More</button>
                </div>

                <div className="col-md-6">
                    <img src={covid} className="img-fluid" width="100%" alt="" />
                </div>
            </div>


        </div>
    );
};

export default HealthServices;