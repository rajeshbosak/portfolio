// import React from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiSun, FiMoon } from "react-icons/fi";

// export default function Navbar({ theme, setTheme }) {
//   return (
//     <nav className="flex items-center justify-between py-4">
//       <div className="flex items-center gap-3">
//         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-white">
//           RR
//         </div>
//         <div>
//           <div className="font-semibold text-lg">Rajesh Raman Bosak</div>
//           <div className="text-xs text-slate-400 dark:text-slate-400">
//             Full-stack • GenAI • System Design
//           </div>
//         </div>
//       </div>

//       <div className="hidden md:flex items-center gap-6">
//         <Link to="/career">Career Path</Link>
//         <Link to="/skills">Skills</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/resume">Resume</Link>
//         <Link to="/about">About</Link>
//         <Link to="/socials">Social Profiles</Link>
//       </div>

//       <button
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         className="p-2 rounded-lg bg-white/10 dark:bg-black/20"
//         aria-label="Toggle Theme"
//       >
//         {theme === "dark" ? <FiSun /> : <FiMoon />}
//       </button>

//       <div className="md:hidden p-2 rounded-lg bg-white/6">
//         <FiMenu />
//       </div>
//     </nav>
//   );
// }

// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  const navItems = [
    { name: "Career Path", path: "/career" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "About", path: "/about" },
    { name: "Social Profiles", path: "/socials" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo / Name */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-500 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            {/* RR */}
            <img
              src="/profile.jpg"
              alt="Rajesh Raman Bosak"
              className=" rounded-full mx-auto border-1 border-blue-500 shadow-lg"
            />
            {/* className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg" */}
          </div>
          Rajesh
        </NavLink>

        {/* Nav Links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive
                    ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:rounded"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-400"
                } transition-colors`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
