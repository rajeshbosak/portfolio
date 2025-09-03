import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import profile from "../data/profile.json";

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
          {profile.fullName}
        </h1>
        <p className="text-muted-foreground mt-1">{profile.title}</p>
      </div>

      {/* Short Intro */}
      <p className="max-w-2xl text-muted-foreground">{profile.shortIntro}</p>

      {/* Divider */}
      <hr className="w-24 border-muted-foreground my-6" />

      {/* Contacts */}

      <div className="flex items-center justify-center gap-6">
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <FiLinkedin size={22} />
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <FiGithub size={22} />
        </a>

        <a
          href={profile.links.leetcode}
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
          href={`mailto:${profile.links.email}`}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <FiMail size={22} />
        </a>
      </div>
    </section>
  );
}
