import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h3 className="fw-bold text-center text-success">Services We Provide</h3>

            <div className="row g-4 mb-5 mt-2">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;