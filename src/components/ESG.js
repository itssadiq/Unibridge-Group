"use client";

import { motion } from "framer-motion";

export default function ESG() {
  return (
    <section className="section-padding bg-unibridge-navy text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-unibridge-gold" />
              <span className="text-unibridge-gold font-medium tracking-widest uppercase text-xs">Sustainability</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              ESG & <br />
              <span className="italic text-white/80">Social Impact</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-light leading-relaxed">
              <p>
                At Unibridge Group, our responsibility extends beyond the classroom. We are deeply committed to Environmental, Social, and Governance (ESG) principles, ensuring our operations contribute positively to the communities we serve.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-4">
                  <span className="text-unibridge-gold font-serif text-xl mt-1">01.</span>
                  <div>
                    <strong className="text-white block font-medium">Environmental Stewardship</strong>
                    <span className="text-sm block mt-1">Implementing green campus initiatives and reducing our carbon footprint across all operations.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-unibridge-gold font-serif text-xl mt-1">02.</span>
                  <div>
                    <strong className="text-white block font-medium">Community Engagement</strong>
                    <span className="text-sm block mt-1">Providing scholarships and free resources to underrepresented communities globally.</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[500px] relative rounded-sm overflow-hidden"
          >
             <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop" 
                alt="Social Impact" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-unibridge-navy mix-blend-overlay"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
