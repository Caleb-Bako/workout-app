import React, { useState, useCallback, useContext } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import './NavSections1.css';
import { UserContext } from '../UserContext';
import axios from 'axios';

const NavSections1 = ({open,setOpen}) => {
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
    setOpen(!open);
  }, [open, setOpen, navigate]);

  const onExercisesTextClick = useCallback(() => {
    handleNavigation('/exercises');
    setOpen(!open);
  }, [open, setOpen,navigate]);

  const onProfileTextClick = useCallback(() => {
    handleNavigation(`/profille/${user._id}`);
  }, [navigate]);

  async function logout(){
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
}
console.log(open)
// const openSidemenu = () => {
//   setOpen(!open);
// }
if(redirect){
  return <Navigate to={redirect}/>
}
  return (
    user ?
    <div>
    <nav className="nav-container">
      <div className="nav-logo">
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
        className='nav-logout-button'
        onClick={logout}
      >
        <img src="/logout.svg" alt="Profile" />
        <span className="nav-item-name">Logout</span>
      </div>
    </nav>
    {/* Side-menu */}
    <nav className="nav-sidemenu">
    <div className="nav-logo">
        <img src="/vital_signs.svg" alt="Active Logo" />
      </div>
      <div 
        className={`nav-item ${activeItem === '/profile' ? 'active' : ''}`} 
        onClick={() => handleNavigation('/profile')}
      >
        <img src="/home.svg" alt="Home" />
      </div>
      <div 
        className={`nav-item ${activeItem === `/exercises1/${user._id}` ? 'active' : ''}`} 
        onClick={onWorkoutsTextClick}
      >
        <img src="/exercise.svg" alt="Workouts" />
      </div>
      <div 
        className={`nav-item ${activeItem === '/exercises' ? 'active' : ''}`} 
        onClick={onExercisesTextClick}
      >
        <img src="/directions_run.svg" alt="Exercises" />
      </div>
      <div 
        className={`nav-item ${activeItem === `/profille/${user._id}` ? 'active' : ''}`} 
        onClick={onProfileTextClick}
      >
        <img src="/person.svg" alt="Profile" />
      </div>
      <div 
        className='nav-logout-button'
        onClick={logout}
      >
        <img src="/logout.svg" alt="Profile" />
      </div>
    </nav>
    </div> 
    : <Navigate to='/' />
  );
};

export default NavSections1;
