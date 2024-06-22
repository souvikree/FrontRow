import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/About';
import Movie from './Pages/Movie/Movie';
import Booking from './Pages/Booking/Booking';

import Navbar from './Pages/Navbar/Navbar';
import LeftNav from './Pages/Navbar/LeftNav';
import Footer from './Pages/Footer/Footer';
import SeatSelect from './Pages/Booking/SeatSelect';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LeftNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/movie/:movie_id" element={<Movie />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/selectseats" element={<SeatSelect selectedSeats={4} onClose={() => {}} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
