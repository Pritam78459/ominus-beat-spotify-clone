import React from 'react';
import './Login.css';
import login_title from './login_title.png';
import {loginUrl} from './spotify'; 

function Login() {
    return (
        <div className="login">
            <img src={login_title} alt="logo" />
            <a href={loginUrl} className="">Login with spotify</a>
        </div>
    )
}

export default Login
