// src/pages/Profile.jsx
import React from "react";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt="Rajesh Raman Bosak"
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
      />
      <h1 className="mt-4 text-3xl font-bold">Rajesh Raman Bosak</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Full-stack Developer | React, Angular, Node.js | System Design
        Enthusiast
      </p>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        With over 6 years of experience in building modern web applications, I
        specialize in creating performant, scalable, and beautiful digital
        products. Passionate about problem-solving and continuous learning.
      </p>
      <a
        href="/Rajesh_Raman_Resume.pdf"
        download
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </div>
  );
}
