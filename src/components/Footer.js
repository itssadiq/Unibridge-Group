"use client";

import { ArrowRight, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-1 pr-4">
            <div className="text-3xl font-black text-unibridge-dark tracking-tight mb-6">
              UNIBRIDGE.
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8">
              A global leader in educational pathways and corporate training, acting as the vital nexus between ambition and achievement.
            </p>
            <div className="flex gap-6 text-sm font-bold text-unibridge-dark">
              <a href="#" className="hover:text-unibridge-red transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight size={14} /></a>
              <a href="#" className="hover:text-unibridge-red transition-colors flex items-center gap-1">Twitter <ArrowUpRight size={14} /></a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-unibridge-dark font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#about" className="hover:text-unibridge-red transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-unibridge-red"><ArrowRight size={14}/></span> About Us</a></li>
              <li><a href="#portfolio" className="hover:text-unibridge-red transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-unibridge-red"><ArrowRight size={14}/></span> Our Portfolio</a></li>
              <li><a href="#network" className="hover:text-unibridge-red transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-unibridge-red"><ArrowRight size={14}/></span> Global Network</a></li>
              <li><a href="#resources" className="hover:text-unibridge-red transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-unibridge-red"><ArrowRight size={14}/></span> News & Insights</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-unibridge-dark font-bold text-lg mb-6">Divisions</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-unibridge-red transition-colors block">Higher Education</a></li>
              <li><a href="#" className="hover:text-unibridge-red transition-colors block">Professional Training</a></li>
              <li><a href="#" className="hover:text-unibridge-red transition-colors block">Corporate Solutions</a></li>
              <li><a href="#" className="hover:text-unibridge-red transition-colors block">Global Consulting</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-unibridge-dark font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-5 text-sm font-medium text-gray-600">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-unibridge-red/50 group-hover:text-unibridge-red flex-shrink-0 mt-0.5 transition-colors" />
                <span>College House, Stanley Street, Manchester, M11 1LE, UK</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-unibridge-red/50 group-hover:text-unibridge-red flex-shrink-0 transition-colors" />
                <a href="mailto:info@unibridgegroup.co.uk" className="hover:text-unibridge-dark transition-colors">info@unibridgegroup.co.uk</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-unibridge-red/50 group-hover:text-unibridge-red flex-shrink-0 transition-colors" />
                <a href="tel:+441611234567" className="hover:text-unibridge-dark transition-colors">+44 161 123 4567</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-unibridge-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-400">
          <p>&copy; {new Date().getFullYear()} Unibridge Group Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-unibridge-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-unibridge-dark transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-unibridge-dark transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
