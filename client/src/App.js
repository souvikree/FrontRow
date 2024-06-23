import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/About';
import Movie from './Pages/Movie/Movie';
import Booking from './Pages/Booking/Booking';
import SeatSelect from './Pages/Booking/SeatSelect';
import LoginComponent from './Pages/Login/Login';
import SignupComponent from './Pages/Signup/Signup';
import MainLayout from './MainLayout';
import Search from './Pages/SearchBar/Search';
import CatagoryPage from './Pages/Catagory/CatagoryPage';

function App() {

  return (
    
   
  
    <div className="App">
      <Router>

        

        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/Catagory" element={<CatagoryPage />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="/explore" element={<Search />} />
            <Route path="/movie/:movie_id" element={<Movie />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/selectseats" element={<SeatSelect selectedSeats={4} onClose={() => {}} />} />
          </Routes>
        </MainLayout>

      </Router>
    </div>
  );
}

export default App;
