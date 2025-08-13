import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiEye } from "react-icons/fi";

export default function Hero() {
  return (
    <header className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Hey — I’m <span className="underline-anim">Rajesh</span> 👋
          <br />I build scalable web & AI-driven platforms.
        </motion.h1>

        <p className="mt-6 text-gray-700 dark:text-slate-300 max-w-xl">
          Full Stack Software Engineer with 6+ years of experience. Proficient
          in React, Angular, Node.js, MongoDB, MySQL, and DSA. I focus on
          building reliable systems, delightful UI, and practical automation
          using LLMs.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full 
                       bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold shadow-lg 
                       text-sm sm:text-base text-white"
          >
            <FiDownload /> Download Resume
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full 
                       bg-gray-200 dark:bg-white/6 font-semibold text-sm sm:text-base
                       text-gray-800 dark:text-white"
          >
            <FiEye /> View Projects
          </a>
        </div>

        <div className="mt-8 flex gap-3 items-center">
          <div className="card-glass tilt-hover">
            <div className="text-xs text-gray-600 dark:text-slate-300">
              Current
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              Generative AI — COBOL → Java automation
            </div>
            <div className="text-xs text-gray-500 dark:text-slate-400">
              Infosys
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="card-glass tilt-hover">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 
                            flex items-center justify-center font-bold text-white"
            >
              RR
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-slate-300">
                Software Engineer
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                6+ years experience
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="text-xs text-gray-500 dark:text-slate-400">
              Tech Stack
            </div>
            <div className="text-xs text-gray-500 dark:text-slate-400">
              Cloud & AI
            </div>
            <div className="font-medium text-gray-800 dark:text-white">
              React • Angular
            </div>
            <div className="font-medium text-gray-800 dark:text-white">
              AWS • Azure AI
            </div>
            <div className="font-medium text-gray-800 dark:text-white">
              Node.js • MongoDB
            </div>
            <div className="font-medium text-gray-800 dark:text-white">
              Python • GenAI
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
