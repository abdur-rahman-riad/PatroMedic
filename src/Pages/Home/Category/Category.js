import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import treatment from '../../../img/Icons/treatment.webp';
import ambulance from '../../../img/Icons/ambulance.png';
import direction from '../../../img/Icons/hospital.png';
import doctor from '../../../img/Icons/doctor.png';

const Category = () => {
    return (
        <div className="container my-3 py-3">
            <h3 className="text-center fw-bold">Our Features</h3>
            <div className="row g-3">
                <div className="col-md-3">
                    <div className="text-center border shadow-sm rounded p-2">
                        <img src={treatment} width="100px" className="mb-2" alt="" />
                        <h5 className="fw-bold">Medical Treatment</h5>
                        <p>In Patromedic you will get all medical treatment support from specialists.</p>
                        <Link>Get Appoinment</Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center border shadow-sm rounded p-2">
                        <img src={ambulance} width="100px" className="mb-2" alt="" />
                        <h5 className="fw-bold">Emergency Help</h5>
                        <p>We provide 24 hours emergency help. Anytime, anywhere we are with you</p>
                        <Link>Call us Now</Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center border shadow-sm rounded p-2">
                        <img src={direction} width="100px" className="mb-2" alt="" />
                        <h5 className="fw-bold">Pharmacies</h5>
                        <p>We will get the nearby pharmacy location. These Pharmacies provide good medicine.</p>
                        <Link>Get Direction</Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center border shadow-sm rounded p-2">
                        <img src={doctor} width="100px" className="mb-2" alt="" />
                        <h5 className="fw-bold">Qualified Doctor</h5>
                        <p>PatroMedic will provide you, Qualified Doctor, for your health information and support</p>
                        <Link>Find a Doctor</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;