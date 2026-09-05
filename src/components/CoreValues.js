"use client";

import { motion } from "framer-motion";
import { Globe2, Users, Trophy, HeartHandshake, ArrowRight } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Accessibility",
      desc: "Breaking down geographical and financial barriers to ensure quality education reaches everyone.",
      icon: <Globe2 size={24} className="text-unibridge-blue group-hover:text-white transition-colors" />,
    },
    {
      title: "Inclusivity",
      desc: "Fostering environments where diverse perspectives are celebrated and every voice is heard.",
      icon: <Users size={24} className="text-unibridge-red group-hover:text-white transition-colors" />,
    },
    {
      title: "Excellence",
      desc: "Setting the highest standards in academic rigor, partnerships, and professional outcomes.",
      icon: <Trophy size={24} className="text-unibridge-blue group-hover:text-white transition-colors" />,
    },
    {
      title: "Impact",
      desc: "Creating sustainable, positive change in communities through empowered individuals.",
      icon: <HeartHandshake size={24} className="text-unibridge-red group-hover:text-white transition-colors" />,
    }
  ];

  return (
    <section id="values" className="py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left sticky content */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-unibridge-dark mb-6 leading-[1.1]">
                The Principles <br/>
                <span className="text-unibridge-red">That Drive Us.</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
                Our core values aren't just words on a page. They are the guiding framework behind every partnership we build and every student we support.
              </p>
              
              <a href="#about" className="inline-flex items-center text-unibridge-blue font-bold group">
                <span className="border-b-2 border-unibridge-blue pb-1 mr-2 group-hover:text-unibridge-red group-hover:border-unibridge-red transition-colors">
                  Learn about our history
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-unibridge-red transition-all" />
              </a>
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`group relative p-10 bg-unibridge-light rounded-[2rem] hover:bg-unibridge-dark hover:-translate-y-2 transition-all duration-500 ease-out cursor-default overflow-hidden border border-gray-100 ${i % 2 !== 0 ? 'sm:mt-16' : ''}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-unibridge-red/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white group-hover:bg-unibridge-red rounded-full flex items-center justify-center shadow-sm mb-8 transition-colors duration-500">
                      {val.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-unibridge-dark group-hover:text-white mb-4 transition-colors duration-500">
                      {val.title}
                    </h3>
                    
                    <p className="text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed transition-colors duration-500">
                      {val.desc}
                    </p>
                    
                    <div className="mt-8 flex items-center text-sm font-bold text-unibridge-red opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Explore <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
