import React from "react";
import profile from "./assets/profile.png";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 md:px-16 py-10">

      {/* Navbar */}
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-xl font-bold text-cyan-400">Portfolio</h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-400"}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-400"}>
            About
          </NavLink>

          <NavLink to="/skills" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-400"}>
            Skills
          </NavLink>

          <NavLink to="/services" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-400"}>
            Services
          </NavLink>

          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-400"}>
            Portfolio
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-cyan-400" : "hover:text-cyan-400"}>
            Contact
          </NavLink>


          
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chauhan Ayushi
          </h2>

          <h3 className="text-xl md:text-2xl mb-4">
            And I'm a{" "}
            <span className="text-cyan-400 font-semibold">
            Mern Stack Developer
            </span>
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed max-w-md mb-6">
            I am professional web developer with strong skill in HTML, CSS,
            JavaScript, Tailwind, jQuery etc. I have been working in this field
            for almost 3 years and all projects are completed successfully with
            100% client satisfaction.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mb-6">
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_10px_#22d3ee]"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_10px_#22d3ee]"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:your@email.com"
              className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_10px_#22d3ee]"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 hover:shadow-[0_0_10px_#22d3ee]"
            >
              <FaGithub />
            </a>

          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-cyan-400 text-black px-6 py-2 rounded-full font-medium hover:bg-cyan-300 transition">
              Download CV
            </button>

            <button className="border border-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition">
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 blur-2xl bg-cyan-400 opacity-30 rounded-xl"></div>

            {/* Image Box */}
            <div className="w-[260px] h-[300px] bg-cyan-400 rounded-xl overflow-hidden relative">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;