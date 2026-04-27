import React, { useState } from "react";
import profile from "./assets/profile.png"; // your image

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="min-h-screen bg-[#2f3b46] text-white px-6 md:px-16 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT PROFILE CARD */}
        <div className="flex justify-center">
          <div className="relative">
            
            {/* Card */}
            <div className="bg-cyan-400 w-[260px] h-[300px] rounded-xl flex flex-col items-center justify-end pb-6 text-center shadow-lg">
              
              {/* Image */}
              <div className="absolute -top-16">
                <img
                  src={profile}
                  alt="profile"
                  className="w-32 h-32  rounded-full border-4 border-[#2f3b46] object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-black mt-16">
               Chauhan Ayushi
              </h3>

              <p className="text-sm text-black mt-2">Frontend Developer</p>
              <p className="text-sm text-black">Backend Developer</p>
            
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-500 mb-6 text-sm md:text-base">
            {[
              { id: "education", label: "Education Qualification" },
              { id: "course", label: "Short Course" },
              { id: "experience", label: "Experience" },
              { id: "details", label: "Details" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 transition ${
                  activeTab === tab.id
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}

          {activeTab === "education" && (
            <div className="space-y-6">
              
              <div>
                <h4 className="text-cyan-400 font-semibold">
                BCA 
                </h4>
                <p className="text-sm text-gray-300">
                  Institute : VNSGU University
                </p>
                <p className="text-sm text-gray-300">
                  Session : 2024 - 26
                </p>
                <p className="text-sm text-gray-300">
                  Result : Running (6st Semester)
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Higher Secondery Certificate (HSC)
                </h4>
                <p className="text-sm text-gray-300">
                  Institute : Gautami Kanya Vidhyalaya
                </p>
                <p className="text-sm text-gray-300">
                  Session : 2023 - 24
                </p>
                <p className="text-sm text-gray-300">
                  Result : percentage 82.40%
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Secondary School Certificate (SSC)
                </h4>
                <p className="text-sm text-gray-300">
                  Institute :Gautami Kanya Vidhyalaya
                </p>
                <p className="text-sm text-gray-300">
                  Session : 2021 - 22
                </p>
                <p className="text-sm text-gray-300">
                  Result : percentage 82.40%
                </p>
              </div>

            </div>
          )}

          {activeTab === "course" && (
            <div className="space-y-4 text-gray-300">
              <p>• Web Development Bootcamp</p>
              <p>• React & Tailwind Mastery</p>
              <p>• UI/UX Design Fundamentals</p>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-4 text-gray-300">
              <p>• 1+ Year Freelancing (Frontend)</p>
              <p>• Worked on 10+ Projects</p>
              <p>• Internship as Web Developer</p>
            </div>
          )}

          {activeTab === "details" && (
            <div className="space-y-4 text-gray-300">
              <p>Name: Chauhan Ayushi</p>
              <p>Email: ayushichauhan5821@gmail.com</p>
              <p>Location: Surat</p>
              <p>Skills: React, Tailwind, Node.js</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;