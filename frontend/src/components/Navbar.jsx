import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="w-full max-w-5xl pointer-events-auto"
      >
        <div className="flex items-center justify-between bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-2xl transition-colors duration-300">
          
          <Link to="/" className="flex items-center gap-3 pl-2">
            <img src="/logo.png" alt="She Can Logo" className="h-10 w-10 rounded-full shadow-sm" />
            <span className="font-extrabold text-lg md:text-xl text-indigo-900 dark:text-white hidden sm:block transition-colors duration-300">
              She Can Foundation
            </span>
          </Link>

          <div className="hidden md:flex items-center bg-gray-100/80 dark:bg-gray-800/80 rounded-full p-1 border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
            <Link 
              to="/" 
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive('/') ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive('/about') ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}
            >
              About
            </Link>
            <Link 
              to="/story" 
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive('/story') ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Our Story
            </Link>
            <Link 
              to="/contact" 
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive('/contact') ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3 pr-1">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform border border-gray-200 dark:border-gray-700"
              title="Toggle Theme"
            >
              {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </button>

            <Link to="/campaigns">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all"
              >
                Donate
              </motion.button>
            </Link>
          </div>

        </div>
      </motion.nav>

    </div>
  );
};

export default Navbar;