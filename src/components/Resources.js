"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Resources() {
  const articles = [
    {
      title: "The Future of Digital Learning in Higher Education",
      category: "Insights",
      date: "Sep 12",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Unibridge Announces New Global Scholarship Fund",
      category: "News",
      date: "Aug 28",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "How Industry Partnerships Shape Academic Outcomes",
      category: "Updates",
      date: "Aug 15",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-unibridge-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-unibridge-blue"
            >
              News & Insights
            </motion.h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="flex items-center gap-2 text-unibridge-red font-bold hover:text-red-700 transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md"
          >
            View All Articles <ArrowRight size={18} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-unibridge-blue">
                  {article.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-unibridge-red font-bold text-sm mb-3">{article.date}</p>
                <h3 className="text-xl font-bold text-unibridge-dark leading-snug group-hover:text-unibridge-blue transition-colors mb-4">
                  {article.title}
                </h3>
                <div className="mt-auto flex items-center text-unibridge-gray group-hover:text-unibridge-red transition-colors font-semibold text-sm">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
