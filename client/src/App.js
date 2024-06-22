import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Movielist from './Pages/Data/Movielist';
// import Slider from './Pages/Home/Components/Slider/Slider';
import Movie from './Pages/Movie/Movie';
import Home from './Pages/Home/Home';
// import AboutUs from './Pages/AboutUs/AboutUs';
import Navbar from './Pages/Navbar/Navbar';
import LeftNav from './Pages/Navbar/LeftNav';
import Footer from './Pages/Footer/Footer';
import Booking from './Pages/Booking/Booking';
import SeatSelect from './Pages/Booking/SeatSelect';
import Search from './Pages/SearchBar/Search';
// import AboutUs from './Pages/AboutUs/About';

function App() {

  return (
    
   
  
    <div className="App">
      <Router>
        <Navbar />
        <LeftNav />
        <Routes>

         

          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/movie/:movie_id" element={<Movie />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/select-seat" element={<SeatSelect />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
