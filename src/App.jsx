import React, { useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#0f2027]">
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ homeRef, aboutRef, skillsRef, servicesRef, portfolioRef, contactRef }} 
      />
      <section ref={homeRef}><Home scrollToSection={scrollToSection} contactRef={contactRef} portfolioRef={portfolioRef} /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={servicesRef}><Services /></section>
      <section ref={portfolioRef}><Portfolio /></section>
      <section ref={contactRef}><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;