import React, { useState } from "react";
import profile from "./assets/profile.png";
import { NavLink, useNavigate } from "react-router-dom"; 
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaGithub, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 md:px-16 py-10 relative overflow-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center mb-12 relative z-50">
        <h1 className="text-xl font-bold text-cyan-400 tracking-wider">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => isActive ? "text-cyan-400 border-b-2 border-cyan-400" : "hover:text-cyan-400 transition"}
            >
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-2xl text-cyan-400 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <ul className="absolute top-14 left-0 w-full bg-[#1a333d] flex flex-col items-center gap-6 py-8 rounded-lg shadow-2xl md:hidden border border-cyan-900/50 z-50 animate-in fade-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={({ isActive }) => isActive ? "text-cyan-400 font-bold underline" : "text-white hover:text-cyan-400"}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 items-center gap-10 md:mt-10">
        
        {/* Left Content */}
        <div className="order-2 md:order-1 text-center md:text-left flex flex-col gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-2">Chauhan Ayushi</h2>
            <h3 className="text-xl md:text-2xl">
              And I'm a <span className="text-cyan-400 font-semibold">MERN Stack Developer</span>
            </h3>
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0 opacity-90">
            I am professional web developer with strong skill in HTML, CSS, JavaScript, Tailwind, and React. 
            I have been working in this field for almost 3 years, building responsive and high-performance websites.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_15px_#22d3ee]">
              <FaFacebookF size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_15px_#22d3ee]">
              <FaLinkedinIn size={18} />
            </a>
            <a href="mailto:ayushichauhan5821@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_15px_#22d3ee]">
              <FaEnvelope size={18} />
            </a>
            <a href="https://github.com/ayushichauhan5821-tech/portfolio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_15px_#22d3ee]">
              <FaGithub size={18} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <button className="bg-cyan-400 text-black px-8 py-2.5 rounded-full font-bold hover:bg-white transition-all shadow-lg active:scale-95">
              Download CV
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="border-2 border-cyan-400 px-8 py-2.5 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition-all active:scale-95"
            >
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-3xl bg-cyan-400 opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="w-[240px] h-[280px] md:w-[300px] md:h-[350px] bg-cyan-400 rounded-2xl overflow-hidden relative border-4 border-cyan-400 shadow-2xl">
              <img 
                src={profile} 
                alt="profile" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition duration-500" 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;