import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Login } from './views/Authentication/Login';


import { Landing } from './views/Landing';

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ minHeight: "100%" }}>
      <Router>
        <Routes>
          < Route  path="home/*" element={< Landing />} />
          <Route exact path="/" element={<Login />} />
          
         
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;