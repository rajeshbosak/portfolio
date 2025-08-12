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
import GlassInput from "./GlassInput";
import GlassButton from "./GlassButton";

// Register Page
const RegisterPage = ({ setCurrentPage }) => (
  <div className="flex-1 flex items-center justify-center p-4">
    <GlassCard className="w-full max-w-md p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
          <UserPlus className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Join Us</h2>
        <p className="text-white/70">Create your account today</p>
      </div>

      <div className="space-y-6">
        <GlassInput icon={User} type="text" placeholder="Full name" required />

        <GlassInput
          icon={Mail}
          type="email"
          placeholder="Email address"
          required
        />

        <GlassInput
          icon={Lock}
          type="password"
          placeholder="Password"
          required
        />

        <GlassInput
          icon={Lock}
          type="password"
          placeholder="Confirm password"
          required
        />

        <div className="flex items-center text-sm">
          <input type="checkbox" className="mr-2 accent-white/30" required />
          <span className="text-white/70">
            I agree to the{" "}
            <a href="#" className="text-white hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-white hover:underline">
              Privacy Policy
            </a>
          </span>
        </div>

        <GlassButton variant="primary" className="w-full">
          Create Account
        </GlassButton>

        <div className="text-center">
          <span className="text-white/70">Already have an account? </span>
          <button
            onClick={() => setCurrentPage("login")}
            className="text-white hover:underline font-medium"
          >
            Sign in
          </button>
        </div>
      </div>
    </GlassCard>
  </div>
);

export default RegisterPage;
