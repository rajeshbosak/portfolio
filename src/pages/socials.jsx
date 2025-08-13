import React from "react";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/rajeshraman63/"
        target="_blank"
        rel="noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <FiLinkedin size={20} />
      </a>
      <a
        href="https://github.com/rajeshbosak"
        target="_blank"
        rel="noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <FiGithub size={20} />
      </a>
      <a
        href="https://leetcode.com/u/rajeshraman_/"
        target="_blank"
        rel="noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        LeetCode
      </a>
      <a
        href="mailto:rajeshraman63@gmail.com"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <FiMail size={20} />
      </a>
    </div>
  );
}
