
import './App.css';

import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Registration from './pages/Registration/Registration';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/theater/' element={<Login/>}/>
        <Route path='/theater/register' element={<Registration/>}/>

      </Routes>
    </Router>
      
      
      
    </div>
  );
}

export default App;
