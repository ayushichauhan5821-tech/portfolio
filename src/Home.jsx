import React from "react";
import { motion } from "framer-motion"; // Framer Motion installed honi chahiye
import profile from "./assets/profile.png";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";

const Home = ({ scrollToSection, contactRef, portfolioRef }) => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 md:px-16 pt-32 pb-10 flex items-center overflow-hidden">
      
      {/* Background Neon Blobs - Enhanced */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

      <div className="grid md:grid-cols-2 items-center gap-12 w-full max-w-7xl mx-auto relative z-10">
        
        {/* --- LEFT CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left flex flex-col gap-6"
        >
          <div>
            <h4 className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-sm mb-2">Portfolio of</h4>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tighter leading-tight">Chauhan Ayushi</h2>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-200">
              MERN Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold border-b-2 border-cyan-400/30">Developer</span>
            </h3>
          </div>
          <p className="text-gray-300 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
            Professional web developer with 3 years of experience crafting high-performance, visually stunning React & Node.js applications.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 pt-3">
            {[
              { icon: <FaFacebookF />, url: "https://facebook.com" },
              { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
              { icon: <FaGithub />, url: "https://github.com/ayushichauhan5821-tech" }
            ].map((social, i) => (
              <motion.a 
                key={i} href={social.url} target="_blank" rel="noopener noreferrer" 
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center rounded-2xl border border-cyan-400/30 text-cyan-400 bg-cyan-400/5 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-xl"
              >
                {social.icon}
              </motion.a>
            ))}
            <motion.a 
              href="mailto:ayushichauhan5821@gmail.com" 
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-2xl border border-cyan-400/30 text-cyan-400 bg-cyan-400/5 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-xl"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 pt-6">
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="bg-cyan-400 text-black px-10 py-3.5 rounded-full font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Download CV
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(portfolioRef)} 
              className="border-2 border-cyan-400/50 px-10 py-3.5 rounded-full font-bold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all backdrop-blur-sm"
            >
              My Portfolio
            </motion.button>
          </div>
        </motion.div>

        {/* --- RIGHT CONTENT (ADVANCED IMAGE) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2 relative"
        >
          {/* Animated Blob Shape with Image */}
          <div className="relative group">
            {/* Pulsing Glow behind image */}
            <div className="absolute inset-0 blur-3xl bg-cyan-500 opacity-20 group-hover:opacity-50 transition-opacity duration-700animate-pulse"></div>

            {/* Morphing Container */}
            <motion.div 
              animate={{ 
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 30% 70% / 60% 40% 60% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-[280px] h-[320px] md:w-[360px] md:h-[400px] border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)] overflow-hidden relative group-hover:border-white transition-colors duration-500"
            >
              <img 
                src={profile} 
                alt="profile" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#1e293b] rounded-2xl border border-white/10 flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm"
            >
               <FaReact className="text-4xl text-cyan-400 animate-spin-slow" />
               <span className="text-[10px] font-bold text-gray-400 mt-1">REACT</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -left-6 w-16 h-16 bg-[#1e293b] rounded-full border border-white/10 flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm"
            >
               <FaNodeJs className="text-3xl text-green-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Internal Style for slow rotation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;