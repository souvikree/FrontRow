import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import LeftNav from './Pages/Navbar/LeftNav';
import Footer from './Pages/Footer/Footer';

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Function to determine if Navbar, LeftNav, and Footer should be hidden
  const shouldHideNavAndFooter = () => {
    return location.pathname === '/login' || location.pathname === '/signup' || location.pathname=== '/admin/dashboard'|| location.pathname=== '/admin/dashboard/movie' || location.pathname=== '/admin/dashboard/adminhome' || location.pathname==='/admin';
  };

  return (
    <div className="relative">
      {!shouldHideNavAndFooter() && (
        <>
          <Navbar />
          <LeftNav />
        </>
      )}
      {children}
      {!shouldHideNavAndFooter() && <Footer />}
    </div>
  );
};

export default MainLayout;
