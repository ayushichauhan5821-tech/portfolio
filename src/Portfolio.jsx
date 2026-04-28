import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { title: "Web Design", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { title: "Dashboard UI", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c" },
  { title: "Developer Setup", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { title: "Workspace", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
  { title: "Keyboard Setup", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { title: "Tech Desk", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#1f2937] text-white px-6 md:px-16 py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Portfolio</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((item, index) => (
          <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg border border-white/5">
            <img
              src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
              alt={item.title}
              className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <div className="bg-cyan-400 p-3 rounded-full text-black cursor-pointer hover:bg-white transition-all">
                <FaExternalLinkAlt size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;