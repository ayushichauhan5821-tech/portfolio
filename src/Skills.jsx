import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  { name: "HTML - 5", percent: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS - 3", percent: 80, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", percent: 80, icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", percent: 60, icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", percent: 60, icon: <FaReact className="text-cyan-300" /> },
  { name: "Figma", percent: 90, icon: <FaFigma className="text-pink-400" /> },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#1f2937] text-white px-6 md:px-16 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-5 p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800 transition"
          >
            
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center text-3xl">
              {skill.icon}
            </div>

            {/* Skill Info */}
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-300">{skill.percent}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;