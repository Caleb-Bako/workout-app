// components/Layout.js
import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavSections1 from './NavSections1';

const Layout = () => {
  const location = useLocation();
  const noNavRoutes = ['/', '/signup','/login','/signupprofile'];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
        {!noNavRoutes.includes(location.pathname) && <NavSections1 />}
        <div style={{ flex: 1, marginLeft: !noNavRoutes.includes(location.pathname) ? '210px' : '0' }}>
        <Outlet />
        </div>
    </div>
  );
};

export default Layout;
