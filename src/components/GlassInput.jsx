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

// Glass Input Component
const GlassInput = ({ icon: Icon, ...props }) => (
  <div className="relative">
    {Icon && (
      <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
    )}
    <input
      className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 pl-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
      {...props}
    />
  </div>
);

export default GlassInput;
