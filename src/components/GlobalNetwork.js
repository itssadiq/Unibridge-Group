"use client";

import { motion } from "framer-motion";

export default function GlobalNetwork() {
  const stats = [
    { label: "Countries Reached", value: "45+" },
    { label: "Partner Institutions", value: "120" },
    { label: "Active Students", value: "25,000+" },
    { label: "Programs Offered", value: "85" },
  ];

  return (
    <section id="network" className="py-24 bg-unibridge-red text-white relative creative-clip-path mt-[-50px] pb-32">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Global Presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-red-100 max-w-2xl mx-auto font-medium"
          >
            Connecting minds across continents to build a truly borderless educational network.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center hover:bg-white hover:text-unibridge-red transition-all duration-300 group"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-3">{stat.value}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-red-200 group-hover:text-unibridge-red/80 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
