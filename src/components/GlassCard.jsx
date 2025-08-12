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

// Glass Card Component
const GlassCard = ({ children, className = "", blur = "backdrop-blur-md" }) => (
  <div
    className={`
    bg-white/10 ${blur} rounded-2xl border border-white/20 
    shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
    hover:shadow-[0_8px_40px_0_rgba(31,38,135,0.5)]
    transition-all duration-300 hover:bg-white/15
    ${className}
  `}
  >
    {children}
  </div>
);
export default GlassCard;
