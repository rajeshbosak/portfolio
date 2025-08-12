import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 w-full text-center py-2 text-sm opacity-80 pointer-events-auto 
      bg-white/10 backdrop-blur-md border-t border-white/20 dark:bg-black/20 dark:border-white/10"
    >
      {/* <p className="text-gray-800 dark:text-gray-200">
        © {new Date().getFullYear()} Rajesh Raman Bosak — Built with React &
        TailwindCSS
      </p> */}

      <p className="text-gray-800 dark:text-gray-200 flex items-center justify-center gap-1">
        © {new Date().getFullYear()} — Built with <FaHeart />
      </p>
    </footer>
  );
}
