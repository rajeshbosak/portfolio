import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* 3D Animated 404 */}
      <h1
        className="text-[8rem] font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
        animate-gradient-slow floating-404 transition-transform duration-500 hover:scale-125 hover:rotate-3"
        style={{
          textShadow: `
            2px 2px 0px rgba(255,255,255,0.3),
            4px 4px 0px rgba(0,0,0,0.4),
            6px 6px 0px rgba(0,0,0,0.3)
          `,
        }}
      >
        404
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Oops! You’ve drifted off into the void 🚀
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 
        hover:from-purple-500 hover:to-pink-500 
        text-white rounded-lg shadow-lg transition-all transform hover:scale-110"
      >
        Go Back Home
      </Link>

      {/* Extra styles for animation */}
      <style>
        {`
          /* Floating effect */
          .floating-404 {
            animation: float404 3s ease-in-out infinite, gradientShift 6s ease infinite;
          }
          @keyframes float404 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-2deg); }
          }
          /* Smooth shifting gradient animation */
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            background-size: 200% 200%;
            animation: gradientShift 5s ease infinite;
          }
        `}
      </style>
    </div>
  );
}
