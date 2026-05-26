import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

const Story = () => <div className="pt-32 text-center text-3xl h-screen dark:text-white">Our Story Page Coming Soon...</div>;
const Campaigns = () => <div className="pt-32 text-center text-3xl h-screen dark:text-white">Campaigns Page Coming Soon...</div>;
const Contact = () => <div className="pt-32 text-center text-3xl h-screen dark:text-white">Contact Page Coming Soon...</div>;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <Toaster position="bottom-right" />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/story" element={<Story />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;