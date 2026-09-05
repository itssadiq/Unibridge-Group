"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-unibridge-blue">
      {/* Dynamic Background Blob */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-unibridge-red/20 blob-shape blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 blob-shape blur-3xl z-0 pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              <span className="block text-white mb-2">Bridging Education,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-unibridge-red">Building Futures.</span>
            </h1>
            <p className="text-lg text-blue-100/80 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              We believe education is the most powerful tool for transforming lives. Unibridge Group is a global leader in providing world-class educational pathways and professional development.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a href="#about" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-unibridge-red rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(216,21,22,0.4)]">
                <span className="mr-2 relative z-10">Discover Our Mission</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 font-bold text-white hover:text-unibridge-red transition-colors border border-white/20 rounded-full hover:bg-white">
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Bento Box Image Layout from About.js */}
        <div className="w-full lg:w-1/2 hidden md:block">
          <div className="relative w-full aspect-square max-h-[600px]">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-10 right-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-lg border-4 border-white/10 z-20"
            >
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" alt="University" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-10 left-0 w-[65%] h-[50%] rounded-3xl overflow-hidden shadow-xl z-30 border-4 border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" alt="Lecture" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-[40%] left-[10%] w-[30%] aspect-square bg-unibridge-red rounded-full flex flex-col items-center justify-center text-white shadow-2xl z-40 border-4 border-white/10"
            >
              <span className="text-4xl font-black">2023</span>
              <span className="text-xs font-bold uppercase tracking-widest mt-1">Founded</span>
            </motion.div>
          </div>
        </div>

      </div>
      
      {/* Diagonal Cut Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120H0V0l1200 120z" fill="#F8F9FA"></path>
        </svg>
      </div>
    </section>
  );
}
