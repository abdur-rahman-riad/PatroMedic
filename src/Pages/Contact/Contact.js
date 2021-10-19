import React from 'react';
import './Contact.css';
import telephoneIcon from '../../img/Icons/telephone.png';
import addressIcon from '../../img/Icons/location.webp';
import mailIcon from '../../img/Icons/email.webp';

const Contact = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold">Contact</h2>
            <div className="bg-white border p-5 mb-5 w-75 mx-auto shadow-sm">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Comment</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your Comment Here..."></textarea>
                </div>
                <div className="text-center">
                    <button className="btn btn-danger">Subscribed</button>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-md-4">
                    <div className="contact-card border text-center my-3 p-3 rounded shadow-sm">
                        <img src={telephoneIcon} width="50px" height="50px" alt="" />
                        <h3 className="m-0">Phone</h3>
                        <p>+880162352354</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="contact-card border text-center my-3 p-3 rounded shadow-sm">
                        <img src={addressIcon} width="50px" height="50px" alt="" />
                        <h3 className="m-0">Address</h3>
                        <p>E-615, Yunus Khan Scholars Garden <br /> Dhaka, BAngladesh</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="contact-card border text-center my-3 p-3 rounded shadow-sm">
                        <img src={mailIcon} width="50px" height="50px" alt="" />
                        <h2 className="m-0">Mail</h2>
                        <p>patromedic@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Contact;