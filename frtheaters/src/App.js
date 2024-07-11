
import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationSelection from './pages/TheaterRegister/LocationSelection';
import Home from './pages/TheaterOwner/Home';

import Theater from './pages/TheaterOwner/Theater';
import Login from './pages/login/Login';
import Registration from './pages/Registration/Registration';
import MainLayout from './MainLayout';


const App=()=> {
  return (
    <div className='App'>
     <Router>
     <MainLayout>
      <Routes>
      
     
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/dashboard' element={<LocationSelection/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/theater' element={<Theater/>}/>

      </Routes>
      </MainLayout>
     </Router>

    </div>
  );
}

export default App;
