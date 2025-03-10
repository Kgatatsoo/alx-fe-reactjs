
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './pages/Home';  
import About from './pages/About';  
import Services from './pages/Services';  
import Contact from './components/Contact';  
import Footer from './components/Footer';  

function App() {
  return (
    <Router>
      <Navbar /> {m}
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer /> {m}
    </Router>
  );
};

export default App;
