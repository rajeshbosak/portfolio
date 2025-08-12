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
import GlassCard from "./GlassCard";
import GlassButton from "./GlassButton";

// Home Page
const HomePage = () => (
  <div className="flex-1 p-4 space-y-8">
    {/* Hero Section */}
    <div className="text-center py-20">
      <GlassCard className="max-w-4xl mx-auto p-12">
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to the
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
            Future of Web Design
          </span>
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the mesmerizing beauty of liquid glass interfaces combined
          with dynamic particle animations. Our cutting-edge design philosophy
          brings together elegance, functionality, and pure visual delight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlassButton variant="primary" className="text-lg px-8 py-4">
            Get Started
          </GlassButton>
          <GlassButton variant="secondary" className="text-lg px-8 py-4">
            Learn More
          </GlassButton>
        </div>
      </GlassCard>
    </div>

    {/* Features Section */}
    <div className="grid md:grid-cols-3 gap-6">
      <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">✨</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Liquid Glass UI</h3>
        <p className="text-white/70">
          Immerse yourself in our revolutionary glassmorphism design that
          creates depth and elegance through transparency and blur effects.
        </p>
      </GlassCard>

      <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🌟</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Dynamic Particles</h3>
        <p className="text-white/70">
          Watch as thousands of luminous particles dance across your screen,
          creating an ever-changing canvas of light and motion.
        </p>
      </GlassCard>

      <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🚀</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">
          Smooth Performance
        </h3>
        <p className="text-white/70">
          Built with cutting-edge React and optimized animations to ensure
          buttery-smooth performance across all devices.
        </p>
      </GlassCard>
    </div>

    {/* Stats Section */}
    <GlassCard className="p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-white mb-2">10K+</div>
          <div className="text-white/70">Active Users</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white mb-2">99.9%</div>
          <div className="text-white/70">Uptime</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white mb-2">50+</div>
          <div className="text-white/70">Countries</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white mb-2">24/7</div>
          <div className="text-white/70">Support</div>
        </div>
      </div>
    </GlassCard>
  </div>
);

export default HomePage;
