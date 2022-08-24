// App.jsx

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Experiences from './components/Experiences.js'
import Photos from './components/Photos.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
       <HashRouter> 
        <Header></Header>
         <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/experiences" element={<Experiences></Experiences>} />
          <Route path="/photos" element={<Photos></Photos>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes> 
        <Footer></Footer>
       </HashRouter>
  );
}

export default App;