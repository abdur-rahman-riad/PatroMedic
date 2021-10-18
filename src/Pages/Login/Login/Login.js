import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="container my-5 py-5">

            <div className="loginDesign p-4 w-75 mx-auto">
                <h2 className="text-center fw-bold">Please Login</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Newbie? Create an Account.</label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-4">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;