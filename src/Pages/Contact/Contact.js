import React from 'react';
import './Contact.css';

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
        </div>
    );
};

export default Contact;