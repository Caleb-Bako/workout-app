import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthenticationPage.css';

const AuthenticationPage = () => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate('/account');
  };
  const handleSignUpClick = () => {
    navigate('/login');
  };
  return (
    <div className="container">
      <div className="image-section">
        <img src="/amico.svg" alt="Gym" />
      </div>
      <div className="content-section">
      <div className="logos">
        <img src="/vital_signs.svg" alt="Active Logo" />
        <div className="app-name">Active</div>
      </div>
        <p>Transform your life, one workout at a time</p>
        <button className="create-account-buttons" onClick={handleCreateAccountClick}>
          Create account
        </button>
        <button className="login-buttons" onClick={handleSignUpClick}>
            Log in
        </button>
      </div>
    </div>
  );
};

export default AuthenticationPage ;
