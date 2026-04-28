import React, { useState } from "react";
import profile from "./assets/profile.png"; 
import { useNavigate } from "react-router-dom"; 
import { FaArrowLeft } from "react-icons/fa"; 

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  const navigate = useNavigate(); 

  const tabs = [
    { id: "education", label: "Education" },
    { id: "course", label: "Courses" },
    { id: "experience", label: "Experience" },
    { id: "details", label: "Details" },
  ];

  return (
    <div className="min-h-screen bg-[#2f3b46] text-white px-4 md:px-16 py-6 md:py-16 selection:bg-cyan-400 selection:text-black">
      
      {/* --- Responsive Header & Back Button --- */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-cyan-400 hover:text-white transition-all group"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <FaArrowLeft size={14} />
          </div>
          <span className="hidden sm:inline font-medium uppercase tracking-tighter">Back</span>
        </button>

        <h2 className="text-2xl md:text-4xl font-bold text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>
        
        {/* Spacer for centering heading on desktop */}
        <div className="w-10 hidden md:block"></div>
      </div>

      {/* --- Main Content Grid --- */}
      {/* Mobile: flex-col (upar-niche) | Desktop: md:grid (baaye-daaye) */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 max-w-6xl mx-auto items-center md:items-start">
        
        {/* LEFT: Profile Card (Flexible width) */}
        <div className="w-full max-w-[280px] md:max-w-full flex justify-center md:sticky md:top-32">
          <div className="relative w-full pt-12">
            <div className="bg-cyan-400 w-full aspect-[4/5] rounded-3xl flex flex-col items-center justify-end pb-10 text-center shadow-2xl transition-all hover:-rotate-2">
              <div className="absolute -top-8 md:-top-12">
                <img
                  src={profile}
                  alt="Chauhan Ayushi"
                  className="w-24 h-24 md:w-36 md:h-36 rounded-2xl border-4 border-[#2f3b46] object-cover shadow-2xl rotate-3"
                />
              </div>
              <div className="px-4">
                <h3 className="text-xl md:text-2xl font-black text-black leading-tight">Chauhan Ayushi</h3>
                <div className="h-1 w-10 bg-black/20 mx-auto my-2 rounded-full"></div>
                <p className="text-xs md:text-sm font-bold text-black/70 uppercase tracking-widest">Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Tabs & Info (Expands on Desktop) */}
        <div className="w-full bg-[#1f2937]/50 p-6 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-xl">
          
          {/* Responsive Tabs bar */}
          <div className="flex space-x-1 md:space-x-4 border-b border-gray-700/50 mb-8 overflow-x-auto pb-1 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs md:text-sm font-bold transition-all rounded-t-xl whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-cyan-400 text-black shadow-[0_-4px_10px_rgba(34,211,238,0.2)]"
                    : "text-gray-400 hover:text-cyan-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="transition-all duration-500 ease-in-out">
            {activeTab === "education" && (
              <div className="space-y-6">
                {[
                  { title: "BCA", inst: "VNSGU University", date: "2024 - 26", status: "Pursuing" },
                  { title: "HSC", inst: "Gautami Kanya Vidhyalaya", date: "2023 - 24", status: "82.40%" },
                  { title: "SSC", inst: "Gautami Kanya Vidhyalaya", date: "2021 - 22", status: "82.40%" }
                ].map((edu, i) => (
                  <div key={i} className="group relative pl-6 border-l-2 border-cyan-400/20 hover:border-cyan-400 transition-all">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all"></div>
                    <h4 className="text-cyan-400 font-bold md:text-lg">{edu.title}</h4>
                    <p className="text-xs md:text-sm text-gray-300 font-medium">{edu.inst}</p>
                    <div className="flex justify-between mt-2 text-[10px] md:text-xs text-gray-500 font-bold uppercase">
                      <span>{edu.date}</span>
                      <span className="text-cyan-400/60">{edu.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "course" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Web Development", "React Mastery", "UI/UX Design"].map((c, i) => (
                  <div key={i} className="p-4 bg-[#2f3b46] rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all">
                    <p className="text-gray-200 text-xs md:text-sm font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> {c}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-4">
                {[
                  "1+ Year Freelancing Experience",
                  "Built 10+ Client Portfolios",
                  "MERN Stack Internship"
                ].map((exp, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border-r-4 border-cyan-400">
                    <p className="text-xs md:text-sm text-gray-300">{exp}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "details" && (
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col md:flex-row md:justify-between border-b border-white/5 pb-4">
                  <span className="text-[10px] uppercase text-gray-500 font-black">Email</span>
                  <span className="text-sm md:text-base text-cyan-400 font-medium">ayushichauhan5821@gmail.com</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between border-b border-white/5 pb-4">
                  <span className="text-[10px] uppercase text-gray-500 font-black">Location</span>
                  <span className="text-sm md:text-base text-gray-200 font-medium">Surat, Gujarat</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <span className="text-[10px] uppercase text-gray-500 font-black">Open for Work</span>
                  <span className="text-sm md:text-base text-green-400 font-bold">Available Now</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;