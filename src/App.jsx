import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  Skills,
  CareerPath,
  Projects,
  About,
  ResumeSection,
  Socials,
} from "./components";
import ParticlesBackground from "./components/ParticlesBackground";
import MovingDotsBackground from "./components/MovingDotsBackground";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticlesBackground theme={theme} />

      {/* <MovingDotsBackground theme={theme} /> */}

      <Navbar theme={theme} setTheme={setTheme} />
      {/* <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 relative z-10"> */}

      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-16 relative z-10">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/career" element={<CareerPath />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<ResumeSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="*" element={<NotFound />} /> {/* catch-all route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
