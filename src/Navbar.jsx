import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", ref: refs.homeRef },
    { name: "About", ref: refs.aboutRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Services", ref: refs.servicesRef },
    { name: "Portfolio", ref: refs.portfolioRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 py-5 bg-[#0f2027]/90 backdrop-blur-md z-[100] text-white">
      <h1 className="text-xl font-bold text-cyan-400 tracking-wider">Portfolio</h1>

      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <li 
            key={link.name} 
            onClick={() => scrollToSection(link.ref)}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            {link.name}
          </li>
        ))}
      </ul>

      <div className="md:hidden text-2xl text-cyan-400 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#1a333d] flex flex-col items-center gap-6 py-8 md:hidden border-b border-cyan-900/50">
          {navLinks.map((link) => (
            <li 
              key={link.name} 
              onClick={() => { scrollToSection(link.ref); setIsOpen(false); }}
              className="cursor-pointer text-white hover:text-cyan-400 font-bold"
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;