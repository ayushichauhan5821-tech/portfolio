import React, { useState } from "react";
import profile from "./assets/profile.png"; 
import { useNavigate } from "react-router-dom"; // useNavigate import kiya
import { FaArrowLeft } from "react-icons/fa"; // Icon import kiya

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  const navigate = useNavigate(); // Navigation initialize kiya

  const tabs = [
    { id: "education", label: "Education Qualification" },
    { id: "course", label: "Short Course" },
    { id: "experience", label: "Experience" },
    { id: "details", label: "Details" },
  ];

  return (
    <div className="min-h-screen bg-[#2f3b46] text-white px-6 md:px-16 py-10 md:py-16 relative">
      
      {/* --- Back Button --- */}
      <div className="max-w-6xl mx-auto mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-3 text-cyan-400 hover:text-white transition-all duration-300 group"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
            <FaArrowLeft />
          </div>
          <span className="font-medium tracking-wide">Back</span>
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        
        {/* LEFT PROFILE CARD */}
        <div className="flex justify-center md:pt-16">
          <div className="relative">
            <div className="bg-cyan-400 w-[260px] h-[300px] rounded-2xl flex flex-col items-center justify-end pb-8 text-center shadow-2xl transition-transform hover:scale-105 duration-300">
              <div className="absolute -top-16">
                <img
                  src={profile}
                  alt="Chauhan Ayushi"
                  className="w-32 h-32 rounded-full border-4 border-[#2f3b46] object-cover shadow-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-black px-4">Chauhan Ayushi</h3>
              <p className="text-sm font-medium text-black/80 mt-2 italic">Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#1f2937]/30 p-6 rounded-2xl backdrop-blur-sm">
          
          {/* Tabs Container (Scrollable for mobile) */}
          <div className="flex gap-4 md:gap-6 border-b border-gray-600 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-sm md:text-base font-medium transition-all relative ${
                  activeTab === tab.id
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTab === "education" && (
              <div className="space-y-8">
                {[
                  { title: "BCA", inst: "VNSGU University", session: "2024 - 26", res: "Running (6th Semester)" },
                  { title: "HSC", inst: "Gautami Kanya Vidhyalaya", session: "2023 - 24", res: "82.40%" },
                  { title: "SSC", inst: "Gautami Kanya Vidhyalaya", session: "2021 - 22", res: "82.40%" }
                ].map((edu, index) => (
                  <div key={index} className="border-l-2 border-cyan-400/30 pl-4 hover:border-cyan-400 transition-colors">
                    <h4 className="text-cyan-400 font-bold text-lg">{edu.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">Institute: {edu.inst}</p>
                    <div className="flex justify-between mt-2 text-xs text-gray-400 italic">
                      <span>Session: {edu.session}</span>
                      <span>Result: {edu.res}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "course" && (
              <div className="grid grid-cols-1 gap-4">
                {["Web Development Bootcamp", "React & Tailwind Mastery", "UI/UX Design Fundamentals"].map((c, i) => (
                  <div key={i} className="bg-[#2f3b46] p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all">
                    <p className="text-gray-200">✨ {c}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "experience" && (
              <ul className="space-y-4">
                <li className="flex gap-3 items-start"><span className="text-cyan-400">▹</span> 1+ Year Freelancing (Frontend focus)</li>
                <li className="flex gap-3 items-start"><span className="text-cyan-400">▹</span> Worked on 10+ Production-ready Projects</li>
                <li className="flex gap-3 items-start"><span className="text-cyan-400">▹</span> Internship as Web Developer</li>
              </ul>
            )}

            {activeTab === "details" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Name</p>
                  <p className="text-gray-200 font-medium">Chauhan Ayushi</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-gray-200 font-medium text-xs sm:text-base break-words">ayushichauhan5821@gmail.com</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-gray-200 font-medium">Surat, Gujarat</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Main Skills</p>
                  <p className="text-cyan-400 font-medium">MERN Stack, Tailwind</p>
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