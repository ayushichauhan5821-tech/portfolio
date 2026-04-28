import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub, FaArrowLeft } from "react-icons/fa"; // FaArrowLeft add kiya
import { Link, useNavigate } from "react-router-dom"; // useNavigate add kiya

const Contact = () => {
  const navigate = useNavigate(); // Navigation function initialize kiya

  return (
    <div className="min-h-screen bg-[#2f3742] text-white px-6 py-12 relative">
      
      {/* Back Button Container */}
      <div className="max-w-6xl mx-auto mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-cyan-400 hover:text-white transition duration-300 group"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <FaArrowLeft />
          </div>
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Contact <span className="text-cyan-400">Me</span>
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        {/* Left Section */}
        <div className="md:w-2/5">
          <h2 className="text-2xl font-bold mb-4">RIEAD</h2>
          <p className="text-gray-300 leading-relaxed">
            I am professional Web designer. I have designed more than 50 web
            templates for my client. You can hire me for design your personal,
            business or other website template. You can trust me. I completed
            your work with full satisfaction.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_10px_#22d3ee]">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_10px_#22d3ee]">
              <FaLinkedinIn />
            </a>
            <a href="mailto:ayushichauhan5821@gmail.com" className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_10px_#22d3ee]">
              <FaEnvelope />
            </a>
            <a href="https://github.com/ayushichauhan5821-tech/portfolio" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_10px_#22d3ee]">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-3/5">
          <form className="flex flex-wrap gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="First Name" className="w-full md:w-[48%] bg-[#1f2630] p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 transition" />
            <input type="text" placeholder="Last Name" className="w-full md:w-[48%] bg-[#1f2630] p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 transition" />
            <input type="text" placeholder="Phone" className="w-full md:w-[48%] bg-[#1f2630] p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 transition" />
            <input type="text" placeholder="Subject" className="w-full md:w-[48%] bg-[#1f2630] p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 transition" />
            <input type="email" placeholder="Email" className="w-full bg-[#1f2630] p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 transition" />
            <textarea placeholder="Message" rows="5" className="w-full bg-[#1f2630] p-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 transition"></textarea>
            
            <button type="submit" className="w-full bg-cyan-400 text-black font-bold hover:bg-white transition p-3 rounded-lg shadow-lg active:scale-95">
              Submit
            </button>

            
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;