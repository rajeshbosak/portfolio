import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 w-full text-center py-2 text-sm opacity-80 pointer-events-auto 
      bg-background/10 backdrop-blur-md border-t border-border z-10"
    >
      <p className="flex items-center justify-center gap-1 text-muted-foreground">
        © {new Date().getFullYear()} — Developed with <FaHeart />
      </p>
    </footer>
  );
}
