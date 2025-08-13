import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Career Path", path: "/career" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "About", path: "/about" },
    { name: "Social Profiles", path: "/socials" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo / Name */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Rajesh Raman Bosak"
              className="rounded-full mx-auto border border-blue-500 shadow-lg"
            />
          </div>
          Rajesh
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive
                    ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:rounded"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400"
                } transition-colors`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-6 cursor-pointer"
          >
            <span
              key={theme}
              className="flex items-center justify-center animate-themeSwitch"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col items-start px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `w-full text-lg ${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400"
                  }`
                }
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Extra CSS for theme toggle animation */}
      <style>{`
        @keyframes themeSwitch {
          0% { transform: scale(0.6) rotate(-90deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(10deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-themeSwitch {
          animation: themeSwitch 0.4s ease-out;
        }
      `}</style>
    </nav>
  );
}
