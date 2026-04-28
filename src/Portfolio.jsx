import React from "react";
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa"; // FaArrowLeft add kiya
import { useNavigate } from "react-router-dom"; // useNavigate add kiya

const projects = [
  {
    title: "Web Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Dashboard UI",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Developer Setup",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Workspace",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Keyboard Setup",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    title: "Tech Desk",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const Portfolio = () => {
  const navigate = useNavigate(); // Navigation function

  return (
    <div className="min-h-screen bg-[#1f2937] text-white px-6 md:px-16 py-16">
      
      {/* Back Button Container */}
      <div className="max-w-6xl mx-auto mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 group"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <FaArrowLeft />
          </div>
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Portfolio</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
          >
            
            {/* Image */}
            <img
              src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
              alt={item.title}
              className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay - Base State */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px]">
              
              <h3 className="text-lg font-bold mb-3 tracking-wide">
                {item.title}
              </h3>

              <div className="bg-cyan-400 p-3 rounded-full text-black hover:bg-white transition-colors cursor-pointer">
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