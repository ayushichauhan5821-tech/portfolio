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
    <div className="relative min-h-screen bg-[#1a222a] text-white px-4 md:px-16 py-24 selection:bg-cyan-400 selection:text-black overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
        </h2>
        <div className="h-1.5 w-24 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_15px_#22d3ee]"></div>
      </motion.div>

      <div className="flex flex-col md:grid md:grid-cols-[1fr_1.8fr] gap-12 max-w-7xl mx-auto">
        
        {/* LEFT: Profile Card */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative group w-full flex justify-center h-fit"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#252d37] w-full max-w-[320px] aspect-[4/5] rounded-[2rem] flex flex-col items-center justify-end pb-12 border border-white/10 overflow-hidden shadow-2xl">
            
            <div className="absolute top-12">
              <div className="relative p-1 rounded-3xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-transparent" 
                  style={{ animation: 'spin 4s linear infinite' }}
                ></div>
                <style>{`
                  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                `}</style>
                <div className="relative bg-[#252d37] p-1 rounded-3xl z-10">
                  <img
                    src={profile}
                    alt="Chauhan Ayushi"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center z-10">
              <h3 className="text-2xl font-bold text-white tracking-tight">Chauhan Ayushi</h3>
              <p className="text-cyan-400 font-medium uppercase text-xs tracking-[0.3em] mt-2">MERN Stack Developer</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Tabs & Content */}
        <div className="w-full bg-[#252d37]/40 p-6 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl shadow-inner min-h-[500px]">
          
          {/* Tabs Navigation */}
          <div className="flex space-x-2 md:space-x-6 border-b border-gray-700/50 mb-10 overflow-x-auto pb-2 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-3 text-sm md:text-base font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id ? "text-cyan-400" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" 
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
            >
              {/* Education Tab */}
              {activeTab === "education" && (
                <div className="space-y-8">
                  {[
                    { title: "BCA", inst: "VNSGU University", date: "2024 - 26", status: "Pursuing" },
                    { title: "HSC", inst: "Gautami Kanya Vidhyalaya", date: "2023 - 24", status: "82.40%" },
                    { title: "SSC", inst: "Gautami Kanya Vidhyalaya", date: "2021 - 22", status: "82.40%" }
                  ].map((edu, i) => (
                    <motion.div 
                      key={i} custom={i} variants={listVariant} initial="hidden" animate="visible"
                      className="group relative pl-8 border-l-2 border-cyan-400/20 hover:border-cyan-400 transition-colors"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1a222a] border-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.title}</h4>
                      <p className="text-gray-400 mt-1 font-medium">{edu.inst}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs font-black uppercase tracking-wider">
                        <span className="bg-white/5 px-3 py-1 rounded-full text-gray-400">{edu.date}</span>
                        <span className="text-cyan-400">{edu.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Course Tab */}
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
                      className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-400/50 transition-all group"
                    >
                      <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest">{course.year}</span>
                      <h4 className="text-lg font-bold mt-1 group-hover:text-white transition-colors">{course.name}</h4>
                      <p className="text-gray-400 text-sm">{course.platform}</p>
                      <div className="mt-3">
                        <span className="text-[10px] bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded-md font-bold uppercase tracking-tighter">
                          {course.skills}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <div className="space-y-8">
                  {[
                    { role: "MERN Stack Developer Intern", company: "Tech Solutions", period: "2025 - Present", desc: "Building responsive UI components using React and Tailwind CSS." },
                    { role: "Freelance Web Designer", company: "Self-Employed", period: "2024 - 2025", desc: "Crafting beautiful landing pages and portfolios for diverse clients." }
                  ].map((exp, i) => (
                    <motion.div 
                      key={i} custom={i} variants={listVariant} initial="hidden" animate="visible"
                      className="group relative pl-8 border-l-2 border-cyan-400/20 hover:border-cyan-400 transition-colors"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1a222a] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-all"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400">{exp.role}</h4>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
                      </div>
                      <p className="text-cyan-400/80 font-medium text-sm mt-1">{exp.company}</p>
                      <p className="text-gray-400 mt-3 text-sm leading-relaxed">{exp.desc}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Details Tab */}
              {activeTab === "details" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Email", value: "ayushichauhan5821@gmail.com", color: "text-cyan-400" },
                    { label: "Location", value: "Surat, Gujarat", color: "text-gray-200" },
                    { label: "Availability", value: "Open for Work", color: "text-green-400" },
                    { label: "Freelance", value: "Available", color: "text-gray-200" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                      <span className="text-[10px] uppercase text-gray-500 font-black block mb-2 tracking-widest">{item.label}</span>
                      <span className={`text-sm md:text-base font-semibold break-words ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default About;