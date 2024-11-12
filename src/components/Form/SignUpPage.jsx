import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

const CreateAccountPage = ({ name, setName, userName, setUserName, pass, setPass, setPage }) => {

    async function submitForm(ev) {
        ev.preventDefault();
    }

    return (
        <div className="singup-container">
            <div className="singup-image">
                <img src="/amico.svg" alt="Gym" />
            </div>
            <div className="singup-content">
                <div className="singup-logo">
                    <img src="/vital_signs.svg" alt="Active Logo" />
                    <div className="app-name">Active</div>
                </div>
                <h2 className='singup-form-heading'>Create an account</h2>
                <form className="singup-form" onSubmit={submitForm}>
                    <input type="text" placeholder="First Name" value={name} onChange={ev => setName(ev.target.value)} required />
                    <input type="text" placeholder="Enter username" value={userName} onChange={ev => setUserName(ev.target.value)} required />
                    <input type="password" placeholder="Enter password" value={pass} onChange={ev => setPass(ev.target.value)} required />
                    <Link to={'/account/page2'}>
                       <button type="submit" className="singup-button">Create Account</button>
                    </Link>
                </form>
                <p>Already have an Account? <a href="/login">Log in</a></p>
            </div>
        </div>
    );
};

export default CreateAccountPage;
