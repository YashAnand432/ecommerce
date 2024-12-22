import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Signup from './pages/Signup.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
function App() {
  // const [isAuthenticated , setisAuthenticated] = useState(false);

  // function handleLogin () {
  //   setisAuthenticated(true);
  // }

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
            
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
