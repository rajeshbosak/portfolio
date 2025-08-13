import React from "react";

import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <section className="flex flex-col items-center text-center space-y-6 py-12">
      {/* Profile Image */}
      {/* <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
        RR
      </div> */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A8 8 0 1118.879 6.196M15 12h.01M9 12h.01"
          />
        </svg> */}
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="RR"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
        />
      </div>
      {/* Name & Title */}
      <div>
        <h1 className="text-3xl font-bold">Rajesh Raman Bosak</h1>
        <p className="text-gray-400 mt-1">
          Full-stack Developer | React, Angular, Node.js | System Design
          Enthusiast
        </p>
      </div>

      {/* Short Intro */}
      <p className="max-w-2xl text-gray-300">
        With over 6 years of experience building modern web applications, I
        specialize in creating performant, scalable, and elegant digital
        products. I’m passionate about solving complex problems, exploring new
        technologies, and crafting exceptional user experiences.
      </p>

      {/* Resume Button */}
      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download
        className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold shadow-lg text-sm sm:text-base"
      >
        <FiDownload /> Download Resume
      </a>

      {/* Divider */}
      <hr className="w-24 border-gray-600 my-6" />
      {/* Hobbies & Contact */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Hobbies</h3>
          <p className="text-gray-300 text-sm">
            Writing blog posts, reading whitepapers, full-stack development,
            competitive programming.
          </p>
        </div>
        <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-300 text-sm">📧 rajeshraman63@gmail.com</p>
          <p className="text-gray-300 text-sm">
            🔗 linkedin.com/in/rajeshraman63
          </p>
        </div>
      </div>
    </section>
  );
}
