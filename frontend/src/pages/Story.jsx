import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Story = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const galleryImages = [
    { id: 1, src: "public/ngo1.webp", style: "md:col-span-2 md:row-span-2" },
    { id: 2, src: "public/ngo2.webp", style: "md:col-span-1 md:row-span-1" },
    { id: 3, src: "public/ngo3.avif", style: "md:col-span-1 md:row-span-2" }, 
    { id: 4, src: "public/ngo7.avif", style: "md:col-span-1 md:row-span-1" }, 
    { id: 5, src: "public/ngo5.webp", style: "md:col-span-2 md:row-span-1" }, 
    { id: 6, src: "public/ngo6.webp", style: "md:col-span-1 md:row-span-1" }, 
    { id: 7, src: "public/ngo4.png", style: "md:col-span-1 md:row-span-1" }, 
  ];

  return (
    <>
      <div className="pt-40 pb-20 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        
        {/* 1. "How it started" Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block py-1 px-4 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-sm tracking-widest uppercase mb-6 shadow-sm">
              Our Origin
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-900 dark:text-indigo-400 mb-10 leading-tight">
              How It <span className="text-orange-500">Started?</span>
            </h1>
            
            <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-justify md:text-center space-y-6">
              <p>
                <strong>She Can Foundation</strong> was founded by a group of individuals who shared a common vision of creating a world where every woman has the opportunity to thrive and succeed. The idea for the organization was born out of a desire to make a real difference in the lives of women in communities across the globe.
              </p>

            </div>
          </motion.div>
        </section>

        {/* 2. NGO Work Photo Wall (Collage) */}
        <section className="max-w-6xl mx-auto px-6 mb-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px] mb-20"
          >
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className={`${image.style} relative overflow-hidden rounded-xl border-4 border-gray-100 dark:border-gray-800 shadow-xl group bg-gray-200`}
              >
                <img 
                  src={image.src} 
                  alt={`NGO Work ${image.id}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none"></div>
              </div>
            ))}
          </motion.div>
          <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-justify md:text-center space-y-6">
          <p className="font-medium text-indigo-700 dark:text-indigo-300 text-xl md:text-2xl mt-8 italic">
            "With a shared passion and a determination to create positive change, we set out to make our vision a reality, and She Can Foundation was born."
          </p>
          </div>

        </section>

      </div>
      <Footer />
    </>
  );
};

export default Story;