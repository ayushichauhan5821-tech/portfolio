import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "./assets/profile.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "course", label: "Courses" },
    { id: "experience", label: "Experience" },
    { id: "details", label: "Details" },
  ];

  // Animation Variants
  const tabContentVariant = {
    active: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    inactive: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const listVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    /* ID ADDED HERE FOR FOOTER NAVIGATION */
    <section id="about" className="relative min-h-screen bg-[#0f172a] dark:bg-gradient-to-br dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] text-white px-4 md:px-16 py-24 selection:bg-cyan-400 selection:text-black overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
        </h2>
        <div className="h-1.5 w-24 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_20px_#22d3ee]"></div>
      </motion.div>

      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.8fr] gap-12 max-w-7xl mx-auto items-start">
        
        {/* LEFT: Profile Card */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative group w-full flex justify-center lg:sticky lg:top-32"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#1e293b]/60 backdrop-blur-xl w-full max-w-[350px] aspect-[4/5] rounded-[2.5rem] flex flex-col items-center justify-end pb-12 border border-white/10 overflow-hidden shadow-2xl">
            
            <div className="absolute top-12">
              <div className="relative p-1.5 rounded-[2rem] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-transparent" 
                  style={{ animation: 'spin 4s linear infinite' }}
                ></div>
                <div className="relative bg-[#1e293b] p-1 rounded-[2rem] z-10">
                  <img
                    src={profile}
                    alt="Chauhan Ayushi"
                    className="w-32 h-32 md:w-44 md:h-44 rounded-[1.8rem] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="text-center z-10 px-6">
              <h3 className="text-2xl font-black text-white tracking-tight">Chauhan Ayushi</h3>
              <div className="h-0.5 w-8 bg-cyan-400 mx-auto my-3 rounded-full"></div>
              <p className="text-cyan-400 font-bold uppercase text-[10px] tracking-[0.4em]">MERN Stack Developer</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Tabs & Content */}
        <div className="w-full bg-[#1e293b]/40 p-6 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl shadow-2xl min-h-[550px]">
          
          {/* Tabs Navigation */}
          <div className="flex space-x-2 md:space-x-8 border-b border-white/5 mb-10 overflow-x-auto pb-2 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-2 py-4 text-sm md:text-base font-black transition-all duration-300 whitespace-nowrap uppercase tracking-widest ${
                  activeTab === tab.id ? "text-cyan-400" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="aboutUnderline" 
                    className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" 
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariant}
              initial="inactive"
              animate="active"
              exit="inactive"
              className="min-h-[300px]"
            >
              {/* Content rendering remains same with improved styling */}
              {activeTab === "education" && (
                <div className="space-y-8">
                  {[
                    { title: "BCA", inst: "VNSGU University", date: "2024 - 26", status: "Pursuing" },
                    { title: "HSC", inst: "Gautami Kanya Vidhyalaya", date: "2023 - 24", status: "82.40%" },
                    { title: "SSC", inst: "Gautami Kanya Vidhyalaya", date: "2021 - 22", status: "82.40%" }
                  ].map((edu, i) => (
                    <motion.div 
                      key={i} custom={i} variants={listVariant} initial="hidden" animate="visible"
                      className="group relative pl-10 border-l-2 border-white/5 hover:border-cyan-400 transition-all duration-500"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-white/20 group-hover:border-cyan-400 group-hover:scale-125 transition-all"></div>
                      <h4 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{edu.title}</h4>
                      <p className="text-gray-400 mt-1 font-medium italic">{edu.inst}</p>
                      <div className="flex items-center gap-4 mt-4 text-[10px] font-black uppercase tracking-widest">
                        <span className="bg-cyan-400/10 text-cyan-400 px-4 py-1.5 rounded-lg border border-cyan-400/20">{edu.date}</span>
                        <span className="text-gray-500 group-hover:text-white transition-colors">{edu.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "course" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { name: "Full Stack Development", platform: "Udemy", skills: "React, Node.js", year: "2025" },
                    { name: "UI/UX Design Masterclass", platform: "Coursera", skills: "Figma, UI Design", year: "2024" },
                    { name: "Tailwind CSS Pro", platform: "Self-Paced", skills: "Responsive Web", year: "2024" },
                    { name: "Modern JavaScript", platform: "FreeCodeCamp", skills: "ES6+, Logic", year: "2023" }
                  ].map((course, i) => (
                    <motion.div 
                      key={i} custom={i} variants={listVariant} initial="hidden" animate="visible"
                      className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-cyan-400/50 hover:bg-white/10 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-4">
                         <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest">{course.year}</span>
                         <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping"></div>
                      </div>
                      <h4 className="text-lg font-black mt-1 leading-tight">{course.name}</h4>
                      <p className="text-gray-500 text-sm mb-4">{course.platform}</p>
                      <span className="text-[9px] bg-white/10 text-gray-300 px-3 py-1.5 rounded-full font-bold uppercase tracking-tighter group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                        {course.skills}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Experience and Details tabs follow same logic with updated Dark UI classes */}
              {activeTab === "experience" && (
                <div className="space-y-8">
                  {[
                    { role: "MERN Stack Developer Intern", company: "Tech Solutions", period: "2025 - Present", desc: "Building responsive UI components using React and Tailwind CSS." },
                    { role: "Freelance Web Designer", company: "Self-Employed", period: "2024 - 2025", desc: "Crafting beautiful landing pages and portfolios for diverse clients." }
                  ].map((exp, i) => (
                    <motion.div 
                      key={i} custom={i} variants={listVariant} initial="hidden" animate="visible"
                      className="group relative pl-10 border-l-2 border-white/5 hover:border-cyan-400 transition-all duration-500"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-white/20 group-hover:border-cyan-400 transition-all"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                        <h4 className="text-xl font-black text-white group-hover:text-cyan-400 uppercase tracking-tight">{exp.role}</h4>
                        <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">{exp.period}</span>
                      </div>
                      <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4 italic">{exp.company}</p>
                      <p className="text-gray-500 mt-3 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{exp.desc}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "details" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Email", value: "ayushichauhan5821@gmail.com", color: "text-cyan-400" },
                    { label: "Location", value: "Surat, Gujarat", color: "text-gray-300" },
                    { label: "Availability", value: "Open for Work", color: "text-green-400" },
                    { label: "Freelance", value: "Available", color: "text-blue-400" }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:border-cyan-400/30 hover:bg-white/10 transition-all flex flex-col gap-2">
                      <span className="text-[10px] uppercase text-gray-500 font-black tracking-[0.2em]">{item.label}</span>
                      <span className={`text-sm md:text-base font-black break-words tracking-tight ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Internal Custom Styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default About;