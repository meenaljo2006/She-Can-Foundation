import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Column 1: Brand & Mission */}
        <div className='pl-20'>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full border-2 border-gray-700 hover:border-orange-500 transition-all" />
            <h4 className="text-2xl font-bold text-white">She Can <span className="text-orange-500">Foundation</span></h4>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Empowering women, breaking down barriers, and creating a more equitable society through education and grassroots action.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3 pl-20">
          <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Quick Links</h4>
          <Link to="/" className="text-gray-400 hover:text-orange-400 hover:translate-x-2 transition-all w-max mx-auto md:mx-0">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-orange-400 hover:translate-x-2 transition-all w-max mx-auto md:mx-0">About Us</Link>
          <Link to="/story" className="text-gray-400 hover:text-orange-400 hover:translate-x-2 transition-all w-max mx-auto md:mx-0">Our Story</Link>
          <Link to="/campaigns" className="text-gray-400 hover:text-orange-400 hover:translate-x-2 transition-all w-max mx-auto md:mx-0">Donate / Campaigns</Link>
          <Link to="/contact" className="text-gray-400 hover:text-orange-400 hover:translate-x-2 transition-all w-max mx-auto md:mx-0">Contact Us</Link>
        </div>

        {/* Column 3: Contact & Socials */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Get In Touch</h4>
          
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 mb-3 hover:text-white transition">
            <FaEnvelope className="text-orange-500" />
            <a href="mailto:president@shecanfoundation.org">president@shecanfoundation.org</a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 mb-8 hover:text-white transition">
            <FaPhoneAlt className="text-orange-500" />
            <span>+91- 8283841830</span>
          </div>

          <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Follow Our Journey</h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://www.instagram.com/shecanfoundation.ngo/" target="_blank" rel="noreferrer" className="bg-gray-800 p-3 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white transition-all transform hover:scale-110 shadow-lg">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/company/shecanfoundation" target="_blank" rel="noreferrer" className="bg-gray-800 p-3 rounded-full bg-[#2D68C4] text-white transition-all transform hover:scale-110 shadow-lg">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="text-center text-sm text-gray-500 mt-16 border-t border-gray-800 pt-8 px-6">
        &copy; {new Date().getFullYear()} She Can Foundation. All rights reserved. <br className="md:hidden" /> Registered Under the Indian Society Act, 1860.
      </div>
    </footer>
  );
};

export default Footer;