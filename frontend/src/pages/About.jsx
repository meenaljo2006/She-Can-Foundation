import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/Footer';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const unfoldBanner = {
    hidden: { scaleY: 0, opacity: 0, transformOrigin: "top" },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 1, ease: "circOut" } }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      
      {/* 1. Global Vision, Local Action */}
      <section className="max-w-7xl mx-auto px-6 mb-32 mt-16 pl-32 pr-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInLeft}>
            <span className="inline-block py-1 px-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-sm tracking-widest uppercase mb-6 shadow-sm">
              Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-900 dark:text-indigo-400 mb-6 leading-tight">
              Global Vision, <br/><span className="text-orange-500">Local Action.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-light">
              We are <strong className="text-gray-800 dark:text-gray-100 font-bold">She Can Foundation</strong>, a non-governmental organization dedicated to empowering women and creating a more equitable society.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We provide support, resources, and training to women in communities across the globe, working closely with local organizations, governments, and communities to ensure that our programs are effective and sustainable.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInRight} className="relative">
            <div className="absolute inset-0 rounded-3xl transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10"></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 relative z-10">
              <img src="/about.png" alt="She Can Foundation Work" className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Founder's Message */}
      <section className="px-4 mb-32 mt-20"> 
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.8 }} className="w-32 h-4 bg-orange-500 rounded-t-xl z-20"></motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={unfoldBanner} className="w-full bg-gradient-to-br from-indigo-900 to-indigo-950 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-10 md:p-16 relative z-10 border-t-4 border-orange-500 text-center">
            
            <div className="absolute top-2 left-6 text-[100px] text-white/10 font-serif leading-none pointer-events-none">"</div>

            <h2 className="text-orange-400 font-bold mb-6 tracking-widest uppercase text-sm">A Message from our Founder</h2>
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed italic mb-10">
              Together, we can break down barriers and empower women. At She Can Foundation, we believe that if we all do our part, there is no challenge too great to overcome. Join us in our mission to create a world where every woman has the opportunity to thrive and succeed.
            </p>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wide">REETA MISHRA</h3>
              <p className="text-indigo-300 font-medium mt-1">Founder & President, She Can Foundation</p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. Certificate & Social Links Section */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="w-full bg-indigo-50 dark:bg-gray-800/40 py-20 border-t border-indigo-100 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6">
            
            <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 dark:text-white mb-12 text-center">
              Indian Society Registration Certificate
            </h3>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div className="bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 -rotate-2 hover:rotate-0 transition-transform duration-500 order-2 md:order-1">
                 <img src="/certificate.png" alt="NGO Certificate" className="w-full h-auto rounded-xl object-contain border border-gray-100 dark:border-gray-800" />
              </div>
              
              <div className="order-1 md:order-2 mb-8 md:mb-0">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We are proud to be registered under the <strong>Indian Society Act, 1860</strong>, and we are committed to operating with transparency and accountability. Our registration is a testament to our dedication to creating positive change in the world and to our commitment to empowering women and creating a more equitable society.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  As a registered non-profit organization, we are held to a high standard of integrity and professionalism, and we take that responsibility very seriously. We are honored to have received this certificate from the government, and we are committed to upholding the values of the She Can Foundation as we continue our mission to empower women and create a better world for all.
                </p>
              </div>

            </div>
          </div>
        </motion.section>

      <Footer />
    </div>
  );
};

export default About;