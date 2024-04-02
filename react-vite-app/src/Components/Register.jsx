// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function RegisterForm() {
    const [registerUser, setRegisterUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e, field) => {
        setRegisterUser({ ...registerUser, [field]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/admin/register', {
                username: registerUser.username,
                email: registerUser.email,
                password: registerUser.password
            });
            console.log("Response:", response);
            // if (response.status === 201) {
            //     console.log('Registration successful');
            // } else {
            //     console.error('Unexpected response status:', response.status);
            //     console.error('Registration failed');
            // }
            if (response.status >= 200 && response.status < 300) {
                console.log('Registration successful');
                
            } else {
                console.error('Registration failed');
            }
            
        } catch (error) {
            console.error('An error occurred while registering', error);
        }
    };
    
    return (
        <>
         <h2 className='div m-3'>Register</h2>
        <div className="container">
           
            <form className="register-form" onSubmit={handleSubmit}>
                <div>
                    <label className="register-label">Username:   </label>
                    <input className="register-input" type="text" value={registerUser.username} onChange={(e) => handleChange(e, "username")} />
                </div>
                <div>
                    <label className="register-label">Email: </label>
                    <input className="register-input" type="email" value={registerUser.email} onChange={(e) => handleChange(e, "email")} />
                </div>
                <div>
                    <label className="register-label">Password: </label>
                    <input className="register-input" type="password" value={registerUser.password} onChange={(e) => handleChange(e, "password")} />
                </div>
                <div className='registerBtn-container'><button className="register-button" type="submit">Register</button></div> 
            </form>
        </div>
        </>
    );
}

export default RegisterForm;