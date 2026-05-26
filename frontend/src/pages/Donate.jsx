import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import { FaCoffee, FaUtensils, FaQrcode, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '../components/Footer';


const Campaigns = () => {
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

  const donationTiers = [
    { amount: "₹500", impact: "5 girls receive pads for 1 month", color: "border-red-400" },
    { amount: "₹1,500", impact: "15 girls receive pads for 3 months", color: "border-orange-400" },
    { amount: "₹5,000", impact: "25 girls continue school with dignity", color: "border-indigo-400" },
    { amount: "₹10,000", impact: "An entire classroom is free from shame", color: "border-purple-400" }
  ];

  return (
    <>
      <div className="pt-40 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
        
        {/* 1. Main Campaign Hero Section */}
        <section className="max-w-5xl mx-auto px-6 mb-20 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block py-1 px-4 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-sm tracking-widest uppercase mb-6 shadow-sm">
              Urgent Appeal
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 dark:text-red-500 mb-8 leading-tight drop-shadow-sm">
              "Her Period Shouldn't End Her Education!"
            </h1>
            
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl text-left border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6 font-light">
                Every month, a 13-year-old girl in a small village is forced to miss five days of school. Not because she doesn’t want to learn. Not because she is lazy. But because she cannot afford something as basic as a sanitary pad.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                She hides at home in shame. She uses rags, newspapers, even sand — risking her health and her dignity. Slowly, her dreams of education, freedom, and self-respect begin to fade.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 2. The Hard Truth (Stats Section) */}
        <section className="w-full bg-red-500 text-white py-16 mb-24 shadow-inner">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-5xl md:text-6xl font-black mb-4">1 in 5</h3>
              <p className="text-xl text-red-100 font-medium">Girls in India drop out of school because of periods.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-5xl md:text-6xl font-black mb-4">12 Crore+</h3>
              <p className="text-xl text-red-100 font-medium">Women and girls still lack access to proper menstrual hygiene.</p>
            </motion.div>
          </div>
        </section>

        {/* 3. Perspective & Impact Comparison Section */}
        <section className="max-w-6xl mx-auto px-6 mb-24 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-indigo-900 dark:text-white mb-12">
            One Small Choice, A Lifetime Of Dignity
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Card 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex items-start gap-5 text-left">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-full text-2xl shrink-0"><FaCoffee /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">The price of a Coffee (₹300)</h4>
                <p className="text-gray-600 dark:text-gray-400">Can provide sanitary pad kits to 3 girls for an entire month, keeping them safe and in school.</p>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex items-start gap-5 text-left">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full text-2xl shrink-0"><FaUtensils /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">The cost of a Dinner (₹1,000)</h4>
                <p className="text-gray-600 dark:text-gray-400">Can keep 10 girls safe, dignified, and confident throughout their school sessions.</p>
              </div>
            </motion.div>
          </div>

          {/* 4. Donation Tier Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
            {donationTiers.map((tier, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 ${tier.color} text-center flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-3xl font-extrabold text-indigo-900 dark:text-white mb-3">{tier.amount}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm leading-relaxed">{tier.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Direct Action Section: Clean Vertical Flow Layout */}
        <section className="max-w-6xl mx-auto px-6 mb-24 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={slideInLeft}
              className="lg:col-span-5 relative group max-w-sm mx-auto lg:max-w-none"
            >
              <div className="absolute inset-0 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 h-[450px]">
                <img 
                  src="/donate.avif" 
                  alt="She Can Foundation Empowerment" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-indigo-900/10 flex flex-col items-center justify-center text-center p-6 text-gray-500">
                  <span className="text-5xl mb-4">📸</span>
                  <p className="font-semibold text-lg text-indigo-900">Place vertical image here</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }} 
              variants={slideInRight}
              className="lg:col-span-7"
            >
              <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 text-white rounded-3xl p-10 md:p-10 shadow-2xl">
                
                <div className="flex flex-col text-center md:text-left">
                  
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Choose How You Wish to Give</h3>
                    <p className="text-indigo-200 mb-8 leading-relaxed text-lg">
                      Your gift today is not charity. It is the solid line between a girl living in silence or rising up with dignity. Secure payments via Razorpay.  
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <p className="text-indigo-200 text-sm font-medium mb-4 uppercase tracking-wider">
                        <a 
                        href="https://pages.razorpay.com/shecanfoundation" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-bold transition-all"
                        >
                            Go to Online Payment Portal <FaExternalLinkAlt className="text-sm" />
                        </a>  Or Donate directly via UPI
                    </p>
                    <div className="bg-white p-4 rounded-2xl shadow-xl max-w-[200px] text-center">
                      <div className="bg-white p-2 rounded-xl border border-gray-200 flex justify-center">
                        <QRCodeSVG
                          value="upi://pay?cu=INR&mc=8398&mode=19&pa=shecanfoundatio928233.rzp@rxairtel&tn=PaymentToSheCanFoundation&tr=RHtg1BusZkp6iyqrv2"
                          size={140}
                          level="H" 
                          bgColor="#ffffff"
                          fgColor="#000000"
                        />
                      </div>
                      <p className="text-gray-900 font-bold text-xs mt-3 tracking-wide uppercase">
                        Scan UPI QR Code
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Campaigns;