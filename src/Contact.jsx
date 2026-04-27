import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div className="min-h-screen bg-[#2f3742] text-white px-6 py-12">

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

          {/* Social Icons (UPDATED) */}
          <div className="flex gap-5 mt-6">

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

        </div>

        {/* Right Section (Form) */}
        <div className="md:w-3/5">

          <form className="flex flex-wrap gap-4">

            <input
              type="text"
              placeholder="First Name"
              className="w-full md:w-[48%] bg-[#1f2630] p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full md:w-[48%] bg-[#1f2630] p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full md:w-[48%] bg-[#1f2630] p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full md:w-[48%] bg-[#1f2630] p-3 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#1f2630] p-3 rounded-lg outline-none"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full bg-[#1f2630] p-3 rounded-lg outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#1f2630] hover:bg-cyan-400 hover:text-black transition p-3 rounded-lg"
            >
              Submit
            </button>

     <Link to="/" className="text-cyan-500 hover:underline">
  Go to Home
</Link>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;