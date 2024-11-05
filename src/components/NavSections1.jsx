import React, { useState, useCallback, useContext } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import './NavSections1.css';
import { UserContext } from '../UserContext';
import axios from 'axios';

const NavSections1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user,setUser } = useContext(UserContext);
  const [activeItem, setActiveItem] = useState(location.pathname);
  const[redirect,setRedirect] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
    setActiveItem(path);
  };

  const onWorkoutsTextClick = useCallback(() => {
    handleNavigation(`/exercises1/${user._id}`);
  }, [navigate]);

  const onExercisesTextClick = useCallback(() => {
    handleNavigation('/exercises');
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    handleNavigation(`/profille/${user._id}`);
  }, [navigate]);

  async function logout(){
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
}
if(redirect){
  return <Navigate to={redirect}/>
}
  return (
    user ?
    <nav className="nav-sections2">
      <div className="logo">
        <img src="/vital_signs.svg" alt="Active Logo" />
        <div className="app-name">Active</div>
      </div>
      <div 
        className={`nav-item ${activeItem === '/profile' ? 'active' : ''}`} 
        onClick={() => handleNavigation('/profile')}
      >
        <img src="/home.svg" alt="Home" />
        <span className="nav-item-name">Dashboard</span>
      </div>
      <div 
        className={`nav-item ${activeItem === `/exercises1/${user._id}` ? 'active' : ''}`} 
        onClick={onWorkoutsTextClick}
      >
        <img src="/exercise.svg" alt="Workouts" />
        <span className="nav-item-name">Workouts</span>
      </div>
      <div 
        className={`nav-item ${activeItem === '/exercises' ? 'active' : ''}`} 
        onClick={onExercisesTextClick}
      >
        <img src="/directions_run.svg" alt="Exercises" />
        <span className="nav-item-name">Exercises</span>
      </div>
      <div 
        className={`nav-item ${activeItem === `/profille/${user._id}` ? 'active' : ''}`} 
        onClick={onProfileTextClick}
      >
        <img src="/person.svg" alt="Profile" />
        <span className="nav-item-name">Profile</span>
      </div>
      <div 
        className='logout-button'
        onClick={logout}
      >
        <img src="/logout.svg" alt="Profile" />
        <span className="nav-item-name">Logout</span>
      </div>
    </nav>: <Navigate to='/' />
  );
};

export default NavSections1;
