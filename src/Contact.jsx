import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaGithub, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Yahan aap EmailJS ya backend API call add kar sakte hain
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message Sent Successfully!");
    }, 2000);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#0f172a] dark:bg-gradient-to-br dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] text-white px-6 md:px-16 py-24 transition-colors duration-500 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
        </h2>
        <div className="h-1.5 w-24 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_20px_#22d3ee]"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 w-full">

        {/* --- LEFT SECTION: INFO --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-2/5 flex flex-col gap-8"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-cyan-400 uppercase tracking-widest">Chauhan Ayushi</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Have a project in mind? Let's build something amazing together. I specialize in turning complex ideas into elegant, high-performance web solutions.
            </p>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, url: "https://facebook.com" },
              { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
              { icon: <FaEnvelope />, url: "mailto:ayushichauhan5821@gmail.com" },
              { icon: <FaGithub />, url: "https://github.com/ayushichauhan5821-tech" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:block mt-10">
             <div className="p-6 rounded-3xl bg-cyan-400/5 border border-cyan-400/20 backdrop-blur-md">
                <p className="text-cyan-400 font-mono text-sm">Working Hours: Mon - Fri</p>
                <p className="text-gray-400 text-xs">Available for freelance and full-time roles.</p>
             </div>
          </div>
        </motion.div>

        {/* --- RIGHT SECTION: FORM --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-3/5 relative"
        >
          {/* Glassmorphism Form Card */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#1e293b]/40 border border-white/10 backdrop-blur-3xl shadow-2xl relative z-10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-2">First Name</label>
                <input
                  required
                  type="text"
                  placeholder="Ayushi"
                  className="w-full bg-black/20 p-4 rounded-2xl outline-none border border-white/5 focus:border-cyan-400 focus:bg-black/40 transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-2">Last Name</label>
                <input
                  required
                  type="text"
                  placeholder="Chauhan"
                  className="w-full bg-black/20 p-4 rounded-2xl outline-none border border-white/5 focus:border-cyan-400 focus:bg-black/40 transition-all placeholder:text-gray-600"
                />
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-2">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-black/20 p-4 rounded-2xl outline-none border border-white/5 focus:border-cyan-400 focus:bg-black/40 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-2">Message</label>
                <textarea
                  required
                  placeholder="Hi Ayushi, I have a project..."
                  rows="4"
                  className="w-full bg-black/20 p-4 rounded-2xl outline-none border border-white/5 focus:border-cyan-400 focus:bg-black/40 transition-all resize-none placeholder:text-gray-600"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="md:col-span-2 relative group overflow-hidden bg-cyan-400 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(34,211,238,0.3)] transition-all"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{isSubmitting ? "Sending..." : "SEND MESSAGE"}</span>
                    <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.button>
            </form>
          </div>

          {/* Decorative Ring behind form */}
          <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-cyan-400/20 rounded-full -z-0 animate-pulse"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;