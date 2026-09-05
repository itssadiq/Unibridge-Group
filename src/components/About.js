"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-unibridge-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Creative Single Image Layout from Hero.js */}
          <div className="w-full hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative w-full aspect-square max-h-[600px] flex items-center justify-center"
            >
              <div className="w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right: Text Content */}
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-unibridge-blue mb-8 leading-tight"
            >
              Who We Are
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-6 font-medium leading-relaxed"
            >
              Unibridgegroup was incepted in 2023 with a clear mission: to leave a lasting impact by bridging gaps in the educational ecosystem.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 mb-10 leading-relaxed"
            >
              We act as a vital nexus, connecting ambitious individuals with premier educational institutions and industry leaders worldwide. Our diverse portfolio spans higher education, professional training, and tailored corporate solutions.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-10"
            >
              {[
                "Unlocking potential through global access",
                "Driving innovation in curriculum and delivery",
                "Fostering sustainable corporate partnerships"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-unibridge-dark font-semibold">
                  <CheckCircle2 className="text-unibridge-red" size={24} />
                  {item}
                </li>
              ))}
            </motion.ul>
            
          </div>
        </div>

      </div>
    </section>
  );
}
