import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth Scroll Function (Pure JS)
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0f172a] dark:bg-[#0b1120] text-white pt-20 pb-10 px-6 md:px-16 overflow-hidden border-t border-white/5">
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-black text-cyan-400 tracking-tighter">
            CHAUHAN<span className="text-white"> AYUSHI</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            Turning complex problems into elegant, high-performance web solutions. 
            Specializing in the MERN stack and modern UI/UX designs.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, url: "https://facebook.com" },
              { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
              { icon: <FaGithub />, url: "https://github.com/ayushichauhan5821-tech" },
              { icon: <FaEnvelope />, url: "mailto:ayushichauhan5821@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links (Now with Click Scroll) */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
              <li key={link}>
                <button 
                  onClick={() => handleScroll(link.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2 group text-sm"
                >
                  <span className="h-px w-0 group-hover:w-4 bg-cyan-400 transition-all"></span>
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Services</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="cursor-default hover:text-cyan-400 transition-colors">Web Development</li>
            <li className="cursor-default hover:text-cyan-400 transition-colors">UI/UX Design</li>
            <li className="cursor-default hover:text-cyan-400 transition-colors">React Applications</li>
            <li className="cursor-default hover:text-cyan-400 transition-colors">API Integration</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Stay Updated</h3>
          <p className="text-gray-400 text-sm">Subscribe to get the latest tech insights.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400 transition-all text-sm"
            />
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-cyan-400 text-black font-bold rounded-xl text-xs hover:bg-white transition-colors">
              JOIN
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs text-center md:text-left">
          &copy; {currentYear} Chauhan Ayushi. All rights reserved. 
          <span className="block md:inline mt-1 md:mt-0 md:ml-2 text-cyan-400/50">Designed with Passion.</span>
        </p>

        {/* Back To Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-400 transition-all"
        >
          Back to Top 
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all">
            <FaArrowUp />
          </div>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;