import React from "react";
import { FiDownload } from "react-icons/fi";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function About() {
  return (
    <section className="flex flex-col items-center text-center space-y-6 py-12">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="RR"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
        />
      </div>
      {/* Name & Title */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Rajesh Raman Bosak
        </h1>
        <p className="text-muted-foreground mt-1">
          Full-stack Developer | React, Angular, Node.js | System Design
          Enthusiast
        </p>
      </div>

      {/* Short Intro */}
      <p className="max-w-2xl text-muted-foreground">
        With over 6 years of experience building modern web applications, I
        specialize in creating performant, scalable, and elegant digital
        products. I’m passionate about solving complex problems, exploring new
        technologies, and crafting exceptional user experiences.
      </p>

      {/* Resume Button */}
      {/* <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download
        className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold shadow-lg text-sm sm:text-base text-white"
      >
        <FiDownload /> Download Resume
      </a> */}

      {/* Divider */}
      <hr className="w-24 border-muted-foreground my-6" />

      {/* Hobbies & Contact */}
      {/* <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl"> */}
      {/* <div className="card-glass tilt-hover p-6 rounded-xl border border-white/10 shadow-lg">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Hobbies
          </h3>
          <p className="text-sm text-muted-foreground">
            Writing blog posts, reading whitepapers, full-stack development,
            competitive programming.
          </p>
        </div> */}
      {/* <div className="card-glass tilt-hover p-6 rounded-xl border border-white/10 shadow-lg">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Contact
          </h3>
          <p className="text-sm text-muted-foreground">
            📧 rajeshraman63@gmail.com
          </p>
          <p className="text-sm text-muted-foreground">
            🔗 linkedin.com/in/rajeshraman63
          </p>
        </div> */}
      {/* </div> */}

      {/* Contacts */}

      <div className="flex items-center justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/rajeshraman63/"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <FiLinkedin size={22} />
        </a>
        <a
          href="https://github.com/rajeshbosak"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <FiGithub size={22} />
        </a>

        <a
          href="https://leetcode.com/u/rajeshraman_/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg"
            alt="LeetCode"
            className="w-6 h-6"
          />
          LeetCode
        </a>

        <a
          href="mailto:rajeshraman63@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <FiMail size={22} />
        </a>
      </div>
    </section>
  );
}
