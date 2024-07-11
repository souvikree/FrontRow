import React from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from './pages/TheaterOwner/Topbar';
import LeftDash from './pages/TheaterOwner/LeftDash';

const MainLayout = ({ children }) => {
  const location = useLocation();

 
  const hideLayout = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      {!hideLayout && <Topbar />}
      <div className={`App ${!hideLayout ? 'layout' : ''}`}>
        {!hideLayout && <LeftDash />}
        {children}
      </div>
    </>
  );
};

export default MainLayout;
