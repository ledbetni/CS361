import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import Twos from './pages/2v2';
import Rbg from './pages/rbg';
import Info from './pages/info';
import Threes from './pages/3v3';
import {useState} from 'react';


function App() {
  
//   const [TwosToEdit, setTwosToEdit] = useState();
//   const [RbgToEdit, setRbgToEdit] = useState();
//   const [InfoToEdit, setInfoToEdit] = useState();
//   const [ThreesToEdit, setThreesToEdit] = useState();

  return(
      <div>
      
          <Router>
              <Routes>
                  <Route path="/" element={<Index />} />
                  
                  <Route path="/2v2" element={<Twos  />} />
                  
                  <Route path="/rbg" element={<Rbg  />} />

                  <Route path="/info" element={<Info  />} />

                  <Route path="/3v3" element={<Threes  />} />
              </Routes>
          </Router>
      
      </div>
  );
}

export default App;
