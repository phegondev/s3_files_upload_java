import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import AddFilePage from './component/AddFilePage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/add" element={<AddFilePage />} />


            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;