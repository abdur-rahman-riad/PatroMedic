import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../../Firebase/firebase.init';

initializeAuthentication();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const { googleSignIn } = useAuth();
    const auth = getAuth();

    // Form Toggle
    const handleToggle = event => {
        setIsLogin(event.target.checked);
    }

    // Email
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    // Passowrd
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    // Form Submit
    const handleFormSubmit = event => {
        event.preventDefault();
        if (password.length < 8) {
            setError("Password must be at least 8 Character")
            return;
        }
        isLogin ? userLogin(email, password) : createNewUser(email, password)
    }


    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError("Login Successfully");
                document.getElementById('exampleInputEmail1').value = "";
                document.getElementById('exampleInputPassword1').value = "";
            }).catch(error => {
                setError(error.message);
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('Successfully Account Created');
                document.getElementById('exampleInputEmail1').value = "";
                document.getElementById('exampleInputPassword1').value = "";
            }).catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="container my-5 py-5">

            <div className="loginDesign p-4 w-75 mx-auto">
                <h2 className="text-center fw-bold">Please {isLogin ? 'Login' : 'Register'}</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input onChange={handleToggle} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            {isLogin ? 'Newbie? Create an Account' : 'Have an Account? Login'}</label>
                    </div>
                    <p className="text-center text-secondary">{error}</p>
                    <div className="text-center">
                        <button type="submit" className="btn btn-dark px-4">{isLogin ? "Login" : "Register"}</button>
                    </div>
                </form>

                <hr />
                <div className="text-center">
                    <button onClick={googleSignIn} type="submit" className="btn btn-danger px-4">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;