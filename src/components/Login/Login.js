import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    // console.log('came from', location.state?.from);


    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="Enter your email"/>
                <br />
                <input type="password" name="" id="" placeholder="Password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <br />
            <p>new to ema-john website<Link to="/register">Create Account</Link></p>
            <div>----------or------------</div>
            <button className="btn-regular" onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;