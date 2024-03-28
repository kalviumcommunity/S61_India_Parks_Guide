// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function LoginForm() {
    const [loginUser, setLoginUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e, field) => {
        e.preventDefault();
        setLoginUser({ ...loginUser, [field]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/admin/login', {
                username: loginUser.username,
                password: loginUser.password
            });
            console.log("response", response);
            if (response.status === 200) {
                console.log(response.data);
                Cookies.set('username', loginUser.username);
                console.log('Login successful');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error('Invalid username or password');
            } else {
                console.error('An error occurred while logging in', error);
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username*</label>
                <input type="text" value={loginUser.username} onChange={(e) => handleChange(e, "username")} />
                <label>Password*</label>
                <input type="password" value={loginUser.password} onChange={(e) => handleChange(e, "password")} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
