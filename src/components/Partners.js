"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const partnerLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <p className="text-unibridge-gray font-bold uppercase tracking-widest text-sm">Trusted By Industry Leaders Worldwide</p>
        </div>

        {/* Endless scrolling ribbon effect via CSS animation could be added here, using simple flex for now */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {partnerLogos.map((logo, index) => (
            <div key={index} className="h-8 md:h-10 cursor-pointer hover:scale-110 transition-transform">
              <img src={logo} alt="Partner Logo" className="h-full object-contain" />
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
