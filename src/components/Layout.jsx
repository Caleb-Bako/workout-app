import { Outlet, useLocation } from 'react-router-dom';
import NavSections1 from './NavSections1';
import './Layout.css';

const Layout = ({open,setOpen}) => {
  const location = useLocation();
  const noNavRoutes = ['/', '/signup','/login','/signupprofile'];
  return (
    <div className='layout-body'>
        {!noNavRoutes.includes(location.pathname) && <NavSections1 open={open} setOpen={setOpen}/>}
        <div className={!noNavRoutes.includes(location.pathname) ? 'layout-content' : '' }>
          <Outlet />
        </div>
    </div>
  );
};

export default Layout;
