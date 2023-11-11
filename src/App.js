import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/register';
import Imagewall from './pages/Imagewall';
import EditResume from './pages/EditResume';
import Works from './pages/Works';
import Vlog from './pages/Vlog';
import Project from './pages/Project';
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
                <Route path="/edit_resume" element={<EditResume />} />
                <Route path="/works" element={<Works />} />
                <Route path="/vlogs" element={<Vlog />} />
                <Route path="/projects" element={<Project />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
