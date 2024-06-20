
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Movielist from './Pages/Data/Movielist';
import Slider from './Pages/Home/Components/Slider/Slider';
import Movie from './Pages/Movie/Movie';
import Home from './Pages/Home/Home';

import Navbar from './Pages/Navbar/Navbar';
import LeftNav from './Pages/Navbar/LeftNav';
import Footer from './Pages/Footer/Footer';



function App() {
  const movie= Movielist[0]
  return (
    <>
    <div className="App">

  
     <Router>
        {/* <Slider/> */}
        <Navbar/>
        <LeftNav/>
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/movie/:movie_id" element= {<Movie/>}></Route>
        </Routes>
        <Footer/>

     </Router>
         </div>
    </>
  );
}

export default App;
