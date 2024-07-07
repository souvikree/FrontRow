// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/Login/AdminLogin';
import AdminRegister from './pages/Register/AdminRegister';
import AdminHome from './pages/Home/components/AdminHome';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/register" element={<AdminRegister />} />
        <Route path="/home" element={<AdminHome />} />
      </Routes>
    </Router>
  );
};

export default App;
