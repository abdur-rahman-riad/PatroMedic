import React from 'react';
import './Footer.css';
import logo from '../../img/Logo/logo.png';

const Footer = () => {
    return (
        <div className="bg-dark text-white custom-footer">
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-4 text-center">
                        <img src={logo} width="100px" alt="" />
                        <h4 className="fw-bold">PatroMedic</h4>
                    </div>

                    <div className="col-md-4 text-center custom-list">
                        <h5>Important Link</h5>
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </div>

                    <div className="col-md-4 text-center custom-list">
                        <h5>Social Media</h5>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>Tewitter</li>
                    </div>
                </div>

                <hr />

                <p className="text-center text-secondary pb-3">CopyRight@2021 All Right Reserved PatroMedic</p>
            </div>
        </div>
    );
};

export default Footer;