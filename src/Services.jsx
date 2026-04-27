import React from "react";
import { FaCode, FaPaintBrush, FaGlobe } from "react-icons/fa";

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
  return (
    <div className="min-h-screen bg-[#2f3b46] text-white px-6 md:px-16 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Services</span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl text-center transition duration-300 
            ${
              service.highlight
                ? "border border-cyan-400 shadow-lg"
                : "bg-[#1f2937]"
            }
            hover:scale-105`}
          >
            
            {/* Icon */}
            <div className="text-cyan-400 mb-4 flex justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-6">
              {service.desc}
            </p>

            {/* Button */}
            <button
              className={`px-6 py-2 rounded-full font-medium transition 
              ${
                service.highlight
                  ? "bg-cyan-400 text-black hover:bg-cyan-300"
                  : "bg-gray-200 text-black hover:bg-white"
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