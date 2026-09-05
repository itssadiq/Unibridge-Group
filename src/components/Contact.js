"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-unibridge-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-unibridge-blue rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Contact Info */}
            <div className="p-12 md:p-20 text-white relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-unibridge-red rounded-full blur-[100px] opacity-40"></div>
              
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Build the Future Together</h2>
                <p className="text-blue-200 text-lg mb-12 font-medium max-w-md">
                  Whether you're looking for educational partnerships or corporate solutions, our team is ready to assist.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-unibridge-red transition-colors">
                      <MapPin className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Head Office</h4>
                      <p className="text-blue-200">College House, Stanley Street,<br/>Manchester, United Kingdom, M11 1LE</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-unibridge-red transition-colors">
                      <Mail className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-blue-200">info@unibridgegroup.co.uk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-unibridge-red transition-colors">
                      <Phone className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-blue-200">+44 161 123 4567</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-12 md:p-20 lg:rounded-l-[3rem] shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">
              <motion.form 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
              >
                <h3 className="text-2xl font-black text-unibridge-dark mb-8">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-unibridge-red/20 focus:border-unibridge-red transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-unibridge-red/20 focus:border-unibridge-red transition-all"
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-unibridge-red/20 focus:border-unibridge-red transition-all"
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea 
                        rows={4}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-unibridge-red/20 focus:border-unibridge-red transition-all resize-none"
                    ></textarea>
                </div>
                
                <button 
                    type="button"
                    className="w-full bg-unibridge-red hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-unibridge-red/30 hover:-translate-y-1"
                >
                    Submit Inquiry
                </button>
              </motion.form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
