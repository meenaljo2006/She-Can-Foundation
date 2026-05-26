import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
        style={{ 
          backgroundImage: "url('homePage.png')" 
        }}
      ></div>

      <div className="absolute inset-0 z-10 bg-black/40 dark:bg-black/55"></div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
        
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="logo.png" 
          alt="She Can Logo" 
          className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-8 border-4 border-white/20"
        />

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          Together We Can <span className="text-orange-400">Change</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed drop-shadow-md max-w-3xl"
        >
          We don't ask for much, just help us with what you can - Be it Money, Skill or Your Time. Empowering women and creating a more equitable society.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/donate">
            <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-1">
              Donate Now
            </button>
          </Link>
          
          <Link to="/about">
            <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:-translate-y-1">
              Learn More
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;