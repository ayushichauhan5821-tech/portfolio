import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  { name: "HTML - 5", percent: 90, icon: <FaHtml5 className="text-orange-500" />, color: "bg-orange-500" },
  { name: "CSS - 3", percent: 85, icon: <FaCss3Alt className="text-blue-500" />, color: "bg-blue-500" },
  { name: "Tailwind CSS", percent: 90, icon: <SiTailwindcss className="text-cyan-400" />, color: "bg-cyan-400" },
  { name: "JavaScript", percent: 75, icon: <SiJavascript className="text-yellow-400" />, color: "bg-yellow-400" },
  { name: "React", percent: 80, icon: <FaReact className="text-cyan-300" />, color: "bg-cyan-300" },
  { name: "Figma", percent: 95, icon: <FaFigma className="text-pink-400" />, color: "bg-pink-400" },
];

const Skills = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="relative min-h-screen bg-[#0f172a] dark:bg-gradient-to-br dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] text-white px-6 md:px-16 py-24 transition-colors duration-500 overflow-hidden selection:bg-cyan-400 selection:text-black">
      
      {/* Background Glow - Matches Home Style */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
        </h2>
        <div className="h-1.5 w-24 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_20px_#22d3ee]"></div>
      </motion.div>

      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={itemVariant}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative p-8 rounded-[2.5rem] bg-[#1e293b]/40 border border-white/5 backdrop-blur-3xl shadow-2xl transition-all duration-300"
          >
            {/* Glassmorphism Inner Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="w-16 h-16 flex items-center justify-center text-4xl bg-[#0f172a] rounded-2xl shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-cyan-400/20 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="text-2xl font-black text-cyan-400/20 group-hover:text-cyan-400 transition-colors duration-300">
                {skill.percent}%
              </span>
            </div>

            <h4 className="text-xl font-bold mb-4 tracking-tight text-white relative z-10 uppercase">
              {skill.name}
            </h4>
            
            <div className="relative w-full h-3 bg-black/40 rounded-full overflow-hidden border border-white/5 p-[2px]">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                transition={{ duration: 1.8, ease: "circOut" }}
                className={`absolute top-0 left-0 h-full ${skill.color} rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </motion.div>
            </div>

            {/* Hover Outer Glow */}
            <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;