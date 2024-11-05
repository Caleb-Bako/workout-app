import React, { useContext, useState } from 'react';
import './LoginPage.css';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';

const LoginPage = () => {
  const [redirect,setRedirect] = useState(false);
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const {setUser} = useContext(UserContext);

  async function handleLogin(ev){
    ev.preventDefault();
    try{
        const {data} = await axios.post('/login', {
            username,
            password,
        });
        setUser(data);
        alert('Login Successful');
        setRedirect(true);
    }
    catch(e){
        alert('Login Failed');
    }
}
if(redirect){
    return<Navigate to={'/profile'}/>
}
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
        <h2 className='form-heading'>Welcome Back</h2>
        <form className="create-account-form" onSubmit={handleLogin}>
          <input type="text" placeholder="Enter username" value={username} onChange={ev => setUserName(ev.target.value)} required />
          <input type="password" placeholder="Enter password" value={password} onChange={ev => setPassword(ev.target.value)} required />
          <button type="submit" className="create-account-button">Login</button>
        </form>
        <p>Don't have an Account? <a href="/signup">Create Account</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
