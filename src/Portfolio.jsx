import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";

const projects = [
  { 
    title: "Modern E-Commerce", 
    category: "Development", 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
    github: "#"
  },
  { 
    title: "Financial Dashboard", 
    category: "UI/UX", 
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    link: "#",
    github: "#"
  },
  { 
    title: "Creative Agency", 
    category: "Web Design", 
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "#",
    github: "#"
  },
  { 
    title: "SaaS Landing Page", 
    category: "Development", 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    link: "#",
    github: "#"
  },
  { 
    title: "Mobile App UI", 
    category: "UI/UX", 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "#",
    github: "#"
  },
  { 
    title: "Fitness Tracker", 
    category: "Web Design", 
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    link: "#",
    github: "#"
  },
];

const categories = ["All", "Web Design", "Development", "UI/UX"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(proj => 
    filter === "All" ? true : proj.category === filter
  );

  return (
    <section id="portfolio" className="relative min-h-screen bg-[#0f172a] dark:bg-gradient-to-br dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] text-white px-6 md:px-16 py-24 transition-colors duration-500 overflow-hidden">
      
      {/* Background Neon Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Portfolio</span>
        </h2>
        <div className="h-1.5 w-24 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_20px_#22d3ee]"></div>
      </motion.div>

      {/* Filter Bar - Modern Dark Style */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border-2 ${
              filter === cat 
              ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]" 
              : "bg-[#1e293b]/50 text-gray-400 border-white/5 hover:border-cyan-400/50 hover:text-cyan-400 backdrop-blur-md"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item) => (
            <motion.div
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-[#1e293b]/40 border border-white/5 shadow-2xl backdrop-blur-xl"
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden p-3">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6 bg-cyan-400 text-black text-[10px] px-3 py-1 rounded-lg font-black uppercase tracking-widest shadow-lg">
                  {item.category}
                </div>
              </div>

              {/* Hover Content - Neon Glass Effect */}
              <div className="absolute inset-0 bg-[#0f172a]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 backdrop-blur-md">
                <h3 className="text-2xl font-black mb-2 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                <p className="text-cyan-400/80 text-sm mb-8 font-medium tracking-wide">Premium Web Solution</p>
                
                <div className="flex gap-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <motion.a 
                    whileHover={{ y: -5 }}
                    href={item.link} 
                    className="w-14 h-14 bg-cyan-400 rounded-2xl flex items-center justify-center text-black shadow-xl hover:bg-white transition-colors"
                  >
                    <FaEye size={22} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -5 }}
                    href={item.github} 
                    className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition-all shadow-xl backdrop-blur-md"
                  >
                    <FaGithub size={22} />
                  </motion.a>
                </div>
              </div>

              {/* Static Info (When not hovering) */}
              <div className="px-8 pb-8 pt-2 flex justify-between items-center">
                 <div>
                    <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1 opacity-60">{item.category}</p>
                    <h4 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                 </div>
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <FaExternalLinkAlt className="text-cyan-400 text-sm" />
                 </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;