import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Share from './components/HtmlToImage';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div className="home-container">
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/share" element={<Share />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
