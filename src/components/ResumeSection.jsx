import React from "react";
import { FiDownload } from "react-icons/fi";

export default function ResumeSection() {
  return (
    <div id="resume">
      <h3 className="text-2xl font-semibold">Resume</h3>
      <p className="mt-2 text-slate-400">PDF and a short snapshot.</p>

      <div className="mt-6 card-glass flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="font-semibold">Rajesh Raman Bosak Bosak</div>
          <div className="text-sm text-slate-400">
            Full Stack Software Engineer — 6+ years
          </div>

          <div className="mt-4 flex gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold"
            >
              <FiDownload /> Download
            </a>
            <a
              href="https://www.linkedin.com/in/rajeshraman63/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="w-48">
          <div className="text-xs text-slate-400">Key Tech</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="text-sm font-medium">React</div>
            <div className="text-sm font-medium">Node.js</div>
            <div className="text-sm font-medium">Angular</div>
            <div className="text-sm font-medium">MongoDB</div>
            <div className="text-sm font-medium">MySQL</div>
            <div className="text-sm font-medium">GenAI</div>
          </div>
        </div>
      </div>
    </div>
  );
}
