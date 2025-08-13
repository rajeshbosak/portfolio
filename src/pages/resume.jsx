import React from "react";
import { FiDownload, FiLinkedin } from "react-icons/fi";

export default function ResumeSection() {
  return (
    <div id="resume">
      <h3 className="text-2xl font-semibold text-foreground">Resume</h3>
      <p className="mt-2 text-muted-foreground">PDF and a short snapshot.</p>

      <div className="mt-6 card-glass flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="font-semibold text-foreground">
            Rajesh Raman Bosak Bosak
          </div>
          <div className="text-sm text-muted-foreground">
            Full Stack Software Engineer — 6+ years
          </div>

          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold text-sm sm:text-base text-white"
            >
              <FiDownload /> Download
            </a>
            <a
              href="https://www.linkedin.com/in/rajeshraman63/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-background/50 text-foreground font-semibold text-sm sm:text-base"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="w-48 mt-4 md:mt-0">
          <div className="text-xs text-muted-foreground">Key Tech</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {["React", "Node.js", "Angular", "MongoDB", "MySQL", "GenAI"].map(
              (tech) => (
                <div key={tech} className="text-sm font-medium text-foreground">
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
