"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const portfolio = [
    {
      title: "Higher Education",
      desc: "Partnering with prestigious universities to deliver undergraduate and postgraduate pathways that guarantee academic excellence and global recognition.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Professional Training",
      desc: "Equipping the modern workforce with cutting-edge skills through intensive bootcamps, certifications, and specialized vocational programs.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Corporate Solutions",
      desc: "Tailored B2B educational consulting and upskilling programs designed to foster sustainable corporate growth and leadership development.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-unibridge-dark text-white overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-unibridge-red/10 blob-shape blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Our Business Portfolio
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 max-w-xl font-medium"
            >
              We bridge the gap between education and opportunity through a diversified and highly specialized global portfolio.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="flex items-center gap-2 text-unibridge-red font-bold hover:text-white transition-colors">
              Explore All Divisions <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Interactive Expanding Cards */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px]">
          {portfolio.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <motion.div
                key={index}
                layout
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  layout: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { delay: index * 0.1 }
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer ${
                  isActive ? "lg:flex-grow-[3]" : "lg:flex-grow-[1]"
                } h-1/3 lg:h-full group`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent" : "bg-black/60 group-hover:bg-unibridge-red/40"
                  }`}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors duration-300 ${
                      isActive ? "bg-unibridge-red border-unibridge-red text-white" : "border-white text-white group-hover:border-unibridge-red group-hover:text-unibridge-red"
                    }`}>
                      0{index + 1}
                    </div>
                    <h3 className={`font-black uppercase tracking-wide transition-all duration-300 ${
                      isActive ? "text-3xl lg:text-4xl text-white" : "text-xl text-white/80"
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 text-lg lg:pr-20 mb-6 font-medium leading-relaxed">
                          {item.desc}
                        </p>
                        <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-unibridge-dark transition-colors font-bold text-sm">
                          Learn More
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
