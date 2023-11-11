import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/register';
import Imagewall from './pages/Imagewall';
import Vlog from './pages/Vlog';
import EditResume from './pages/EditResume';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div className="home-container">
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/images" element={<Imagewall />} />
                <Route path="/vlog" element={<Vlog />} />
                <Route path="/edit_resume" element={<EditResume />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
