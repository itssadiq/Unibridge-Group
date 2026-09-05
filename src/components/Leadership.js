"use client";

import { motion } from "framer-motion";

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Head of Global Partnerships",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Academic Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="leadership" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-unibridge-gold" />
            <span className="text-unibridge-navy font-medium tracking-widest uppercase text-xs">Governance</span>
            <div className="h-[1px] w-8 bg-unibridge-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-unibridge-navy"
          >
            Leadership & Vision
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden mb-6 rounded-sm aspect-[3/4]">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif text-unibridge-navy mb-1">{leader.name}</h3>
                <p className="text-unibridge-gold text-sm tracking-wide uppercase font-medium">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 border-t border-gray-100 pt-10 text-center max-w-4xl mx-auto"
        >
          <p className="text-gray-500 font-light leading-relaxed italic">
            "Our governance structure is built on transparency, integrity, and a steadfast commitment to delivering exceptional educational outcomes. We are guided by leaders who possess deep industry expertise and a shared vision for the future."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
