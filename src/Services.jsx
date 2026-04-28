import React from "react";
import { FaCode, FaPaintBrush, FaGlobe } from "react-icons/fa";

const services = [
  { title: "Web Design", icon: <FaGlobe size={40} />, desc: "Professional web templates tailored to your brand identity." },
  { title: "Web Development", icon: <FaCode size={40} />, desc: "Scalable MERN stack applications with clean and efficient code.", highlight: true },
  { title: "Graphic Design", icon: <FaPaintBrush size={40} />, desc: "Stunning UI/UX designs that elevate user engagement." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#2f3b46] text-white px-6 md:px-16 py-20 flex flex-col justify-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Services</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl text-center transition duration-500 transform hover:scale-105
            ${service.highlight ? "border-2 border-cyan-400 bg-[#25303a] shadow-2xl" : "bg-[#1f2937]"}`}
          >
            <div className="text-cyan-400 mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-cyan-400/10">{service.icon}</div>
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">{service.desc}</p>
            <button className="w-full py-3 rounded-xl font-bold bg-cyan-400 text-black hover:bg-white transition-all">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;