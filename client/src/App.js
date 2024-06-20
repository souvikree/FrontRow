
<<<<<<< HEAD
import Slider from 'react-slick';
import './App.css';
import Middle from './pages/Home/components/Middle';
=======
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Movielist from './Pages/Data/Movielist';
import Slider from './Pages/Home/Components/Slider/Slider';
import Movie from './Pages/Movie/Movie';
import Home from './Pages/Home/Home';



>>>>>>> b1577810327f6ccdfbff6d5b1cadef05e9110013
function App() {
  const movie= Movielist[0]
  return (
    <>
    <div className="App">
<<<<<<< HEAD
        <Middle/>
=======
     <Router>
        {/* <Slider/> */}
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/movie/:movie_id" element= {<Movie/>}></Route>
        </Routes>

     </Router>
     
>>>>>>> b1577810327f6ccdfbff6d5b1cadef05e9110013
    </div>
    </>
  );
}

export default App;
