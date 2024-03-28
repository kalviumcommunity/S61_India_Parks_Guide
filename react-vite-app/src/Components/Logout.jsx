// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


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
            // Perform logout operation using the provided username and password
            // You need to replace the following line with your actual logout endpoint and logic
            const response = await axios.post(
                "http://localhost:3001/admin/logout",
                {
                    username: credentials.username,
                    password: credentials.password
                }
            );
            console.log("Response:", response.data);
            Cookies.remove("username"); // Remove the username cookie upon successful logout

            // Redirect to the register page upon successful logout
           
        } catch (error) {
            console.error("Error:", error);
            // Handle errors, such as displaying error messages to the user
        }
    };

    return (
        <div>
            <h3>Log Out</h3>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder="Username" value={credentials.username} onChange={(e) => handleChange(e, "username")} />
                <label>Password</label>
                <input type="password" placeholder="Password" value={credentials.password} onChange={(e) => handleChange(e, "password")} />
                <button type="submit">Log Out</button>
            </form>
            <p>Already registered? <a href="/login">Sign in</a></p>
        </div>
    );
}

export default Logout;
