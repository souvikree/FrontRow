
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Movielist from './Pages/Data/Movielist';
import Slider from './Pages/Home/Slider/Slider';
import Movie from './Pages/Movie/Movie';



function App() {
  const movie= Movielist[0]
  return (
    <div className="App">
     <Router>
        <Slider/>
        <Routes>
            <Route path="/movie/:movie_id" element= {<Movie/>}></Route>
        </Routes>

     </Router>
     
    </div>
  );
}

export default App;
