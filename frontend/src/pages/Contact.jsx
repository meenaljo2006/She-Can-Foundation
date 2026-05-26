import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { submitContactForm } from '../services/api';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactForm(formData);
      toast.success('Message Sent Successfully! We will get back to you soon. 🎉');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <>
      <div className="pt-40 pb-10 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
        
        {/* Header Section */}
        <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 dark:text-indigo-400 mb-6">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Want to join our team? Whether you are passionate about education, health, or providing support, there is a place for you. Reach out to us today!
            </p>
          </motion.div>
        </section>

        {/* Contact Content Grid */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: NEW "Ways to Collaborate" Section */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={slideInLeft} 
              className="bg-indigo-900 dark:bg-gray-800 p-10 rounded-3xl shadow-xl text-white h-full"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Let's Create Impact Together</h2>
              <p className="text-indigo-200 dark:text-gray-400 mb-10 leading-relaxed">
                We are always looking for passionate individuals and organizations to join our mission. Here is how you can get involved:
              </p>

              <div className="space-y-8">
                {/* Point 1 */}
                <div className="flex gap-5">
                  <div className="bg-orange-500 p-4 rounded-full h-fit text-2xl shadow-lg">
                    🤝
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Become a Volunteer</h4>
                    <p className="text-indigo-200 dark:text-gray-400 text-sm leading-relaxed">
                      Join our on-ground campaigns and help us educate, mentor, and empower women in local communities.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-5">
                  <div className="bg-orange-500 p-4 rounded-full h-fit text-2xl shadow-lg">
                    🏢
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Partner With Us</h4>
                    <p className="text-indigo-200 dark:text-gray-400 text-sm leading-relaxed">
                      We collaborate with corporations, tech companies, and institutions for CSR initiatives and skill-development programs.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-5">
                  <div className="bg-orange-500 p-4 rounded-full h-fit text-2xl shadow-lg">
                    💡
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Share an Idea</h4>
                    <p className="text-indigo-200 dark:text-gray-400 text-sm leading-relaxed">
                      Have a unique tech solution, project idea, or a new way to break barriers? We would love to hear from you.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={slideInRight} 
              className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border-t-4 border-orange-500 h-full flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-indigo-900 dark:text-white mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe" 
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    required 
                    rows="4" 
                    placeholder="How can we collaborate?" 
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition shadow-lg disabled:opacity-70 mt-2"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Contact;