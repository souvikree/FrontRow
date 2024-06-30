import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationSelection from './pages/TheaterRegister/LocationSelection';
import Home from './pages/TheaterOwner/Home';
import LeftDash from './pages/TheaterOwner/LeftDash';
import Topbar from './pages/TheaterOwner/Topbar';

const App=()=> {
  return (
    <div className='App'>
     <Router>
     <Topbar/>
     <LeftDash/>
      <Routes>
      <Route path='/dashboard' element={<LocationSelection/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      </Routes>
     </Router>
      
    </div>
  );
}

export default App;
