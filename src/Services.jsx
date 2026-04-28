import React from "react";
import { FaCode, FaPaintBrush, FaGlobe, FaArrowLeft } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom"; 

const services = [
  {
    title: "Web Design",
    icon: <FaGlobe size={40} />,
    desc: "I am professional Web Developer. I have designed more than 50 web templates for my clients. You can hire me for your personal, business or other website template.",
  },
  {
    title: "Web Development",
    icon: <FaCode size={40} />,
    desc: "I build modern, responsive and scalable websites using latest technologies. Clean code and performance are my priorities.",
    highlight: true,
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush size={40} />,
    desc: "I create stunning UI/UX designs and graphics that help brands stand out with a professional look.",
  },
];

const Services = () => {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-[#2f3b46] text-white px-6 md:px-16 py-10 md:py-16">
      
      {/* Back Button - Top Par Left side */}
      <div className="max-w-6xl mx-auto mb-6 md:mb-10">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 group"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <FaArrowLeft />
          </div>
          <span className="font-medium hidden sm:block">Back</span>
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Services</span>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl text-center transition duration-300 transform
            ${
              service.highlight
                ? "border-2 border-cyan-400 bg-[#25303a] shadow-[0_0_20px_rgba(34,211,238,0.15)] md:scale-105"
                : "bg-[#1f2937] border border-transparent shadow-md"
            }
            hover:scale-110 hover:z-10`}
          >
            
            {/* Icon */}
            <div className="text-cyan-400 mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-cyan-400/10">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 tracking-tight">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              {service.desc}
            </p>

            <button
              className={`w-full py-3 rounded-xl font-bold transition-all duration-300 active:scale-95
              ${
                service.highlight
                  ? "bg-cyan-400 text-black hover:bg-white shadow-lg"
                  : "bg-transparent text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black"
              }`}
            >
              Hire Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;