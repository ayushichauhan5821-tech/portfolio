import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaGlobe, FaArrowRight } from "react-icons/fa";

const services = [
  { title: "Web Design", icon: <FaGlobe size={40} />, desc: "Professional web templates tailored to your brand identity." },
  { title: "Web Development", icon: <FaCode size={40} />, desc: "Scalable MERN stack applications with clean and efficient code.", highlight: true },
  { title: "Graphic Design", icon: <FaPaintBrush size={40} />, desc: "Stunning UI/UX designs that elevate user engagement." },
];

const Services = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="relative min-h-screen bg-[#0f172a] dark:bg-gradient-to-br dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] text-white px-6 md:px-16 py-24 transition-colors duration-500 overflow-hidden">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Offer</span>
        </h2>
        <div className="h-1.5 w-24 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_20px_#22d3ee]"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className={`relative p-10 rounded-[2.5rem] text-center border transition-all duration-500 overflow-hidden group
              ${service.highlight 
                ? "bg-cyan-400/10 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.2)]" 
                : "bg-white/5 border-white/10 backdrop-blur-xl hover:border-cyan-400/50 shadow-2xl"}`}
          >
            {/* Animated Icon Container */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-cyan-400 mb-8 flex justify-center"
            >
              <div className="p-6 rounded-3xl bg-cyan-400/10 shadow-inner group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
            <p className="text-gray-400 text-base mb-10 leading-relaxed">
              {service.desc}
            </p>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="group/btn relative w-full py-4 rounded-2xl font-black bg-cyan-400 text-black flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-tighter">Learn More</span>
              <FaArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>
            </motion.button>

            {/* Glowing Corner decoration */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Internal Style for smooth transitions */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Services;