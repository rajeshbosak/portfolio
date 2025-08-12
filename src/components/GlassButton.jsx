import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  Home,
  LogIn,
  UserPlus,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

// Glass Button Component
const GlassButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-md border";

  const variants = {
    primary:
      "bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 shadow-lg",
    secondary:
      "bg-black/20 hover:bg-black/30 text-white border-white/20 hover:border-white/40",
    ghost:
      "bg-transparent hover:bg-white/10 text-white/80 hover:text-white border-transparent hover:border-white/20",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;
