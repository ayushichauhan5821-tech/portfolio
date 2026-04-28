import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#2f3742] text-white px-6 py-20 flex flex-col justify-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 w-full">

        {/* Left Section: Info & Socials */}
        <div className="md:w-2/5 flex flex-col gap-6">
          <h2 className="text-3xl font-black tracking-tighter text-cyan-400">Chauhan Ayushi</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I am a professional Web Developer. I have designed numerous web 
            templates for various clients. You can hire me to design your personal, 
            business, or other website projects. I ensure full satisfaction and high-quality work.
          </p>

          <div className="flex gap-5 mt-4">
            {[
              { icon: <FaFacebookF />, url: "https://facebook.com" },
              { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
              { icon: <FaEnvelope />, url: "mailto:ayushichauhan5821@gmail.com" },
              { icon: <FaGithub />, url: "https://github.com/ayushichauhan5821-tech" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_#22d3ee]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="md:w-3/5 bg-[#1f2630]/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-[#1f2630] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition-all"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-[#1f2630] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition-all"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-[#1f2630] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition-all"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#1f2630] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition-all"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:col-span-2 bg-[#1f2630] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full md:col-span-2 bg-[#1f2630] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-white hover:shadow-lg transition-all active:scale-95 mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;