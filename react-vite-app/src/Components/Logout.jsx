// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './Logout.css';

function Logout() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e, field) => {
        setCredentials({ ...credentials, [field]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/admin/logout",
                {
                    username: credentials.username,
                    password: credentials.password
                }
            );
            console.log("Response:", response.data);
            Cookies.remove("username");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="logout-container">
            <h3 className="logout-heading">Log Out</h3>
            <form className="logout-form" onSubmit={handleSubmit}>
                <label className="logout-label">Username:</label>
                <input className="logout-input" type="text" placeholder="Username" value={credentials.username} onChange={(e) => handleChange(e, "username")} />
                <label className="logout-label">Password:</label>
                <input className="logout-input" type="password" placeholder="Password" value={credentials.password} onChange={(e) => handleChange(e, "password")} />
                <button className="logout-button" type="submit">Log Out</button>
            </form>
            <p>Already registered? <a href="/login">Sign in</a></p>
        </div>
    );
}

export default Logout;
