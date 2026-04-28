import React from "react";
import profile from "./assets/profile.png";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

const Home = ({ scrollToSection, contactRef, portfolioRef }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 md:px-16 pt-32 pb-10 flex items-center">
      <div className="grid md:grid-cols-2 items-center gap-10 w-full">
        <div className="order-2 md:order-1 text-center md:text-left flex flex-col gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-2">Chauhan Ayushi</h2>
            <h3 className="text-xl md:text-2xl">
              And I'm a <span className="text-cyan-400 font-semibold">MERN Stack Developer</span>
            </h3>
          </div>
          <p className="text-gray-300 max-w-md mx-auto md:mx-0 opacity-90">
            Professional web developer with 3 years of experience in React and Tailwind CSS.
          </p>

          {/* Social Icons Links Fixed */}
          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href="https://facebook.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          
           <a 
              href="mailto:ayushichauhan5821@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaEnvelope />

            </a>


            <a 
              href="https://github.com/ayushichauhan5821-tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaGithub />
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-cyan-400 text-black px-8 py-2.5 rounded-full font-bold hover:bg-white transition-all shadow-lg">
              Download CV
            </button>
            <button 
              onClick={() => scrollToSection(portfolioRef)} 
              className="border-2 border-cyan-400 px-8 py-2.5 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition-all"
            >
              Portfolio
            </button>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <div className="relative group">
            <div className="absolute inset-0 blur-3xl bg-cyan-400 opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="w-[240px] h-[280px] md:w-[300px] md:h-[350px] bg-cyan-400 rounded-2xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
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